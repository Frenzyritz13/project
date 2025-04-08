import { ArtworkCard } from "./artwork-card"
import { artworksData } from "@/config/artworks"

interface ArtworkGridProps {
  category: string
}

export function ArtworkGrid({ category }: ArtworkGridProps) {
  const filteredArtworks = category === "all" 
    ? artworksData
    : artworksData.filter(artwork => artwork.category === category)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredArtworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  )
}