import type { AboutContent, ComparisonRow, NavItem, PhotoCredit, Source } from './types';

export const SITE_NAME = 'Matchakohi';
export const SITE_TAGLINE = 'Discover the story behind every sip.';
export const THEME_STORAGE_KEY = 'matchakohi:theme';

/** Primary navigation, shared by both experiences. */
export const primaryNav: NavItem[] = [
  { label: 'Origins', section: 'origins' },
  { label: 'Varieties', section: 'varieties' },
  { label: "How It's Made", section: 'process' },
  { label: 'Culture', section: 'culture' },
  { label: 'About', section: 'about' },
];

/** Secondary destinations, surfaced in the mobile menu and footer. */
export const secondaryNav: NavItem[] = [
  { label: 'Flavor profiles', section: 'flavor' },
  { label: 'Preparation', section: 'prepare' },
  { label: 'Coffee vs matcha', section: 'compare' },
  { label: 'Find your cup', section: 'discover' },
];

export const footerNav: NavItem[] = [
  { label: 'Origins & history', section: 'origins' },
  { label: 'How it is made', section: 'process' },
  { label: 'Varieties & styles', section: 'varieties' },
  { label: 'Flavor profiles', section: 'flavor' },
  { label: 'Preparation guides', section: 'prepare' },
  { label: 'Culture', section: 'culture' },
  { label: 'Compare the two', section: 'compare' },
  { label: 'About Matchakohi', section: 'about' },
];

export const comparisonIntro =
  'Different plants, different crafts, and two very different cups. This side-by-side view keeps the differences in context — without pretending one is the “right” choice.';

export const comparisonRows: ComparisonRow[] = [
  {
    id: 'plant',
    label: 'Source plant',
    coffee:
      'Coffea shrubs and small trees, an evergreen genus native to tropical Africa and parts of Asia.',
    matcha:
      'Camellia sinensis, the tea plant — an evergreen shrub cultivated across Japan and other tea-growing regions.',
  },
  {
    id: 'species',
    label: 'Species & type',
    coffee:
      'Mostly Coffea arabica and Coffea canephora (robusta), with many named cultivars and hybrids.',
    matcha:
      'Almost always Camellia sinensis var. sinensis in Japan, with cultivars such as Yabukita, Samidori, and Okumidori.',
  },
  {
    id: 'part',
    label: 'Part used',
    coffee:
      'The seeds — usually two per fruit — inside coffee cherries. The fruit itself is removed before roasting.',
    matcha:
      'The leaves. After processing into tencha, the whole leaf is stone-ground into a fine powder and consumed suspended in water.',
  },
  {
    id: 'processing',
    label: 'Main processing',
    coffee:
      'Harvest, then washed, natural, honey, or other processing; drying; milling; roasting; and finally grinding.',
    matcha:
      'Shading selected plants before harvest, steaming, drying, sorting, removing stems and veins, and grinding tencha into powder.',
  },
  {
    id: 'preparation',
    label: 'Traditional preparation',
    coffee:
      'Varies widely: Turkish coffee simmered in a cezve, filter or drip brewing, espresso, moka pot, and countless local methods.',
    matcha:
      'Sifted into a warmed bowl, combined with hot water, and whisked with a bamboo chasen — as usucha or the thicker koicha.',
  },
  {
    id: 'flavor',
    label: 'Common flavor notes',
    coffee:
      'Fruity, floral, nutty, chocolatey, caramel-like, earthy; acidity, sweetness, and body depend on origin, processing, roast, and brew.',
    matcha:
      'Grassy, vegetal, sweet, umami, creamy, and sometimes astringent; the balance shifts with cultivar, shading, harvest, and preparation.',
  },
  {
    id: 'caffeine',
    label: 'Caffeine',
    coffee:
      'Commonly around 70–120 mg per 240 ml of brewed coffee, and roughly 60–80 mg in a 30 ml espresso. Amounts vary with dose, bean, roast, and method.',
    matcha:
      'Often estimated at roughly 20–40 mg per gram of powder, so a 1–2 g serving may supply about 30–70 mg. Laboratory values and serving sizes vary widely.',
  },
  {
    id: 'culture',
    label: 'Cultural associations',
    coffee:
      'Coffeehouses and public conversation, hospitality, morning rituals, work culture, and a global specialty-coffee movement.',
    matcha:
      'Japanese tea practice and Zen-influenced aesthetics, seasonal hospitality, artisan utensils, and contemporary café and food culture.',
  },
  {
    id: 'modern',
    label: 'Popular modern forms',
    coffee:
      'Espresso, americano, cappuccino, latte, flat white, mocha, pour-over, French press, and cold brew.',
    matcha:
      'Usucha, koicha, matcha lattes, iced matcha, and a wide range of desserts and baked goods.',
  },
  {
    id: 'equipment',
    label: 'Typical equipment',
    coffee:
      'Grinder, scale, kettle, dripper, press, moka pot, or espresso machine — plus a cup and hot water.',
    matcha:
      'Chawan (bowl), chasen (bamboo whisk), chashaku (scoop), a fine sieve, a scale, and a kettle.',
  },
];

