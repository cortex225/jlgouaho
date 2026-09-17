'use client';

import { useEffect } from 'react';

/**
 * Tracks the pointer over every element marked with `data-spotlight` and
 * exposes the position as CSS variables (--mx / --my). The glow itself is
 * drawn in globals.css so this stays a single cheap listener.
 */
export function Spotlight() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-spotlight]');
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      target.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
  return null;
}
