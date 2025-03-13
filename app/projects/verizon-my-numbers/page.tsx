import Link from "next/link"
import { ArrowLeft, Calendar, User, Users, BarChart, Lightbulb, Target, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function VerizonMyNumbersProjectPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-zinc-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Verizon My Numbers</h1>
              <p className="text-lg mb-6 text-zinc-300">
                A service allowing users to add up to four virtual phone numbers to a single smartphone for separate
                personal and business use.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Telecom</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Mobile App</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Virtual Numbers</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Business Solutions</Badge>
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
                  alt="Verizon My Numbers App"
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
                Verizon My Numbers is a service that allows users to add up to four virtual phone numbers to a single
                smartphone, enabling separate lines for personal and business use without carrying multiple devices.
              </p>
              <p className="text-lg mb-6 text-zinc-300">
                As Principal Product Manager, I led the product strategy for this service, focusing on enhancing
                features, improving user experience, and driving revenue growth. I managed the full product lifecycle,
                from feature conceptualization to launch and optimization.
              </p>
              <p className="text-lg text-zinc-300">
                The service achieved a 300% revenue increase within 6 months under my leadership, through strategic
                feature development and marketing initiatives targeting small business owners and professionals.
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
                      <li>Drive revenue growth and user adoption</li>
                      <li>Enhance feature set for business users</li>
                      <li>Improve user experience and satisfaction</li>
                      <li>Reduce churn through added value</li>
                      <li>Expand market reach to new segments</li>
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
                      <li>Small business owners and entrepreneurs</li>
                      <li>Freelancers and gig economy workers</li>
                      <li>Professionals with work/life separation needs</li>
                      <li>Users with multiple roles or businesses</li>
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
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Dedicated Voicemail</h3>
              <p className="text-zinc-300">
                Implemented separate voicemail boxes for each virtual number, allowing users to maintain distinct
                professional and personal messaging.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Customizable greetings per number</li>
                  <li>Visual voicemail with transcription</li>
                  <li>Business-hour settings</li>
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Customizable Settings</h3>
              <p className="text-zinc-300">
                Developed granular settings for each virtual number, allowing users to personalize their experience for
                different contexts.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Distinct ringtones per number</li>
                  <li>Do-not-disturb scheduling</li>
                  <li>Call forwarding options</li>
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Usage Analytics</h3>
              <p className="text-zinc-300">
                Created detailed usage analytics for each virtual number, helping users track and manage their
                communication patterns.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Call and text volume tracking</li>
                  <li>Business vs. personal usage insights</li>
                  <li>Cost management tools</li>
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
                  <h3 className="text-lg font-semibold mb-2 text-white">300% Revenue Increase</h3>
                  <p className="text-zinc-300">
                    Drove a 300% increase in revenue within 6 months through strategic feature development and targeted
                    marketing initiatives.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">40% User Base Expansion</h3>
                  <p className="text-zinc-300">
                    Expanded the user base by 40% by targeting new market segments and improving the value proposition
                    for small business owners.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Reduced Churn by 25%</h3>
                  <p className="text-zinc-300">
                    Implemented retention strategies and enhanced features that led to a significant reduction in
                    customer churn.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Enhanced Business Features</h3>
                  <p className="text-zinc-300">
                    Developed and launched business-focused features that increased adoption among professional users
                    and small business owners.
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
              <h3 className="text-lg font-semibold mb-4 text-white">Product Strategy</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Market positioning</li>
                <li>Competitive analysis</li>
                <li>Feature prioritization</li>
                <li>Pricing strategy</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">UX & UI</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>User flow optimization</li>
                <li>Interface design</li>
                <li>Usability testing</li>
                <li>Accessibility improvements</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Market Research</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>User interviews</li>
                <li>Competitive analysis</li>
                <li>Market trends analysis</li>
                <li>Customer segmentation</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Product Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Roadmap development</li>
                <li>Cross-functional leadership</li>
                <li>Stakeholder management</li>
                <li>Feature specification</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Product Lifecycle Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Launch planning</li>
                <li>Feature iteration</li>
                <li>Performance monitoring</li>
                <li>End-of-life strategy</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Revenue Growth</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Monetization strategy</li>
                <li>Upsell opportunities</li>
                <li>Pricing optimization</li>
                <li>Value proposition enhancement</li>
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

