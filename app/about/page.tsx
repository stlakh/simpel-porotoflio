"use client"

import { useLanguage } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { 
  Code2, 
  Zap, 
  Users, 
  Trophy, 
  Lightbulb, 
  Target, 
  Award, 
  Star,
  Rocket,
  Cpu,
  Database,
  Server,
  Shield,
  Smartphone,
  Cloud,
} from "lucide-react"
import Image from "next/image"

interface Technology {
  name: string;
  logo: string;
  officialColor: string;
}

export default function AboutPage() {
  const { t } = useLanguage()

  const stats = [
    { label: "Tahun Pengalaman", value: "5+", icon: Trophy, color: "from-orange-600 to-orange-400", desc: "Professional Experience" },
    { label: "Proyek Sukses", value: "80+", icon: Code2, color: "from-blue-600 to-blue-400", desc: "Completed Projects" },
    { label: "Client Satisfaction", value: "100%", icon: Users, color: "from-green-600 to-green-400", desc: "Happy Clients" },
    { label: "Code Quality", value: "A+", icon: Award, color: "from-purple-600 to-purple-400", desc: "Best Practices" },
    { label: "Technologies", value: "25+", icon: Cpu, color: "from-red-600 to-red-400", desc: "Mastered Tech" },
    { label: "Awards", value: "12", icon: Star, color: "from-yellow-600 to-yellow-400", desc: "Achievements" },
  ]

  const expertises = [
    {
      icon: Code2,
      title: "Frontend Excellence",
      description: "Crafting pixel-perfect, responsive UIs dengan React, Next.js, TypeScript, dan modern design systems",
      skills: ["React Hooks", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"],
      level: 95,
      projects: 45,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Architecture",
      description: "Building scalable, secure server solutions dengan microservices, REST APIs, dan real-time features",
      skills: ["Node.js", "Express", "PostgreSQL", "Redis", "WebSockets", "JWT Auth"],
      level: 90,
      projects: 35,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database Mastery",
      description: "Designing efficient data models dengan SQL optimization, migrations, dan performance tuning",
      skills: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle", "Redis", "Query Optimization"],
      level: 88,
      projects: 40,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "CI/CD pipelines, containerization, dan cloud deployment dengan best practices",
      skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx", "Monitoring"],
      level: 85,
      projects: 30,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps dengan React Native dan native-like performance",
      skills: ["React Native", "Expo", "Mobile UI", "Push Notifications", "App Store"],
      level: 82,
      projects: 15,
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Application security, optimization, dan best practices untuk production-ready apps",
      skills: ["OWASP", "Performance", "SEO", "Security", "Lighthouse", "Analytics"],
      level: 87,
      projects: 50,
      color: "from-teal-500 to-green-500"
    },
  ]

  const technologies: Record<string, Technology[]> = {
    frontend: [
      { 
        name: "React", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        officialColor: "#61DAFB"
      },
      { 
        name: "Next.js", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        officialColor: "#000000"
      },
      { 
        name: "TypeScript", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        officialColor: "#3178C6"
      },
      { 
        name: "Tailwind CSS", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        officialColor: "#06B6D4"
      },
      { 
        name: "Redux", 
        logo: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
        officialColor: "#764ABC"
      },
      { 
        name: "Zustand", 
        logo: "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.png",
        officialColor: "#FCC419"
      }
    ],
    backend: [
      { 
        name: "Node.js", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        officialColor: "#339933"
      },
      { 
        name: "Express", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        officialColor: "#000000"
      },
      { 
        name: "NestJS", 
        logo: "https://nestjs.com/img/logo-small.svg",
        officialColor: "#E0234E"
      },
      { 
        name: "Python", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        officialColor: "#3776AB"
      },
      { 
        name: "FastAPI", 
        logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
        officialColor: "#009688"
      },
      { 
        name: "GraphQL", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
        officialColor: "#E10098"
      }
    ],
    database: [
      { 
        name: "PostgreSQL", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        officialColor: "#336791"
      },
      { 
        name: "MongoDB", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
        officialColor: "#47A248"
      },
      { 
        name: "Redis", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Redis_Logo.svg",
        officialColor: "#DC382D"
      },
      { 
        name: "MySQL", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
        officialColor: "#4479A1"
      },
      { 
        name: "Prisma", 
        logo: "https://prismalens.vercel.app/header/logo-dark.svg",
        officialColor: "#2D3748"
      },
      { 
        name: "Drizzle", 
        logo: "https://orm.drizzle.team/logo.svg",
        officialColor: "#FF6B35"
      }
    ],
    tools: [
      { 
        name: "Docker", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png",
        officialColor: "#2496ED"
      },
      { 
        name: "Git", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
        officialColor: "#F05032"
      },
      { 
        name: "AWS", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        officialColor: "#FF9900"
      },
      { 
        name: "Vercel", 
        logo: "https://assets.vercel.com/image/upload/front/assets/design/black-nextjs.png",
        officialColor: "#000000"
      },
      { 
        name: "Figma", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        officialColor: "#F24E1E"
      },
      { 
        name: "Jest", 
        logo: "https://jestjs.io/img/jest.png",
        officialColor: "#C21325"
      }
    ]
  }

  const timeline = [
    { 
      year: "2019", 
      title: "The Beginning", 
      desc: "Started programming journey dengan passion untuk web technologies",
      icon: Lightbulb,
      achievements: ["First Website", "HTML/CSS Mastery", "JavaScript Basics"]
    },
    { 
      year: "2020", 
      title: "Frontend Focus", 
      desc: "Deep dive into React ecosystem dan modern frontend development",
      icon: Code2,
      achievements: ["React Mastery", "State Management", "UI/UX Principles"]
    },
    { 
      year: "2021", 
      title: "Full Stack Expansion", 
      desc: "Expanded to backend development dengan Node.js dan databases",
      icon: Zap,
      achievements: ["Node.js", "API Design", "Database Design"]
    },
    { 
      year: "2022", 
      title: "Advanced Architecture", 
      desc: "Mastering system design, scalability, dan cloud technologies",
      icon: Target,
      achievements: ["Microservices", "Cloud AWS", "DevOps"]
    },
    { 
      year: "2023", 
      title: "Team Leadership", 
      desc: "Leading development teams dan mentoring junior developers",
      icon: Users,
      achievements: ["Team Lead", "Mentoring", "Code Reviews"]
    },
    { 
      year: "2024", 
      title: "Innovation & AI", 
      desc: "Integrating AI technologies dan building cutting-edge solutions",
      icon: Rocket,
      achievements: ["AI Integration", "ML Projects", "Innovation"]
    },
  ]

  const achievements = [
    { number: "50K+", text: "Lines of Code" },
    { number: "99.9%", text: "Uptime Record" },
    { number: "2M+", text: "Users Served" },
    { number: "15+", text: "Countries Reached" },
  ]

  const TechLogo = ({ tech, size = "w-10 h-10" }: { tech: Technology; size?: string }) => {
    return (
      <div className={`${size} rounded-xl bg-white dark:bg-gray-800 p-2 shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-center`}>
        <Image
          src={tech.logo}
          alt={tech.name}
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>
    )
  }

  const favoriteStack = [
    { 
      name: "Next.js", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      color: "#000000"
    },
    { 
      name: "TypeScript", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      color: "#3178C6"
    },
    { 
      name: "Tailwind CSS", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      color: "#06B6D4"
    },
    { 
      name: "Node.js", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      color: "#339933"
    },
    { 
      name: "PostgreSQL", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      color: "#336791"
    },
    { 
      name: "Docker", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png",
      color: "#2496ED"
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 md:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/40 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start animate-fade-in">
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary via-accent to-green-500 p-1 shadow-2xl animate-float">
                    <div className="w-full h-full rounded-3xl bg-background overflow-hidden relative">
                      <Image
                        src="/images/background.jpg"
                        alt="Background"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover rounded-3xl"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
                          <div className="w-full h-full rounded-full bg-background overflow-hidden">
                            <Image
                              src="/images/profile.jpg"
                              alt="Yilzi - Full Stack Developer"
                              width={192}
                              height={192}
                              className="w-full h-full object-cover rounded-full"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold">Available for Work</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-primary">👋 Hello, I'm Yilzi</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Full Stack</span>
                  <span className="gradient-text block">Developer</span>
                  <span className="text-foreground text-2xl md:text-3xl mt-4 block">From Malang, Indonesia</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Passionate developer dengan 5+ tahun experience dalam membangun digital solutions 
                  yang impactful. Specialized in modern web technologies, scalable architecture, 
                  dan user-centric design.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {achievements.map((achievement, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold gradient-text">{achievement.number}</div>
                      <div className="text-xs text-muted-foreground">{achievement.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-border bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card transition-all text-center group animate-slide-in-up backdrop-blur-sm"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
                    <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Technical Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive skillset covering entire development stack dari ideation sampai deployment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {expertises.map((exp, i) => {
                const Icon = exp.icon
                return (
                  <div
                    key={i}
                    className="p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 transition-all hover-lift animate-slide-in-up group"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="text-sm text-muted-foreground">{exp.level}% Mastery</div>
                          <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {exp.projects} projects
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="w-full bg-border/50 rounded-full h-2 mb-6">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${exp.color}`}
                        style={{ width: `${exp.level}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-border bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Technology Stack</h2>
              <p className="text-xl text-muted-foreground">Modern tools dan technologies untuk build exceptional products</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(technologies).map(([category, techs], categoryIndex) => (
                <div 
                  key={category}
                  className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all animate-slide-in-up group"
                  style={{ animationDelay: `${categoryIndex * 150}ms` }}
                >
                  <h3 className="text-lg font-bold text-foreground mb-6 capitalize flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {techs.map((tech, techIndex) => (
                      <div 
                        key={tech.name}
                        className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 hover:bg-background/80 transition-all group-hover:scale-105"
                        style={{ animationDelay: `${(categoryIndex * 150) + (techIndex * 50)}ms` }}
                      >
                        <TechLogo tech={tech} />
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                        </div>
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: tech.officialColor }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">✨ Favorite Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {favoriteStack.map((tech, index) => (
                  <div key={tech.name} className="flex flex-col items-center gap-3 group">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-lg border border-border/50 group-hover:scale-110 transition-transform duration-300 hover:shadow-xl">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="mb-16 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Development Journey</h2>
              <p className="text-xl text-muted-foreground">Evolution dan growth sebagai professional developer</p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-green-500 rounded-full transform -translate-x-1/2 z-0 hidden md:block"></div>
              
              <div className="space-y-8 relative z-10">
                {timeline.map((item, i) => {
                  const Icon = item.icon
                  const isEven = i % 2 === 0
                  
                  return (
                    <div key={i} className={`flex flex-col md:flex-row gap-8 animate-slide-in-up ${isEven ? 'md:flex-row-reverse' : ''}`} style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-xl z-10">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-lg font-bold text-primary mt-3">{item.year}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="p-8 rounded-3xl border border-border/50 bg-card/50 hover:bg-card/80 transition-all hover-lift group">
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{item.desc}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <span
                                key={achievementIndex}
                                className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}