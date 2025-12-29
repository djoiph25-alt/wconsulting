"use client"

import type React from "react"
import type { Language } from "@/contexts/language-context"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Navigation({ initialLang }: { initialLang?: Language }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/it"
  const { language, setLanguage, t } = useLanguage()

  const currentLangFromPath = pathname?.startsWith("/en") ? "en" : pathname?.startsWith("/it") ? "it" : "fr"
  const langPrefix = currentLangFromPath === "fr" ? "" : `/${currentLangFromPath}`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (initialLang && initialLang !== language) {
      setLanguage(initialLang)
    }
  }, [initialLang])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (isHomePage) {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = `${langPrefix}/${sectionId}`
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between opacity-0 animate-fade-in-up">
          <Link href={langPrefix || "/"} className="flex items-center">
            <Image src="/logo.png" alt="Wefast Consulting" width={150} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "#gallery")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <button
                onClick={() => setLanguage("fr")}
                className={`transition-colors ${
                  language === "fr" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FR
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors ${
                  language === "en" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => setLanguage("it")}
                className={`transition-colors ${
                  language === "it" ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                IT
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-up">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {t.nav.services}
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "#gallery")}
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {t.nav.contact}
            </a>
            <div className="flex items-center gap-3 pt-2 border-t border-border text-sm">
              <button
                onClick={() => setLanguage("fr")}
                className={`transition-colors ${
                  language === "fr" ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                FR
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors ${
                  language === "en" ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => setLanguage("it")}
                className={`transition-colors ${
                  language === "it" ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                IT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
