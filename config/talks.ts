import { type TalksData } from "@/types/talks"

export const talksData: TalksData = {
  talks: [
    {
      id: "1",
      title: "Building Scalable Device Testing Infrastructure",
      event: "AWS re:Invent",
      date: "2023-11-28",
      location: "Las Vegas, USA",
      description: "Discussed architecture and implementation of scalable testing infrastructure for Amazon devices using AWS services.",
      topics: ["AWS", "Testing", "Infrastructure", "DevOps"],
      slidesUrl: "https://speakerdeck.com/ritvi/scalable-testing",
      videoUrl: "https://youtube.com/watch?v=abc123"
    },
    {
      id: "2",
      title: "Machine Learning in Social Media Analytics",
      event: "SWE Incube Conference",
      date: "2023-10-15", 
      location: "Los Angeles, USA",
      description: "Presented research on applying machine learning techniques for social media trend analysis.",
      topics: ["Machine Learning", "Social Media", "Data Analysis"],
      slidesUrl: "https://speakerdeck.com/ritvi/ml-social-media"
    },
    {
      id: "3",
      title: "Modernizing Legacy Systems with Microservices",
      event: "Cummins Tech Conference",
      date: "2021-03-20",
      location: "Pune, India", 
      description: "Shared experience and best practices in migrating monolithic applications to microservices architecture.",
      topics: ["Microservices", "Legacy Systems", "Architecture"],
      slidesUrl: "https://speakerdeck.com/ritvi/microservices-migration"
    }
  ],
  community: {
    mentoring: [
      {
        organization: "Society of Women Engineers",
        role: "Technical Mentor",
        period: "2019 - Present",
        description: "Mentoring women in tech through resume reviews, mock interviews, and career guidance"
      },
      {
        organization: "USC Computer Science Department",
        role: "Graduate Teaching Assistant",
        period: "2022 - 2023",
        description: "Assisted professors in teaching advanced programming concepts and grading assignments"
      }
    ],
    workshops: [
      {
        title: "Introduction to Web Development",
        organization: "Women Who Code",
        date: "2023",
        attendees: 50,
        description: "Led hands-on workshop teaching HTML, CSS, and JavaScript fundamentals"
      },
      {
        title: "Getting Started with AWS",
        organization: "AWS User Group",
        date: "2023",
        attendees: 75,
        description: "Conducted workshop on AWS basics and cloud computing concepts"
      }
    ],
    hackathons: [
      {
        name: "USC Hackathon",
        role: "Mentor",
        year: "2022",
        description: "Guided student teams in developing innovative solutions"
      },
      {
        name: "SWE Hackathon",
        role: "Judge",
        year: "2023",
        description: "Evaluated projects based on technical merit and innovation"
      }
    ]
  },
  stats: {
    totalTalks: 12,
    countries: 3,
    topTopics: ["Cloud Computing", "Machine Learning", "Software Architecture"]
  }
}