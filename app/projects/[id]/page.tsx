"use client"
import { Contact } from "@/components/contact"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getProjectTranslation } from "@/lib/project-translations"
import { useLanguage } from "@/contexts/language-context"
import { projectData, type ProjectData } from "@/lib/project-data"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectData[id as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  return <ProjectPageContent id={id} project={project} />
}

function ProjectPageContent({ id, project }: { id: string; project: ProjectData }) {
  const { language } = useLanguage()
  const translation = getProjectTranslation(id, language)

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
            {/* Use translation for "Back to Projects" */}
            {language === "fr" ? "Retour à la galerie" : language === "en" ? "Back to Projects" : "Torna alla Galleria"}
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
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {translation?.category || project.category}
                </p>
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
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.caption}
                      className="w-full h-full object-cover" // changed from object-contain to object-cover for full display
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
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    {language === "fr" ? "Médias Sociaux" : language === "en" ? "Social Media" : "Media Sociali"}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {language === "fr"
                      ? "Contenu vidéo pour les réseaux sociaux et campagnes publicitaires"
                      : language === "en"
                        ? "Video content for social media and advertising campaigns"
                        : "Contenuti video per social media e campagne pubblicitarie"}
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
                            className="w-full h-full object-cover" // changed to object-cover
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
                <h2 className="text-3xl font-bold text-foreground">
                  {language === "fr" ? "Le Projet" : language === "en" ? "The Project" : "Il Progetto"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {translation?.description || project.description}
                </p>
              </div>

              {/* Challenge */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  {language === "fr" ? "Le Défi" : language === "en" ? "The Challenge" : "La Sfida"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{translation?.challenge || project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  {language === "fr" ? "La Solution" : language === "en" ? "The Solution" : "La Soluzione"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{translation?.solution || project.solution}</p>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  {language === "fr" ? "Les Résultats" : language === "en" ? "The Results" : "I Risultati"}
                </h2>
                <ul className="space-y-4">
                  {(translation?.results || project.results).map((result: string, index: number) => (
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
              {language === "fr"
                ? "Prêt à créer quelque chose d'exceptionnel ?"
                : language === "en"
                  ? "Ready to create something exceptional?"
                  : "Pronti a creare qualcosa di eccezionale?"}
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              {language === "fr"
                ? "Discutons de votre projet et voyons comment nous pouvons vous aider."
                : language === "en"
                  ? "Let's discuss your project and see how we can help."
                  : "Parliamo del tuo progetto e vediamo come possiamo aiutarti."}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/25"
            >
              {language === "fr"
                ? "Démarrer un projet"
                : language === "en"
                  ? "Start a project"
                  : "Iniziare un progetto"}
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
