import Image from "next/image";
import { Suspense } from "react";
import { CheckCircle2, FileCheck2, TimerReset } from "lucide-react";
import type {
  FeatureBlock,
  Modality,
  SpotlightBlock,
  TrackPageContent,
} from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/site";
import { THEMES, type ThemeId } from "@/lib/themes";
import {
  AppleChapter,
  AppleCtas,
  AppleHero,
  GetCta,
  ProductShell,
} from "@/components/apple/chrome";
import { SbaModels, type FunnelOption } from "@/components/sba-models";
import { SectionReveal } from "@/components/section-reveal";
import { SectionCta } from "@/components/section-cta";
import { OfferBar } from "@/components/offer-bar";
import { MecResourceRail } from "@/components/mec-resource-rail";
import { ScrollPathPinned } from "@/components/scroll-path-pinned";
import { BentoMosaic } from "@/components/bento-mosaic";

const TSA_FUNNEL: FunnelOption[] = [
  {
    id: "primeira-fase",
    title: "TSA Primeira Fase",
    body: "Preparação completa para a etapa escrita: edital inteiro, aulas de aprofundamento, questões discursivas e simulados autorais.",
    mode: "extensivo",
  },
  {
    id: "intensivo",
    title: "Intensivo TSA",
    body: "Revisão concentrada de alta densidade para quem já tem base e precisa de direcionamento na reta final.",
    mode: "intensivo",
  },
  {
    id: "oral",
    title: "TSA Oral",
    body: "Treinamento prático e presencial para a prova oral, com estações no formato da SBA e feedback de preceptores titulados.",
    href: "/tsa-oral",
  },
];

