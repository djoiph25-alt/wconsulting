"use client"

import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFadeIn } from "@/hooks/use-fade-in"
import { useLanguage } from "@/contexts/language-context"
import type { ReactNode } from "react"

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
            <ContactItem
              Icon={Phone}
              title={t.contact.phone}
              content={
                <div className="space-y-1">
                  <div>+39 345 457 8270</div>
                  <div>+33 7 56 85 96 79</div>
                </div>
              }
              index={0}
            />
            <ContactItem Icon={Mail} title={t.contact.email} content="contact@wefast-consulting.it" index={1} />
            <ContactItem
              Icon={MapPin}
              title={t.contact.offices}
              content={
                <div className="space-y-2">
                  <div>Italie</div>
                  <div>France</div>
                </div>
              }
              index={2}
            />
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

function ContactItem({
  Icon,
  title,
  content,
  index,
}: { Icon: any; title: string; content: string | ReactNode; index: number }) {
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
        <div className="text-muted-foreground">{content}</div>
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
      <a
        href="https://wa.me/33756859679"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
        aria-label="WhatsApp"
      >
        <svg
          className="h-6 w-6 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
