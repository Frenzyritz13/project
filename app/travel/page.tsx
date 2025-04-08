import { TravelHero } from "@/components/travel/hero"
import { TravelMap } from "@/components/travel/map"
import { TravelBlog } from "@/components/travel/blog"

export default function TravelPage() {
  return (
    <div className="flex flex-col gap-8">
      <TravelHero />
      <TravelMap />
      <TravelBlog />
    </div>
  )
}