export function AppleProductPage({
  theme,
  data,
}: {
  theme: ThemeId;
  data: TrackPageContent;
}) {
  const meta = THEMES[theme];
  const modelsId =
    meta.layout === "path"
      ? "jornada"
      : meta.layout === "clinical"
        ? "cursos"
        : "modelos";
  const heroPrimary =
    meta.layout === "clinical" ? "Ver cursos" : "Escolher meu preparatório";

  const itemsChapter =
    data.items.length > 0 ? (
      <AppleChapter
        id="recursos"
        alt={data.flow !== "items-story-models"}
        title={data.itemsTitle ?? "O que entra na trilha"}
        body={data.itemsLead}
        proof={data.itemsProof}
        underline={data.itemsUnderline}
      >
        <Items data={data} />
        {data.offers?.length || data.modalities.length > 0 ? (
          <SectionCta href={`#${modelsId}`} note={data.ctaNote}>
            {data.itemsCta ?? "Ver preparatórios"}
          </SectionCta>
        ) : null}
      </AppleChapter>
    ) : null;

  const storyChapter = data.storyTitle ? (
    data.slug === "tsa" && data.storyPoints?.length ? (
      <SectionReveal>
        <ScrollPathPinned
          title={data.storyTitle}
          lead={data.storyLead}
          points={data.storyPoints}
          ctaHref={`#${modelsId}`}
          ctaLabel="Ver preparatórios do TSA"
        />
      </SectionReveal>
    ) : (
      <AppleChapter
        id="metodo"
        alt={data.flow === "items-story-models"}
        eyebrow={data.storyKicker}
        title={data.storyTitle}
        body={data.storyLead}
      >
        {data.storyBody.length > 0 ? (
          <div className="editorial-copy mx-auto max-w-3xl space-y-6 text-[17px] leading-8 text-[var(--muted)] sm:text-[18px]">
            {data.storyBody.map((p) => (
              <p key={p}>
                <MarkedCopy text={p} highlights={data.storyHighlights} />
              </p>
            ))}
          </div>
        ) : null}
        {data.storyPoints?.length ? (
          <div className="story-pulse-grid">
            {data.storyPoints.map((item, index) => (
              <article
                key={item.n}
                className={`story-pulse-card ${index === 1 ? "is-accent" : ""}`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p>{item.n}</p>
                <h3>{item.title}</h3>
                {item.body ? <p>{item.body}</p> : null}
              </article>
            ))}
          </div>
        ) : null}
      </AppleChapter>
    )
  ) : null;

  const modelsChapter =
    data.modalities.length > 0 ? (
      data.offers?.length ? (
        <Suspense fallback={null}>
          <SbaModels
            id={modelsId}
            directOffers={data.slug === "tea" || data.slug === "tsa" ? data.offers : undefined}
            directTitle={
              data.slug === "tea"
                ? "Preparatório TEA (Residências MEC)"
                : data.slug === "tsa"
                  ? "Qual etapa do TSA você vai enfrentar?"
                  : undefined
            }
            funnel={data.slug === "tsa" ? TSA_FUNNEL : undefined}
            funnelLead={
              data.slug === "tsa"
                ? "A prova do TSA tem etapas distintas. Escolha a sua e veja só o que interessa para ela."
                : undefined
            }
          />
        </Suspense>
      ) : (
        <AppleChapter
          id={modelsId}
          eyebrow={data.modalitiesEyebrow}
          title={data.modalitiesTitle}
          body={data.modalitiesBody}
        >
          <Models data={data} layout={meta.layout} />
        </AppleChapter>
      )
    ) : null;

  const highlightChapter = data.highlight?.image ? (
    <ProofFeature data={data.highlight} />
  ) : null;

  const spotlightChapter = data.spotlight ? (
    <MecSpotlight data={data.spotlight} />
  ) : null;

  return (
    <ProductShell theme={theme}>
      <AppleHero
        kicker={data.eyebrow}
        title={data.title}
        lead={data.lead}
        professor={data.heroProfessor}
      >
        <AppleCtas
          primaryHref={`#${modelsId}`}
          primary={heroPrimary}
          secondaryHref={WHATSAPP_URL}
          secondary="Falar com um especialista"
          external
        />
      </AppleHero>

      {data.flow === "items-story-models" ? (
        <>
          {itemsChapter}
          {highlightChapter}
          {storyChapter}
          {spotlightChapter}
          {modelsChapter}
        </>
      ) : (
        <>
          {storyChapter}
          {spotlightChapter}
          {itemsChapter}
          {highlightChapter}
          {modelsChapter}
        </>
      )}

      <GetCta
        title="Estude com a plataforma mais completa de Anestesiologia"
        body="Fale com a coordenação técnica e inicie o cronograma desta trilha."
      />

      {data.offerBar ? (
        <OfferBar
          label={data.offerBar.label}
          price={data.offerBar.price}
          href={`#${modelsId}`}
          cta={data.offerBar.cta}
          hideNear={`#${modelsId}`}
        />
      ) : null}
    </ProductShell>
  );
}

function MecSpotlight({ data }: { data: SpotlightBlock }) {
  return (
    <SectionReveal>
      <section className="apple-section mec-spotlight-section">
        <div className="apple-module mec-spotlight-module">
          <div className="mec-spotlight-copy">
            <p>{data.kicker}</p>
            <h2>{data.title}</h2>
            <p className="mec-spotlight-lead">{data.body}</p>
          </div>
          <div className="mec-spotlight-visual">
            <div className="mec-spotlight-glow" aria-hidden />
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(max-width: 900px) 94vw, 58vw"
              quality={100}
              className="mec-spotlight-image"
              data-static-media
            />
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

function ProofFeature({ data }: { data: FeatureBlock }) {
  if (!data.image) return null;

  return (
    <SectionReveal>
      <section className="apple-section sba-proof-section">
        <div className="apple-module apple-module-alt sba-proof-module">
          <div className="sba-proof-copy">
            <p className="sba-proof-kicker">{data.kicker}</p>
            <h2>{data.title}</h2>
            <p className="sba-proof-lead">{data.body}</p>
            <ul className="sba-proof-list">
              {data.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckCircle2
                    className="size-5"
                    strokeWidth={2.1}
                    aria-hidden
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="sba-proof-visual">
            <div className="sba-proof-glow" aria-hidden />
            <div className="sba-proof-device">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                sizes="(max-width: 900px) 92vw, 58vw"
                quality={100}
                className="sba-proof-image"
                data-static-media
              />
            </div>
            <div className="sba-proof-chip sba-proof-chip--questions">
              <FileCheck2 className="size-4" strokeWidth={2.1} aria-hidden />
              Provas SBA comentadas
            </div>
            <div className="sba-proof-chip sba-proof-chip--simulados">
              <TimerReset className="size-4" strokeWidth={2.1} aria-hidden />
              Simulados autorais
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

function Models({
  data,
  layout,
}: {
  data: TrackPageContent;
  layout: string;
}) {
  if (data.slug === "tea") {
    return <TeaModelsPyramid modalities={data.modalities} />;
  }

  if (layout === "path") {
    return (
      <ol className="mx-auto max-w-xl space-y-0">
        {data.modalities.map((item, i) => (
          <li key={item.title} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-semibold text-white">
                {i + 1}
              </span>
              {i < data.modalities.length - 1 ? (
                <span className="w-px flex-1 bg-[var(--accent)]/30" />
              ) : null}
            </div>
            <div
              className={`apple-tile flex-1 p-6 ${i < data.modalities.length - 1 ? "mb-4" : ""}`}
            >
              <h3 className="text-2xl tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">
                {item.description}
              </p>
              <ul className="mt-4 space-y-1.5 text-[13px] text-[var(--muted)]">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (layout === "apex") {
    return (
      <div className="space-y-4">
        {data.modalities.map((item) => (
          <article key={item.title} className="apple-tile px-8 py-10 text-center">
            <h3 className="text-3xl tracking-[-0.03em]">{item.title}</h3>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-6 text-[var(--muted)]">
              {item.description}
            </p>
            <ul className="mx-auto mt-5 max-w-sm space-y-1.5 text-[13px] text-[var(--muted)]">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="apple-link mt-6 inline-block text-[15px]"
            >
              {item.cta} ›
            </a>
          </article>
        ))}
      </div>
    );
  }

  const cols =
    data.modalities.length === 1
      ? "sm:grid-cols-1 max-w-lg mx-auto"
      : data.modalities.length === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-3";

  return (
    <div className={`grid gap-4 ${cols}`}>
      {data.modalities.map((item) => (
        <article
          key={item.title}
          className={`apple-tile flex flex-col p-7 text-left ${
            item.featured ? "is-featured" : ""
          }`}
        >
          <h3 className="text-2xl tracking-[-0.02em]">{item.title}</h3>
          <p className="mt-3 flex-1 text-[15px] leading-6 text-[var(--muted)]">
            {item.description}
          </p>
          <ul className="mt-5 space-y-2 text-[13px] text-[var(--muted)]">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="apple-link mt-6 text-[15px]"
          >
            {item.cta} ›
          </a>
        </article>
      ))}
    </div>
  );
}

function TeaModelsPyramid({ modalities }: { modalities: Modality[] }) {
  const [extensivo, ...others] = modalities;
  if (!extensivo) return null;

  const card = (item: Modality, featured = false) => (
    <article
      key={item.title}
      className={`tea-pyramid-card ${featured ? "is-core" : ""}`}
    >
      {featured ? <p className="tea-pyramid-label">Preparação principal</p> : null}
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <ul>
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        {item.cta} ›
      </a>
    </article>
  );

  return (
    <div className="tea-models-pyramid">
      <div className="tea-pyramid-apex">{card(extensivo, true)}</div>
      <div className="tea-pyramid-base">
        {others.map((item) => card(item))}
      </div>
    </div>
  );
}

function Items({ data }: { data: TrackPageContent }) {
  if (data.slug === "residentes-mec") {
    return (
      <MecResourceRail
        items={data.items}
        ariaLabel="Recursos para a jornada até o TEA"
      />
    );
  }

  if (data.slug === "tsa") {
    return (
      <BentoMosaic
        items={data.items}
        ariaLabel="Diferenciais do preparatório TSA"
      />
    );
  }

  if (data.slug === "tea") {
    return (
      <MecResourceRail
        items={data.items}
        variant="tea"
        ariaLabel="Método MedCof Anest para o TEA"
      />
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {data.items.map((item, index) => (
        <article
          key={item.n}
          className="apple-tile live-tile p-7 text-left"
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <p className="live-n text-sm tabular-nums text-[var(--accent)]">{item.n}</p>
          <h3 className="mt-3 text-xl tracking-[-0.02em]">{item.title}</h3>
          {item.body ? (
            <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">
              {item.body}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function MarkedCopy({
  text,
  highlights = [],
}: {
  text: string;
  highlights?: string[];
}) {
  if (highlights.length === 0) return text;

  const escaped = highlights
    .filter((phrase) => text.includes(phrase))
    .sort((a, b) => b.length - a.length)
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (escaped.length === 0) return text;

  const matcher = new RegExp(`(${escaped.join("|")})`, "g");

  return text.split(matcher).map((part, index) =>
    highlights.includes(part) ? (
      <strong key={`${part}-${index}`} className="copy-mark">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
