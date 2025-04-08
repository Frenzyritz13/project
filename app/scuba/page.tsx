import { ScubaHero } from "@/components/scuba/hero"
import { Certifications } from "@/components/scuba/certifications"
import { DiveLogs } from "@/components/scuba/dive-logs"
import { Stats } from "@/components/scuba/stats"

export default function ScubaPage() {
  return (
    <div className="flex flex-col gap-8">
      <ScubaHero />
      <Stats />
      <Certifications />
      <DiveLogs />
    </div>
  )
}