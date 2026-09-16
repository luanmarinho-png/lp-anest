"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Download,
  PlayCircle,
  Plus,
  RefreshCw,
  Smartphone,
  WifiOff,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionReveal } from "@/components/section-reveal";
import { WHATSAPP_URL } from "@/lib/site";

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.34-.07 2.28.75 3.08.75.79 0 2.02-.99 3.4-.84.58.02 2.2.23 3.24 1.75-2.83 1.64-2.39 5.36.49 6.52-.57 1.5-1.31 2.99-2.21 4.79ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z"
      />
    </svg>
  );
}

function AndroidMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="m7.2 6.55-1.1-1.9.75-.43 1.12 1.94A7.8 7.8 0 0 1 12 5.05c1.45 0 2.82.4 4.03 1.11l1.12-1.94.75.43-1.1 1.9A6.77 6.77 0 0 1 19 11.5H5a6.77 6.77 0 0 1 2.2-4.95ZM8.5 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm7 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 12.5h14v6.25A2.25 2.25 0 0 1 16.75 21h-.25v-3h-1v3h-7v-3h-1v3h-.25A2.25 2.25 0 0 1 5 18.75V12.5Z"
      />
    </svg>
  );
}

const FEATURES = [
  {
    kicker: "Videoaulas",
    title: "Aulas diretas, sem perder profundidade",
    body: "Conteúdo produzido por anestesiologistas, separado em blocos que cabem entre plantões, salas e revisões.",
    image: "/images/features/aulas-macbook.png",
  },
  {
    kicker: "Flashcards",
    title: "Flashcards gerados por IA a partir das questões",
    body: "O sistema cria os cards com base nos comentários das questões e agenda as revisões com algoritmo similar ao do Anki.",
    image: "/images/features/flashcards-ia.png",
  },
  {
    kicker: "Fichas-resumo",
    title: "Revise nos intervalos do plantão",
    body: "Material direcionado para otimizar o estudo durante o plantão, com os pontos essenciais organizados para consultas e revisões rápidas.",
    image: "/images/features/fichas-resumo-anest.jpg",
  },
  {
    kicker: "Metodologia",
    title: "Metodologia completa em cada aula",
    body: "Além da aula, você recebe questões de nivelamento, flashcards e material didático para cada tema.",
    image: "/images/features/metodologia-unidade.png",
  },
  {
    kicker: "Banco de questões",
    title: "Entenda a resposta e o raciocínio da banca",
    body: "Resoluções em texto e vídeo analisam cada alternativa para que você reconheça padrões e corrija lacunas.",
    image: "/images/features/questoes-comentadas-phones.png",
  },
  {
    kicker: "Inteligência artificial MedCof",
    title: "Pergunte e encontre a resposta na palma da sua mão",
    body: "O CofBot consulta uma base confiável formada pelos comentários das questões e pelas transcrições das aulas MedCof para responder com rapidez e contexto.",
    image: "/images/features/cofbot-hand-transparent.png",
  },
] as const;

