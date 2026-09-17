"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { frameHasAlpha, useAlphaVideo } from "@/lib/alpha-video";

/**
 * Animated brand lockup that plays once and rests on its final frame.
 * The static logo is the fallback: it shows as the poster while the file
 * loads, and replaces the video outright where alpha is unsupported, where
 * playback fails, or when the reader asked for less motion.
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
  const [failed, setFailed] = useState(false);
  const alpha = useAlphaVideo();

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    // O quadro pode chegar antes da hidratação, então a checagem roda
    // agora se já houver imagem e fica escutando se ainda não houver.
    const check = () => {
      if (!frameHasAlpha(element)) setFailed(true);
    };
    if (element.readyState >= 2) check();
    element.addEventListener("loadeddata", check);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.pause();
      return () => element.removeEventListener("loadeddata", check);
    }

    const play = element.play();
    if (play) play.catch(() => setFailed(true));
    return () => element.removeEventListener("loadeddata", check);
  }, [alpha]);

  // Sem alpha de verdade o vídeo entra como um bloco preto; a imagem
  // estática é melhor do que isso.
  if (failed || !alpha) {
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
      onError={() => setFailed(true)}
    >
      <source src={video} type="video/webm" />
    </video>
  );
}
