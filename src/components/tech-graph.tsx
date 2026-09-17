'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type GraphProject = {
  title: string;
  description: string;
  dates?: string;
  technologies: readonly string[];
  images?: readonly string[];
};

type Node = {
  kind: 'project' | 'tech';
  label: string;
  short: string;
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  project?: GraphProject;
  degree: number;
  /** Half label width in px, so nodes stay far enough from the edges for their label. */
  lw: number;
};

type Props = {
  projects: readonly GraphProject[];
  locale: string;
  onSelectProject: (project: GraphProject) => void;
};

const PALETTE = {
  light: { bg: '#f8fafc', project: '#4f46e5', projectHot: '#3730a3', projectText: '#ffffff', tech: '#cbd5e1', techHot: '#4f46e5', label: '#0f172a', techLabel: '#475569', link: 'rgba(79,70,229,0.16)', linkHot: 'rgba(79,70,229,0.9)', dim: 0.25 },
  dark: { bg: '#0b1220', project: '#818cf8', projectHot: '#c7d2fe', projectText: '#0b1220', tech: '#334155', techHot: '#818cf8', label: '#e2e8f0', techLabel: '#94a3b8', link: 'rgba(129,140,248,0.16)', linkHot: 'rgba(129,140,248,0.95)', dim: 0.22 },
};

function initials(title: string) {
  const words = title.replace(/[^\p{L}\p{N} ]/gu, ' ').trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  const caps = title.match(/[A-Z]/g);
  return (caps && caps.length >= 2 ? caps.slice(0, 2).join('') : title.slice(0, 2)).toUpperCase();
}

/**
 * Force-directed graph of every project and every technology used across
 * them. Projects attract the technologies they share, so clusters form
 * naturally (the Next.js cluster, the .NET cluster, the mobile cluster).
 * Pure canvas, no dependency; pauses when off-screen.
 */
