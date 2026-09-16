import type { Metadata } from "next";
import {
  AppleCtas,
  AppleHero,
  GetCta,
  ProductShell,
} from "@/components/apple/chrome";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dor",
  description:
    "Trilha de Dor do MedCof Anest. Fale com a coordenação para conhecer a preparação.",
};

export default function DorPage() {
  return (
    <ProductShell theme="dor">
      <AppleHero
        kicker="Dor"
        title="A trilha está sendo organizada neste endereço."
        lead="Enquanto a página completa entra no mesmo ritmo das outras, a coordenação já posiciona você no módulo certo."
      >
        <AppleCtas
          primaryHref="/"
          primary="Ver as trilhas"
          secondaryHref={WHATSAPP_URL}
          secondary="Falar com a equipe"
          external
        />
      </AppleHero>
      <GetCta
        title="A coordenação já atende a jornada de Dor."
        body="Não espere o layout final para começar. Fale agora e entre na trilha."
      />
    </ProductShell>
  );
}
