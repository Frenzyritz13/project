"use client"

import { Button } from "@/components/ui/button"
import { type Project } from "@/types/tech"

interface ProjectFilterProps {
  selectedCategory: Project["category"] | "all"
  onCategoryChange: (category: Project["category"] | "all") => void
}

export function ProjectFilter({ selectedCategory, onCategoryChange }: ProjectFilterProps) {
  const categories = ["all", "professional", "personal", "hackathon"] as const

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="capitalize"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}