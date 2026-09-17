'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { CATEGORY_LABEL, categoryOf, expandStack, type TechCategory } from '@/data/tech-graph';

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
  category?: TechCategory;
  usage: number;
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  project?: GraphProject;
  /** Half label width in px, so nodes stay far enough from the edges for their label. */
  lw: number;
};

type Props = {
  projects: readonly GraphProject[];
  locale: string;
  /** Technologies currently selected in the page filters (canonical names). */
  selectedTechs: readonly string[];
  onToggleTech: (tech: string) => void;
  onSelectProject: (project: GraphProject) => void;
};

const CATEGORY_COLOR: Record<TechCategory, { light: string; dark: string }> = {
  language: { light: '#d97706', dark: '#fbbf24' },
  framework: { light: '#2563eb', dark: '#60a5fa' },
  database: { light: '#059669', dark: '#34d399' },
  cloud: { light: '#0891b2', dark: '#22d3ee' },
  library: { light: '#64748b', dark: '#94a3b8' },
  service: { light: '#db2777', dark: '#f472b6' },
};

const THEME = {
  light: { project: '#4f46e5', projectHot: '#312e81', projectText: '#ffffff', label: '#0f172a', techLabel: '#475569', link: 'rgba(100,116,139,0.18)', linkHot: 'rgba(79,70,229,0.9)' },
  dark: { project: '#6366f1', projectHot: '#c7d2fe', projectText: '#ffffff', label: '#f1f5f9', techLabel: '#94a3b8', link: 'rgba(148,163,184,0.14)', linkHot: 'rgba(165,180,252,0.95)' },
};

const ORDER: TechCategory[] = ['language', 'framework', 'database', 'cloud', 'library', 'service'];

function initials(title: string) {
  const words = title.replace(/[^\p{L}\p{N} ]/gu, ' ').trim().split(/\s+/);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  const caps = title.match(/[A-Z]/g);
  return (caps && caps.length >= 2 ? caps.slice(0, 2).join('') : title.slice(0, 2)).toUpperCase();
}

function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, r: number) {
  const h = s / 2;
  ctx.beginPath();
  ctx.moveTo(x - h + r, y - h);
  ctx.arcTo(x + h, y - h, x + h, y + h, r);
  ctx.arcTo(x + h, y + h, x - h, y + h, r);
  ctx.arcTo(x - h, y + h, x - h, y - h, r);
  ctx.arcTo(x - h, y - h, x + h, y - h, r);
  ctx.closePath();
}

/**
 * Force-directed graph of every project and every technology used across
 * them (including implied ones: Next.js ⇒ React ⇒ JavaScript). Projects are
 * rounded squares, technologies are circles sized by how many projects use
 * them and colored by category. Pure canvas, no dependency.
 */
