import type {
  BeverageContent,
  CultureContent,
  DiscoverContent,
  FinalCtaContent,
  FlavorContent,
  HeroContent,
  IntroContent,
  OriginsContent,
  PrepareContent,
  ProcessContent,
  VarietiesContent,
} from './types';

export const matchaHero: HeroContent = {
  eyebrow: 'The world of matcha',
  headlineLead: 'More than a cup of',
  headlineAccent: 'green.',
  supporting:
    'Discover the Japanese tea traditions, careful cultivation, and thoughtful preparation behind matcha, from shaded tea fields to the modern café.',
  primary: { label: 'Explore Matcha Origins', section: 'origins' },
  secondary: { label: 'Discover Matcha Grades', section: 'varieties' },
  image: {
    slug: 'matcha-hero',
    alt: 'Bowls of vivid green matcha powder with bamboo whisks and scoops on a dark wooden table',
    position: 'center 50%',
  },
  imageKicker: 'Field notes · No. 02',
  imageCaption: 'The whole leaf, stone-ground into powder.',
  facts: [
    { label: 'The leaf', value: 'Camellia sinensis' },
    { label: 'Its home', value: 'Japan’s tea fields' },
    { label: 'The bowl', value: 'Usucha or koicha' },
  ],
  scrollLabel: 'Scroll to begin',
};

export const matchaIntro: IntroContent = {
  eyebrow: 'Powder, leaf, practice',
  title: 'A leaf, ground into light.',
  lede:
    'Matcha is not a different plant from green tea. It is a different way of growing, processing, and preparing the same tea leaf — one that ends with the whole leaf suspended in your bowl.',
  paragraphs: [
    'Selected tea plants are shaded before harvest. The leaves are steamed and dried, the stems and veins are removed to produce tencha, and the tencha is ground into a fine powder. What remains is vivid color, concentrated aroma, and a flavor shaped by the cultivar, the season, and the hand of the producer.',
    'Because the powder is suspended in water rather than steeped and removed, drinking matcha means consuming the whole leaf. That helps explain its intensity — and why small differences in preparation can change the bowl so noticeably.',
    'Matcha’s history runs through tea’s journey from China to Japan, through Zen monastic practice and the development of chanoyu, and into a modern life of cafés, sweets, and drinks far from the tea room. The tradition is not frozen; it is still being made.',
  ],
  image: {
    slug: 'matcha-tea-plant',
    alt: 'Fresh green tea leaves and buds growing in a field in Uji, Kyoto',
    position: 'center 50%',
  },
  insetImage: {
    slug: 'matcha-whisk',
    alt: 'A bamboo chasen whisk photographed against a plain white background',
    position: 'center 50%',
  },
  quote:
    'A bowl of matcha asks for attention, not perfection. The practice is in the noticing.',
  quoteAttribution: 'The Matchakohi field note',
  facts: [
    { value: '1 plant', label: 'Camellia sinensis gives us matcha, sencha, and more' },
    { value: '2–4 weeks', label: 'of shading is common before harvest' },
    { value: 'Whole leaf', label: 'suspended in water, not steeped and removed' },
  ],
};

