import { TechHero } from "@/components/tech/hero"
import { Projects } from "@/components/tech/projects"
import { GithubStats } from "@/components/tech/github-stats"

export default function TechPage() {
  return (
    <div className="flex flex-col gap-8">
      <TechHero />
      <GithubStats />
      <Projects />
    </div>
  )
}