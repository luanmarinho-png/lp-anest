import Image from "next/image";
import type { Metadata } from "next";
import {
  CalendarDays,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { EventBack } from "@/components/event-back";
import { EventIntro } from "@/components/event-intro";
import { OfferBar } from "@/components/offer-bar";
import { ScrollPath } from "@/components/scroll-path";
import {
  AppleChapter,
  AppleCtas,
  AppleHero,
  GetCta,
  ProductShell,
} from "@/components/apple/chrome";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "TSA Oral",
  description:
    "Treinamento presencial Hands On para a prova oral do TSA/SBA: estações no formato oficial, casos clínicos e feedback individualizado de preceptores titulados.",
};

const DIAGNOSIS = [
  {
    n: "01",
    title: "A banca quer a resposta do jeito dela",
    body: "Não basta acertar o conteúdo: é preciso organizar o raciocínio na ordem que o examinador espera ouvir.",
  },
  {
    n: "02",
    title: "O relógio joga contra você",
    body: "O tempo entre a pergunta e o começo da sua resposta conta. Hesitar já custa ponto.",
  },
  {
    n: "03",
    title: "Caem temas complexos que você precisa dominar",
    body: "Subespecialidades que não aparecem na sua rotina, cobradas com profundidade.",
  },
  {
    n: "04",
    title: "Você responde sob pressão",
    body: "O examinador insiste para ver se você cede. Sustentar a conduta é o que separa quem passa de quem trava.",
  },
];

const PHASES = [
  {
    n: "Fase 1",
    title: "Base teórica e banco de questões",
    when: "A partir de setembro",
    body: "Conteúdo autoral, banco de questões e dois simulados online. Bônus: liberação de um bloco de aulas do Extensivo.",
  },
  {
    n: "Fase 2",
    title: "Blocos temáticos e casos clínicos",
    when: "Outubro",
    body: "Discussão semanal por Zoom e análise de casos no grupo VIP de WhatsApp, com foco em monitorização hemodinâmica, neuroanestesia, tórax, transplante e miscelânea.",
  },
  {
    n: "Fase 3",
    title: "Treinamento Hands On presencial",
    when: "17 e 18 de outubro",
    body: "Dois dias de imersão na sede João Moura (São Paulo), com estações montadas no formato da SBA, simulações reais e feedback individualizado de execução.",
  },
];

const FACULTY = [
  {
    name: "Lucas Rodrigues",
    role: "Coordenador MedCof Anest TSA",
    image: "/images/professors/lucas-3.png",
    credentials: [
      "Título Superior em Anestesiologia (TSA/SBA)",
      "Graduação em Medicina pelo Centro Universitário Christus (CE)",
      "Residência em Anestesiologia pelo Hospital Sírio-Libanês",
      "Preceptor e corresponsável de Residência Médica CET/SBA",
    ],
  },
  {
    name: "Juliano Coelho",
    role: "Professor especialista TSA",
    image: "/images/professors/juliano.png",
    credentials: [
      "Título Superior em Anestesiologia (TSA/SBA), aprovado na prova oral",
      "Anestesiologista do SMA (Serviço Médico de Anestesia)",
      "Residência em Anestesiologia pelo CET/SMA",
      "Preceptor de Residência Médica do CET/SMA",
    ],
  },
  {
    name: "Rafael Romaro",
    role: "Professor especialista TSA",
    image: "/images/professors/rafael-3.png",
    credentials: [
      "Título Superior em Anestesiologia (TSA/SBA)",
      "Anestesiologista pelo Hospital Sírio-Libanês (CET/SBA)",
      "Ex-preceptor de Residência Médica do Hospital Sírio-Libanês",
      "Membro do núcleo de anestesia cardiovascular da SAESP",
    ],
  },
];

const VENUE = [
  "Salas de simulação realística",
  "Equipamentos e monitores de última geração",
  "Refeição no local nos dois dias",
  "Estacionamento na sede",
  "Pinheiros, região bem localizada de São Paulo",
];

const INCLUDED = [
  "Banco de questões autorais",
  "Discussões semanais do conteúdo programático",
  "Análises de casos clínicos",
  "Simulados autorais",
  "Treinamento Hands On presencial na sede MedCof em São Paulo",
  "Simulação realística de arguição oral no modelo oficial da banca",
  "Feedback individualizado com anestesiologistas TSA",
  "Acesso direto e contínuo aos preceptores",
];

