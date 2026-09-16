"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSyncExternalStore } from "react";

type Origin = { href: string; label: string };

const KNOWN: Origin[] = [
  { href: "/tsa", label: "Voltar para o TSA" },
  { href: "/segunda-fase", label: "Voltar para Segunda Fase" },
  { href: "/tea", label: "Voltar para o TEA" },
  { href: "/aperfeicoamento", label: "Voltar para Aperfeiçoamento" },
  { href: "/residentes-sba", label: "Voltar para Residentes SBA" },
  { href: "/residentes-mec", label: "Voltar para Residentes MEC" },
];

/**
 * Points back at the page the reader actually came from. The referrer is
 * only read on the client, so the first paint keeps the neutral label and
 * the link never promises a page nobody visited.
 */
const subscribe = () => () => {};

function readReferrerPath() {
  const ref = typeof document === "undefined" ? "" : document.referrer;
  if (!ref) return null;
  try {
    const url = new URL(ref);
    if (url.origin !== window.location.origin) return null;
    return url.pathname.replace(/\/$/, "");
  } catch {
    return null;
  }
}

export function EventBack({ fallback }: { fallback: Origin }) {
  // Read on the client only: the server render has no referrer, so it keeps
  // the neutral fallback and hydration stays in sync.
  const path = useSyncExternalStore(subscribe, readReferrerPath, () => null);
  const origin = KNOWN.find((item) => item.href === path) ?? fallback;

  return (
    <Link href={origin.href} className="event-back">
      <ArrowLeft className="size-4" strokeWidth={2.4} aria-hidden />
      {origin.label}
    </Link>
  );
}
