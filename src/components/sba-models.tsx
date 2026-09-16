"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, GraduationCap, Sparkles } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { OfferCard } from "@/lib/content";
import {
  RESIDENT_OFFERS,
  type ResidentYear,
} from "@/lib/resident-offers";
import { WHATSAPP_URL } from "@/lib/site";
import { SectionReveal } from "@/components/section-reveal";

type OfferMode = "extensivo" | "intensivo";

const YEARS: {
  id: ResidentYear;
  title: string;
  body: string;
}[] = [
  {
    id: "R1",
    title: "Sou R1",
    body: "Comece a base agora. Você tem tempo para construir com constância.",
  },
  {
    id: "R2",
    title: "Sou R2",
    body: "Aprofunde o conteúdo com constância. O Extensivo cobre o ano inteiro.",
  },
  {
    id: "R3",
    title: "Sou R3",
    body: "Prepare-se para a sua última prova anual ou para o TSA.",
  },
];

export type FunnelOption = {
  id: string;
  title: string;
  body: string;
  /** Offers to reveal when the card is picked. */
  mode?: OfferMode;
  /** Sends the reader to a dedicated page instead of revealing offers. */
  href?: string;
};

export function SbaModels({
  id,
  directOffers,
  directTitle,
  funnel,
  funnelLead,
}: {
  id: string;
  directOffers?: OfferCard[];
  directTitle?: string;
  funnel?: FunnelOption[];
  funnelLead?: string;
}) {
  const [year, setYear] = useState<ResidentYear | null>(null);
  const [mode, setMode] = useState<OfferMode>("extensivo");
  const [picked, setPicked] = useState<FunnelOption | null>(null);
  const usesFunnel = Boolean(directOffers?.length && funnel?.length);

  const heading = usesFunnel
    ? picked
      ? picked.title
      : directTitle ?? "Escolha seu preparatório"
    : directOffers?.length
    ? directTitle ?? "Escolha seu preparatório"
    : !year
    ? "Qual é o seu momento na residência?"
    : mode === "intensivo"
      ? `Intensivo para o ${year}`
      : `Extensivos para o ${year}`;

  const lead = usesFunnel
    ? picked
      ? picked.body
      : funnelLead
    : directOffers?.length
    ? undefined
    : !year
    ? "Estude o que realmente importa, da forma certa e no ritmo certo, para alcançar o Título de Especialista e o Título Superior em Anestesiologia."
    : undefined;

  const scrollToModels = () => {
    requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  let stage: ReactNode;

  if (usesFunnel && !picked) {
    stage = (
      <div className="year-grid">
        {funnel?.map((option) => {
          const inner = (
            <>
              <Image
                src="/images/brand/laryngoscope-transparent.png"
                alt=""
                width={52}
                height={52}
                className="year-laryngoscope"
                aria-hidden
              />
              <strong>{option.title}</strong>
              <em>{option.body}</em>
              <span className="year-select">
                {option.href ? "Conhecer" : "Ver preparatórios"}
              </span>
            </>
          );

          return option.href ? (
            <Link key={option.id} href={option.href} className="year-card">
              {inner}
            </Link>
          ) : (
            <button
              key={option.id}
              type="button"
              className="year-card"
              onClick={() => {
                setMode(option.mode ?? "extensivo");
                setPicked(option);
                scrollToModels();
              }}
            >
              {inner}
            </button>
          );
        })}
      </div>
    );
  } else if (usesFunnel && picked) {
    const visibleDirectOffers = (directOffers ?? []).filter(
      (offer) => (offer.offerMode ?? "extensivo") === mode,
    );

    stage = (
      <div>
        <div className="offer-navigation">
          <button
            type="button"
            className="offer-back"
            onClick={() => {
              setPicked(null);
              setMode("extensivo");
              scrollToModels();
            }}
          >
            <ArrowLeft className="size-4" strokeWidth={2.2} aria-hidden />
            <span>Alterar preparatório</span>
            <strong>{picked.title}</strong>
          </button>
        </div>
        <div className="resident-offer-groups">
          <section className="resident-offer-group is-priority">
            <div
              className={`offer-grid ${visibleDirectOffers.length === 3 ? "offer-grid--three" : ""}`}
            >
              {visibleDirectOffers.map((offer) => (
                <OfferTile key={offer.title} offer={offer} />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  } else if (directOffers?.length) {
    const hasDirectIntensive = directOffers.some(
      (offer) => offer.offerMode === "intensivo",
    );
    const visibleDirectOffers = directOffers.filter(
      (offer) => (offer.offerMode ?? "extensivo") === mode,
    );

    stage = (
      <div>
        {hasDirectIntensive ? (
          <div
            className="offer-mode-tabs"
            role="tablist"
            aria-label="Tipo de preparatório"
          >
            {(["extensivo", "intensivo"] as const).map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={mode === item}
                className={mode === item ? "is-active" : ""}
                onClick={() => setMode(item)}
              >
                {item === "extensivo" ? "Extensivo" : "Intensivo"}
              </button>
            ))}
          </div>
        ) : null}
        <div className="resident-offer-groups">
          <section className="resident-offer-group is-priority">
          <div
            className={`offer-grid ${visibleDirectOffers.length === 3 ? "offer-grid--three" : ""}`}
          >
            {visibleDirectOffers.map((offer) => (
              <OfferTile key={offer.title} offer={offer} />
            ))}
          </div>
          </section>
        </div>
      </div>
    );
  } else if (!year) {
    stage = (
      <div className="year-grid">
        {YEARS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="year-card"
            onClick={() => {
              setMode("extensivo");
              setYear(item.id);
              scrollToModels();
            }}
          >
            <Image
              src="/images/brand/laryngoscope-transparent.png"
              alt=""
              width={52}
              height={52}
              className="year-laryngoscope"
              aria-hidden
            />
            <strong>{item.title}</strong>
            <em>{item.body}</em>
            <span className="year-select">Selecionar</span>
          </button>
        ))}
      </div>
    );
  } else {
    const allGroups = RESIDENT_OFFERS[year];
    const hasIntensive = allGroups.some(
      (group) => group.mode === "intensivo",
    );
    const groups = allGroups.filter(
      (group) => (group.mode ?? "extensivo") === mode,
    );

    stage = (
      <div>
        <div className="offer-navigation">
          <button
            type="button"
            className="offer-back"
            onClick={() => {
              setMode("extensivo");
              setYear(null);
            }}
          >
            <ArrowLeft className="size-4" strokeWidth={2.2} aria-hidden />
            <span>Alterar ano</span>
            <strong>{year}</strong>
          </button>
        </div>
        {hasIntensive ? (
          <div
            className="offer-mode-tabs"
            role="tablist"
            aria-label="Tipo de preparatório"
          >
            {(["extensivo", "intensivo"] as const).map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={mode === item}
                className={mode === item ? "is-active" : ""}
                onClick={() => setMode(item)}
              >
                {item === "extensivo" ? "Extensivo" : "Intensivo"}
              </button>
            ))}
          </div>
        ) : null}
        <div className="resident-offer-groups">
          {groups.map((group, index) => (
            <section
              className={`resident-offer-group ${
                index === 0 && mode === "extensivo" ? "is-priority" : ""
              }`}
              key={group.title}
            >
              <div className="resident-offer-heading">
                {index === 0 && mode === "extensivo" ? (
                  <p className="resident-priority-label">
                    <BadgeCheck
                      className="size-4"
                      strokeWidth={2.2}
                      aria-hidden
                    />
                    Maior cobertura
                  </p>
                ) : null}
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="offer-grid">
                {[...group.offers]
                  .sort(
                    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
                  )
                  .map((offer) => (
                    <OfferTile key={offer.title} offer={offer} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }

  return (
    <SectionReveal>
      <section id={id} className="apple-section">
        <div className="apple-module px-5 py-20 sm:py-28">
          <div className="apple-module-content">
            <div className="apple-stagger mx-auto max-w-5xl text-center">
              <p className="chapter-kicker">
                <GraduationCap className="size-4" strokeWidth={2.2} aria-hidden />
                Preparatórios
              </p>
              <h2 className="apple-chapter-title mx-auto mt-3 max-w-3xl">
                {heading}
              </h2>
              {lead ? (
                <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-[var(--muted)] sm:text-[19px]">
                  {lead}
                </p>
              ) : null}
            </div>
            <div className="mx-auto mt-12 max-w-5xl">{stage}</div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

function OfferTile({ offer }: { offer: OfferCard }) {
  return (
    <article className={`offer-card ${offer.featured ? "is-featured" : ""}`}>
      {offer.featured ? (
        <p className="offer-recommended">
          <Sparkles className="size-3.5" strokeWidth={2.2} aria-hidden />
          Recomendado
        </p>
      ) : null}
      <p
        className={`offer-badge ${offer.badge.toLowerCase().startsWith("acesso") ? "is-access" : ""}`}
      >
        {offer.badge}
      </p>
      <h3>{offer.title}</h3>
      {offer.equivalent ? (
        <p className="offer-equivalent">{offer.equivalent}</p>
      ) : null}
      <div className="offer-price">
        <p className="offer-from">{offer.fromPrice}</p>
        <p className="offer-installment">
          <span>12x de</span> {offer.installment}
        </p>
        <p className="offer-cash">{offer.cash}</p>
      </div>
      {offer.note ? <p className="offer-note">{offer.note}</p> : null}
      <ul>
        {offer.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className={offer.featured ? "apple-pill" : "apple-link offer-cta"}
      >
        {offer.cta}
      </a>
    </article>
  );
}
