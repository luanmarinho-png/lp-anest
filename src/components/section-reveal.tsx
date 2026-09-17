"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SectionReveal({
  children,
  eager,
}: {
  children: ReactNode;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || eager) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    // Já está na tela (ou logo abaixo dela) ao montar: aparece na hora.
    // O fade só vale para o que ainda vai entrar pela rolagem.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.15 && rect.bottom > 0) {
      el.classList.add("is-in");
      return;
    }
    el.classList.add("will-reveal");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.unobserve(el);
        }
      },
      // Dispara 15% antes da borda de baixo, para a seção já estar pronta
      // quando entrar na tela.
      { threshold: 0, rootMargin: "0px 0px 15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <div ref={ref} className={eager ? "section-reveal is-in" : "section-reveal"}>
      {children}
    </div>
  );
}
