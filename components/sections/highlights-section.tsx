import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { navigationConfig } from "@/config/navigation"

export function HighlightsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
          Explore My World
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationConfig.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="group hover:shadow-lg transition-shadow">
                <Link href={item.href}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Icon className="h-6 w-6" />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}