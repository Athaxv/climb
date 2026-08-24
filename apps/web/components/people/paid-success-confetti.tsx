"use client";

import { prefersReducedMotion } from "@/lib/claim-scroll";
import { useEffect, useRef } from "react";

const COLORS = ["#3b6ff0", "#6b8ff5", "#ffffff", "#f5c542", "#50c05f", "#f7f5f1"];
const DURATION_MS = 2800;

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  rot: number;
  vr: number;
  color: string;
  drag: number;
};

function spawn(
  width: number,
  height: number,
  originX: number,
  originY: number,
  count: number,
  angle: number,
  spread: number,
): Piece[] {
  const pieces: Piece[] = [];
  for (let i = 0; i < count; i++) {
    const dir = angle + (Math.random() - 0.5) * spread;
    const speed = 7 + Math.random() * 11;
    pieces.push({
      x: originX * width,
      y: originY * height,
      vx: Math.cos(dir) * speed,
      vy: Math.sin(dir) * speed,
      w: 6 + Math.random() * 8,
      h: 8 + Math.random() * 10,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.35,
      color: COLORS[i % COLORS.length]!,
      drag: 0.985 + Math.random() * 0.01,
    });
  }
  return pieces;
}

function dropPaidQuery() {
  const url = new URL(window.location.href);
  if (url.searchParams.get("paid") !== "1") return;
  url.searchParams.delete("paid");
  const search = url.searchParams.toString();
  window.history.replaceState(null, "", `${url.pathname}${search ? `?${search}` : ""}${url.hash}`);
}

export function PaidSuccessConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    dropPaidQuery();
    if (prefersReducedMotion()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const { innerWidth: w, innerHeight: h } = window;
    const pieces = [
      ...spawn(w, h, 0.5, 0, 70, Math.PI / 2, 1.4),
      ...spawn(w, h, 0.15, 0, 55, Math.PI / 2, 1.1),
      ...spawn(w, h, 0.85, 0, 55, Math.PI / 2, 1.1),
    ];

    const gravity = 0.18;
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - started;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const fade = elapsed > DURATION_MS - 500 ? Math.max(0, (DURATION_MS - elapsed) / 500) : 1;
      for (const piece of pieces) {
        piece.vy += gravity;
        piece.vx *= piece.drag;
        piece.vy *= piece.drag;
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.rot += piece.vr;
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.rot);
        ctx.globalAlpha = fade;
        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
        ctx.restore();
      }
      if (elapsed < DURATION_MS) {
        frame = window.requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    frame = window.requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-[80]" />;
}
