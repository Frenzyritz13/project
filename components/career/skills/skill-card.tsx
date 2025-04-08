import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface SkillCardProps {
  category: string
  skills: string[]
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-semibold capitalize">{category}</h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}