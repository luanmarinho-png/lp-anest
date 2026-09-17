import type { Metadata } from "next";
import { AppleCtas, AppleHero, GetCta, ProductShell } from "@/components/apple/chrome";
import {
  SecondPhaseChooser,
  type SecondPhaseTrack,
} from "@/components/second-phase";
import { OfferBar } from "@/components/offer-bar";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Segunda Fase",
  description:
    "As duas segundas fases da SBA num lugar só: prova prática do TEA e prova oral do TSA, com simulações no formato oficial e feedback de preceptores titulados.",
};

const TRACKS: SecondPhaseTrack[] = [
  {
    id: "tsa",
    eyebrow: "Prova oral · TSA",
    title: "TSA Oral",
    teaser:
      "Dois dias de treino presencial, com arguição simulada no modelo da banca e turma pequena.",
    href: "/tsa-oral",
    logo: {
      src: "/images/tsa-oral/tsa-oral-logo.png",
      alt: "Hands On MedCof Anest TSA Oral",
    },
    lead: "Na oral não adianta saber: tem que responder rápido, no formato certo e sem travar. Isso só vem com treino de verdade, presencial.",
    advantages: [
      {
        title: "Dois dias de Hands On em São Paulo",
        body: "Imersão na sede João Moura, com estações montadas exatamente no formato da SBA.",
      },
      {
        title: "Arguição simulada com quem já foi banca",
        body: "Preceptores titulados TSA conduzem a arguição como no dia real.",
      },
      {
        title: "Feedback um a um",
        body: "Turma pequena de propósito: cada participante ouve o que precisa corrigir na própria execução.",
      },
    ],
    cta: { href: "/tsa-oral", label: "Conhecer o TSA Oral" },
    note: "Turma com vagas limitadas · 17 e 18 de outubro.",
    image: {
      src: "/images/professors/rafael-3.png",
      alt: "Rafael Romaro, preceptor titulado TSA da MedCof Anest",
    },
  },
  {
    id: "tea",
    eyebrow: "Prova prática · TEA",
    title: "Segunda Fase TEA",
    teaser:
      "Estações no formato oficial, com tempo curto e avaliador na frente. Turma em preparação.",
    lead: "Você já provou que sabe a teoria. Agora a banca quer ver você conduzir: estação por estação, com o cronômetro rodando.",
    soon: true,
    advantages: [
      {
        title: "Estações no formato oficial",
        body: "Você treina no mesmo desenho da prova, até a sequência virar automática.",
      },
      {
        title: "Casos clínicos comentados",
        body: "Os cenários que mais caem, discutidos do jeito que o avaliador espera ouvir.",
      },
      {
        title: "Correção olhando para você",
        body: "Não é nota no papel: é alguém apontando o que você fez fora do padrão e como arrumar antes do dia.",
      },
    ],
    cta: { href: "/tea", label: "Ver preparatórios do TEA" },
    note: "Faz parte da trilha TEA.",
    image: {
      src: "/images/anest-home/mec-anesthesia-station-hq.png",
      alt: "Estação de anestesia em centro cirúrgico",
    },
  },
];

export default function Page() {
  return (
    <ProductShell theme="fase2">
      <AppleHero
        kicker="Segunda Fase"
        title="Com o treino certo, a segunda fase deixa de ser o seu problema"
        lead="A primeira fase se resolve estudando. A segunda se resolve treinando, de preferência antes de você estar na frente do avaliador."
      >
        <AppleCtas
          primaryHref="#opcoes"
          primary="Escolher a minha"
          secondaryHref={WHATSAPP_URL}
          secondary="Falar com um especialista"
          external
        />
      </AppleHero>

      <SecondPhaseChooser tracks={TRACKS} />

      <OfferBar
        label="Segunda Fase"
        price="TSA Oral com vagas limitadas"
        href="#opcoes"
        cta="Ver opções"
        hideNear="#opcoes"
      />

      <GetCta
        title="Não sabe qual das duas é a sua?"
        body="Conta pra gente em que ponto da titulação você está. A coordenação indica o caminho e não empurra o que você não precisa."
      />
    </ProductShell>
  );
}
