"use client"

import { useLanguage } from "@/contexts/language-context"
import { config } from "@/lib/site-config"

const TechLogoSVG = ({ name }: { name: string }) => {
  const logos = {
    React: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-cyan-400 opacity-30"
        />
        <circle cx="100" cy="100" r="15" fill="currentColor" className="text-cyan-400" />
        <ellipse
          cx="100"
          cy="100"
          rx="60"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-cyan-400"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="60"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-cyan-400"
          transform="rotate(60 100 100)"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="60"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-cyan-400"
          transform="rotate(120 100 100)"
        />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="currentColor" className="dark:text-white text-black opacity-20" />
        <text
          x="100"
          y="125"
          fontSize="90"
          fontWeight="bold"
          textAnchor="middle"
          fill="currentColor"
          className="dark:text-white text-black"
        >
          N
        </text>
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="160" height="160" fill="#3178C6" rx="20" />
        <text x="100" y="135" fontSize="80" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="monospace">
          TS
        </text>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="currentColor" className="text-cyan-300 opacity-20" />
        <path d="M 60 140 Q 100 80 140 140 Q 100 100 60 140" fill="currentColor" className="text-cyan-500" />
        <path d="M 70 130 Q 100 90 130 130 Q 100 110 70 130" fill="currentColor" className="text-cyan-400" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="currentColor" className="text-blue-600 opacity-20" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-blue-600" />
        <text
          x="100"
          y="115"
          fontSize="60"
          fontWeight="bold"
          textAnchor="middle"
          fill="currentColor"
          className="text-blue-600"
        >
          🐘
        </text>
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="currentColor" className="text-red-600 opacity-20" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-red-600" />
        <text
          x="100"
          y="115"
          fontSize="60"
          fontWeight="bold"
          textAnchor="middle"
          fill="currentColor"
          className="text-red-600"
        >
          ⎇
        </text>
      </svg>
    ),
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {logos[name as keyof typeof logos] || <div className="text-4xl">⚙️</div>}
    </div>
  )
}

export default function TechStack3D() {
  const { t } = useLanguage()
  const techs = config.techStack

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              💻 My Arsenal
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Menggunakan teknologi terkini untuk membangun aplikasi web yang scalable dan performant
          </p>
        </div>

        {/* Tech Grid with 3D-like animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {techs.map((tech, index) => (
            <div key={tech.name} className="group animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <style>{`
                @keyframes float-rotate {
                  0% {
                    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
                  }
                  100% {
                    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
                  }
                }
                
                .tech-card-${index}:hover .tech-logo-${index} {
                  animation: float-rotate 6s linear infinite;
                }
              `}</style>

              <div
                className={`tech-card-${index} relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 transition-all hover:shadow-2xl h-full`}
              >
                {/* 3D Logo Container */}
                <div
                  className={`tech-logo-${index} aspect-square w-full flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/15 group-hover:to-accent/15 transition-all`}
                  style={{ perspective: "1000px" }}
                >
                  <div style={{ transformStyle: "preserve-3d", width: "100%", height: "100%" }}>
                    <TechLogoSVG name={tech.name} />
                  </div>
                </div>

                {/* Tech Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{tech.icon}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {tech.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