export const matchaOrigins: OriginsContent = {
  eyebrow: 'Origins & history',
  title: 'From Tea Leaf to Matcha',
  intro:
    'The history of matcha is narrower than the history of tea, and more recent than many people expect. It begins with powdered tea in China, travels through Zen practice in Japan, and settles into the tea rooms and tea fields of Uji and beyond.',
  timelineLabel: 'A history in seven moments',
  timeline: [
    {
      id: 'china',
      period: 'Before the 9th century',
      location: 'South-west China',
      title: 'Tea, long before matcha',
      body: 'Tea cultivation and drinking are generally traced to south-western China. Early tea was prepared in many forms, including compressed cakes. During the Song dynasty (960–1279), whisked powdered tea — often called diancha — became an elaborate practice. The Japanese word matcha came later; the idea of powdered tea did not originate in Japan.',
      aside:
        'The story of Shen Nong discovering tea is a foundational legend, not a reliable historical record of a single moment.',
    },
    {
      id: 'japan',
      period: '9th century',
      location: 'Early Japan',
      title: 'Seeds, monks, and an imported practice',
      body: 'Buddhist monks returning from China brought tea seeds and knowledge of tea preparation to Japan in the early 9th century. Early Japanese tea was associated with monastic and aristocratic circles and was valued partly for its perceived medicinal properties. It was not yet the matcha practice we recognize today.',
      image: {
        slug: 'matcha-tea-plant',
        alt: 'Young tea leaves growing on a tea bush in Uji, Kyoto',
        position: 'center 50%',
      },
    },
    {
      id: 'zen',
      period: '12th–13th centuries',
      location: 'Japan',
      title: 'Zen, the whisk, and a growing tea culture',
      body: 'The monk Eisai returned from China in 1191 with tea seeds and promoted tea drinking; his Kissa Yōjōki (“Drink Tea and Prolong Life”) dates to 1211. Whisked powdered tea became intertwined with Zen monastic practice and later with samurai culture. Uji, near Kyoto, began to establish its reputation as a tea-growing area.',
      image: {
        slug: 'matcha-historic',
        alt: 'A historical image of a tea yard at Uji, Yamashiro',
        position: 'center 50%',
      },
    },
    {
      id: 'chanoyu',
      period: '15th–16th centuries',
      location: 'Kyoto and beyond',
      title: 'The way of tea takes shape',
      body: 'The Japanese tea ceremony, chanoyu, developed through figures such as Murata Jukō, Takeno Jōō, and Sen no Rikyū (1522–1591). Wabi aesthetics — simplicity, rusticity, and attentiveness — became central. Formal tea practice is only one context for matcha; everyday preparation has always existed alongside it.',
      image: {
        slug: 'matcha-ceremony',
        alt: 'A Japanese tea ceremony practitioner serving matcha in a traditional room',
        position: 'center 50%',
      },
    },
    {
      id: 'uji',
      period: '16th–19th centuries',
      location: 'Uji, Kyoto',
      title: 'Shading, tencha, and the Uji reputation',
      body: 'Tea growers around Uji developed techniques for shading selected plants before harvest, altering the leaves’ chemistry and character. Processing methods for tencha and stone-grinding refined the production of matcha. Gyokuro, a shaded loose-leaf tea, is traditionally credited to Yamamoto Kahei in 1835. Exact origins and dates for some techniques remain debated.',
      image: {
        slug: 'matcha-tea-field',
        alt: 'Terraced green tea fields climbing a hillside beneath the sky',
        position: 'center 50%',
      },
    },
    {
      id: 'modern',
      period: '19th–20th centuries',
      location: 'Japan',
      title: 'Industry, schools, and everyday matcha',
      body: 'Tea production was mechanized and standardized in steps through the modern period, while tea schools preserved and transmitted ceremonial practice. Matcha remained central to chanoyu and to Japanese confectionery, and regional producers continued to refine cultivation and processing. The 20th century also brought new packaging, distribution, and ways of drinking tea.',
      image: {
        slug: 'matcha-picking',
        alt: 'Workers picking tea leaves by hand in a green tea field',
        position: 'center 50%',
      },
    },
    {
      id: 'global',
      period: '21st century',
      location: 'Japan and around the world',
      title: 'A global ingredient with a local craft',
      body: 'Matcha has become a global café and kitchen ingredient: whisked into lattes, blended into desserts, and sold with a widening vocabulary of grades. Japan remains the best-known producer, but matcha-style powdered teas are also made elsewhere. Growing demand has raised questions about quality, supply, labelling, and the future of tea farming.',
      image: {
        slug: 'matcha-latte-art',
        alt: 'A matcha latte with delicate latte art in a pale ceramic cup',
        position: 'center 50%',
      },
    },
  ],
  feature: {
    eyebrow: 'What exactly is matcha?',
    title: 'Shade, steam, stone, powder',
    paragraphs: [
      'Matcha is made from tencha: tea leaves that have been shaded before harvest, steamed to stop oxidation, dried, and stripped of stems and veins. The remaining leaf is ground extremely finely, traditionally between stone wheels. The result is a powder that stays suspended in water rather than being strained out.',
      'Shading reduces photosynthesis and changes the leaf’s balance of compounds. It is associated with deeper green color and a more umami, less astringent character, though the outcome depends on the cultivar, timing, and conditions. Grinding is slow — traditional stone mills produce only tens of grams per hour — and heat, light, and air degrade matcha over time, which is why freshness matters.',
    ],
    image: {
      slug: 'matcha-stone-mill',
      alt: 'Tencha tea leaves on a traditional stone mill in Uji, Japan',
      position: 'center 50%',
    },
    caption:
      'Tencha on a stone mill. Matcha is not simply “ground green tea”: the leaf is cultivated and processed specifically for this purpose.',
  },
};

