'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/**
 * Animates a figure like "-78 %", "4000+" or "3+" from 0 to its value when
 * it scrolls into view. Non-numeric prefix/suffix are preserved.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const match = value.match(/^([^\d]*)(\d+(?:[\s,.]\d+)*)(.*)$/);
  const prefix = match?.[1] ?? '';
  const numeric = match ? parseFloat(match[2].replace(/[\s,]/g, '')) : NaN;
  const suffix = match?.[3] ?? '';
  const hasThousands = /[\s,]/.test(match?.[2] ?? '');
  const [display, setDisplay] = useState(reduce || isNaN(numeric) ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!inView || reduce || isNaN(numeric)) return;
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const rounded = Math.round(v);
        const formatted = hasThousands ? rounded.toLocaleString('fr-CA').replace(/ /g, ' ') : String(rounded);
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, reduce, numeric, prefix, suffix, value, hasThousands]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
