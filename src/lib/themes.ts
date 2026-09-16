export type ThemeId =
  | "store"
  | "sba"
  | "mec"
  | "tea"
  | "tsa"
  | "tsaoral"
  | "fase2"
  | "craft"
  | "dor";

export type ProductLayout =
  | "store"
  | "models"
  | "path"
  | "title"
  | "apex"
  | "clinical"
  | "quiet";

export type Theme = {
  id: ThemeId;
  product: string;
  layout: ProductLayout;
  localLinks: { href: string; label: string }[];
};

export const THEMES: Record<ThemeId, Theme> = {
  store: {
    id: "store",
    product: "MedCof Anest",
    layout: "store",
    localLinks: [
      { href: "#funcionalidades", label: "Funcionalidades" },
      { href: "#planos", label: "Planos" },
      { href: "#trilhas", label: "Trilhas" },
    ],
  },
  sba: {
    id: "sba",
    product: "Residentes SBA",
    layout: "models",
    localLinks: [
      { href: "#recursos", label: "Recursos" },
      { href: "#modelos", label: "Preparatórios" },
    ],
  },
  mec: {
    id: "mec",
    product: "Residentes MEC",
    layout: "models",
    localLinks: [
      { href: "#metodo", label: "Residência" },
      { href: "#recursos", label: "Recursos" },
      { href: "#modelos", label: "Preparatórios" },
    ],
  },
  tea: {
    id: "tea",
    product: "TEA",
    layout: "title",
    localLinks: [
      { href: "#metodo", label: "Por que o TEA" },
      { href: "#recursos", label: "Método" },
      { href: "#modelos", label: "Preparatórios" },
    ],
  },
  tsa: {
    id: "tsa",
    product: "TSA",
    layout: "apex",
    localLinks: [
      { href: "#metodo", label: "Carreira" },
      { href: "#recursos", label: "Método" },
      { href: "#modelos", label: "Preparatórios" },
    ],
  },
  tsaoral: {
    id: "tsaoral",
    product: "TSA Oral",
    layout: "apex",
    localLinks: [
      { href: "#estrutura", label: "Estrutura" },
      { href: "#investimento", label: "Investimento" },
      { href: "#docentes", label: "Docentes" },
    ],
  },
  fase2: {
    id: "fase2",
    product: "Segunda Fase",
    layout: "models",
    localLinks: [
      { href: "#tea", label: "Segunda Fase TEA" },
      { href: "#tsa", label: "TSA Oral" },
    ],
  },
  craft: {
    id: "craft",
    product: "Aperfeiçoamento",
    layout: "clinical",
    localLinks: [
      { href: "#metodo", label: "Programa" },
      { href: "#recursos", label: "Pilares" },
      { href: "#cursos", label: "Anest US" },
    ],
  },
  dor: {
    id: "dor",
    product: "Dor",
    layout: "quiet",
    localLinks: [{ href: "#falar", label: "Falar com a equipe" }],
  },
};

export const THEME_BY_PATH: Record<string, ThemeId> = {
  "/": "store",
  "/residentes-sba": "sba",
  "/residentes-mec": "mec",
  "/tea": "tea",
  "/tsa": "tsa",
  "/tsa-oral": "tsaoral",
  "/segunda-fase": "fase2",
  "/aperfeicoamento": "craft",
  "/dor": "dor",
};