export const matchaProcess: ProcessContent = {
  eyebrow: 'Cultivation & production',
  title: 'From Tea Field to Bowl',
  intro:
    'Matcha begins in a tea field and passes through a series of precise steps before it reaches a whisk. Traditional methods vary by region and producer, but the outline is remarkably consistent.',
  stages: [
    {
      id: 'cultivating',
      title: 'Cultivating the tea plant',
      body: 'Camellia sinensis shrubs are grown for their young leaves. Cultivars such as Yabukita, Samidori, and Okumidori offer different characteristics.',
      detail:
        'Climate, soil, altitude, plant age, and field management all influence the leaf. Tea for matcha is often grown with careful attention to the timing and nutrition of new growth, because the youngest shoots will eventually become the powder.',
      image: {
        slug: 'matcha-tea-field',
        alt: 'Rows of green tea bushes on terraced hillsides',
        position: 'center 50%',
      },
    },
    {
      id: 'shading',
      title: 'Shading the plants',
      body: 'Before harvest, selected plants may be covered to reduce sunlight. Traditional straw screens and modern synthetic cloth are both used.',
      detail:
        'Shading typically lasts around two to four weeks, though the timing and degree vary. Reduced light changes the leaf’s metabolism: chlorophyll and theanine are associated with the deeper color and savory character of matcha, while astringent catechins may be reduced. Not every matcha is shaded in exactly the same way.',
      image: {
        slug: 'matcha-tea-plant',
        alt: 'Close view of fresh tea leaves in a shaded tea field',
        position: 'center 50%',
      },
    },
    {
      id: 'harvest',
      title: 'Harvesting the leaves',
      body: 'The youngest shoots are picked in the first flush. Hand-picking and machine harvesting are both used, depending on the farm and product.',
      detail:
        'Harvest timing strongly affects aroma, sweetness, and texture. Leaves picked later in the season tend to be larger, tougher, and more astringent — one reason the same cultivar can produce very different grades of tea.',
      image: {
        slug: 'matcha-picking',
        alt: 'Tea pickers working through a green tea field',
        position: 'center 50%',
      },
    },
    {
      id: 'steaming',
      title: 'Steaming',
      body: 'Leaves are steamed briefly to deactivate the enzymes responsible for oxidation. This preserves their green color and fresh character.',
      detail:
        'Steaming times are short — often measured in seconds to tens of seconds — and vary by producer and leaf. It is a critical control point: too little can leave unwanted oxidation, while too much can damage the leaf.',
      image: {
        slug: 'matcha-processing',
        alt: 'Freshly processed green tea leaves being handled in a shallow tray',
        position: 'center 50%',
      },
    },
    {
      id: 'drying',
      title: 'Drying & sorting',
      body: 'The steamed leaves are dried and sorted. At this stage the leaf is stable enough to be stored and processed further.',
      detail:
        'Drying removes moisture and helps preserve the leaf’s color and aroma. Sorting removes foreign material and separates leaf sizes. The exact equipment and sequence differ between workshops, and historical photographs show how much of this work was once done by hand.',
      image: {
        slug: 'matcha-historic',
        alt: 'A historical photograph of a tea yard at Uji, with leaves spread out for processing',
        position: 'center 50%',
      },
    },
    {
      id: 'tencha',
      title: 'Making tencha',
      body: 'Stems and veins are removed, leaving the fleshy leaf material. This de-veined tea is called tencha — the raw material for matcha.',
      detail:
        'Tencha is not usually drunk as a loose-leaf tea. Its purpose is to become a powder. Removing stems and veins improves texture and color, and the resulting flakes are sorted before grinding.',
      image: {
        slug: 'matcha-stone-mill',
        alt: 'Tencha tea leaf fragments resting on a traditional stone mill',
        position: 'center 40%',
      },
    },
    {
      id: 'grinding',
      title: 'Stone-grinding',
      body: 'Tencha is ground into an extremely fine powder. Traditional granite mills turn slowly to keep the tea from overheating.',
      detail:
        'The fineness of the powder affects how it suspends in water and how it feels on the tongue. Stone mills produce only a small quantity per hour, which is one reason high-quality matcha is expensive. Heat, light, and oxygen degrade the powder, so storage matters immediately after grinding.',
      image: {
        slug: 'matcha-hero',
        alt: 'Fine matcha powder in bowls beside bamboo whisks and scoops',
        position: 'center 50%',
      },
    },
    {
      id: 'preparation',
      title: 'Preparing the bowl',
      body: 'The powder is sifted, combined with hot water, and whisked. Preparation is the final production step and the first moment of tasting.',
      detail:
        'Usucha is whisked to a light foam; koicha is kneaded into a thick, smooth suspension. Water temperature, powder quantity, and technique change the bowl dramatically, even with the same matcha.',
      image: {
        slug: 'matcha-bowl',
        alt: 'A bowl of vivid green matcha during a Japanese tea ceremony',
        position: 'center 50%',
      },
    },
  ],
  note: {
    title: 'A craft, not a single formula',
    body: 'Shading duration, steaming, leaf selection, and grinding all vary. Some matcha is made for thick koicha; some is intended for everyday usucha or for cooking. Those differences are not failures of tradition — they are part of how a producer matches leaf and purpose.',
  },
};

const matchaGradeGroup: VarietiesContent['groups'][number] = {
  id: 'grades',
  eyebrow: 'Reading the label',
  title: 'Matcha grades & styles',
  intro:
    'Grade terms are not standardized worldwide. “Ceremonial” and “culinary” are useful shorthand, but they mean different things to different sellers. Use them as clues, not guarantees.',
  display: 'features',
  items: [
    {
      id: 'ceremonial',
      name: 'Ceremonial-style',
      meta: 'Often intended for whisking with water',
      summary:
        'A loosely defined category used for vibrant, sweet, umami-rich matcha intended to be drunk on its own, usually as usucha or koicha.',
      detail:
        'Ceremonial-style matcha is often made from carefully selected first-harvest leaves and ground very finely. The label is largely commercial rather than legally defined: quality depends on origin, cultivar, shading, harvest, processing, freshness, and storage. It is not a single official grade.',
      image: {
        slug: 'matcha-bowl',
        alt: 'A bowl of vivid green matcha prepared during a tea ceremony',
        position: 'center 50%',
      },
      icon: 'bowl',
    },
    {
      id: 'premium',
      name: 'Premium drinking matcha',
      meta: 'Everyday usucha and lattes',
      summary:
        'A practical middle ground: matcha with enough sweetness and body for daily drinking, while being more approachable in price than top-tier ceremonial tea.',
      detail:
        'This is a descriptive rather than standardized category. It may suit usucha, iced tea, or lattes, depending on the producer and your taste. A “premium” label without harvest, origin, or freshness information tells you relatively little on its own.',
      image: {
        slug: 'matcha-tea-plant',
        alt: 'Bright green tea leaves growing in a Japanese tea field',
        position: 'center 50%',
      },
      icon: 'leaf',
    },
    {
      id: 'culinary',
      name: 'Culinary matcha',
      meta: 'Baking, desserts, and blended drinks',
      summary:
        'A category generally made for cooking and flavored drinks, where a stronger, more astringent character and lower price can be useful.',
      detail:
        'Culinary matcha is often made from later harvests or larger leaves and may be less intensely sweet than ceremonial-style tea. It can still be excellent for its purpose. Some culinary grades are also pleasant to drink, while some ceremonial matcha is too delicate for a sweet latte — intended use matters.',
      image: {
        slug: 'matcha-iced',
        alt: 'A tall iced green drink with mint and lime',
        position: 'center 50%',
      },
      icon: 'cake',
    },
  ],
};

