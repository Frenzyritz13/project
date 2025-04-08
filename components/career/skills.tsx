import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { careerData } from "@/config/career"

export function Skills() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(careerData.skills).map(([category, skills]) => (
          <Card key={category}>
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
        ))}
      </div>
    </section>
  )
}