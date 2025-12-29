import type React from "react"
import type { Language } from "@/lib/translations"
import { LanguageProvider } from "@/contexts/language-context"

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ lang: Language }>
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params

  return <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
}
