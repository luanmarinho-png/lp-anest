"use client";

import Image from "next/image";
import { BadgeCheck, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ItemImage, NumberedItem } from "@/lib/content";

/**
 * Asymmetric bento mosaic: tiles of different weights interlock into one
 * block, so the eye lands on the differentials first instead of scanning a
 * uniform row. Tiles fade in as they enter the viewport.
 */
export function BentoMosaic({
  items,
  ariaLabel = "Diferenciais",
}: {
  items: NumberedItem[];
  ariaLabel?: string;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState<ItemImage | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const tiles = Array.from(
      grid.querySelectorAll<HTMLElement>(".bento-tile"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tiles.forEach((tile) => tile.classList.add("is-in"));
      return;
    }

    // One at a time, in reading order: a tile only appears after the one
    // before it, so the mosaic is assembled piece by piece as you scroll.
    let next = 0;

    const revealUpTo = (index: number) => {
      while (next <= index && next < tiles.length) {
        const tile = tiles[next];
        tile.style.transitionDelay = "0ms";
        tile.classList.add("is-in");
        next += 1;
      }
    };

    // Peças já na tela ao montar entram sem animação: quem chega pela
    // âncora ou recarrega no meio da página não pode ver o mosaico vazio.
    const visible = tiles.filter(
      (tile) => tile.getBoundingClientRect().top < window.innerHeight,
    );
    if (visible.length > 0) {
      visible.forEach((tile) => {
        tile.style.transition = "none";
      });
      revealUpTo(tiles.indexOf(visible[visible.length - 1]));
      requestAnimationFrame(() => {
        visible.forEach((tile) => {
          tile.style.transition = "";
        });
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = tiles.indexOf(entry.target as HTMLElement);
          if (index >= 0) revealUpTo(index);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px 10% 0px" },
    );

    tiles.forEach((tile) => observer.observe(tile));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!zoomed) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [zoomed]);

  return (
    <>
      <div
        ref={gridRef}
        className="bento-grid"
        role="list"
        aria-label={ariaLabel}
      >
        {items.map((item) => (
          <article
            key={item.n}
            role="listitem"
            className={`bento-tile is-${item.size ?? "plain"}`}
          >
            <div className="bento-copy">
              <p className="bento-n">{item.n}</p>
              <h3>{item.title}</h3>
              {item.badge ? (
                <p className="bento-badge">
                  <BadgeCheck className="size-4" strokeWidth={2.4} aria-hidden />
                  {item.badge}
                </p>
              ) : null}
              {item.body ? <p className="bento-body">{item.body}</p> : null}
            </div>

            {item.images?.length ? (
              <div className="bento-media is-duo">
                {item.images.map((portrait) => (
                  <button
                    key={portrait.src}
                    type="button"
                    aria-label={`Ampliar imagem: ${portrait.alt}`}
                    onClick={() => setZoomed(portrait)}
                  >
                    <Image
                      src={portrait.src}
                      alt={portrait.alt}
                      fill
                      sizes="(max-width: 700px) 45vw, 22vw"
                      quality={100}
                      className="bento-image"
                      data-static-media
                    />
                    {portrait.caption ? <span>{portrait.caption}</span> : null}
                  </button>
                ))}
              </div>
            ) : item.image ? (
              <button
                type="button"
                className="bento-media"
                aria-label={`Ampliar imagem: ${item.title}`}
                onClick={() => setZoomed(item.image ?? null)}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 700px) 88vw, 44vw"
                  quality={100}
                  className="bento-image"
                  data-static-media
                />
              </button>
            ) : null}
          </article>
        ))}
      </div>

      {zoomed ? (
        <div
          className="mec-resource-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.alt}
          onClick={() => setZoomed(null)}
        >
          <div
            className="mec-resource-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar imagem ampliada"
              onClick={() => setZoomed(null)}
            >
              <X className="size-5" strokeWidth={2.2} aria-hidden />
            </button>
            <div className="mec-resource-lightbox-image">
              <Image
                src={zoomed.src}
                alt={zoomed.alt}
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
    </>
  );
}
