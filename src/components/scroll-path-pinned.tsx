"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { NumberedItem } from "@/lib/content";

type Spine = { width: number; stops: number[] };

/**
 * Trilha presa na tela: o bloco ocupa uma altura de tela e fica fixo
 * enquanto o leitor rola. A rolagem troca o card ativo e desenha a linha
 * entre os nós, então a tela nunca fica vazia entre uma parada e outra.
 *
 * Técnica: sticky stage + scroll progress (pinned scrollytelling).
 */
function buildSpine({ width, stops }: Spine) {
  if (stops.length === 0) return "";
  const cx = width / 2;
  const swing = Math.min(width * 0.42, 28);
  let d = `M${cx} ${stops[0]}`;
  for (let i = 1; i < stops.length; i += 1) {
    const prev = stops[i - 1];
    const y = stops[i];
    const side = i % 2 === 0 ? 1 : -1;
    const x = cx + swing * side;
    const dy = Math.max(y - prev, 1);
    d += ` C${x} ${prev + dy * 0.34}, ${x} ${y - dy * 0.34}, ${cx} ${y}`;
  }
  return d;
}

function lengthAtY(line: SVGPathElement, length: number, target: number) {
  let low = 0;
  let high = length;
  for (let i = 0; i < 12; i += 1) {
    const mid = (low + high) / 2;
    if (line.getPointAtLength(mid).y < target) low = mid;
    else high = mid;
  }
  return low;
}

export function ScrollPathPinned({
  title,
  lead,
  points,
  ctaHref,
  ctaLabel,
  id = "metodo",
}: {
  title: string;
  lead?: string;
  points: NumberedItem[];
  ctaHref?: string;
  ctaLabel?: string;
  id?: string;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const [spine, setSpine] = useState<Spine>({ width: 0, stops: [] });
  const [active, setActive] = useState(0);
  const steps = points.length;

  // Mede onde cada nó ficou para desenhar a curva passando por eles.
  useEffect(() => {
    const el = spineRef.current;
    if (!el) return;

    const measure = () => {
      const top = el.getBoundingClientRect().top;
      const dots = Array.from(el.querySelectorAll<HTMLElement>(".scroll-path-dot"));
      setSpine({
        width: el.clientWidth,
        stops: dots.map((dot) => {
          const rect = dot.getBoundingClientRect();
          return rect.top - top + rect.height / 2;
        }),
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [points]);

  // Progresso da rolagem dentro da cena: 0 quando o palco prende, 1 quando
  // ele solta. O card ativo e a ponta da linha derivam desse número.
  useEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    const line = lineRef.current;
    if (!scene || !stage || steps === 0) return;

    const length = line && spine.stops.length ? line.getTotalLength() : 0;
    if (line && length) {
      line.style.strokeDasharray = `${length}`;
    }

    let frame = 0;

    const paint = () => {
      frame = 0;
      const rect = scene.getBoundingClientRect();
      const runway = rect.height - stage.offsetHeight;
      const progress =
        runway > 0 ? Math.min(Math.max(-rect.top / runway, 0), 1) : 1;

      // Cada passo ganha a mesma fatia da rolagem, inclusive o último:
      // ele fica na tela por uma fatia inteira antes de o palco soltar.
      const index = Math.min(steps - 1, Math.floor(progress * steps));
      setActive((prev) => (prev === index ? prev : index));

      if (line && length && spine.stops.length === steps) {
        // A linha chega ao último nó no instante em que o último card entra.
        const exact = Math.min(steps - 1, progress * steps);
        const i = Math.min(Math.floor(exact), steps - 1);
        const t = exact - i;
        const y0 = spine.stops[i];
        const y1 = spine.stops[Math.min(i + 1, steps - 1)];
        const y = y0 + (y1 - y0) * t;
        line.style.strokeDashoffset = `${length - lengthAtY(line, length, y)}`;
      }
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
  }, [spine, steps]);

  // Clicar num nó leva a rolagem até o ponto em que aquele passo fica ativo.
  const jumpTo = (index: number) => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    if (!scene || !stage || steps < 2) return;
    const top = scene.getBoundingClientRect().top + window.scrollY;
    const runway = scene.offsetHeight - stage.offsetHeight;
    window.scrollTo({
      top: top + (runway * index) / steps + 1,
      behavior: "smooth",
    });
  };

  const curve = buildSpine(spine);

  return (
    <section id={id} className="apple-section scroll-path is-pinned">
      <div
        ref={sceneRef}
        className="scroll-path-scene"
        style={{ "--steps": steps } as CSSProperties}
      >
        <div ref={stageRef} className="scroll-path-stage">
          <div className="scroll-path-stage-inner">
            <div className="scroll-path-head">
              <h2 className="scroll-path-title">{title}</h2>
              {lead ? <p className="scroll-path-lead">{lead}</p> : null}
            </div>

            <div className="scroll-path-board">
              <div ref={spineRef} className="scroll-path-spine">
                {spine.stops.length > 0 ? (
                  <svg
                    className="scroll-path-svg"
                    width={spine.width}
                    height="100%"
                    aria-hidden
                  >
                    <path className="scroll-path-rail" d={curve} />
                    <path ref={lineRef} className="scroll-path-line" d={curve} />
                  </svg>
                ) : null}
                {points.map((point, index) => (
                  <button
                    key={point.n}
                    type="button"
                    className={`scroll-path-dot${
                      index <= active ? " is-reached" : ""
                    }${index === active ? " is-active" : ""}`}
                    aria-label={`Ir para ${point.title}`}
                    aria-current={index === active ? "step" : undefined}
                    onClick={() => jumpTo(index)}
                  >
                    {point.n}
                  </button>
                ))}
              </div>

              <div className="scroll-path-deck" aria-live="polite">
                {points.map((point, index) => (
                  <article
                    key={point.n}
                    className={`scroll-path-slide${
                      index === active ? " is-active" : ""
                    }`}
                    aria-hidden={index !== active}
                  >
                    <p className="scroll-path-slide-step">
                      {point.n}
                      <span> / {points[steps - 1]?.n}</span>
                    </p>
                    <h3>{point.title}</h3>
                    {point.body ? <p>{point.body}</p> : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {ctaHref ? (
        <div className="scroll-path-foot">
          <Link href={ctaHref} className="scroll-path-cta">
            {ctaLabel ?? "Ver preparatórios"}
            <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
          </Link>
        </div>
      ) : null}
    </section>
  );
}
