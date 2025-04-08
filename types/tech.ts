export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
  category: "professional" | "personal" | "hackathon"
  highlights: string[]
}

export interface TechData {
  projects: Project[]
  githubStats: {
    totalContributions: number
    repositories: number
    followers: number
  }
}