export function TechGraph({ projects, locale, selectedTechs, onToggleTech, onSelectProject }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hover, setHover] = useState<Node | null>(null);
  const [card, setCard] = useState<{ x: number; y: number } | null>(null);
  const [category, setCategory] = useState<TechCategory | null>(null);
  const isFrench = locale === 'fr';
  const lang = isFrench ? 'fr' : 'en';

  const { nodes, links, techCount, stacks } = useMemo(() => {
    const stacks = projects.map((p) => expandStack(p.technologies));
    const usage = new Map<string, number>();
    stacks.forEach((s) => s.forEach((t) => usage.set(t, (usage.get(t) ?? 0) + 1)));
    const techs = Array.from(usage.keys()).sort((a, b) => (usage.get(b)! - usage.get(a)!) || a.localeCompare(b));
    const nodes: Node[] = [
      ...projects.map<Node>((p) => ({ kind: 'project', label: p.title, short: initials(p.title), usage: 0, r: 21, x: 0, y: 0, vx: 0, vy: 0, project: p, lw: 40 })),
      ...techs.map<Node>((t) => {
        const u = usage.get(t)!;
        return { kind: 'tech', label: t, short: t, category: categoryOf(t), usage: u, r: Math.min(34, 5 + u * 2.6), x: 0, y: 0, vx: 0, vy: 0, lw: 30 };
      }),
    ];
    const links: [number, number][] = [];
    stacks.forEach((s, i) => s.forEach((t) => links.push([i, projects.length + techs.indexOf(t)])));
    return { nodes, links, techCount: techs.length, stacks };
  }, [projects]);

  // Projects that match every selected technology (same AND logic as the grid).
  const matching = useMemo(() => {
    if (selectedTechs.length === 0) return null;
    return new Set(projects.filter((_, i) => selectedTechs.every((t) => stacks[i].includes(t))).map((p) => p.title));
  }, [projects, stacks, selectedTechs]);

  const stateRef = useRef({ hover: null as Node | null, selected: selectedTechs, matching, category });
  useEffect(() => { stateRef.current = { hover, selected: selectedTechs, matching, category }; }, [hover, selectedTechs, matching, category]);

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
          ? `700 ${px + 1}px ui-sans-serif, system-ui, sans-serif`
          : `500 ${px}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        n.lw = ctx.measureText(n.label).width / 2 + 6;
      }
    };
    resize();

    // Projects start on an inner ring, technologies on an outer ring.
    const projectsN = projects.length;
    nodes.forEach((n, i) => {
      const idx = n.kind === 'project' ? i : i - projectsN;
      const total = n.kind === 'project' ? projectsN : nodes.length - projectsN;
      const a = (idx / total) * Math.PI * 2 + (n.kind === 'tech' ? 0.3 : 0);
      const rr = n.kind === 'project' ? 0.24 : 0.42;
      n.x = W / 2 + Math.cos(a) * W * rr;
      n.y = H / 2 + Math.sin(a) * H * rr;
      n.vx = 0;
      n.vy = 0;
    });

    const isDark = () => document.documentElement.classList.contains('dark');
    const adjacency = new Map<Node, Set<Node>>();
    for (const [i, j] of links) {
      if (!adjacency.has(nodes[i])) adjacency.set(nodes[i], new Set());
      if (!adjacency.has(nodes[j])) adjacency.set(nodes[j], new Set());
      adjacency.get(nodes[i])!.add(nodes[j]);
      adjacency.get(nodes[j])!.add(nodes[i]);
    }
    const linked = (a: Node, b: Node) => adjacency.get(a)?.has(b) ?? false;

    // Visibility of a node under the current category / selection filters.
    const visible = (n: Node) => {
      const { category: cat, selected, matching: m } = stateRef.current;
      if (n.kind === 'tech') {
        if (cat && n.category !== cat) return false;
        if (m && selected.length && !selected.includes(n.label)) {
          // keep techs used by at least one matching project
          return Array.from(adjacency.get(n) ?? []).some((p) => m.has(p.label));
        }
        return true;
      }
      return m ? m.has(n.label) : true;
    };

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
          const min = (a.r + b.r + 40) * scale;
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
        const rest = (110 + b.r) * scale;
        const f = ((d - rest) / d) * 0.0035;
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
      const dark = isDark();
      const c = dark ? THEME.dark : THEME.light;
      const { hover: focus, selected } = stateRef.current;
      const selectedNodes = new Set(nodes.filter((n) => n.kind === 'tech' && selected.includes(n.label)));
      const hasFilter = selected.length > 0 || stateRef.current.category !== null;
      ctx.clearRect(0, 0, W, H);

      const emphasis = (n: Node) => {
        if (!visible(n)) return 0.08;
        if (focus) return n === focus || linked(focus, n) ? 1 : 0.2;
        if (selectedNodes.has(n)) return 1;
        return hasFilter ? 0.85 : 1;
      };

      for (const [i, j] of links) {
        const a = nodes[i];
        const b = nodes[j];
        if (!visible(a) || !visible(b)) continue;
        const hot = (focus !== null && (a === focus || b === focus)) || selectedNodes.has(a) || selectedNodes.has(b);
        ctx.strokeStyle = hot ? c.linkHot : c.link;
        ctx.lineWidth = hot ? 1.6 : 1;
        ctx.globalAlpha = focus && !hot ? 0.25 : 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      const labelSize = small ? 10 : 12;
      // technologies first, projects on top
      const ordered = [...nodes.filter((n) => n.kind === 'tech'), ...nodes.filter((n) => n.kind === 'project')];
      for (const n of ordered) {
        const e = emphasis(n);
        ctx.globalAlpha = e;
        const hot = e === 1 && (focus !== null || selectedNodes.has(n));
        if (n.kind === 'project') {
          const s = n.r * 2;
          ctx.fillStyle = hot ? c.projectHot : c.project;
          ctx.shadowColor = c.project;
          ctx.shadowBlur = hot ? 28 : 12;
          roundedRect(ctx, n.x, n.y, s, 12);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.fillStyle = hot && dark ? '#0b1220' : c.projectText;
          ctx.font = `800 ${small ? 11 : 13}px ui-sans-serif, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(n.short, n.x, n.y + 1);
          ctx.fillStyle = c.label;
          ctx.font = `700 ${labelSize + 1}px ui-sans-serif, system-ui, sans-serif`;
          ctx.fillText(n.label, n.x, n.y + n.r + 14);
        } else {
          const col = CATEGORY_COLOR[n.category ?? 'library'][dark ? 'dark' : 'light'];
          ctx.fillStyle = col;
          ctx.globalAlpha = e * (hot ? 1 : 0.55);
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = e;
          ctx.strokeStyle = col;
          ctx.lineWidth = hot ? 2.5 : 1.5;
          ctx.stroke();
          if (n.r >= 14) {
            ctx.fillStyle = dark ? '#0b1220' : '#ffffff';
            ctx.font = `700 ${Math.max(9, Math.min(12, n.r * 0.55))}px ui-sans-serif, system-ui, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(String(n.usage), n.x, n.y + 0.5);
          }
          ctx.fillStyle = hot ? c.label : c.techLabel;
          ctx.font = `${hot ? 700 : 500} ${labelSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const label = hot ? `${n.label} · ${n.usage}` : n.label;
          ctx.fillText(label, n.x, n.y + n.r + 11);
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
      const vis = entries.some((e) => e.isIntersecting);
      if (vis && !running) { running = true; loop(); }
      if (!vis && running) { running = false; cancelAnimationFrame(frame); }
    });
    io.observe(wrap);
    loop();

    const pos = (e: PointerEvent) => {
      const rect = cv.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top] as const;
    };
    const pick = (x: number, y: number) =>
      [...nodes].reverse().find((n) => visible(n) && Math.hypot(n.x - x, n.y - y) < n.r + 8) ?? null;
    let moved = false;

    const onMove = (e: PointerEvent) => {
      const [x, y] = pos(e);
      if (drag) { drag.x = x; drag.y = y; moved = true; }
      const h = pick(x, y);
      setHover(h);
      cv.style.cursor = h ? 'pointer' : 'default';
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
      else onToggleTech(target.label);
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
  }, [nodes, links, projects.length, onSelectProject, onToggleTech]);

  const hoveredProject = hover?.kind === 'project' ? hover.project : null;
  const matchCount = matching ? matching.size : projects.length;

  return (
    <div className="relative">
      {/* Legend + category filter */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 px-1 text-xs font-medium text-slate-500 dark:text-slate-400">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 mr-2">
            <i className="w-3.5 h-3.5 rounded-[4px] bg-indigo-600 dark:bg-indigo-500" />
            {matchCount}/{projects.length} {isFrench ? 'projets' : 'projects'}
          </span>
          {ORDER.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={category === cat}
              onClick={() => setCategory((c) => (c === cat ? null : cat))}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-colors ${
                category === cat
                  ? 'border-slate-400 dark:border-slate-500 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100'
                  : 'border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'
              } ${category && category !== cat ? 'opacity-50' : ''}`}
            >
              <i className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: CATEGORY_COLOR[cat].light }} />
              {CATEGORY_LABEL[cat][lang]}
            </button>
          ))}
        </div>
        <span className="hidden md:inline">{techCount} {isFrench ? 'technologies · le chiffre = nombre de projets' : 'technologies · number = projects using it'}</span>
      </div>

      <div
        ref={wrapRef}
        className="relative w-full h-[680px] sm:h-[640px] lg:h-[740px] rounded-[2rem] overflow-hidden border border-white dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-sm"
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
        {projects.map((p, i) => (
          <li key={p.title}>{p.title}: {stacks[i].join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}
