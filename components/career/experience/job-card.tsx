import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { type Job } from "@/types/career"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card>
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
  )
}