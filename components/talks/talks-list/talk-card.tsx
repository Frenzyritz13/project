import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ExternalLink, Video } from "lucide-react"
import { type Talk } from "@/types/talks"

interface TalkCardProps {
  talk: Talk
}

export function TalkCard({ talk }: TalkCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{talk.title}</h3>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{talk.event}</span>
            <span>{talk.date}</span>
          </div>
          <p className="text-sm text-muted-foreground">{talk.location}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm">{talk.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {talk.topics.map((topic) => (
              <Badge key={topic} variant="secondary">{topic}</Badge>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            {talk.slidesUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={talk.slidesUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Slides
                </a>
              </Button>
            )}
            {talk.videoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={talk.videoUrl} target="_blank" rel="noopener noreferrer">
                  <Video className="h-4 w-4 mr-2" />
                  Watch Talk
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}