export const comparisonNote =
  'Neither drink is universally “healthier” than the other. Caffeine and other compounds vary substantially with serving size and preparation, and individual responses differ. This comparison is a starting point for exploration, not medical advice.';

export const aboutContent: AboutContent = {
  eyebrow: 'About Matchakohi',
  title: 'Curiosity, Culture, and Every Cup.',
  lede: 'Matchakohi is a space for discovering the stories behind two beloved drinks.',
  paragraphs: [
    'From the farms where coffee grows to the tea fields where matcha begins, we explore the origins, traditions, and craft that turn simple ingredients into meaningful rituals.',
    'The name brings together matcha and kōhi, the Japanese word for coffee. The idea is equally simple: two worlds, one love for the perfect cup. We are not here to declare a winner — we are here to look closer at what is already in your cup.',
  ],
  principles: [
    {
      title: 'Follow the origin',
      body: 'Every flavor has a place behind it: a farm, a cultivar, a season, a processing choice. We begin there.',
    },
    {
      title: 'Respect the craft',
      body: 'Traditional methods are not decoration. We describe them in context and give the people and places behind them room to speak.',
    },
    {
      title: 'Stay curious',
      body: 'There is always another variety, another technique, another story. The best cup is the one that makes you ask a question.',
    },
  ],
  images: {
    coffee: {
      slug: 'coffee-cafe-people',
      alt: 'A busy café interior with guests talking around wooden tables',
      position: 'center 55%',
    },
    matcha: {
      slug: 'matcha-bowl',
      alt: 'A bowl of vivid green matcha photographed during a Japanese tea ceremony',
      position: 'center 50%',
    },
  },
};

export const sources: Source[] = [
  {
    title: 'Coffee market information and statistics',
    publisher: 'International Coffee Organization',
    href: 'https://www.ico.org/',
    description: 'Trade data and background on the global coffee sector.',
  },
  {
    title: 'Coffee varieties catalogue',
    publisher: 'World Coffee Research',
    href: 'https://worldcoffeeresearch.org/',
    description: 'Descriptions of coffee species, cultivars, and agronomic research.',
  },
  {
    title: 'Coffee standards and education',
    publisher: 'Specialty Coffee Association',
    href: 'https://sca.coffee/',
    description: 'Industry resources on cupping, brewing, and green coffee.',
  },
  {
    title: 'Plants of the World Online',
    publisher: 'Royal Botanic Gardens, Kew',
    href: 'https://powo.science.kew.org/',
    description: 'Accepted botanical names and distributions for Coffea and Camellia.',
  },
  {
    title: 'Matcha and Japanese tea',
    publisher: 'ITO EN',
    href: 'https://www.itoen-global.com/',
    description: 'Background on Japanese tea categories, cultivation, and matcha.',
  },
  {
    title: 'The Book of Tea',
    publisher: 'Okakura Kakuzō · Project Gutenberg',
    href: 'https://www.gutenberg.org/ebooks/1544',
    description:
      'A 1906 essay on tea, aesthetics, and Japanese culture — a historical perspective.',
  },
  {
    title: 'Caffeine intake and health',
    publisher: 'European Food Safety Authority',
    href: 'https://www.efsa.europa.eu/en/topics/topic/caffeine',
    description: 'Scientific assessments of caffeine intake and safety thresholds.',
  },
  {
    title: 'FoodData Central',
    publisher: 'U.S. Department of Agriculture',
    href: 'https://fdc.nal.usda.gov/',
    description: 'Nutrient and caffeine values for foods and beverages, including coffee.',
  },
];

/**
 * Wikimedia Commons photography used on the site. All images are cropped and
 * resized for layout. Attribution is provided here, as required by the licences.
 */
