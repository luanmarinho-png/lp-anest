import { AppleProductPage } from "@/components/track-page";
import { TRACKS } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residentes MEC",
  description:
    "Prepare-se para o TEA durante a residência MEC. Aulas completas, 5 mil flashcards, QBank com +4.000 questões comentadas e fichas práticas.",
};

export default function Page() {
  return <AppleProductPage theme="mec" data={TRACKS["residentes-mec"]} />;
}
