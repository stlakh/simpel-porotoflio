"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import { config } from "@/lib/site-config"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const projects = config.projects

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">My Projects</h1>
              <p className="text-lg text-muted-foreground">
                A collection of work that showcases my skills in building modern web applications, solving complex
                problems, and delivering exceptional user experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
