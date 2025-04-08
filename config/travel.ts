import { type TravelDestination, type TravelPost } from "@/types/travel"

export const travelData: {
  destinations: TravelDestination[]
  posts: TravelPost[]
} = {
  destinations: [
    {
      id: "1",
      country: "Japan",
      cities: ["Tokyo", "Kyoto", "Osaka"],
      coordinates: {
        lat: 35.6762,
        lng: 139.6503,
      },
      visitDate: "2023-04",
    },
    {
      id: "2",
      country: "Italy",
      cities: ["Rome", "Florence", "Venice"],
      coordinates: {
        lat: 41.9028,
        lng: 12.4964,
      },
      visitDate: "2023-07",
    },
    // Add more destinations
  ],
  posts: [
    {
      id: "1",
      title: "Cherry Blossom Season in Japan",
      excerpt: "Experiencing the magical sakura season in Tokyo and Kyoto.",
      content: "Full blog post content here...",
      date: "2023-04-15",
      imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800",
      destination: "Japan",
      tags: ["Asia", "Culture", "Spring"],
    },
    {
      id: "2",
      title: "Summer in Tuscany",
      excerpt: "Exploring the rolling hills and historic cities of central Italy.",
      content: "Full blog post content here...",
      date: "2023-07-22",
      imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
      destination: "Italy",
      tags: ["Europe", "Food", "Summer"],
    },
    // Add more blog posts
  ],
}