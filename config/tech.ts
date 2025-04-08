import { type TechData } from "@/types/tech"

export const techData: TechData = {
  projects: [
    {
      id: "1",
      title: "Device Testing Infrastructure",
      description: "Internal tools for Amazon device testing automation",
      technologies: ["Python", "TypeScript", "React", "AWS"],
      category: "professional",
      highlights: [
        "Developed automated testing framework",
        "Improved test execution time by 40%",
        "Implemented real-time monitoring dashboard"
      ]
    },
    {
      id: "2",
      title: "Social Media Analytics Platform",
      description: "ML-powered platform for analyzing social media trends",
      technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
      githubUrl: "https://github.com/frenzyritz13/social-analytics",
      category: "personal",
      highlights: [
        "Implemented sentiment analysis models",
        "Processed 1M+ social media posts",
        "Built RESTful API for data access"
      ]
    },
    {
      id: "3",
      title: "Engine Diagnostics Tool",
      description: "Real-time diagnostics tool for engine testing",
      technologies: ["Java", "Spring Boot", "Angular", "MySQL"],
      category: "professional",
      highlights: [
        "Reduced manual testing effort by 60%",
        "Integrated with legacy systems",
        "Implemented real-time data visualization"
      ]
    },
    {
      id: "4",
      title: "AR Navigation App",
      description: "Augmented reality indoor navigation system",
      technologies: ["Unity", "ARKit", "C#", "Firebase"],
      githubUrl: "https://github.com/frenzyritz13/ar-nav",
      demoUrl: "https://ar-nav-demo.netlify.app",
      category: "hackathon",
      highlights: [
        "Won first place at USC Hackathon",
        "Implemented AR path finding",
        "Built cross-platform mobile app"
      ]
    }
  ],
  githubStats: {
    totalContributions: 847,
    repositories: 35,
    followers: 124
  }
}