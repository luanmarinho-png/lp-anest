export type TrackCard = {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
};

export type Modality = {
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
  revealOffers?: boolean;
};

export type OfferCard = {
  badge: string;
  title: string;
  equivalent: string;
  fromPrice: string;
  installment: string;
  cash: string;
  note: string;
  noteHref?: string;
  bullets: string[];
  featured?: boolean;
  offerMode?: "extensivo" | "intensivo";
  cta: string;
};

export type ItemImage = { src: string; alt: string; caption?: string };

export type NumberedItem = {
  n: string;
  title: string;
  body?: string;
  /** Short competitive tag highlighted on the card. */
  badge?: string;
  /** Tile weight in the bento mosaic. */
  size?: "hero" | "wide" | "tall";
  image?: ItemImage;
  /** Two or more portraits shown side by side instead of a single image. */
  images?: ItemImage[];
};

export type FeatureBlock = {
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  image?: { src: string; alt: string };
};

export type SpotlightBlock = {
  kicker: string;
  title: string;
  body: string;
  image: { src: string; alt: string };
};

export type TrackFlow = "items-story-models" | "story-items-models";

export type TrackPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  lead?: string;
  heroMobile: string;
  heroDesktop: string;
  flow: TrackFlow;
  modalitiesEyebrow: string;
  modalitiesTitle: string;
  modalitiesBody?: string;
  modalities: Modality[];
  offers?: OfferCard[];
  storyKicker?: string;
  storyTitle?: string;
  storyLead?: string;
  storyBody: string[];
  storyHighlights?: string[];
  storyPoints?: NumberedItem[];
  spotlight?: SpotlightBlock;
  itemsTitle?: string;
  itemsLead?: string;
  items: NumberedItem[];
  highlight?: FeatureBlock;
};

export const HOME_INTRO = {
  eyebrow: "MedCof Anest",
  title: "Tudo o que o ecossistema faz pela sua preparação",
  body: "Conheça os recursos que filtram o conteúdo e aceleram a sua fixação para as avaliações da Sociedade Brasileira de Anestesiologia (SBA), seja para as provas do ME, do TEA ou do TSA.",
};

export const HOME_TRACKS: TrackCard[] = [
  {
    href: "/residentes-sba",
    title: "Residentes SBA",
    description:
      "Entenda como são feitas as provas da SBA e adapte o estudo ao ritmo da residência.",
    bullets: [
      "Conteúdo separado por prova, no calendário oficial",
      "Extensivo e Intensivo",
      "QBank com +4 mil questões comentadas",
    ],
    cta: "Conhecer a trilha",
    featured: true,
  },
  {
    href: "/residentes-mec",
    title: "Residentes MEC",
    description:
      "Conquiste o TEA sem deixar a preparação para o último ano da residência.",
    bullets: [
      "Preparação contínua do R1 ao R3",
      "Extensivo, Intensivo e Segunda fase",
      "Aulas, QBank e fichas para a prática",
    ],
    cta: "Conhecer a trilha",
  },
  {
    href: "/tea",
    title: "TEA",
    description:
      "O conhecimento da beira do leito no formato que a prova cobra.",
    bullets: [
      "Extensivo TEA",
      "Intensivo TEA",
      "Segunda fase com simulações práticas e orais",
    ],
    cta: "Conhecer a trilha",
  },
  {
    href: "/tsa",
    title: "TSA",
    description: "Aulas de aprofundamento direcionadas para o TSA.",
    bullets: [
      "Aulas base e de aprofundamento",
      "QBank da etapa escrita e oral",
      "Segunda fase no formato OSCE",
    ],
    cta: "Conhecer a trilha",
  },
  {
    href: "/aperfeicoamento",
    title: "Aperfeiçoamento",
    description: "Bloqueios periféricos, POCUS e ROTEM: tudo o que você precisa.",
    bullets: [
      "Anest US, do básico ao avançado",
      "Bloqueios guiados por ultrassom",
      "Vídeos práticos e protocolos",
    ],
    cta: "Conhecer",
  },
];

