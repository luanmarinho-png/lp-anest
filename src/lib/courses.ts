import type { Course } from "@/components/course-catalog";
import type { Testimonial } from "@/components/video-testimonials";

export const PILLARS = [
  {
    n: "01",
    title: "Aprenda com quem faz todo dia",
    body: "Quem vai te ensinar treina anestesiologistas todos os dias nos maiores hospitais do Brasil.",
  },
  {
    n: "02",
    title: "Se destaque no centro cirúrgico",
    body: "Você sai fazendo o que antes dependia de chamar alguém mais experiente.",
  },
  {
    n: "03",
    title: "Seja um anestesista diferenciado",
    body: "Poucos anestesiologistas dominam essas técnicas. Quem domina é quem o serviço chama nos casos difíceis.",
  },
];

export const FACULTY = [
  {
    name: "Dr. Lucas Rodrigues",
    role: "Coordenador MedCof Anest",
    image: "/images/professors/lucas-3.png",
    credentials: [
      "Título Superior de Anestesiologia (TSA/SBA)",
      "Residência em Anestesiologia pelo Hospital Sírio-Libanês",
      "Preceptor e corresponsável de Residência Médica",
    ],
  },
  {
    name: "Dr. Alessandro Silvestre",
    role: "Coordenador MedCof Anest",
    image: "/images/professors/alessandro-hq.png",
    credentials: [
      "Título de Especialista em Anestesiologia (TEA)",
      "Anestesiologista pelo Hospital Alemão Oswaldo Cruz",
      "Ex-preceptor de Residência Médica do Hospital Sírio-Libanês",
    ],
  },
  {
    name: "Dr. Luan Marinho",
    role: "Coordenador MedCof Anest",
    image: "/images/professors/luan-new.png",
    credentials: [
      "Anestesiologista pelo Hospital Sírio-Libanês",
      "Pós-graduação em Dor pelo Hospital Sírio-Libanês",
      "Observership em anestesia cardiotorácica no H. S. Orsola, Itália",
    ],
  },
];

export const CURRICULUM = {
  title: "27 bloqueios e 5 usos práticos do ultrassom",
  lead: "Tudo direcionado para a sua rotina real, gravado em altíssima definição de imagem e som.",
  groups: [
    {
      label: "Cervical e membros superiores",
      caption: "Plexo braquial e região cervical",
      items: [
        "Plexo cervical superficial",
        "Interescalênico",
        "Tronco superior",
        "Supraclavicular",
        "Infraclavicular",
        "Axilar",
        "Mediano, radial e ulnar",
      ],
    },
    {
      label: "Parede torácica e abdome",
      caption: "Bloqueios de parede guiados por imagem",
      items: [
        "PECS 1 e PECS 2",
        "SAM e ESP",
        "Plano transverso do tórax",
        "TAP subcostal e TAP lateral",
        "Quadrado lombar 1, 2 e 3",
        "Bainha dos retos",
        "Ílio inguinal e ílio hipogástrico",
      ],
    },
    {
      label: "Membros inferiores",
      caption: "Além da raquianestesia",
      items: [
        "PENG",
        "Fáscia ilíaca suprainguinal",
        "Femoral",
        "Cutâneo lateral femoral",
        "Canal dos adutores",
        "IPACK",
        "Ciático por via poplítea",
      ],
    },
    {
      label: "5 usos práticos",
      caption: "Aplicações clínicas no perioperatório",
      items: [
        "Bases do ultrassom",
        "US de via aérea",
        "US vesical",
        "US gástrico",
        "US do neuroeixo",
      ],
    },
  ],
};

