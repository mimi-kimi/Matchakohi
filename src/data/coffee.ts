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

export const coffeeHero: HeroContent = {
  eyebrow: 'The world of coffee',
  headlineLead: 'Every cup has a',
  headlineAccent: 'story.',
  supporting:
    'Travel from the birthplace of coffee to the farms, roasteries, and brewing rituals that shape the way the world drinks it today.',
  primary: { label: 'Explore Coffee Origins', section: 'origins' },
  secondary: { label: 'Discover Coffee Types', section: 'varieties' },
  image: {
    slug: 'coffee-hero',
    alt: 'Friends holding cups of freshly poured coffee, photographed from above',
    position: 'center 45%',
  },
  imageKicker: 'Field notes · No. 01',
  imageCaption: 'Coffee is a fruit long before it becomes a drink.',
  facts: [
    { label: 'Native home', value: 'Ethiopian highlands' },
    { label: 'Key species', value: 'Arabica & robusta' },
    { label: 'The journey', value: 'Farm to roastery' },
  ],
  scrollLabel: 'Scroll to begin',
};

export const coffeeIntro: IntroContent = {
  eyebrow: 'A fruit, a seed, a ritual',
  title: 'More than a morning habit.',
  lede:
    'Coffee begins as a fruit on a shrub in the tropics. Everything between that fruit and your cup — cultivar, altitude, harvest, processing, roast, and brew — shapes what you taste.',
  paragraphs: [
    'Coffee is not a single flavor, a single country, or a single way of drinking. It is a family of plants, a set of agricultural decisions, and a chain of crafts that stretches across continents.',
    'The English word “coffee” is generally traced through Turkish kahve to Arabic qahwa, though the deeper origin of the word is debated. The drink’s journey is equally layered: from Ethiopian forests and Yemeni ports to Ottoman coffeehouses, European cafés, and the specialty bars of today.',
    'Specialty coffee is less a fixed style than a way of paying attention: to variety, place, processing, freshness, and the people who make each step possible.',
  ],
  image: {
    slug: 'coffee-cup-beans',
    alt: 'A cup of coffee beside a small pile of roasted beans on a wooden table',
    position: 'center 55%',
  },
  insetImage: {
    slug: 'coffee-beans-sack',
    alt: 'Roasted coffee beans spilling from a burlap sack',
    position: 'center 55%',
  },
  quote:
    'A cup of coffee is the last step in a long collaboration between soil, climate, farmer, roaster, and brewer.',
  quoteAttribution: 'The Matchakohi field note',
  facts: [
    { value: 'Over half', label: 'of the world’s coffee is arabica' },
    { value: '6–9 months', label: 'from flower to ripe cherry, depending on climate' },
    { value: '2 seeds', label: 'usually grow inside each coffee cherry' },
  ],
};

