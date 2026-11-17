'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// useLayoutEffect warns on the server; fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Animates a figure like "-78 %", "4000+" or "3+" from 0 to its value when
 * it scrolls into view. Non-numeric prefix/suffix are preserved.
 *
 * The real value is what the server renders, so search engines, link
 * previews and no-JS readers see "4+" and "-78%", never "0+". Only once the
 * component is mounted in a browser (before the first paint) is it reset to
 * 0 for the animation.
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
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (started.current) return;
    // Reduced motion (or a value with no number): show the final value as is.
    setDisplay(reduce || isNaN(numeric) ? value : `${prefix}0${suffix}`);
  }, [reduce, numeric, prefix, suffix, value]);

  useEffect(() => {
    if (!inView || reduce || isNaN(numeric)) return;
    started.current = true;
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