export const ANEST_US_SECTIONS = [
  {
    eyebrow: "Como são as aulas",
    title: "Aulas separadas por bloqueio",
    body: "Vai fazer uma cirurgia de joelho? Aprenda de forma rápida só os bloqueios direcionados para esse procedimento.",
    bullets: [
      "Gravações de mais de 25 bloqueios",
      "Anatomia detalhada na tela para você fixar",
      "Dicas de doses, agulhamento e macetes práticos",
    ],
    image: {
      src: "/images/anest-us/anest-us-aula-macbook.png",
      alt: "Aula do Anest US mostrando o posicionamento do probe e a imagem de ultrassom na tela",
    },
    overlay: {
      src: "/images/anest-us/anest-us-anatomia-tablet.png",
      alt: "Corte de ultrassom com músculos identificados por cor no Anest US",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "pablo",
    name: "Pablo",
    role: "Aluno do Hands On Anest US",
    src: "/videos/depoimentos/pablo.mp4",
    poster: "/images/anest-us/depoimento-pablo.jpg",
  },
  {
    id: "sandra",
    name: "Sandra",
    role: "Aluna do Hands On Anest US",
    src: "/videos/depoimentos/sandra.mp4",
    poster: "/images/anest-us/depoimento-sandra.jpg",
  },
  {
    id: "lucas",
    name: "Lucas",
    role: "Aluno do Hands On Anest US",
    src: "/videos/depoimentos/lucas.mp4",
    poster: "/images/anest-us/depoimento-lucas.jpg",
  },
];

export const COURSES: Course[] = [
  {
    id: "hands-on-anest-us",
    name: "Hands On Anest US",
    tagline:
      "Treinamento presencial que aborda mais de 27 bloqueios e os usos da ultrassonografia na anestesia.",
    status: "disponivel",
    statusLabel: "Inscrições abertas",
    featured: true,
    bullets: [
      "Dois dias escaneando em modelo vivo",
      "Estações de agulhamento",
      "Todo o conteúdo online incluso",
    ],
    detail: {
      eyebrow: "Curso · Hands On Anest US",
      title:
        "Dois dias de imersão para você saber tudo de anestesia regional e US na anestesia",
      logo: {
        src: "/images/anest-us/hands-on-anest-us-logo.png",
        video: "/videos/hands-on-anest-us-logo.webm",
        alt: "Hands On Anest US",
      },
      lead: "Ver a imagem na aula é uma coisa. Achar a estrutura sozinho, no modelo vivo, com o preceptor do lado corrigindo o seu posicionamento, é outra. É isso que acontece nesses dois dias.",
      facts: [
        "30 e 31 de janeiro de 2027",
        "Pinheiros, São Paulo",
        "25 vagas, de 5 a 8 por preceptor",
      ],
      highlights: [
        "27 bloqueios e 5 usos práticos do ultrassom",
        "Escaneamento em modelo vivo e estações de agulhamento",
        "Alimentação e estacionamento inclusos",
        "Todo o conteúdo do Anest US Online incluso",
      ],
      ctaLabel: "Quero minha vaga no Hands On",
      sections: [
        {
          eyebrow: "O dia presencial",
          title: "Aprenda, repita sem pressa e com o preceptor ao lado",
          body: "A turma é dividida em grupos pequenos e todo mundo passa pelas estações com o aparelho na mão. O coordenador corrige a técnica, o posicionamento do probe e te ensina como fazer na prática.",
          bullets: [
            "Modelo vivo em todas as estações",
            "Estações de agulhamento",
            "Aparelhos de várias marcas, para você não ter surpresa",
          ],
          fit: "cover",
          image: {
            src: "/images/anest-us/anest-us-hands-on-scan.jpg",
            alt: "Alunos do Hands On Anest US escaneando um modelo vivo com a imagem na tela",
          },
        },
        {
          eyebrow: "Turma pequena",
          title: "Ninguém assiste de longe",
          body: "A gente limita a turma de propósito. Todo participante escaneia em todas as estações e ouve o que precisa corrigir na própria técnica.",
          bullets: [
            "Grupos reduzidos por estação",
            "Rodízio para você passar por tudo",
            "Acesso direto aos coordenadores nos dois dias",
          ],
          fit: "cover",
          image: {
            src: "/images/anest-us/anest-us-hands-on-turma.jpg",
            alt: "Turma reduzida do Hands On Anest US em volta da maca durante o escaneamento",
          },
        },
      ],
      schedule: {
        title: "Como são os dois dias",
        lead: "Sábado e domingo inteiros, das 07h às 18h, com café da manhã, coffee breaks e almoço inclusos.",
        location: "Rua João Moura, 1144, Pinheiros, São Paulo",
        seats: "Apenas 25 alunos por turma",
        days: [
          {
            label: "Dia 1",
            date: "Sábado, 30 de janeiro de 2027",
            hours: "07h às 18h",
            blocks: [
              { time: "07:00", title: "Credenciamento e café da manhã" },
              {
                time: "08:00",
                title: "Ultrassom point of care",
                body: "US gástrico, US pulmonar, FAST, US de bexiga e US de vias aéreas, em rodízio entre os grupos.",
              },
              { time: "12:30", title: "Almoço" },
              {
                time: "13:30",
                title: "Membros superiores, parte 1",
                body: "Interescalênico, tronco superior e supraclavicular.",
              },
              {
                time: "16:15",
                title: "Membros superiores, parte 2",
                body: "Os grupos invertem: infraclavicular, axilar e bloqueios distais de nervo ulnar, radial e mediano.",
              },
            ],
          },
          {
            label: "Dia 2",
            date: "Domingo, 31 de janeiro de 2027",
            hours: "07h às 18h",
            blocks: [
              { time: "08:00", title: "Coffee break e recepção" },
              {
                time: "09:00",
                title: "Membros inferiores e parede torácica",
                body: "Grupo A: PENG, femoral, canal dos adutores, IPACK e ciático por via poplítea. Grupo B: ESP, plano transverso do tórax e pecto intercostal, PECS, SAM, quadrado lombar, ílio inguinal e ílio hipogástrico, TAPs e bainha dos retos.",
              },
              { time: "12:30", title: "Almoço" },
              {
                time: "14:00",
                title: "Troca de estações",
                body: "Os grupos invertem: quem fez membros inferiores passa para parede torácica e abdominal, e vice-versa.",
              },
            ],
          },
        ],
      },
      testimonials: TESTIMONIALS,
      video: {
        src: "https://player.vimeo.com/video/1126957904?autoplay=0&loop=1&autopause=1&playsinline=1",
        title: "Preview do Hands On Anest US",
      },
      proof: {
        stat: "+100",
        statLabel: "alunos já fizeram o treinamento presencial",
        title: "Quem fez conta o que mudou",
        quotes: [
          {
            text: "Foi um diferencial, porque na minha residência não tinha muita mão e agora eu aprendi.",
            author: "Lucas, aluno do Hands On Anest US",
          },
          {
            text: "Mesmo depois de 10 anos de formado e sem nunca ter tido contato com ultrassom, o Dr. Lucas Rodrigues pegou na minha mão e me ensinou. Foi excelente, indico a todos.",
            author: "Pablo, aluno do Hands On Anest US",
          },
        ],
      },
      pricing: {
        title: "Garanta sua vaga na turma de janeiro",
        lead: "São 25 lugares, de 5 a 8 por preceptor. Quem entra leva os dois dias presenciais e o Anest US Online completo.",
        plans: [
          {
            name: "Hands On Anest US",
            badge: "Online mais presencial",
            installment: "R$ 416,42",
            cash: "ou à vista por R$ 4.997,00",
            featured: true,
            bullets: [
              "Turma de 25 alunos, de 5 a 8 por preceptor",
              "Dois dias de imersão presencial em São Paulo",
              "27 bloqueios e 5 usos práticos do ultrassom",
              "Aparelhos de ultrassom de alta qualidade",
              "Alimentação inclusa nos dois dias",
              "Estacionamento no local, em Pinheiros",
              "Anest US Online incluso",
            ],
          },
          {
            name: "Aluno do Extensivo MedCof Anest",
            badge: "60% de desconto",
            installment: "R$ 199,77",
            cash: "ou à vista por R$ 1.997,00",
            note: "Condição validada pela equipe comercial para alunos ativos ou novos inscritos no Extensivo.",
            bullets: [
              "Hands On Anest US completo",
              "Exclusivo para aluno do Extensivo",
            ],
          },
        ],
      },
      faculty: FACULTY,
    },
  },
  {
    id: "anest-us-online",
    name: "Anest US Online",
    tagline:
      "27 bloqueios e 5 usos práticos do ultrassom, gravados em alta definição de imagem e som.",
    status: "disponivel",
    statusLabel: "Inscrições abertas",
    bullets: [
      "27 bloqueios guiados por ultrassom",
      "5 usos práticos no perioperatório",
      "Assiste quando e de onde quiser",
    ],
    detail: {
      eyebrow: "Curso · Anest US Online",
      title: "Dominando a ultrassonografia e os bloqueios",
      logo: {
        src: "/images/anest-us/anest-us-logo.png",
        video: "/videos/anest-us-logo.webm",
        alt: "MedCof Anest US",
      },
      lead: "O ultrassom só ajuda quando você reconhece o que está na tela. O curso começa exatamente aí: você aprende a ler a imagem antes de agulhar.",
      ctaLabel: "Quero fazer o Anest US",
      curriculum: CURRICULUM,
      sections: ANEST_US_SECTIONS,
      pricing: {
        title: "Comece hoje pelo Anest US Online",
        lead: "Acesso imediato aos 27 bloqueios e aos 5 usos práticos do ultrassom, no seu ritmo.",
        plans: [
          {
            name: "Anest US Online",
            badge: "Curso completo",
            installment: "R$ 208,08",
            cash: "ou à vista por R$ 2.497,00",
            featured: true,
            bullets: [
              "27 bloqueios guiados por ultrassom",
              "5 usos práticos no perioperatório",
              "Anatomia marcada na tela, bloqueio por bloqueio",
              "Acesso quando e de onde quiser",
            ],
          },
          {
            name: "Quer também a prática presencial?",
            installment: "R$ 416,42",
            cash: "ou à vista por R$ 4.997,00",
            note: "O Hands On já inclui todo o conteúdo do Anest US Online.",
            bullets: [
              "Tudo do Anest US Online",
              "Dois dias de imersão presencial em São Paulo",
            ],
          },
        ],
      },
      faculty: FACULTY,
    },
  },
  {
    id: "eco-te",
    name: "ECO-TE",
    tagline: "Ecocardiografia transesofágica no perioperatório.",
    status: "em-breve",
    bullets: [
      "Janelas e cortes essenciais",
      "Leitura hemodinâmica na sala",
      "Casos comentados",
    ],
  },
  {
    id: "rotem",
    name: "ROTEM",
    tagline: "Tromboelastometria para decidir transfusão com dado, não com palpite.",
    status: "em-breve",
    bullets: [
      "Leitura das curvas na prática",
      "Protocolos de sangramento",
      "Casos do centro cirúrgico",
    ],
  },
];