export const coffeeOrigins: OriginsContent = {
  eyebrow: 'Origins & history',
  title: 'Where Coffee Began',
  intro:
    'The full history of coffee is still being written. What follows separates the well-documented from the legendary, and follows the plant from African forest understory to the global cup.',
  timelineLabel: 'A history in seven moments',
  timeline: [
    {
      id: 'ethiopia',
      period: 'Before the 15th century',
      location: 'South-western Ethiopia',
      title: 'A forest plant, not yet a global drink',
      body: 'Coffea arabica is native to the understory forests of south-western Ethiopia and the Boma Plateau region. Local communities used the plant long before it became an international commodity, although the details of those earliest uses are not fully known. The popular story of Kaldi, a goatherd who noticed his goats becoming energetic after eating coffee cherries, is a later folktale — not a contemporary historical account.',
      image: {
        slug: 'coffee-cherries',
        alt: 'Coffee cherries in shades of green, yellow, orange, and red growing on a branch',
        position: 'center 50%',
      },
      aside:
        'The wild relatives of arabica still grow in Ethiopian forests — a genetic resource for the crop’s future.',
    },
    {
      id: 'yemen',
      period: '15th century',
      location: 'Yemen',
      title: 'From devotion to a traded drink',
      body: 'Yemen is the earliest well-documented centre of coffee cultivation and coffee drinking. Sufi communities are often associated with early use of coffee to stay awake during night devotions, and the port of Mocha became synonymous with the trade. The exact date and route of coffee’s move from Ethiopia to Yemen remain debated.',
      image: {
        slug: 'coffee-farm',
        alt: 'A green coffee farm stretching across a hillside',
        position: 'center 55%',
      },
    },
    {
      id: 'ottoman',
      period: '16th century',
      location: 'Mecca, Cairo, Istanbul',
      title: 'The coffeehouse as a public room',
      body: 'Coffee spread through the Ottoman world, where coffeehouses — qahveh khaneh — became places for conversation, music, chess, poetry, and politics. They were popular enough to attract occasional official concern. Turkish coffee, simmered in a small cezve and served unfiltered, became a distinctive expression of hospitality.',
      image: {
        slug: 'coffee-turkish',
        alt: 'Turkish coffee being poured from a copper cezve into a small cup',
        position: 'center 50%',
      },
    },
    {
      id: 'europe',
      period: '17th century',
      location: 'Venice, Oxford, London, Paris',
      title: 'A new social ritual reaches Europe',
      body: 'Coffee arrived in Europe through Mediterranean trade and gradually moved north. Coffeehouses opened in Oxford by the 1650s and in London in 1652; Paris followed later in the century. These rooms became known as “penny universities” for the cost of a cup and the conversations it bought. Lloyd’s of London, the insurance market, traces its origins to Edward Lloyd’s coffeehouse.',
      image: {
        slug: 'coffee-cafe',
        alt: 'A warmly lit café interior with a large CAFE sign and wooden tables',
        position: 'center 55%',
      },
    },
    {
      id: 'tropics',
      period: '17th–18th centuries',
      location: 'Java, the Caribbean, Brazil',
      title: 'A crop on the move',
      body: 'European powers carried coffee cultivation into their tropical colonies — the Dutch to Java, the French to the Caribbean, the Portuguese to Brazil. This expansion made coffee a global commodity, but it was bound up with colonial extraction and enslaved labour. Coffee’s map cannot be told without that difficult history.',
      image: {
        slug: 'coffee-harvest',
        alt: 'A basket filled with freshly harvested ripe red coffee cherries',
        position: 'center 50%',
      },
    },
    {
      id: 'industry',
      period: '19th–20th centuries',
      location: 'Industrial cities and growing cafés',
      title: 'Roasting, packaging, and the espresso bar',
      body: 'Industrial roasting, vacuum packaging, and instant coffee turned coffee into an everyday product. Espresso machine designs were patented in the late 19th and early 20th centuries, and Italian bar culture gave espresso a social stage. The term “specialty coffee” was coined by Erna Knutsen in 1974, as attention shifted toward distinctive beans and origins.',
      image: {
        slug: 'coffee-roasting',
        alt: 'A drum coffee roaster inside a small roastery',
        position: 'center 40%',
      },
    },
    {
      id: 'specialty',
      period: '21st century',
      location: 'Everywhere coffee is grown and served',
      title: 'Back to the origin',
      body: 'The so-called “third wave” focuses on traceability, producer relationships, experimental processing, lighter roasts, and hands-on brewing. It is a loose and contested label, not a single movement. At the same time, coffee farming faces serious pressures from climate change, disease, price volatility, and labour challenges — questions as important as any flavor note.',
      image: {
        slug: 'coffee-cupping',
        alt: 'A coffee cupping table with bowls, spoons, and small piles of ground coffee',
        position: 'center 50%',
      },
    },
  ],
  feature: {
    eyebrow: 'What is in the cup?',
    title: 'A seed, shaped by many hands',
    paragraphs: [
      'Coffee is made from the seeds of the fruits commonly called coffee cherries. Most cherries contain two seeds, which we call beans; a single round seed is known as a peaberry. The fruit is removed, the seeds are dried and milled into green coffee, and roasting transforms them into the aromatic beans we grind.',
      'Geography matters, but it is not destiny. Altitude, temperature, rainfall, shade, and soil influence how a plant grows. Variety sets a genetic baseline. Processing — washed, natural, honey, or experimental methods — changes which compounds remain in the seed. Roasting builds aroma through heat-driven reactions, and brewing decides which of those compounds reach your cup. No single factor explains a flavor on its own.',
    ],
    image: {
      slug: 'coffee-flower',
      alt: 'A white coffee flower opening among green coffee leaves',
      position: 'center 45%',
    },
    caption:
      'Coffee flowers are fragrant and short-lived. The cherries that follow take months to ripen — a reminder that good coffee is an agricultural season, not a factory setting.',
  },
};

export const coffeeProcess: ProcessContent = {
  eyebrow: 'Cultivation & production',
  title: 'From Cherry to Cup',
  intro:
    'Seven stages stand between a coffee shrub and your brewer. Each one involves choices; together they explain why two coffees from the same country can taste entirely different.',
  stages: [
    {
      id: 'growing',
      title: 'Growing the plant',
      body: 'Coffee begins in nurseries and is transplanted into farms, often under shade. Arabica generally prefers cooler, higher ground; robusta tolerates warmer, lower conditions.',
      detail:
        'A young coffee plant usually takes three to four years to produce its first meaningful harvest. Farmers choose cultivars for flavor potential, disease resistance, yield, and how well they suit the local climate.',
      image: {
        slug: 'coffee-farm',
        alt: 'Terraced coffee plants covering a green hillside',
        position: 'center 55%',
      },
    },
    {
      id: 'flowering',
      title: 'Flowering & fruit',
      body: 'After rain, coffee plants produce small white flowers. Cherries then develop over several months, turning from green to yellow, orange, and deep red.',
      detail:
        'Ripening is uneven, even on a single branch. That unevenness is one reason selective hand-picking remains important for quality-focused farms, while larger operations may strip-pick and sort afterwards.',
      image: {
        slug: 'coffee-flower',
        alt: 'A white coffee blossom among glossy green leaves',
        position: 'center 45%',
      },
    },
    {
      id: 'harvest',
      title: 'Harvesting',
      body: 'Ripe cherries are picked by hand or machine. The aim is to collect fruit at its best while limiting unripe or overripe cherries in the batch.',
      detail:
        'Harvest timing and selectivity affect sweetness and consistency. In many producing regions, pickers return to the same trees several times during a season as cherries ripen at different rates.',
      image: {
        slug: 'coffee-harvest',
        alt: 'A woven basket overflowing with ripe red coffee cherries',
        position: 'center 50%',
      },
    },
    {
      id: 'processing',
      title: 'Processing the cherries',
      body: 'The fruit is removed and the seeds are fermented or dried. Washed, natural, and honey methods are common, and each producer adapts the process to climate, water, and market.',
      detail:
        'Washed coffee removes the fruit before drying, producing a cleaner profile; natural coffee dries with the fruit still on the seed, often adding fruity depth; honey processing leaves some mucilage. Experimental methods — including anaerobic fermentation — are increasingly used, but they are not automatically better.',
      image: {
        slug: 'coffee-processing',
        alt: 'Workers sorting coffee at a processing station in El Salvador',
        position: 'center 50%',
      },
    },
    {
      id: 'drying',
      title: 'Drying & milling',
      body: 'Seeds are dried to a stable moisture level, then hulled, sorted, graded, and bagged as green coffee.',
      detail:
        'Drying can happen on raised beds, patios, or in mechanical dryers. Consistency matters: too much moisture risks spoilage, while overly fast drying can damage the seed. Green coffee is then rested, transported, and stored before roasting.',
      image: {
        slug: 'coffee-drying',
        alt: 'Workers spreading coffee cherries on drying beds',
        position: 'center 50%',
      },
    },
    {
      id: 'roasting',
      title: 'Roasting',
      body: 'Heat transforms green coffee: aromas form, sugars caramelize, and the bean expands. Roast level shapes acidity, sweetness, bitterness, and body.',
      detail:
        'Roasters steer a curve of temperature and airflow through stages such as drying, browning, and development. “First crack” is the audible point when built-up steam and gases escape. Lighter roasts tend to preserve origin character and acidity; darker roasts build bittersweet, roasty notes and reduce perceived acidity.',
      image: {
        slug: 'coffee-roasting',
        alt: 'A coffee roaster at work in a small roasting room',
        position: 'center 40%',
      },
    },
    {
      id: 'brewing',
      title: 'Grinding & brewing',
      body: 'Ground coffee meets water. Grind size, water temperature, ratio, agitation, and contact time determine which compounds are extracted.',
      detail:
        'Grind just before brewing when possible: aroma and carbon dioxide are lost quickly after grinding. Finer grinds extract faster but can become bitter or clog filters; coarser grinds need more time. Taste is the final guide.',
      image: {
        slug: 'coffee-pour',
        alt: 'A pour-over coffee setup with a gooseneck kettle and glass carafe',
        position: 'center 50%',
      },
    },
  ],
  note: {
    title: 'There is no single “best” process',
    body: 'Washed, natural, and honey coffees are not quality grades. They are different routes to different cups. The right choice depends on the harvest, the climate, the producer’s resources, and the flavor they want to present. Roasting is similarly interpretive: a light roast highlights acidity and origin; a darker roast can emphasize body and bittersweet notes. Neither is inherently superior.',
  },
};

