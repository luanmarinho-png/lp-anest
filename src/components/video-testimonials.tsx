"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  /** Only fill this in with what the student actually says on camera. */
  quote?: string;
  /** Video file served from /public, e.g. /videos/depoimentos/ana.mp4 */
  src: string;
  poster?: string;
};

export function VideoTestimonials({
  eyebrow,
  title,
  lead,
  testimonials,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  testimonials: Testimonial[];
}) {
  const [playing, setPlaying] = useState<Testimonial | null>(null);

  useEffect(() => {
    if (!playing) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlaying(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [playing]);

  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="apple-section">
      <div className="apple-module apple-module-alt testimonial-shell">
        <div className="apple-module-content">
          <div className="apple-stagger mx-auto max-w-5xl text-center">
            <p className="fase2-eyebrow">{eyebrow}</p>
            <h2 className="apple-chapter-title mx-auto mt-3 max-w-3xl">
              {title}
            </h2>
            {lead ? (
              <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-[var(--muted)] text-pretty sm:text-[19px]">
                {lead}
              </p>
            ) : null}
          </div>

          <div className="testimonial-grid mx-auto mt-12 max-w-5xl">
            {testimonials.map((item) => (
              <button
                key={item.id}
                type="button"
                className="testimonial-card"
                onClick={() => setPlaying(item)}
                aria-label={`Ver o depoimento de ${item.name}`}
              >
                <span className="testimonial-media">
                  {item.poster ? (
                    <Image
                      src={item.poster}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 88vw, 30vw"
                      quality={90}
                      className="testimonial-poster"
                      aria-hidden
                    />
                  ) : null}
                  <span className="testimonial-play" aria-hidden>
                    <Play className="size-5" strokeWidth={2.4} />
                  </span>
                </span>
                {item.quote ? (
                  <p className="testimonial-quote">{item.quote}</p>
                ) : null}
                <p className="testimonial-name">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {playing ? (
        <div
          className="testimonial-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Depoimento de ${playing.name}`}
          onClick={() => setPlaying(null)}
        >
          <div
            className="testimonial-player"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar depoimento"
              onClick={() => setPlaying(null)}
            >
              <X className="size-5" strokeWidth={2.2} aria-hidden />
            </button>
            <video src={playing.src} poster={playing.poster} controls autoPlay />
          </div>
        </div>
      ) : null}
    </section>
  );
}
