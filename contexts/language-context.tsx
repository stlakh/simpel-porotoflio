"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "home.greeting": "Hi, I'm Yilzi",
    "home.description":
      "Full Stack Developer from Malang, Indonesia. I specialize in building modern web applications with React, Next.js, and TypeScript.",
    "home.viewProjects": "View Projects",
    "home.getInTouch": "Get in Touch",
    "projects.title": "My Projects",
    "projects.description":
      "A collection of work that showcases my skills in building modern web applications, solving complex problems, and delivering exceptional user experiences.",
    "projects.featured": "Featured",
    "contact.title": "Get in Touch",
    "contact.description":
      "Let's connect and explore how we can work together. I'm always open to new opportunities and interesting projects.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.success": "Thanks for reaching out! I'll get back to you soon.",
    "contact.form.error": "Something went wrong. Please try again.",
    "location.title": "Location",
    "location.description":
      "Based in Malang, Indonesia. Always open to collaborating with teams remotely or meeting in person.",
    "social.title": "Connect With Me",
    "social.description":
      "Follow my work, get updates, and stay connected across various social platforms. Let's build amazing things together!",
    "footer.description": "Full Stack Developer crafting beautiful digital experiences.",
    "footer.navigation": "Navigation",
    "footer.connect": "Connect",
    "footer.getInTouch": "Get in Touch",
    "footer.interested": "Interested in working together? Let's talk!",
    "footer.sayHello": "Say Hello",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",
    "home.greeting": "Hai, saya Yilzi",
    "home.description":
      "Full Stack Developer dari Malang, Indonesia. Saya mengkhususkan diri dalam membangun aplikasi web modern dengan React, Next.js, dan TypeScript.",
    "home.viewProjects": "Lihat Proyek",
    "home.getInTouch": "Hubungi Saya",
    "projects.title": "Proyek Saya",
    "projects.description":
      "Kumpulan pekerjaan yang menunjukkan keahlian saya dalam membangun aplikasi web modern, menyelesaikan masalah kompleks, dan memberikan pengalaman pengguna yang luar biasa.",
    "projects.featured": "Unggulan",
    "contact.title": "Hubungi Saya",
    "contact.description":
      "Mari terhubung dan jelajahi cara kami bekerja sama. Saya selalu terbuka terhadap peluang baru dan proyek menarik.",
    "contact.form.name": "Nama",
    "contact.form.email": "Email",
    "contact.form.subject": "Subjek",
    "contact.form.message": "Pesan",
    "contact.form.send": "Kirim Pesan",
    "contact.form.success": "Terima kasih telah menghubungi! Saya akan segera merespons.",
    "contact.form.error": "Ada yang salah. Silakan coba lagi.",
    "location.title": "Lokasi",
    "location.description":
      "Berbasis di Malang, Indonesia. Selalu terbuka untuk berkolaborasi dengan tim jarak jauh atau bertemu langsung.",
    "social.title": "Terhubung Dengan Saya",
    "social.description":
      "Ikuti pekerjaan saya, dapatkan pembaruan, dan tetap terhubung di berbagai platform sosial. Mari kita membangun hal-hal luar biasa bersama!",
    "footer.description": "Full Stack Developer yang menciptakan pengalaman digital yang indah.",
    "footer.navigation": "Navigasi",
    "footer.connect": "Terhubung",
    "footer.getInTouch": "Hubungi Kami",
    "footer.interested": "Tertarik untuk bekerja sama? Mari kita bicara!",
    "footer.sayHello": "Kirim Salam",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Syarat Layanan",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
