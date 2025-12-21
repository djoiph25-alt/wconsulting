import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { VideoShowcase } from "@/components/video-showcase"

export default function Page() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
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
