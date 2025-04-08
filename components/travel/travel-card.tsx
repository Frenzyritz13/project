import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { type TravelPost } from "@/types/travel"
import { formatDate } from "@/lib/utils"

interface TravelCardProps {
  post: TravelPost
}

export function TravelCard({ post }: TravelCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3 className="text-lg font-semibold">{post.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
      </CardContent>
    </Card>
  )
}