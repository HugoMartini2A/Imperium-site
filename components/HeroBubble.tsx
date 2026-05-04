"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// 12 fragments evenly distributed around the circle
const FRAGMENTS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  return {
    id: i,
    x: Math.cos(angle) * 220,
    y: Math.sin(angle) * 220,
    rotate: (Math.random() - 0.5) * 90,
    delay: Math.random() * 0.15,
  };
});

export default function HeroBubble() {
  const [shattered, setShattered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShattered(true)}
      onMouseLeave={() => setShattered(false)}
    >
      {/* ── Animated radiating rays (aura) ──────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Slow rotating conic-gradient halo */}
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

        {/* Counter-rotating second halo */}
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

        {/* Pulsing soft glow ring */}
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

      {/* ── Circular bubble with gorilla ──────────────────────────── */}
      <motion.div
        className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden border-2 border-neon-green/40 cursor-pointer group"
        style={{
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.4), 0 0 40px rgba(57,255,20,0.3)",
        }}
        animate={{
          scale: shattered ? 0.92 : 1,
          filter: shattered
            ? "brightness(1.4) saturate(1.5) hue-rotate(15deg) blur(2px)"
            : "brightness(1) saturate(1) hue-rotate(0deg) blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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

        {/* Glitch overlay on hover */}
        <AnimatePresence>
          {shattered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0.2, 0.6, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }}
              className="absolute inset-0 mix-blend-screen pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(57,255,20,0.4) 30%, transparent 50%, rgba(57,255,20,0.3) 70%, transparent 100%)",
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Fragmentation particles on hover ──────────────────────── */}
      <AnimatePresence>
        {shattered &&
          FRAGMENTS.map((frag) => (
            <motion.div
              key={frag.id}
              className="absolute w-3 h-3 rounded-sm bg-neon-green pointer-events-none"
              style={{
                boxShadow: "0 0 12px rgba(57,255,20,0.8), 0 0 24px rgba(57,255,20,0.5)",
              }}
              initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
              animate={{
                x: frag.x,
                y: frag.y,
                opacity: 0,
                rotate: frag.rotate,
                scale: 0.3,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: frag.delay,
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
    </div>
  );
}
