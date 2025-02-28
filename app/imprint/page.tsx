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
            <span className="font-bold">
              Knobits AI <span className="text-xs">by Shellfire</span>
            </span>{" "}
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
              {t.footer.legal.imprint.title}
            </h1>
            <div className="prose dark:prose-invert max-w-none">
              {/* Content will be added later */}
              <p className="text-muted-foreground">Content</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shellfire GmbH. {t.footer.copyright}
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              {t.footer.legal.privacy.title}
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              {t.footer.legal.terms.title}
            </Link>
            <Link href="/imprint" className="text-sm text-muted-foreground hover:text-foreground">
              {t.footer.legal.imprint.title}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

