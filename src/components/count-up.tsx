"use client";

import { useEffect, useRef } from "react";

/**
 * Counts from zero up to the target once the number scrolls into view.
 * The final value is in the markup from the start, so it is what search
 * engines and readers without JavaScript see.
 */
export function CountUp({
  to,
  prefix = "",
  duration = 2200,
}: {
  to: number;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // Desacelera no fim, para o número assentar em vez de travar.
          const eased = 1 - Math.pow(1 - t, 3);
          element.textContent = `${prefix}${Math.round(to * eased)}`;
          if (t < 1) requestAnimationFrame(tick);
        };

        element.textContent = `${prefix}0`;
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [to, prefix, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {to}
    </span>
  );
}
