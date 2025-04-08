import { type ScubaData } from "@/types/scuba"

export const scubaData: ScubaData = {
  certifications: [
    {
      id: "1",
      name: "Open Water Diver",
      organization: "PADI",
      date: "2022",
      level: "Beginner",
      description: "Entry level certification for recreational diving"
    },
    {
      id: "2",
      name: "Advanced Open Water Diver",
      organization: "PADI",
      date: "2023",
      level: "Advanced",
      description: "Advanced training in navigation, deep diving, and night diving"
    }
  ],
  diveLogs: [
    {
      id: "1",
      location: "Great Barrier Reef, Australia",
      date: "2023-06-15",
      depth: "18m",
      duration: "45 min",
      description: "Explored coral formations and encountered sea turtles",
      conditions: "Calm seas, sunny",
      visibility: "20m"
    },
    {
      id: "2",
      location: "Catalina Island, California",
      date: "2023-04-22",
      depth: "15m",
      duration: "40 min",
      description: "Kelp forest dive with abundant marine life",
      conditions: "Mild current, overcast",
      visibility: "12m"
    }
  ],
  totalDives: 25,
  maxDepth: "30m"
}