const coffeePlantGroup: VarietiesContent['groups'][number] = {
  id: 'species',
  eyebrow: 'From the plant',
  title: 'Species & cultivars',
  intro:
    'Species are broad botanical groups. Cultivars are selected varieties within a species, often chosen for flavor, yield, or resilience.',
  display: 'features',
  items: [
    {
      id: 'arabica',
      name: 'Arabica',
      meta: 'Coffea arabica · the largest share of world production',
      summary:
        'The species most associated with specialty coffee. Native to the Ethiopian highlands and now grown throughout the tropics.',
      detail:
        'Arabica typically contains less caffeine than robusta and often shows more acidity and aromatic complexity. It generally prefers cooler, higher elevations, but it is also more vulnerable to leaf rust and other stresses. “100% arabica” is a species statement, not a quality guarantee.',
      image: {
        slug: 'coffee-cherries',
        alt: 'Ripening coffee cherries on an arabica coffee branch',
        position: 'center 50%',
      },
      icon: 'cherry',
    },
    {
      id: 'robusta',
      name: 'Robusta',
      meta: 'Coffea canephora · stronger, higher-caffeine beans',
      summary:
        'A hardy species with higher caffeine and a more robust, sometimes bitter profile. Common in espresso blends, instant coffee, and warmer growing regions.',
      detail:
        'Robusta tends to tolerate lower altitudes and disease pressure better than arabica. Its flavors are often described as earthy, nutty, or woody; in the right blend, it can add body and crema. It is not simply a “lower grade” of coffee — it is a different plant with different uses.',
      image: {
        slug: 'coffee-beans',
        alt: 'A dense layer of roasted coffee beans',
        position: 'center 50%',
      },
      icon: 'bean',
    },
    {
      id: 'liberica',
      name: 'Liberica',
      meta: 'Coffea liberica · a small, distinctive share of trade',
      summary:
        'A West and Central African species with large, asymmetric beans and a bold, sometimes woody or smoky cup.',
      detail:
        'Liberica accounts for a very small share of global coffee trade but has cultural importance in places such as the Philippines, where barako is made from it. Interest in its climate resilience has grown, though it remains unfamiliar to many coffee drinkers.',
      image: {
        slug: 'coffee-farm',
        alt: 'A coffee farm landscape on a green hillside',
        position: 'center 55%',
      },
      icon: 'leaf',
    },
    {
      id: 'typica',
      name: 'Typica',
      meta: 'Heritage cultivar',
      summary:
        'One of the oldest cultivated arabica types, valued for clean sweetness and a relatively straightforward cup.',
      detail:
        'Typica spread widely during coffee’s colonial expansion. It is generally low-yielding and disease-susceptible, so it is less common commercially today, but it remains important in breeding and in some specialty lots.',
      icon: 'bean',
    },
    {
      id: 'bourbon',
      name: 'Bourbon',
      meta: 'Heritage cultivar',
      summary:
        'A classic arabica cultivar associated with rounded sweetness, balance, and good aromatic complexity.',
      detail:
        'Bourbon takes its name from the island of Réunion, formerly Bourbon. Like Typica, it is susceptible to rust and has been widely used in breeding. Flavor descriptions are tendencies, not guarantees: farm and roast still matter.',
      icon: 'bean',
    },
    {
      id: 'geisha',
      name: 'Geisha',
      meta: 'Ethiopian landrace · celebrated cultivar',
      summary:
        'A distinctive arabica type known for floral, jasmine-like aromatics and tea-like elegance when grown at high altitude.',
      detail:
        'Geisha came to international attention through Panama’s Hacienda La Esmeralda in the 2000s, though its Ethiopian origins are much older. Its fame has made it expensive and frequently imitated; the name alone does not assure a remarkable cup.',
      icon: 'leaf',
    },
    {
      id: 'sl28',
      name: 'SL28',
      meta: 'Kenyan selection',
      summary:
        'A Kenyan arabica selection prized for vivid acidity and complex fruit character in the right conditions.',
      detail:
        'Developed in Kenya in the 20th century, SL28 is drought-tolerant but susceptible to some diseases. It is strongly associated with Kenyan specialty coffee, though performance depends on site and processing.',
      icon: 'cherry',
    },
  ],
};

