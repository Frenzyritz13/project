import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Certification } from "@/types/scuba"

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{certification.name}</h3>
            <p className="text-sm text-muted-foreground">{certification.organization}</p>
          </div>
          <Badge>{certification.level}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{certification.description}</p>
        <p className="text-sm text-muted-foreground">Certified: {certification.date}</p>
      </CardContent>
    </Card>
  )
}