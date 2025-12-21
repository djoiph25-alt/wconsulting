"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { useFadeIn } from "@/hooks/use-fade-in"
import { useLanguage } from "@/contexts/language-context"

export function Gallery() {
  const [filter, setFilter] = useState("all")
  const titleFade = useFadeIn()
  const subtitleFade = useFadeIn()
  const filterFade = useFadeIn()
  const { language } = useLanguage()

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
      description: "Identité de marque complète pour torréfacteur parisien de café premium",
      client: "Belleville",
      year: "2024",
    },
    {
      id: "la-piadineria",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Packaging Design"],
      image: "/images/la-piadineria-1.jpg",
      title: "La Piadineria",
      description: "Identité de marque complète pour chaîne italienne de restauration rapide",
      client: "La Piadineria",
      year: "2024",
    },
    {
      id: "bread-france",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Marketing"],
      image: "/images/bread-france-thumbnail.jpg",
      title: "Bread France",
      description: "Identité de marque complète pour boulangerie artisanale française",
      client: "Bread France",
      year: "2024",
    },
    {
      id: "kazidomi",
      category: "Branding",
      tags: ["Branding", "Logo Design", "E-commerce", "Digital Marketing"],
      image: "/images/kazidomi-5.jpg",
      title: "Kazidomi",
      description: "Identité de marque complète pour e-commerce de produits bio et livraison",
      client: "Kazidomi",
      year: "2024",
    },
    {
      id: "askmona",
      category: "Branding",
      tags: ["Branding", "Logo Design", "App Design", "AI", "Tech"],
      image: "/images/askmona-thumbnail.jpg",
      title: "askmona",
      description: "Identité de marque complète pour startup AI dédiée au secteur culturel",
      client: "Ask Mona",
      year: "2024",
    },
    {
      id: "manda",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Web Design", "Real Estate"],
      image: "/images/manda-1.jpg",
      title: "Manda",
      description: "Identité de marque complète pour entreprise immobilière française moderne",
      client: "Manda",
      year: "2024",
    },
    {
      id: "lydia",
      category: "Branding",
      tags: ["Branding", "Logo Design", "App Design", "Fintech"],
      image: "/images/lydia-5.jpg",
      title: "Lydia",
      description: "Identité de marque complète pour application de paiement mobile française",
      client: "Lydia",
      year: "2024",
    },
    {
      id: "carizy",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Web Design", "Automotive"],
      image: "/images/carizy-7.jpg",
      title: "Carizy",
      description: "Identité de marque complète pour plateforme d'achat et location de véhicules",
      client: "Carizy",
      year: "2024",
    },
    {
      id: "veja-sneakers",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Product Design"],
      image: "/images/veja-shoe-heel-detail.jpg",
      title: "VEJA Sneakers",
      description: "Identité de marque complète pour marque de baskets éco-responsable",
      client: "VEJA",
      year: "2024",
    },
    {
      id: "alani-healthcare",
      category: "2024",
      tags: ["Branding", "Web Design", "App Design"],
      image: "/images/7.jpg",
      title: "ALAN Healthcare",
      description: "Identité de marque complète pour une plateforme de santé",
      client: "ALAN",
      year: "2024",
    },
    {
      id: "ada-vehicle-rental",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Marketing", "Automotive", "Web Design"],
      image: "/images/ada-thumbnail.jpg",
      title: "ADA Location de Véhicules",
      description: "Identité de marque complète pour service de location de véhicules premium",
      client: "ADA France",
      year: "2024",
    },
    {
      id: "touma-beaute",
      category: "Branding",
      tags: ["Branding", "Logo Design", "Signage Design", "Environmental Branding"],
      image: "/images/touma-beaute-02.jpg",
      title: "Touma Beauté",
      description: "Identité de marque et signalétique complète pour salon de beauté haut de gamme",
      client: "Touma Beauté",
      year: "2024",
    },
    {
      id: "mealcanteen",
      category: "Branding",
      tags: ["Branding", "Logo Design", "App Design", "Sustainable", "Food Tech"],
      image: "/images/mealcanteen-7.jpg",
      title: "MealCanteen",
      description: "Identité de marque complète pour service de livraison de repas sains et éco-responsables",
      client: "MealCanteen",
      year: "2024",
    },
    {
      id: "miravia",
      category: "Branding",
      tags: ["Branding", "Logo Design", "E-commerce", "Web Design", "App Design"],
      image: "/images/miravia-6.jpg",
      title: "Miravia",
      description: "Identité de marque complète pour plateforme e-commerce et marketplace moderne",
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
              <ProjectCard key={project.id} project={project} index={index} clientLabel={t.client} />
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
}: {
  project: any
  index: number
  clientLabel: string
}) {
  const cardFade = useFadeIn()

  return (
    <Link href={`/projects/${project.id}`}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium text-primary">{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="pt-2 flex items-center text-sm text-muted-foreground">
            <span className="font-medium">{clientLabel}</span>
            <span className="ml-2">{project.client}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
