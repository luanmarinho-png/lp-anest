import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function BrandButton({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const props = external
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};
  return (
    <Link
      href={href}
      {...props}
      className={`btn-brand inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const props = external
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};
  return (
    <Link
      href={href}
      {...props}
      className={`btn-secondary inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-ink ${className}`}
    >
      {children}
    </Link>
  );
}

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <BrandButton href="#planos">
        Ver planos <ArrowRight className="size-[18px]" />
      </BrandButton>
      <SecondaryButton href={WHATSAPP_URL} external>
        <MessageCircle className="size-[18px]" />
        Falar com um especialista
      </SecondaryButton>
    </div>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-5 text-[#444]">
      <span className="mt-0.5 flex size-4 flex-none items-center justify-center rounded-full bg-brand-soft text-brand">
        <Check className="size-[11px]" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
      {children}
    </span>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-brand">{children}</p>
  );
}

export function ProofStats() {
  const items = [
    { value: "+4 mil", label: "questões comentadas no QBank" },
    { value: "5 mil", label: "flashcards para repetição espaçada" },
    { value: "SBA / MEC", label: "conteúdo orientado aos calendários oficiais" },
  ];
  return (
    <section className="border-y border-black/[0.05] bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <div key={item.value} className="text-center sm:text-left">
            <p className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink tabular-nums">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-[#666]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="border-t border-black/[0.05] bg-white px-6 py-20 sm:py-28 lg:px-8">
      <div className="surface-shell mx-auto max-w-5xl overflow-hidden">
        <div className="page-noise px-6 py-14 text-center sm:px-12 sm:py-16">
          <Kicker>Próximo passo</Kicker>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
            Estude com a plataforma mais completa de Anestesiologia
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#555] sm:text-lg">
            Todas as funcionalidades trabalham de forma sinérgica no seu painel
            para filtrar o conteúdo e blindar a sua preparação. Fale com a nossa
            coordenação técnica e inicie o seu cronograma.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <BrandButton href={WHATSAPP_URL} external>
              Falar com a equipe MedCof
            </BrandButton>
            <SecondaryButton href="#planos">
              Ver opções de matrícula
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
