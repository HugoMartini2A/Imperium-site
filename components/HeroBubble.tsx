"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Total duration of the punch animation (bubble 550ms + shockwave 700ms + cracks 600ms).
// We lock new triggers for this duration to avoid stutter from rapid re-entries.
const PUNCH_LOCK_MS = 700;

// Shards flying out
const SHARDS = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
  const dist = 200 + Math.random() * 120;
  return {
    id: i,
    x: Math.cos(angle) * dist,
    y: Math.sin(angle) * dist,
    rotate: (Math.random() - 0.5) * 180,
    size: 4 + Math.random() * 8,
    delay: Math.random() * 0.06,
  };
});

// Crack lines — jagged paths radiating from center (fixed, deterministic)
// 8 cracks with branches. Coordinates relative to a 600x600 viewBox, center at 300,300.
const CRACKS = [
  "M300 300 L290 220 L300 200 L285 150 L295 110 L280 80",
  "M300 300 L380 250 L395 215 L450 175 L475 130 L495 95",
  "M300 300 L420 320 L470 310 L520 330 L555 315",
  "M300 300 L380 380 L405 425 L440 470 L455 510 L450 555",
  "M300 300 L300 400 L315 460 L300 510 L320 565",
  "M300 300 L220 380 L185 415 L155 470 L125 510 L105 555",
  "M300 300 L170 320 L130 305 L80 320 L45 305",
  "M300 300 L210 220 L175 200 L130 165 L95 130",
  // small branches
  "M340 230 L370 215 L395 195",
  "M385 290 L420 280",
  "M340 380 L355 410",
  "M260 380 L240 410",
  "M215 290 L180 280",
  "M260 230 L235 215 L210 195",
];

