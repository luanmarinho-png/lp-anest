import { AppleProductPage } from "@/components/track-page";
import { TRACKS } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TSA",
  description:
    "Treinamento de alta densidade para o Título Superior em Anestesiologia (TSA/SBA). QBank com 4 mil questões, 5 mil flashcards e coordenação HSL/HAOC.",
};

export default function Page() {
  return <AppleProductPage theme="tsa" data={TRACKS.tsa} />;
}