const matchaPreparationGroup: VarietiesContent['groups'][number] = {
  id: 'preparations',
  eyebrow: 'In the bowl',
  title: 'Ways to prepare matcha',
  intro:
    'Traditional tea practice and modern café culture use the same powder in different ways. Neither is the “correct” matcha — the style should suit the occasion and the tea.',
  display: 'methods',
  items: [
    {
      id: 'usucha',
      name: 'Usucha',
      meta: 'Thin tea · whisked to a light foam',
      summary:
        'The most common way to drink matcha: a small amount of powder whisked with hot water into a light, foamy bowl.',
      detail:
        'A typical starting point is 1.5–2 g of matcha with 60–75 ml of water below boiling point. Sift the powder to reduce clumps, then whisk briskly in a W or zigzag motion. Usucha is lighter and often more approachable than koicha.',
      icon: 'whisk',
    },
    {
      id: 'koicha',
      name: 'Koicha',
      meta: 'Thick tea · kneaded, not foamed',
      summary:
        'A concentrated, thick preparation made with more matcha and less water, traditionally using high-quality tea.',
      detail:
        'Koicha is often made with around 3–4 g of matcha and 30–40 ml of water, then kneaded slowly into a smooth paste rather than whisked into foam. Because it is intense, defects and sweetness are both more obvious. Not every matcha is intended for koicha.',
      icon: 'bowl',
    },
    {
      id: 'latte',
      name: 'Matcha latte',
      meta: 'Modern café style',
      summary:
        'A matcha concentrate combined with steamed or frothed milk. Sweetener is optional and highly personal.',
      detail:
        'This is a contemporary drink, not a traditional tea ceremony preparation. Use enough matcha to keep the flavor present — often 2 g or more — and whisk it with a small amount of water before adding milk. The milk softens astringency and highlights creaminess.',
      icon: 'milk',
    },
    {
      id: 'iced',
      name: 'Iced matcha',
      meta: 'Cold · refreshing',
      summary:
        'Matcha whisked with a little water, then poured over ice with cold water or milk.',
      detail:
        'Whisking the powder with a small amount of water first helps it disperse evenly before the cold liquid goes in. Iced matcha can seem less aromatic than a hot bowl; a slightly higher dose of powder helps compensate.',
      icon: 'snow',
    },
    {
      id: 'desserts',
      name: 'Matcha in desserts',
      meta: 'Culinary use',
      summary:
        'Matcha is used in wagashi, cakes, cookies, ice cream, and many other sweets, adding color and a vegetal, bittersweet note.',
      detail:
        'Culinary matcha is often chosen for baking because its stronger flavor survives sugar and fat. The green color fades with prolonged heat and light, so timing and storage matter. Matcha desserts are a modern extension of tea culture, not a substitute for it.',
      icon: 'cake',
    },
  ],
};

const matchaDistinctionGroup: VarietiesContent['groups'][number] = {
  id: 'green-tea',
  eyebrow: 'A useful distinction',
  title: 'Matcha is not every green tea',
  intro:
    '“Green tea” is a broad family. Matcha is one specific expression of it, defined by how the leaf is grown, processed, and consumed.',
  display: 'list',
  items: [
    {
      id: 'matcha-vs',
      name: 'Matcha',
      meta: 'Powdered tencha · whole leaf consumed',
      summary:
        'The leaf is shaded, steamed, dried, de-veined, and ground. The powder is whisked into water and drunk suspended — so you consume the entire leaf.',
      icon: 'leaf',
    },
    {
      id: 'sencha',
      name: 'Sencha',
      meta: 'Steeped loose leaf · leaves removed',
      summary:
        'A classic Japanese green tea made from steamed and rolled leaves. It is brewed in hot water and then strained; the leaves themselves are not normally consumed.',
      icon: 'leaf',
    },
    {
      id: 'tencha',
      name: 'Tencha',
      meta: 'The raw material for matcha',
      summary:
        'De-veined tea leaves before grinding. Tencha is not usually sold or drunk as a loose-leaf tea; its purpose is to become matcha.',
      icon: 'mill',
    },
  ],
};

export const matchaVarieties: VarietiesContent = {
  eyebrow: 'Types & varieties',
  title: 'Discover Matcha Grades & Styles',
  intro:
    'Matcha labels can be confusing because they mix harvest terms, intended uses, and marketing language. This guide separates what is defined from what is simply useful shorthand.',
  groups: [matchaGradeGroup, matchaPreparationGroup, matchaDistinctionGroup],
  note: {
    title: 'What the label cannot tell you',
    body: 'Grades are not governed by a single international standard. Origin, cultivar, shading, harvest date, processing, grinding, and freshness matter more than a word on the tin. The best matcha is the one that suits how you intend to drink it — and that you enjoy.',
  },
};

