import Link from "next/link"
import { ArrowLeft, Calendar, User, Users, BarChart, Lightbulb, Target, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function NavyFederalProjectPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-zinc-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Navy Federal Credit Union AI Initiatives</h1>
              <p className="text-lg mb-6 text-zinc-300">
                Leading the adoption and implementation of AI-powered tools to enhance productivity and streamline
                development workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">AI Implementation</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Financial Services</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Enterprise Adoption</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Change Management</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>2023-Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>AI Product Manager</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="relative">
                <div className="rounded-lg shadow-xl w-full h-64 bg-zinc-700/50 flex items-center justify-center relative z-10">
                  <Bot size={80} className="text-white/30" />
                  <p className="absolute bottom-4 text-center w-full text-zinc-400 text-sm">
                    AI Implementation Visualization
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-white/10 rounded-lg -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Project Overview</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6 text-zinc-300">
                At Navy Federal Credit Union, I led the adoption and implementation of AI-powered tools like Microsoft
                Copilot and GitHub Copilot to enhance productivity and streamline development workflows within the
                organization.
              </p>
              <p className="text-lg mb-6 text-zinc-300">
                This initiative involved creating a comprehensive AI adoption framework, developing training programs,
                and establishing governance protocols to ensure responsible AI use across the organization.
              </p>
              <p className="text-lg text-zinc-300">
                Working with cross-functional teams, I facilitated the integration of these AI tools into existing
                workflows, resulting in significant productivity improvements and enhanced knowledge management
                capabilities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-white">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Key Objectives</h3>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                      <li>Enhance productivity through AI tool adoption</li>
                      <li>Streamline development workflows</li>
                      <li>Establish AI governance and best practices</li>
                      <li>Develop comprehensive training programs</li>
                      <li>Measure and demonstrate ROI of AI implementations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Stakeholders</h3>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                      <li>Development and engineering teams</li>
                      <li>IT security and compliance</li>
                      <li>Executive leadership</li>
                      <li>Product management teams</li>
                      <li>Knowledge workers across departments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 px-4 bg-zinc-800">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Implementation Approach</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Assessment & Planning</h3>
              <p className="text-zinc-300">
                Conducted comprehensive assessment of organizational needs and developed a strategic implementation plan
                with clear milestones.
              </p>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Governance Framework</h3>
              <p className="text-zinc-300">
                Established AI governance protocols, usage guidelines, and security measures to ensure responsible and
                compliant AI implementation.
              </p>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Training Program</h3>
              <p className="text-zinc-300">
                Developed and delivered comprehensive training programs for different user groups, from basic to
                advanced AI tool usage.
              </p>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Measurement & Optimization</h3>
              <p className="text-zinc-300">
                Implemented metrics tracking to measure adoption, productivity gains, and ROI, with continuous
                optimization based on feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Key Achievements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <BarChart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Reduced Onboarding Time by 30%</h3>
                  <p className="text-zinc-300">
                    Created an AI adoption framework that significantly reduced the time required for new employees to
                    become productive.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Increased Internal AI Adoption by 40%</h3>
                  <p className="text-zinc-300">
                    Developed a structured product evaluation methodology that drove significant adoption across teams
                    and departments through targeted training and clear use cases.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Enhanced Knowledge Management</h3>
                  <p className="text-zinc-300">
                    Implemented AI tools that improved documentation, knowledge sharing, and institutional memory
                    retention across the organization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Established AI Governance</h3>
                  <p className="text-zinc-300">
                    Created comprehensive governance frameworks and best practices for responsible AI use that balanced
                    innovation with security and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Deliverables */}
      <section className="py-16 px-4 bg-zinc-800">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Skills & Deliverables</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Requirements Specification</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Needs assessment</li>
                <li>Use case development</li>
                <li>Technical requirements</li>
                <li>Implementation roadmaps</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">User Acceptance Testing</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Test plan development</li>
                <li>User feedback collection</li>
                <li>Usability assessment</li>
                <li>Iterative improvements</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Employee Onboarding</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Training program development</li>
                <li>Documentation creation</li>
                <li>Knowledge transfer</li>
                <li>Skill assessment</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Cross Functional Team Leadership</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Stakeholder management</li>
                <li>Project coordination</li>
                <li>Resource allocation</li>
                <li>Timeline management</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Change Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Organizational readiness</li>
                <li>Resistance mitigation</li>
                <li>Communication planning</li>
                <li>Adoption strategies</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">AI Implementation</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Tool evaluation</li>
                <li>Integration planning</li>
                <li>Security assessment</li>
                <li>Performance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-12 px-4 bg-zinc-900 text-center">
        <Button asChild className="bg-white text-zinc-900 hover:bg-zinc-200">
          <Link href="/#projects" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </Button>
      </section>
    </div>
  )
}

