
"use client"

import Link from "next/link"
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../language-context"

export default function ImprintPage() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-bold">Knobits AI by Shellfire</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex"
              onClick={() => setLanguage(language === "de" ? "en" : "de")}
            >
              {language === "de" ? "EN" : "DE"}
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl py-12">
          <h1 className="text-3xl font-bold tracking-tight">
            {language === "de" ? "Impressum" : "Legal Notice"}
          </h1>
          <div className="mt-8 space-y-6">
            {language === "de" ? (
              <>
                <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
                <p>
                  Shellfire GmbH<br />
                  Maybachstr. 1<br />
                  71634 Ludwigsburg<br />
                  Deutschland
                </p>
                
                <h2 className="text-xl font-semibold">Vertreten durch</h2>
                <p>Dipl. Inf. Schupp, Simon</p>
                
                <h2 className="text-xl font-semibold">Kontakt</h2>
                <p>
                  Telefon: +49 (0)7141 / 6 98 52 18<br />
                  E-Mail: simon.schupp@shellfire.de
                </p>
                
                <h2 className="text-xl font-semibold">Registereintrag</h2>
                <p>
                  Eintragung im Handelsregister.<br />
                  Registergericht: Stuttgart<br />
                  Registernummer: HRB 744922
                </p>
                
                <h2 className="text-xl font-semibold">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE299486149
                </p>
                
                <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                  Dipl. Inf. Schupp, Simon<br />
                  Maybachstr. 1<br />
                  71634 Ludwigsburg<br />
                  Deutschland
                </p>
                
                <h2 className="text-xl font-semibold">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1">https://ec.europa.eu/consumers/odr/</a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                
                <h2 className="text-xl font-semibold">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                
                <h2 className="text-xl font-semibold">Hinweis zur Streitbeilegung</h2>
                <p>
                  Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform") geschaffen. 
                  Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche 
                  Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Die OS-Plattform können Sie unter folgendem Link erreichen: 
                  <a href="http://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1">http://ec.europa.eu/consumers/odr/</a>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold">Information according to § 5 TMG</h2>
                <p>
                  Shellfire GmbH<br />
                  Maybachstr. 1<br />
                  71634 Ludwigsburg<br />
                  Germany
                </p>
                
                <h2 className="text-xl font-semibold">Represented by</h2>
                <p>Dipl. Inf. Schupp, Simon</p>
                
                <h2 className="text-xl font-semibold">Contact</h2>
                <p>
                  Phone: +49 (0)7141 / 6 98 52 18<br />
                  Email: simon.schupp@shellfire.de
                </p>
                
                <h2 className="text-xl font-semibold">Registration</h2>
                <p>
                  Entry in the Commercial Register.<br />
                  Register Court: Stuttgart<br />
                  Register Number: HRB 744922
                </p>
                
                <h2 className="text-xl font-semibold">VAT ID</h2>
                <p>
                  VAT identification number according to § 27 a of the German VAT Act:<br />
                  DE299486149
                </p>
                
                <h2 className="text-xl font-semibold">Responsible for content according to § 55 Abs. 2 RStV</h2>
                <p>
                  Dipl. Inf. Schupp, Simon<br />
                  Maybachstr. 1<br />
                  71634 Ludwigsburg<br />
                  Germany
                </p>
                
                <h2 className="text-xl font-semibold">EU Dispute Resolution</h2>
                <p>
                  The European Commission provides a platform for online dispute resolution (ODR): 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1">https://ec.europa.eu/consumers/odr/</a>.<br />
                  Our email address can be found in the imprint above.
                </p>
                
                <h2 className="text-xl font-semibold">Consumer Dispute Resolution/Universal Arbitration Board</h2>
                <p>
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
                
                <h2 className="text-xl font-semibold">Note on Dispute Resolution</h2>
                <p>
                  The EU Commission has created an Internet platform for the online settlement of disputes (so-called "OS platform"). 
                  The OS platform serves as a point of contact for the out-of-court settlement of disputes concerning contractual 
                  obligations arising from online purchase contracts. The OS platform can be reached at the following link: 
                  <a href="http://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1">http://ec.europa.eu/consumers/odr/</a>
                </p>
              </>
            )}
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Shellfire GmbH. {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
          </p>
          <div className="flex gap-4">
            <Link href="/imprint" className="text-sm text-muted-foreground hover:underline">
              {language === "de" ? "Impressum" : "Imprint"}
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              {language === "de" ? "Datenschutz" : "Privacy Policy"}
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              {language === "de" ? "AGB" : "Terms"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