const QUESTION_OPTIONS = [
  {
    letter: "A",
    correct: false,
    statement:
      "As estruturas 1, 2 e 3 correspondem aos fascículos anterior, médio e lateral, respectivamente.",
    explanation:
      "A estrutura 1 representa o tronco superior, formado pelas raízes nervosas de C5 e C6, podendo receber a contribuição de C4, no plexo braquial pré-fixado. A estrutura 2 representa o tronco médio, formado por C7. Por fim, a estrutura 3 representa o tronco inferior, formado pelas raízes de C8 e T1, podendo ter contribuição de T2, no plexo braquial pós-fixado.",
    percentage: "3,45%",
  },
  {
    letter: "B",
    correct: false,
    statement:
      "O nervo musculocutâneo, representado pela estrutura 4, é responsável pela extensão do cotovelo e pronação do antebraço.",
    explanation:
      "O nervo musculocutâneo é responsável pela flexão do cotovelo e supinação do antebraço. A extensão do cotovelo é controlada principalmente pelo nervo radial, enquanto a pronação é controlada pelo nervo mediano.",
    percentage: "6,90%",
  },
  {
    letter: "C",
    correct: true,
    statement:
      "O nervo supraescapular, estrutura 5, formado pelas raízes de C5 e C6, pode ser seletivamente bloqueado para auxílio na analgesia do ombro.",
    explanation:
      "O nervo supraescapular, representado pela estrutura 5, é formado pelas raízes C5 e C6 do plexo braquial e pode ser bloqueado seletivamente para analgesia do ombro, sendo uma excelente opção para controle de dor em procedimentos no ombro. Ele é responsável pela inervação sensitiva e motora do músculo supraespinhal e parte do infraespinhal, ambos responsáveis por movimentos do ombro.",
    percentage: "68,97%",
  },
  {
    letter: "D",
    correct: false,
    statement:
      "A dispersão do anestésico local atingindo a estrutura 6, que corresponde ao nervo frênico, é responsável por paralisia de hemidiafragma ipsilateral.",
    explanation:
      "A estrutura 6 é o nervo peitoral medial, e o nervo frênico não está na imagem. Quando realizamos um bloqueio nessa altura, estamos realizando o interescalênico. Para evitar o bloqueio do nervo frênico, utilizamos uma abordagem mais inferior, desde que contemple o nervo supraescapular. Se o nervo frênico for acometido, pode haver paralisia do hemidiafragma ipsilateral.",
    percentage: "20,69%",
  },
] as const;

const PROFESSORS = [
  {
    name: "Dr. Lucas Rodrigues",
    role: "Coordenador e Professor MedCof Anest · TSA",
    image: "/images/professors/lucas-3.png",
    credentials: [
      "Residência em Anestesiologia pelo Hospital Sírio-Libanês",
      "Título Superior de Anestesiologia pela SBA",
      "Preceptor e corresponsável de Residência Médica",
    ],
  },
  {
    name: "Dr. Alessandro Silvestre",
    role: "Coordenador e Professor MedCof Anest · TEA",
    image: "/images/professors/alessandronew2.png",
    credentials: [
      "Anestesiologista pelo Hospital Alemão Oswaldo Cruz",
      "Ex-preceptor do Hospital Sírio-Libanês",
      "Diretor de Ensino e Inovação do grupo MAASP",
    ],
  },
  {
    name: "Dr. Luan Marinho",
    role: "Coordenador e Professor MedCof Anest · Geral",
    image: "/images/professors/luan-new.png",
    credentials: [
      "Anestesiologista e pós-graduado em Dor pelo Hospital Sírio-Libanês",
      "Observership no Hospital S. Orsola, Itália",
      "Coordenador do Grupo MedCof",
    ],
  },
  {
    name: "Dr. Rafael Romaro",
    role: "Professor MedCof Anest · TSA",
    image: "/images/professors/rafael-3.png",
    credentials: [
      "Anestesiologista pelo Hospital Sírio-Libanês, TSA/SBA",
      "Ex-preceptor do CET/SBA do Hospital Sírio-Libanês",
      "Membro do núcleo de anestesia cardiovascular da SAESP",
    ],
  },
  {
    name: "Dr. Gustavo Torres",
    role: "Professor MedCof Anest · TSA",
    image: "/images/professors/gustavonew2.png",
    credentials: [
      "Anestesiologista TSA/SBA, EDAIC",
      "Fellowship em transplante hepático no Hospital Paul Brousse, França",
      "Anestesista da equipe de transplante hepático da Rede D'Or",
    ],
  },
  {
    name: "Dr. Guilherme Orfali",
    role: "Professor MedCof Anest · TSA",
    image: "/images/professors/guilherme-orfali.png",
    credentials: [
      "Anestesiologista pela EPM/UNIFESP, TSA/SBA",
      "Título em Medicina da Dor pela AMB",
      "Corresponsável do CET da EPM/UNIFESP",
    ],
  },
  {
    name: "Dra. Estefane Gaspar",
    role: "Professora MedCof Anest · TSA",
    image: "/images/professors/estefane-gaspar.png",
    credentials: [
      "Anestesiologista pelo Hospital de Base do DF, TSA/SBA",
      "Fellow em anestesia cardiovascular pelo Instituto Dante Pazzanese",
      "Assistente do ICESP/HCFMUSP",
    ],
  },
  {
    name: "Dr. Daniel Gonçalves",
    role: "Professor MedCof Anest · TEA",
    image: "/images/professors/danielnew2.png",
    credentials: [
      "Anestesiologista pelo Hospital Sírio-Libanês",
      "R4 em anestesia pediátrica pelo HC-FMUSP",
      "Equipe de transplante hepático pediátrico do Hospital Sírio-Libanês",
    ],
  },
  {
    name: "Dr. Gustavo Miná",
    role: "Professor MedCof Anest · TEA",
    image: "/images/professors/gustavo-minas.png",
    credentials: [
      "Anestesiologista pelo Hospital Sírio-Libanês, TEA/SBA",
      "Ex-preceptor da Residência Médica do Hospital Sírio-Libanês",
      "Pós-graduação em Anestesia Obstétrica pelo Hospital Santa Joana",
    ],
  },
  {
    name: "Dra. Larissa Chignoli",
    role: "Professora MedCof Anest · TEA",
    image: "/images/professors/larissa-chignoli.png",
    credentials: [
      "Médica e anestesiologista pela FMUSP",
      "Pós-graduação em Anestesia Obstétrica pelo Hospital Santa Joana",
      "Médica assistente do Instituto do Coração HCFMUSP",
    ],
  },
  {
    name: "Dra. Ana Beatriz Gondim",
    role: "Professora MedCof Anest · TEA",
    image: "/images/professors/ana-beatriz-gondim.png",
    credentials: [
      "Anestesiologista pelo Hospital Alemão Oswaldo Cruz",
      "Título de Especialista em Anestesiologia, TEA/SBA",
      "Preceptora da Residência Médica do Hospital Sírio-Libanês",
    ],
  },
  {
    name: "Dr. Bruce Werner",
    role: "Professor MedCof Anest · TEA",
    image: "/images/professors/bruce-sf.png",
    credentials: [
      "Anestesiologista pelo IAMSPE",
      "Título de Especialista em Anestesiologia, TEA/SBA",
      "Assistente de residência médica CET/SBA",
    ],
  },
] as const;