const coffeeMethodGroup: VarietiesContent['groups'][number] = {
  id: 'methods',
  eyebrow: 'From the brewer',
  title: 'Brewing methods',
  intro:
    'These are ways to make coffee, not types of bean. Each method changes extraction and texture; the same coffee can taste quite different through another brewer.',
  display: 'methods',
  items: [
    {
      id: 'espresso',
      name: 'Espresso',
      meta: 'Pressure · roughly 9 bar',
      summary:
        'Pressurised water is pushed through a compacted bed of finely ground coffee, producing a small, concentrated shot.',
      detail:
        'A typical modern starting point is a 1:2 ratio — for example, 18 g of coffee in and around 36 g of espresso out — in 25–30 seconds, though machines, baskets, and recipes vary. Espresso tends to be intense and syrupy, with a crema layer. It is the base for many café drinks.',
      icon: 'cup',
    },
    {
      id: 'pour-over',
      name: 'Pour-over',
      meta: 'Percolation · 2–4 minutes',
      summary:
        'Water is poured over a bed of coffee in a paper filter; gravity draws it through, and the filter retains most oils and fines.',
      detail:
        'Pour-over can produce a clean, articulate cup that highlights acidity and aromatics. The pouring pattern, grind, water chemistry, and filter shape all matter. It rewards attention but does not require ritual: a consistent recipe is more useful than a perfect swirl.',
      icon: 'filter',
    },
    {
      id: 'french-press',
      name: 'French press',
      meta: 'Immersion · about 4 minutes',
      summary:
        'Coffee steeps fully in hot water before a metal mesh is pressed down to separate the grounds.',
      detail:
        'Immersion and a metal filter often produce a fuller-bodied cup with some sediment and a softer acidity. Coarse grinding helps prevent clogging and over-extraction. It is simple, forgiving, and a good place to begin exploring coffee at home.',
      icon: 'press',
    },
    {
      id: 'aeropress',
      name: 'AeroPress',
      meta: 'Immersion + pressure · 1–2 minutes',
      summary:
        'Coffee and water steep in a chamber, then gentle pressure pushes the brew through a filter into the cup.',
      detail:
        'The AeroPress is compact, quick, and flexible: recipes range from short, strong concentrates to longer, lighter cups. Because many variables are adjustable, it is popular with travelers and home experimenters alike.',
      icon: 'syringe',
    },
    {
      id: 'cold-brew',
      name: 'Cold brew',
      meta: 'Cold immersion · 12–18 hours',
      summary:
        'Ground coffee steeps in cool or cold water for many hours, then is filtered and usually served chilled.',
      detail:
        'Cold extraction tends to produce lower perceived acidity and a smooth, rounded body, though this depends on coffee and recipe. It is often made as a concentrate and diluted with water or milk. Cold brew is a brewing method — not simply hot coffee poured over ice.',
      icon: 'snow',
    },
    {
      id: 'moka',
      name: 'Moka pot',
      meta: 'Steam pressure · stovetop',
      summary:
        'Steam generated in the lower chamber pushes hot water up through a basket of coffee.',
      detail:
        'The moka pot makes a strong, dense brew with a distinctive character. It is not espresso: the pressure is much lower, and the result is usually less concentrated than a modern espresso shot. Grind and heat control make a noticeable difference.',
      icon: 'kettle',
    },
  ],
};

const coffeeDrinkGroup: VarietiesContent['groups'][number] = {
  id: 'drinks',
  eyebrow: 'From the café',
  title: 'Popular coffee drinks',
  intro:
    'Café recipes are conventions, not laws. Milk volumes and cup sizes differ from country to country and café to café.',
  display: 'list',
  items: [
    {
      id: 'espresso-drink',
      name: 'Espresso',
      meta: 'Concentrated · small',
      summary:
        'A short, intense shot of coffee brewed under pressure. Often 25–35 ml, though modern specialty recipes vary considerably.',
      icon: 'cup',
    },
    {
      id: 'americano',
      name: 'Americano',
      meta: 'Espresso + water',
      summary:
        'Espresso diluted with hot water. The result is closer in strength to filter coffee, with the espresso’s flavor character and some crema.',
      icon: 'droplet',
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      meta: 'Espresso + steamed milk + foam',
      summary:
        'Traditionally a smaller drink with a noticeable layer of milk foam. In many cafés, the milk is steamed to a thick, velvety texture rather than a dry foam.',
      icon: 'milk',
    },
    {
      id: 'latte',
      name: 'Latte',
      meta: 'Espresso + more milk',
      summary:
        'Espresso with a larger volume of steamed milk and a thin layer of microfoam. Milk softens acidity and sweetness, and the coffee can become a background note.',
      icon: 'cup',
    },
    {
      id: 'flat-white',
      name: 'Flat white',
      meta: 'Espresso or ristretto + microfoam',
      summary:
        'A smaller milk drink associated with Australia and New Zealand, typically made with a stronger coffee base and a thin, glossy layer of steamed milk.',
      icon: 'milk',
    },
    {
      id: 'mocha',
      name: 'Mocha',
      meta: 'Espresso + chocolate + milk',
      summary:
        'A café drink combining espresso, chocolate, and steamed milk. Recipes vary from a light cocoa accent to a dessert-like drink.',
      icon: 'sparkle',
    },
  ],
};

