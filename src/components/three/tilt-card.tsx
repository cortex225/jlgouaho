'use client';

import React, { useRef } from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** Max rotation in degrees. */
  max?: number;
};

/**
 * Perspective tilt that follows the pointer (pure CSS 3D transform, no
 * library). Disabled on touch devices and under prefers-reduced-motion.
 */
export function TiltCard({ max = 6, className = '', style, children, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`will-change-transform transition-transform duration-300 ease-out [transform-style:preserve-3d] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
