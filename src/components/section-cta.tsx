import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Closing CTA for a section: repeats the same destination with wording that
 * follows the argument the reader just finished, so nobody has to scroll
 * back to find where to buy.
 */
export function SectionCta({
  href,
  children,
  note,
  align = "center",
}: {
  href: string;
  children: React.ReactNode;
  note?: string;
  align?: "center" | "start";
}) {
  const external = href.startsWith("http");

  return (
    <div className={`section-cta is-${align}`}>
      {external ? (
        <a href={href} target="_blank" rel="noreferrer" className="section-cta-link">
          {children}
          <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
        </a>
      ) : (
        <Link href={href} className="section-cta-link">
          {children}
          <ArrowRight className="size-4" strokeWidth={2.4} aria-hidden />
        </Link>
      )}
      {note ? <p className="section-cta-note">{note}</p> : null}
    </div>
  );
}
