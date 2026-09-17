"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Animated brand lockup that plays once and rests on its final frame.
 * The static logo is the fallback: it shows as the poster while the file
 * loads, stays put where VP9 with alpha is not supported, and replaces the
 * video outright if it fails or the reader asked for less motion.
 */
export function BrandMark({
  video,
  image,
  alt,
  className,
  width = 900,
  height = 507,
}: {
  video: string;
  image: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.pause();
      return;
    }

    const play = element.play();
    if (play) play.catch(() => setFallback(true));
  }, []);

  if (fallback) {
    return (
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        quality={100}
        className={className}
        priority
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster={image}
      aria-label={alt}
      width={width}
      height={height}
      muted
      playsInline
      preload="auto"
      onError={() => setFallback(true)}
    >
      <source src={video} type="video/webm" />
    </video>
  );
}
