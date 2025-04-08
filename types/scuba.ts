export interface Certification {
  id: string
  name: string
  organization: string
  date: string
  level: string
  description: string
}

export interface DiveLog {
  id: string
  location: string
  date: string
  depth: string
  duration: string
  description: string
  conditions: string
  visibility: string
}

export interface ScubaData {
  certifications: Certification[]
  diveLogs: DiveLog[]
  totalDives: number
  maxDepth: string
}