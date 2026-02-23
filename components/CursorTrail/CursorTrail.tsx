"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
}

const LIFETIME = 600;   // ms a point lives
const MAX_PTS  = 24;    // max trail length
const THROTTLE = 12;    // ms between captured points (~80fps cap)

export default function CursorTrail() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const points     = useRef<Point[]>([]);
  const lastCapture = useRef(0);
  const rafId      = useRef<number>(0);
  const lastTime   = useRef(Date.now());
  const accentRgb  = useRef("0, 255, 136");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const readAccent = () => {
      const val = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-rgb").trim();
      if (val) accentRgb.current = val;
    };
    readAccent();

    // Re-read accent color when theme changes
    const observer = new MutationObserver(() => readAccent());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastCapture.current < THROTTLE) return;
      lastCapture.current = now;
      points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (points.current.length > MAX_PTS) points.current.shift();
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      const now = Date.now();
      const dt  = now - lastTime.current;
      lastTime.current = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // age and prune
      points.current = points.current
        .map((p) => ({ ...p, age: p.age + dt }))
        .filter((p) => p.age < LIFETIME);

      const rgb = accentRgb.current;

      points.current.forEach((p) => {
        const progress = p.age / LIFETIME;          // 0 → 1
        const alpha    = (1 - progress) * 0.55;
        const radius   = (1 - progress) * 3.5;

        // outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.18})`;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fill();
      });

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
