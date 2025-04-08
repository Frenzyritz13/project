import { TalksHero } from "@/components/talks/hero"
import { TalksList } from "@/components/talks/talks-list"
import { TalksStats } from "@/components/talks/stats"

export default function TalksPage() {
  return (
    <div className="flex flex-col gap-8">
      <TalksHero />
      <TalksStats />
      <TalksList />
    </div>
  )
}