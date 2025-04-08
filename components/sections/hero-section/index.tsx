import { Profile } from "./profile"
import { CTAButtons } from "./cta-buttons"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Profile />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm Ritvi Mishra
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            A multifaceted individual passionate about art, technology, and adventure.
            Exploring the intersection of creativity and innovation.
          </p>
          <CTAButtons />
        </div>
      </div>
    </section>
  )
}