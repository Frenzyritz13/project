import { TalkCard } from "./talk-card"
import { talksData } from "@/config/talks"

export function TalksList() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Speaking Engagements</h2>
      <div className="space-y-6">
        {talksData.talks.map((talk) => (
          <TalkCard key={talk.id} talk={talk} />
        ))}
      </div>
    </section>
  )
}