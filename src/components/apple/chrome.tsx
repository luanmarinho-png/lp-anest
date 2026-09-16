import Link from "next/link";
import { THEMES, type ThemeId } from "@/lib/themes";
import { SectionReveal } from "@/components/section-reveal";

export function ProductShell({
  theme,
  children,
}: {
  theme: ThemeId;
  children: React.ReactNode;
}) {
  const meta = THEMES[theme];
  return (
    <div data-theme={theme} className="product-shell">
      <p className="sr-only">Você está na página {meta.product}.</p>
      {children}
    </div>
  );
}

export function AppleCtas({
  primaryHref,
  primary,
  secondaryHref,
  secondary,
  external,
}: {
  primaryHref: string;
  primary: string;
  secondaryHref: string;
  secondary: string;
  external?: boolean;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      <Link href={primaryHref} className="apple-link">
        {primary} ›
      </Link>
      <a
        href={secondaryHref}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="apple-link"
      >
        {secondary} ›
      </a>
    </div>
  );
}

export function AppleHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <SectionReveal eager>
      <section className="apple-hero px-5 pb-16 pt-14 text-center sm:pb-24 sm:pt-20">
        <div className="apple-stagger">
          {kicker ? (
            <p className="text-[21px] font-semibold tracking-[-0.02em] sm:text-[28px]">
              {kicker}
            </p>
          ) : null}
          <h1 className="apple-display mx-auto mt-2 max-w-4xl">{title}</h1>
          {lead ? (
            <p className="mx-auto mt-4 max-w-2xl text-[19px] leading-snug text-[var(--muted)] sm:text-[21px]">
              {lead}
            </p>
          ) : null}
        </div>
        {children}
      </section>
    </SectionReveal>
  );
}

export function AppleChapter({
  id,
  eyebrow,
  title,
  body,
  proof,
  children,
  alt,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  /** Short credibility line, shown as chips under the body. */
  proof?: { label: string; items: string[] };
  children?: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <SectionReveal>
      <section id={id} className="apple-section">
        <div
          className={`${alt ? "apple-module apple-module-alt" : "apple-module"} px-5 py-20 sm:py-28`}
        >
          <div className="apple-module-content">
            <div className="apple-stagger mx-auto max-w-5xl text-center">
              {eyebrow ? (
                <p className="text-sm font-semibold text-[var(--accent)]">
                  {eyebrow}
                </p>
              ) : null}
              <h2 className="apple-chapter-title mx-auto mt-3 max-w-3xl">
                {title}
              </h2>
              {body ? (
                <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-[var(--muted)] text-pretty sm:text-[19px]">
                  {body}
                </p>
              ) : null}
              {proof ? (
                <div className="proof-strip">
                  <p>{proof.label}</p>
                  <ul>
                    {proof.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            {children ? (
              <div className="mx-auto mt-12 max-w-5xl">{children}</div>
            ) : null}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

export function GetCta({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <SectionReveal>
      <section id="falar" className="apple-section">
        <div className="apple-module px-5 py-24 text-center">
          <div className="apple-module-content">
            <div className="apple-stagger">
              <h2 className="apple-chapter-title mx-auto max-w-3xl">{title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-[17px] leading-7 text-[var(--muted)]">
                {body}
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://mcf.onl/r/wpp-comercial"
                target="_blank"
                rel="noreferrer"
                className="apple-pill"
              >
                Falar com a equipe MedCof
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
