"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { NumberedItem } from "@/lib/content";

type Box = { width: number; height: number; stops: number[] };
type Variant = "serpentine" | "ladder";

/**
 * Winding path that draws itself as the reader scrolls.
 *
 * The geometry is built in real pixels (not a stretched viewBox) so that
 * `getTotalLength` matches what is painted: a scaled viewBox with
 * `preserveAspectRatio="none"` makes arc length and dash length disagree,
 * and the drawn head drifts away from the guide line.
 *
 * Technique: SVG path drawing on scroll (getTotalLength + dashoffset),
 * with each stop sitting on a node of the curve.
 */
function buildCurve({ width, height, stops }: Box, variant: Variant) {
  if (variant === "ladder") {
    // Trilho reto encostado à esquerda: os cards ficam ao lado dele.
    const x = Math.min(width * 0.06, 42);
    return `M${x} 0 L${x} ${height}`;
  }

  const cx = width / 2;
  const swing = Math.min(width * 0.34, 230);
  if (stops.length === 0) return `M${cx} 0 L${cx} ${height}`;

  let d = `M${cx} 0`;
  let prevY = 0;

  stops.forEach((y, index) => {
    const side = index % 2 === 0 ? 1 : -1;
    const x = cx + swing * side;
    const dy = Math.max(y - prevY, 1);
    d += ` C${x} ${prevY + dy * 0.34}, ${x} ${y - dy * 0.34}, ${cx} ${y}`;
    prevY = y;
  });

  // Tail: one last swing so the line leaves the section still winding.
  const side = stops.length % 2 === 0 ? 1 : -1;
  const dy = Math.max(height - prevY, 1);
  d += ` C${cx + swing * side} ${prevY + dy * 0.4}, ${cx + swing * side} ${
    height - dy * 0.2
  }, ${cx} ${height}`;

  return d;
}

export function ScrollPath({
  title,
  lead,
  points,
  ctaHref,
  ctaLabel,
  variant = "serpentine",
  id = "metodo",
}: {
  title: string;
  lead?: string;
  points: NumberedItem[];
  ctaHref?: string;
  ctaLabel?: string;
  /** "serpentine" serpenteia no centro; "ladder" corre reto na lateral. */
  variant?: Variant;
  id?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<Box>({ width: 0, height: 0, stops: [] });

  // Measure the track and where each node sits, so the curve can be drawn
  // through the nodes instead of guessing their position.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const dots = Array.from(
        track.querySelectorAll<HTMLElement>(".scroll-path-dot"),
      );
      // Measured against the track's own rect: `offsetTop` would be relative
      // to the positioned <li>, not to the track the curve is drawn in.
      const trackTop = track.getBoundingClientRect().top;
      setBox({
        width: track.clientWidth,
        height: track.clientHeight,
        stops: dots.map((dot) => {
          const rect = dot.getBoundingClientRect();
          return rect.top - trackTop + rect.height / 2;
        }),
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [points]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || box.height === 0) return;

    const line = section.querySelector<SVGPathElement>(".scroll-path-line");
    const stops = Array.from(
      section.querySelectorAll<HTMLElement>(".scroll-path-stop"),
    );
    if (!line || stops.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stops.forEach((stop) => stop.classList.add("is-reached"));
      line.style.strokeDasharray = "none";
      return;
    }

    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;

    let frame = 0;

    const paint = () => {
      frame = 0;

      const rect = track.getBoundingClientRect();
      const start = window.innerHeight * 0.72;
      const span = Math.max(rect.height + start - window.innerHeight * 0.34, 1);
      const progress = Math.min(Math.max((start - rect.top) / span, 0), 1);

      line.style.strokeDashoffset = `${length * (1 - progress)}`;

      // Where the drawn head actually is, in track coordinates.
      const head = line.getPointAtLength(length * progress).y;
      box.stops.forEach((y, index) => {
        stops[index]?.classList.toggle("is-reached", head >= y - 24);
      });
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [box]);

  const curve = buildCurve(box, variant);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`apple-section scroll-path is-${variant}`}
    >
      <div className="scroll-path-inner">
        <div className="scroll-path-head">
          <h2 className="scroll-path-title">{title}</h2>
          {lead ? <p className="scroll-path-lead">{lead}</p> : null}
        </div>

        <div ref={trackRef} className="scroll-path-track">
          {box.height > 0 ? (
            <svg
              className="scroll-path-svg"
              width={box.width}
              height={box.height}
              viewBox={`0 0 ${box.width} ${box.height}`}
              aria-hidden
            >
              <path className="scroll-path-rail" d={curve} />
              <path className="scroll-path-line" d={curve} />
            </svg>
          ) : null}

          <ol className="scroll-path-stops">
            {points.map((point) => (
              <li key={point.n} className="scroll-path-stop">
                <span className="scroll-path-dot" aria-hidden>
                  {point.n}
                </span>
                <article className="scroll-path-card">
                  <h3>{point.title}</h3>
                  {point.body ? <p>{point.body}</p> : null}
                </article>
              </li>
            ))}
          </ol>
        </div>

        {ctaHref ? (
          <div className="scroll-path-foot">
            <Link href={ctaHref} className="scroll-path-cta">
              {ctaLabel ?? "Ver preparatórios"}
              <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
