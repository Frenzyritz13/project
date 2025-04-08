"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArtworkGrid } from "./artwork-grid"

export function ArtGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const categories = ["all", "flame-working", "stained-glass", "macrame"]

  return (
    <section className="container px-4 md:px-6 py-8">
      <Tabs defaultValue="all" onValueChange={setActiveCategory}>
        <TabsList className="w-full justify-start mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category.split("-").map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(" ")}
            </TabsTrigger>
          ))}
        </TabsList>
        <ArtworkGrid category={activeCategory} />
      </Tabs>
    </section>
  )
}