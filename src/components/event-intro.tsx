"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { frameHasAlpha, useAlphaVideo } from "@/lib/alpha-video";

/**
 * Opening vignette: the mark fills the screen, plays once at a slower
 * pace, then shrinks into the page header so the hero has the floor.
 */
export function EventIntro({
  src,
  poster,
  alt,
  rate = 0.7,
}: {
  src: string;
  poster: string;
  alt: string;
  /** Playback speed; below 1 the animation reads calmer. */
  rate?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [done, setDone] = useState(false);
  const [opaque, setOpaque] = useState(false);
  const alpha = useAlphaVideo();

  useEffect(() => {
    // Sem vídeo montado (marca estática) o efeito anterior já limpou a
    // marcação, e o hero segue sem esperar por vinheta nenhuma.
    const video = videoRef.current;
    if (!video) return;

    // O quadro pode chegar antes da hidratação, então a checagem roda
    // agora se já houver imagem e fica escutando se ainda não houver.
    const check = () => {
      if (!frameHasAlpha(video)) setOpaque(true);
    };
    if (video.readyState >= 2) check();
    video.addEventListener("loadeddata", check);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return () => video.removeEventListener("loadeddata", check);
    }

    // Marca o documento enquanto a vinheta roda: o CSS segura o hero até
    // ela terminar. Marcar pelo JS deixa o hero visível sem script.
    document.documentElement.dataset.intro = "playing";
    video.playbackRate = rate;

    // Some browsers reset the rate when the stream is ready.
    const apply = () => {
      video.playbackRate = rate;
    };
    video.addEventListener("loadedmetadata", apply);
    return () => {
      video.removeEventListener("loadeddata", check);
      video.removeEventListener("loadedmetadata", apply);
      delete document.documentElement.dataset.intro;
    };
  }, [rate, alpha, opaque]);

  useEffect(() => {
    if (done) delete document.documentElement.dataset.intro;
  }, [done]);

  // Onde o alpha não é suportado o vídeo entraria como um retângulo preto.
  // A marca estática fica no lugar, já no tamanho de logo, e o hero segue
  // direto sem esperar por uma vinheta que não vai rodar.
  if (!alpha || opaque) {
    return (
      <div className="event-intro-stage is-static">
        <Image
          src={poster}
          alt={alt}
          width={900}
          height={507}
          quality={100}
          className="event-intro"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`event-intro-stage${done ? " is-done" : ""}`}>
      <video
        ref={videoRef}
        className="event-intro"
        poster={poster}
        aria-label={alt}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setDone(true)}
        onError={() => setDone(true)}
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
