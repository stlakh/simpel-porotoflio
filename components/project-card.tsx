"use client"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    shortDescription: string
    image: string
    technologies: string[]
    demo: string
    github: string
    featured: boolean
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full flex flex-col rounded-lg border border-border overflow-hidden hover:border-accent/50 transition-smooth hover:-translate-y-2 bg-card/50 hover:bg-card/80">
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg?height=200&width=400"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 animate-fade-in">
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{project.shortDescription}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 transition-smooth hover:scale-105 bg-transparent"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 transition-smooth hover:scale-105 bg-transparent"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
