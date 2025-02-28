
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "../language-context"
import Link from "next/link"
import { Brain, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DemoPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to submit form")
      }
      
      setSubmitSuccess(true)
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      })
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setIsSubmitting(false)
    }
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
        <div className="container max-w-md py-12">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">{t.demo.title}</h1>
              <p className="text-muted-foreground">{t.demo.description}</p>
            </div>
            
            {submitSuccess ? (
              <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Thank you for your interest. We'll get back to you soon.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {t.demo.name} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{t.demo.company}</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {t.demo.email} <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    {t.demo.message} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder={t.demo.messagePlaceholder} 
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-32" 
                    required 
                  />
                </div>
                
                {submitError && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{submitError}</AlertDescription>
                  </Alert>
                )}
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : t.demo.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shellfire GmbH. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/imprint" className="text-sm text-muted-foreground hover:text-foreground">
              Legal Notice
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
