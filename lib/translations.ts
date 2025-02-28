export const translations = {
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
        privacy: "Datenschutz",
        terms: "AGB",
        imprint: "Impressum",
      },
      security: {
        title: "Sicherheit",
        gdpr: "DSGVO-konform",
        hosting: "Hosting in Deutschland",
        privacy: "Privacy-Hosting Erfahrung seit 2002",
      },
      copyright: "Shellfire GmbH. Alle Rechte vorbehalten.",
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
    },
    how: {
      title: "How it Works",
      subtitle: "With your personal Knobits AI, unleash the full potential of your enterprise data!",
    },
    what: {
      title: "Our Services",
      subtitle: "Knobits AI is a complete solution for your knowledge management",
    },
    who: {
      title: "Who is Knobits AI for?",
      subtitle:
        "Knobits AI is the powerful AI solution for medium-sized companies that want to finally make their data usable. Knobits AI knows your company and your customers better than you do.",
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
        privacy: "Privacy Policy",
        terms: "Terms",
        imprint: "Imprint",
      },
      security: {
        title: "Security",
        gdpr: "GDPR compliant",
        hosting: "Hosted in Germany",
        privacy: "Privacy hosting experience since 2002",
      },
      copyright: "Shellfire GmbH. All rights reserved.",
    },
  },
}

export type Language = keyof typeof translations
export type Translation = typeof translations.en

