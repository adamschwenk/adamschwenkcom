import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Product Strategy & Leadership",
      skills: [
        "Product Strategy",
        "Agile (Scrum, Kanban)",
        "Cross-Functional Collaboration",
        "Stakeholder Management",
        "Growth Strategy",
        "User-Centered Design",
        "Executive Communication",
      ],
    },
    {
      category: "AI & Technical Expertise",
      skills: [
        "Generative AI",
        "AI/ML Integration",
        "LLMs & NLP",
        "SQL",
        "API Development",
        "A/B Testing",
        "Real-Time Analytics",
      ],
    },
    {
      category: "Product & Data Tools",
      skills: [
        "Jira & Confluence",
        "Figma & Adobe",
        "Google Analytics",
        "Mixpanel & Amplitude",
        "Looker & Tableau",
        "Optimizely",
        "ProductBoard",
      ],
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="bg-zinc-700/30 rounded-2xl p-6 md:p-8 border border-zinc-700/50 hover:border-zinc-600 transition-colors"
        >
          <h3 className="text-xl font-bold mb-6 text-white">{category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, idx) => (
              <Badge key={idx} className="bg-zinc-800/50 text-zinc-300 border-zinc-700 py-1.5 px-3 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

