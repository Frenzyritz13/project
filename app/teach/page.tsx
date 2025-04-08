import { TeachHero } from "@/components/teach/hero"
import { TeachingPhilosophy } from "@/components/teach/philosophy"
import { TeachingHighlights } from "@/components/teach/highlights"

export default function TeachPage() {
  return (
    <div className="flex flex-col gap-8">
      <TeachHero />
      <TeachingPhilosophy />
      <TeachingHighlights />
    </div>
  )
}