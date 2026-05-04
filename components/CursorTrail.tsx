"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices (no fine pointer)
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    if (!canvas || !dot) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth * window.devicePixelRatio);
    let height = (canvas.height = window.innerHeight * window.devicePixelRatio);
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles: Particle[] = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastSpawn = 0;

    // Tag body so we can hide native cursor via CSS
    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Move dot
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;

      // Spawn particles, throttled
      const now = performance.now();
      if (now - lastSpawn > 16) {
        lastSpawn = now;
        // 1-2 particles per spawn
        for (let i = 0; i < 2; i++) {
          particles.push({
            x: mouseX + (Math.random() - 0.5) * 4,
            y: mouseY + (Math.random() - 0.5) * 4,
            size: 1.5 + Math.random() * 1.8,
            alpha: 0.6 + Math.random() * 0.3,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6 + 0.2,
          });
        }
        // Cap particle count
        if (particles.length > 80) particles.splice(0, particles.length - 80);
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const handleEnter = () => {
      dot.style.opacity = "1";
    };
    const handleLeave = () => {
      dot.style.opacity = "0";
    };

    // Subtle scale pulse on click
    const handleDown = () => {
      dot.style.transform += " scale(2)";
    };
    const handleUp = () => {
      dot.style.transform = dot.style.transform.replace(" scale(2)", "");
    };

    let rafId = 0;
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.022;
        p.size *= 0.985;

        if (p.alpha <= 0 || p.size < 0.3) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${p.alpha})`;
        ctx.shadowColor = "rgba(57, 255, 20, 0.8)";
        ctx.shadowBlur = 6;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("resize", handleResize);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      {/* Particle canvas (full screen, behind dot) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998] hidden md:block"
      />
      {/* Custom cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#39FF14",
          boxShadow: "0 0 8px #39FF14, 0 0 16px rgba(57,255,20,0.6)",
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
