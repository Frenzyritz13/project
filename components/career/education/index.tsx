import { EducationCard } from "./education-card"
import { careerData } from "@/config/career"

export function Education() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Education</h2>
      <div className="space-y-6">
        {careerData.education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  )
}