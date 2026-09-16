"use client";

import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    video.playbackRate = rate;
    // Some browsers reset the rate when the stream is ready.
    const apply = () => {
      video.playbackRate = rate;
    };
    video.addEventListener("loadedmetadata", apply);
    return () => video.removeEventListener("loadedmetadata", apply);
  }, [rate]);

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
