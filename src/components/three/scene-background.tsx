'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Ambient 3D background: a drifting particle field plus two slowly rotating
 * wireframe solids, with a soft parallax following the pointer. Colors follow
 * the dark/light theme, rendering pauses when the tab is hidden, and the
 * whole thing degrades to a single static frame under prefers-reduced-motion.
 *
 * Loaded with next/dynamic (ssr: false) so three.js never ships in the
 * server bundle and only downloads once the page is interactive.
 */
export default function SceneBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = window.innerWidth < 768;

    // --- Renderer -----------------------------------------------------------
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 14;

    // --- Theme-aware palette -----------------------------------------------
    const isDark = () => document.documentElement.classList.contains('dark');
    const palette = {
      dark: { particle: new THREE.Color('#818cf8'), wire: new THREE.Color('#6366f1'), wire2: new THREE.Color('#22d3ee') },
      light: { particle: new THREE.Color('#6366f1'), wire: new THREE.Color('#4f46e5'), wire2: new THREE.Color('#0891b2') },
    };

    // --- Particles ----------------------------------------------------------
    const count = isSmall ? 220 : 520;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
      speeds[i] = 0.2 + Math.random() * 0.6;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      transparent: true,
      opacity: isDark() ? 0.55 : 0.45,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Wireframe solids ---------------------------------------------------
    const wireMat = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.3 });
    const wireMat2 = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.2 });
    const icosa = new THREE.Mesh(new THREE.IcosahedronGeometry(3.2, 1), wireMat);
    icosa.position.set(13, 5.5, -4);
    const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(1.6, 0.45, 96, 12), wireMat2);
    torus.position.set(-13.5, -5, -5);
    scene.add(icosa, torus);

    const applyTheme = () => {
      const p = isDark() ? palette.dark : palette.light;
      particleMat.color.copy(p.particle);
      particleMat.opacity = isDark() ? 0.55 : 0.45;
      wireMat.color.copy(p.wire);
      wireMat2.color.copy(p.wire2);
    };
    applyTheme();
    const themeObserver = new MutationObserver(applyTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // --- Interaction --------------------------------------------------------
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let scrollY = window.scrollY;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // --- Loop ---------------------------------------------------------------
    let frame = 0;
    let running = true;
    const clock = new THREE.Clock();
    const pos = particleGeo.attributes.position as THREE.BufferAttribute;

    const render = () => {
      const t = clock.getElapsedTime();
      pointer.x += (target.x - pointer.x) * 0.04;
      pointer.y += (target.y - pointer.y) * 0.04;

      for (let i = 0; i < count; i++) {
        let y = pos.getY(i) + speeds[i] * 0.004;
        if (y > 12) y = -12;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;

      particles.rotation.y = t * 0.02 + pointer.x * 0.08;
      particles.rotation.x = pointer.y * 0.05;
      particles.position.y = scrollY * 0.0015;

      icosa.rotation.x = t * 0.12 + pointer.y * 0.2;
      icosa.rotation.y = t * 0.18 + pointer.x * 0.3;
      icosa.position.y = 5.5 + Math.sin(t * 0.6) * 0.4 + scrollY * 0.002;

      torus.rotation.x = t * 0.1;
      torus.rotation.z = t * 0.14 + pointer.x * 0.2;
      torus.position.y = -5 + Math.cos(t * 0.5) * 0.4 + scrollY * 0.0025;

      camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.03;
      camera.position.y += (-pointer.y * 0.4 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    const loop = () => {
      if (!running) return;
      render();
      frame = requestAnimationFrame(loop);
    };

    if (reduceMotion) {
      render();
    } else {
      loop();
    }

    const onVisibility = () => {
      if (reduceMotion) return;
      running = document.visibilityState === 'visible';
      if (running) loop();
      else cancelAnimationFrame(frame);
    };
    document.addEventListener('visibilitychange', onVisibility);

    // --- Cleanup ------------------------------------------------------------
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      themeObserver.disconnect();
      particleGeo.dispose();
      particleMat.dispose();
      icosa.geometry.dispose();
      torus.geometry.dispose();
      wireMat.dispose();
      wireMat2.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none [&>canvas]:block"
    />
  );
}
