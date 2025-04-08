import { Palette, Map, Waves, Briefcase, Code, Mic } from "lucide-react"

export const navigationConfig = [
  {
    title: "Art",
    description: "Exploring creativity through flame working, stained glass, and macramé",
    icon: Palette,
    href: "/art",
  },
  {
    title: "Travel",
    description: "Adventures and stories from around the world",
    icon: Map,
    href: "/travel",
  },
  {
    title: "Scuba Diving",
    description: "Underwater exploration and diving certifications",
    icon: Waves,
    href: "/scuba",
  },
  {
    title: "Career",
    description: "Professional journey and achievements",
    icon: Briefcase,
    href: "/career",
  },
  {
    title: "Tech Projects",
    description: "Innovative solutions and technical contributions",
    icon: Code,
    href: "/tech",
  },
  {
    title: "Conferences & Talks",
    description: "Speaking engagements and knowledge sharing",
    icon: Mic,
    href: "/talks",
  },
] as const