export default function HeroBubble() {
  const [punch, setPunch] = useState(false);
  const lockRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  // Trigger a punch. Locked while the animation is playing so rapid re-entries
  // of the bubble (moving the cursor in/out repeatedly) don't restart it mid-way,
  // which previously caused visible stutter. Also no-op if the user has
  // requested reduced motion.
  const triggerPunch = () => {
    if (prefersReducedMotion) return;
    if (lockRef.current) return;
    lockRef.current = true;
    setPunch(true);
    window.setTimeout(() => {
      setPunch(false);
      lockRef.current = false;
    }, PUNCH_LOCK_MS);
  };

  return (
    <motion.div
      className="relative flex items-center justify-center"
      onMouseEnter={triggerPunch}
      // No onMouseLeave: leaving the bubble mid-animation used to cut the cracks
      // and shards abruptly. The lock above already ensures the animation completes
      // cleanly before another can fire.
      // Camera shake on punch
      animate={
        punch
          ? { x: [0, -6, 8, -5, 4, -2, 0], y: [0, 4, -3, 2, -1, 0] }
          : { x: 0, y: 0 }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* ── Animated radiating rays (aura) ──────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-[640px] h-[640px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(57,255,20,0) 0deg, rgba(57,255,20,0.25) 8deg, rgba(57,255,20,0) 16deg, rgba(57,255,20,0) 30deg, rgba(57,255,20,0.18) 38deg, rgba(57,255,20,0) 46deg, rgba(57,255,20,0) 60deg, rgba(57,255,20,0.22) 68deg, rgba(57,255,20,0) 76deg, rgba(57,255,20,0) 90deg, rgba(57,255,20,0.16) 98deg, rgba(57,255,20,0) 106deg, rgba(57,255,20,0) 120deg, rgba(57,255,20,0.24) 128deg, rgba(57,255,20,0) 136deg, rgba(57,255,20,0) 150deg, rgba(57,255,20,0.18) 158deg, rgba(57,255,20,0) 166deg, rgba(57,255,20,0) 180deg, rgba(57,255,20,0.22) 188deg, rgba(57,255,20,0) 196deg, rgba(57,255,20,0) 210deg, rgba(57,255,20,0.16) 218deg, rgba(57,255,20,0) 226deg, rgba(57,255,20,0) 240deg, rgba(57,255,20,0.24) 248deg, rgba(57,255,20,0) 256deg, rgba(57,255,20,0) 270deg, rgba(57,255,20,0.18) 278deg, rgba(57,255,20,0) 286deg, rgba(57,255,20,0) 300deg, rgba(57,255,20,0.22) 308deg, rgba(57,255,20,0) 316deg, rgba(57,255,20,0) 330deg, rgba(57,255,20,0.16) 338deg, rgba(57,255,20,0) 346deg)",
            maskImage:
              "radial-gradient(circle, transparent 35%, black 45%, black 70%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 35%, black 45%, black 70%, transparent 90%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-[560px] h-[560px] rounded-full opacity-60"
          style={{
            background:
              "conic-gradient(from 45deg, rgba(57,255,20,0) 0deg, rgba(57,255,20,0.15) 12deg, rgba(57,255,20,0) 24deg, rgba(57,255,20,0) 60deg, rgba(57,255,20,0.18) 72deg, rgba(57,255,20,0) 84deg, rgba(57,255,20,0) 120deg, rgba(57,255,20,0.15) 132deg, rgba(57,255,20,0) 144deg, rgba(57,255,20,0) 180deg, rgba(57,255,20,0.18) 192deg, rgba(57,255,20,0) 204deg, rgba(57,255,20,0) 240deg, rgba(57,255,20,0.15) 252deg, rgba(57,255,20,0) 264deg, rgba(57,255,20,0) 300deg, rgba(57,255,20,0.18) 312deg, rgba(57,255,20,0) 324deg)",
            maskImage:
              "radial-gradient(circle, transparent 38%, black 48%, black 65%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 38%, black 48%, black 65%, transparent 85%)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-[440px] h-[440px] rounded-full"
          animate={{
            boxShadow: [
              "0 0 60px 20px rgba(57,255,20,0.15), 0 0 120px 40px rgba(57,255,20,0.08)",
              "0 0 100px 40px rgba(57,255,20,0.3), 0 0 200px 80px rgba(57,255,20,0.15)",
              "0 0 60px 20px rgba(57,255,20,0.15), 0 0 120px 40px rgba(57,255,20,0.08)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Shockwave ring (expanding outward on punch) ──────────────── */}
      <AnimatePresence>
        {punch && (
          <motion.div
            key="shockwave"
            className="absolute rounded-full border-2 border-neon-green pointer-events-none"
            style={{ boxShadow: "0 0 40px rgba(57,255,20,0.6)" }}
            initial={{ width: 320, height: 320, opacity: 0.9 }}
            animate={{ width: 720, height: 720, opacity: 0, borderWidth: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* ── Flash burst on impact ──────────────────────────────────── */}
      <AnimatePresence>
        {punch && (
          <motion.div
            key="flash"
            className="absolute w-[440px] h-[440px] rounded-full pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(57,255,20,0.6) 30%, transparent 60%)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 1.4] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* ── The bubble itself ──────────────────────────────────────── */}
      <motion.div
        className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden border-2 border-neon-green/40 cursor-pointer group"
        style={{
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.4), 0 0 40px rgba(57,255,20,0.3)",
        }}
        animate={
          punch
            ? {
                scale: [1, 1.12, 0.96, 1.04, 1],
                filter: [
                  "brightness(1) saturate(1)",
                  "brightness(1.6) saturate(1.4)",
                  "brightness(0.85) saturate(1.2)",
                  "brightness(1.2) saturate(1.1)",
                  "brightness(1) saturate(1)",
                ],
              }
            : { scale: 1, filter: "brightness(1) saturate(1)" }
        }
        transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1], times: [0, 0.15, 0.4, 0.7, 1] }}
      >
        <Image
          src="/images/hero-gorilla.png"
          alt="IMPERIUM GYM — Gorille"
          fill
          className="object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-700"
          priority
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 440px"
        />

        {/* Inner edge glow */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, transparent 60%, rgba(57,255,20,0.15) 90%, rgba(57,255,20,0.4) 100%)",
          }}
        />

        {/* Crack lines overlay (drawn on punch) */}
        <AnimatePresence>
          {punch && (
            <motion.svg
              key="cracks"
              viewBox="0 0 600 600"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ mixBlendMode: "screen" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0.85] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, times: [0, 0.1, 0.7, 1] }}
            >
              {/* Impact halo at center */}
              <motion.circle
                cx="300"
                cy="300"
                r="0"
                fill="rgba(255,255,255,0.4)"
                initial={{ r: 0, opacity: 1 }}
                animate={{ r: 20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              {/* Crack lines — animated stroke draw */}
              {CRACKS.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="#39FF14"
                  strokeWidth={i < 8 ? 2.5 : 1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    filter: "drop-shadow(0 0 4px #39FF14) drop-shadow(0 0 8px rgba(57,255,20,0.7))",
                  }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.18, delay: i * 0.012, ease: "easeOut" },
                    opacity: { duration: 0.05, delay: i * 0.012 },
                  }}
                />
              ))}
              {/* White hot center cracks (overlay) */}
              {CRACKS.slice(0, 8).map((d, i) => (
                <motion.path
                  key={`white-${i}`}
                  d={d}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={1}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.9, 0.4] }}
                  transition={{
                    pathLength: { duration: 0.18, delay: i * 0.012, ease: "easeOut" },
                    opacity: { duration: 0.6, delay: i * 0.012, times: [0, 0.2, 1] },
                  }}
                />
              ))}
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Shards exploding outward on punch ──────────────────────── */}
      <AnimatePresence>
        {punch &&
          SHARDS.map((s) => (
            <motion.div
              key={`shard-${s.id}`}
              className="absolute pointer-events-none"
              style={{
                width: s.size,
                height: s.size,
                background: "#39FF14",
                clipPath:
                  "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                boxShadow: "0 0 10px #39FF14, 0 0 20px rgba(57,255,20,0.6)",
              }}
              initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
              animate={{
                x: s.x,
                y: s.y,
                opacity: 0,
                rotate: s.rotate,
                scale: 0.2,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: s.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
      </AnimatePresence>

      {/* Long thin radial rays (decorative, behind bubble) */}
      <svg
        viewBox="0 0 600 600"
        className="absolute w-[600px] h-[600px] pointer-events-none -z-10 opacity-40"
        style={{ mixBlendMode: "screen" }}
      >
        {Array.from({ length: 24 }, (_, i) => {
          const angle = (i / 24) * 360;
          return (
            <line
              key={i}
              x1="300"
              y1="300"
              x2="300"
              y2="60"
              stroke="#39FF14"
              strokeWidth="1"
              strokeOpacity="0.5"
              transform={`rotate(${angle} 300 300)`}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}