export const photoCredits: PhotoCredit[] = [
  {
    slug: 'coffee-cherries',
    title: 'Coffee cherries of varying ripeness, on a tree in Colombia',
    author: 'U.S. Fish and Wildlife Service – Northeast Region',
    license: 'Public domain',
    licenseUrl:
      'https://commons.wikimedia.org/wiki/Commons:Licensing#Material_in_the_public_domain',
    pageUrl:
      'https://commons.wikimedia.org/wiki/File:Coffee_cherries_of_varying_ripeness,_on_a_tree_in_Colombia_(by_Brian_Smith).jpg',
  },
  {
    slug: 'coffee-flower',
    title: 'The Coffee flower 02',
    author: 'Denis Kasozi',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:The_Coffee_flower_02.jpg',
  },
  {
    slug: 'coffee-farm',
    title: 'Landscape coffee farm',
    author: 'Richard Grivas',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Landscape_coffee_farm.jpg',
  },
  {
    slug: 'coffee-harvest',
    title: 'Freshly harvested coffee cherries',
    author: 'PilotChicago',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Freshly_harvested_coffee_cherries.jpg',
  },
  {
    slug: 'coffee-processing',
    title: 'Coffee Processing in Ahuachapan, El Salvador',
    author: 'The Cockroach',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    pageUrl:
      'https://commons.wikimedia.org/wiki/File:Coffee_Processing_in_Ahuachapan,_El_Salvador.jpg',
  },
  {
    slug: 'coffee-drying',
    title: 'Women drying coffee',
    author: 'PHILIP ASEDRI DRADRIO',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Women_drying_coffee.jpg',
  },
  {
    slug: 'coffee-roasting',
    title: 'A Toper coffee roasting machine',
    author: 'Robert-brook',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:A_Toper_coffee_roasting_machine.jpg',
  },
  {
    slug: 'coffee-turkish',
    title: 'Türk Kahvesi – Bakır Cezve',
    author: 'Eaeeae',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg',
  },
  {
    slug: 'coffee-ethiopian',
    title: 'Coffee ceremony of Ethiopia and Eritrea 4',
    author: 'ProtoplasmaKid',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    pageUrl:
      'https://commons.wikimedia.org/wiki/File:Coffee_ceremony_of_Ethiopia_and_Eritrea_4.jpg',
  },
  {
    slug: 'coffee-barista',
    title: 'Barista prepares espresso at coffee shop',
    author: 'Shixart1985',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    pageUrl:
      'https://commons.wikimedia.org/wiki/File:Barista_prepares_espresso_at_coffee_shop.jpg',
  },
  {
    slug: 'matcha-tea-field',
    title: '天空の茶畑 01 (Tea fields in the sky)',
    author: 'Asset utilitist',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    pageUrl:
      'https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E7%A9%BA%E3%81%AE%E8%8C%B6%E7%95%91_01.jpg',
  },
  {
    slug: 'matcha-tea-plant',
    title: 'Tea plant in Kowata, Uji, Kyoto',
    author: 'おいでやす千年の都',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Tea_plant_in_Kowata,_Uji,_Kyoto.jpg',
  },
  {
    slug: 'matcha-historic',
    title: 'Tea-Yard at Uzi, Yamashiro',
    author: 'New York Public Library',
    license: 'No known copyright restrictions',
    licenseUrl:
      'https://commons.wikimedia.org/wiki/Commons:Licensing#Material_in_the_public_domain',
    pageUrl:
      'https://commons.wikimedia.org/wiki/File:Tea-Yard_at_Uzi,_Yamashiro_(3109909163).jpg',
  },
  {
    slug: 'matcha-picking',
    title: 'Tea picking 01',
    author: 'vera46',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Tea_picking_01.jpg',
  },
  {
    slug: 'matcha-processing',
    title: 'Processing green tea',
    author: 'Spinster cardigan',
    license: 'CC BY 1.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/1.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Processing_green_tea.jpg',
  },
  {
    slug: 'matcha-stone-mill',
    title: 'Tencha on traditional stone mill in Uji, Japan',
    author: 'Derjochenmeyer',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    pageUrl:
      'https://commons.wikimedia.org/wiki/File:Tencha_on_traditional_stone_mill_in_Uji_Japan.jpg',
  },
  {
    slug: 'matcha-bowl',
    title: 'Japanese cup of matcha during the tea ceremony',
    author: 'WorldContributor',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    pageUrl:
      'https://commons.wikimedia.org/wiki/File:Japanese_cup_of_matcha_during_the_tea_ceremony.jpg',
  },
  {
    slug: 'matcha-ceremony',
    title: 'Japanese Tea Ceremony Serving Tea',
    author: 'KuboBella',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Japanese_Tea_Ceremony_Serving_Tea.jpg',
  },
  {
    slug: 'matcha-whisk',
    title: 'Chasen side view',
    author: 'D-Kuru',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Chasen-side-fs_PNr%C2%B00499.jpg',
  },
];

/** Unsplash photos are used under the Unsplash License; attribution is not required. */
export const unsplashPhotoIds: Record<string, string> = {
  'coffee-hero': '1495474472287-4d71bcdd2085',
  'coffee-beans': '1447933601403-0c6688de566e',
  'coffee-pour': '1442512595331-e89e73853f31',
  'coffee-espresso': '1511920170033-f8396924c348',
  'coffee-black': '1514432324607-a09d9b4aefdd',
  'coffee-iced': '1504753793650-d4a2b783c15e',
  'coffee-latte': '1541167760496-1628856ab772',
  'coffee-cafe': '1501339847302-ac426a4a7cbb',
  'coffee-cafe-people': '1525610553991-2bede1a236e2',
  'coffee-cupping': '1497935586351-b67a49e012bf',
  'coffee-beans-sack': '1524350876685-274059332603',
  'coffee-cup-beans': '1459755486867-b55449bb39ff',
  'coffee-cups': '1498804103079-a6351b050096',
  'matcha-hero': '1582793988951-9aed5509eb97',
  'matcha-latte-art': '1515823064-d6e0c04616a7',
  'matcha-latte': '1536256263959-770b48d82b0a',
  'matcha-iced': '1556881286-fc6915169721',
};
