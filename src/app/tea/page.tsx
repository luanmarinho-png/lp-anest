import { AppleProductPage } from "@/components/track-page";
import { TRACKS } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEA",
  description:
    "Conquiste o RQE em Anestesiologia com o preparatório MedCof Anest para o TEA. Banco de questões, simulados mensais e cronograma alinhado à SBA.",
};

export default function Page() {
  return <AppleProductPage theme="tea" data={TRACKS.tea} />;
}
