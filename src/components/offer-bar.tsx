"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Sticky offer bar: appears once the hero leaves the screen and hides again
 * when the pricing section is on screen, so the price is always one click
 * away without competing with the offer itself.
 */
export function OfferBar({
  label,
  price,
  href,
  cta = "Ver preparatórios",
  hideNear = "#modelos",
}: {
  label: string;
  price: string;
  href: string;
  cta?: string;
  /** Selector of the pricing block; the bar steps aside while it is visible. */
  hideNear?: string;
}) {
  const [visible, setVisible] = useState(false);
  const pastHeroRef = useRef(false);
  const atOfferRef = useRef(false);

  useEffect(() => {
    const hero = document.querySelector(".apple-hero");
    const offer = hideNear ? document.querySelector(hideNear) : null;

    const sync = () => setVisible(pastHeroRef.current && !atOfferRef.current);

    const observers: IntersectionObserver[] = [];

    if (hero) {
      const io = new IntersectionObserver(
        ([entry]) => {
          pastHeroRef.current = !entry.isIntersecting;
          sync();
        },
        { threshold: 0 },
      );
      io.observe(hero);
      observers.push(io);
    } else {
      pastHeroRef.current = true;
      sync();
    }

    if (offer) {
      const io = new IntersectionObserver(
        ([entry]) => {
          atOfferRef.current = entry.isIntersecting;
          sync();
        },
        { threshold: 0 },
      );
      io.observe(offer);
      observers.push(io);
    }

    return () => observers.forEach((io) => io.disconnect());
  }, [hideNear]);

  return (
    <div className={`offer-bar${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <div className="offer-bar-inner">
        <p className="offer-bar-copy">
          <strong>{label}</strong>
          <span>{price}</span>
        </p>
        <a
          href={href}
          className="offer-bar-cta"
          tabIndex={visible ? undefined : -1}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          {cta}
          <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
        </a>
      </div>
    </div>
  );
}
