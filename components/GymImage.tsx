"use client";

import Image from "next/image";
import { useState } from "react";

interface GymImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export default function GymImage({ src, alt, fill, className, priority, fallbackLabel }: GymImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <svg className="w-10 h-10 text-neon-green/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {fallbackLabel && (
          <>
            <p className="text-gray-600 text-xs mt-3 text-center px-4">{fallbackLabel}</p>
            <p className="text-gray-700 text-[10px] mt-1 text-center px-4">→ /public/images/{src.split("/").pop()}</p>
          </>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