export const coffeeVarieties: VarietiesContent = {
  eyebrow: 'Types & varieties',
  title: 'Discover Coffee Varieties & Styles',
  intro:
    'Coffee is discussed in three different languages: botany, brewing, and the café menu. This guide keeps them separate — a species is not a brew method, and a latte is not a variety of bean.',
  groups: [coffeePlantGroup, coffeeMethodGroup, coffeeDrinkGroup],
  note: {
    title: 'Species, cultivar, method, drink',
    body: '“Arabica” describes a plant species. “Bourbon” is a cultivar within it. “Pour-over” is a brewing method, “espresso” is both a method and a drink, and “latte” is a drink built on espresso and milk. Keeping these categories separate makes café menus and coffee labels much easier to read.',
  },
};

export const coffeeFlavor: FlavorContent = {
  eyebrow: 'Flavor explorer',
  title: 'Find Your Coffee Profile',
  intro:
    'Tasting notes are descriptors, not ingredients. Coffee does not contain chocolate, caramel, or berries simply because a bag says so — these are the aromas and flavors produced by the coffee itself. Choose a few directions below to see where they might lead.',
  dimensions: [
    {
      id: 'fruity',
      label: 'Fruity',
      description:
        'Notes that recall berries, citrus, stone fruit, or dried fruit. Often linked to natural processing, certain cultivars, and lighter roasts.',
      guidance:
        'Look toward naturally processed Ethiopian coffees, Kenyan washed lots, or fruit-forward experimental coffees. A light to medium roast and a pour-over will help those notes stay clear.',
    },
    {
      id: 'floral',
      label: 'Floral',
      description:
        'Aromas such as jasmine, orange blossom, or rose. Usually fragile and easier to notice as the coffee cools.',
      guidance:
        'Ethiopian washed coffees and high-grown Geisha lots are common places to start. Brew gently, avoid scalding water, and use a light roast if you want aromatics to lead.',
    },
    {
      id: 'nutty',
      label: 'Nutty',
      description:
        'Almond, hazelnut, or toasted nut impressions. Often associated with medium roasts and coffees from Brazil and parts of Central America.',
      guidance:
        'Try a Brazilian or Colombian coffee at a medium roast. It can shine in a French press or espresso and works comfortably with milk.',
    },
    {
      id: 'chocolatey',
      label: 'Chocolatey',
      description:
        'Cocoa, dark chocolate, or brownie-like notes, often from roast development as well as the coffee’s origin.',
      guidance:
        'Explore Latin American coffees at medium to medium-dark roasts. Espresso, moka, or French press tend to emphasize the deeper, sweeter side.',
    },
    {
      id: 'caramel',
      label: 'Caramel-like',
      description:
        'A sweet, cooked-sugar impression rather than actual caramel. It often develops through roasting and pairs naturally with nutty notes.',
      guidance:
        'Look for balanced medium roasts from Colombia, Guatemala, or Brazil. A slightly stronger brew ratio can push sweetness forward without turning the cup bitter.',
    },
    {
      id: 'earthy',
      label: 'Earthy',
      description:
        'A savory, forest-floor or spice-like quality. Common in some Indonesian coffees, robusta, and darker roasts.',
      guidance:
        'Try a Sumatran coffee, a robusta blend, or a darker-roasted espresso. Immersion brewing and milk can make this style feel especially comforting.',
    },
    {
      id: 'bright',
      label: 'Bright & acidic',
      description:
        'A lively, juicy, or wine-like impression. “Acidity” in coffee is a tasting characteristic, not the same thing as spoilage.',
      guidance:
        'Kenyan and washed Ethiopian coffees are classic starting points. Keep the roast lighter, use water in the low-to-mid 90s°C, and grind a little finer if the cup tastes thin or sharp.',
    },
    {
      id: 'body',
      label: 'Body & texture',
      description:
        'The weight of the coffee on your tongue — from tea-like and light to syrupy and heavy. Body is separate from strength.',
      guidance:
        'For a fuller body, try natural-process coffees, a French press, cold brew, or a slightly finer grind. For a lighter, cleaner cup, choose a paper-filtered pour-over.',
    },
  ],
  quickPicks: [
    { label: 'Juicy & bright', ids: ['fruity', 'bright'] },
    { label: 'Deep & comforting', ids: ['chocolatey', 'caramel', 'body'] },
    { label: 'Savoury & complex', ids: ['earthy', 'nutty'] },
  ],
  emptyTitle: 'Start with a flavor direction',
  emptyBody:
    'Choose up to three notes — or try one of the quick combinations above. We’ll suggest a few general paths to explore, not a definitive recommendation.',
  note: {
    title: 'A note on tasting',
    body: 'Flavor is personal and context-dependent. The same coffee can taste different at another brew ratio, water temperature, or degree of freshness. Use these suggestions as starting points for exploration, then trust your own palate.',
  },
};

