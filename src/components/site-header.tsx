"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { THEME_BY_PATH, THEMES } from "@/lib/themes";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const theme = THEMES[THEME_BY_PATH[pathname] ?? "store"];

  return (
    <>
      <header className="global-nav sticky top-0 z-50">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-4 px-5"
        >
          <Link href="/" aria-label="MedCof Anest, início" className="shrink-0">
            <Image
              src="/logo-anest.png"
              alt="MedCof Anest"
              width={140}
              height={32}
              priority
              className="h-6 w-auto"
            />
          </Link>
          <div className="hidden min-w-0 items-center justify-center gap-5 overflow-x-auto text-[12px] text-[#1d1d1f]/70 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link whitespace-nowrap ${
                    active ? "is-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <button
            type="button"
            className="flex size-11 items-center justify-center text-[#1d1d1f] md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        {open ? (
          <div className="border-t border-black/6 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={`nav-link rounded-xl px-3 py-3 text-sm ${
                    pathname === link.href ? "is-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <div className="progress-shell sticky top-12 z-40" data-theme={theme.id}>
        <div className="reading-progress" aria-hidden="true">
          <span className="reading-progress-track" />
          <span className="reading-progress-fill" />
          <span className="reading-progress-icon">
            <Image
              src="/images/brand/laryngoscope.png"
              alt=""
              width={48}
              height={62}
              priority
            />
          </span>
        </div>
      </div>
    </>
  );
}
