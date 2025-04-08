"use client"

import Image from "next/image"

export function Profile() {
  return (
    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
      <Image
        src="/ritvi.jpg" 
        alt="Ritvi Mishra"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}