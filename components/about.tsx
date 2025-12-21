"use client"

import { useFadeIn } from "@/hooks/use-fade-in"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const titleFade = useFadeIn()
  const subtitleFade = useFadeIn()
  const missionFade = useFadeIn()
  const approachFade = useFadeIn()
  const { t } = useLanguage()

  return (
    <section id="about" className="py-32 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2
              ref={titleFade.ref}
              className={`text-5xl md:text-6xl font-bold text-foreground text-balance transition-all duration-1000 ${
                titleFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.about.title}
            </h2>
            <p
              ref={subtitleFade.ref}
              className={`text-xl text-muted-foreground leading-relaxed text-pretty transition-all duration-1000 delay-200 ${
                subtitleFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.about.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              ref={missionFade.ref}
              className={`space-y-4 transition-all duration-1000 delay-300 ${
                missionFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground">{t.about.mission.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.about.mission.description}</p>
            </div>

            <div
              ref={approachFade.ref}
              className={`space-y-4 transition-all duration-1000 delay-500 ${
                approachFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground">{t.about.approach.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.about.approach.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
