import { HeroSection } from "@/components/sections/hero-section"
import { HighlightsSection } from "@/components/sections/highlights-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <HighlightsSection />
    </div>
  )
}