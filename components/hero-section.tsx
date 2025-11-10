"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20 px-4 pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-100"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40"
          style={{ animationDelay: "2s" }}
        ></div>

        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex animate-fade-in mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-md hover:border-primary/50 transition-all">
              <Sparkles className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-semibold text-foreground">Tersedia untuk freelance & full-time</span>
            </div>
          </div>

          {/* Main Heading - Reduced from 7xl/8xl to 5xl/6xl */}
          <div className="space-y-4 animate-slide-in-up mb-8" style={{ animationDelay: "100ms" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-foreground">Membangun Solusi</span>
              <span className="gradient-text block">Digital Premium</span>
              <span className="block text-foreground">Untuk Bisnis Anda</span>
            </h1>
          </div>

          {/* Description - Reduced from lg/xl to normal size */}
          <p
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 animate-slide-in-up"
            style={{ animationDelay: "150ms" }}
          >
            Full Stack Developer berbasis di Malang dengan passion untuk membangun aplikasi yang scalable, modern, dan
            user-friendly. Saya mengkombinasikan technical expertise dengan creative problem-solving untuk hasil
            maksimal.
          </p>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full animate-slide-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {[
              { value: "5+", label: "Tahun Experience" },
              { value: "50+", label: "Proyek Selesai" },
              { value: "100%", label: "Client Puas" },
              { value: "99.9%", label: "Uptime Rata-rata" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all group"
              >
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto sm:justify-center animate-slide-in-up"
            style={{ animationDelay: "250ms" }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl text-primary-foreground hover-scale group text-base h-12 px-8 rounded-xl font-semibold"
            >
              <Link href="/projects" className="flex items-center gap-2 justify-center">
                Lihat Portofolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hover-scale text-base h-12 px-8 rounded-xl border-primary/50 hover:bg-primary/5 bg-transparent font-semibold"
            >
              <Link href="/contact">Hubungi Saya</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mb-16 animate-slide-in-up" style={{ animationDelay: "300ms" }}>
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@yilzi.dev", label: "Email" },
            ].map((social, i) => {
              const Icon = social.icon
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-125 group shadow-md"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              )
            })}
          </div>

          <div className="w-full max-w-sm animate-slide-in-up" style={{ animationDelay: "350ms" }}>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-40"></div>

              {/* Profile Card */}
              <div className="relative z-10 p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl hover:border-primary/40 transition-all hover-lift shadow-2xl">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-lg mb-6 hover:scale-110 transition-transform">
                    Y
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Yilzi Developer</h3>
                  <p className="text-sm text-muted-foreground mb-4">Full Stack Developer • Malang</p>
                  <div className="flex gap-2 flex-wrap justify-center">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                      React
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                      Node.js
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
