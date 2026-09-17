import type { OfferCard } from "@/lib/content";

export type ResidentYear = "R1" | "R2" | "R3";

export type ResidentOfferGroup = {
  title: string;
  description: string;
  offers: OfferCard[];
  mode?: "extensivo" | "intensivo";
};

const COMPLETAO_BULLETS = [
  "Preparatório na íntegra",
  "Aulas",
  "Simulados antes de cada quadrimestre (maio, setembro, dezembro)",
  "Revisões de véspera antes de cada prova (maio, setembro, dezembro, janeiro)",
  "Fichas-resumo online",
  "Fichas-resumo impressas",
  "Flashcards",
  "QBank com questões em texto e vídeo-comentário",
  "HIIT prova anual: revisão intensiva para a prova",
  "Kit Elite com caixa personalizada, ecobag, fichas-resumo impressas, garrafa Pacco e Cofclips",
  "Inteligência Artificial da MedCof",
  "Bônus: Ventilação Mecânica, MBE e ECG",
];

const RESIDENCY_REGULAR_BULLETS = [
  "Preparatório na íntegra",
  "Aulas",
  "Simulados quadrimestrais",
  "Fichas-resumo online",
  "Flashcards e QBank",
  "Grupo de discussões de casos",
  "Inteligência Artificial da MedCof",
];

const RESIDENCY_ELITE_BULLETS = [
  ...RESIDENCY_REGULAR_BULLETS,
  "Revisões de véspera",
  "Fichas-resumo impressas",
  "HIIT prova anual: revisão intensiva para a prova",
  "Kit Elite completo",
  "Bônus: Ventilação Mecânica, MBE e ECG",
];

const TSA_REGULAR_BULLETS = [
  "Preparatório na íntegra",
  "Aulas",
  "Simulados mensais direcionados com questões autorais",
  "Fichas-resumo online",
  "Flashcards e QBank",
  "Inteligência Artificial da MedCof",
];

function completãoAnual(): OfferCard {
  return {
    badge: "Acesso até a data da prova",
    title: "MedCof Anest Completão (Anual)",
    equivalent: "Equivalente ao pacote Elite",
    fromPrice: "De R$ 10.497,00",
    installment: "R$ 950,02",
    cash: "ou à vista por R$ 9.497,00",
    note: "Acesso às aulas do R1, R2 e R3, com QBank completo.",
    bullets: COMPLETAO_BULLETS,
    cta: "Quero me inscrever",
  };
}

function residencyAnnualOffers(
  year: ResidentYear,
  prices: {
    eliteFrom: string;
    eliteInstallment: string;
    eliteCash: string;
    regularFrom: string;
    regularInstallment: string;
    regularCash: string;
  },
): OfferCard[] {
  return [
    {
      badge: "",
      title: `MedCof Anest ${year} (Anual) - Elite`,
      equivalent: "",
      fromPrice: prices.eliteFrom,
      installment: prices.eliteInstallment,
      cash: prices.eliteCash,
      note: `Acesso apenas às aulas do ${year}, com QBank completo e os benefícios exclusivos do pacote Elite.`,
      bullets: RESIDENCY_ELITE_BULLETS,
      cta: "Quero me inscrever",
    },
    {
      badge: "Acesso até a data da prova",
      title: `MedCof Anest ${year} (Anual) - Regular`,
      equivalent: "",
      fromPrice: prices.regularFrom,
      installment: prices.regularInstallment,
      cash: prices.regularCash,
      note: `Acesso apenas às aulas do ${year}, com QBank completo.`,
      bullets: RESIDENCY_REGULAR_BULLETS,
      cta: "Quero me inscrever",
    },
  ];
}