export const matchaFlavor: FlavorContent = {
  eyebrow: 'Flavor explorer',
  title: 'Discover Your Matcha Profile',
  intro:
    'Matcha’s flavor is a balance of sweetness, savoriness, and freshness. Choose a few directions to see how they might shape the tea you look for and the way you prepare it. These are tendencies, not guarantees.',
  dimensions: [
    {
      id: 'grassy',
      label: 'Grassy',
      description:
        'A fresh, green, almost spring-like impression. Often pronounced in young, shaded leaves and in usucha.',
      guidance:
        'Look for first-harvest, shaded matcha and prepare it as usucha with water below boiling. A lighter dose and gentle whisking keep the green notes lifted rather than heavy.',
    },
    {
      id: 'vegetal',
      label: 'Vegetal',
      description:
        'A broader cooked-green or leafy character, sometimes closer to spinach or steamed greens than to fresh grass.',
      guidance:
        'Vegetal notes are common in everyday and culinary matcha. Try it in a latte or with a little sweetness, or explore a higher grade if you want a more delicate, sweeter expression.',
    },
    {
      id: 'sweet',
      label: 'Sweet',
      description:
        'A soft, rounded sweetness that appears without added sugar. Shading and early harvest are often associated with it.',
      guidance:
        'Start with a first-harvest matcha intended for drinking, use water around 70–80°C, and avoid over-whisking. Taste before adding any sweetener; the sweetness is often subtle.',
    },
    {
      id: 'umami',
      label: 'Umami',
      description:
        'A savory, brothy depth sometimes described as seaweed-like or rich. It is one of matcha’s most distinctive qualities.',
      guidance:
        'Umami is often associated with shaded, high-grade tea. Try usucha first, then koicha if you want it concentrated. A lower water temperature can keep the savory character at the front.',
    },
    {
      id: 'creamy',
      label: 'Creamy',
      description:
        'A rounded, mouth-filling texture — sometimes from the tea itself, often enhanced by milk or a thicker preparation.',
      guidance:
        'Koicha offers the most concentrated texture. For a softer version, make a matcha latte with whole milk or a barista-style plant milk, and use enough matcha to keep the green flavor present.',
    },
    {
      id: 'nutty',
      label: 'Nutty',
      description:
        'A toasted or nut-like impression that can appear in some teas, particularly depending on cultivar, processing, and age.',
      guidance:
        'Nutty notes are less universal than grassy or umami flavors. Explore different cultivars and producers, and taste the same matcha both plain and with milk to see how the impression changes.',
    },
    {
      id: 'astringent',
      label: 'Astringent',
      description:
        'A drying, grippy sensation, often from higher catechin levels, hotter water, or a larger dose of powder.',
      guidance:
        'If you want less astringency, lower the water temperature, use a little less matcha, and whisk gently. Milk and a touch of sweetness can soften it. Astringency is not automatically a defect — it can give a bowl structure.',
    },
    {
      id: 'body',
      label: 'Smooth or robust',
      description:
        'The overall weight and intensity of the bowl, from light and airy usucha to thick, concentrated koicha.',
      guidance:
        'Try usucha for a lighter, foamy bowl; use more powder and less water, and knead rather than whisk, for a robust koicha. Different grades and cultivars respond differently, so adjust gradually.',
    },
  ],
  quickPicks: [
    { label: 'Calm & savoury', ids: ['umami', 'grassy'] },
    { label: 'Soft & milky', ids: ['creamy', 'sweet'] },
    { label: 'Bright & brisk', ids: ['astringent', 'vegetal'] },
  ],
  emptyTitle: 'Begin with a feeling',
  emptyBody:
    'Choose up to three qualities — or try a quick combination above. We’ll suggest ways to explore them through preparation, grades, and the tea you choose.',
  note: {
    title: 'The bowl is not the whole story',
    body: 'Matcha flavor varies with producer, cultivar, shading, harvest, processing, storage, and preparation. Water temperature and the amount of powder can shift the balance dramatically. Use these suggestions to guide experiments, not to predict a single definitive taste.',
  },
};

