"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { useFadeIn } from "@/hooks/use-fade-in"
import { useLanguage } from "@/contexts/language-context"
import { getProjectTranslation } from "@/lib/project-translations"

export function Gallery() {
  const [filter, setFilter] = useState("all")
  const titleFade = useFadeIn()
  const subtitleFade = useFadeIn()
  const filterFade = useFadeIn()
  const { language } = useLanguage()

  const langPrefix = language === "fr" ? "" : `/${language}`

  const translations = {
    fr: {
      title: "Nos Projets",
      subtitle: "Découvrez notre portfolio de créations digitales, branding et stratégies marketing",
      allProjects: "Tous les projets",
      startProject: "Démarrer un projet",
      client: "Client:",
    },
    en: {
      title: "Our Projects",
      subtitle: "Discover our portfolio of digital creations, branding and marketing strategies",
      allProjects: "All projects",
      startProject: "Start a project",
      client: "Client:",
    },
    it: {
      title: "I Nostri Progetti",
      subtitle: "Scoprite il nostro portfolio di creazioni digitali, branding e strategie di marketing",
      allProjects: "Tutti i progetti",
      startProject: "Avvia un progetto",
      client: "Cliente:",
    },
  }

  const t = translations[language]

  const projects = [
    {
      id: "belleville-brulerie",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Packaging Design"],
      image: "/images/belleville-1.jpg",
      title: "Belleville Brûlerie",
      description:
        language === "fr"
          ? "Identité de marque complète pour torréfacteur parisien de café premium"
          : language === "en"
            ? "Complete brand identity for premium Parisian coffee roaster"
            : "Identità di marca completa per torrefazione parigina di caffè premium",
      client: "Belleville",
      year: "2024",
    },
    {
      id: "la-piadineria",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Packaging Design"],
      image: "/images/la-piadineria-1.jpg",
      title: "La Piadineria",
      description:
        language === "fr"
          ? "Identité de marque complète pour chaîne italienne de restauration rapide"
          : language === "en"
            ? "Complete brand identity for Italian fast-food chain"
            : "Identità di marca completa per catena italiana di fast food",
      client: "La Piadineria",
      year: "2024",
    },
    {
      id: "bread-france",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Marketing"],
      image: "/images/bread-france-thumbnail.jpg",
      title: "Bread France",
      description:
        language === "fr"
          ? "Identité de marque complète pour boulangerie artisanale française"
          : language === "en"
            ? "Complete brand identity for French artisanal bakery"
            : "Identità di marca completa per panificio artigianale francese",
      client: "Bread France",
      year: "2024",
    },
    {
      id: "kazidomi",
      category: "Branding",
      tags: ["Branding", "Logo Design", "E-commerce", "Digital Marketing"],
      image: "/images/kazidomi-5.jpg",
      title: "Kazidomi",
      description:
        language === "fr"
          ? "Identité de marque complète pour e-commerce de produits bio et livraison"
          : language === "en"
            ? "Complete brand identity for organic products e-commerce and delivery"
            : "Identità di marca completa per e-commerce di prodotti biologici e consegna",
      client: "Kazidomi",
      year: "2024",
    },
    {
      id: "askmona",
      category: "Branding",
      tags: ["Branding", "Logo Design", "App Design", "AI", "Tech"],
      image: "/images/askmona-thumbnail.jpg",
      title: "askmona",
      description:
        language === "fr"
          ? "Identité de marque complète pour startup AI dédiée au secteur culturel"
          : language === "en"
            ? "Complete brand identity for AI startup dedicated to cultural sector"
            : "Identità di marca completa per startup AI dedicata al settore culturale",
      client: "Ask Mona",
      year: "2024",
    },
    {
      id: "manda",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Web Design", "Real Estate"],
      image: "/images/manda-1.jpg",
      title: "Manda",
      description:
        language === "fr"
          ? "Identité de marque complète pour entreprise immobilière française moderne"
          : language === "en"
            ? "Complete brand identity for modern French real estate company"
            : "Identità di marca completa per azienda immobiliare francese moderna",
      client: "Manda",
      year: "2024",
    },
    {
      id: "lydia",
      category: "Branding",
      tags: ["Branding", "Logo Design", "App Design", "Fintech"],
      image: "/images/lydia-5.jpg",
      title: "Lydia",
      description:
        language === "fr"
          ? "Identité de marque complète pour application de paiement mobile française"
          : language === "en"
            ? "Complete brand identity for French mobile payment application"
            : "Identità di marca completa per applicazione di pagamento mobile francese",
      client: "Lydia",
      year: "2024",
    },
    {
      id: "carizy",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Web Design", "Automotive"],
      image: "/images/carizy-7.jpg",
      title: "Carizy",
      description:
        language === "fr"
          ? "Identité de marque complète pour plateforme d'achat et location de véhicules"
          : language === "en"
            ? "Complete brand identity for vehicle purchase and rental platform"
            : "Identità di marca completa per piattaforma di acquisto e noleggio veicoli",
      client: "Carizy",
      year: "2024",
    },
    {
      id: "veja-sneakers",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Product Design"],
      image: "/images/veja-shoe-heel-detail.jpg",
      title: "VEJA Sneakers",
      description:
        language === "fr"
          ? "Identité de marque complète pour marque de baskets éco-responsable"
          : language === "en"
            ? "Complete brand identity for eco-responsible sneaker brand"
            : "Identità di marca completa per marchio di sneaker eco-responsabili",
      client: "VEJA",
      year: "2024",
    },
    {
      id: "alani-healthcare",
      category: "2024",
      tags: ["Branding", "Web Design", "App Design"],
      image: "/images/7.jpg",
      title: "ALAN Healthcare",
      description:
        language === "fr"
          ? "Identité de marque complète pour une plateforme de santé"
          : language === "en"
            ? "Complete brand identity for a health platform"
            : "Identità di marca completa per una piattaforma sanitaria",
      client: "ALAN",
      year: "2024",
    },
    {
      id: "ada-vehicle-rental",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Marketing", "Automotive", "Web Design"],
      image: "/images/ada-thumbnail.jpg",
      title: "ADA Location de Véhicules",
      description:
        language === "fr"
          ? "Identité de marque complète pour service de location de véhicules premium"
          : language === "en"
            ? "Complete brand identity for premium vehicle rental service"
            : "Identità di marca completa per servizio di noleggio veicoli premium",
      client: "ADA France",
      year: "2024",
    },
    {
      id: "touma-beaute",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Signage Design", "Environmental Branding"],
      image: "/images/touma-beaute-02.jpg",
      title: "Touma Beauté",
      description:
        language === "fr"
          ? "Identité de marque et signalétique complète pour salon de beauté haut de gamme"
          : language === "en"
            ? "Complete brand identity and signage for high-end beauty salon"
            : "Identità di marca e segnaletica completa per salone di bellezza di alto livello",
      client: "Touma Beauté",
      year: "2024",
    },
    {
      id: "mealcanteen",
      category: "Branding",
      tags: ["Branding", "Logo Design", "App Design", "Sustainable", "Food Tech"],
      image: "/images/mealcanteen-7.jpg",
      title: "MealCanteen",
      description:
        language === "fr"
          ? "Identité de marque complète pour service de livraison de repas sains et éco-responsables"
          : language === "en"
            ? "Complete brand identity for healthy and eco-responsible meal delivery service"
            : "Identità di marca completa per servizio di consegna di pasti sani ed eco-responsabili",
      client: "MealCanteen",
      year: "2024",
    },
    {
      id: "miravia",
      category: "Branding",
      tags: ["Branding", "Logo Design", "E-commerce", "Web Design", "App Design"],
      image: "/images/miravia-6.jpg",
      title: "Miravia",
      description:
        language === "fr"
          ? "Identité de marque complète pour plateforme e-commerce et marketplace moderne"
          : language === "en"
            ? "Complete brand identity for modern e-commerce platform and marketplace"
            : "Identità di marca completa per piattaforma e-commerce e marketplace moderna",
      client: "Miravia",
      year: "2024",
    },
  ]

  const categories = ["all", "Branding", "Web Design", "App Design", "Digital Marketing", "E-commerce", "Automotive"]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2
                ref={titleFade.ref}
                className={`text-5xl md:text-6xl font-bold text-foreground text-balance transition-all duration-1000 ${
                  titleFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {t.title}
              </h2>
              <p
                ref={subtitleFade.ref}
                className={`text-xl text-muted-foreground max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-200 ${
                  subtitleFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {t.subtitle}
              </p>
            </div>

            <div
              ref={filterFade.ref}
              className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-300 ${
                filterFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  {cat === "all" ? t.allProjects : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                clientLabel={t.client}
                language={language}
                langPrefix={langPrefix}
              />
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/25"
            >
              {t.startProject}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  clientLabel,
  language,
  langPrefix,
}: {
  project: any
  index: number
  clientLabel: string
  language: "fr" | "en" | "it"
  langPrefix: string
}) {
  const cardFade = useFadeIn()

  const translation = getProjectTranslation(project.id, language)
  const description = translation?.description || project.description

  return (
    <Link href={`${langPrefix}/projects/${project.id}`}>
      <Card
        ref={cardFade.ref}
        className={`group overflow-hidden border-0 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-1000 cursor-pointer h-full ${
          cardFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${(index % 6) * 100}ms` }}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary">
            <span>{project.category}</span>
            <span className="text-muted-foreground">{project.year}</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
          </div>
          <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">{clientLabel}</span>
              <span>{project.client}</span>
            </div>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Card>
    </Link>
  )
}
