import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import Stats from "@/components/stats"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import VideoShowcase from "@/components/video-showcase"
import type { Language } from "@/lib/translations"

type PageProps = {
  params: Promise<{ lang: Language }>
}

export default async function LanguagePage({ params }: PageProps) {
  const { lang } = await params

  return (
    <div className="dark min-h-screen bg-background">
      <Navigation initialLang={lang} />
      <Hero />
      <About />
      <Stats />
      <VideoShowcase />
      <Services />
      <Gallery />
      <Contact />
    </div>
  )
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "it" }]
}
