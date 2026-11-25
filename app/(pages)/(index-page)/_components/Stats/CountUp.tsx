'use client';

import { useEffect, useRef } from 'react';

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // ms
};

// Counts the first time something scrolls into view
// secret chinese tech: write text to DOM so animation doesn't re-render React 60 times per sec
export default function CountUp({
  to,
  prefix = '',
  suffix = '',
  duration = 1500,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const final = `${prefix}${to}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const show = (n: number) => {
      el.textContent = `${prefix}${n}${suffix}`;
    };
    show(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // number moves fast at first -> slows down closer to final number
          show(Math.round(to * (1 - (1 - t) ** 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, prefix, suffix, duration]);

  return (
    <>
      {/* use min-width = final length so the centered text
          doesn't shift while digits change */}
      <span
        ref={ref}
        aria-hidden="true"
        className="inline-block text-center"
        style={{ minWidth: `${final.length}ch` }}
      >
        {final}
      </span>
      <span className="sr-only">{final}</span>
    </>
  );
}