export const coffeePrepare: PrepareContent = {
  eyebrow: 'Brewing guide',
  title: 'Your Coffee, Your Ritual',
  intro:
    'Good coffee does not require a laboratory. These recipes are deliberately simple starting points: use them to make a cup you enjoy, then adjust one variable at a time. Measurements are suggestions, not rules.',
  recipes: [
    {
      id: 'pour-over',
      name: 'Pour-over',
      kicker: 'Clean, articulate, hands-on',
      summary:
        'A paper filter and a steady pour produce a clear cup that lets origin character speak. This is a forgiving place to learn how grind and water change flavor.',
      image: {
        slug: 'coffee-pour',
        alt: 'A glass pour-over dripper and gooseneck kettle on a wooden counter',
        position: 'center 50%',
      },
      ingredients: ['15 g whole-bean coffee', '250 g filtered water'],
      equipment: [
        'Pour-over dripper and paper filter',
        'Gooseneck kettle',
        'Burr grinder',
        'Scale',
        'Cup or server',
      ],
      specs: [
        { label: 'Dose', value: '15 g' },
        { label: 'Water', value: '250 g' },
        { label: 'Ratio', value: '1:17' },
        { label: 'Grind', value: 'Medium-fine' },
        { label: 'Water temp.', value: '92–96°C' },
        { label: 'Time', value: '2:30–3:30' },
      ],
      steps: [
        'Heat the water and rinse the paper filter with hot water. Discard the rinse water and preheat your cup or server.',
        'Add the coffee to the filter and gently level the bed.',
        'Start a timer and pour about 45 g of water over the grounds, enough to saturate them. Wait 30–45 seconds while the coffee blooms.',
        'Pour in gentle circles to about 150 g, then pause briefly. Continue in one or two more pours until you reach 250 g.',
        'Let the bed drain. The total brew should finish around 2:30–3:30. Swirl the server gently and serve.',
      ],
      mistakes: [
        'Pouring too fast or from too high, which can disturb the bed and reduce contact time.',
        'Using water straight off the boil, which can flatten delicate aromatics.',
        'Changing several variables at once while the cup is still too hot to taste clearly.',
      ],
      adjust: [
        'Sour or thin? Grind finer, or extend the final pour slightly.',
        'Bitter or dry? Grind coarser, or lower the water temperature a few degrees.',
        'Too strong? Add a little hot water to the finished cup rather than changing the whole recipe.',
      ],
    },
    {
      id: 'french-press',
      name: 'French press',
      kicker: 'Full-bodied, forgiving, unhurried',
      summary:
        'A simple immersion brewer that needs little more than coffee, water, and four minutes. The metal filter leaves more oils and sediment in the cup.',
      image: {
        slug: 'coffee-black',
        alt: 'A cup of black coffee photographed from above on a light surface',
        position: 'center 50%',
      },
      ingredients: ['30 g coarsely ground coffee', '500 g filtered water'],
      equipment: ['French press', 'Burr grinder', 'Kettle', 'Scale', 'Timer'],
      specs: [
        { label: 'Dose', value: '30 g' },
        { label: 'Water', value: '500 g' },
        { label: 'Ratio', value: '1:17' },
        { label: 'Grind', value: 'Coarse' },
        { label: 'Water temp.', value: '93–96°C' },
        { label: 'Time', value: '4 minutes' },
      ],
      steps: [
        'Preheat the French press with hot water, then discard the water.',
        'Add the coarse grounds and pour in all 500 g of hot water, saturating the coffee evenly.',
        'Place the lid on with the plunger raised and steep for 4 minutes.',
        'At the end of the steep, gently break the crust that has formed on top with a spoon, then skim off the foam if you prefer a cleaner cup.',
        'Insert the plunger and press down slowly and steadily. Pour immediately; leaving the coffee on the grounds will keep extracting it.',
      ],
      mistakes: [
        'Using a fine grind, which can clog the mesh and make the cup muddy or bitter.',
        'Steeping for far too long and then expecting the same balance.',
        'Leaving brewed coffee in the press so it continues to extract.',
      ],
      adjust: [
        'Too bitter? Coarsen the grind or shorten the steep.',
        'Too weak? Use more coffee rather than steeping indefinitely.',
        'Want more clarity? Skim the foam and pour through a paper filter if you like.',
      ],
    },
    {
      id: 'espresso',
      name: 'Espresso',
      kicker: 'Concentrated, precise, quick',
      summary:
        'Espresso is a method and a small drink in one. A good starting recipe gives you a reference point; then grind and dose become your main tools for adjustment.',
      image: {
        slug: 'coffee-espresso',
        alt: 'A portafilter filled with finely ground coffee beside an espresso machine',
        position: 'center 45%',
      },
      ingredients: ['18 g finely ground coffee', 'About 36 g espresso yield'],
      equipment: [
        'Espresso machine',
        'Espresso-capable burr grinder',
        'Scale accurate to 0.1 g',
        'Tamper and distribution tool',
        'Cup',
      ],
      specs: [
        { label: 'Dose', value: '18 g' },
        { label: 'Yield', value: '36 g' },
        { label: 'Ratio', value: '1:2' },
        { label: 'Grind', value: 'Fine' },
        { label: 'Water temp.', value: 'About 93°C' },
        { label: 'Time', value: '25–30 seconds' },
      ],
      steps: [
        'Preheat the machine and cup. Flush the group head briefly to stabilise temperature.',
        'Weigh 18 g of coffee into the basket. Distribute it evenly, then tamp level with consistent pressure.',
        'Lock the portafilter into the machine and place the cup on the scale. Start the shot and the timer together.',
        'Aim for around 36 g of espresso in 25–30 seconds. Watch the flow: it should begin slowly and become a steady stream rather than sputtering or gushing.',
        'Stir the shot, taste it, and make one adjustment at a time — usually grind — before the next attempt.',
      ],
      mistakes: [
        'Uneven distribution or a tilted tamp, which can cause channeling and an uneven extraction.',
        'Judging a recipe by time alone while ignoring the yield and the taste.',
        'Using coffee more than a few weeks past its roast date, when much of the carbon dioxide and aroma have gone.',
      ],
      adjust: [
        'Shot runs too fast and tastes sour? Grind finer.',
        'Shot runs too slow and tastes bitter or dry? Grind coarser.',
        'Good flow but too strong? Increase the yield slightly and taste again.',
      ],
    },
    {
      id: 'cold-brew',
      name: 'Cold brew',
      kicker: 'Smooth, patient, make-ahead',
      summary:
        'Cold water and time replace heat. Make a concentrate, chill it, and dilute to your preferred strength — a useful method for warm mornings and busy weeks.',
      image: {
        slug: 'coffee-iced',
        alt: 'Iced coffee being poured into a tall glass',
        position: 'center 50%',
      },
      ingredients: ['100 g coarsely ground coffee', '1 litre cold filtered water'],
      equipment: [
        'Large jar or cold-brew maker',
        'Fine-mesh sieve or filter',
        'Burr grinder',
        'Scale',
      ],
      specs: [
        { label: 'Dose', value: '100 g' },
        { label: 'Water', value: '1 litre' },
        { label: 'Ratio', value: '1:10 concentrate' },
        { label: 'Grind', value: 'Coarse' },
        { label: 'Time', value: '12–18 hours' },
        { label: 'Serve', value: 'Dilute to taste' },
      ],
      steps: [
        'Add the coarse grounds to a clean jar and pour over the cold water. Stir gently to saturate all the coffee.',
        'Cover and steep in the refrigerator for 16–18 hours, or at room temperature for 12–16 hours if you prefer a faster extraction.',
        'Strain through a fine-mesh sieve lined with a paper filter, or use your cold-brew maker’s filter. Discard the grounds.',
        'Chill the concentrate in a sealed container and use within a few days.',
        'Serve diluted — often 1:1 with water or milk — over ice, adjusting the strength to your taste.',
      ],
      mistakes: [
        'Grinding too fine, which makes filtering slow and can leave a muddy texture.',
        'Steeping for days in the refrigerator and expecting a fresher-tasting result.',
        'Serving the concentrate undiluted without checking how strong it is.',
      ],
      adjust: [
        'Too weak? Use a higher coffee-to-water ratio next time, or serve with less dilution.',
        'Too bitter? Shorten the steep or coarsen the grind.',
        'Want a clearer cup? Filter twice through a paper filter.',
      ],
    },
  ],
  note: {
    title: 'Recipes are starting points',
    body: 'Water chemistry, coffee freshness, roast level, and your grinder all change the result. Adjust one variable at a time and taste as you go. A recipe that works for someone else is useful only if it helps you make a cup you want to drink again.',
  },
};

