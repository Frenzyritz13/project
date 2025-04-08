import { JobCard } from "./job-card"
import { careerData } from "@/config/career"

export function Experience() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
      <div className="space-y-6">
        {careerData.experience.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  )
}