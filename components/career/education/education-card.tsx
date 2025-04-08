import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { type Education } from "@/types/career"

interface EducationCardProps {
  education: Education
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">{education.school}</p>
          </div>
          <p className="text-sm text-muted-foreground">{education.period}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">GPA: {education.gpa}</p>
      </CardContent>
    </Card>
  )
}