import Link from "next/link";
import {
  AppShowcase,
  FaqShowcase,
  FeatureShowcase,
  ProfessorsShowcase,
  QBankShowcase,
} from "@/components/home-experience";
import {
  AppleChapter,
  AppleCtas,
  AppleHero,
  GetCta,
  ProductShell,
} from "@/components/apple/chrome";
import {
  HOME_CTA,
  HOME_TRACKS,
} from "@/lib/content";
import { DOR_URL, WHATSAPP_URL } from "@/lib/site";

const TILES = [
  {
    href: "/residentes-sba",
    tone: "red",
  },
  {
    href: "/residentes-mec",
    tone: "wine",
  },
  {
    href: "/tea",
    tone: "gray",
  },
  {
    href: "/tsa",
    tone: "wine",
  },
  {
    href: "/aperfeicoamento",
    tone: "red",
  },
  {
    href: DOR_URL,
    title: "Dor",
    line: "Trilha em expansão.",
    cta: "Conhecer",
    tone: "gray",
  },
] as const;

export default function HomePage() {
  return (
    <ProductShell theme="store">
      <AppleHero
        title="Uma plataforma inteira desenvolvida para facilitar a sua aprovação"
        lead="Questões comentadas, revisão espaçada, Preceptor IA e flashcards. Um ecossistema completo em um só painel, projetado para extrair o máximo rendimento de cada sessão de estudo na sua rotina médica."
      >
        <AppleCtas
          primaryHref="#funcionalidades"
          primary="Conhecer as funcionalidades"
          secondaryHref={WHATSAPP_URL}
          secondary="Falar com um especialista"
          external
        />
      </AppleHero>

      <FeatureShowcase />
      <AppShowcase />
      <QBankShowcase />
      <ProfessorsShowcase />

      <AppleChapter
        id="trilhas"
        alt
        eyebrow="Trilhas"
        title="Escolha a trilha do seu momento"
        body="Comece pela etapa em que você está. Residentes SBA, Residentes MEC, TEA, TSA, aperfeiçoamento ou Dor."
      >
        <div className="track-products-grid">
          {TILES.map((tile) => {
            const track = HOME_TRACKS.find((t) => t.href === tile.href);
            const title = "title" in tile ? tile.title : track?.title;
            const line = "line" in tile ? tile.line : track?.description;
            const cta = "cta" in tile ? tile.cta : track?.cta;
            return (
              <Link
                key={tile.href}
                href={tile.href}
                target={tile.href.startsWith("http") ? "_blank" : undefined}
                rel={tile.href.startsWith("http") ? "noreferrer" : undefined}
                className={`track-product track-product--${tile.tone} track-product--${
                  tile.href.startsWith("/") ? tile.href.slice(1) : "dor"
                }`}
              >
                <div className="track-product-copy">
                  <p className="track-product-eyebrow">MedCof Anest</p>
                  <h3>{title}</h3>
                  <p>{line}</p>
                  <span className="track-product-cta">
                    {cta}
                    <span aria-hidden="true">›</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </AppleChapter>

      <FaqShowcase />
      <GetCta title={HOME_CTA.title} body={HOME_CTA.body} />
    </ProductShell>
  );
}