export default function Page() {
  return (
    <ProductShell theme="tsaoral">
      <div className="event-bar">
        <div className="event-bar-inner">
          <EventBack fallback={{ href: "/", label: "Ver todas as trilhas" }} />
          <p className="event-chips">
            <span>
              <CalendarDays className="size-4" strokeWidth={2.4} aria-hidden />
              17 e 18 de outubro
            </span>
            <span>
              <MapPin className="size-4" strokeWidth={2.4} aria-hidden />
              Sede João Moura · São Paulo
            </span>
            <span className="is-alert">
              <ShieldCheck className="size-4" strokeWidth={2.4} aria-hidden />
              Vagas limitadas
            </span>
          </p>
        </div>
      </div>

      <div className="event-logo">
        <EventIntro
          src="/videos/medcof-anest-intro.webm"
          poster="/images/tsa-oral/tsa-oral-logo.png"
          alt="Hands On MedCof Anest TSA Oral"
        />
      </div>

      <AppleHero
        title="A prova oral não perdoa quem só sabe a teoria"
        lead="Na prova oral o tempo é curto e o examinador está na sua frente. Não é mais aula teórica que resolve isso: é treino de verdade, com alguém te corrigindo enquanto você responde."
      >
        <AppleCtas
          primaryHref={WHATSAPP_URL}
          primary="Quero minha vaga"
          secondaryHref="#estrutura"
          secondary="Ver a estrutura"
          external
        />
      </AppleHero>

      <ScrollPath
        id="diagnostico"
        title="Muito anestesiologista tem medo da prova oral. A gente pega na sua mão e te ensina."
        lead="Não é falta de conhecimento. É falta de treino no formato que a banca cobra."
        points={DIAGNOSIS}
        variant="ladder"
        ctaHref="#estrutura"
        ctaLabel="Ver como o treinamento funciona"
      />

      <AppleChapter
        id="estrutura"
        eyebrow="Metodologia e estrutura oficial"
        title="Como o treinamento funciona"
        body="São três etapas que se completam, da base teórica até os dois dias presenciais."
      >
        <div className="story-pulse-grid">
          {PHASES.map((phase, index) => (
            <article
              key={phase.n}
              className={`story-pulse-card ${index === 2 ? "is-accent" : ""}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p>{phase.n}</p>
              <h3>{phase.title}</h3>
              <p className="tsa-oral-when">
                <CalendarDays className="size-4" strokeWidth={2.2} aria-hidden />
                {phase.when}
              </p>
              <p>{phase.body}</p>
            </article>
          ))}
        </div>

        <div className="tsa-oral-notice">
          <p className="tsa-oral-notice-title">
            <ShieldCheck className="size-5" strokeWidth={2.2} aria-hidden />
            Vagas estritamente limitadas
          </p>
          <p>
            Cada estação precisa de um professor titulado olhando só para você,
            corrigindo na hora. É por isso que a turma é pequena: não dá para
            fazer esse tipo de correção com sala cheia.
          </p>
          <p className="tsa-oral-notice-place">
            <MapPin className="size-4" strokeWidth={2.2} aria-hidden />
            Treinamento Hands On presencial · Sede João Moura, São Paulo
          </p>
        </div>
      </AppleChapter>

      <AppleChapter
        id="sede"
        eyebrow="A sede"
        title="Estrutura completa para receber você"
        body="Os dois dias acontecem na nossa sede em Pinheiros, montada para você chegar, treinar e não se preocupar com mais nada."
      >
        <div className="venue">
          <div className="venue-media">
            <Image
              src="/images/sede/sede-joao-moura.jpg"
              alt="Sede MedCof na Rua João Moura, em Pinheiros, São Paulo"
              fill
              sizes="(max-width: 900px) 92vw, 52vw"
              quality={90}
              className="venue-image"
            />
          </div>
          <ul className="venue-list">
            {VENUE.map((item) => (
              <li key={item}>
                <CheckCircle2 className="size-5" strokeWidth={2.2} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </AppleChapter>

      <AppleChapter
        id="investimento"
        alt
        eyebrow="Condição exclusiva"
        title="Garanta sua vaga na turma"
        body="Treino prático com preceptores titulados e turma pequena, para que cada um receba correção de verdade."
      >
        <div className="offer-grid mx-auto max-w-xl">
          <article className="offer-card is-featured">
            <p className="offer-recommended">
              <Sparkles className="size-3.5" strokeWidth={2.2} aria-hidden />
              Economize R$ 1.000
            </p>
            <p className="offer-badge is-access">
              Treinamento prático + teórico integrado
            </p>
            <h3>Preparatório Completo TSA Oral</h3>
            <p className="offer-equivalent">
              Tudo o que você precisa para a prova prática, mais o aprofundamento
              nas subespecialidades que a banca gosta de cobrar.
            </p>
            <div className="offer-price">
              <p className="offer-from">De R$ 11.497,00</p>
              <p className="offer-installment">
                <span>12x de</span> R$ 1.050,05
              </p>
              <p className="offer-cash">ou à vista por R$ 10.497,00</p>
            </div>
            <p className="offer-note">
              Garantia incondicional de 7 dias · vagas limitadas.
            </p>
            <ul>
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="apple-pill"
            >
              Garantir minha vaga
            </a>
          </article>
        </div>
      </AppleChapter>

      <AppleChapter
        id="docentes"
        eyebrow="Corpo docente titulado TSA/SBA"
        title="Quem vai te corrigir já sentou nessa cadeira"
        body="Todos aqui passaram pela prova e sabem o que o examinador espera ouvir."
      >
        <div className="tsa-oral-faculty">
          {FACULTY.map((person) => (
            <article key={person.name} className="tsa-oral-teacher">
              <div className="tsa-oral-teacher-media">
                <Image
                  src={person.image}
                  alt={`${person.name}, ${person.role}`}
                  fill
                  sizes="(max-width: 700px) 86vw, 30vw"
                  quality={100}
                  className="tsa-oral-teacher-image"
                  data-static-media
                />
              </div>
              <p className="tsa-oral-teacher-tag">Titulação máxima TSA/SBA</p>
              <h3>{person.name}</h3>
              <p className="tsa-oral-teacher-role">{person.role}</p>
              <ul>
                {person.credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </AppleChapter>

      <OfferBar
        label="Hands On TSA Oral"
        price="12x de R$ 1.050,05"
        href="#investimento"
        cta="Garantir minha vaga"
        hideNear="#investimento"
      />

      <GetCta
        title="Ainda na dúvida se a turma é para você?"
        body="Fala com a nossa equipe. Em poucos minutos dá para saber se o treino presencial resolve o que está faltando na sua preparação."
      />
    </ProductShell>
  );
}
