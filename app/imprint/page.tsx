
"use client"

import Link from "next/link"
import { useLanguage } from "../language-context"
import { Brain, Shield, Lock, Save } from "lucide-react"

export default function ImprintPage() {
  const { language, t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">
              Knobits AI <span className="text-xs">by Shellfire</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-3xl py-12 md:py-24 lg:py-32">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {language === "de" ? "Impressum" : "Imprint"}
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              {language === "de" ? (
                <>
                  <p>
                    Shellfire GmbH<br />
                    Altkönigstraße 10A<br />
                    61389 Schmitten<br />
                    Deutschland
                  </p>

                  <h2>Kontakt:</h2>
                  <p>
                    Tel: +49 (0) 6101 659 252 40<br />
                    E-Mail: hosting@shellfire.de
                  </p>

                  <p>
                    Vertreten durch die Geschäftsführer: Florian Gattung und Maximilian Behr<br />
                    Registergericht der GmbH: Amtsgericht Königstein<br />
                    Registernummer der GmbH: HRB 11030
                  </p>

                  <h2>Für die Inhalte verantwortlich:</h2>
                  <p>
                    Florian Gattung, Rosenstraße 5, 65719 Hofheim, Deutschland
                  </p>

                  <p>
                    Ust-ID: DE352237087
                  </p>

                  <h2>Externe Links:</h2>
                  <p>
                    Wir haben keine Kontrolle über die Inhalte externer Seiten und haften nicht für diese Inhalte externer Seiten. Wir prüfen deren Inhalte sorgfältig bei Linksetzung, können aber die Rechtmäßigkeit von diesen Inhalten zu späteren Zeitpunkten nicht garantieren. Wenn Ihnen rechtswidrige Inhalte bekannt werden, bitten wir um sofortige Mitteilung. Wir werden diese dann prüfen und die Links gegebenenfalls löschen.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Shellfire GmbH<br />
                    Altkönigstraße 10A<br />
                    61389 Schmitten<br />
                    Germany
                  </p>

                  <h2>Contact:</h2>
                  <p>
                    Tel: +49 (0) 6101 659 252 40<br />
                    email: hosting@shellfire.de
                  </p>

                  <p>
                    Represented by the managing directors: Florian Gattung and Maximilian Behr<br />
                    Register court of the GmbH: Local court Königstein<br />
                    Registration number of the GmbH: HRB 11030
                  </p>

                  <h2>Person responsible for content:</h2>
                  <p>
                    Florian Gattung, Rosenstraße 5, 65719 Hofheim, Germany
                  </p>

                  <p>
                    VAT Reg No: DE352237087
                  </p>

                  <h2>External links:</h2>
                  <p>
                    We have no control over the contents of external sites and assume no liability for these. When linking to these, we carefully examine their content but cannot guarantee the legality of this content at a later date. If you become aware of any illegal content, please let us know immediately so we can check this and delete the links.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

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
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#why" className="text-muted-foreground hover:text-foreground">
                  Why Knobits AI?
                </Link>
              </li>
              <li>
                <Link href="/#how" className="text-muted-foreground hover:text-foreground">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/#what" className="text-muted-foreground hover:text-foreground">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="text-muted-foreground hover:text-foreground">
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Security</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                GDPR compliant
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-primary" />
                Hosted in Germany
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Save className="h-4 w-4 text-primary" />
                Privacy hosting experience since 2002
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shellfire GmbH. {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  )
}
