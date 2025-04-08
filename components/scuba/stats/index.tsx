import { StatCard } from "./stat-card"
import { scubaData } from "@/config/scuba"

export function Stats() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <div className="grid grid-cols-2 gap-6">
        <StatCard label="Total Dives" value={scubaData.totalDives} />
        <StatCard label="Maximum Depth" value={scubaData.maxDepth} />
      </div>
    </section>
  )
}