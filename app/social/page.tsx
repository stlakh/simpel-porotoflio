"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { config } from "@/lib/site-config"
import { Github, Linkedin, Twitter, Instagram, Music, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialPage() {
  const socials = config.socialMedia

  const socialIcons: Record<string, React.ComponentType<any>> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    tiktok: Music,
    telegram: Send,
    whatsapp: MessageCircle,
  }

  const socialColors: Record<string, string> = {
    github: "from-slate-600 to-slate-900",
    linkedin: "from-blue-600 to-blue-900",
    twitter: "from-sky-400 to-sky-600",
    instagram: "from-pink-500 to-rose-700",
    tiktok: "from-black to-slate-800",
    telegram: "from-blue-400 to-blue-600",
    whatsapp: "from-green-400 to-green-600",
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Connect With Me</h1>
              <p className="text-lg text-muted-foreground">
                Follow my work, get updates, and stay connected across various social platforms. Let's build amazing
                things together!
              </p>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Main Social Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {Object.entries(socials).map(([key, social]) => {
                  const Icon = socialIcons[key] || Github
                  const colorClass = socialColors[key] || "from-gray-600 to-gray-900"

                  return (
                    <a
                      key={key}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-lg border border-border overflow-hidden transition-all hover:border-accent/50"
                    >
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity`}
                      />

                      {/* Content */}
                      <div className="relative p-6 flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground capitalize mb-1">{key}</h3>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            @{social.username}
                          </p>
                        </div>
                        <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Stats Section */}
              <div className="rounded-lg border border-border bg-card/50 p-8 mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-8">My Presence</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(socials).map(([key, social]) => (
                    <div key={key} className="text-center p-4 rounded-lg bg-card border border-border/50">
                      <p className="text-2xl font-bold gradient-text mb-2">{Object.keys(socials).indexOf(key) + 1}</p>
                      <p className="text-xs text-muted-foreground capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="rounded-lg border border-accent/30 bg-accent/5 p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Start a Conversation</h3>
                <p className="text-muted-foreground mb-6">
                  Pick your favorite platform and let's connect. I'm always excited to chat about projects, ideas, and
                  opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={socials.whatsapp.url} target="_blank" rel="noopener noreferrer">
                      Message on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={socials.telegram.url} target="_blank" rel="noopener noreferrer">
                      Connect on Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
