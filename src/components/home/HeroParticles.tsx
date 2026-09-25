"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  r: number;
  speed: number;
  sway: number;
  phase: number;
  twinkle: number;
  color: string;
  alpha: number;
};

// Brand blue, brand green, and a light sky tint as RGB triplets
const COLORS = ["49,197,240", "49,197,240", "178,208,85", "125,215,245"];

/**
 * Soft glowing light motes that drift upward with a gentle sway and twinkle.
 * Deliberately no connecting lines or hard edges, so the effect reads as light
 * rather than cells or molecules.
 */
export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let motes: Mote[] = [];
    let frame = 0;
    let visible = true;
    let last = performance.now();

    const spawn = (y?: number): Mote => ({
      x: Math.random() * width,
      y: y ?? height + 20,
      r: Math.random() * 4 + 2.5,
      speed: Math.random() * 25 + 15, // px per second
      sway: Math.random() * 20 + 8,
      phase: Math.random() * Math.PI * 2,
      twinkle: Math.random() * 1.5 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.35 + 0.6,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((width * height) / 11000));
      motes = Array.from({ length: count }, () => spawn(Math.random() * height));
      draw(performance.now());
    };

    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, width, height);
      for (const m of motes) {
        const x = m.x + Math.sin(t * 0.6 + m.phase) * m.sway;
        const flicker = 0.65 + 0.35 * Math.sin(t * m.twinkle + m.phase);
        // Fade in near the bottom and out near the top
        const edge = Math.min(1, m.y / (height * 0.2), (height - m.y + 20) / (height * 0.15));
        const a = m.alpha * flicker * Math.max(0, edge);

        const glow = ctx.createRadialGradient(x, m.y, 0, x, m.y, m.r * 4);
        glow.addColorStop(0, `rgba(${m.color},${a})`);
        glow.addColorStop(0.35, `rgba(${m.color},${a * 0.35})`);
        glow.addColorStop(1, `rgba(${m.color},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, m.y, m.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      for (let i = 0; i < motes.length; i++) {
        motes[i].y -= motes[i].speed * dt;
        if (motes[i].y < -20) motes[i] = spawn();
      }
      draw(now);
      frame = visible ? requestAnimationFrame(loop) : 0;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Pause while the hero is scrolled out of view
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame && !reduceMotion) {
        last = performance.now();
        frame = requestAnimationFrame(loop);
      }
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