export const HOME_FEATURES: FeatureBlock[] = [
  {
    kicker: "CofBot IA",
    title: "Seu assistente de estudo no painel",
    body: "Localize blocos de questões, encontre trechos de conceitos nas videoaulas e tire dúvidas clínicas em segundos, direto no painel. Menos tempo procurando arquivo, mais foco no que pontua.",
    bullets: [
      "Busca por questões e trechos específicos de aula",
      "Respostas em segundos, na interface da plataforma",
      "Tempo de estudo concentrado no conteúdo do edital",
    ],
    image: {
      src: "/images/anest-home/mockup-cofbot-real-platform-anest-v2.png",
      alt: "CofBot no painel MedCof Anest",
    },
  },
  {
    kicker: "Revisões Núcleo",
    title:
      "Cronograma de revisão focado nos temas de maior prevalência e peso nas provas",
    body: "Um plano que organiza o estudo de longo prazo e dá previsibilidade no dia do exame oficial.",
    bullets: [
      "Filtro nos temas de maior peso nas avaliações",
      "Conteúdo alinhado ao ano da residência",
      "Fixação diária com repetição espaçada",
    ],
    image: {
      src: "/images/anest-home/mockup-qbank-current-menu-platform-anest-v2.png",
      alt: "Revisões Núcleo e painel de estudo MedCof",
    },
  },
  {
    kicker: "Questões Comentadas",
    title: "Estudo reverso focado no padrão da banca",
    body: "Cada questão traz análise em texto e resolução em vídeo, feitas por anestesiologistas. Você vê o raciocínio da comissão examinadora e fecha as lacunas com método.",
    bullets: [
      "Resoluções em texto e vídeo por especialistas",
      "Análise das alternativas para entender a lógica da banca",
      "Correção de falhas bloco a bloco",
    ],
  },
  {
    kicker: "Flashcards",
    title:
      "Cards para consolidar conceitos-chave e critérios diagnósticos com rapidez",
    body: "Use intervalos na escala ou na troca de sala para revisar tópicos densos, com repetição espaçada.",
    bullets: [
      "Memorização ativa com repetição espaçada",
      "Acesso no celular",
      "Retenção de longo prazo para temas complexos",
    ],
    image: {
      src: "/images/anest-home/mockup-flashcards-real-platform-anest-v2.png",
      alt: "Flashcards MedCof Anest",
    },
  },
];

export const HOME_STRUCTURE = [
  {
    title: "Corpo clínico especializado",
    body: "Professores formados e preceptores nos melhores hospitais do país.",
  },
  {
    title: "QBank direcionado",
    body: "Mais de 4 mil questões dos últimos 10 anos, comentadas em texto e vídeo.",
  },
  {
    title: "Avaliação contínua",
    body: "Simulados autorais no padrão das bancas oficiais.",
  },
  {
    title: "Estudo dinâmico",
    body: "Conteúdo modular que se adapta à sua escala e à sua rotina médica.",
  },
  {
    title: "Metodologia ativa",
    body: "Revisão espaçada e cronograma focado nos pontos de maior peso.",
  },
  {
    title: "Material de suporte rápido",
    body: "Fichas-resumo focadas no que você precisa fixar.",
  },
  {
    title: "Fixação em alta performance",
    body: "Mais de 5 mil flashcards para revisão rápida.",
  },
];

export const HOME_CTA = {
  title: "Estude com a plataforma mais completa de Anestesiologia",
  body: "Todas as funcionalidades trabalham juntas no seu painel para filtrar o conteúdo e firmar a sua preparação. Fale com a coordenação técnica e inicie o seu cronograma.",
};

