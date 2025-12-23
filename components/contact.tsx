"use client"

import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFadeIn } from "@/hooks/use-fade-in"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const titleFade = useFadeIn()
  const subtitleFade = useFadeIn()
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-32 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2
              ref={titleFade.ref}
              className={`text-5xl md:text-6xl font-bold text-foreground text-balance transition-all duration-1000 ${
                titleFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.contact.title}
            </h2>
            <p
              ref={subtitleFade.ref}
              className={`text-xl text-muted-foreground text-pretty transition-all duration-1000 delay-200 ${
                subtitleFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ContactItem Icon={Phone} title={t.contact.phone} content="+39 345 457 8270" index={0} />
            <ContactItem Icon={Mail} title={t.contact.email} content="contact@wefast-consulting.it" index={1} />
            <ContactItem Icon={MapPin} title={t.contact.offices} content={t.contact.officesLocation} index={2} />
          </div>

          <ContactButton />

          <SocialMediaLinks />
        </div>
      </div>

      <footer className="mt-32 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
            <p>{t.contact.footer}</p>
            <a
              href="https://www.wefast-consulting.it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              www.wefast-consulting.it
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

function ContactItem({ Icon, title, content, index }: { Icon: any; title: string; content: string; index: number }) {
  const itemFade = useFadeIn()

  return (
    <div
      ref={itemFade.ref}
      className={`space-y-4 text-center transition-all duration-1000 ${
        itemFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  )
}

function ContactButton() {
  const buttonFade = useFadeIn()
  const { t } = useLanguage()

  return (
    <div
      ref={buttonFade.ref}
      className={`flex justify-center transition-all duration-1000 delay-500 ${
        buttonFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12" asChild>
        <a href="mailto:contact@wefast-consulting.it">{t.contact.cta}</a>
      </Button>
    </div>
  )
}

function SocialMediaLinks() {
  const socialFade = useFadeIn()

  return (
    <div
      ref={socialFade.ref}
      className={`flex justify-center gap-6 transition-all duration-1000 delay-700 ${
        socialFade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <a
        href="https://www.facebook.com/people/Wefast-Consulting/61585295012208/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="h-6 w-6 text-primary" />
      </a>
      <a
        href="https://www.instagram.com/wefast.consulting/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 text-primary" />
      </a>
    </div>
  )
}
