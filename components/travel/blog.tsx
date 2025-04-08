import { TravelCard } from "@/components/travel/travel-card"
import { travelData } from "@/config/travel"

export function TravelBlog() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">Travel Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelData.posts.map((post) => (
          <TravelCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}