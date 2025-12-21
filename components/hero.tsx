"use client"

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

const heroSlides = [
  {
    video: "/digital-branding-design-workspace-black-white.jpg",
    title: "Branding & Identité",
    subtitle: "Créations qui marquent les esprits",
  },
  {
    video: "/creative-design-studio-mockup-black-white.jpg",
    title: "Design & Créativité",
    subtitle: "Marques qui inspirent",
  },
  {
    video: "/digital-marketing-strategy-workspace-black-white.jpg",
    title: "Marketing Digital",
    subtitle: "Campagnes qui performent",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setAnimationKey((prev) => prev + 1)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {t.hero.slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-20" />
            <img
              src={
                index === 0
                  ? "/digital-branding-design-workspace-black-white.jpg"
                  : index === 1
                    ? "/creative-design-studio-mockup-black-white.jpg"
                    : "/digital-marketing-strategy-workspace-black-white.jpg"
              }
              alt={slide.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-white" : "w-8 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div key={animationKey}>
            <div className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4 opacity-0 animate-fade-in animation-delay-100">
              {t.hero.slides[currentSlide].subtitle}
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight text-balance opacity-0 animate-fade-in animation-delay-200">
              {t.hero.slides[currentSlide].title}
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed opacity-0 animate-fade-in animation-delay-400">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in animation-delay-600">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8" asChild>
              <a href="#contact">
                {t.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="#gallery">{t.hero.portfolio}</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
