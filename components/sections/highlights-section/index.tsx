import { HighlightCard } from "./highlight-card"
import { navigationConfig } from "@/config/navigation"

export function HighlightsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Explore My World
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationConfig.map((item) => (
            <HighlightCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}