const FAQS = [
  {
    question: "Para quem é o Extensivo TEA 2027?",
    answer:
      "O Extensivo TEA 2027 é indicado para anestesiologistas e residentes que vão prestar o Título de Especialista em Anestesiologia e precisam de uma preparação estruturada, contínua e estratégica. É ideal para quem tem pouco tempo, mas busca constância, foco nos padrões da prova e evolução ao longo do ano.",
  },
  {
    question: "Para quem é o Extensivo TSA?",
    answer:
      "O Extensivo TSA é voltado para médicos que desejam aprovação no Título Superior em Anestesiologia, com preparação aprofundada e direcionada ao nível de exigência da prova. É indicado para quem já possui base sólida e precisa lapidar raciocínio, condutas e tomada de decisão.",
  },
  {
    question: "Para quem é o Extensivo Residência em Anestesiologia?",
    answer:
      "Foi desenvolvido para residentes R1, R2 e R3 que desejam estudar de forma organizada durante a residência e construir uma base forte para as provas de título. A estrutura respeita a rotina de plantões, com trilhas guiadas, tarefas mínimas semanais e simulados estratégicos.",
  },
  {
    question: "As aulas são todas online ou há componentes presenciais?",
    answer:
      "O Extensivo MedCof Anest é 100% online, permitindo que você estude de onde estiver e no seu ritmo. Eventos presenciais e revisões especiais podem ser oferecidos como experiências complementares ao longo do ano.",
  },
  {
    question: "Como os simulados ajudam na preparação para o TEA e TSA?",
    answer:
      "Os simulados seguem o padrão real das provas, permitindo identificar pontos fracos, treinar tomada de decisão e entender o estilo da banca. Cada simulado inclui correção comentada e direcionamento estratégico de estudo.",
  },
  {
    question: "O que são as Tarefas Mínimas Semanais?",
    answer:
      "São atividades essenciais definidas pelos coordenadores para garantir constância e foco. Elas indicam exatamente o que estudar em cada semana e ajudam a manter a disciplina mesmo na rotina de plantões.",
  },
  {
    question: "O curso é indicado para quem já é anestesiologista formado?",
    answer:
      "Sim. O MedCof Anest atende residentes e anestesiologistas já formados que desejam prestar TEA, TSA ou provas quadrimestrais, com foco em atualização, raciocínio de prova e alto rendimento.",
  },
  {
    question: "Posso cancelar minha inscrição se não estiver satisfeito?",
    answer:
      "Sim. O MedCof oferece política de garantia, permitindo que você conheça a plataforma, o método e os materiais antes de tomar uma decisão definitiva.",
  },
  {
    question: "Qual é a diferença entre o método MedCof Anest e o método tradicional?",
    answer:
      "Enquanto o método tradicional prioriza volume de conteúdo, o MedCof Anest foca em estratégia, padrões de prova e tomada de decisão. Você estuda o que realmente cai, com direcionamento contínuo, simulados estratégicos e acompanhamento pedagógico.",
  },
] as const;

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setActiveFeature((current) => (current + 1) % FEATURES.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <SectionReveal>
      <section id="funcionalidades" className="apple-section feature-section">
          <div className="feature-showcase">
            <header className="feature-showcase-header">
              <p className="text-sm font-semibold text-[var(--accent)]">Plataforma</p>
              <h2 className="apple-chapter-title mt-3">Tudo trabalha junto no seu estudo</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-[var(--muted)]">
                Explore cada recurso e veja como a plataforma acompanha a sua preparação.
              </p>
            </header>

            <div
              className={paused ? "feature-explorer is-paused" : "feature-explorer"}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setPaused(false);
                }
              }}
            >
              <div className="feature-controls" role="tablist" aria-label="Funcionalidades">
                {FEATURES.map((feature, index) => {
                  const active = activeFeature === index;
                  return (
                    <div
                      key={feature.title}
                      className={active ? "feature-control is-active" : "feature-control"}
                    >
                      <button
                        type="button"
                        role="tab"
                        id={`feature-tab-${index}`}
                        aria-selected={active}
                        aria-controls={`feature-panel-${index}`}
                        className="feature-control-trigger"
                        onClick={() => setActiveFeature(index)}
                      >
                        <span className="feature-control-title">
                          <span className="feature-control-icon" aria-hidden="true">
                            <Plus />
                          </span>
                          {feature.kicker}
                        </span>
                      </button>
                      <span className="feature-control-content">
                        <strong>{feature.title}</strong>
                        <span>{feature.body}</span>
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="feature-viewer">
                {FEATURES.map((feature, index) => (
                  <div
                    key={feature.image}
                    id={`feature-panel-${index}`}
                    role="tabpanel"
                    aria-labelledby={`feature-tab-${index}`}
                    aria-hidden={activeFeature !== index}
                    className={`${activeFeature === index ? "feature-frame is-active" : "feature-frame"}${
                      feature.image.includes("cofbot") ? " is-cofbot" : ""
                    }${feature.image.includes("fichas-resumo") ? " is-fichas" : ""}`}
                  >
                    <Image
                      src={feature.image}
                      alt={`${feature.kicker} na plataforma MedCof`}
                      width={1240}
                      height={1240}
                      quality={100}
                      sizes="(max-width: 900px) 96vw, 1200px"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    </SectionReveal>
  );
}

export function AppShowcase() {
  return (
    <SectionReveal>
      <section id="aplicativo" className="apple-section">
        <div className="apple-module app-showcase">
          <div className="app-showcase-copy">
            <p className="app-showcase-kicker">
              <Smartphone aria-hidden="true" />
              Aplicativo MedCof
            </p>
            <h2>Sua preparação continua, mesmo sem internet.</h2>
            <p className="app-showcase-lead">
              No aplicativo para iOS e Android, você resolve todas as questões e
              acompanha sua preparação completa onde estiver.
            </p>

            <div className="offline-highlight">
              <div className="offline-highlight-icon">
                <WifiOff aria-hidden="true" />
              </div>
              <div>
                <span>Diferencial MedCof</span>
                <h3>Baixe as aulas. Estude offline.</h3>
                <p>
                  Salve as videoaulas no celular e mantenha o ritmo durante viagens,
                  plantões ou em locais sem conexão.
                </p>
              </div>
              <Download aria-hidden="true" className="offline-download-icon" />
            </div>

            <div className="app-platforms" aria-label="Disponível para iOS e Android">
              <span>
                <AppleMark />
                iOS
              </span>
              <span>
                <AndroidMark />
                Android
              </span>
            </div>
          </div>

          <div className="app-showcase-media">
            <div className="app-media-lines" aria-hidden="true" />
            <Image
              src="/images/anest-home/app-mobile-medcof-clean-transparent.png"
              alt="Aplicativo MedCof Anest exibindo aulas e cronograma em dois celulares"
              width={720}
              height={1280}
              data-static-media
              unoptimized
            />
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

export function QBankShowcase() {
  const [questionOpen, setQuestionOpen] = useState(false);
  const [videoAutoplay, setVideoAutoplay] = useState(false);
  const [questionCount, setQuestionCount] = useState(1);
  const [flashcardCount, setFlashcardCount] = useState(1);
  const [compactCount, setCompactCount] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const openQuestion = useCallback(() => {
    setVideoAutoplay(false);
    setQuestionOpen(true);
  }, []);

  const closeQuestion = useCallback(() => {
    setQuestionOpen(false);
    setVideoAutoplay(false);
  }, []);

  useEffect(() => {
    if (!questionOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeQuestion();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeQuestion, questionOpen]);

  useEffect(() => {
    const element = videoRef.current;
    if (!questionOpen || !element) return;
    const modal = element.closest<HTMLElement>(".question-modal");
    if (!modal) return;

    let frame = 0;
    let activated = false;
    const checkVisibility = () => {
      frame = 0;
      if (activated) return;

      const videoRect = element.getBoundingClientRect();
      const modalRect = modal.getBoundingClientRect();
      const visibleHeight =
        Math.min(videoRect.bottom, modalRect.bottom) -
        Math.max(videoRect.top, modalRect.top);

      if (visibleHeight >= videoRect.height * 0.45) {
        activated = true;
        setVideoAutoplay(true);
        modal.removeEventListener("scroll", scheduleCheck);
      }
    };
    const scheduleCheck = () => {
      if (!frame) frame = window.requestAnimationFrame(checkVisibility);
    };

    modal.addEventListener("scroll", scheduleCheck, { passive: true });
    scheduleCheck();
    return () => {
      modal.removeEventListener("scroll", scheduleCheck);
      window.cancelAnimationFrame(frame);
    };
  }, [questionOpen]);

  useEffect(() => {
    const element = storyRef.current;
    if (!element) return;
    let frame = 0;
    let compactTimer = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          frame = window.requestAnimationFrame(() => {
            setQuestionCount(4000);
            setFlashcardCount(5000);
            setCompactCount(true);
          });
          return;
        }

        const startedAt = performance.now();
        const duration = 1800;
        const animate = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setQuestionCount(Math.max(1, Math.round(4000 * eased)));
          setFlashcardCount(Math.max(1, Math.round(5000 * eased)));
          if (progress < 1) {
            frame = window.requestAnimationFrame(animate);
          } else {
            compactTimer = window.setTimeout(() => setCompactCount(true), 280);
          }
        };
        frame = window.requestAnimationFrame(animate);
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(compactTimer);
    };
  }, []);

  return (
    <>
      <SectionReveal>
        <section id="qbank" className="apple-section">
          <div ref={storyRef} className="apple-module qbank-story">
            <div className="qbank-story-copy">
              <p>QBank direcionado</p>
              <h2>Treine a leitura da banca. Entenda cada alternativa.</h2>
              <p>
                Comentários que transformam cada questão em aprendizado. Entenda a
                fisiopatologia, a farmacologia e todos os conceitos envolvidos, com
                resolução em texto e vídeo. Você aprende com cada questão.
              </p>
              <div className="qbank-story-actions">
                <div>
                  <strong className="qbank-counter" aria-label="mais de quatro mil questões">
                    <span
                      className={`qbank-counter-value${compactCount ? "" : " is-visible"}`}
                      aria-hidden={compactCount}
                    >
                      {questionCount.toLocaleString("pt-BR")}
                    </span>
                    <span
                      className={`qbank-counter-value${compactCount ? " is-visible" : ""}`}
                      aria-hidden={!compactCount}
                    >
                      +4 mil
                    </span>
                  </strong>
                  <span>questões comentadas</span>
                </div>
                <div>
                  <strong className="qbank-counter" aria-label="mais de cinco mil flashcards">
                    <span
                      className={`qbank-counter-value${compactCount ? "" : " is-visible"}`}
                      aria-hidden={compactCount}
                    >
                      {flashcardCount.toLocaleString("pt-BR")}
                    </span>
                    <span
                      className={`qbank-counter-value${compactCount ? " is-visible" : ""}`}
                      aria-hidden={!compactCount}
                    >
                      +5 mil
                    </span>
                  </strong>
                  <span>flashcards</span>
                </div>
                <div className="qbank-system-stat">
                  <strong className="qbank-review-title">
                    Revisão
                    <RefreshCw aria-hidden="true" />
                  </strong>
                  <span>sistema de repetição espaçada</span>
                </div>
              </div>
            </div>
            <div className="qbank-story-media">
              <Image
                src="/images/features/qbank-hand-transparent-hq.png"
                alt="Questão de anestesiologia exibida no QBank em um dispositivo"
                width={2048}
                height={1060}
                priority
                data-static-media
                unoptimized
              />
              <button
                className="qbank-media-cta"
                type="button"
                onClick={openQuestion}
              >
                Ver comentário completo da questão
                <PlayCircle aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </SectionReveal>

      {questionOpen ? (
        <div
          className="question-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeQuestion();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="question-modal-title"
            className="question-modal"
          >
            <button
              type="button"
              className="question-modal-close"
              aria-label="Fechar comentário"
              autoFocus
              onClick={closeQuestion}
            >
              <X />
            </button>
            <div className="question-modal-copy">
              <p id="question-modal-title">Questão comentada</p>
            </div>
            <div className="question-modal-content">
              <article className="question-commentary">
                <header className="question-stem">
                  <h3>
                    Paciente apresenta fratura de terço médio de úmero e opta-se por
                    realizar um bloqueio do plexo braquial, de acordo com a figura
                    abaixo escolha a alternativa correta:
                  </h3>
                </header>

                <figure className="question-figure">
                  <Image
                    src="/images/anest-home/qbank-plexus-question.png"
                    alt="Figura do plexo braquial numerada de 1 a 6"
                    width={1024}
                    height={768}
                    data-static-media
                    unoptimized
                  />
                </figure>

                <section className="question-block">
                  <p className="commentary-kicker">Alternativas</p>
                  <div className="question-alternatives">
                    {QUESTION_OPTIONS.map((option) => (
                      <div key={option.letter} className="question-alternative">
                        <span>{option.letter}</span>
                        <p>{option.statement}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="question-block">
                  <p className="commentary-kicker">Resolução em vídeo</p>
                  <div ref={videoRef} className="question-video">
                    <iframe
                      src={`https://player.vimeo.com/video/1195351430?muted=1&playsinline=1${
                        videoAutoplay ? "&autoplay=1" : ""
                      }`}
                      title="Resolução em vídeo da questão sobre plexo braquial"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </section>

                <section className="commentary-section">
                  <p className="commentary-kicker">Comentário completo</p>
                  <p>
                    Pessoal, questão predominantemente de anatomia!{" "}
                    <strong>
                      O plexo braquial sempre cai, é preciso ter ele na ponta da língua!
                    </strong>
                  </p>
                  <h3>Plexo braquial</h3>
                  <p>
                    É um conjunto de nervos formado pelos ramos anteriores de{" "}
                    <strong>C5 a T1</strong>. Vale ressaltar que o nome da raiz vem da
                    vértebra abaixo do nervo. Por exemplo: se o nervo está entre C4 e C5,
                    ele se chama raiz de C5.
                  </p>
                  <ul className="commentary-list">
                    <li>
                      Se o plexo tiver a raiz de C4 contribuindo, é denominado plexo
                      pré-fixado.
                    </li>
                    <li>
                      Se o plexo tiver a raiz de T2 contribuindo, é denominado plexo
                      pós-fixado.
                    </li>
                  </ul>

                  <figure className="commentary-figure">
                    <Image
                      src="https://medcof-assets.s3.sa-east-1.amazonaws.com/profile-pictures/1782348146250-blob"
                      alt="Representação gráfica do plexo braquial direito"
                      width={1400}
                      height={900}
                    />
                    <figcaption>
                      Imagem 1. Representação gráfica do plexo braquial direito. Fonte:
                      Acervo MedCof.
                    </figcaption>
                  </figure>

                  <p>
                    Reparem que nessa imagem não conseguimos ver o nervo frênico.
                    Conseguimos ver o nervo supraescapular, que sai do tronco superior e
                    inerva a cápsula e a articulação do ombro e a superfície dorsal da
                    escápula. É um nervo nobre que precisamos anestesiar em cirurgia de
                    ombro.
                  </p>
                  <p>
                    Para não esquecermos na hora da prova, podemos usar o diagrama
                    simplificado abaixo. Cuidado para não confundir os troncos com
                    fascículos. Eles gostam de tentar nos confundir, mas o aluno MedCof
                    não cai!
                  </p>

                  <figure className="commentary-figure">
                    <Image
                      src="https://medcof-assets.s3.sa-east-1.amazonaws.com/profile-pictures/1782348323079-blob"
                      alt="Esquema simplificado do plexo braquial"
                      width={1400}
                      height={900}
                    />
                    <figcaption>
                      Imagem 2. Esquema simplificado do plexo braquial. Fonte: Acervo
                      MedCof.
                    </figcaption>
                  </figure>

                  <div className="nerve-summary">
                    <div>
                      <strong>Nervo musculocutâneo · C5-C7</strong>
                      <span>
                        Inervação motora dos músculos bíceps e coracobraquial.
                      </span>
                    </div>
                    <div>
                      <strong>Nervo radial · C5-T1</strong>
                      <span>
                        Extensão do antebraço, da mão e dos dedos, além da abdução do
                        polegar.
                      </span>
                    </div>
                    <div>
                      <strong>Nervo mediano · C6-T1</strong>
                      <span>
                        Pronação e supinação do antebraço e flexão das mãos e dos dedos.
                      </span>
                    </div>
                    <div>
                      <strong>Nervo ulnar · C8-T1</strong>
                      <span>
                        Adução do polegar. É o nervo monitorado com o TOF.
                      </span>
                    </div>
                  </div>
                  <div className="commentary-callout">
                    <h3>Paralisia do nervo frênico</h3>
                    <p>
                      A paralisia do nervo frênico é uma complicação que pode acontecer
                      após o bloqueio interescalênico. Isso porque o nervo frênico passa
                      sobre o escaleno anterior e é formado pelas fibras de C3 a C5.
                      Outros possíveis efeitos colaterais desse bloqueio são rouquidão,
                      síndrome de Horner, fraqueza muscular e pneumotórax.
                    </p>
                  </div>

                  <figure className="commentary-figure">
                    <Image
                      src="https://medcof-assets.s3.sa-east-1.amazonaws.com/profile-pictures/1782348331736-blob"
                      alt="Radiografias antes e depois de bloqueio interescalênico com elevação do diafragma"
                      width={1400}
                      height={900}
                    />
                    <figcaption>
                      Imagem 3. Antes e depois do bloqueio interescalênico, com elevação
                      do diafragma pela paralisia da região. Fonte: NYSORA.
                    </figcaption>
                  </figure>
                </section>

                <section className="question-block">
                  <p className="commentary-kicker">Vamos às alternativas</p>
                  <div className="question-options">
                    {QUESTION_OPTIONS.map((option) => (
                      <section
                        key={option.letter}
                        className={option.correct ? "answer-option is-correct" : "answer-option"}
                      >
                        <div className="answer-option-title">
                          <span aria-hidden="true">{option.correct ? "✓" : "×"}</span>
                          <strong>
                            {option.letter} · {option.correct ? "Correta" : "Incorreta"}
                          </strong>
                        </div>
                        <p>{option.explanation}</p>
                        <small>{option.percentage} escolheram esta alternativa</small>
                      </section>
                    ))}
                  </div>
                </section>

                <section className="take-home">
                  <p className="commentary-kicker">Take home message</p>
                  <ul>
                    <li>
                      Plexo braquial é formado pelas raízes de C5 a T1. Pode ser
                      pré-fixado, com C4, ou pós-fixado, com T2.
                    </li>
                    <li>
                      Nervo supraescapular C5-C6 inerva a articulação do ombro e é
                      essencial para analgesia em cirurgia de ombro.
                    </li>
                    <li>
                      Nervo musculocutâneo C5-C7 controla a flexão do cotovelo e a
                      supinação do antebraço.
                    </li>
                    <li>
                      Bloqueio interescalênico pode causar paralisia do nervo frênico,
                      resultando em elevação do diafragma e dificuldade respiratória se
                      o acometimento for bilateral.
                    </li>
                  </ul>
                </section>

                <footer className="commentary-references">
                  <strong>Referências</strong>
                  <p>MILLER, Ronald D. Miller&apos;s Anesthesia. 10ª ed. Philadelphia: Elsevier, 2020.</p>
                  <p>
                    NYSORA. Radiographic image of diaphragmatic elevation
                    (diaphragmatic paresis) before and after application of an
                    interscalene brachial plexus block.
                  </p>
                </footer>
              </article>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

export function ProfessorsShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const move = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".professor-card");
    const step = (card?.offsetWidth ?? 320) + 16;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - step / 2;

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: step * direction, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => move(1), 3200);
    return () => window.clearInterval(interval);
  }, [move, paused]);

  return (
    <SectionReveal>
      <section id="professores" className="apple-section">
        <div className="apple-module professors-section">
          <header className="professors-header">
            <div>
              <p className="text-sm font-semibold text-[var(--accent)]">Nosso corpo docente</p>
              <h2 className="apple-chapter-title mt-3">Aprenda com quem vive a anestesiologia</h2>
              <p className="mt-4 max-w-2xl text-[17px] leading-7 text-[var(--muted)]">
                Coordenadores e professores titulados, com experiência em formação,
                assistência e provas de anestesiologia.
              </p>
            </div>
            <div className="professors-arrows" aria-label="Controles do carrossel">
              <button type="button" onClick={() => move(-1)} aria-label="Professores anteriores">
                <ChevronLeft />
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Próximos professores">
                <ChevronRight />
              </button>
            </div>
          </header>

          <div
            ref={trackRef}
            className="professors-track"
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
          >
            {PROFESSORS.map((professor) => (
              <article className="professor-card" key={professor.name}>
                <div className="professor-photo">
                  <Image
                    src={professor.image}
                    alt={professor.name}
                    width={700}
                    height={900}
                    sizes="(max-width: 640px) 82vw, 320px"
                  />
                </div>
                <div className="professor-copy">
                  <p>{professor.role}</p>
                  <h3>{professor.name}</h3>
                  <ul>
                    {professor.credentials.map((credential) => (
                      <li key={credential}>{credential}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

export function FaqShowcase() {
  return (
    <SectionReveal>
      <section id="faq" className="apple-section">
        <div className="faq-section">
          <header className="faq-header">
            <span className="faq-header-icon" aria-hidden="true">
              <CircleHelp />
            </span>
            <p className="text-sm font-semibold text-[var(--accent)]">Perguntas frequentes</p>
            <h2 className="apple-chapter-title mt-3">Tudo o que você precisa saber</h2>
            <p className="mt-4 text-[17px] leading-7 text-[var(--muted)]">
              Tire suas dúvidas sobre o MedCof Anest e comece sua jornada de aprovação.
            </p>
          </header>

          <div className="faq-list">
            {FAQS.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-plus" aria-hidden="true">
                    <Plus />
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="faq-contact">
            <p>
              <strong>Ainda tem dúvidas?</strong> Nossa equipe está pronta para ajudar.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