export const coffeeCulture: CultureContent = {
  eyebrow: 'Culture & traditions',
  title: 'Coffee Is a Social Technology',
  intro:
    'Wherever coffee has travelled, people have built rituals around it. These are a few ways of drinking coffee — not a complete map, and not a set of stereotypes.',
  entries: [
    {
      id: 'ethiopia-ceremony',
      location: 'Ethiopia',
      title: 'The coffee ceremony',
      body: 'In many Ethiopian communities, coffee is served as a ceremony: green beans are roasted, ground, and brewed in a clay jebena; incense may be burned; and guests are served in rounds. The ceremony is associated with hospitality, conversation, and time together. Names and details of the rounds vary by region and household, and the practice is not identical for every Ethiopian.',
      footnote: 'Ethiopia is the birthplace of Coffea arabica, but the country’s coffee cultures are plural, not a single tradition.',
      image: {
        slug: 'coffee-ethiopian',
        alt: 'Coffee being poured during an Ethiopian coffee ceremony',
        position: 'center 50%',
      },
      size: 'feature',
    },
    {
      id: 'turkiye',
      location: 'Türkiye',
      title: 'A small cup, a long conversation',
      body: 'Turkish coffee is made in a cezve, served unfiltered, and often taken with sugar. The grounds settle in the cup; the foam on top is part of the craft. Coffeehouses and home hospitality have made it a social ritual. UNESCO inscribed Turkish coffee culture and tradition on its Intangible Cultural Heritage list in 2013.',
      footnote: 'The UNESCO inscription recognizes a living cultural practice, not a single recipe.',
      image: {
        slug: 'coffee-turkish',
        alt: 'Turkish coffee being poured from a copper cezve into a cup',
        position: 'center 50%',
      },
    },
    {
      id: 'italy',
      location: 'Italy',
      title: 'The espresso bar',
      body: 'Italian espresso culture is built around the bar: a small, strong coffee, often drunk standing, and then back to the day. Regional habits differ, and the idea of a strict national “rule” about milk after breakfast is more of a conversational shorthand than a universal law. Espresso is a method and a drink, not a bean or a roast level.',
      image: {
        slug: 'coffee-barista',
        alt: 'A barista preparing espresso behind a café counter',
        position: 'center 50%',
      },
    },
    {
      id: 'japan',
      location: 'Japan',
      title: 'Kissaten and the craft of the cup',
      body: 'Japanese coffee culture includes kissaten — traditional coffeehouses where the pace is slow and preparation can be meticulous. Siphon, nel drip, and hand-poured coffee have long coexisted with modern café culture. Today Tokyo and other cities are also home to a prominent specialty scene, with a strong emphasis on precision and hospitality.',
      image: {
        slug: 'coffee-cafe-people',
        alt: 'Guests talking around wooden tables in a busy café',
        position: 'center 50%',
      },
    },
    {
      id: 'global-cafe',
      location: 'Around the world',
      title: 'The café as a third place',
      body: 'Cafés have long served as informal public rooms — places between home and work where people meet, read, work, and linger. The global specialty movement has added new layers: traceability, competitions, brewing equipment, and a language of origin and processing. It has also raised questions about access, pricing, and who gets to participate in the conversation.',
      footnote: 'The “third place” idea is often associated with sociologist Ray Oldenburg; its meaning varies across cultures.',
      image: {
        slug: 'coffee-cups',
        alt: 'Many coffee cups arranged in a circle from above',
        position: 'center 50%',
      },
    },
  ],
  note: {
    title: 'A respectful way to explore',
    body: 'Cultural traditions are lived practices, not aesthetic backgrounds. When you encounter a coffee ritual, ask about it, listen to the people who practise it, and avoid treating a single cup as a summary of an entire culture.',
  },
};

