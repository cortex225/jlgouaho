'use client';

import { useEffect, useRef, useState } from 'react';

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & { src: string };

/**
 * Only attaches the video source once the element is near the viewport, so
 * the three demo videos on the home page no longer download on first paint.
 */
export function LazyVideo({ src, className, ...props }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={ready ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
      {...props}
    />
  );
}
