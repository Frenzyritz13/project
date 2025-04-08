import { StatCard } from "./stat-card"
import { talksData } from "@/config/talks"
import { Mic, Globe, Hash } from "lucide-react"

export function TalksStats() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          label="Total Talks" 
          value={talksData.stats.totalTalks}
          icon={<Mic className="h-6 w-6" />}
        />
        <StatCard 
          label="Countries" 
          value={talksData.stats.countries}
          icon={<Globe className="h-6 w-6" />}
        />
        <StatCard 
          label="Top Topics" 
          value={talksData.stats.topTopics.length}
          icon={<Hash className="h-6 w-6" />}
        />
      </div>
    </section>
  )
}