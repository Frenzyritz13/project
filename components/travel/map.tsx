"use client"

import { Card } from "@/components/ui/card"
import { DestinationTags } from "./destination-tags"

export function TravelMap() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Places I've Been</h2>
        <div className="aspect-[16/9] bg-muted rounded-lg">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map coming soon</p>
          </div>
        </div>
        <DestinationTags />
      </Card>
    </section>
  )
}