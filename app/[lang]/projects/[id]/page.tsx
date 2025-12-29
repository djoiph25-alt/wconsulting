import { Contact } from "@/components/contact"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Language } from "@/lib/translations"
import { getProjectTranslation } from "@/lib/project-translations"
import { projectData } from "@/lib/project-data"

const projectPageTranslations = {
  fr: {
    backToProjects: "Retour à la galerie",
    client: "Client",
    year: "Année",
    services: "Services",
    theProject: "Le Projet",
    theChallenge: "Le Défi",
    theSolution: "La Solution",
    theResults: "Les Résultats",
    readyToCreate: "Prêt à créer quelque chose d'exceptionnel ?",
    letsDiscuss: "Discutons de votre projet et voyons comment nous pouvons vous aider.",
    startProject: "Démarrer un projet",
    socialMedia: "Médias Sociaux",
    socialMediaDesc: "Contenu vidéo pour les réseaux sociaux et campagnes publicitaires",
  },
  en: {
    backToProjects: "Back to gallery",
    client: "Client",
    year: "Year",
    services: "Services",
    theProject: "The Project",
    theChallenge: "The Challenge",
    theSolution: "The Solution",
    theResults: "The Results",
    readyToCreate: "Ready to create something exceptional?",
    letsDiscuss: "Let's discuss your project and see how we can help.",
    startProject: "Start a project",
    socialMedia: "Social Media",
    socialMediaDesc: "Video content for social media and advertising campaigns",
  },
  it: {
    backToProjects: "Torna alla galleria",
    client: "Cliente",
    year: "Anno",
    services: "Servizi",
    theProject: "Il Progetto",
    theChallenge: "La Sfida",
    theSolution: "La Soluzione",
    theResults: "I Risultati",
    readyToCreate: "Pronti a creare qualcosa di eccezionale?",
    letsDiscuss: "Parliamo del tuo progetto e vediamo come possiamo aiutarti.",
    startProject: "Iniziare un progetto",
    socialMedia: "Media Sociali",
    socialMediaDesc: "Contenuti video per social media e campagne pubblicitarie",
  },
}

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

type PageProps = {
  params: Promise<{ id: string; lang: Language }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { id, lang } = await params
  const project = projectData[id]

  if (!project) {
    notFound()
  }

  const tr = getProjectTranslation(id, lang)
  const labels = projectPageTranslations[lang]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Back Button */}
          <Link
            href={`/${lang === "fr" ? "" : lang}/#gallery`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            {labels.backToProjects}
          </Link>

          {/* Hero Section */}
          <section className="pt-16 pb-16">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{project.title}</h1>
                <p className="text-2xl text-gray-400">{tr?.category || project.category}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">{labels.client}</h3>
                  <p className="text-lg text-white font-semibold">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">{labels.year}</h3>
                  <p className="text-lg text-white font-semibold">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">{labels.services}</h3>
                  <p className="text-lg text-white font-semibold">
                    {Array.isArray(project.services) ? project.services.join(", ") : project.services}
                  </p>
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
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media */}
          {project.socialMedia && project.socialMedia.videos.length > 0 && (
            <section className="py-16 bg-gray-900/30 rounded-3xl px-8">
              <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">{labels.socialMedia}</h2>
                  <p className="text-lg text-gray-400">{labels.socialMediaDesc}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {project.socialMedia.videos.map(
                    (
                      video: { url: string; caption: string; orientation: "vertical" | "horizontal" },
                      index: number,
                    ) => (
                      <div key={index} className="space-y-4">
                        <div
                          className={`relative overflow-hidden rounded-2xl bg-black shadow-xl ${
                            video.orientation === "vertical" ? "aspect-[9/16] max-w-sm mx-auto" : "aspect-video w-full"
                          }`}
                        >
                          <video
                            src={video.url}
                            controls
                            playsInline
                            className="w-full h-full object-cover"
                            preload="metadata"
                          >
                            {lang === "fr"
                              ? "Votre navigateur ne supporte pas la lecture de vidéos."
                              : lang === "en"
                                ? "Your browser does not support video playback."
                                : "Il tuo browser non supporta la riproduzione video."}
                          </video>
                        </div>
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
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">{labels.theProject}</h2>
                <p className="text-gray-400 leading-relaxed">{tr?.description || project.description}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">{labels.theChallenge}</h2>
                <p className="text-gray-400 leading-relaxed">{tr?.challenge || project.challenge}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">{labels.theSolution}</h2>
                <p className="text-gray-400 leading-relaxed">{tr?.solution || project.solution}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">{labels.theResults}</h2>
                <ul className="space-y-4">
                  {(tr?.results || project.results).map((result: string, index: number) => (
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
                      <span className="text-gray-400 leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">{labels.readyToCreate}</h2>
                <p className="text-xl text-gray-400 text-pretty">{labels.letsDiscuss}</p>
                <Link
                  href={`/${lang === "fr" ? "" : lang}/#contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/25"
                >
                  {labels.startProject}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          <Contact />
        </div>
      </div>
    </div>
  )
}
