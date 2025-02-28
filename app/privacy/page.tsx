
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
              {language === "de" ? (
                <>
                  <h2>Datenschutzerklärung für knobits.de</h2>
                  <p><em>Letzte Aktualisierung: 29. Februar 2025</em></p>

                  <p>Vielen Dank, dass Sie knobits.de besuchen („wir", „uns" oder „unser"). Diese Datenschutzerklärung informiert Sie darüber, wie wir Ihre personenbezogenen Daten erfassen, verwenden, speichern und schützen, wenn Sie unsere Website und Dienstleistungen nutzen. Durch den Zugriff auf oder die Nutzung unserer Website erklären Sie sich mit den in dieser Erklärung beschriebenen Praktiken einverstanden.</p>

                  <h3>1. Welche Informationen wir erheben</h3>
                  <p>Wenn Sie über unsere Website mit uns in Kontakt treten, können wir die folgenden personenbezogenen Daten erfassen:</p>
                  <ul>
                    <li><strong>Name:</strong> Zur Identifizierung Ihrer Person.</li>
                    <li><strong>E-Mail-Adresse:</strong> Um auf Ihre Anfragen zu antworten.</li>
                    <li><strong>Telefonnummer:</strong> Um Sie bezüglich unserer Dienstleistungen zu kontaktieren.</li>
                    <li><strong>Nachrichteninhalt:</strong> Um Ihre Bedürfnisse zu verstehen und Ihnen angemessen zu antworten.</li>
                  </ul>

                  <h3>2. Wie wir Ihre Daten verwenden</h3>
                  <p>Wir verwenden Ihre personenbezogenen Daten ausschließlich zu folgenden Zwecken:</p>
                  <ul>
                    <li><strong>Kommunikation:</strong> Um auf Ihre Anfragen zu antworten, Ihnen Informationen über unsere Dienstleistungen bereitzustellen und Ihren Anfragen nachzukommen.</li>
                    <li><strong>Kundensupport:</strong> Um unsere Dienstleistungsangebote zu verwalten und basierend auf Ihrem Feedback zu verbessern.</li>
                    <li><strong>Administrative Zwecke:</strong> Zur Führung von Aufzeichnungen und zur Einhaltung gesetzlicher Verpflichtungen.</li>
                  </ul>
                  <p>Wir verkaufen, vermieten oder verleasen Ihre personenbezogenen Daten nicht an Dritte.</p>

                  <h3>3. Rechtsgrundlage der Verarbeitung</h3>
                  <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage Ihrer Einwilligung sowie unserer berechtigten Interessen an der Verwaltung der Kommunikation und Bereitstellung unserer Dienstleistungen. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie uns über die unten angegebenen Kontaktmöglichkeiten informieren. Bitte beachten Sie, dass der Widerruf der Einwilligung unsere Fähigkeit beeinträchtigen kann, auf Ihre Anfragen zu reagieren.</p>

                  <h3>4. Datenspeicherung</h3>
                  <p>Wir speichern Ihre personenbezogenen Daten so lange, wie es für die in dieser Datenschutzerklärung beschriebenen Zwecke erforderlich ist, es sei denn, es ist gesetzlich eine längere Aufbewahrungsdauer vorgeschrieben oder gestattet. Nach Ablauf dieser Frist werden Ihre Daten sicher gelöscht oder anonymisiert.</p>

                  <h3>5. Datensicherheit</h3>
                  <p>Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen. Obwohl wir uns bemühen, Ihre Daten zu schützen, gibt es keine vollständig sichere Übertragungsmethode über das Internet, weshalb wir die absolute Sicherheit nicht garantieren können.</p>

                  <h3>6. Ihre Rechte</h3>
                  <p>Je nach Rechtsordnung können Sie bestimmte Rechte in Bezug auf Ihre personenbezogenen Daten haben, einschließlich:</p>
                  <ul>
                    <li><strong>Auskunft:</strong> Sie können eine Kopie der bei uns gespeicherten Daten anfordern.</li>
                    <li><strong>Berichtigung:</strong> Sie können verlangen, dass wir unrichtige oder unvollständige Informationen korrigieren.</li>
                    <li><strong>Löschung:</strong> Sie können uns auffordern, Ihre personenbezogenen Daten zu löschen.</li>
                    <li><strong>Widerspruch/Einschränkung:</strong> Sie können der Verarbeitung widersprechen oder die Einschränkung bestimmter Verarbeitungsaktivitäten verlangen.</li>
                    <li><strong>Datenübertragbarkeit:</strong> Sie haben unter Umständen das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                  </ul>
                  <p>Um eines dieser Rechte auszuüben oder wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte über die unten angegebenen Details.</p>

                  <h3>7. Dienste von Drittanbietern</h3>
                  <p>Unsere Website kann Links zu Websites oder Diensten Dritter enthalten. Wir sind nicht verantwortlich für die Datenschutzpraktiken oder Inhalte dieser externen Seiten. Wir empfehlen Ihnen, die Datenschutzerklärungen der jeweiligen Drittanbieter zu lesen.</p>

                  <h3>8. Änderungen dieser Datenschutzerklärung</h3>
                  <p>Wir behalten uns vor, diese Datenschutzerklärung von Zeit zu Zeit zu aktualisieren, um Änderungen unserer Praktiken oder der geltenden Gesetze Rechnung zu tragen. Bei Änderungen werden wir das Datum der „Letzten Aktualisierung" oben in dieser Erklärung anpassen. Bitte überprüfen Sie diese Datenschutzerklärung regelmäßig auf Aktualisierungen.</p>

                  <h3>9. Kontakt</h3>
                  <p>Wenn Sie Fragen oder Bedenken zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter:</p>
                  <ul>
                    <li><strong>E-Mail:</strong> hosting@shellfire.de</li>
                    <li><strong>Telefon:</strong> +49 (0) 6101 659 252 40</li>
                    <li><strong>Adresse:</strong> Shellfire GmbH, Altkönigstraße 10A, 61389 Schmitten, Deutschland</li>
                  </ul>
                </>
              ) : (
                <>
                  <h2>Privacy Policy for knobits.de</h2>
                  <p><em>Last updated: June 1, 2024</em></p>

                  <p>Thank you for visiting knobits.de ("we," "us," or "our"). This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website and services. By accessing or using our website, you agree to the practices described in this policy.</p>

                  <h3>1. Information We Collect</h3>
                  <p>When you contact us through our website, we may collect the following personal information:</p>
                  <ul>
                    <li><strong>Name:</strong> To identify you.</li>
                    <li><strong>Email Address:</strong> To respond to your inquiries.</li>
                    <li><strong>Phone Number:</strong> To contact you regarding our services.</li>
                    <li><strong>Message Content:</strong> To understand your needs and provide appropriate responses.</li>
                  </ul>

                  <h3>2. How We Use Your Information</h3>
                  <p>We use your personal information solely for the following purposes:</p>
                  <ul>
                    <li><strong>Communication:</strong> To reply to your inquiries, provide information about our services, and follow up on your requests.</li>
                    <li><strong>Customer Support:</strong> To manage and improve our service offerings based on your feedback.</li>
                    <li><strong>Administrative Purposes:</strong> To maintain records and ensure compliance with applicable legal obligations.</li>
                  </ul>
                  <p>We do not sell, rent, or lease your personal information to third parties.</p>

                  <h3>3. Legal Basis for Processing</h3>
                  <p>Our processing of your personal data is based on your consent and our legitimate interests in managing communications and providing services. You may withdraw your consent at any time by contacting us using the details provided below. Please note that withdrawing consent may affect our ability to respond to your inquiries.</p>

                  <h3>4. Data Retention</h3>
                  <p>We retain your personal information for as long as is necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law. After this period, your data will be securely deleted or anonymized.</p>

                  <h3>5. Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. While we strive to protect your data, no transmission method over the internet is completely secure, so we cannot guarantee absolute security.</p>

                  <h3>6. Your Rights</h3>
                  <p>Depending on your jurisdiction, you may have certain rights regarding your personal information, including:</p>
                  <ul>
                    <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
                    <li><strong>Correction:</strong> Request that we update or correct any inaccurate or incomplete information.</li>
                    <li><strong>Deletion:</strong> Ask us to delete your personal information.</li>
                    <li><strong>Objection/Restriction:</strong> Object to or request the restriction of certain processing activities.</li>
                    <li><strong>Data Portability:</strong> Request your data in a structured, commonly used, and machine-readable format.</li>
                  </ul>
                  <p>To exercise any of these rights or for any privacy-related questions, please contact us using the contact details below.</p>

                  <h3>7. Third-Party Services</h3>
                  <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

                  <h3>8. Changes to This Privacy Policy</h3>
                  <p>We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. When we post changes, we will update the "Last updated" date at the top of this policy. We encourage you to review this policy periodically for any updates.</p>

                  <h3>9. Contact Us</h3>
                  <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                  <ul>
                    <li><strong>Email:</strong> hosting@shellfire.de</li>
                    <li><strong>Phone:</strong> +49 (0) 6101 659 252 40</li>
                    <li><strong>Address:</strong> Shellfire GmbH, Altkönigstraße 10A, 61389 Schmitten, Germany</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
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