export const coffeeDiscover: DiscoverContent = {
  eyebrow: 'Interactive discovery',
  title: 'Which Cup Speaks to You?',
  intro:
    'Three small choices, one suggestion for where to go next. There are no wrong answers — and nothing is stored or sent anywhere.',
  questions: [
    {
      id: 'flavor',
      prompt: 'Which flavors pull you in first?',
      options: [
        { id: 'fruity', label: 'Fruit & flowers', note: 'Juicy, bright, aromatic' },
        { id: 'chocolatey', label: 'Chocolate & nuts', note: 'Sweet, rounded, familiar' },
        { id: 'earthy', label: 'Earthy & deep', note: 'Savory, bold, grounding' },
      ],
    },
    {
      id: 'method',
      prompt: 'How would you like to brew it?',
      options: [
        { id: 'pour', label: 'Slow and hands-on', note: 'A pour-over ritual' },
        { id: 'espresso', label: 'Quick and concentrated', note: 'An espresso setup' },
        { id: 'cold', label: 'Cold and make-ahead', note: 'A jar of cold brew' },
      ],
    },
    {
      id: 'feel',
      prompt: 'What should the cup feel like?',
      options: [
        { id: 'bright', label: 'Bright and lively', note: 'Acidity and lift' },
        { id: 'sweet', label: 'Sweet and balanced', note: 'Comfort and clarity' },
        { id: 'bold', label: 'Big and comforting', note: 'Body and depth' },
      ],
    },
  ],
  results: [
    {
      id: 'explorer',
      title: 'The origin explorer',
      description:
        'Start with a light or medium roast from a single origin, then brew it as a pour-over. Keep notes of what you taste — sweetness, acidity, and aroma often become clearer as the cup cools.',
      matches: ['fruity', 'pour', 'bright'],
      link: { label: 'Explore coffee varieties', section: 'varieties' },
    },
    {
      id: 'ritualist',
      title: 'The slow ritualist',
      description:
        'A balanced, chocolatey coffee brewed with patience is your natural starting point. The pour-over guide can help you build a repeatable ritual and learn how grind changes the cup.',
      matches: ['chocolatey', 'pour', 'sweet'],
      link: { label: 'Open the brewing guide', section: 'prepare' },
    },
    {
      id: 'classicist',
      title: 'The espresso classicist',
      description:
        'You are drawn to the concentrated end of the spectrum. Explore espresso culture and the small rituals around it, then try a simple 1:2 recipe at home or at a good bar.',
      matches: ['chocolatey', 'espresso', 'bold'],
      link: { label: 'Read about espresso culture', section: 'culture' },
    },
    {
      id: 'coldbrew',
      title: 'The cold-brew experimentalist',
      description:
        'You want depth without fuss. Make a cold-brew concentrate, dilute it to taste, and compare it with the same coffee brewed hot. The difference can be surprising.',
      matches: ['earthy', 'cold', 'bold'],
      link: { label: 'Make cold brew', section: 'prepare' },
    },
    {
      id: 'bright-espresso',
      title: 'The modern bar explorer',
      description:
        'You like intensity with clarity. Try a light-roasted espresso from a roaster you trust, or ask for a filter coffee that highlights the same origin. Compare the two side by side.',
      matches: ['fruity', 'espresso', 'bright'],
      link: { label: 'Understand the varieties', section: 'varieties' },
    },
  ],
  defaultResult: 'explorer',
  note: 'This is an educational starting point, not a personalized recommendation based on data about you.',
};

export const coffeeFinalCta: FinalCtaContent = {
  eyebrow: 'One more cup',
  title: 'Your next cup has a story.',
  body: 'Keep exploring the origins, flavors, and techniques that make coffee endlessly fascinating.',
  primary: { label: 'Explore Coffee Again', section: 'top' },
  secondaryLabel: 'Discover Matcha',
  image: {
    slug: 'coffee-latte',
    alt: 'Milk being poured into a cup of coffee to create latte art',
    position: 'center 55%',
  },
};

export const coffeeContent: BeverageContent = {
  theme: 'coffee',
  label: 'Coffee',
  hero: coffeeHero,
  intro: coffeeIntro,
  origins: coffeeOrigins,
  process: coffeeProcess,
  varieties: coffeeVarieties,
  flavor: coffeeFlavor,
  prepare: coffeePrepare,
  culture: coffeeCulture,
  discover: coffeeDiscover,
  finalCta: coffeeFinalCta,
  seoTitle: 'Coffee — Origins, Varieties & Brewing | Matchakohi',
  seoDescription:
    'Explore coffee’s Ethiopian and Yemeni roots, its journey through coffeehouses and farms, the varieties behind the cup, and practical brewing guides from Matchakohi.',
};
