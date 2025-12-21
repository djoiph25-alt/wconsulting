"use client"
import { Contact } from "@/components/contact"
import { notFound } from "next/navigation"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

type ProjectData = {
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

const projectData: Record<string, ProjectData> = {
  "veja-sneakers": {
    title: "VEJA Sneakers",
    category: "Branding & Product Design",
    client: "VEJA",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Product Design", "Packaging Design"],
    description:
      "Veja est une marque de baskets engagée, transparente et durable, reconnue pour son esthétique minimaliste et son approche responsable de la mode. Nous avons créé une identité visuelle forte qui reflète les valeurs de durabilité et de design conscient de la marque.",
    challenge:
      "Créer une identité de marque distinctive qui communique l'engagement écologique tout en maintenant une esthétique premium et minimaliste. Le défi était de concevoir un système visuel cohérent applicable du packaging aux points de vente.",
    solution:
      "Nous avons développé un logo basé sur la lettre V stylisée avec un symbole d'œil représentant la vision et l'observation. La palette de couleurs noir et blanc (#FFFFFF et #000000) renforce l'approche minimaliste et intemporelle. L'identité s'étend à tous les points de contact : packaging, produits, merchandising et signalétique.",
    results: [
      "Identité visuelle minimaliste et mémorable",
      "Cohérence de marque du produit au point de vente",
      "Renforcement du positionnement premium et éco-responsable",
    ],
    images: [
      {
        url: "/images/veja-shoe-heel-detail.jpg",
        caption: "Détail produit - Logo VEJA sur talon de chaussure en matière suède",
      },
      {
        url: "/images/veja-logo-construction.jpg",
        caption:
          "Construction du logo - Guide expliquant la lettre V et le symbole de l'œil représentant la vision et l'observation",
      },
      {
        url: "/images/veja-brand-description.jpg",
        caption:
          "Présentation de la marque - Vision et valeurs : marque de baskets engagée, transparente et durable avec approche minimaliste",
      },
      {
        url: "/images/veja-socks-colors.jpg",
        caption: "Palette de couleurs - Chaussettes VEJA montrant le contraste noir et blanc (#FFFFFF et #000000)",
      },
      {
        url: "/images/veja-merchandise.jpg",
        caption: "Merchandising - Tote bag, stickers et applications de la marque VEJA",
      },
      {
        url: "/images/veja-tying-shoes.jpg",
        caption: "Mise en situation produit - Photo lifestyle montrant l'utilisation des baskets VEJA",
      },
      {
        url: "/images/veja-storefront-sign.jpg",
        caption: "Signalétique extérieure - Enseigne VEJA en noir et blanc pour boutique",
      },
      {
        url: "/images/veja-box-packaging.jpg",
        caption:
          "Packaging premium - Boîte à chaussures VEJA avec message 'a high performance sole mixing vibram expertise with wild rubber'",
      },
    ],
    tags: ["Branding", "Logo Design", "Product Design", "Sustainable", "Fashion"],
  },
  "alani-healthcare": {
    title: "ALAN Healthcare",
    category: "2024",
    client: "ALAN",
    year: "2024",
    services: ["Brand Identity", "Web Design", "Mobile App", "Marketing Materials"],
    description:
      "ALAN est une plateforme innovante de services de santé qui révolutionne l'accès aux soins. Votre partenaire santé qui prévient, assure et accompagne au quotidien. Nous avons créé une identité de marque complète moderne et accessible qui inspire confiance, utilisant une palette vibrante centrée sur le bleu royal (#5C59F2), le beige (#FFEBD6) et le blanc (#FFFFFF).",
    challenge:
      "Créer une marque moderne et accessible qui inspire confiance dans le secteur de la santé tout en se démarquant par son approche digitale innovante. Le défi était de concevoir une identité visuelle chaleureuse qui humanise les services de santé numériques.",
    solution:
      "Nous avons développé une identité visuelle distinctive avec un logo représentant un stéthoscope stylisé intégré dans la lettre A. La palette de couleurs vibrante centrée sur le bleu royal (#5C59F2) symbolise la confiance et la santé, accompagnée de beige (#FFEBD6) pour la chaleur. Le design system complet s'étend du branding aux uniformes médicaux, applications digitales, cartes de visite et publicité grand format.",
    results: [
      "Identité visuelle moderne et accessible inspirant confiance",
      "Cohérence de marque du digital aux uniformes médicaux et supports marketing",
      "Design system complet applicable sur tous les points de contact",
    ],
    images: [
      {
        url: "/images/1.jpg",
        caption: "Logo en contexte - Professionnel de santé avec stéthoscope, famille et logo ALAN Healthcare",
      },
      {
        url: "/images/2.jpg",
        caption: "Branding merchandising - T-shirt et applications du logo ALAN sur fond beige et violet",
      },
      {
        url: "/images/5.jpg",
        caption: "Uniformes médicaux - Vêtements professionnels ALAN en violet royal avec logo blanc",
      },
      {
        url: "/images/3.jpg",
        caption:
          "Site web - Interface digitale ALAN avec message 'Votre partenaire santé qui prévient, assure et accompagne au quotidien'",
      },
      {
        url: "/images/7.jpg",
        caption:
          "Billboard publicité - 'ALAN, your friend in health - Where insurance, care, and prevention finally work together'",
      },
      {
        url: "/images/6.jpg",
        caption: "Cartes de visite - Design puzzle avec logo ALAN et informations de contact sur fond violet et beige",
      },
      {
        url: "/images/4.jpg",
        caption: "Application mobile - Écran splash avec logo ALAN et palette de couleurs (#FFFFFF, #FFEBD6, #5C59F2)",
      },
    ],
    tags: ["Branding", "Web Design", "App Design", "Healthcare", "UI/UX"],
  },
  "ada-vehicle-rental": {
    title: "ADA Location de Véhicules",
    category: "Branding & Marketing Digital",
    client: "ADA France",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Marketing Materials", "Billboard Design", "Website Design"],
    description:
      "ADA est une marque française spécialisée dans la location de véhicules, reconnue pour son modèle accessible et de proximité. Forte d'un réseau national dense, l'entreprise propose des voitures, utilitaires, véhicules sans permis et scooters, adaptés aux besoins du quotidien comme aux usages professionnels.",
    challenge:
      "Créer une identité visuelle moderne et mémorable qui reflète la mobilité pratique et démocratisée tout en maintenant une image premium pour les services business et transferts hôteliers.",
    solution:
      "Nous avons développé une identité de marque cohérente avec un logo distinctif combinant rouge vif (#EF3340) et noir (#262626), symbolisant l'énergie et le professionnalisme. L'identité visuelle s'adapte à tous les supports, du digital aux grands formats publicitaires, avec un focus particulier sur les services premium comme le Transport Hôtel.",
    results: [
      "Identité visuelle forte et reconnaissable sur tous les supports",
      "Cohérence de marque du digital aux véhicules et billboards",
      "Positionnement premium pour les services business et transferts hôteliers",
      "Interface web moderne avec système de réservation intégré",
    ],
    images: [
      {
        url: "/images/ada-01.jpg",
        caption: "Construction du logo ADA - Guide de grille et proportions géométriques",
      },
      {
        url: "/images/ada-02.jpg",
        caption: "Palette de couleurs - Rouge vif #EF3340, beige #FFEADF et noir #262626",
      },
      {
        url: "/images/ada-03.jpg",
        caption: "Application de la marque - Véhicule de luxe Meilleur voiture Pour location",
      },
      {
        url: "/images/ada-04.jpg",
        caption: "Billboard Transport Hôtel - Campagne publicitaire extérieure avec limousine de prestige",
      },
      {
        url: "/images/ada-05.jpg",
        caption: "Supports marketing - Mockups digitaux showroom et interface web dans véhicule",
      },
      {
        url: "/images/ada-06.jpg",
        caption: "Campagnes social media - Posts Instagram et publicités digitales",
      },
      {
        url: "/images/ada-07.jpg",
        caption: "Site web Transport Hôtel - Interface de réservation et service premium",
      },
    ],
    socialMedia: {
      videos: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADA%20vertical%20VIDEO%2001-GrCmaOy10PbzGXWbc2KqVLjVdS2QA1.mp4",
          caption: "Vidéo verticale ADA - Stories Instagram et TikTok",
          orientation: "vertical",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADA%20Horizontal%20video%2001-9fdX1SXMzb4O3kvsnhZDsM52i2Ex8v.mp4",
          caption: "Vidéo horizontale ADA - Campagne Facebook et YouTube",
          orientation: "horizontal",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADA%20vertical%20video%2002-OWWfRaSuRvaI9zL6HTkR5nWY3WoS12.mp4",
          caption: "Vidéo verticale ADA - Réels Instagram et Stories",
          orientation: "vertical",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ADA%20horizontal%20video%2002-gOTLKlMjaL2L3obbYHaudsc4qMUQQG.mp4",
          caption: "Vidéo horizontale ADA - Publicité digitale et site web",
          orientation: "horizontal",
        },
      ],
    },
    tags: ["Branding", "Logo Design", "Marketing", "Automotive", "Identity Design", "Web Design"],
  },
  "belleville-brulerie": {
    title: "Belleville Brûlerie",
    category: "Branding & Packaging Design",
    client: "Belleville",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Packaging Design", "Merchandise Design"],
    description:
      "Belleville Brûlerie est une marque de café premium parisienne reconnue pour son expertise en torréfaction artisanale. Nous avons créé une identité visuelle élégante et sophistiquée qui reflète la qualité du café et l'artisanat français.",
    challenge:
      "Créer une identité de marque haut de gamme qui évoque l'excellence de la torréfaction française tout en restant accessible et chaleureuse. Le défi était de concevoir un système visuel qui fonctionne aussi bien sur les packagings que dans l'environnement du café.",
    solution:
      "Nous avons développé un logo élégant avec une flamme de vapeur symbolisant la fraîcheur du café. L'identité utilise des tons or et noir pour créer une ambiance premium et parisienne. Le design s'étend du packaging des sachets de café aux uniformes du personnel et aux gobelets.",
    results: [
      "Identité visuelle premium et cohérente sur tous les supports",
      "Packaging distinctif qui se démarque en rayon",
      "Renforcement du positionnement artisanal et parisien",
    ],
    images: [
      {
        url: "/images/belleville-1.jpg",
        caption: "Logo en contexte - Ambiance café avec le logo Belleville Brûlerie Paris",
      },
      {
        url: "/images/belleville-2.jpg",
        caption: "Packaging café - Sachets Gitesi Naturel et Mahembe Bourbon Rouge",
      },
      {
        url: "/images/belleville-3.jpg",
        caption: "Logo doré - Version premium sur fond noir",
      },
      {
        url: "/images/belleville-4.jpg",
        caption: "Merchandising - Tablier noir avec logo doré Belleville",
      },
      {
        url: "/images/belleville-5.jpg",
        caption: "Design produit - Gobelet à emporter avec motifs décoratifs et packaging café",
      },
      {
        url: "/images/belleville-6.jpg",
        caption: "Branding lifestyle - Barista portant le t-shirt de la marque",
      },
    ],
    tags: ["Branding", "Logo Design", "Packaging Design", "Coffee", "Paris"],
  },
  "la-piadineria": {
    title: "La Piadineria",
    category: "Branding & Identity Design",
    client: "La Piadineria",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Packaging Design", "Merchandise Design", "Environmental Branding"],
    description:
      "La Piadineria dal 1994 est une chaîne italienne de restauration rapide spécialisée dans les piadinas authentiques. Nous avons créé une identité visuelle complète qui célèbre la tradition italienne tout en apportant une touche moderne et accessible.",
    challenge:
      "Créer une identité de marque qui évoque l'authenticité italienne et la tradition culinaire tout en restant moderne et adaptée à un concept de restauration rapide. Le défi était de concevoir un système visuel cohérent applicable du logo aux packagings, uniformes et signalétique.",
    solution:
      "Nous avons développé un logo distinctif avec une piadina stylisée, utilisant une palette de couleurs vibrante centrée sur le vert (#006D4D), le rouge (#B00E1B) et le blanc (#FDF9F7). L'identité s'étend à tous les points de contact : packagings, uniformes du personnel, merchandising et décoration des restaurants.",
    results: [
      "Identité visuelle authentique et mémorable reflétant la tradition italienne",
      "Cohérence de marque du packaging aux restaurants",
      "Système de couleurs distinctif applicable sur tous les supports",
    ],
    images: [
      {
        url: "/images/la-piadineria-1.jpg",
        caption: "Logo illustratif - Piadina stylisée avec badges et stickers de la marque La Piadineria",
      },
      {
        url: "/images/la-piadineria-2.jpg",
        caption: "Logo principal - Identité La Piadineria dal 1994 sur fond vert avec symbole piadina",
      },
      {
        url: "/images/la-piadineria-3.jpg",
        caption: "Variante rouge - Logo La Piadineria dal 1994 sur fond rouge vif",
      },
      {
        url: "/images/la-piadineria-4.jpg",
        caption:
          "Palette de couleurs - Piadina avec badges circulaires montrant les trois couleurs principales: rouge #B00E1B, vert #006D4D, blanc #FDF9F7",
      },
      {
        url: "/images/la-piadineria-5.jpg",
        caption:
          "Merchandising uniformes - Personnel portant tabliers blancs avec logos rouge et vert, badge étoile vert sur fond blanc",
      },
      {
        url: "/images/la-piadineria-6.jpg",
        caption: "Packaging emballage - Sac blanc avec logo La Piadineria rouge et étiquette 'RICALDATI A SOLFRE!'",
      },
      {
        url: "/images/la-piadineria-7.jpg",
        caption:
          "Applications environnementales - Signalétique murale rouge, enseigne suspendue rouge, et menus de table avec déclinaisons de logo vert et rouge",
      },
      {
        url: "/images/la-piadineria-8.jpg",
        caption:
          "Applications lifestyle - Déclinaisons du logo sur badges circulaires verts et rouges avec modèle dégustant une piadina",
      },
    ],
    tags: ["Branding", "Logo Design", "Packaging Design", "Italian Food", "Restaurant"],
  },
  "corporate-website": {
    title: "Site Corporate",
    category: "Web Design & Development",
    client: "ConsultCorp",
    year: "2024",
    services: ["Web Design", "UI/UX Design", "Brand Strategy", "Content Strategy"],
    description:
      "Création d'un site web corporate professionnel pour un cabinet de conseil international. Le projet comprend la refonte complète de l'identité digitale avec un focus sur la crédibilité et l'accessibilité.",
    challenge:
      "Créer une présence digitale professionnelle qui inspire confiance tout en se démarquant dans un secteur très compétitif. Le site devait refléter l'expertise et les valeurs du cabinet.",
    solution:
      "Nous avons développé un site web moderne avec une architecture claire, une typographie élégante et une palette sobre. L'interface privilégie la lisibilité et la navigation intuitive pour faciliter l'accès à l'information.",
    results: [
      "Augmentation de 200% du temps passé sur le site",
      "Taux de conversion des demandes de contact +150%",
      "Site responsive optimisé pour tous les appareils",
    ],
    images: [
      {
        url: "/corporate-business-website-professional.jpg",
        caption: "Page d'accueil - Design professionnel et épuré pour cabinet de conseil",
      },
    ],
    tags: ["Web Design", "Branding", "Corporate", "UI/UX"],
  },
  "bread-france": {
    title: "Bread France",
    category: "Branding & Identity Design",
    client: "Bread France",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Packaging Design", "Marketing Materials", "Environmental Branding"],
    description:
      "Bread France est un groupe d'entreprises artisanales spécialisées sur la filière de la boulangerie biologique au levain. Nous avons créé une identité visuelle élégante et authentique qui célèbre la tradition boulangère française tout en apportant une touche moderne et accessible.",
    challenge:
      "Créer une identité de marque qui évoque l'authenticité de la boulangerie artisanale française et l'excellence du pain au levain biologique tout en restant moderne et adaptée à différents contextes. Le défi était de concevoir un système visuel cohérent applicable du logo aux packagings, uniformes, signalétique et supports marketing grand format.",
    solution:
      "Nous avons développé un logo distinctif avec une forme de pain stylisée représentant les 3 bosses caractéristiques de la baguette française. L'identité utilise une palette sophistiquée centrée sur le noir (#000000), le beige (#FCF9ED) et le blanc (#FFFFFF) pour évoquer l'élégance et l'artisanat. Le design s'étend à tous les points de contact : packagings, merchandising avec couteaux et rouleaux à pâtisserie, signalétique extérieure et publicité grand format.",
    results: [
      "Identité visuelle authentique et sophistiquée reflétant l'artisanat français",
      "Cohérence de marque du packaging aux boutiques et supports publicitaires",
      "Système de couleurs élégant applicable sur tous les supports marketing",
    ],
    images: [
      {
        url: "/images/bread-france-7.jpg",
        caption:
          "Publicité aéroport - Billboard dans contexte aéroport avec promotion 'UNE BAGUETTE GRATUITE' et logo Bread France",
      },
      {
        url: "/images/bread-france-5.jpg",
        caption:
          "Merchandising boulangerie - Flat lay d'objets de marque incluant couteau à pain, rouleau à pâtisserie, planche à découper et articles de papeterie avec logo et illustration de blé",
      },
      {
        url: "/images/bread-france-4-new.jpg",
        caption:
          "Application packaging lifestyle - Personne en tablier marron Bread France tenant sac kraft avec pain aux graines multiples visible",
      },
      {
        url: "/images/bread-france-4.jpg",
        caption:
          "Application packaging lifestyle - Personne tenant sac kraft Bread France avec pain aux graines multiples visible",
      },
      {
        url: "/images/bread-france-3.jpg",
        caption:
          "Palette de couleurs - Symboles de pain en noir #000000, beige/tan #FCF9ED et blanc #FFFFFF avec mains pétrissant la pâte sur rouleau à pâtisserie",
      },
      {
        url: "/images/bread-france-2.jpg",
        caption:
          "Présentation de la marque - Logo principal et description: 'Bread-France est un groupe d'entreprises artisanales spécialisées sur la filière de la boulangerie biologique au levain' sur fond beige",
      },
      {
        url: "/images/bread-france-8.jpg",
        caption:
          "Publicité extérieure - Billboard de rue montrant produits de boulangerie avec informations 'PASTRIES BREAD CAKE BISCUITS', horaires 'OPEN EVERYDAY 6PM-9PM' et mention '24/7' dans badge doré",
      },
      {
        url: "/images/bread-france-6.jpg",
        caption:
          "Signalétique boutique - Façade extérieure avec enseigne 'BREAD FRANCE' verticale, vitrine et éléments de décoration incluant vélo vintage",
      },
      {
        url: "/images/bread-france-1.jpg",
        caption:
          "Logo complet - Présentation du logo Bread France avec variations en badges circulaires et pain au levain sur fond beige clair",
      },
    ],
    tags: ["Branding", "Logo Design", "Packaging Design", "French Bakery", "Artisanal"],
  },
  askmona: {
    title: "askmona",
    category: "Branding & Digital Product Design",
    client: "Ask Mona",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "App Design", "Web Design", "Marketing Materials"],
    description:
      "Ask Mona est une startup française spécialisée dans les solutions d'intelligence artificielle pour le secteur culturel. Elle aide principalement les musées, monuments, fondations et institutions culturelles à proposer des guides interactifs pour les visiteurs, transformant l'expérience muséale grâce à l'IA conversationnelle. Nous avons créé une identité visuelle moderne et technologique qui reflète l'innovation tout en restant accessible et engageante.",
    challenge:
      "Créer une identité de marque qui évoque l'intelligence artificielle et la technologie de pointe tout en restant chaleureuse et accessible pour le secteur culturel. Le défi était de concevoir un système visuel cohérent applicable du logo aux applications mobiles, site web, cartes de visite et supports publicitaires grand format.",
    solution:
      "Nous avons développé un logo distinctif avec un robot stylisé en forme de bulle de conversation, symbolisant l'IA conversationnelle. L'identité utilise une palette de couleurs sophistiquée centrée sur le violet (#9F79E6, #7E79E9E7), le bleu marine (#090D3E) et le noir (#060610) pour créer une ambiance tech et moderne. Le design s'étend à tous les points de contact : applications mobile et web, wearables (smartwatch), cartes de visite avec gradient violet, et publicité urbaine grand format.",
    results: [
      "Identité visuelle moderne et technologique reflétant l'innovation IA",
      "Cohérence de marque des applications numériques aux supports physiques",
      "Système de couleurs distinctif applicable sur tous les supports",
    ],
    images: [
      {
        url: "/images/askmona-3.jpg",
        caption:
          "Palette de couleurs et app icon - Couleurs principales violet #9F79E6, bleu #7E79E9E7, bleu marine #090D3E et noir #060610 avec icône d'application askmona sur smartphone",
      },
      {
        url: "/images/askmona-4.jpg",
        caption:
          "Site web desktop - Page d'accueil 'Where AI meets curiosity' montrant l'interface de conversation avec questions interactives sur fond sombre",
      },
      {
        url: "/images/askmona-1.jpg",
        caption: "Application wearable - Smartwatch avec bracelet violet affichant le logo robot askmona sur l'écran",
      },
      {
        url: "/images/askmona-5.jpg",
        caption:
          "Cartes de visite - Design avec gradient violet à noir montrant logo robot, informations de contact et verso avec motif tech",
      },
      {
        url: "/images/askmona-2.jpg",
        caption:
          "Présentation de la marque - Logo principal avec description: startup française spécialisée dans les solutions d'IA pour le secteur culturel aidant musées et institutions",
      },
      {
        url: "/images/askmona-6.jpg",
        caption:
          "Publicité urbaine - Billboard de rue en contexte urbain montrant événement 'TECH TALK' avec silhouette et gradient violet, informations 'How AI can help your business' le 14 octobre",
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
      "Manda est une entreprise immobilière française moderne et digitale, née de la fusion des acteurs Flatlooker et Hello Syndic, et présente aujourd'hui comme un acteur innovant du secteur immobilier en France. Nous avons créé une identité visuelle moderne et accessible qui reflète l'innovation digitale tout en restant chaleureuse et professionnelle.",
    challenge:
      "Créer une identité de marque qui évoque la modernité et l'innovation digitale du secteur immobilier tout en restant accessible et rassurante pour les clients. Le défi était de concevoir un système visuel cohérent applicable du logo au site web, supports marketing et publicité grand format.",
    solution:
      "Nous avons développé une identité de marque cohérente avec un logo distinctif combinant rouge vif (#EF3340) et noir (#262626), symbolisant l'énergie et le professionnalisme. L'identité visuelle s'adapte à tous les supports, du digital aux grands formats publicitaires, avec un focus particulier sur les services premium comme le Transport Hôtel.",
    results: [
      "Identité visuelle forte et reconnaissable sur tous les supports",
      "Cohérence de marque du digital aux véhicules et billboards",
      "Positionnement premium pour les services business et transferts hôteliers",
      "Interface web moderne avec système de réservation intégré",
    ],
    images: [
      {
        url: "/images/manda-1.jpg",
        caption: "Logo en contexte - Logo Manda orange sur immeuble résidentiel noir et blanc",
      },
      {
        url: "/images/manda-2.jpg",
        caption:
          "Présentation de la marque - Logo et description: 'Manda est une entreprise immobilière française moderne et digitale, née de la fusion des acteurs Flatlooker et Hello Syndic'",
      },
      {
        url: "/images/manda-3.jpg",
        caption:
          "Palette de couleurs et app icon - Couleurs principales noir #141414, blanc #FFFFFF, vert sauge #87B491 et orange #F7A04B avec icône d'application sur smartphone",
      },
      {
        url: "/images/manda-4.jpg",
        caption:
          "Site web desktop - Page d'accueil 'Optez pour une gestion locative moderne et rentable!' montrant l'interface web avec formes organiques vertes",
      },
      {
        url: "/images/manda-5.jpg",
        caption:
          "Publicité extérieure - Billboard de rue 'FIND YOUR DREAM HOME' avec visuels d'appartements et informations prix 'PRICE STARTED AT $1,200,0'",
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
      "Lydia est une application de paiement mobile française innovante qui permet d'envoyer et recevoir de l'argent instantanément, créer des cagnottes partagées et gérer ses finances au quotidien. Nous avons créé une identité visuelle moderne et accessible qui reflète la simplicité et la confiance tout en restant dynamique et engageante.",
    challenge:
      "Créer une identité de marque qui évoque la sécurité financière et la technologie de pointe tout en restant simple et accessible pour tous les utilisateurs. Le défi était de concevoir un système visuel cohérent applicable du logo à l'application mobile, supports marketing et publicité grand format.",
    solution:
      "Nous avons développé un logo distinctif avec un symbole de billets stylisés représentant l'argent et les paiements. L'identité utilise une palette de couleurs sophistiquée centrée sur le bleu royal (#012C73), le bleu clair (#0080FF) et le bleu pâle (#E4F3FD) pour créer une ambiance de confiance et de modernité. Le design s'étend à tous les points de contact : application mobile avec interface de paiement et cagnottes, logo sur différents supports et publicité extérieure.",
    results: [
      "Identité visuelle moderne et sécurisante reflétant l'innovation fintech",
      "Cohérence de marque de l'application mobile aux supports publicitaires",
      "Système de couleurs distinctif applicable sur tous les supports",
    ],
    images: [
      {
        url: "/images/lydia-4.jpg",
        caption:
          "Palette de couleurs et app icon - Couleurs principales bleu royal #012C73, bleu #0080FF et bleu pâle #E4F3FD avec icône d'application Lydia sur smartphone",
      },
      {
        url: "/images/lydia-5.jpg",
        caption:
          "Application mobile - Interface montrant écran de paiement avec keypad numérique et écran Cagnottes avec différentes économies (Porte-monnaie Lydia, Anniv Max, EVJF Nono, Road Trip Samy)",
      },
      {
        url: "/images/lydia-2.jpg",
        caption: "Logo blanc - Version principale du logo Lydia avec symbole de billets sur fond bleu vif",
      },
      {
        url: "/images/lydia-6.jpg",
        caption: "Mockup mobile - Main tenant smartphone affichant le logo Lydia sur fond bleu royal",
      },
      {
        url: "/images/lydia-3.jpg",
        caption: "Logo blanc - Version du logo Lydia sur fond bleu marine foncé",
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
      "Carizy est une plateforme française innovante spécialisée dans l'achat et la location de véhicules en ligne. Nous avons créé une identité visuelle moderne et dynamique qui reflète la simplicité et l'accessibilité de la plateforme.",
    challenge:
      "Créer une identité de marque moderne qui évoque la confiance et la simplicité dans le secteur automobile tout en se démarquant par son approche digitale.",
    solution:
      "Nous avons développé une identité visuelle distinctive avec une palette de couleurs dynamique et un logo mémorable. Le design s'étend à tous les points de contact numériques et physiques.",
    results: [
      "Identité visuelle moderne et dynamique",
      "Cohérence de marque sur tous les supports digitaux",
      "Positionnement fort dans le secteur automobile digital",
    ],
    images: [
      {
        url: "/images/carizy-7.jpg",
        caption: "Présentation de la marque Carizy - Plateforme d'achat et location de véhicules",
      },
    ],
    tags: ["Branding", "Logo Design", "Web Design", "Automotive"],
  },
  kazidomi: {
    title: "Kazidomi",
    category: "Branding & E-commerce Design",
    client: "Kazidomi",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "E-commerce Design", "Digital Marketing"],
    description:
      "Kazidomi est une plateforme e-commerce belge spécialisée dans les produits bio et la livraison durable. Nous avons créé une identité visuelle moderne et écologique qui reflète les valeurs de durabilité et de santé de la marque.",
    challenge:
      "Créer une identité de marque qui évoque la santé, le bien-être et la durabilité tout en restant moderne et attractive pour le e-commerce.",
    solution:
      "Nous avons développé une identité visuelle fraîche et naturelle avec une palette de couleurs inspirée par la nature. Le design s'étend du logo au site e-commerce et aux supports marketing.",
    results: [
      "Identité visuelle écologique et moderne",
      "Cohérence de marque sur la plateforme e-commerce",
      "Renforcement du positionnement bio et durable",
    ],
    images: [
      {
        url: "/images/kazidomi-5.jpg",
        caption: "Présentation de la marque Kazidomi - E-commerce de produits bio et livraison durable",
      },
    ],
    socialMedia: {
      videos: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KAZIDOMI%20horizontal%20video%2001-4yFHxL6gEn4RvUZrkVvRgofnJQmmav.mp4",
          caption: "Vidéo horizontale Kazidomi - Campagne e-commerce et réseaux sociaux",
          orientation: "horizontal",
        },
      ],
    },
    tags: ["Branding", "Logo Design", "E-commerce", "Digital Marketing"],
  },
  "touma-beaute": {
    title: "Touma Beauté",
    category: "Branding & Signalétique",
    client: "Touma Beauté",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "Signage Design", "Environmental Branding", "Marketing Materials"],
    description:
      "Touma Beauté est un salon de beauté haut de gamme offrant des services personnalisés de soins esthétiques. Nous avons créé une identité visuelle élégante et botanique qui reflète la sophistication et le bien-être, avec un logo représentant une femme stylisée entourée d'éléments floraux.",
    challenge:
      "Créer une identité de marque raffinée qui évoque l'élégance et le bien-être tout en restant mémorable et facilement reconnaissable. Le défi était de concevoir un système de signalétique cohérent applicable aux drapeaux publicitaires, panneaux de parking, enseignes murales et supports de communication.",
    solution:
      "Nous avons développé un logo distinctif avec une illustration florale art nouveau représentant une femme entourée de roses et de feuilles. L'identité utilise une palette sophistiquée de beige (#FFEBD6), or (#C9A86A) et noir pour créer une ambiance premium et apaisante. Le design s'étend à tous les points de contact : drapeaux publicitaires, signalétique de parking, panneaux muraux et plaque en verre.",
    results: [
      "Identité visuelle élégante et botanique reflétant le luxe et le bien-être",
      "Système de signalétique cohérent pour l'ensemble de l'établissement",
      "Visibilité renforcée avec drapeaux et panneaux extérieurs distinctifs",
    ],
    images: [
      {
        url: "/images/touma-beaute-02.jpg",
        caption: "Drapeaux publicitaires - Beach flags noir et beige avec logo et informations de contact",
      },
      {
        url: "/images/touma-beaute-01.jpg",
        caption: "Variantes de drapeaux - Beach flags blanc et beige/or avec illustration florale",
      },
      {
        url: "/images/touma-beaute-05.jpg",
        caption: "Art mural - Illustration florale dorée sur panneau blanc avec logo Touma Beauté",
      },
      {
        url: "/images/touma-beaute-03.jpg",
        caption:
          "Plaque signalétique - Panneau en verre avec logo et coordonnées (App.C02, 22 999 191, www.touma-beaute.com)",
      },
      {
        url: "/images/touma-beaute-04.jpg",
        caption: "Panneau directionnel - Flèche de signalisation avec logo et informations de contact",
      },
      {
        url: "/images/touma-beaute-07.jpg",
        caption: "Signalétique parking - Panneaux muraux de réservation parking pour clients",
      },
      {
        url: "/images/touma-beaute-06.jpg",
        caption:
          "Variantes parking - Panneaux de réservation en couleurs sage green et blanc/beige avec illustration florale",
      },
    ],
    tags: ["Branding", "Logo Design", "Signage Design", "Beauty", "Environmental Branding"],
  },
  mealcanteen: {
    title: "MealCanteen",
    category: "Branding & Digital Product Design",
    client: "MealCanteen",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "App Design", "Packaging Design", "Marketing Materials"],
    description:
      "MealCanteen est une entreprise innovante de livraison de repas sains et éco-responsables qui s'engage pour l'environnement. Spécialisée dans la cuisine nutritive 100% recyclable, MealCanteen propose des solutions de restauration durables avec un focus sur la réduction des déchets alimentaires. La marque se positionne comme un acteur clé de l'alimentation saine avec le message 'Healthy Food Delicious & Nutritious - Eat-Love-Repeat'.",
    challenge:
      "Créer une identité de marque forte qui communique simultanément l'engagement écologique, la fraîcheur des produits et la praticité du service de livraison. Le défi était de concevoir un système visuel cohérent applicable de l'application mobile aux uniformes de livreurs, en passant par les emballages recyclables et la signalétique.",
    solution:
      "Nous avons développé un logo distinctif avec une forme en 'M' intégrant une fourchette et un couteau stylisés, symbolisant le repas. La palette de couleurs vibrante centrée sur le vert (#206C2E et #71DC5C) renforce l'engagement écologique et la fraîcheur. L'identité s'étend à tous les points de contact : application mobile, packaging recyclable, uniformes de livraison, merchandising et site web, avec une attention particulière portée au symbole de recyclage omniprésent.",
    results: [
      "Identité visuelle cohérente reflétant les valeurs écologiques et la fraîcheur",
      "Système de marque complet du digital aux uniformes et emballages",
      "Communication claire de l'engagement 100% recyclable",
      "Design d'application moderne avec message inspirant 'Eat-Love-Repeat'",
    ],
    images: [
      {
        url: "/images/mealcanteen-1.jpg",
        caption: "Logo principal - Identité MealCanteen avec symbole M intégrant fourchette et couteau sur fond beige",
      },
      {
        url: "/images/mealcanteen-2.jpg",
        caption:
          "Variante verte - Logo MealCanteen sur fond vert vif avec variations de nuances de vert pour la marque",
      },
      {
        url: "/images/mealcanteen-3.jpg",
        caption:
          "Uniformes livraison - Livreur MealCanteen portant sac isotherme vert avec logo et palette de couleurs (#206C2E, #71DC5C, #FBF8EC)",
      },
      {
        url: "/images/mealcanteen-4.jpg",
        caption:
          "Packaging recyclable - Personne tenant bac vert de compostage/recyclage avec déchets organiques et symbole de recyclage",
      },
      {
        url: "/images/mealcanteen-5.jpg",
        caption: "Application mobile - Écran smartphone avec app MealCanteen et badge de notification",
      },
      {
        url: "/images/mealcanteen-6.jpg",
        caption:
          "Engagement écologique - Bac de recyclage vert avec emballages papier kraft recyclables et logo MealCanteen, plantes vertes en arrière-plan",
      },
      {
        url: "/images/mealcanteen-7.jpg",
        caption:
          "Site web - Interface laptop affichant 'Healthy Food Delicious & Nutritious - Eat-Love-Repeat' avec bowl de salade fraîche MealCanteen, statistiques '100% MADE RECYCLABLE' et '100% OF THE TIME'",
      },
      {
        url: "/images/mealcanteen-8.jpg",
        caption:
          "Packaging produit - Bowl de salade MealCanteen vert foncé avec couvercle transparent et détails de la marque sur fond vert",
      },
    ],
    tags: ["Branding", "Logo Design", "App Design", "Sustainable", "Food Tech", "Eco-friendly"],
  },
  miravia: {
    title: "Miravia",
    category: "Branding & E-commerce Design",
    client: "Miravia",
    year: "2024",
    services: ["Brand Identity", "Logo Design", "E-commerce", "Web Design", "App Design", "Marketing Materials"],
    description:
      "Miravia est une plateforme e-commerce moderne et innovante qui révolutionne l'expérience d'achat en ligne. La marque propose une marketplace dynamique avec une sélection de produits variés et une expérience utilisateur optimisée. Nous avons créé une identité de marque complète qui reflète la modernité, l'accessibilité et la confiance de la plateforme.",
    challenge:
      "Développer une identité de marque qui reflète la modernité et l'accessibilité de la plateforme tout en créant une expérience utilisateur cohérente à travers tous les points de contact digitaux et physiques. Le défi était de concevoir un système visuel mémorable applicable de l'application mobile aux uniformes de livreurs et emballages.",
    solution:
      "Nous avons développé un logo distinctif avec une forme de store stylisée symbolisant le commerce, utilisant une palette de couleurs vibrante centrée sur le violet (#6749EB, #6B5FF2, #EDEBFD). L'identité s'étend à tous les points de contact : application mobile, site web e-commerce, packaging de livraison, uniformes et supports marketing. Le design system permet une déclinaison harmonieuse sur tous les supports.",
    results: [
      "Identité de marque distinctive et cohérente reflétant l'innovation e-commerce",
      "Expérience utilisateur optimisée sur web et mobile",
      "Système de design évolutif et flexible applicable sur tous les supports",
      "Communication visuelle forte du packaging aux points de vente",
    ],
    images: [
      {
        url: "/images/miravia-1.jpg",
        caption: "Application mobile - Splash screen avec logo Miravia en violet sur fond blanc",
      },
      {
        url: "/images/miravia-2.jpg",
        caption: "Uniformes livraison - Livreur à scooter portant sac isotherme Miravia violet et blanc",
      },
      {
        url: "/images/miravia-3.jpg",
        caption:
          "Variantes du logo - Trois écrans smartphone montrant les variations de couleur du logo Miravia (violet, gris, blanc)",
      },
      {
        url: "/images/miravia-4.jpg",
        caption:
          "Packaging et palette - Boîtes kraft avec logo Miravia et palette de couleurs (#6749EB, #6B5FF2, #EDEBFD)",
      },
      {
        url: "/images/miravia-5.jpg",
        caption: "Icône application - Écran smartphone iOS montrant l'icône app Miravia avec badge de notification",
      },
      {
        url: "/images/miravia-6.jpg",
        caption:
          "Site web e-commerce - Interface laptop montrant la page d'accueil avec 'Super SALE 35% OFF' et expérience shopping en ligne",
      },
      {
        url: "/images/miravia-7.jpg",
        caption: "Packaging livraison - Boîtes violettes Miravia empilées près d'un camion de livraison",
      },
    ],
    tags: ["Branding", "Logo Design", "E-commerce", "Web Design", "App Design", "Marketplace"],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectData[id as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  return <ProjectPageContent project={project} />
}

function ProjectPageContent({ project }: { project: any }) {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Back Button */}
          <Link
            href="/#gallery"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = "/#gallery"
            }}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.gallery.backToProjects}
          </Link>

          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/50">
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Project Header */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{project.category}</p>
              </div>

              {/* Project Meta */}
              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground font-medium">Client</div>
                  <div className="text-lg font-semibold text-foreground">{project.client}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground font-medium">Année</div>
                  <div className="text-lg font-semibold text-foreground">{project.year}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground font-medium">Services</div>
                  <div className="text-lg font-semibold text-foreground">{project.services.join(", ")}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Images */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto space-y-8">
              {project.images.map((image: { url: string; caption: string }, index: number) => (
                <div key={index} className="space-y-4">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-black">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.caption}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {image.caption && <p className="text-center text-sm text-muted-foreground">{image.caption}</p>}
                </div>
              ))}
            </div>
          </section>

          {project.socialMedia && project.socialMedia.videos.length > 0 && (
            <section className="py-16 bg-card/30">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">Social Media</h2>
                  <p className="text-lg text-muted-foreground">
                    Contenu vidéo pour les réseaux sociaux et campagnes publicitaires
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {project.socialMedia.videos.map(
                    (
                      video: { url: string; caption: string; orientation: "vertical" | "horizontal" },
                      index: number,
                    ) => (
                      <div key={index} className="space-y-4">
                        <div
                          className={`relative overflow-hidden rounded-2xl bg-black ${
                            video.orientation === "vertical" ? "aspect-[9/16] max-w-md mx-auto" : "aspect-video"
                          }`}
                        >
                          <video
                            src={video.url}
                            controls
                            playsInline
                            className="w-full h-full object-contain"
                            preload="metadata"
                          >
                            Votre navigateur ne supporte pas la lecture de vidéos.
                          </video>
                        </div>
                        {video.caption && <p className="text-center text-sm text-muted-foreground">{video.caption}</p>}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Project Details */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Le Projet</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Challenge */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Le Défi</h2>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">La Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Les Résultats</h2>
                <ul className="space-y-4">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-foreground leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Prêt à créer quelque chose d'exceptionnel ?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Discutons de votre projet et voyons comment nous pouvons vous aider.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/25"
            >
              Démarrer un projet
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  )
}
