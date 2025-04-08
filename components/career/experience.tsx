import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { careerData } from "@/config/career"

export function Experience() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
      <div className="space-y-6">
        {careerData.experience.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {job.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm">{achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}