export const matchaPrepare: PrepareContent = {
  eyebrow: 'Preparation guide',
  title: 'The Art of Preparing Matcha',
  intro:
    'There is no single correct bowl. The quantities below are practical starting points for everyday matcha, not a universal standard. Adjust the powder, water, and temperature to the tea and to your taste.',
  recipes: [
    {
      id: 'usucha',
      name: 'Usucha',
      kicker: 'Thin tea · light foam',
      summary:
        'The everyday whisked bowl: enough matcha for a vivid, aromatic drink, with a fine foam and a relatively light body.',
      image: {
        slug: 'matcha-bowl',
        alt: 'A bowl of bright green usucha with a fine layer of foam',
        position: 'center 50%',
      },
      ingredients: ['1.5–2 g matcha', '60–75 ml filtered water'],
      equipment: [
        'Chawan (tea bowl)',
        'Chasen (bamboo whisk)',
        'Chashaku (bamboo scoop)',
        'Fine sieve',
        'Scale',
        'Kettle',
      ],
      specs: [
        { label: 'Matcha', value: '1.5–2 g' },
        { label: 'Water', value: '60–75 ml' },
        { label: 'Temperature', value: '70–80°C' },
        { label: 'Ratio', value: 'Roughly 1:35' },
        { label: 'Whisking', value: '15–30 seconds' },
        { label: 'Style', value: 'Light foam' },
      ],
      steps: [
        'Warm the bowl with hot water, then empty and dry it. This helps the matcha stay warm and reduces clumps.',
        'Sift 1.5–2 g of matcha into the bowl to break up lumps. A small fine-mesh sieve makes a noticeable difference.',
        'Add 60–75 ml of water at about 70–80°C. Start with less water; you can always adjust the strength.',
        'Whisk briskly in a W or zigzag motion, keeping the chasen close to the bottom, until a fine foam forms and no dry powder remains.',
        'Let the bowl settle for a moment, then drink while it is still warm. Swirl gently before the last sip.',
      ],
      mistakes: [
        'Using water straight off the boil, which can make the bowl harsh and more astringent.',
        'Skipping the sieve and ending up with dry clumps at the bottom.',
        'Whisking in wide circles that create large bubbles rather than a fine, even foam.',
      ],
      adjust: [
        'Too strong? Add a little warm water and stir gently.',
        'Too thin? Use slightly more matcha or less water next time.',
        'Too astringent? Lower the water temperature and try a slightly smaller dose.',
      ],
    },
    {
      id: 'koicha',
      name: 'Koicha',
      kicker: 'Thick tea · kneaded',
      summary:
        'A concentrated bowl made with more matcha and less water. It is traditionally prepared with tea intended for koicha and served without a foam.',
      image: {
        slug: 'matcha-hero',
        alt: 'Fine green matcha powder and bamboo utensils arranged on a wooden table',
        position: 'center 50%',
      },
      ingredients: ['3–4 g matcha', '30–40 ml filtered water'],
      equipment: [
        'Chawan (tea bowl)',
        'Chasen (bamboo whisk)',
        'Chashaku (bamboo scoop)',
        'Fine sieve',
        'Scale',
        'Kettle',
      ],
      specs: [
        { label: 'Matcha', value: '3–4 g' },
        { label: 'Water', value: '30–40 ml' },
        { label: 'Temperature', value: '70–75°C' },
        { label: 'Ratio', value: 'Roughly 1:10' },
        { label: 'Technique', value: 'Knead slowly' },
        { label: 'Style', value: 'Thick, no foam' },
      ],
      steps: [
        'Warm and dry the bowl. Sift the matcha to remove lumps — especially important when using so little water.',
        'Add 30–40 ml of water at around 70–75°C.',
        'Press and knead the matcha slowly against the side of the bowl with the chasen, turning the bowl as you go.',
        'Continue until the mixture is smooth, glossy, and thick, with no dry powder. Do not aim for foam.',
        'Serve immediately. Koicha is intense; small sips and a sweet accompaniment are traditional.',
      ],
      mistakes: [
        'Using a matcha that is not intended for koicha, which can make the bowl unpleasantly bitter or chalky.',
        'Adding too much water and ending up with a thin, lumpy usucha-style bowl.',
        'Whisking vigorously when the aim is a smooth, dense paste.',
      ],
      adjust: [
        'Too thick? Add a few drops of warm water and knead again.',
        'Too bitter? Try a different, higher-grade matcha rather than adding sugar.',
        'Not smooth? Sift more carefully and knead longer with the chasen.',
      ],
    },
    {
      id: 'latte',
      name: 'Matcha latte',
      kicker: 'Modern · creamy · adaptable',
      summary:
        'A matcha concentrate combined with milk. It is a contemporary café drink rather than a traditional preparation, and it is endlessly adjustable.',
      image: {
        slug: 'matcha-latte-art',
        alt: 'A matcha latte with heart-shaped latte art in a ceramic cup',
        position: 'center 50%',
      },
      ingredients: [
        '2–3 g matcha',
        '30–50 ml hot water',
        '150–200 ml milk or barista-style plant milk',
        'Sweetener, optional',
      ],
      equipment: ['Bowl or jug', 'Chasen or small whisk', 'Sieve', 'Milk frother or saucepan', 'Cup'],
      specs: [
        { label: 'Matcha', value: '2–3 g' },
        { label: 'Water', value: '30–50 ml' },
        { label: 'Milk', value: '150–200 ml' },
        { label: 'Water temp.', value: '70–80°C' },
        { label: 'Style', value: 'Hot or iced' },
        { label: 'Sweetener', value: 'To taste' },
      ],
      steps: [
        'Sift the matcha into a bowl or jug and add the hot water.',
        'Whisk briskly until smooth and slightly foamy, with no dry clumps. This is your concentrate.',
        'Heat and froth the milk, or use a barista-style plant milk for a stable texture. Keep it below a rolling boil.',
        'Pour the matcha concentrate into a cup, then add the milk slowly. Stir gently or finish with a little foam.',
        'Taste before sweetening. Add sugar or syrup sparingly if you like, then adjust the matcha-to-milk balance.',
      ],
      mistakes: [
        'Using too little matcha, so the drink tastes only of milk and sugar.',
        'Adding powder directly to cold milk, where it clumps and refuses to disperse.',
        'Overheating the milk, which can make it taste cooked and lose its sweetness.',
      ],
      adjust: [
        'Too milky? Make a stronger concentrate with more matcha or less milk.',
        'Too bitter? Lower the water temperature or add a little more milk.',
        'Too sweet? Reduce the sweetener and let the tea’s umami come forward.',
      ],
    },
    {
      id: 'iced',
      name: 'Iced matcha',
      kicker: 'Cold · clean · refreshing',
      summary:
        'A bright, cold drink built from a matcha concentrate, ice, and cold water or milk. Whisking the powder first keeps the texture even.',
      image: {
        slug: 'matcha-iced',
        alt: 'A tall iced green drink garnished with mint and lime',
        position: 'center 50%',
      },
      ingredients: [
        '2 g matcha',
        '50–60 ml hot water',
        'A glass of ice',
        '120–150 ml cold water or cold milk',
      ],
      equipment: ['Bowl', 'Chasen or small whisk', 'Sieve', 'Tall glass', 'Spoon'],
      specs: [
        { label: 'Matcha', value: '2 g' },
        { label: 'Hot water', value: '50–60 ml' },
        { label: 'Cold liquid', value: '120–150 ml' },
        { label: 'Ice', value: 'To fill' },
        { label: 'Water temp.', value: '70–80°C' },
        { label: 'Style', value: 'Iced' },
      ],
      steps: [
        'Sift the matcha into a bowl and whisk with the hot water until smooth.',
        'Fill a tall glass with ice.',
        'Pour the matcha concentrate over the ice, then add cold water or milk.',
        'Stir gently and taste. Add more water or milk if the drink is too intense, or a little sweetener if you prefer.',
        'Serve immediately; the ice will continue to dilute the drink as it melts.',
      ],
      mistakes: [
        'Using hot water for the whole drink, which melts the ice too quickly and dilutes the matcha.',
        'Not stirring before drinking, leaving the powder concentrated at the bottom.',
        'Making it hours ahead and expecting the color and aroma to stay at their best.',
      ],
      adjust: [
        'Too watery? Use a stronger concentrate or less ice.',
        'Too intense? Add more cold water or milk.',
        'Want it sweeter? Add a small amount of syrup or honey while the concentrate is warm.',
      ],
    },
  ],
  note: {
    title: 'A starting point, not a rule',
    body: 'Traditional tea schools and individual practitioners may use different quantities, temperatures, and movements. Freshness matters as much as technique: matcha is best used relatively soon after opening, stored away from heat, light, and air. Taste, adjust, and repeat.',
  },
};

