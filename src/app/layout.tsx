import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lp-anest.vercel.app"),
  title: {
    default: "MedCof Anest | Preparatório TEA e TSA",
    template: "%s · MedCof Anest",
  },
  description:
    "Plataforma completa com cronograma integrado ao calendário da SBA, banco de questões, CofBot e flashcards.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--brand-gray)] text-[var(--brand-black)]">
        <noscript>
          <style>{`.section-reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
