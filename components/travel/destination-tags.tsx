import { travelData } from "@/config/travel"

export function DestinationTags() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {travelData.destinations.map((destination) => (
        <span
          key={destination.id}
          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {destination.country}
        </span>
      ))}
    </div>
  )
}