export const matchaCulture: CultureContent = {
  eyebrow: 'Culture & traditions',
  title: 'The Bowl and the World Around It',
  intro:
    'Matcha carries centuries of practice, but it is not a single tradition. Formal tea ceremony, regional tea culture, and modern café drinks each have their own context and meaning.',
  entries: [
    {
      id: 'chanoyu',
      location: 'Japan',
      title: 'Chanoyu: the way of tea',
      body: 'Chanoyu is a formal practice of preparing and serving matcha, shaped by Zen Buddhism and by aesthetics of simplicity and attentiveness. The host attends to the room, the utensils, the seasonal arrangement, and the sequence of movements; the guest receives with attention. The phrase ichigo ichie — “one time, one meeting” — expresses the idea that each gathering is unique. Several schools, including Urasenke, Omotesenke, and Mushanokōji Senke, maintain distinct traditions.',
      footnote:
        'A formal tea gathering is not the same as everyday matcha preparation. Both are part of Japanese tea culture, and neither is a caricature of the other.',
      image: {
        slug: 'matcha-ceremony',
        alt: 'A practitioner serving matcha in a traditional Japanese tea room',
        position: 'center 50%',
      },
      size: 'feature',
    },
    {
      id: 'utensils',
      location: 'Japan',
      title: 'The objects of attention',
      body: 'A tea bowl (chawan), bamboo whisk (chasen), bamboo scoop (chashaku), linen cloth (chakin), and waste-water bowl (kensui) are part of a larger practice. Utensils are chosen for the season and the occasion, and caring for them is part of the craft. A good bowl is not merely decorative: its shape affects how matcha is whisked and how the tea is drunk.',
      image: {
        slug: 'matcha-whisk',
        alt: 'A traditional bamboo chasen whisk against a plain background',
        position: 'center 50%',
      },
    },
    {
      id: 'regions',
      location: 'Uji, Nishio, Shizuoka, Yame, Kagoshima',
      title: 'Regions behind the leaf',
      body: 'Uji in Kyoto is historically associated with refined tea production and remains a well-known matcha source. Other Japanese regions — including Nishio in Aichi, Shizuoka, Yame in Fukuoka, and Kagoshima — produce tea with their own cultivars, climates, and methods. Not all matcha comes from Uji, and not all tea from a famous region is necessarily the same quality.',
      footnote: 'Regional reputation is a starting point for exploration, not a guarantee of quality.',
      image: {
        slug: 'matcha-tea-field',
        alt: 'Terraced tea fields in Japan, with rows of green bushes',
        position: 'center 50%',
      },
    },
    {
      id: 'modern-japan',
      location: 'Japan today',
      title: 'Old tea, new cafés',
      body: 'Matcha is part of everyday Japanese food culture as well as formal tea practice. It appears in wagashi, ice cream, cakes, and café drinks, including the now-familiar matcha latte. These modern forms are not fake versions of tradition; they are a living extension of it. At the same time, tea farmers face questions about succession, climate, and the economics of producing high-quality leaf.',
      image: {
        slug: 'matcha-latte',
        alt: 'A warm cup of matcha latte beside a saucer',
        position: 'center 50%',
      },
    },
    {
      id: 'global',
      location: 'Around the world',
      title: 'Matcha beyond Japan',
      body: 'Matcha’s global popularity has created new cafes, desserts, and drinks, and a corresponding confusion around grades and quality. A vivid green color is not proof of quality, and “ceremonial” is not a universal standard. A respectful way to explore is to learn where the tea comes from, how it was grown and processed, and how the people who make it describe their work.',
      footnote:
        'Appreciating a tradition is not the same as flattening it into an aesthetic. Context, credit, and curiosity matter.',
      image: {
        slug: 'matcha-latte-art',
        alt: 'A matcha latte with delicate latte art served in a pale cup',
        position: 'center 50%',
      },
    },
  ],
  note: {
    title: 'Tradition is not a costume',
    body: 'Matcha is often presented as a wellness ingredient or a visual trend. Those framings are not the whole story. Behind the powder is a craft, a seasonal agricultural system, and a set of living cultural practices. Approaching them with curiosity — rather than certainty — is the beginning of a better cup.',
  },
};

