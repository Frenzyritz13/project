export interface Talk {
  id: string
  title: string
  event: string
  date: string
  location: string
  description: string
  topics: string[]
  slidesUrl?: string
  videoUrl?: string
  imageUrl?: string
}

export interface TalksData {
  talks: Talk[]
  stats: {
    totalTalks: number
    countries: number
    topTopics: string[]
  }
}