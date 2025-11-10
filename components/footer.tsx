"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@yilzi.dev", label: "Email" },
]

const footerLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.contact", href: "/contact" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Y</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Yilzi</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("footer.description")}</p>
          </div>

          {/* Links - Desktop */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-foreground mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-foreground mb-4">{t("footer.connect")}</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t("footer.getInTouch")}</h3>
            <p className="text-sm text-muted-foreground">{t("footer.interested")}</p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t("footer.sayHello")}
            </Link>
          </div>
        </div>

        {/* Social Links - Mobile */}
        <div className="md:hidden mb-8">
          <h3 className="font-semibold text-foreground mb-4">{t("footer.connect")}</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© {currentYear} Yilzi. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
