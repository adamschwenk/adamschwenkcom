import Link from "next/link"
import { ArrowLeft, Calendar, User, Users, BarChart, Lightbulb, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CoachingSeasonProjectPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-zinc-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Coaching Season</h1>
              <p className="text-lg mb-6 text-zinc-300">
                An online coaching platform that connects individuals with career, leadership, and executive coaches.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Coaching Platform</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">No-Code</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">UX Design</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Product Management</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>Principal Product Manager</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Coaching Season Platform"
                  className="rounded-lg shadow-xl w-full relative z-10"
                />
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
                Coaching Season is an online coaching platform that connects individuals with career, leadership, and
                executive coaches. I led the design, development, and optimization of the website to enhance user
                engagement and streamline the onboarding process.
              </p>
              <p className="text-lg mb-6 text-zinc-300">
                I worked with stakeholders to implement features like coach bios, service selection, and booking
                integration while ensuring a seamless user experience. I also optimized workflows using no-code tools
                like Webflow, Jotform, and Typeform.
              </p>
              <p className="text-lg text-zinc-300">
                The platform needed to provide a professional, trustworthy experience for both coaches and clients, with
                clear pathways to connect them efficiently.
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
                      <li>Enhance user engagement with the platform</li>
                      <li>Streamline the coach onboarding process</li>
                      <li>Implement seamless booking integration</li>
                      <li>Create professional coach profiles</li>
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
                    <h3 className="text-lg font-semibold mb-2 text-white">Target Audience</h3>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                      <li>Professionals seeking career advancement</li>
                      <li>Executives looking for leadership coaching</li>
                      <li>Individuals in career transitions</li>
                      <li>Professional coaches seeking clients</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 bg-zinc-800">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Platform Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Coach Profiles</h3>
              <p className="text-zinc-300">
                Detailed coach bios with expertise, experience, and testimonials to help clients find the right match
                for their needs.
              </p>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Booking System</h3>
              <p className="text-zinc-300">
                Integrated scheduling system allowing clients to book sessions based on coach availability, with
                automatic calendar updates.
              </p>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Service Selection</h3>
              <p className="text-zinc-300">
                Categorized coaching services allowing clients to choose specific types of coaching based on their needs
                and goals.
              </p>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Payment Processing</h3>
              <p className="text-zinc-300">
                Secure payment system for booking coaching sessions with multiple payment options and automated
                receipts.
              </p>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Feedback System</h3>
              <p className="text-zinc-300">
                Post-session feedback collection to help coaches improve their services and build their reputation on
                the platform.
              </p>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Secure Messaging</h3>
              <p className="text-zinc-300">
                Private communication channel between coaches and clients for pre-session preparation and post-session
                follow-ups.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Enhanced User Engagement</h3>
                  <p className="text-zinc-300">
                    Improved the website design and user flow, resulting in increased time on site and higher conversion
                    rates for booking coaching sessions.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Streamlined Onboarding</h3>
                  <p className="text-zinc-300">
                    Simplified the coach and client onboarding processes, reducing drop-off rates and increasing the
                    number of completed profiles.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Seamless Integration</h3>
                  <p className="text-zinc-300">
                    Successfully integrated booking systems, payment processing, and calendar tools to create a cohesive
                    user experience without custom code.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <BarChart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Optimized Workflows</h3>
                  <p className="text-zinc-300">
                    Leveraged no-code tools like Webflow, Jotform, and Typeform to create efficient workflows for both
                    platform administrators and users.
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
              <h3 className="text-lg font-semibold mb-4 text-white">Product Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Requirements gathering</li>
                <li>Feature prioritization</li>
                <li>Roadmap development</li>
                <li>Stakeholder management</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Project Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Timeline planning</li>
                <li>Resource allocation</li>
                <li>Risk management</li>
                <li>Progress tracking</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">UI/UX Prototyping</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>User flow design</li>
                <li>Wireframing</li>
                <li>Interactive prototyping</li>
                <li>Usability testing</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Market Research</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Competitor analysis</li>
                <li>User interviews</li>
                <li>Market trends analysis</li>
                <li>Feature benchmarking</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Application Lifecycle Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Version control</li>
                <li>Release planning</li>
                <li>Feature deployment</li>
                <li>Maintenance planning</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">No-Code Development</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Webflow implementation</li>
                <li>Jotform integration</li>
                <li>Typeform customization</li>
                <li>API connections</li>
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

