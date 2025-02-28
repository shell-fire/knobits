"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "../language-context"
import Link from "next/link"
import { Brain } from "lucide-react"

export default function DemoPage() {
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just log the form data
    const formData = new FormData(e.currentTarget)
    console.log({
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      message: formData.get("message"),
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">
              Knobits AI <span className="text-xs">by Shellfire</span>
            </span>{" "}
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-[600px] py-12 md:py-24 lg:py-32">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t.demo.title || "Request a Demo"}
              </h1>
              <p className="text-muted-foreground">
                {t.demo.description ||
                  "Fill out the form below and we'll get back to you as soon as possible to schedule your personalized demo."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.demo.name || "Full Name"} *</Label>
                <Input id="name" name="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">{t.demo.company || "Company Name"} *</Label>
                <Input id="company" name="company" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.demo.email || "Email"} *</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.demo.message || "Message"}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.demo.messagePlaceholder || "Tell us about your needs..."}
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full">
                {t.demo.submit || "Request Demo"}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex h-14 items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shellfire GmbH. {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  )
}

