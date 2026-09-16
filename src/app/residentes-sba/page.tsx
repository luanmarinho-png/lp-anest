import { AppleProductPage } from "@/components/track-page";
import { TRACKS } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residentes SBA",
  description:
    "Estude com o método que sincroniza o conteúdo da especialidade ao calendário oficial da SBA. QBank com +4.000 questões comentadas e revisões focadas.",
};

export default function Page() {
  return <AppleProductPage theme="sba" data={TRACKS["residentes-sba"]} />;
}
