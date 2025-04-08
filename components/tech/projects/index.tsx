"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { ProjectFilter } from "./project-filter"
import { techData } from "@/config/tech"
import { type Project } from "@/types/tech"

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Project["category"] | "all">("all")

  const filteredProjects = selectedCategory === "all"
    ? techData.projects
    : techData.projects.filter(project => project.category === selectedCategory)

  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>
      <ProjectFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}