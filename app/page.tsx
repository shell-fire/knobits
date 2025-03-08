"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Brain,
  Database,
  Lock,
  Users,
  Menu,
  ArrowRight,
  CheckCircle2,
  Search,
  Zap,
  Lightbulb,
  Globe,
  Save,
  Puzzle,
} from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "./language-context"

export default function LandingPage() {
  const { language, setLanguage, t } = useLanguage()

  const challenges = [
    {
      title: language === "de" ? "Datenüberflutung" : t.why.challenges.dataOverload.title,
      description:
        language === "de"
          ? "Unternehmen kämpfen mit der steigenden Menge unstrukturierter Daten und dem Risiko, wertvolle Erkenntnisse zu übersehen."
          : t.why.challenges.dataOverload.description,
      icon: Database,
    },
    {
      title: language === "de" ? "Wissensverlust" : t.why.challenges.knowledgeLoss.title,
      description:
        language === "de"
          ? "Mit jedem Mitarbeiter, der das Unternehmen verlässt, geht jahrelanges Erfahrungswissen verloren."
          : t.why.challenges.knowledgeLoss.description,
      icon: Users,
    },
    {
      title: language === "de" ? "Taktische Fehler" : t.why.challenges.tacticalErrors.title,
      description:
        language === "de"
          ? "Ohne schnellen Zugriff auf relevante Daten werden Entscheidungen oft auf Basis unvollständiger Informationen getroffen."
          : t.why.challenges.tacticalErrors.description,
      icon: Search,
    },
    {
      title: language === "de" ? "Datenchaos" : t.why.challenges.dataChaos.title,
      description:
        language === "de"
          ? "Fragmentiertes Wissen und verstreute Informationen gehen in verschiedenen Systemen und Kanälen verloren."
          : t.why.challenges.dataChaos.description,
      icon: Puzzle,
    },

    {
      title: language === "de" ? "Fachkräftemangel" : t.why.challenges.skilledWorkerShortage.title,
      description:
        language === "de"
          ? "Der zunehmende Mangel an qualifizierten Fachkräften erfordert intelligente Lösungen zur Wissensweitergabe und Effizienzsteigerung."
          : t.why.challenges.skilledWorkerShortage.description,
      icon: Users,
    },
    {
      title: language === "de" ? "Internationalisierung" : t.why.challenges.internationalization.title,
      description:
        language === "de"
          ? "Ausländischen Fachkräften wird durch deutschsprachige Firmendokumente der Einstieg erschwert."
          : t.why.challenges.internationalization.description,
      icon: Globe,
    },
  ]

  const process = [
    {
      title: language === "de" ? "Daten hochladen" : t.how.steps.upload.title,
      description:
        language === "de"
          ? "Automatischer Import Ihrer Unternehmensdaten aus verschiedenen Quellen – sicher dank 20+ Jahren Privacy Know-How."
          : t.how.steps.upload.description,
    },
    {
      title: language === "de" ? "KI-Analyse" : t.how.steps.analyze.title,
      description:
        language === "de"
          ? "Modernste KI-Modelle wie DeepSeek oder LLama analysieren Ihre Daten und erstellen eine intelligente Knowledgebase."
          : t.how.steps.analyze.description,
    },
    {
      title: language === "de" ? "Smarte Nutzung" : t.how.steps.use.title,
      description:
        language === "de"
          ? "Ihre Mitarbeiten Chatten mit Ihren Firmendaten, greifen auf Ihre eigene AI-Knowledgebase zu und treffen so bessere Entscheidungen."
          : t.how.steps.use.description,
    },
  ]

  const features = [
    {
      title: language === "de" ? "Intelligente Knowledgebase" : t.what.features.knowledgebase.title,
      description:
        language === "de"
          ? "Eine vollautomatische, KI-gestützte Knowledgebase, die sich Ihren Bedürfnissen anpasst."
          : t.what.features.knowledgebase.description,
      icon: Brain,
      benefits:
        language === "de"
          ? [
              "Automatische Integration von E-Mails (Outlook, Gmail, etc.)",
              "Import von Office-Dokumenten (Word, Excel, PowerPoint)",
              "PDF-Verarbeitung mit OCR-Unterstützung",
              "Automatische Aktualisierung der Knowledgebase",
              "Intelligente Verschlagwortung und Kategorisierung",
              "Maßgeschneiderte Insights aus allen Datenquellen",
              "Übersetzung in beliebig viele Sprachen",
            ]
          : t.what.features.knowledgebase.benefits,
    },
    {
      title: language === "de" ? "Interaktiver KI-Assistent" : t.what.features.assistant.title,
      description:
        language === "de"
          ? "Ein smarter Chatbot, der Ihre Mitarbeiter bei der täglichen Arbeit unterstützt."
          : t.what.features.assistant.description,
      icon: Zap,
      benefits:
        language === "de"
          ? [
              "Kontextbezogene Antworten aus Ihrer Datenbasis",
              "Mehrsprachige Unterstützung (DE/EN)",
              "Automatische Dokumentenanalyse",
              "Prozessautomatisierung",
              "Lernfähiges System mit kontinuierlicher Verbesserung",
            ]
          : t.what.features.assistant.benefits,
    },
    {
      title: language === "de" ? "Coming soon..." : t.what.features.upcoming.title,
      description: language === "de" ? "Deep Research, AI Agents uvm." : t.what.features.upcoming.description,
      icon: Lightbulb,
      benefits:
        language === "de"
          ? [
              "Deep Research liefert innerhalb weniger Stunden komplexe Analysen von hoher Qualität",
              "AI Agents agieren selbsständig für Sie im Web",
              "Häufige Upgrades auf die neuesten KI-Modelle",
            ]
          : t.what.features.upcoming.benefits,
    },
  ]

  const useCases = [
    {
      title: language === "de" ? "Engineering & Fertigung" : t.who.useCases.engineering.title,
      description:
        language === "de"
          ? "Optimieren Sie Ihr Wissensmanagement für wachsende Anforderungen und wachsende Datenmengen."
          : t.who.useCases.engineering.description,
      icon: Users,
      examples:
        language === "de"
          ? [
              "Schnelles Onboarding neuer Mitarbeiter",
              "Optmierung von Fertigungsprozessen",
              "Zentrales Wissensmanagement",
              "Unterstützung beim Engineering",
            ]
          : t.who.useCases.engineering.examples,
    },
    {
      title: language === "de" ? "Technologie & IT" : t.who.useCases.technology.title,
      description:
        language === "de"
          ? "KI-gestützte Automatisierung für eine optimierte technische Dokumentation und Support."
          : t.who.useCases.technology.description,
      icon: Database,
      examples:
        language === "de"
          ? [
              "Automatisierte technische Dokumentation",
              "Intelligenter IT-Support",
              "Erweiterung des Produktportfolios",
              "Coding AI mit vollem Überblick über Ihre Repositories",
              "Schnellere Fehlersuche",
            ]
          : t.who.useCases.technology.examples,
    },
    {
      title: language === "de" ? "Consulting & Marketing" : t.who.useCases.consulting.title,
      description:
        language === "de"
          ? "Setzen Sie Wissen gezielt ein und optimieren Sie Ihre Beratungsqualität."
          : t.who.useCases.consulting.description,
      icon: Brain,
      examples:
        language === "de"
          ? [
              "Best practices Dokumentation",
              "Fallstudien",
              "Wissensaustausch",
              "Kampagnenerstellung & individualisierte Beratung",
            ]
          : t.who.useCases.consulting.examples,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/*  <Brain className="h-6 w-6 text-primary" /> */}
            <span className="font-bold">
              Knobits AI <span className="text-xs">by Shellfire</span>
            </span>{" "}
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#why" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.why}
            </Link>
            <Link href="#how" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.how}
            </Link>
            <Link href="#what" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.what}
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.who}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex"
              onClick={() => setLanguage(language === "de" ? "en" : "de")}
            >
              {language === "de" ? "EN" : "DE"}
            </Button>
            <Button onClick={() => (window.location.href = "/demo")}>{t.buttons.demo}</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Knobits AI by Shellfire</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                  <Link href="#why" className="text-sm font-medium hover:text-primary transition-colors">
                    {t.nav.why}
                  </Link>
                  <Link href="#how" className="text-sm font-medium hover:text-primary transition-colors">
                    {t.nav.how}
                  </Link>
                  <Link href="#what" className="text-sm font-medium hover:text-primary transition-colors">
                    {t.nav.what}
                  </Link>
                  <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                    {t.nav.who}
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-accent to-background">
          <div className="container flex flex-col items-center justify-center gap-4 py-12 text-center md:py-24 lg:py-32">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {t.hero.title}
                <br />
                <span className="text-primary">{t.hero.subtitle}</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t.hero.description}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" className="gap-2" onClick={() => (window.location.href = "/demo")}>
                {t.buttons.learnMore}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "/demo")}>
                {t.buttons.demo}
              </Button>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section id="why" className="container space-y-12 py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">{t.why.title}</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">{t.why.subtitle}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="relative p-6 group">
                <div className="absolute inset-0 rounded-lg bg-accent group-hover:bg-accent/80 transition-colors" />
                <div className="relative space-y-2">
                  <challenge.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How Section */}
        <section id="how" className="container space-y-12 py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">{t.how.title}</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">{t.how.subtitle}</p>
          </div>
          <div className="relative">
            <div className="absolute hidden md:block top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2" />
            <div className="grid gap-8 md:grid-cols-3">
              {process.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center p-6">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Section */}
        <section id="what" className="container space-y-12 py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">{t.what.title}</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t.what.subtitle}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col p-6 bg-accent rounded-lg">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2 mt-auto">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Who Needs Section - With 3D cards and floating elements */}
        <section id="who" className="relative bg-hex border-t">
          <div className="container space-y-12 py-12 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl gradient-text">{t.who.title}</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                {t.who.subtitle}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 stagger-in">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className={`card-3d ${index === 1 ? "float-2" : index === 2 ? "float-3" : "float-1"}`}
                >
                  <div className="card-3d-content glass p-8 rounded-lg">
                    <useCase.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-xl">{useCase.title}</h3>
                    <p className="mt-2 text-muted-foreground">{useCase.description}</p>
                    <ul className="mt-6 space-y-4">
                      {useCase.examples.map((example) => (
                        <li key={example} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-b from-accent to-background">
          <div className="container flex flex-col items-center justify-center gap-4 py-12 text-center md:py-24 lg:py-32">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.cta.title}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">{t.cta.subtitle}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" onClick={() => (window.location.href = "/demo")}>
                {t.buttons.demo}
              </Button>
              <Button size="lg" variant="outline" onClick={() => (window.location.href = "/demo")}>
                {t.buttons.contact}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-bold">Knobits</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              KI-gestützte Knowledgebase für Unternehmen. DSGVO-konform, sicher in Deutschland gehostet.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.product.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#why" className="text-muted-foreground hover:text-foreground">
                  {t.nav.why}
                </Link>
              </li>
              <li>
                <Link href="#how" className="text-muted-foreground hover:text-foreground">
                  {t.nav.how}
                </Link>
              </li>
              <li>
                <Link href="#what" className="text-muted-foreground hover:text-foreground">
                  {t.nav.what}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.legal.title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  {t.footer.legal.privacy.title}
                </Link>
              </li>
  {/*            <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  {t.footer.legal.terms.title}
                </Link>
              </li>
  */}
              <li>
                <Link href="/imprint" className="text-muted-foreground hover:text-foreground">
                  {t.footer.legal.imprint.title}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.security.title}</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                {t.footer.security.gdpr}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-primary" />
                {t.footer.security.hosting}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Save className="h-4 w-4 text-primary" />
                {t.footer.security.privacy}
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shellfire GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}