export const matchaDiscover: DiscoverContent = {
  eyebrow: 'Interactive discovery',
  title: 'Which Bowl Speaks to You?',
  intro:
    'Three small choices, one suggestion for where to go next. There are no wrong answers — and nothing is stored or sent anywhere.',
  questions: [
    {
      id: 'flavor',
      prompt: 'What are you hoping to taste?',
      options: [
        { id: 'grassy', label: 'Fresh & grassy', note: 'Green, lifted, spring-like' },
        { id: 'creamy', label: 'Soft & creamy', note: 'Rounded and comforting' },
        { id: 'umami', label: 'Deep umami', note: 'Savoury and intense' },
      ],
    },
    {
      id: 'style',
      prompt: 'How would you like to drink it?',
      options: [
        { id: 'traditional', label: 'A traditional bowl', note: 'Water, chasen, nothing else' },
        { id: 'latte', label: 'A matcha latte', note: 'Milk and a slow morning' },
        { id: 'iced', label: 'Iced and refreshing', note: 'Cold, bright, quick' },
      ],
    },
    {
      id: 'interest',
      prompt: 'What pulls you in most?',
      options: [
        { id: 'ritual', label: 'Ritual & utensils', note: 'The practice of the bowl' },
        { id: 'origins', label: 'Grades & origins', note: 'Where the leaf comes from' },
        { id: 'recipes', label: 'Recipes & pairings', note: 'Making it part of the day' },
      ],
    },
  ],
  results: [
    {
      id: 'traditionalist',
      title: 'The quiet traditionalist',
      description:
        'Begin with usucha and let the bowl be simple: matcha, warm water, a chasen. Pay attention to the aroma as you whisk. The preparation guide offers a clear starting point without turning the practice into a performance.',
      matches: ['grassy', 'traditional', 'ritual'],
      link: { label: 'Learn the usucha method', section: 'prepare' },
    },
    {
      id: 'umami-seeker',
      title: 'The umami seeker',
      description:
        'You are drawn to the savory depth of matcha. Explore first-harvest, shaded grades and the difference between usucha and koicha. The grades section explains what labels can and cannot tell you.',
      matches: ['umami', 'traditional', 'origins'],
      link: { label: 'Explore matcha grades', section: 'varieties' },
    },
    {
      id: 'modern-maker',
      title: 'The modern matcha maker',
      description:
        'A latte is your entry point, and there is nothing wrong with that. Use enough matcha to keep the green flavor present, whisk a concentrate first, and then adjust the milk and sweetness to your taste.',
      matches: ['creamy', 'latte', 'recipes'],
      link: { label: 'Make a matcha latte', section: 'prepare' },
    },
    {
      id: 'cafe-explorer',
      title: 'The café explorer',
      description:
        'You are curious about how matcha moves between tradition and contemporary café culture. Read about its history and the living practice behind the bowl, then compare a latte with a simple usucha.',
      matches: ['creamy', 'latte', 'origins'],
      link: { label: 'Explore matcha culture', section: 'culture' },
    },
    {
      id: 'iced-innovator',
      title: 'The iced-bowl experimentalist',
      description:
        'You want freshness and clarity. Whisk a strong concentrate, pour it over ice, and compare it with a hot usucha made from the same powder. The difference in aroma may surprise you.',
      matches: ['grassy', 'iced', 'recipes'],
      link: { label: 'Try iced matcha', section: 'prepare' },
    },
  ],
  defaultResult: 'traditionalist',
  note: 'This is an educational starting point, not a personalized recommendation based on data about you.',
};

export const matchaFinalCta: FinalCtaContent = {
  eyebrow: 'The bowl is waiting',
  title: 'There’s always more to discover.',
  body: 'From the tea field to the bowl, explore the traditions and craft behind every shade of matcha.',
  primary: { label: 'Explore Matcha Again', section: 'top' },
  secondaryLabel: 'Discover Coffee',
  image: {
    slug: 'matcha-tea-field',
    alt: 'Terraced green tea fields stretching into the distance beneath a pale sky',
    position: 'center 55%',
  },
};

export const matchaContent: BeverageContent = {
  theme: 'matcha',
  label: 'Matcha',
  hero: matchaHero,
  intro: matchaIntro,
  origins: matchaOrigins,
  process: matchaProcess,
  varieties: matchaVarieties,
  flavor: matchaFlavor,
  prepare: matchaPrepare,
  culture: matchaCulture,
  discover: matchaDiscover,
  finalCta: matchaFinalCta,
  seoTitle: 'Matcha — Origins, Grades & Preparation | Matchakohi',
  seoDescription:
    'Explore matcha’s journey from Chinese powdered tea to Japanese tea practice, its grades and preparations, and thoughtful guidance for whisking a better bowl.',
};
