import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { type Project } from "@/types/tech"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
          <Badge>{project.category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          
          <ul className="list-disc list-inside space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-sm">{highlight}</li>
            ))}
          </ul>

          <div className="flex gap-4 pt-4">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}