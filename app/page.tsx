"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowDown, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import { motion, useScroll, useTransform } from "framer-motion"
import SkillsSection from "@/components/skills-section"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="relative bg-zinc-900">
      {/* Hero Section with Parallax */}
      <div ref={targetRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <div className="relative h-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0014%20%282%29.JPG-edo9ktUL0fofcRWPGutmu7oIP1MNbP.jpeg"
              alt="Adam Schwenk in front of the Millennium Falcon"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-900"></div>
          </div>
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">Adam Schwenk</h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-200">Product Manager</h2>
            <p className="text-lg md:text-xl mb-8 text-zinc-300 max-w-2xl mx-auto">
              Data-focused product leader with 10+ years of experience creating and launching consumer-facing mobile
              applications across startups and Fortune 500 companies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-white text-zinc-900 hover:bg-zinc-200 text-lg px-8 py-6">
                <a href="/Adam_Schwenk_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70">
          <Link href="#about" className="flex flex-col items-center hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={24} className="animate-bounce" />
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-xl mb-6 text-zinc-300 leading-relaxed">
              I'm a passionate product leader with expertise in developing intuitive products that align with business
              goals and deliver meaningful user experiences.
            </p>
            <p className="text-xl mb-8 text-zinc-300 leading-relaxed">
              With over a decade of experience across fintech, gaming, messaging, and telecom, I specialize in 0-1
              product development and live operations, guiding products from vision to launch in fast-paced, agile
              environments.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 rounded-2xl bg-zinc-800/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Strategic Vision</h3>
                <p className="text-zinc-400">Translating business goals into actionable product roadmaps</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-800/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Team Leadership</h3>
                <p className="text-zinc-400">Guiding cross-functional teams to deliver exceptional results</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-800/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Innovation Focus</h3>
                <p className="text-zinc-400">Leveraging emerging technologies to drive product excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 bg-zinc-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Featured Projects</h2>
            <p className="text-xl text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
              Highlights from my product management journey across fintech, telecom, and beyond
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Navy Federal Credit Union AI Initiatives"
                role="AI Product Manager"
                description="Led the adoption and implementation of AI-powered tools like Microsoft Copilot and GitHub Copilot to enhance productivity and streamline development workflows within the organization."
                image="/placeholder.svg?height=300&width=500"
                skills={[
                  "Requirements Specification",
                  "User Acceptance Testing",
                  "Employee Onboarding",
                  "Cross Functional Team Leadership",
                  "Change Management",
                ]}
                achievements={[
                  "Improved efficiency in software development",
                  "Enhanced knowledge management",
                  "Successfully implemented AI tools across teams",
                ]}
                link="/projects/navy-federal"
                featured={true}
              />
              <ProjectCard
                title="Coaching Season"
                role="Principal Product Manager"
                description="Led the design, development, and optimization of an online coaching platform connecting individuals with career, leadership, and executive coaches."
                image="/placeholder.svg?height=300&width=500"
                skills={[
                  "Product Management",
                  "Project Management",
                  "UI/UX Prototyping",
                  "Market Research",
                  "Application Lifecycle Management",
                ]}
                achievements={[
                  "Enhanced user engagement",
                  "Streamlined onboarding process",
                  "Implemented seamless booking integration",
                ]}
                link="/projects/coaching-season"
              />
              <ProjectCard
                title="Verizon Messages"
                role="Principal Product Manager"
                description="Led feature development for Verizon Messages (Message+), a cross-platform messaging app serving 20M+ users across iOS, Android, and desktop."
                image="/placeholder.svg?height=300&width=500"
                skills={["Product Management", "UX & UI", "Data Analytics", "Project Management", "AI Chatbot"]}
                achievements={[
                  "Launched patented Reminders Feature",
                  "Implemented chatbot integration",
                  "Developed bookmarking feature",
                ]}
                link="/projects/verizon-messages"
              />
              <ProjectCard
                title="Verizon My Numbers"
                role="Principal Product Manager"
                description="Led product strategy for a service allowing users to add up to four virtual phone numbers to a single smartphone for separate personal and business use."
                image="/placeholder.svg?height=300&width=500"
                skills={[
                  "Product Strategy",
                  "UX & UI",
                  "Market Research",
                  "Product Management",
                  "Product Lifecycle Management",
                ]}
                achievements={[
                  "Built dedicated voicemail features",
                  "Implemented customizable settings",
                  "Managed full product lifecycle",
                ]}
                link="/projects/verizon-my-numbers"
              />
              <ProjectCard
                title="Wells Fargo Greenhouse App"
                role="Growth Product Manager"
                description="Led the onboarding and referral program for a mobile-first banking platform designed to help users manage finances through two linked accounts."
                image="/placeholder.svg?height=300&width=500"
                skills={[
                  "Customer Onboarding",
                  "Product Management",
                  "Data Analytics",
                  "UI/UX Prototyping",
                  "Cross Functional Team Leadership",
                ]}
                achievements={[
                  "Enhanced financial health features",
                  "Improved user engagement",
                  "Successful 2018 launch",
                ]}
                link="/projects/greenhouse"
              />
              <ProjectCard
                title="Capital One Spark Business"
                role="Senior Product Manager"
                description="Led 0-1 development and launch of Spark Business, driving mobile strategy, product vision, execution, and analytics."
                image="/placeholder.svg?height=300&width=500"
                skills={["Mobile Strategy", "Analytics", "UX Design", "Product Management", "Agile Leadership"]}
                achievements={[
                  "Improved deposit success rates by 10%",
                  "Increased app downloads by 30%",
                  "Improved ratings from 3 to 4.5+ stars",
                ]}
                link="/projects/capital-one-spark"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Professional Journey</h2>
            <p className="text-xl text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
              My career path in product management across startups and Fortune 500 companies
            </p>
            <ExperienceTimeline />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 bg-zinc-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Skills & Expertise</h2>
            <p className="text-xl text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
              My professional toolkit across product management, AI, and technical domains
            </p>
            <SkillsSection />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-zinc-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Interested in discussing product strategy, AI innovation, or potential opportunities? I'd love to hear
              from you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:adamschwenk@gmail.com"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-700/50 hover:bg-zinc-700 transition-colors text-white"
              >
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aschwenk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-700/50 hover:bg-zinc-700 transition-colors text-white"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-zinc-500">© {new Date().getFullYear()} Adam Schwenk. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <span className="sr-only">Back to top</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

