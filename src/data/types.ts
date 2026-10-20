/** The two experiences Matchakohi is built around. */
export type ThemeName = 'coffee' | 'matcha';

/** Sections shared by both experiences, used for in-page navigation. */
export type SectionId =
  | 'top'
  | 'origins'
  | 'process'
  | 'varieties'
  | 'flavor'
  | 'prepare'
  | 'culture'
  | 'compare'
  | 'discover'
  | 'about'
  | 'sources';

export interface ImageRef {
  /** File name (without the -800/-1600 suffix) inside /public/images. */
  slug: string;
  alt: string;
  /** Optional CSS object-position value for art-directed crops. */
  position?: string;
}

export interface CtaLink {
  label: string;
  section: SectionId;
}

export interface NavItem {
  label: string;
  section: SectionId;
}

export interface HeroFact {
  label: string;
  value: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  supporting: string;
  primary: CtaLink;
  secondary: CtaLink;
  image: ImageRef;
  imageKicker: string;
  imageCaption: string;
  facts: HeroFact[];
  scrollLabel: string;
}

export interface IntroContent {
  eyebrow: string;
  title: string;
  lede: string;
  paragraphs: string[];
  image: ImageRef;
  insetImage: ImageRef;
  quote: string;
  quoteAttribution?: string;
  facts: { value: string; label: string }[];
}

export interface TimelineEntry {
  id: string;
  period: string;
  location: string;
  title: string;
  body: string;
  image?: ImageRef;
  aside?: string;
}

export interface OriginsContent {
  eyebrow: string;
  title: string;
  intro: string;
  timelineLabel: string;
  timeline: TimelineEntry[];
  feature: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: ImageRef;
    caption: string;
  };
}

export interface ProcessStage {
  id: string;
  title: string;
  body: string;
  detail: string;
  image: ImageRef;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  intro: string;
  stages: ProcessStage[];
  note: { title: string; body: string };
}

export type IconName =
  | 'bean'
  | 'leaf'
  | 'cup'
  | 'droplet'
  | 'filter'
  | 'press'
  | 'syringe'
  | 'snow'
  | 'kettle'
  | 'whisk'
  | 'bowl'
  | 'milk'
  | 'cake'
  | 'sparkle'
  | 'thermometer'
  | 'scale'
  | 'cherry'
  | 'roast'
  | 'mill'
  | 'farm';

export interface VarietyItem {
  id: string;
  name: string;
  meta: string;
  summary: string;
  detail?: string;
  image?: ImageRef;
  icon?: IconName;
}

export interface VarietyGroup {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  display: 'features' | 'methods' | 'list';
  items: VarietyItem[];
}

export interface VarietiesContent {
  eyebrow: string;
  title: string;
  intro: string;
  groups: VarietyGroup[];
  note: { title: string; body: string };
}

export interface FlavorDimension {
  id: string;
  label: string;
  description: string;
  guidance: string;
}

export interface QuickPick {
  label: string;
  ids: string[];
}

export interface FlavorContent {
  eyebrow: string;
  title: string;
  intro: string;
  dimensions: FlavorDimension[];
  quickPicks: QuickPick[];
  emptyTitle: string;
  emptyBody: string;
  note: { title: string; body: string };
}

export interface RecipeSpec {
  label: string;
  value: string;
}

export interface Recipe {
  id: string;
  name: string;
  kicker: string;
  summary: string;
  image: ImageRef;
  ingredients: string[];
  equipment: string[];
  specs: RecipeSpec[];
  steps: string[];
  mistakes: string[];
  adjust: string[];
}

export interface PrepareContent {
  eyebrow: string;
  title: string;
  intro: string;
  recipes: Recipe[];
  note: { title: string; body: string };
}

export interface CultureEntry {
  id: string;
  location: string;
  title: string;
  body: string;
  footnote?: string;
  image: ImageRef;
  size?: 'feature' | 'standard';
}

export interface CultureContent {
  eyebrow: string;
  title: string;
  intro: string;
  entries: CultureEntry[];
  note: { title: string; body: string };
}

export interface QuizOption {
  id: string;
  label: string;
  note: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
}

export interface QuizResult {
  id: string;
  title: string;
  description: string;
  matches: string[];
  link: CtaLink;
}

export interface DiscoverContent {
  eyebrow: string;
  title: string;
  intro: string;
  questions: QuizQuestion[];
  results: QuizResult[];
  defaultResult: string;
  note: string;
}

export interface FinalCtaContent {
  eyebrow: string;
  title: string;
  body: string;
  primary: CtaLink;
  secondaryLabel: string;
  image: ImageRef;
}

export interface BeverageContent {
  theme: ThemeName;
  /** Label used in the theme switcher and in concise UI copy. */
  label: string;
  hero: HeroContent;
  intro: IntroContent;
  origins: OriginsContent;
  process: ProcessContent;
  varieties: VarietiesContent;
  flavor: FlavorContent;
  prepare: PrepareContent;
  culture: CultureContent;
  discover: DiscoverContent;
  finalCta: FinalCtaContent;
  seoTitle: string;
  seoDescription: string;
}

export interface ComparisonRow {
  id: string;
  label: string;
  coffee: string;
  matcha: string;
}

export interface Source {
  title: string;
  publisher: string;
  href: string;
  description: string;
}

export interface PhotoCredit {
  slug: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  pageUrl: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  lede: string;
  paragraphs: string[];
  principles: { title: string; body: string }[];
  images: { coffee: ImageRef; matcha: ImageRef };
}
