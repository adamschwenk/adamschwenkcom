"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  role: string
  description: string
  image: string
  skills: string[]
  achievements: string[]
  link: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  role,
  description,
  image,
  skills,
  achievements,
  link,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-2xl bg-zinc-700/30 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 transition-colors`}
    >
      <div className="p-6 md:p-8">
        <div className="mb-4">
          {featured && (
            <Badge className="mb-3 bg-white/10 text-white border-0 hover:bg-white/20">Featured Project</Badge>
          )}
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-zinc-400 mb-2 font-medium">{role}</p>
          <p className="text-zinc-300">{description}</p>
        </div>

        <div className="mb-6">
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2 text-zinc-400">Skills & Deliverables</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-zinc-800/50 text-zinc-300 border-zinc-700">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Achievements</h4>
            <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link href={link} className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
          View Project Details
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}

