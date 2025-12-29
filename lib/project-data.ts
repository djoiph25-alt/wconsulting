export type ProjectData = {
  title: string
  category: string
  client: string
  year: string
  services: string[]
  description: string
  challenge: string
  solution: string
  results: string[]
  images: { url: string; caption: string }[]
  socialMedia?: {
    videos: {
      url: string
      caption: string
      orientation: "vertical" | "horizontal"
    }[]
  }
  tags: string[]
}

export const projectData: Record<string, ProjectData> = {
  "veja-sneakers": {
    title: "VEJA Sneakers",
    category: "Branding & Product Design",
    client: "VEJA",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Product Design", "Packaging Design"],
    description:
      "Veja est une marque de baskets engagée, transparente et durable, reconnue pour son esthétique minimaliste et son approche responsable de la mode.",
    challenge:
      "Créer une identité de marque distinctive qui communique l'engagement écologique tout en maintenant une esthétique premium et minimaliste.",
    solution:
      "Nous avons développé un logo basé sur la lettre V stylisée avec un symbole d'œil représentant la vision. La palette noir et blanc renforce l'approche minimaliste.",
    results: [
      "Identité visuelle minimaliste et mémorable",
      "Cohérence de marque du produit au point de vente",
      "Renforcement du positionnement premium et éco-responsable",
    ],
    images: [
      { url: "/images/veja-brand-description.jpg", caption: "" },
      { url: "/images/veja-logo-construction.jpg", caption: "" },
      { url: "/images/veja-shoe-heel-detail.jpg", caption: "" },
      { url: "/images/veja-tying-shoes.jpg", caption: "" },
      { url: "/images/veja-socks-colors.jpg", caption: "" },
      { url: "/images/veja-box-packaging.jpg", caption: "" },
      { url: "/images/veja-storefront-sign.jpg", caption: "" },
      { url: "/images/veja-merchandise.jpg", caption: "" },
      { url: "/images/veja-1.jpg", caption: "" },
      { url: "/images/veja-2.jpg", caption: "" },
      { url: "/images/veja-3.jpg", caption: "" },
      { url: "/images/veja-4.jpg", caption: "" },
      { url: "/images/veja-5.jpg", caption: "" },
      { url: "/images/veja-6.jpg", caption: "" },
      { url: "/images/veja-7.jpg", caption: "" },
    ],
    tags: ["Branding", "Logo Design", "Product Design", "Sustainable"],
  },
  askmona: {
    title: "askmona",
    category: "Branding & Digital Product Design",
    client: "Ask Mona",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "App Design", "Web Design", "Marketing Materials"],
    description:
      "Ask Mona est une startup française spécialisée dans les solutions d'intelligence artificielle pour le secteur culturel. Elle aide principalement les musées, monuments, fondations et institutions culturelles à proposer des guides interactifs pour les visiteurs, transformant l'expérience muséale grâce à l'IA conversationnelle.",
    challenge:
      "Créer une identité de marque qui évoque l'intelligence artificielle et la technologie de pointe tout en restant chaleureuse et accessible pour le secteur culturel. Le défi était de concevoir un système visuel cohérent applicable du logo aux applications mobiles, site web, cartes de visite et supports publicitaires grand format.",
    solution:
      "Nous avons développé un logo distinctif avec un robot stylisé en forme de bulle de conversation, symbolisant l'IA conversationnelle. L'identité utilise une palette de couleurs sophistiquée centrée sur le violet (#9F79E6, #7E79E9E7), le bleu marine (#090D3E) et le noir (#060610) pour créer une ambiance tech et moderne.",
    results: [
      "Identité visuelle moderne et technologique reflétant l'innovation IA",
      "Cohérence de marque des applications numériques aux supports physiques",
      "Système de couleurs distinctif applicable sur tous les supports",
    ],
    images: [
      {
        url: "/images/askmona-3.jpg",
        caption:
          "Palette de couleurs et app icon - Couleurs principales violet #9F79E6, bleu #7E79E9E7, bleu marine #090D3E et noir #060610",
      },
      {
        url: "/images/askmona-4.jpg",
        caption: "Site web desktop - Page d'accueil 'Where AI meets curiosity'",
      },
      {
        url: "/images/askmona-1.jpg",
        caption: "Application wearable - Smartwatch avec bracelet violet affichant le logo robot askmona",
      },
      {
        url: "/images/askmona-5.jpg",
        caption: "Cartes de visite - Design avec gradient violet à noir",
      },
      {
        url: "/images/askmona-2.jpg",
        caption: "Présentation de la marque - Logo principal avec description",
      },
      {
        url: "/images/askmona-6.jpg",
        caption: "Publicité urbaine - Billboard de rue en contexte urbain",
      },
    ],
    tags: ["Branding", "Logo Design", "App Design", "AI", "Tech", "Cultural"],
  },
  manda: {
    title: "Manda",
    category: "Branding & Digital Design",
    client: "Manda",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Web Design", "Marketing Materials", "Environmental Branding"],
    description:
      "Manda est une entreprise immobilière française moderne et digitale, née de la fusion des acteurs Flatlooker et Hello Syndic.",
    challenge:
      "Créer une identité de marque qui évoque la modernité et l'innovation digitale du secteur immobilier tout en restant accessible et rassurante pour les clients.",
    solution:
      "Nous avons développé une identité de marque cohérente avec un logo distinctif combinant orange (#F7A04B) et vert sauge (#87B491).",
    results: [
      "Identité visuelle forte et reconnaissable sur tous les supports",
      "Cohérence de marque du digital aux supports marketing",
      "Positionnement moderne dans le secteur immobilier digital",
    ],
    images: [
      {
        url: "/images/manda-1.jpg",
        caption: "Logo en contexte - Logo Manda orange sur immeuble résidentiel",
      },
      {
        url: "/images/manda-2.jpg",
        caption: "Présentation de la marque - Logo et description",
      },
      {
        url: "/images/manda-3.jpg",
        caption: "Palette de couleurs et app icon",
      },
      {
        url: "/images/manda-4.jpg",
        caption: "Site web desktop",
      },
      {
        url: "/images/manda-5.jpg",
        caption: "Publicité extérieure - Billboard de rue",
      },
    ],
    tags: ["Branding", "Logo Design", "Web Design", "Real Estate", "Digital"],
  },
  lydia: {
    title: "Lydia",
    category: "Branding & Mobile App Design",
    client: "Lydia",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "App Design", "Marketing Materials", "Environmental Branding"],
    description:
      "Lydia est une application de paiement mobile française innovante qui permet d'envoyer et recevoir de l'argent instantanément.",
    challenge:
      "Créer une identité de marque qui évoque la sécurité financière et la technologie de pointe tout en restant simple et accessible.",
    solution:
      "Nous avons développé un logo distinctif avec un symbole de billets stylisés. L'identité utilise une palette de couleurs centrée sur le bleu royal (#012C73), le bleu clair (#0080FF) et le bleu pâle (#E4F3FD).",
    results: [
      "Identité visuelle moderne et sécurisante reflétant l'innovation fintech",
      "Cohérence de marque de l'application mobile aux supports publicitaires",
      "Système de couleurs distinctif applicable sur tous les supports",
    ],
    images: [
      {
        url: "/images/lydia-4.jpg",
        caption: "Palette de couleurs et app icon",
      },
      {
        url: "/images/lydia-5.jpg",
        caption: "Application mobile - Interface de paiement et cagnottes",
      },
      {
        url: "/images/lydia-2.jpg",
        caption: "Logo blanc - Version principale du logo Lydia",
      },
      {
        url: "/images/lydia-6.jpg",
        caption: "Mockup mobile",
      },
      {
        url: "/images/lydia-3.jpg",
        caption: "Logo blanc - Version sur fond bleu marine",
      },
    ],
    tags: ["Branding", "Logo Design", "App Design", "Fintech", "Mobile"],
  },
  carizy: {
    title: "Carizy",
    category: "Branding & Digital Design",
    client: "Carizy",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Web Design", "Marketing Materials"],
    description:
      "Carizy est une plateforme française innovante spécialisée dans l'achat et la location de véhicules en ligne.",
    challenge:
      "Créer une identité visuelle moderne qui évoque la confiance et la simplicité dans le secteur automobile tout en se démarquant par son approche digitale.",
    solution:
      "Nous avons développé une identité visuelle distinctive avec une palette de couleurs dynamique et un logo mémorable.",
    results: [
      "Identité visuelle moderne et dynamique",
      "Cohérence de marque sur tous les supports digitaux",
      "Positionnement fort dans le secteur automobile digital",
    ],
    images: [
      { url: "/images/carizy-7.jpg", caption: "" },
      { url: "/images/carizy-1.jpg", caption: "" },
      { url: "/images/carizy-2.jpg", caption: "" },
      { url: "/images/carizy-3.jpg", caption: "" },
      { url: "/images/carizy-4.jpg", caption: "" },
      { url: "/images/carizy-5.jpg", caption: "" },
      { url: "/images/carizy-6.jpg", caption: "" },
    ],
    tags: ["Branding", "Logo Design", "Web Design", "Automotive"],
  },
  "touma-beaute": {
    title: "Touma Beauté",
    category: "Branding & Signalétique",
    client: "Touma Beauté",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Signage Design", "Environmental Branding", "Marketing Materials"],
    description:
      "Touma Beauté est un salon de beauté haut de gamme offrant des services personnalisés de soins esthétiques.",
    challenge:
      "Créer une identité de marque raffinée qui évoque l'élégance et le bien-être tout en restant mémorable et facilement reconnaissable.",
    solution:
      "Nous avons développé un logo distinctif avec une illustration florale art nouveau représentant une femme entourée de roses et de feuilles. L'identité utilise une palette sophistiquée de beige (#FFEBD6), or (#C9A86A) et noir.",
    results: [
      "Identité visuelle élégante et botanique reflétant le luxe et le bien-être",
      "Système de signalétique cohérent pour l'ensemble de l'établissement",
      "Visibilité renforcée avec drapeaux et panneaux extérieurs distinctifs",
    ],
    images: [
      {
        url: "/images/touma-beaute-02.jpg",
        caption: "Drapeaux publicitaires - Beach flags noir et beige",
      },
      {
        url: "/images/touma-beaute-01.jpg",
        caption: "Variantes de drapeaux - Beach flags blanc et beige/or",
      },
      {
        url: "/images/touma-beaute-05.jpg",
        caption: "Art mural - Illustration florale dorée",
      },
      {
        url: "/images/touma-beaute-03.jpg",
        caption: "Plaque signalétique - Panneau en verre",
      },
      {
        url: "/images/touma-beaute-04.jpg",
        caption: "Panneau directionnel",
      },
      {
        url: "/images/touma-beaute-07.jpg",
        caption: "Signalétique parking",
      },
      {
        url: "/images/touma-beaute-06.jpg",
        caption: "Variantes parking",
      },
    ],
    tags: ["Branding", "Logo Design", "Signage Design", "Beauty", "Environmental Branding"],
  },
  kazidomi: {
    title: "Kazidomi",
    category: "Branding & Social Media Content",
    client: "Kazidomi",
    year: "2024",
    services: ["Content Creation", "Social Media", "Branding"],
    description: "Kazidomi est une plateforme d'e-commerce engagée pour une alimentation saine et durable.",
    challenge: "Créer du contenu visuel impactant pour les réseaux sociaux tout en maintenant la cohérence de marque.",
    solution: "Développement d'une stratégie visuelle centrée sur les produits et les valeurs de la marque.",
    results: ["Engagement social media en hausse", "Identité visuelle cohérente", "Contenu produit de haute qualité"],
    images: [
      { url: "/images/kazidomi-5.jpg", caption: "Identité de marque Kazidomi" },
      { url: "/images/kazidomi-1.jpg", caption: "Détail produit et packaging" },
      { url: "/images/kazidomi-2.jpg", caption: "Communication visuelle" },
      { url: "/images/kazidomi-3.jpg", caption: "Supports marketing" },
      { url: "/images/kazidomi-4.jpg", caption: "Branding digital" },
      { url: "/images/kazidomi-6.jpg", caption: "Application mobile" },
      { url: "/images/kazidomi-7.jpg", caption: "Signalétique" },
    ],
    socialMedia: {
      videos: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KAZIDOMI%20horizontal%20video%2001-4yFHxL6gEn4RvUZrkVvRgofnJQmmav.mp4",
          caption: "Campagne digitale Kazidomi",
          orientation: "horizontal",
        },
      ],
    },
    tags: ["Branding", "Social Media", "Content Creation"],
  },
  alan: {
    title: "ALAN",
    category: "Branding & Identity",
    client: "Alan",
    year: "2023",
    services: ["Brand Identity", "Design System"],
    description: "Alan révolutionne l'assurance santé avec une approche technologique et humaine.",
    challenge: "Faire évoluer l'identité visuelle pour refléter la croissance et la maturité de la marque.",
    solution: "Un design system complet et une identité visuelle épurée.",
    results: ["Cohérence de marque renforcée", "Adoption fluide du design system", "Identité visuelle moderne"],
    images: [
      { url: "/images/7.jpg", caption: "" },
      { url: "/public/corporate-business-website-professional.jpg", caption: "" },
    ],
    tags: ["Branding", "Design System"],
  },
  "la-piadineria": {
    title: "La Piadineria",
    category: "Branding & Photography",
    client: "La Piadineria",
    year: "2024",
    services: ["Photography", "Art Direction", "Branding"],
    description: "La Piadineria est le leader italien de la restauration rapide de qualité.",
    challenge: "Traduire la qualité et la fraîcheur des produits à travers des visuels appétissants et modernes.",
    solution: "Séance photo culinaire avec une direction artistique contemporaine et chaleureuse.",
    results: ["Visuels culinaires premium", "Communication visuelle homogène", "Impact fort en point de vente"],
    images: [
      { url: "/images/la-piadineria-1.jpg", caption: "Identité de marque La Piadineria" },
      { url: "/images/la-piadineria-2.jpg", caption: "Design packaging La Piadineria" },
      { url: "/images/la-piadineria-3.jpg", caption: "Communication point de vente" },
      { url: "/images/la-piadineria-4.jpg", caption: "Supports marketing La Piadineria" },
      { url: "/images/la-piadineria-5.jpg", caption: "Branding digital La Piadineria" },
      { url: "/images/la-piadineria-6.jpg", caption: "Signalétique restaurant" },
      { url: "/images/la-piadineria-7.jpg", caption: "Photographie culinaire" },
      { url: "/images/la-piadineria-8.jpg", caption: "Détail logo et identité" },
    ],
    tags: ["Branding", "Photography", "Food"],
  },
  "belleville-brulerie": {
    title: "Belleville Brûlerie",
    category: "Branding & Packaging Design",
    client: "Belleville",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Packaging Design", "Environmental Branding"],
    description:
      "Belleville Brûlerie est un torréfacteur parisien de café premium reconnu pour son expertise artisanale. Nous avons créé une identité visuelle élégante qui reflète la qualité et l'artisanat français.",
    challenge:
      "Créer une identité de marque haut de gamme qui évoque l'excellence de la torréfaction française tout en restant accessible et chaleureuse.",
    solution:
      "Nous avons développé un logo élégant avec une flamme de vapeur symbolisant la fraîcheur du café. L'identité utilise des tons or et noir pour une ambiance premium.",
    results: [
      "Identité visuelle premium et cohérente",
      "Packaging distinctif en rayon",
      "Positionnement artisanal renforcé",
    ],
    images: [
      { url: "/images/belleville-1.jpg", caption: "" },
      { url: "/images/belleville-2.jpg", caption: "" },
      { url: "/images/belleville-3.jpg", caption: "" },
      { url: "/images/belleville-4.jpg", caption: "" },
      { url: "/images/belleville-5.jpg", caption: "" },
      { url: "/images/belleville-6.jpg", caption: "" },
    ],
    tags: ["Branding", "Logo Design", "Packaging Design"],
  },
  "bread-france": {
    title: "Bread France",
    category: "Branding & Logo Design",
    client: "Bread France",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Packaging Design", "Marketing"],
    description:
      "Bread France est une boulangerie artisanale française qui célèbre la tradition boulangère avec une approche moderne. Identité de marque complète évoquant l'authenticité du pain français.",
    challenge:
      "Créer une identité de marque qui évoque la tradition boulangère française tout en apportant une touche de modernité.",
    solution:
      "Nous avons développé un logo minimaliste avec le nombre '03' stylisé représentant la forme du pain. Palette de couleurs chaleureuse beige et noir.",
    results: [
      "Identité visuelle authentique reflétant la tradition",
      "Packaging distinctif et mémorable",
      "Cohérence de marque complète",
    ],
    images: [
      { url: "/images/bread-france-thumbnail.jpg", caption: "Identité de marque Bread France" },
      { url: "/images/bread-france-1.jpg", caption: "Design packaging Bread France" },
      { url: "/images/bread-france-2.jpg", caption: "Supports marketing Bread France" },
      { url: "/images/bread-france-3.jpg", caption: "Communication visuelle Bread France" },
      { url: "/images/bread-france-4.jpg", caption: "Branding digital Bread France" },
      { url: "/images/bread-france-5.jpg", caption: "Signalétique boulangerie" },
      { url: "/images/bread-france-6.jpg", caption: "Détail logo Bread France" },
      { url: "/images/bread-france-7.jpg", caption: "Identité visuelle complète" },
    ],
    tags: ["Branding", "Logo Design", "Marketing"],
  },
  mealcanteen: {
    title: "MealCanteen",
    category: "Branding & Sustainable Design",
    client: "MealCanteen",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "App Design", "Packaging Design"],
    description:
      "MealCanteen est un service de livraison de repas sains et éco-responsables qui révolutionne la restauration durable. Identité de marque fraîche reflétant santé et durabilité.",
    challenge:
      "Créer une identité de marque qui communique la fraîcheur, la santé et la durabilité tout en restant moderne et accessible.",
    solution:
      "Nous avons développé un logo moderne avec une palette vibrante centrée sur le vert pour la fraîcheur et le beige pour la naturalité.",
    results: [
      "Identité visuelle fraîche et durable",
      "Cohérence de marque de l'app aux packagings",
      "Communication claire de l'engagement éco-responsable",
    ],
    images: [
      { url: "/images/mealcanteen-7.jpg", caption: "" },
      { url: "/images/mealcanteen-1.jpg", caption: "" },
      { url: "/images/mealcanteen-2.jpg", caption: "" },
      { url: "/images/mealcanteen-3.jpg", caption: "" },
      { url: "/images/mealcanteen-4.jpg", caption: "" },
      { url: "/images/mealcanteen-5.jpg", caption: "" },
      { url: "/images/mealcanteen-6.jpg", caption: "" },
      { url: "/images/mealcanteen-8.jpg", caption: "" },
    ],
    tags: ["Branding", "Logo Design", "App Design", "Sustainable", "Food Tech"],
  },
  miravia: {
    title: "Miravia",
    category: "Branding & E-commerce Design",
    client: "Miravia",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Web Design", "App Design"],
    description:
      "Miravia est une plateforme e-commerce et marketplace moderne offrant une expérience d'achat fluide. Identité de marque contemporaine reflétant innovation et accessibilité.",
    challenge:
      "Créer une marque moderne et accessible qui se démarque dans le secteur e-commerce saturé tout en inspirant confiance et modernité.",
    solution:
      "Nous avons développé une identité visuelle distinctive avec un stéthoscope stylisé. Palette vibrante centrée sur le rouge et le noir pour évoquer énergie et dynamisme.",
    results: [
      "Identité visuelle moderne et dynamique",
      "Cohérence de marque du web aux apps",
      "Communication claire de l'expérience shopping fluide",
    ],
    images: [
      { url: "/images/miravia-6.jpg", caption: "" },
      { url: "/images/miravia-1.jpg", caption: "" },
      { url: "/images/miravia-2.jpg", caption: "" },
      { url: "/images/miravia-3.jpg", caption: "" },
      { url: "/images/miravia-4.jpg", caption: "" },
      { url: "/images/miravia-5.jpg", caption: "" },
      { url: "/images/miravia-7.jpg", caption: "" },
    ],
    tags: ["Branding", "Logo Design", "E-commerce", "Web Design", "App Design"],
  },
  "alani-healthcare": {
    title: "ALAN Healthcare",
    category: "Branding & Digital Design",
    client: "ALAN",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Web Design", "App Design"],
    description:
      "ALAN est une plateforme innovante de services de santé qui révolutionne l'accès aux soins. Identité de marque moderne et accessible inspirant confiance.",
    challenge:
      "Créer une marque moderne et accessible qui inspire confiance dans le secteur de la santé tout en se démarquant par son approche digitale innovante.",
    solution:
      "Nous avons développé une identité visuelle distinctive avec un stéthoscope stylisé. Palette vibrante centrée sur le bleu royal symbolisant confiance et santé.",
    results: [
      "Identité visuelle moderne inspirant confiance",
      "Cohérence de marque du digital aux uniformes",
      "Design system complet applicable partout",
    ],
    images: [{ url: "/images/7.jpg", caption: "Identité de marque ALAN Healthcare" }],
    tags: ["Branding", "Web Design", "App Design"],
  },
  "ada-vehicle-rental": {
    title: "ADA Location de Véhicules",
    category: "Branding & Digital Marketing",
    client: "ADA France",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Web Design", "Marketing Materials"],
    description:
      "ADA est une marque française spécialisée dans la location de véhicules, reconnue pour son modèle accessible et de proximité. Identité visuelle moderne reflétant mobilité pratique.",
    challenge:
      "Créer une identité visuelle moderne et mémorable qui reflète la mobilité pratique tout en maintenant une image premium pour les services business.",
    solution:
      "Nous avons développé une identité cohérente avec un logo combinant rouge vif et noir, symbolisant énergie et professionnalisme.",
    results: [
      "Identité visuelle forte et reconnaissable",
      "Cohérence du digital aux véhicules",
      "Positionnement premium pour services business",
    ],
    images: [
      { url: "/images/ada-thumbnail.jpg", caption: "Identité de marque ADA" },
      { url: "/images/ada-01.jpg", caption: "Signalétique ADA" },
      { url: "/images/ada-02.jpg", caption: "Supports marketing ADA" },
      { url: "/images/ada-03.jpg", caption: "Communication visuelle ADA" },
      { url: "/images/ada-04.jpg", caption: "Branding digital ADA" },
      { url: "/images/ada-05.jpg", caption: "Application mobile ADA" },
      { url: "/images/ada-06.jpg", caption: "Détail logo ADA" },
      { url: "/images/ada-07.jpg", caption: "Visuel publicitaire ADA" },
    ],
    socialMedia: {
      videos: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADA%20Horizontal%20video%2001-9fdX1SXMzb4O3kvsnhZDsM52i2Ex8v.mp4",
          caption: "Publicité ADA - Paysage",
          orientation: "horizontal",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADA%20vertical%20VIDEO%2001-GrCmaOy10PbzGXWbc2KqVLjVdS2QA1.mp4",
          caption: "Story Instagram ADA - Portrait",
          orientation: "vertical",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADA%20horizontal%20video%2002-gOTLKlMjaL2L3obbYHaudsc4qMUQQG.mp4",
          caption: "Spot TV ADA - Paysage",
          orientation: "horizontal",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADA%20vertical%20video%2002-OWWfRaSuRvaI9zL6HTkR5nWY3WoS12.mp4",
          caption: "Reel TikTok ADA - Portrait",
          orientation: "vertical",
        },
      ],
    },
    tags: ["Branding", "Logo Design", "Marketing", "Automotive", "Web Design"],
  },
}
