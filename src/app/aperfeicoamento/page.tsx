import type { Metadata } from "next";
import {
  AppleChapter,
  AppleCtas,
  AppleHero,
  GetCta,
  ProductShell,
} from "@/components/apple/chrome";
import { CourseCatalog } from "@/components/course-catalog";
import { COURSES, PILLARS } from "@/lib/courses";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aperfeiçoamento",
  description:
    "Cursos de aperfeiçoamento em anestesiologia: Hands On Anest US, Anest US Online, ECO-TE e ROTEM, com prática em modelo vivo e protocolos do centro cirúrgico.",
};

export default function Page() {
  return (
    <ProductShell theme="craft">
      <AppleHero
        kicker="Aperfeiçoamento"
        title="A técnica que a residência não teve tempo de te ensinar"
        lead="Cursos práticos para as frentes que mais mudam o resultado na sala, com quem faz isso todo dia nos maiores hospitais do país."
      >
        <AppleCtas
          primaryHref="#cursos"
          primary="Ver cursos"
          secondaryHref={WHATSAPP_URL}
          secondary="Falar com um especialista"
          external
        />
      </AppleHero>

      <AppleChapter
        id="metodo"
        eyebrow="Programa"
        title="Ninguém aprende ultrassom assistindo vídeo"
        body="Você já sabe a teoria. O que falta é a hora em que o probe está na sua mão, a imagem não aparece e tem alguém do lado para dizer o que corrigir. É isso que a gente faz aqui."
      >
        <div className="story-pulse-grid">
          {PILLARS.map((pillar, index) => (
            <article
              key={pillar.n}
              className={`story-pulse-card ${index === 1 ? "is-accent" : ""}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p>{pillar.n}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </AppleChapter>

      <CourseCatalog
        courses={COURSES}
        title="Todos os cursos de aperfeiçoamento"
        lead="O Hands On é o caminho completo: o conteúdo online mais dois dias escaneando em modelo vivo."
      />

      <GetCta
        title="Quer saber qual curso resolve o seu caso?"
        body="Fala com a nossa equipe e conta o que você quer destravar na sala. A gente indica por onde começar."
      />
    </ProductShell>
  );
}
