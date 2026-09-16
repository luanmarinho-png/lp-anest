"use client";

import Image from "next/image";
import { BadgeCheck, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { NumberedItem } from "@/lib/content";

export function MecResourceRail({
  items,
  variant = "mec",
  kickerPrefix = "Recurso",
  ariaLabel = "Recursos da trilha",
}: {
  items: NumberedItem[];
  variant?: "mec" | "tea";
  kickerPrefix?: string;
  ariaLabel?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const [selected, setSelected] =
    useState<NonNullable<NumberedItem["image"]> | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    let previous = performance.now();

    // The rail renders the list twice: once scrolled past the first copy we
    // rewind by exactly one copy, so the movement never stops or bounces back.
    const wrap = () => {
      const half = rail.scrollWidth / 2;
      if (half <= 0) return;
      if (rail.scrollLeft >= half || rail.scrollLeft < 0) {
        const previousBehavior = rail.style.scrollBehavior;
        rail.style.scrollBehavior = "auto";
        rail.scrollLeft =
          rail.scrollLeft < 0 ? rail.scrollLeft + half : rail.scrollLeft - half;
        rail.style.scrollBehavior = previousBehavior;
      }
    };

    const advance = (now: number) => {
      const elapsed = Math.min(now - previous, 64);
      previous = now;

      const paused =
        selected ||
        now < pauseUntilRef.current ||
        rail.matches(":hover") ||
        rail.matches(":focus-within");

      wrap();

      if (!paused) {
        rail.scrollLeft += elapsed * 0.026;
      }

      frame = requestAnimationFrame(advance);
    };

    frame = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(frame);
  }, [selected]);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  const move = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    pauseUntilRef.current = performance.now() + 1800;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`mec-resource-carousel${variant === "tea" ? " tea-resource-carousel" : ""}`}
    >
      <div
        ref={railRef}
        className="mec-resource-rail"
        role="region"
        aria-label={ariaLabel}
        onPointerDown={() => {
          pauseUntilRef.current = performance.now() + 2400;
        }}
      >
        {[...items, ...items].map((item, index) => {
          const isClone = index >= items.length;
          return (
            <article
              key={`${item.n}-${index}`}
              className={`mec-resource-card live-tile${variant === "tea" ? " tea-resource-card" : ""}`}
              style={{ animationDelay: `${(index % items.length) * 90}ms` }}
              aria-hidden={isClone || undefined}
            >
              {variant === "tea" ? (
                <p className="mec-resource-kicker">{item.n}</p>
              ) : (
                <p className="mec-resource-kicker">
                  {kickerPrefix} {item.n}
                </p>
              )}
              <h3>{item.title}</h3>
              {item.badge ? (
                <p className="mec-resource-badge">
                  <BadgeCheck className="size-4" strokeWidth={2.4} aria-hidden />
                  {item.badge}
                </p>
              ) : null}
              {item.body ? (
                <p className="mec-resource-body">{item.body}</p>
              ) : null}
              {item.images?.length ? (
                <div className="mec-resource-media is-duo">
                  {item.images.map((portrait) => (
                    <button
                      key={portrait.src}
                      type="button"
                      className="mec-resource-portrait"
                      aria-label={`Ampliar imagem: ${portrait.alt}`}
                      tabIndex={isClone ? -1 : undefined}
                      onClick={() => setSelected(portrait)}
                    >
                      <Image
                        src={portrait.src}
                        alt={portrait.alt}
                        fill
                        sizes="(max-width: 640px) 44vw, 21vw"
                        quality={100}
                        className="mec-resource-image"
                        data-static-media
                      />
                      {portrait.caption ? <span>{portrait.caption}</span> : null}
                    </button>
                  ))}
                </div>
              ) : item.image ? (
                <button
                  type="button"
                  className="mec-resource-media"
                  aria-label={`Ampliar imagem: ${item.title}`}
                  tabIndex={isClone ? -1 : undefined}
                  onClick={() => setSelected(item.image ?? null)}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1100px) 52vw, 42vw"
                    quality={100}
                    className="mec-resource-image"
                    data-static-media
                  />
                </button>
              ) : (
                <div className="mec-resource-media">
                  <span aria-hidden>{item.n}</span>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="mec-resource-controls" aria-label="Navegar pelos recursos">
        <button
          type="button"
          aria-label="Ver recursos anteriores"
          onClick={() => move(-1)}
        >
          <ChevronLeft className="size-5" strokeWidth={2.2} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Ver próximos recursos"
          onClick={() => move(1)}
        >
          <ChevronRight className="size-5" strokeWidth={2.2} aria-hidden />
        </button>
      </div>

      {selected ? (
        <div
          className="mec-resource-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}
        >
          <div
            className="mec-resource-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar imagem ampliada"
              onClick={() => setSelected(null)}
            >
              <X className="size-5" strokeWidth={2.2} aria-hidden />
            </button>
            <div className="mec-resource-lightbox-image">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="94vw"
                quality={100}
                className="object-contain"
                data-static-media
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
