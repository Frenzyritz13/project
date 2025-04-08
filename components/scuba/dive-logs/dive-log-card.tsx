import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { type DiveLog } from "@/types/scuba"

interface DiveLogCardProps {
  log: DiveLog
}

export function DiveLogCard({ log }: DiveLogCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{log.location}</h3>
            <p className="text-sm text-muted-foreground">{log.date}</p>
          </div>
          <div className="text-right text-sm">
            <p>Depth: {log.depth}</p>
            <p>Duration: {log.duration}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{log.description}</p>
        <div className="text-sm text-muted-foreground">
          <p>Conditions: {log.conditions}</p>
          <p>Visibility: {log.visibility}</p>
        </div>
      </CardContent>
    </Card>
  )
}