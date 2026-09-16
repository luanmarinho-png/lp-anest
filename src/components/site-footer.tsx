import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, TERMS_URL, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-anest.png"
            alt="MedCof Anest"
            width={1024}
            height={228}
            className="h-auto w-32"
          />
          <p className="max-w-sm border-l border-black/10 pl-4 text-[11px] leading-4">
            Preparação para ME, TEA e TSA e treinamentos de aperfeiçoamento em
            anestesiologia.
          </p>
        </div>
        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <a href={TERMS_URL} target="_blank" rel="noreferrer" className="hover:underline">
            Termos
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function ContactFab() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-center px-4 py-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir contato pelo WhatsApp"
          className="pointer-events-auto inline-flex min-h-11 items-center rounded-full bg-[#c1272d] px-5 text-xs font-medium text-white transition-transform active:scale-[0.96]"
        >
          Entrar em contato
        </a>
      </div>
    </div>
  );
}
