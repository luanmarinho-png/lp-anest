"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

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

/**
 * Student videos that play in place: clicking a card swaps its poster for
 * the player, so nobody has to leave the page or close a dialog.
 */
export function VideoTestimonials({
  eyebrow,
  title,
  lead,
  testimonials,
  variant = "section",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  testimonials: Testimonial[];
  /** "inline" drops the section chrome, for use inside another block. */
  variant?: "section" | "inline";
}) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (testimonials.length === 0) return null;

  const inline = variant === "inline";
  const Shell = inline ? "div" : "section";

  return (
    <Shell
      id={inline ? undefined : "depoimentos"}
      className={inline ? "course-testimonials" : "apple-section"}
    >
      <div
        className={
          inline ? "" : "apple-module apple-module-alt testimonial-shell"
        }
      >
        <div className={inline ? "" : "apple-module-content"}>
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
            {testimonials.map((item) => {
              const isPlaying = playingId === item.id;

              return (
                <article key={item.id} className="testimonial-card">
                  <div className="testimonial-media">
                    {isPlaying ? (
                      <video
                        src={item.src}
                        poster={item.poster}
                        controls
                        autoPlay
                        playsInline
                        onEnded={() => setPlayingId(null)}
                      />
                    ) : (
                      <button
                        type="button"
                        className="testimonial-trigger"
                        onClick={() => setPlayingId(item.id)}
                        aria-label={`Assistir ao depoimento de ${item.name}`}
                      >
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
                      </button>
                    )}
                  </div>

                  {item.quote ? (
                    <p className="testimonial-quote">{item.quote}</p>
                  ) : null}
                  <p className="testimonial-name">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Shell>
  );
}
