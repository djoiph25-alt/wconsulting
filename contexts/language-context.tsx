"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, getTranslation } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLang }: { children: ReactNode; initialLang?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLang || "fr")

  useEffect(() => {
    if (!initialLang) {
      const saved = localStorage.getItem("language") as Language
      if (saved && ["fr", "en", "it"].includes(saved)) {
        setLanguageState(saved)
      }
    }
  }, [initialLang])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    const langPrefix = lang === "fr" ? "" : `/${lang}`
    window.location.href = `${langPrefix}${window.location.hash}`
  }

  const t = getTranslation(language)

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