export function TechGraph({ projects, locale, onSelectProject }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hover, setHover] = useState<Node | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const [card, setCard] = useState<{ x: number; y: number } | null>(null);
  const isFrench = locale === 'fr';

  const { nodes, links, techCount } = useMemo(() => {
    const techs = Array.from(new Set(projects.flatMap((p) => p.technologies)));
    const usage = (t: string) => projects.filter((p) => p.technologies.includes(t)).length;
    const nodes: Node[] = [
      ...projects.map<Node>((p) => ({ kind: 'project', label: p.title, short: initials(p.title), r: 17, x: 0, y: 0, vx: 0, vy: 0, project: p, degree: p.technologies.length, lw: 40 })),
      ...techs.map<Node>((t) => ({ kind: 'tech', label: t, short: t, r: 4 + usage(t) * 1.6, x: 0, y: 0, vx: 0, vy: 0, degree: usage(t), lw: 30 })),
    ];
    const links: [number, number][] = [];
    projects.forEach((p, i) => p.technologies.forEach((t) => links.push([i, projects.length + techs.indexOf(t)])));
    return { nodes, links, techCount: techs.length };
  }, [projects]);

  const pinnedRef = useRef<string | null>(null);
  const hoverRef = useRef<Node | null>(null);
  useEffect(() => { pinnedRef.current = pinned; }, [pinned]);
  useEffect(() => { hoverRef.current = hover; }, [hover]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const cv = canvasRef.current;
    if (!wrap || !cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let small = false;

    const resize = () => {
      W = wrap.clientWidth;
      H = wrap.clientHeight;
      small = W < 640;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const px = small ? 10 : 12;
      for (const n of nodes) {
        ctx.font = n.kind === 'project'
          ? `600 ${px + 1}px ui-sans-serif, system-ui, sans-serif`
          : `500 ${px}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        n.lw = ctx.measureText(n.label).width / 2 + 6;
      }
    };
    resize();

    // Projects start on an inner ring, technologies on an outer ring.
    const projectsN = nodes.filter((n) => n.kind === 'project').length;
    nodes.forEach((n, i) => {
      const idx = n.kind === 'project' ? i : i - projectsN;
      const total = n.kind === 'project' ? projectsN : nodes.length - projectsN;
      const a = (idx / total) * Math.PI * 2 + (n.kind === 'tech' ? 0.3 : 0);
      const rr = n.kind === 'project' ? 0.22 : 0.42;
      n.x = W / 2 + Math.cos(a) * W * rr;
      n.y = H / 2 + Math.sin(a) * H * rr;
      n.vx = 0;
      n.vy = 0;
    });

    const theme = () => (document.documentElement.classList.contains('dark') ? PALETTE.dark : PALETTE.light);
    const linked = (a: Node, b: Node) => links.some(([i, j]) => (nodes[i] === a && nodes[j] === b) || (nodes[j] === a && nodes[i] === b));
    const focusNode = () => hoverRef.current ?? (pinnedRef.current ? nodes.find((n) => n.label === pinnedRef.current) ?? null : null);

    let drag: Node | null = null;

    const step = () => {
      const scale = small ? 0.7 : 1;
      for (const n of nodes) {
        n.vx += (W / 2 - n.x) * 0.00045;
        n.vy += (H / 2 - n.y) * 0.00045;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d2 = dx * dx + dy * dy + 0.01;
          const min = (a.r + b.r + 38) * scale;
          if (d2 < min * min * 4) {
            const d = Math.sqrt(d2);
            const f = ((min * 2 - d) / d) * 0.02;
            a.vx -= dx * f; a.vy -= dy * f; b.vx += dx * f; b.vy += dy * f;
          }
        }
      }
      for (const [i, j] of links) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 1;
        const f = ((d - 118 * scale) / d) * 0.004;
        a.vx += dx * f; a.vy += dy * f; b.vx -= dx * f; b.vy -= dy * f;
      }
      for (const n of nodes) {
        if (n === drag) continue;
        n.vx *= 0.86; n.vy *= 0.86;
        n.x += n.vx; n.y += n.vy;
        const mx = Math.max(n.r + 10, n.lw);
        n.x = Math.max(mx, Math.min(W - mx, n.x));
        n.y = Math.max(n.r + 10, Math.min(H - n.r - 24, n.y));
      }
    };

    const draw = () => {
      const c = theme();
      const focus = focusNode();
      ctx.clearRect(0, 0, W, H);

      for (const [i, j] of links) {
        const a = nodes[i];
        const b = nodes[j];
        const hot = focus !== null && (a === focus || b === focus);
        ctx.strokeStyle = hot ? c.linkHot : c.link;
        ctx.lineWidth = hot ? 1.6 : 1;
        ctx.globalAlpha = focus && !hot ? c.dim : 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      const labelSize = small ? 10 : 12;
      for (const n of nodes) {
        const hot = focus !== null && (n === focus || linked(focus, n));
        ctx.globalAlpha = focus && !hot ? c.dim + 0.15 : 1;
        if (n.kind === 'project') {
          ctx.fillStyle = hot ? c.projectHot : c.project;
          ctx.shadowColor = c.project;
          ctx.shadowBlur = hot ? 26 : 10;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.fillStyle = c.projectText;
          ctx.font = `700 ${small ? 10 : 11}px ui-sans-serif, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(n.short, n.x, n.y + 0.5);
          ctx.fillStyle = c.label;
          ctx.font = `600 ${labelSize + 1}px ui-sans-serif, system-ui, sans-serif`;
          ctx.fillText(n.label, n.x, n.y + n.r + 13);
        } else {
          ctx.fillStyle = hot ? c.techHot : c.tech;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = hot ? c.label : c.techLabel;
          ctx.font = `${hot ? 600 : 500} ${labelSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(n.label, n.x, n.y + n.r + 11);
        }
      }
      ctx.globalAlpha = 1;
    };

    let frame = 0;
    let running = true;
    const loop = () => {
      if (!running) return;
      if (!reduce) step();
      draw();
      frame = requestAnimationFrame(loop);
    };
    if (reduce) for (let i = 0; i < 260; i++) step();

    const io = new IntersectionObserver((entries) => {
      const visible = entries.some((e) => e.isIntersecting);
      if (visible && !running) { running = true; loop(); }
      if (!visible && running) { running = false; cancelAnimationFrame(frame); }
    });
    io.observe(wrap);
    loop();

    const pos = (e: PointerEvent) => {
      const rect = cv.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top] as const;
    };
    const pick = (x: number, y: number) => nodes.find((n) => Math.hypot(n.x - x, n.y - y) < n.r + 9) ?? null;
    let moved = false;

    const onMove = (e: PointerEvent) => {
      const [x, y] = pos(e);
      if (drag) { drag.x = x; drag.y = y; moved = true; }
      const h = pick(x, y);
      setHover(h);
      cv.style.cursor = h ? (h.kind === 'project' ? 'pointer' : 'grab') : 'default';
      if (h && h.kind === 'project') setCard({ x: Math.min(W - 300, x + 20), y: Math.min(H - 230, y + 16) });
      else setCard(null);
    };
    const onDown = (e: PointerEvent) => {
      const [x, y] = pos(e);
      drag = pick(x, y);
      moved = false;
      if (drag) cv.setPointerCapture(e.pointerId);
    };
    const onUp = () => {
      const target = drag;
      drag = null;
      if (!target || moved) return;
      if (target.kind === 'project' && target.project) onSelectProject(target.project);
      else {
        const label = target.label;
        setPinned((p) => (p === label ? null : label));
      }
    };
    const onLeave = () => { setHover(null); setCard(null); };

    cv.addEventListener('pointermove', onMove);
    cv.addEventListener('pointerdown', onDown);
    cv.addEventListener('pointerup', onUp);
    cv.addEventListener('pointerleave', onLeave);
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
      cv.removeEventListener('pointermove', onMove);
      cv.removeEventListener('pointerdown', onDown);
      cv.removeEventListener('pointerup', onUp);
      cv.removeEventListener('pointerleave', onLeave);
    };
  }, [nodes, links, onSelectProject]);

  const hoveredProject = hover?.kind === 'project' ? hover.project : null;
  const pinnedCount = pinned ? projects.filter((p) => p.technologies.includes(pinned)).length : 0;

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 px-1 text-xs font-medium text-slate-500 dark:text-slate-400">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-2"><i className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400" /> {projects.length} {isFrench ? 'projets' : 'projects'}</span>
          <span className="inline-flex items-center gap-2"><i className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" /> {techCount} {isFrench ? 'technologies' : 'technologies'}</span>
          <span className="hidden sm:inline">{isFrench ? 'Survole, glisse, clique' : 'Hover, drag, click'}</span>
        </div>
        {pinned && (
          <button
            type="button"
            onClick={() => setPinned(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold"
          >
            {pinned} · {pinnedCount} {isFrench ? (pinnedCount > 1 ? 'projets' : 'projet') : (pinnedCount > 1 ? 'projects' : 'project')}
            <X size={12} />
          </button>
        )}
      </div>

      <div
        ref={wrapRef}
        className="relative w-full h-[680px] sm:h-[640px] lg:h-[720px] rounded-[2rem] overflow-hidden border border-white dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm"
        role="img"
        aria-label={isFrench ? 'Graphe des projets et des technologies utilisées' : 'Graph of projects and technologies used'}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block touch-none" />

        {hoveredProject && card && (
          <div
            className="absolute z-10 w-[280px] max-w-[calc(100%-2rem)] pointer-events-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-xl"
            style={{ left: card.x, top: card.y }}
          >
            {hoveredProject.images && hoveredProject.images[0] && (
              <Image src={hoveredProject.images[0]} alt="" width={560} height={315} sizes="280px" className="w-full aspect-[16/9] object-cover object-top" />
            )}
            <div className="p-3">
              <p className="font-bold text-slate-900 dark:text-white text-sm">{hoveredProject.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">{hoveredProject.description}</p>
              {hoveredProject.dates && <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 mt-1.5">{hoveredProject.dates}</p>}
            </div>
          </div>
        )}
      </div>

      {/* Same information as plain text for screen readers and crawlers */}
      <ul className="sr-only">
        {projects.map((p) => (
          <li key={p.title}>{p.title}: {p.technologies.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}
