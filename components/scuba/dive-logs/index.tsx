import { DiveLogCard } from "./dive-log-card"
import { scubaData } from "@/config/scuba"

export function DiveLogs() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Dive Logs</h2>
      <div className="space-y-6">
        {scubaData.diveLogs.map((log) => (
          <DiveLogCard key={log.id} log={log} />
        ))}
      </div>
    </section>
  )
}