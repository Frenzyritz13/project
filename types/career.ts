export interface Job {
  id: string
  title: string
  company: string
  period: string
  achievements: string[]
}

export interface Education {
  degree: string
  school: string
  period: string
  gpa: string
}

export interface SkillSet {
  languages: string[]
  frameworks: string[]
  tools: string[]
  databases: string[]
}

export interface CareerData {
  experience: Job[]
  skills: SkillSet
  education: Education[]
}