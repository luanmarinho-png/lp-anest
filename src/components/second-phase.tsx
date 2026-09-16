"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

export type SecondPhaseTrack = {
  id: string;
  eyebrow: string;
  title: string;
  teaser: string;
  lead: string;
  advantages: { title: string; body: string }[];
  cta: { href: string; label: string };
  note: string;
  /** Product lockup shown on the door and on the detail. */
  logo?: { src: string; alt: string };
  image: { src: string; alt: string };
  soon?: boolean;
  /** When set, the door navigates straight to this page. */
  href?: string;
};

/**
 * Two doors, then the detail. Picking a track reveals its content in place
 * instead of navigating away, so the page stays short on arrival.
 */
export function SecondPhaseChooser({ tracks }: { tracks: SecondPhaseTrack[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const open = tracks.find((track) => track.id === openId) ?? null;

  const scrollToAnchor = () => {
    requestAnimationFrame(() => {
      anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="opcoes" className="apple-section">
      <div ref={anchorRef} className="apple-module fase2-shell">
        {open ? (
          <article className="fase2-detail" key={open.id}>
            <button
              type="button"
              className="fase2-back"
              onClick={() => {
                setOpenId(null);
                scrollToAnchor();
              }}
            >
              <ArrowLeft className="size-4" strokeWidth={2.4} aria-hidden />
              <span>Ver as duas opções</span>
            </button>

            <div className="fase2-detail-grid">
              <div className="fase2-copy">
                {open.logo ? (
                  <Image
                    src={open.logo.src}
                    alt={open.logo.alt}
                    width={460}
                    height={165}
                    quality={100}
                    className="fase2-detail-logo"
                  />
                ) : (
                  <p className="fase2-eyebrow">{open.eyebrow}</p>
                )}
                <h2>{open.title}</h2>
                <p className="fase2-lead">{open.lead}</p>

                <ul className="fase2-list">
                  {open.advantages.map((advantage) => (
                    <li key={advantage.title}>
                      <CheckCircle2
                        className="size-5"
                        strokeWidth={2.2}
                        aria-hidden
                      />
                      <div>
                        <strong>{advantage.title}</strong>
                        <span>{advantage.body}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="fase2-actions">
                  <Link href={open.cta.href} className="fase2-cta">
                    {open.cta.label}
                    <ArrowRight
                      className="size-4"
                      strokeWidth={2.4}
                      aria-hidden
                    />
                  </Link>
                  <p className="fase2-note">{open.note}</p>
                </div>
              </div>

              <div className="fase2-visual">
                <Image
                  src={open.image.src}
                  alt={open.image.alt}
                  fill
                  sizes="(max-width: 900px) 92vw, 44vw"
                  quality={100}
                  className="fase2-image"
                  data-static-media
                />
              </div>
            </div>
          </article>
        ) : (
          <div className="fase2-doors">
            {tracks.map((track) => {
              const body = (
                <>
                  <span className="fase2-door-media">
                    {track.logo ? (
                      <Image
                        src={track.logo.src}
                        alt={track.logo.alt}
                        width={420}
                        height={150}
                        quality={100}
                        className="fase2-door-logo"
                      />
                    ) : (
                      <span className="fase2-door-soon">{track.title}</span>
                    )}
                  </span>
                  <span className="fase2-eyebrow">{track.eyebrow}</span>
                  {track.logo ? null : <strong>{track.title}</strong>}
                  <em>{track.teaser}</em>
                  <span className="fase2-door-cta">
                    {track.soon ? (
                      "Em breve"
                    ) : (
                      <>
                        Conhecer o curso
                        <ArrowRight
                          className="size-4"
                          strokeWidth={2.4}
                          aria-hidden
                        />
                      </>
                    )}
                  </span>
                </>
              );

              if (track.soon) {
                return (
                  <div key={track.id} className="fase2-door is-soon">
                    {body}
                  </div>
                );
              }

              if (track.href) {
                return (
                  <Link key={track.id} href={track.href} className="fase2-door">
                    {body}
                  </Link>
                );
              }

              return (
                <button
                  key={track.id}
                  type="button"
                  className="fase2-door"
                  onClick={() => {
                    setOpenId(track.id);
                    scrollToAnchor();
                  }}
                >
                  {body}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
