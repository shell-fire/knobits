"use client"

import { useLanguage } from "../language-context"
import Link from "next/link"

export default function ImprintPage() {
  const { language } = useLanguage()

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
        <div className="container max-w-3xl py-12">
          <h1 className="text-3xl font-bold mb-8">
            {language === "de" ? "Impressum" : "Legal Notice"}
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            {language === "de" ? (
              <>
                <p className="font-bold">
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

                <p>
                  <Link href="/terms" className="underline">Allgemeine Geschäftsbedingungen (AGB)</Link><br />
                  <Link href="/privacy" className="underline">Datenschutzerklärung</Link>
                </p>

                <h2>Externe Links:</h2>
                <p>
                  Wir haben keine Kontrolle über die Inhalte externer Seiten und haften nicht für diese Inhalte externer Seiten. 
                  Wir prüfen deren Inhalte sorgfältig bei Linksetzung, können aber die Rechtmäßigkeit von diesen Inhalten zu 
                  späteren Zeitpunkten nicht garantieren. Wenn Ihnen rechtswidrige Inhalte bekannt werden, bitten wir um sofortige 
                  Mitteilung. Wir werden diese dann prüfen und die Links gegebenenfalls löschen.
                </p>
              </>
            ) : (
              <>
                <p className="font-bold">
                  Shellfire GmbH<br />
                  Altkönigstraße 10A<br />
                  61389 Schmitten<br />
                  Germany
                </p>

                <h2>Contact:</h2>
                <p>
                  Tel: +49 (0) 6101 659 252 40<br />
                  Email: hosting@shellfire.de
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

                <p>
                  <Link href="/terms" className="underline">Terms and Conditions</Link><br />
                  <Link href="/privacy" className="underline">Privacy Statement</Link>
                </p>

                <h2>External links:</h2>
                <p>
                  We have no control over the contents of external sites and assume no liability for these. 
                  When linking to these, we carefully examine their content but cannot guarantee the legality 
                  of this content at a later date. If you become aware of any illegal content, please let us 
                  know immediately so we can check this and delete the links.
                </p>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shellfire GmbH. {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
          </p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
            </Link>
            <Link href="/imprint" className="text-sm text-muted-foreground hover:text-foreground">
              {language === "de" ? "Impressum" : "Legal Notice"}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}