"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import type { Language, Translation } from "./translations"
import { translations } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")
  const [t, setT] = useState<Translation>(translations.de)

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang)
      setT(translations[savedLang])
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    setT(translations[lang])
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

