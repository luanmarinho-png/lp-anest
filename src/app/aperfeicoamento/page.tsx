import type { Metadata } from "next";
import {
  AppleChapter,
  AppleCtas,
  AppleHero,
  GetCta,
  ProductShell,
} from "@/components/apple/chrome";
import { CourseCatalog } from "@/components/course-catalog";
import { SectionCta } from "@/components/section-cta";
import { OfferBar } from "@/components/offer-bar";
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
        professor={{
          name: "Dr. Juliano Coelho",
          role: "Professor MedCof Anest",
          credentials: [
            "Título Superior em Anestesiologia (TSA/SBA)",
            "Anestesiologista do SMA, Serviço Médico de Anestesia",
            "Preceptor de Residência Médica do CET/SMA",
          ],
        }}
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
        title="Se destaque no centro cirúrgico"
        body="Cursos curtos e diretos nos temas que mudam o desfecho dos pacientes, com professores que fazem isso todo dia."
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

        <SectionCta href="#cursos">Ver os cursos</SectionCta>
      </AppleChapter>

      <CourseCatalog
        courses={COURSES}
        title="Todos os cursos de aperfeiçoamento"
        lead="O Hands On é o caminho completo: o conteúdo online mais dois dias escaneando em modelo vivo."
      />

      <OfferBar
        label="Anest US"
        price="a partir de 12x R$ 208,08"
        href="#cursos"
        cta="Ver cursos"
        hideNear="#cursos"
      />

      <GetCta
        title="Quer saber qual curso resolve o seu caso?"
        body="Fala com a nossa equipe e conta o que você quer destravar na sala. A gente indica por onde começar."
      />
    </ProductShell>
  );
}
