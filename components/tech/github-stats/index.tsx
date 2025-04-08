import { StatCard } from "./stat-card"
import { techData } from "@/config/tech"
import { GitCommit, GitFork, Users } from "lucide-react"

export function GithubStats() {
  return (
    <section className="container px-4 md:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-8">GitHub Activity</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          label="Contributions" 
          value={techData.githubStats.totalContributions}
          icon={<GitCommit className="h-6 w-6" />}
        />
        <StatCard 
          label="Repositories" 
          value={techData.githubStats.repositories}
          icon={<GitFork className="h-6 w-6" />}
        />
        <StatCard 
          label="Followers" 
          value={techData.githubStats.followers}
          icon={<Users className="h-6 w-6" />}
        />
      </div>
    </section>
  )
}