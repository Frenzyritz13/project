"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
              alt="Ritvi Mishra"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm Ritvi Mishra
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            A multifaceted individual passionate about art, technology, and adventure.
            Exploring the intersection of creativity and innovation.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/career">View Resume</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}