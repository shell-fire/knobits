"use client"

import Link from "next/link"
import { useLanguage } from "../language-context"
import { Brain, Lock, Save, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
        <div className="container max-w-3xl py-12 md:py-24 lg:py-32">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t.footer.legal.terms.title}
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              {/* Content will be added later */}
              <p className="text-muted-foreground">Content will be added later.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Knobits<br/>
              KI-gestützte Knowledgebase für Unternehmen. DSGVO-konform, sicher in Deutschland gehostet.
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              <Link href="/product" className="text-sm text-muted-foreground hover:text-foreground">Product</Link>
              <Link href="/why-knobits" className="text-sm text-muted-foreground hover:text-foreground">Why Knobits AI?</Link>
              <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How it Works</Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Our Services</Link>
            </nav>
            <nav className="mt-4 flex flex-col gap-2">
              <Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground">Legal</Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="/imprint" className="text-sm text-muted-foreground hover:text-foreground">Legal Notice</Link>
              <Link href="/security" className="text-sm text-muted-foreground hover:text-foreground">Security</Link>
              <p className="text-sm text-muted-foreground">GDPR compliant</p>
              <p className="text-sm text-muted-foreground">Hosted in Germany</p>
              <p className="text-sm text-muted-foreground">Privacy hosting experience since 2002</p>
            </nav>
          </div>
          <p className="text-sm text-muted-foreground order-first md:order-none">
            © {new Date().getFullYear()} Shellfire GmbH. {language === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  )
}