export const TRACKS: Record<string, TrackPageContent> = {
  "residentes-sba": {
    slug: "residentes-sba",
    eyebrow: "Residentes SBA",
    title: "Trilha para residentes SBA",
    lead: "O MedCof Anest entrega a estrutura exata que você precisa para alinhar seu conhecimento da sala cirúrgica ao formato exigido pelas provas da SBA. Sem o volume excessivo de materiais genéricos, direto ao ponto.",
    heroMobile: "/bg-sba-mac-2.png",
    heroDesktop: "/bg-sba-mac-1.png",
    flow: "items-story-models",
    modalitiesEyebrow: "Preparatórios",
    modalitiesTitle: "Extensivo e Intensivo",
    modalities: [
      {
        title: "Extensivo",
        description:
          "Preparação completa e aprofundada para construir uma base sólida durante o ano, ou ao longo de vários anos.",
        bullets: [
          "Conteúdo completo e progressivo",
          "Maior tempo de acesso",
          "Simulados quadrimestrais",
        ],
        cta: "Ver preparatórios",
        featured: true,
        revealOffers: true,
      },
      {
        title: "Intensivo",
        description:
          "Revisão de alta intensidade para a prova anual da SBA. Direcionamento nos temas de maior incidência.",
        bullets: [
          "Focado na reta final",
          "Simulados cronometrados",
          "Alto rendimento em pouco tempo",
        ],
        cta: "Falar com a equipe",
      },
    ],
    offers: [
      {
        badge: "Acesso até a data da prova de 2029",
        title: "MedCof Anest Completão (Trianual)",
        equivalent: "Equivalente ao pacote Elite",
        fromPrice: "De R$ 14.497,00",
        installment: "R$ 1.350,15",
        cash: "ou à vista por R$ 13.497,00",
        note: "Você terá acesso simultâneo ao conteúdo do R1 + R2 + R3 até a prova de 2029. Kit Elite físico somente no 1º ano da compra.",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados antes de cada quadrimestre (maio, setembro, dezembro)",
          "Revisões de véspera antes de cada prova (maio, setembro, dezembro, janeiro)",
          "Fichas-resumo online",
          "Fichas-resumo impressa",
          "Flashcards",
          "QBank com questões em texto e vídeo-comentário",
          "HIIT prova anual: revisão intensiva para a prova",
          "Kit Elite (caixa personalizada, ecobag, fichas-resumo impressa, garrafa pacco, cofclips) somente no 1º ano da compra no plano trianual",
          "Inteligência artificial da MedCof",
          "Bônus: ventilação mecânica, MBE e ECG",
        ],
        featured: true,
        cta: "Quero me inscrever",
      },
      {
        badge: "Acesso até a data da prova",
        title: "MedCof Anest Completão (Anual)",
        equivalent: "Equivalente ao pacote Elite",
        fromPrice: "De R$ 10.497,00",
        installment: "R$ 950,02",
        cash: "ou à vista por R$ 9.497,00",
        note: "Você terá acesso simultâneo ao conteúdo do R1 + R2 + R3.",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados antes de cada quadrimestre (maio, setembro, dezembro)",
          "Revisões de véspera antes de cada prova (maio, setembro, dezembro, janeiro)",
          "Fichas-resumo online",
          "Fichas-resumo impressa",
          "Flashcards",
          "QBank com questões em texto e vídeo-comentário",
          "HIIT prova anual: revisão intensiva para a prova",
          "Kit Elite (caixa personalizada, ecobag, fichas-resumo impressa, garrafa pacco, cofclips)",
          "Inteligência artificial da MedCof",
          "Bônus: ventilação mecânica, MBE e ECG",
        ],
        cta: "Quero me inscrever",
      },
    ],
    storyBody: [],
    itemsTitle: "Tudo o que você precisa em um só lugar",
    itemsLead:
      "Desenvolvido por anestesiologistas formados pelos maiores centros de referência (H. Sírio-Libanês, HAOC, USP-SP, IAMSPE).",
    items: [
      {
        n: "01",
        title: "+4.000 questões no QBank",
        body: "Comentários completos e detalhados para você aprender o conteúdo fazendo questão, com vídeo-comentários.",
      },
      {
        n: "02",
        title: "5 mil flashcards",
        body: "Tudo o que é mais importante nas provas da SBA para você estudar de forma ativa.",
      },
      {
        n: "03",
        title: "Aulas completas e diretas",
        body: "Aulas didáticas e completas, sem enrolação.",
      },
      {
        n: "04",
        title: "Fichas-resumo direcionadas",
        body: "Material teórico para te acompanhar durante suas anestesias.",
      },
      {
        n: "05",
        title: "Revisão e correção antes da prova",
        body: "Nossos professores pegam na sua mão antes de cada prova.",
      },
      {
        n: "06",
        title: "Central de dúvidas",
        body: "O time de professores responde tanto na aula quanto no QBank.",
      },
    ],
    highlight: {
      kicker: "Treino no padrão SBA",
      title: "Provas comentadas. Simulados que preparam para o dia da prova.",
      body: "Resolva as provas da SBA com comentários completos e treine com simulados autorais que reproduzem o raciocínio, o ritmo e o nível de exigência da avaliação.",
      bullets: [
        "Provas da SBA comentadas em texto e vídeo",
        "Simulados autorais para medir sua evolução",
        "Correção detalhada para transformar cada questão em aprendizado",
      ],
      image: {
        src: "/images/anest-home/sba-provas-simulados-floating-hq.png",
        alt: "Três telas da plataforma MedCof Anest com provas da SBA, questão comentada em vídeo e busca de conteúdos",
      },
    },
  },
  "residentes-mec": {
    slug: "residentes-mec",
    eyebrow: "Residentes MEC",
    title: "Trilha para residentes MEC",
    lead: "Conquiste o TEA ao longo da residência, sem deixar a preparação para o R3.",
    heroMobile: "/bg-mec-2.png",
    heroDesktop: "/bg-mec-1.png",
    flow: "story-items-models",
    modalitiesEyebrow: "Preparatórios",
    modalitiesTitle: "Extensivo e Intensivo",
    modalities: [
      {
        title: "Extensivo",
        description:
          "Preparação completa e aprofundada para construir uma base sólida durante o ano, ou ao longo de vários anos.",
        bullets: [
          "Conteúdo completo e progressivo",
          "Maior tempo de acesso",
          "Banco de questões e simulados",
        ],
        cta: "Ver preparatórios",
        featured: true,
        revealOffers: true,
      },
      {
        title: "Intensivo",
        description:
          "Revisão de alta intensidade na reta final. Desempenho, simulados e temas mais cobrados.",
        bullets: [
          "Revisão focada na reta final",
          "Simulados cronometrados",
          "Alto rendimento em pouco tempo",
        ],
        cta: "Falar com a equipe",
      },
    ],
    offers: [
      {
        badge: "Acesso até a data da prova de 2029",
        title: "MedCof Anest Completão (Trianual)",
        equivalent: "Equivalente ao pacote Elite",
        fromPrice: "De R$ 14.497,00",
        installment: "R$ 1.350,15",
        cash: "ou à vista por R$ 13.497,00",
        note: "Você terá acesso simultâneo ao conteúdo do R1 + R2 + R3 até a prova de 2029. Kit Elite físico somente no 1º ano da compra.",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados antes de cada quadrimestre (maio, setembro, dezembro)",
          "Revisões de véspera antes de cada prova (maio, setembro, dezembro, janeiro)",
          "Fichas-resumo online",
          "Fichas-resumo impressa",
          "Flashcards",
          "QBank com questões em texto e vídeo-comentário",
          "HIIT prova anual: revisão intensiva para a prova",
          "Kit Elite (caixa personalizada, ecobag, fichas-resumo impressa, garrafa pacco, cofclips) somente no 1º ano da compra no plano trianual",
          "Inteligência artificial da MedCof",
          "Bônus: ventilação mecânica, MBE e ECG",
        ],
        cta: "Quero me inscrever",
      },
      {
        badge: "Acesso até a data da prova",
        title: "MedCof Anest Completão (Anual)",
        equivalent: "Equivalente ao pacote Elite",
        fromPrice: "De R$ 10.497,00",
        installment: "R$ 950,02",
        cash: "ou à vista por R$ 9.497,00",
        note: "Você terá acesso simultâneo ao conteúdo do R1 + R2 + R3.",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados antes de cada quadrimestre (maio, setembro, dezembro)",
          "Revisões de véspera antes de cada prova (maio, setembro, dezembro, janeiro)",
          "Fichas-resumo online",
          "Fichas-resumo impressa",
          "Flashcards",
          "QBank com questões em texto e vídeo-comentário",
          "HIIT prova anual: revisão intensiva para a prova",
          "Kit Elite (caixa personalizada, ecobag, fichas-resumo impressa, garrafa pacco, cofclips)",
          "Inteligência artificial da MedCof",
          "Bônus: ventilação mecânica, MBE e ECG",
        ],
        featured: true,
        cta: "Quero me inscrever",
      },
    ],
    storyKicker: "Residência MEC",
    storyTitle:
      "Não deixe para a última hora. Prepare-se com antecedência para conquistar o TEA.",
    storyLead: "Comece cedo e avance com consistência durante a residência.",
    storyBody: [],
    storyPoints: [
      {
        n: "01",
        title: "Adapte o estudo à rotina da residência",
        body: "Organize aulas, questões e revisões em torno dos plantões e da rotina no centro cirúrgico.",
      },
      {
        n: "02",
        title: "Não se prepare na última hora",
        body: "Antecipe os temas mais cobrados e evite concentrar todo o conteúdo no último ano.",
      },
      {
        n: "03",
        title: "Seja um anestesista diferenciado",
        body: "O anestesista que domina a teoria toma decisões mais seguras e se destaca na prática.",
      },
    ],
    spotlight: {
      kicker: "Ensino com experiência prática",
      title: "Aprenda com quem vive a anestesiologia na prática.",
      body:
        "Aulas direcionadas ministradas por preceptores de residência médica que abordam todos os pontos cobrados pela SBA.",
      image: {
        src: "/images/brand/anesthesiologist-syringe-lineart.png",
        alt: "Ilustração de anestesiologista preparando uma seringa na sala cirúrgica",
      },
    },
    itemsTitle: "Como vamos te ajudar nessa jornada",
    itemsLead:
      "Desenvolvido por anestesiologistas formados pelos maiores centros de referência (H. Sírio-Libanês e HAOC), o MedCof Anest foi desenhado para caber na janela real de estudo do residente.",
    items: [
      {
        n: "01",
        title: "Fichas-resumo direcionadas para a prática",
        body: "Fluxogramas, tabelas de doses e condutas imediatas para consulta rápida e fixação de diretrizes.",
        image: {
          src: "/images/anest-home/mec-fichas-resumo.jpg",
          alt: "Ficha-resumo MedCof Anest sobre transmissão e bloqueio neuromuscular",
        },
      },
      {
        n: "02",
        title: "Todas as questões das últimas provas comentadas",
        body: "Resoluções em texto e vídeo, com a pegadinha de cada alternativa e a linha de raciocínio da banca da SBA.",
        image: {
          src: "/images/anest-home/mec-questao-comentada.jpg",
          alt: "Questão de anestesiologia comentada em vídeo na plataforma",
        },
      },
      {
        n: "03",
        title: "Aulas completas e aprofundadas",
        body: "Cobertura da matriz teórica da anestesiologia, da farmacocinética dos inalatórios ao suporte hemodinâmico avançado.",
        image: {
          src: "/images/anest-home/mec-aulas-plataforma.jpg",
          alt: "Aula sobre doenças da junção neuromuscular na plataforma MedCof Anest",
        },
      },
      {
        n: "04",
        title: "5.000 flashcards com repetição espaçada",
        body: "Memorização ativa de doses, classificações físicas e escores clínicos.",
        image: {
          src: "/images/anest-home/mec-flashcard-question.png",
          alt: "Flashcard MedCof Anest sobre anestésicos inalatórios",
        },
      },
      {
        n: "05",
        title: "QBank com +4.000 questões",
        body: "Modo de simulação, filtros por subárea e métricas de desempenho.",
        image: {
          src: "/images/anest-home/mockup-qbank-current-menu-platform-anest-v2.png",
          alt: "Menu do QBank de anestesiologia na plataforma MedCof",
        },
      },
      {
        n: "06",
        title: "Simulados autorais para a prova do TEA",
        body: "Treinos que reproduzem o formato, o ritmo e o nível de exigência da prova para acompanhar sua evolução.",
        image: {
          src: "/images/anest-home/sba-provas-simulados-floating-hq.png",
          alt: "Plataforma MedCof Anest com provas e simulados de anestesiologia",
        },
      },
    ],
  },
  tea: {
    slug: "tea",
    eyebrow: "TEA",
    title:
      "A preparação exata para conquistar o Título de Especialista em Anestesiologia",
    heroMobile: "/bg-sba-mac-2.png",
    heroDesktop: "/bg-sba-mac-1.png",
    flow: "story-items-models",
    modalitiesEyebrow: "Preparatórios",
    modalitiesTitle:
      "Escolha a estrutura de preparação para o seu momento de carreira, alinhada ao calendário oficial da SBA.",
    modalities: [
      {
        title: "Extensivo TEA",
        description:
          "Preparação completa e aprofundada, distribuída ao longo do ano. Ideal para construir uma base teórica sólida, cobrindo o edital da SBA com constância e previsibilidade.",
        bullets: [
          "Conteúdo completo e progressivo",
          "Maior tempo de acesso",
          "QBank especializado e simulados autorais",
        ],
        cta: "Ver preparatório",
      },
      {
        title: "Intensivo TEA",
        description:
          "Revisão de alta intensidade para a reta final. Foco em desempenho, resolução de questões e temas de maior incidência.",
        bullets: [
          "Revisão direcionada à reta final",
          "Simulados cronometrados",
          "Alto rendimento em pouco tempo",
        ],
        cta: "Ver preparatório",
      },
      {
        title: "Segunda Fase",
        description:
          "Preparação da segunda fase (prova prática e oral). Treino em simulações realistas, raciocínio clínico e estruturação de conduta.",
        bullets: [
          "Simulações da prova prática e oral",
          "Casos clínicos comentados",
          "Treino de argumentação, postura e segurança",
        ],
        cta: "Ver preparatório",
      },
    ],
    offers: [
      {
        badge: "Acesso até a data da prova",
        title: "MedCof Anest TEA Elite",
        equivalent: "",
        fromPrice: "De R$ 10.697,00",
        installment: "R$ 970,02",
        cash: "ou à vista por R$ 9.697,00",
        note: "",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados Mensais",
          "Fichas Resumo Online",
          "Flashcards & Qbank",
          "IA MedCof",
          "Fichas Resumo Impressas (Kit Elite)",
          "HIIT TEA (Revisão Intensiva)",
          "KIT ELITE Completo (caixa personalizada, ecobag, fichas resumo impressa, garrafa pacco, cofclips)",
          "Desconto Curso 2ª Fase TEA 2027",
          "Bônus: Ventilação Mecânica, MBE e ECG",
        ],
        featured: true,
        offerMode: "extensivo",
        cta: "Quero me inscrever",
      },
      {
        badge: "Acesso até a data da prova",
        title: "MedCof Anest TEA Regular",
        equivalent: "",
        fromPrice: "De R$ 9.297,00",
        installment: "R$ 829,98",
        cash: "ou à vista por R$ 8.297,00",
        note: "",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados Mensais",
          "Fichas Resumo Online",
          "Flashcards & Qbank",
          "IA MedCof",
        ],
        offerMode: "extensivo",
        cta: "Quero me inscrever",
      },
    ],
    storyKicker: "Certificação",
    storyTitle: "Por que obter o TEA se tornou indispensável no mercado atual",
    storyLead:
      "O título deixou de ser diferencial de currículo. Hoje ele é o que decide se você entra nas melhores escalas, equipes e cooperativas.",
    storyBody: [],
    storyPoints: [
      {
        n: "01",
        title: "Seu currículo chega à mesa",
        body: "Hospitais e grupos de anestesia usam o TEA como filtro de entrada. Sem ele, o currículo para antes de alguém ler.",
      },
      {
        n: "02",
        title: "Você entra nas escalas boas",
        body: "Cooperativas e escalas melhores pedem a certificação da SBA. É o que separa quem negocia de quem aceita o que sobrou.",
      },
      {
        n: "03",
        title: "Garante seu RQE e abre o caminho do TSA",
        body: "O TEA formaliza sua especialidade no registro e é por onde todo mundo passa antes de tentar o Título Superior.",
      },
    ],
    itemsTitle: "Estude para o TEA de forma direcionada",
    itemsLead:
      "Não é necessário estudar tudo, mas sim o que é necessário e o que cai. A revisão espaçada da MedCof entrega o conteúdo da sua prova no ritmo certo.",
    items: [
      {
        n: "01",
        title: "Aulas completas e objetivas",
        body: "Cobertura profunda dos temas do edital, gravadas por anestesiologistas formados pelos principais centros do país.",
        image: {
          src: "/images/anest-home/mec-aulas-plataforma.jpg",
          alt: "Aula de anestesiologia na plataforma MedCof Anest",
        },
      },
      {
        n: "02",
        title: "+4.000 questões comentadas no QBank",
        body: "Resoluções em texto e vídeo para entender o raciocínio da banca.",
        image: {
          src: "/images/anest-home/qbank-plexus-question.png",
          alt: "Questão do QBank MedCof Anest sobre plexo braquial",
        },
      },
      {
        n: "03",
        title: "5 mil flashcards com repetição espaçada",
        body: "Memorização ativa de classificações, doses e protocolos, sem exigir horas seguidas de estudo.",
        image: {
          src: "/images/anest-home/mockup-flashcards-real-platform-anest-v2.png",
          alt: "Flashcards da plataforma MedCof Anest",
        },
      },
      {
        n: "04",
        title: "Fichas-resumo direcionadas para a prática",
        body: "Materiais sintetizados, focados na retenção rápida dos tópicos essenciais.",
        image: {
          src: "/images/features/fichas-resumo-anest.jpg",
          alt: "Fichas-resumo de anestesiologia da MedCof Anest",
        },
      },
      {
        n: "05",
        title: "Todas as questões das últimas provas comentadas",
        body: "Análise do histórico recente de exames para mapear os padrões de cobrança da SBA.",
        image: {
          src: "/images/anest-home/mockup-questao-comentada-current-qbank-anest-v3.png",
          alt: "Questão comentada no QBank MedCof Anest",
        },
      },
      {
        n: "06",
        title: "Simulados autorais mensais",
        body: "Treino no formato real da prova para medir desempenho e calibrar o tempo de resposta.",
        image: {
          src: "/images/anest-home/sba-provas-simulados.jpg",
          alt: "Provas e simulados da SBA na plataforma MedCof Anest",
        },
      },
      {
        n: "07",
        title: "Correção e revisão de reta final",
        body: "Módulo intensivo na fase que antecede o exame, para consolidar os pontos de maior peso.",
        image: {
          src: "/images/anest-home/mockup-teste-direcionado-current-qbank-anest-v3.png",
          alt: "Teste direcionado de revisão na plataforma MedCof Anest",
        },
      },
    ],
  },
  tsa: {
    slug: "tsa",
    eyebrow: "TSA",
    title: "Com o método certo, estudar para o TSA fica simples",
    lead: "A preparação de alta densidade desenhada por anestesiologistas titulados dos maiores hospitais do país: o edital organizado na ordem certa, no recorte que a banca cobra e no ritmo que cabe na sua rotina.",
    heroMobile: "/bg-sba-mac-2.png",
    heroDesktop: "/bg-sba-mac-1.png",
    flow: "story-items-models",
    modalitiesEyebrow: "Preparatórios",
    modalitiesTitle: "Preparatórios para o Título Superior",
    modalities: [
      {
        title: "Extensivo TSA",
        description:
          "Acompanhamento contínuo de 12 meses, respeitando a separação das etapas escrita e oral exigidas pela SBA.",
        bullets: [
          "Trilha TSA completa",
          "1 ano de acesso",
          "Banco de questões e simulados avançados",
        ],
        cta: "Ver preparatórios",
      },
      {
        title: "Intensivo TSA",
        description:
          "Revisão de alta intensidade em 23 blocos semanais modulares de alta densidade técnica.",
        bullets: [
          "23 blocos semanais modulares",
          "Simulados cronometrados",
          "Foco em desempenho na prova",
        ],
        cta: "Ver preparatórios",
      },
      {
        title: "Segunda Fase TSA",
        description:
          "Em breve. Estruturado no formato OSCE, com manequins de alta fidelidade e arguição oral sob pressão.",
        bullets: [
          "Simulações com manequins",
          "Casos clínicos comentados",
          "Atividades práticas",
        ],
        cta: "Ver preparatório",
      },
    ],
    offers: [
      {
        badge: "Lançamento",
        title: "MedCof HIIT TSA",
        equivalent: "",
        fromPrice: "De R$ 5.497,00",
        installment: "R$ 449,85",
        cash: "ou à vista por R$ 4.497,00",
        note: "Intensivo: revisão concentrada e direcionada para a prova do TSA.",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados mensais direcionados",
          "Fichas resumo online",
          "Flashcards",
          "QBank",
          "IA MedCof",
        ],
        offerMode: "intensivo",
        cta: "Quero me inscrever",
      },
      {
        badge: "Acesso até a data da prova",
        title: "MedCof Anest TSA Elite",
        equivalent: "",
        fromPrice: "De R$ 14.497,00",
        installment: "R$ 1.350,15",
        cash: "ou à vista por R$ 13.497,00",
        note: "",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados Mensais Direcionados (Questões Autorais)",
          "Fichas Resumo Online",
          "Flashcards & Qbank",
          "IA MedCof",
          "Fichas Resumo Impressas (Kit Elite)",
          "HIIT TSA (Revisão Intensiva)",
          "KIT ELITE Completo (caixa personalizada, ecobag, fichas resumo impressa, garrafa pacco, cofclips)",
          "Revisão de Véspera (Presencial/Online)",
          "Desconto Curso 2ª Fase TSA 2027",
        ],
        featured: true,
        offerMode: "extensivo",
        cta: "Quero me inscrever",
      },
      {
        badge: "Acesso até a data da prova",
        title: "MedCof Anest TSA Regular",
        equivalent: "",
        fromPrice: "De R$ 12.497,00",
        installment: "R$ 1.150,08",
        cash: "ou à vista por R$ 11.497,00",
        note: "",
        bullets: [
          "Preparatório na íntegra",
          "Aulas",
          "Simulados Mensais Direcionados (Questões Autorais)",
          "Fichas Resumo Online",
          "Flashcards & Qbank",
          "IA MedCof",
        ],
        offerMode: "extensivo",
        cta: "Quero me inscrever",
      },
    ],
    storyTitle: "O que muda na sua carreira quando o título sai",
    storyLead:
      "São quatro coisas que mudam de verdade no seu dia a dia depois que o título sai.",
    storyBody: [],
    storyPoints: [
      {
        n: "01",
        title: "Você deixa de ser mais um currículo",
        body: "Quando o serviço precisa escolher, o título coloca você na frente.",
      },
      {
        n: "02",
        title: "As portas de chefia se abrem",
        body: "Chefia de serviço, coordenação de departamento e liderança hospitalar costumam pedir o título já no edital.",
      },
      {
        n: "03",
        title: "Você passa a formar gente",
        body: "Com o título você pode dar aula e ser preceptor de CET/SBA, formando os residentes que vêm depois de você.",
      },
      {
        n: "04",
        title: "Você negocia de outro lugar",
        body: "Cooperativas e escalas de alta complexidade pagam mais para quem tem o título. Boa parte dessas vagas nem chega a abrir para quem não tem.",
      },
    ],
    itemsTitle: "Feito por quem já passou por essa prova",
    itemsLead:
      "Você estuda o que cai, da forma que é cobrado e de onde você estiver, online ou offline.",
    items: [
      {
        n: "01",
        size: "hero",
        title: "Aulas que partem do caso clínico",
        body: "O edital inteiro, do jeito que a banca formula: do caso à conduta.",
        image: {
          src: "/images/anest-home/mec-aulas-plataforma.jpg",
          alt: "Aula de anestesiologia na plataforma MedCof Anest",
        },
      },
      {
        n: "02",
        size: "tall",
        title: "Aprofundamento no nível do TSA",
        body: "ECMO, eco-TE, ROTEM e bloqueios guiados por ultrassom. Onde o curso genérico para.",
        image: {
          src: "/images/anest-home/mockup-aperfeicoamento-current-qbank-anest-v3.png",
          alt: "Módulo de aprofundamento da plataforma MedCof Anest",
        },
      },
      {
        n: "03",
        size: "hero",
        title: "Quem ensina já tem o título",
        body: "Rafael Romaro e Lucas Rodrigues são titulados TSA e ex-preceptores do Sírio-Libanês.",
        images: [
          {
            src: "/images/professors/rafael-3.png",
            alt: "Rafael Romaro, professor titulado TSA da MedCof Anest",
            caption: "Rafael Romaro",
          },
          {
            src: "/images/professors/lucas-3.png",
            alt: "Lucas Rodrigues, coordenador TSA da MedCof Anest",
            caption: "Lucas Rodrigues",
          },
        ],
      },
      {
        n: "04",
        size: "wide",
        title: "Simulados autorais todo mês",
        body: "Objetivas e discursivas novas, corrigidas no padrão de resposta da banca.",
      },
      {
        n: "05",
        size: "wide",
        title: "Material filtrado pelo que mais cai",
        body: "Fichas e mapas construídos a partir da incidência real das últimas provas.",
      },
      {
        n: "06",
        size: "tall",
        title: "Estude online ou offline",
        body: "Aulas, questões e flashcards no celular, com download para o plantão sem sinal.",
        image: {
          src: "/images/anest-home/mockup-flashcards-real-platform-anest-v2.png",
          alt: "Flashcards da plataforma MedCof Anest no celular",
        },
      },
      {
        n: "07",
        size: "tall",
        title: "+4.000 questões comentadas",
        body: "Em texto e vídeo, por subespecialistas, com dúvida respondida por professor titulado.",
        image: {
          src: "/images/anest-home/mockup-questao-comentada-current-qbank-anest-v3.png",
          alt: "Questão comentada no QBank MedCof Anest",
        },
      },
    ],
  },
  aperfeicoamento: {
    slug: "aperfeicoamento",
    eyebrow: "Aperfeiçoamento",
    title:
      "Aprofunde-se em temas específicos da anestesiologia com alta precisão técnica",
    lead: "Treinamento contínuo em anestesia com corpo clínico formado e atuante nos melhores hospitais do país. Eleve sua prática clínica no centro cirúrgico com módulos focados e atualizados.",
    heroMobile: "/bg-sba-mac-2.png",
    heroDesktop: "/bg-sba-mac-1.png",
    flow: "story-items-models",
    modalitiesEyebrow: "Cursos",
    modalitiesTitle: "Anest US",
    modalities: [
      {
        title: "Anest US",
        description: "Ultrassonografia aplicada à Anestesiologia.",
        bullets: [
          "Do básico ao avançado em USG",
          "Bloqueios guiados por ultrassom",
          "Vídeos práticos e protocolos",
        ],
        cta: "Conhecer",
      },
    ],
    storyKicker: "Programa",
    storyTitle: "Aperfeiçoamento das técnicas e da plataforma MedCof Anest",
    storyLead:
      "MedCof Anest Aperfeiçoamento foi desenhado para anestesiologistas que buscam domínio aprofundado em frentes de alta complexidade no perioperatório. O treinamento é denso e focado na realidade do centro cirúrgico.",
    storyBody: [],
    itemsTitle: "Pilares do programa",
    items: [
      {
        n: "01",
        title: "Aprofundamento técnico em nichos específicos",
        body: "ECO-TE (Ecocardiografia Transesofágica), ECMO (Suporte Extracorpóreo), ROTEM (Tromboelastometria) e hemodinâmica avançada.",
      },
      {
        n: "02",
        title: "Treinamentos práticos e focados",
        body: "Aulas diretas de conduta, raciocínio clínico estruturado e tomada de decisão sob pressão no centro cirúrgico.",
      },
      {
        n: "03",
        title: "Novos lançamentos a caminho",
        body: "Expansão constante de módulos específicos para cobrir as principais inovações da especialidade.",
      },
    ],
  },
};
