"use client";

import { useState, useEffect } from "react";

function getStatus() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun … 6=Sat
  const t = now.getHours() * 60 + now.getMinutes();

  const gymOpen = t >= 6 * 60 && t < 23 * 60;

  const isWeekday = day >= 1 && day <= 5;
  const morning = t >= 10 * 60 && t < 14 * 60;
  const afternoon = t >= 15 * 60 + 30 && t < 19 * 60 + 30;
  const accueilOpen = isWeekday && (morning || afternoon);

  return { gymOpen, accueilOpen };
}

interface Props {
  variant?: "navbar" | "banner";
}

export default function GymStatus({ variant = "navbar" }: Props) {
  const [status, setStatus] = useState(getStatus);

  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  const { gymOpen, accueilOpen } = status;

  if (variant === "banner") {
    return (
      <span className="flex items-center gap-2 text-white">
        <span
          className={`w-2 h-2 rounded-full flex-shrink-0 ${
            gymOpen ? "bg-neon-green animate-pulse" : "bg-red-500"
          }`}
        />
        <span className="font-bold tracking-widest uppercase">
          {gymOpen ? (
            <>
              Ouvert
              {accueilOpen && (
                <span className="ml-2 text-[10px] font-medium text-neon-green/80 normal-case tracking-wide">
                  · Accueil sur place
                </span>
              )}
            </>
          ) : (
            <span className="text-red-400">Fermé</span>
          )}
        </span>
      </span>
    );
  }

  // navbar variant
  return (
    <span className="flex items-center gap-1.5">
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
          gymOpen ? "bg-neon-green animate-pulse" : "bg-red-500"
        }`}
      />
      <span className="tracking-wider uppercase font-medium">
        {gymOpen ? (
          accueilOpen ? "Ouvert · Accueil sur place" : "Ouvert · Accès libre"
        ) : (
          <span className="text-red-400">Fermé · Ouvre à 6h</span>
        )}
      </span>
    </span>
  );
}
