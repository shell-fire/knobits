"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "de" | "en"

const translations = {
  de: {
    nav: {
      why: "Warum Knobits AI?",
      how: "So funktioniert's",
      what: "Unsere Leistungen",
      who: "Für wen?",
    },
    hero: {
      title: "Smarte Entscheidungen",
      subtitle: "durch KI-gestützte Insights",
      description:
        "Nutzen Sie das volle Potenzial Ihrer Unternehmensdaten – sichere Datenverarbeitung in Deutschland mit modernster KI-Technologie.",
      cta: {
        primary: "Mehr erfahren",
        secondary: "Demo anfragen",
      },
    },
    why: {
      title: "Warum Knobits AI?",
      subtitle: "Die Herausforderungen moderner Unternehmen erfordern innovative Lösungen",
    },
    how: {
      title: "So funktioniert's",
      subtitle: "Mit Ihrer persönlichen Knobits AI entfesseln Sie das volle Potenzial Ihrer Unternehmensdaten!",
    },
    what: {
      title: "Unsere Leistungen",
      subtitle: "Knobits AI ist eine komplette Lösung für Ihr Wissensmanagement",
    },
    who: {
      title: "Für wen ist Knobits AI?",
      subtitle:
        "Knobits AI ist die Leistungsstarke KI-Lösung für mittelständische Unternehmen, die ihre Daten endlich nutzbar machen wollen. Knobits AI kennt Ihre Firma und Ihre Kunden besser als Sie selbst.",
    },
    cta: {
      title: "Bereit für die Zukunft?",
      description:
        "Starten Sie jetzt mit Knobits und erschließen Sie das volle Potenzial Ihrer Unternehmensdaten. Komplette KI Flatrate ab 199 Euro mtl. - inkl. Chatbot, Top KI-Modelle und Updates.",
      primary: "Demo anfragen",
      secondary: "Kontakt aufnehmen",
    },
    footer: {
      description: "KI-gestützte Knowledgebase für Unternehmen. DSGVO-konform, sicher in Deutschland gehostet.",
      product: {
        title: "Produkt",
        why: "Warum Knobits?",
        how: "Funktionsweise",
        features: "Features",
      },
      legal: {
        title: "Rechtliches",
        privacy: {
          title: "Datenschutzerklärung",
        },
        terms: {
          title: "Allgemeine Geschäftsbedingungen",
        },
        imprint: {
          title: "Impressum",
        },
      },
      security: {
        title: "Sicherheit",
        gdpr: "DSGVO-konform",
        hosting: "Hosting in Deutschland",
        privacy: "Privacy-Hosting Erfahrung seit 2002",
      },
      copyright: "Shellfire GmbH. Alle Rechte vorbehalten.",
    },
    buttons: {
      demo: "Demo anfragen",
      learnMore: "Jetzt anfragen", // Changed from "Mehr erfahren"
      contact: "Kontakt aufnehmen",
    },
    demo: {
      title: "Demo anfragen",
      description:
        "Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen für Ihre persönliche Demo.",
      name: "Vollständiger Name",
      company: "Firmenname",
      email: "E-Mail",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns von Ihren Anforderungen...",
      submit: "Demo anfragen",
    },
  },
  en: {
    nav: {
      why: "Why Knobits AI?",
      how: "How it Works",
      what: "Our Services",
      who: "Who is it for?",
    },
    hero: {
      title: "Smart Decisions",
      subtitle: "through AI-powered Insights",
      description:
        "Unlock the full potential of your enterprise data – secure data processing in Germany with state-of-the-art AI technology.",
      cta: {
        primary: "Learn More",
        secondary: "Request Demo",
      },
    },
    why: {
      title: "Why Knobits AI?",
      subtitle: "Modern enterprise challenges require innovative solutions",
      challenges: {
        dataOverload: {
          title: "Data Overload",
          description:
            "Companies struggle with increasing amounts of unstructured data and risk missing valuable insights.",
        },
        knowledgeLoss: {
          title: "Knowledge Loss",
          description: "Years of experience and knowledge are lost with every employee who leaves the company.",
        },
        tacticalErrors: {
          title: "Tactical Errors",
          description:
            "Without quick access to relevant data, decisions are often made based on incomplete information.",
        },
        skilledWorkerShortage: {
          title: "Skilled Worker Shortage",
          description:
            "The increasing shortage of qualified professionals requires intelligent solutions for knowledge transfer and efficiency improvement.",
        },
        internationalization: {
          title: "Internationalization",
          description: "German-language company documents make it difficult for foreign professionals to get started.",
        },
      },
    },
    how: {
      title: "How it Works",
      subtitle: "With your personal Knobits AI, unleash the full potential of your enterprise data!",
      steps: {
        upload: {
          title: "Upload Data",
          description:
            "Automatic import of your enterprise data from various sources – secure thanks to 20+ years of privacy expertise.",
        },
        analyze: {
          title: "AI Analysis",
          description:
            "State-of-the-art AI models like DeepSeek or LLama analyze your data and create an intelligent knowledge base.",
        },
        use: {
          title: "Smart Usage",
          description:
            "Your employees chat with your company data, access your own AI knowledge base, and make better decisions.",
        },
      },
    },
    what: {
      title: "Our Services",
      subtitle: "Knobits AI is a complete solution for your knowledge management",
      features: {
        knowledgebase: {
          title: "Intelligent Knowledge Base",
          description: "A fully automated, AI-powered knowledge base that adapts to your needs.",
          benefits: [
            "Automatic integration of emails (Outlook, Gmail, etc.)",
            "Import of Office documents (Word, Excel, PowerPoint)",
            "PDF processing with OCR support",
            "Automatic knowledge base updates",
            "Intelligent tagging and categorization",
            "Customized insights from all data sources",
            "Translation into any number of languages",
          ],
        },
        assistant: {
          title: "Interactive AI Assistant",
          description: "A smart chatbot that supports your employees in their daily work.",
          benefits: [
            "Context-aware responses from your data base",
            "Multilingual support (DE/EN)",
            "Automatic document analysis",
            "Process automation",
            "Learning system with continuous improvement",
          ],
        },
        upcoming: {
          title: "Coming soon...",
          description: "Deep Research, AI Agents, and more.",
          benefits: [
            "Deep Research delivers high-quality complex analyses within hours",
            "AI Agents act independently for you on the web",
            "Frequent upgrades to the latest AI models",
          ],
        },
      },
    },
    who: {
      title: "Who is Knobits AI for?",
      subtitle:
        "Knobits AI is the powerful AI solution for medium-sized companies that want to finally make their data usable. Knobits AI knows your company and your customers better than you do.",
      useCases: {
        engineering: {
          title: "Engineering & Manufacturing",
          description: "Optimize your knowledge management for growing requirements and increasing data volumes.",
          examples: [
            "Quick onboarding of new employees",
            "Optimization of manufacturing processes",
            "Central knowledge management",
            "Engineering support",
          ],
        },
        technology: {
          title: "Technology & IT",
          description: "AI-powered automation for optimized technical documentation and support.",
          examples: [
            "Automated technical documentation",
            "Intelligent IT support",
            "Product portfolio expansion",
            "Coding AI with full overview of your repositories",
            "Faster troubleshooting",
          ],
        },
        consulting: {
          title: "Consulting & Marketing",
          description: "Use knowledge strategically and optimize your consulting quality.",
          examples: [
            "Best practices documentation",
            "Case studies",
            "Knowledge exchange",
            "Campaign creation & personalized consulting",
          ],
        },
      },
    },
    cta: {
      title: "Ready for the Future?",
      description:
        "Start with Knobits now and unlock the full potential of your enterprise data. Complete AI flat rate from €199/month - including chatbot, top AI models, and updates.",
      primary: "Request Demo",
      secondary: "Contact Us",
    },
    footer: {
      description: "AI-powered knowledge base for enterprises. GDPR-compliant, securely hosted in Germany.",
      product: {
        title: "Product",
        why: "Why Knobits?",
        how: "How it Works",
        features: "Features",
      },
      legal: {
        title: "Legal",
        privacy: {
          title: "Privacy Policy",
        },
        terms: {
          title: "Terms and Conditions",
        },
        imprint: {
          title: "Legal Notice",
        },
      },
      security: {
        title: "Security",
        gdpr: "GDPR compliant",
        hosting: "Hosted in Germany",
        privacy: "Privacy hosting experience since 2002",
      },
      copyright: "Shellfire GmbH. All rights reserved.",
    },
    buttons: {
      demo: "Request Demo",
      learnMore: "Request Now",
      contact: "Contact Us",
    },
    demo: {
      title: "Request a Demo",
      description:
        "Fill out the form below and we'll get back to you as soon as possible to schedule your personalized demo.",
      name: "Full Name",
      company: "Company Name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell us about your needs...",
      submit: "Request Demo",
    },
  },
} as const

type Translation = typeof translations.en

const LanguageContext = createContext<
  | {
      language: Language
      setLanguage: (lang: Language) => void
      t: Translation
    }
  | undefined
>(undefined)

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

