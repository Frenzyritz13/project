import { ArtGallery } from "@/components/art/gallery"
import { ArtHero } from "@/components/art/hero"

export default function ArtPage() {
  return (
    <div className="flex flex-col gap-8">
      <ArtHero />
      <ArtGallery />
    </div>
  )
}