"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Counts a stat like "850+" up from 0 when it scrolls into view.
 * The server renders the final value (no-JS, SEO); the client resets it to 0
 * before paint and animates. Prefix/suffix characters are kept as-is.
 */
export default function CountUp({
  value,
  duration = 2000,
  delay = 0,
}: {
  value: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [, prefix = "", digits = "", suffix = ""] = value.match(/^(\D*)([\d,]+)(.*)$/) ?? [];
  const target = Number(digits.replace(/,/g, ""));

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !digits) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n: number) => n.toLocaleString("en-IN");
    let frame = 0;
    let timer = 0;
    el.textContent = "0";

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4); // easeOutQuart
        el.textContent = format(Math.round(target * eased));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          timer = window.setTimeout(run, delay);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      el.textContent = format(target);
    };
  }, [digits, target, duration, delay]);

  if (!digits) return <>{value}</>;
  return (
    <span className="tabular-nums">
      {prefix}
      <span ref={ref}>{digits}</span>
      {suffix}
    </span>
  );
}
