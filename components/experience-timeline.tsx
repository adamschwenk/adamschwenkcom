"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Independent Consultant",
      role: "Product Strategy & AI Innovation",
      period: "April 2023 to Current",
      location: "Remote, USA",
      description: "Providing product strategy and AI innovation consulting services to various clients.",
      highlights: [
        "Integrated Generative AI technologies to enhance personalization and automate responses for Coaching Season.",
        "Created an AI adoption framework for Navy Federal Credit Union that reduced onboarding time by 30%.",
        "Increased internal AI adoption by 40% through structured product evaluation methodology.",
      ],
      skills: ["AI Strategy", "Product Evaluation", "Coaching"],
    },
    {
      company: "Verizon",
      role: "Principal Product Manager, Product Innovation",
      period: "Oct 2019 to Apr 2023",
      location: "San Francisco, CA",
      description:
        "Led feature development and live operations for Verizon Messages (32M+ users) and Verizon My Numbers.",
      highlights: [
        "Developed AI-powered chatbot automation, cutting response times by 40%.",
        "Secured a patent for an AI-driven reminder feature.",
        "Drove a 300% revenue increase within 6 months for Verizon My Numbers.",
      ],
      skills: ["AI Integration", "Mobile Apps", "Revenue Growth"],
    },
    {
      company: "Wells Fargo",
      role: "Growth Product Manager (Contract)",
      period: "Nov 2018 to Oct 2019",
      location: "San Francisco, CA",
      description:
        "Led 0-1 development and launch of Greenhouse, a banking and budgeting app tailored for Millennials and Gen-Z.",
      highlights: [
        "Increased engagement by 35% through improved user journey.",
        "Drove a 20% increase in user acquisition with an incentivized in-app referral system.",
      ],
      skills: ["Growth Strategy", "User Acquisition", "Fintech"],
    },
    {
      company: "Capital One",
      role: "Senior Product Manager/Product Owner–Small Business Mobile",
      period: "Apr 2015 to Jan 2018",
      location: "San Francisco, CA",
      description: "Led 0-1 development and launch of Spark Business, driving mobile strategy and product vision.",
      highlights: [
        "Improved deposit success rates by 10% through user funnels and A/B testing.",
        "Increased app downloads by 30% and improved ratings from 3 to 4.5+ stars.",
      ],
      skills: ["Mobile Strategy", "Analytics", "UX Design"],
    },
    {
      company: "OpenWager",
      role: "Principal Product Manager, Mobile Social Casino",
      period: "May 2014 to Apr 2015",
      location: "San Francisco, CA",
      description:
        "Drove development and launch of USA Today Bingo Cruise, the company's first revenue-generating product.",
      highlights: [
        "Grew the company from pre-revenue to profitability, achieving a 10x ROI in the first year by optimizing in-game economies and monetization strategies.",
        "Increased player lifetime value by 30% and retention by 20% through feature innovation and live operations.",
      ],
      skills: ["Game Development", "Monetization Strategy", "Live Operations"],
    },
    {
      company: "Tout",
      role: "Director, Product Management",
      period: "Jun 2013 to May 2014",
      location: "San Francisco, CA",
      description:
        "Led development of mobile video capture, editing, and sharing tools for a social media startup focused on short-form video content.",
      highlights: [
        "Increased user-generated content uploads by 20% through streamlined video creation and editing features.",
        "Improved platform retention by 35%, introducing gamification, AI-powered recommendations, and social sharing tools.",
      ],
      skills: ["Mobile Video", "Social Media", "User Engagement"],
    },
    {
      company: "Atari",
      role: "Principal Product Manager, Mobile Games",
      period: "May 2012 to May 2013",
      location: "San Francisco, CA",
      description: "Led mobile gaming initiatives for the iconic gaming brand.",
      highlights: [
        "Launched RollerCoaster Tycoon Mobile, Atari's first social mobile game, defining the product strategy, roadmap, and live content execution.",
      ],
      skills: ["Mobile Gaming", "Product Strategy", "Game Development"],
    },
    {
      company: "iWin",
      role: "Principal Product Manager, Mobile Division",
      period: "Jun 2011 to May 2012",
      location: "San Francisco, CA",
      description: "Led mobile gaming initiatives and partnerships.",
      highlights: [
        "Led the development and launch of 1v100 and Deal or No Deal, transitioning iWin into free-to-play mobile gaming.",
        "Negotiated and onboarded third-party game developers, securing partnerships that expanded mobile game offerings.",
      ],
      skills: ["Mobile Gaming", "Partnerships", "Free-to-Play"],
    },
  ]

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Timeline connector */}
          {index < experiences.length - 1 && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-white/10"></div>}

          <div className="flex gap-8">
            {/* Timeline dot */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center z-10 relative">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-zinc-300 font-medium">{exp.role}</p>
                </div>
                <Badge className="mt-2 md:mt-0 bg-white/10 text-white border-0 hover:bg-white/20">{exp.period}</Badge>
              </div>

              <p className="text-sm text-zinc-400 mb-4">{exp.location}</p>
              <p className="mb-4 text-zinc-300">{exp.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Achievements:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="bg-zinc-800/50 text-zinc-300 border-zinc-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

