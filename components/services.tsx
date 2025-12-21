"use client"

import { Briefcase, TrendingUp, Palette, Code } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useFadeIn } from "@/hooks/use-fade-in"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const titleFade = useFadeIn()
  const subtitleFade = useFadeIn()
  const { t } = useLanguage()

  const services = [
    {
      icon: Briefcase,
      title: t.services.categories[0].title,
      items: t.services.categories[0].items,
    },
    {
      icon: TrendingUp,
      title: t.services.categories[1].title,
      items: t.services.categories[1].items,
    },
    {
      icon: Palette,
      title: t.services.categories[2].title,
      items: t.services.categories[2].items,
    },
    {
      icon: Code,
      title: t.services.categories[3].title,
      items: t.services.categories[3].items,
    },
  ]

  return (
    <section id="services" className="py-32 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2
              ref={titleFade.ref}
              className={`text-5xl md:text-6xl font-bold text-foreground text-balance transition-all duration-1000 ${
                titleFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.services.title}
            </h2>
            <p
              ref={subtitleFade.ref}
              className={`text-xl text-muted-foreground max-w-2xl mx-auto text-pretty transition-all duration-1000 delay-200 ${
                subtitleFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return <ServiceCard key={index} service={service} Icon={Icon} index={index} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, Icon, index }: { service: any; Icon: any; index: number }) {
  const cardFade = useFadeIn()

  return (
    <Card
      ref={cardFade.ref}
      className={`p-8 bg-card hover:bg-accent/10 transition-all duration-1000 border border-border ${
        cardFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
        </div>

        <ul className="space-y-3">
          {service.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