export const RESIDENT_OFFERS: Record<ResidentYear, ResidentOfferGroup[]> = {
  R1: [
    {
      title: "R1 Completão",
      description: "Acesso às aulas do R1, R2 e R3 + QBank completo.",
      offers: [
        {
          badge: "Acesso até a prova de 2029",
          title: "MedCof Anest Completão (Trianual)",
          equivalent: "Equivalente ao pacote Elite",
          fromPrice: "De R$ 14.497,00",
          installment: "R$ 1.350,15",
          cash: "ou à vista por R$ 13.497,00",
          note: "Acesso às aulas do R1, R2 e R3, com QBank completo, até a prova de 2029. O Kit Elite físico é enviado no primeiro ano.",
          bullets: COMPLETAO_BULLETS,
          featured: true,
          cta: "Quero me inscrever",
        },
        completãoAnual(),
      ],
    },
    {
      title: "Extensivo R1 Anual",
      description: "Acesso apenas às aulas do R1 + QBank completo.",
      offers: residencyAnnualOffers("R1", {
        eliteFrom: "De R$ 6.497,00",
        eliteInstallment: "R$ 549,88",
        eliteCash: "ou à vista por R$ 5.497,00",
        regularFrom: "De R$ 4.497,00",
        regularInstallment: "R$ 349,82",
        regularCash: "ou à vista por R$ 3.497,00",
      }),
    },
  ],
  R2: [
    {
      title: "R2 Completão",
      description: "Acesso às aulas do R1, R2 e R3 + QBank completo.",
      offers: [
        {
          badge: "Acesso até a prova de 2028",
          title: "MedCof Anest Completão (Bianual)",
          equivalent: "Equivalente ao pacote Elite",
          fromPrice: "De R$ 12.497,00",
          installment: "R$ 1.150,08",
          cash: "ou à vista por R$ 11.497,00",
          note: "Acesso às aulas do R1, R2 e R3, com QBank completo, até a prova de 2028. O Kit Elite físico é enviado no primeiro ano.",
          bullets: COMPLETAO_BULLETS,
          featured: true,
          cta: "Quero me inscrever",
        },
        completãoAnual(),
      ],
    },
    {
      title: "Extensivo R2 Anual",
      description: "Acesso apenas às aulas do R2 + QBank completo.",
      offers: residencyAnnualOffers("R2", {
        eliteFrom: "De R$ 6.897,00",
        eliteInstallment: "R$ 589,90",
        eliteCash: "ou à vista por R$ 5.897,00",
        regularFrom: "De R$ 4.897,00",
        regularInstallment: "R$ 389,83",
        regularCash: "ou à vista por R$ 3.897,00",
      }),
    },
  ],
  R3: [
    {
      title: "R3 Completão",
      description: "Acesso às aulas do R1, R2 e R3 + QBank completo.",
      offers: [{ ...completãoAnual(), featured: true }],
    },
    {
      title: "Extensivo R3 Anual",
      description: "Acesso apenas às aulas do R3 + QBank completo.",
      offers: residencyAnnualOffers("R3", {
        eliteFrom: "De R$ 7.197,00",
        eliteInstallment: "R$ 619,91",
        eliteCash: "ou à vista por R$ 6.197,00",
        regularFrom: "De R$ 5.197,00",
        regularInstallment: "R$ 419,84",
        regularCash: "ou à vista por R$ 4.197,00",
      }),
    },
    {
      title: "Preparatório TSA",
      description: "Preparação direcionada para o TSA + QBank completo.",
      offers: [
        {
          badge: "",
          title: "MedCof Anest TSA Elite",
          equivalent: "",
          fromPrice: "De R$ 14.497,00",
          installment: "R$ 1.350,15",
          cash: "ou à vista por R$ 13.497,00",
          note: "Preparação completa para o TSA, com os benefícios exclusivos do pacote Elite.",
          bullets: [
            ...TSA_REGULAR_BULLETS,
            "Fichas-resumo impressas",
            "HIIT TSA: revisão intensiva",
            "Kit Elite completo",
            "Bônus: Ventilação Mecânica, MBE e ECG",
            "Revisão de véspera presencial ou online",
            "Desconto no curso de 2ª fase TSA 2027",
          ],
          featured: true,
          cta: "Quero me inscrever",
        },
        {
          badge: "Acesso até a data da prova",
          title: "MedCof Anest TSA Regular",
          equivalent: "",
          fromPrice: "De R$ 12.497,00",
          installment: "R$ 1.150,08",
          cash: "ou à vista por R$ 11.497,00",
          note: "Preparação completa e direcionada para o TSA.",
          bullets: TSA_REGULAR_BULLETS,
          cta: "Quero me inscrever",
        },
      ],
    },
    {
      title: "Intensivo TSA",
      description: "Revisão concentrada e direcionada para a prova do TSA.",
      mode: "intensivo",
      offers: [
        {
          badge: "Lançamento",
          title: "MedCof HIIT TSA",
          equivalent: "",
          fromPrice: "De R$ 5.497,00",
          installment: "R$ 449,85",
          cash: "ou à vista por R$ 4.497,00",
          note: "Revisão intensiva e direcionada para o TSA.",
          bullets: [
            "Preparatório na íntegra",
            "Aulas",
            "Simulados mensais direcionados",
            "Fichas-resumo online",
            "Flashcards",
            "QBank",
            "Inteligência Artificial da MedCof",
          ],
          cta: "Quero me inscrever",
        },
      ],
    },
  ],
};
