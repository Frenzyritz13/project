import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { type Artwork } from "@/types/artwork"

interface ArtworkCardProps {
  artwork: Artwork
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="text-lg font-semibold">{artwork.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{artwork.description}</p>
        {artwork.purchaseUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={artwork.purchaseUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Available for Purchase
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}