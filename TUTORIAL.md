# Tutorial Lengkap Portfolio Yilzi

Panduan langkah demi langkah untuk memahami dan mengembangkan portfolio website.

## Daftar Isi

1. [Memulai](#memulai)
2. [Struktur Proyek](#struktur-proyek)
3. [Customization](#customization)
4. [Menambahkan Proyek Baru](#menambahkan-proyek-baru)
5. [Mengubah Tema](#mengubah-tema)
6. [Deploy](#deploy)

## Memulai

### Instalasi Awal

\`\`\`bash
# Clone repository
git clone <url-repository>

# Masuk ke folder
cd portfolio

# Install dependencies
npm install

# Jalankan dev server
npm run dev
\`\`\`

Buka http://localhost:3000 di browser Anda.

### Struktur File Penting

\`\`\`
portfolio/
├── src/config/site-config.json  # Konfigurasi utama (EDIT FILE INI!)
├── app/
│   ├── page.tsx                 # Halaman beranda
│   ├── about/page.tsx          # Halaman tentang
│   ├── projects/page.tsx       # Halaman proyek
│   ├── contact/page.tsx        # Halaman kontak
│   └── globals.css             # Style global
├── components/
│   ├── navbar.tsx              # Bar navigasi
│   ├── hero-section.tsx        # Section judul utama
│   └── tech-stack.tsx          # Tampilan tech stack
└── contexts/
    └── language-context.tsx    # Pengaturan bahasa
\`\`\`

## Struktur Proyek

### File Konfigurasi Utama: `site-config.json`

Semua data portfolio disimpan di `src/config/site-config.json`. Inilah file yang harus Anda edit!

\`\`\`json
{
  "personal": {
    "name": "Yilzi",
    "title": "Full Stack Developer",
    "email": "yilzi@example.com",
    "location": "Malang, Indonesia",
    "description": "I'm a full stack developer..."
  },
  "social": [
    {
      "name": "GitHub",
      "url": "https://github.com/yilzi",
      "icon": "🐙"
    }
  ],
  "projects": [
    {
      "title": "Nama Proyek",
      "description": "Deskripsi singkat proyek",
      "technologies": ["React", "Next.js"],
      "featured": true,
      "demo": "https://demo.com",
      "source": "https://github.com/..."
    }
  ],
  "techStack": [
    {
      "name": "React",
      "level": "Advanced",
      "icon": "⚛️"
    }
  ]
}
\`\`\`

## Customization

### 1. Mengubah Nama dan Info Pribadi

Buka `src/config/site-config.json` dan ubah bagian `personal`:

\`\`\`json
{
  "personal": {
    "name": "Nama Anda",
    "title": "Posisi Anda",
    "email": "email@anda.com",
    "location": "Kota, Negara",
    "description": "Tentang Anda..."
  }
}
\`\`\`

### 2. Menambahkan Link Sosial Media

Tambahkan ke array `social`:

\`\`\`json
{
  "social": [
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/anda",
      "icon": "💼"
    },
    {
      "name": "Twitter",
      "url": "https://twitter.com/anda",
      "icon": "🐦"
    }
  ]
}
\`\`\`

Icon dapat berupa emoji atau diganti dengan ikon dari Lucide React.

### 3. Menambahkan Proyek Baru

\`\`\`json
{
  "projects": [
    {
      "title": "E-Commerce Platform",
      "description": "Platform e-commerce modern dengan Next.js dan PostgreSQL",
      "technologies": ["React", "Next.js", "TypeScript", "PostgreSQL"],
      "featured": true,
      "demo": "https://ecommerce.example.com",
      "source": "https://github.com/anda/ecommerce"
    }
  ]
}
\`\`\`

Pastikan proyek dengan `"featured": true` akan ditampilkan dengan badge khusus.

### 4. Mengubah Tech Stack

\`\`\`json
{
  "techStack": [
    {
      "name": "React",
      "level": "Advanced",
      "icon": "⚛️"
    },
    {
      "name": "Python",
      "level": "Intermediate",
      "icon": "🐍"
    }
  ]
}
\`\`\`

## Menambahkan Proyek Baru

### Langkah 1: Update site-config.json

\`\`\`json
{
  "projects": [
    {
      "id": "project-slug",
      "title": "Nama Proyek Saya",
      "description": "Deskripsi singkat tentang proyek ini",
      "longDescription": "Deskripsi panjang dengan detail lebih lanjut",
      "technologies": ["Next.js", "TypeScript", "PostgreSQL"],
      "featured": false,
      "demo": "https://project-demo.com",
      "source": "https://github.com/anda/project"
    }
  ]
}
\`\`\`

### Langkah 2: Proyek Akan Otomatis Muncul

Proyek akan langsung muncul di halaman `/projects` tanpa perlu mengubah kode apapun!

## Mengubah Tema

### Mengubah Warna Utama

Edit `app/globals.css` dan ubah nilai oklch:

\`\`\`css
:root {
  /* Ubah warna primary dari biru ke ungu */
  --primary: oklch(0.35 0.15 280);  /* 280 = ungu */
  --accent: oklch(0.55 0.16 280);
}

.dark {
  --primary: oklch(0.65 0.13 280);  /* Ungu lebih terang di dark mode */
  --accent: oklch(0.65 0.13 280);
}
\`\`\`

### Warna OKLCH yang Populer

- **Biru**: `260`
- **Ungu**: `280`
- **Pink**: `320`
- **Merah**: `30`
- **Hijau**: `150`
- **Teal**: `180`

### Dark Mode

Dark mode diatur otomatis berdasarkan preferensi sistem. Tombol toggle tersedia di navbar.

Jika Anda ingin memaksa light atau dark mode:

\`\`\`bash
# Edit next.config.mjs atau environment variable
# NEXT_PUBLIC_FORCE_THEME=dark
\`\`\`

## Menambahkan Halaman Baru

### Membuat Halaman Custom

Buat folder baru di `app/`:

\`\`\`
app/
├── blog/
│   └── page.tsx
\`\`\`

Isi file `page.tsx`:

\`\`\`tsx
"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold">Blog</h1>
            {/* Konten halaman */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
\`\`\`

### Menambahkan Link ke Navbar

Edit `contexts/language-context.tsx` dan tambahkan:

\`\`\`typescript
const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.blog", href: "/blog" },
  // ...
]

const translations = {
  en: {
    "nav.blog": "Blog"
  },
  id: {
    "nav.blog": "Blog"
  }
}
\`\`\`

## Deploy

### Deploy ke Vercel (Recommended)

1. Push ke GitHub:
\`\`\`bash
git add .
git commit -m "Update portfolio"
git push origin main
\`\`\`

2. Buka https://vercel.com
3. Klik "New Project"
4. Pilih GitHub repository Anda
5. Klik "Deploy"

Vercel akan otomatis build dan deploy proyek Anda!

### Deploy ke Netlify

\`\`\`bash
npm run build
\`\`\`

Drag and drop folder `.next` ke Netlify.

### Deploy Manual ke Server

\`\`\`bash
npm run build
npm start
\`\`\`

Server akan berjalan di `http://localhost:3000`

## Tips & Trik

### 1. Menggunakan Animasi

Tambahkan class animasi ke elemen:

\`\`\`tsx
<div className="animate-fade-in">Konten</div>
<div className="animate-slide-in-up">Konten lain</div>
<div className="hover-scale">Hover effect</div>
\`\`\`

### 2. Responsive Design

Gunakan Tailwind breakpoints:

\`\`\`tsx
<div className="text-lg md:text-2xl lg:text-4xl">
  Text yang berubah ukuran
</div>
\`\`\`

### 3. Dark Mode Aware Styling

\`\`\`tsx
<div className="bg-white dark:bg-black text-black dark:text-white">
  Akan berubah sesuai tema
</div>
\`\`\`

## Troubleshooting

### Problem: Dark mode tidak bekerja

**Solusi**: Pastikan `suppressHydrationWarning` ada di tag `<html>`.

### Problem: Styling tidak ter-update

**Solusi**: 
1. Clear cache browser (Ctrl+Shift+Delete)
2. Jalankan `npm run dev` ulang

### Problem: Proyek tidak muncul

**Solusi**: Cek format JSON di `site-config.json` dan pastikan tidak ada syntax error.

## Resources Berguna

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)

---

Happy coding! 🚀
