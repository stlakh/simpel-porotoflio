"use client"

import { useLanguage } from "@/contexts/language-context"

export default function TechStack() {
  const { t } = useLanguage()

  const categories = [
    {
      title: "Frontend",
      description: "Client-side development",
      techs: [
        {
          name: "React",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="2" fill="#61DAFB" />
              <path
                d="M12 2C6.48 2 2 7.48 2 14s4.48 12 10 12 10-4.48 10-10S17.52 2 12 2m0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4"
                stroke="#61DAFB"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          name: "Next.js",
          logo: (
            <svg viewBox="0 0 180 180" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <mask
                id="mask0_408_134"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="180"
                height="180"
              >
                <circle cx="90" cy="90" r="90" fill="white" />
              </mask>
              <g mask="url(#mask0_408_134)">
                <circle cx="90" cy="90" r="90" fill="currentColor" />
                <path
                  d="M149.508 157.52L69.142 54h0V157.52M115.633 54h0V155.501"
                  stroke="white"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          ),
        },
        {
          name: "TypeScript",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="#3178c6" rx="2" />
              <path d="M13.5 9h-3v6h3v-6zm3 0h-3v6h3v-6z" fill="white" />
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C5.37 0 1.25 3.75 1.25 9.375c0 3.75 1.875 7.5 5.625 9.375 3.75 1.875 9.375 1.875 13.125 0 3.75-1.875 5.625-5.625 5.625-9.375C22.75 3.75 18.63 0 12 0zm0 2.5c5.385 0 8.75 2.5 8.75 6.875 0 2.5-1.25 5-3.75 6.25-2.5 1.25-6.875 1.25-9.375 0-2.5-1.25-3.75-3.75-3.75-6.25 0-4.375 3.365-6.875 8.75-6.875z"
                fill="#06B6D4"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Backend",
      description: "Server-side development",
      techs: [
        {
          name: "Node.js",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z" fill="#339933" />
              <path d="M10 4h4v12h-4V4m4 8h4v4h-4v-4m-8 0h4v4H6v-4m4-4h4v4h-4v-4" fill="white" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "PostgreSQL",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#336791" />
              <path
                d="M12 4c-4.418 0-8 2.239-8 5 0 2.761 3.582 5 8 5s8-2.239 8-5c0-2.761-3.582-5-8-5z"
                fill="white"
                opacity="0.2"
              />
            </svg>
          ),
        },
        {
          name: "MongoDB",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"
                fill="#13AA52"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Database & Cache",
      description: "Data management solutions",
      techs: [
        {
          name: "PostgreSQL",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#336791" />
              <path
                d="M12 4c-4.418 0-8 2.239-8 5 0 2.761 3.582 5 8 5s8-2.239 8-5c0-2.761-3.582-5-8-5z"
                fill="white"
                opacity="0.3"
              />
            </svg>
          ),
        },
        {
          name: "Redis",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="20" height="12" fill="#DC382D" rx="2" />
              <text x="12" y="15" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">
                REDIS
              </text>
            </svg>
          ),
        },
        {
          name: "Supabase",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#3ECF8E" />
            </svg>
          ),
        },
        {
          name: "Firebase",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13.5l8-15 2 4 6-12" stroke="#FFA500" strokeWidth="2" fill="none" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Deployment and development tools",
      techs: [
        {
          name: "Docker",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="20" height="12" fill="#2496ED" rx="2" />
              <text x="12" y="15" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">
                DOCKER
              </text>
            </svg>
          ),
        },
        {
          name: "Git",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#F1502F" />
              <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" />
            </svg>
          ),
        },
        {
          name: "GitHub Actions",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#181717" />
              <circle cx="12" cy="12" r="6" fill="white" opacity="0.3" />
            </svg>
          ),
        },
        {
          name: "Vercel",
          logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,2 2,22 22,22" fill="currentColor" />
            </svg>
          ),
        },
      ],
    },
  ]

  return (
    <section className="py-32 md:py-48 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-32 animate-fade-in space-y-6">
          <h2 className="text-6xl md:text-7xl font-bold text-foreground">Tech Stack Profesional</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stack teknologi yang saya kuasai untuk membangun aplikasi yang scalable, performant, dan maintainable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className="space-y-10 animate-slide-in-up"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <div className="space-y-4 pb-6 border-b border-border/50">
                <h3 className="text-4xl font-bold gradient-text">{category.title}</h3>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {category.techs.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 hover:from-card hover:to-card/50 hover:border-primary/50 transition-all hover-lift cursor-pointer"
                    style={{ animationDelay: `${(catIndex * 4 + index) * 50}ms` }}
                  >
                    <div className="flex flex-col items-center gap-4 h-full justify-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:shadow-lg shadow-md">
                        {tech.logo}
                      </div>
                      <h4 className="text-base font-semibold text-foreground text-center group-hover:gradient-text transition-all">
                        {tech.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-32 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "15+ Technologies", value: "Mastered", icon: "🛠️" },
              { label: "50+ Projects", value: "Completed", icon: "💻" },
              { label: "100% Client", value: "Satisfaction", icon: "⭐" },
              { label: "99.9% Uptime", value: "Average", icon: "📈" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 hover:from-card hover:to-card/50 transition-all text-center hover-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.label}</div>
                <p className="text-muted-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
