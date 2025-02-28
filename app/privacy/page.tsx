
"use client"

import Link from "next/link"
import { useLanguage } from "../language-context"
import { Brain, Shield, Lock, Save } from "lucide-react"

export default function PrivacyPage() {
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
              {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              {/* Content will be added later */}
              <p className="text-muted-foreground">Content will be added later.</p>
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
