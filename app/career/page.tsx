import { CareerHero } from "@/components/career/hero"
import { Experience } from "@/components/career/experience"
import { Skills } from "@/components/career/skills"
import { Education } from "@/components/career/education"

export default function CareerPage() {
  return (
    <div className="flex flex-col gap-8">
      <CareerHero />
      <Experience />
      <Education />
      <Skills />
    </div>
  )
}