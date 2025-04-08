export interface TravelDestination {
  id: string
  country: string
  cities: string[]
  coordinates: {
    lat: number
    lng: number
  }
  visitDate: string
}

export interface TravelPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  imageUrl: string
  destination: string
  tags: string[]
}