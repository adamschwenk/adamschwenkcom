import Link from "next/link"
import { ArrowLeft, Calendar, User, Users, BarChart, Lightbulb, Target, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function VerizonMessagesProjectPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-zinc-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Verizon Messages</h1>
              <p className="text-lg mb-6 text-zinc-300">
                A cross-platform messaging app for iOS, Android, and desktop, offering cloud sync, multimedia support,
                and advanced messaging features.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Messaging</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Mobile App</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">AI Integration</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Cross-Platform</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>2019-2023</span>
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
                  alt="Verizon Messages App"
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
                Verizon Messages (Message+) is a cross-platform messaging app for iOS, Android, and desktop, offering
                cloud sync, multimedia support, and advanced messaging features. As Principal Product Manager, I led
                feature development for 20M+ users.
              </p>
              <p className="text-lg mb-6 text-zinc-300">
                I launched several key features including a patented Reminders Feature allowing users to set and manage
                reminders within messages, chatbot integration for streamlined automated replies, and a bookmarking
                feature for saving messages and attachments for easy access.
              </p>
              <p className="text-lg text-zinc-300">
                Working with teams in the U.S. and India, I drove adoption and engagement across the platform, focusing
                on enhancing the user experience while maintaining cross-platform compatibility.
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
                      <li>Enhance user engagement and retention</li>
                      <li>Develop innovative messaging features</li>
                      <li>Integrate AI-powered automation</li>
                      <li>Maintain cross-platform compatibility</li>
                      <li>Drive feature adoption across user base</li>
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
                    <h3 className="text-lg font-semibold mb-2 text-white">User Base</h3>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                      <li>20M+ active users across platforms</li>
                      <li>Diverse demographic spanning all age groups</li>
                      <li>Both personal and business users</li>
                      <li>Verizon wireless subscribers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-zinc-800">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Key Features Developed</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Patented Reminders Feature</h3>
              <p className="text-zinc-300">
                Developed and patented a feature allowing users to set and manage reminders directly within message
                threads, enhancing productivity and follow-up capabilities.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Contextual reminders tied to specific messages</li>
                  <li>Customizable notification settings</li>
                  <li>Cross-device synchronization</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Chatbot Integration</h3>
              <p className="text-zinc-300">
                Implemented AI-powered chatbot capabilities to streamline automated replies and provide intelligent
                assistance within the messaging platform.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Quick response suggestions</li>
                  <li>Automated message categorization</li>
                  <li>Smart reply functionality</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Bookmarking Feature</h3>
              <p className="text-zinc-300">
                Created a system for saving important messages and attachments for easy access, improving organization
                and retrieval of critical information.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Categorized bookmarks</li>
                  <li>Search functionality</li>
                  <li>Cross-device synchronization</li>
                </ul>
              </div>
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Reduced Response Times by 40%</h3>
                  <p className="text-zinc-300">
                    The AI-powered chatbot integration significantly cut message response times, improving user
                    efficiency and satisfaction.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Increased User Satisfaction by 25%</h3>
                  <p className="text-zinc-300">
                    New features and improvements led to measurable increases in user satisfaction scores and app store
                    ratings.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Secured Patent for Reminder Feature</h3>
                  <p className="text-zinc-300">
                    Successfully navigated the patent process for the innovative message-based reminder system, adding
                    intellectual property value.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Enhanced Cross-Platform Experience</h3>
                  <p className="text-zinc-300">
                    Ensured seamless functionality across iOS, Android, and desktop platforms, improving the
                    multi-device user experience.
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
                <li>Feature prioritization</li>
                <li>Roadmap development</li>
                <li>Cross-functional leadership</li>
                <li>Stakeholder management</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">UX & UI</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>User flow design</li>
                <li>Interface optimization</li>
                <li>Usability testing</li>
                <li>Design system implementation</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Data Analytics</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>User behavior analysis</li>
                <li>Feature adoption metrics</li>
                <li>A/B testing</li>
                <li>Performance tracking</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Project Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Agile methodology</li>
                <li>Sprint planning</li>
                <li>Resource allocation</li>
                <li>Timeline management</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">AI Chatbot</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>NLP implementation</li>
                <li>Conversation flow design</li>
                <li>Response optimization</li>
                <li>Machine learning integration</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Cross-Platform Development</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>iOS and Android compatibility</li>
                <li>Desktop integration</li>
                <li>Cloud synchronization</li>
                <li>Consistent user experience</li>
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

