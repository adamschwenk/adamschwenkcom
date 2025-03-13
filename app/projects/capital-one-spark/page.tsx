import Link from "next/link"
import { ArrowLeft, Calendar, User, Users, BarChart, Lightbulb, Target, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CapitalOneSparkProjectPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-zinc-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Capital One Spark Business</h1>
              <p className="text-lg mb-6 text-zinc-300">
                A mobile banking platform for small business owners, providing financial management tools, deposit
                capabilities, and business insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Fintech</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Mobile Banking</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Small Business</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Financial Management</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>2015-2018</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>Senior Product Manager</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Capital One Spark Business App"
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
                As Senior Product Manager at Capital One, I led the 0-1 development and launch of Spark Business, a
                mobile banking platform designed specifically for small business owners.
              </p>
              <p className="text-lg mb-6 text-zinc-300">
                I drove the mobile strategy, product vision, execution, and analytics for this initiative, working
                closely with cross-functional teams including design, engineering, marketing, and business stakeholders.
              </p>
              <p className="text-lg text-zinc-300">
                The platform provided small business owners with powerful tools for managing finances, making deposits,
                tracking expenses, and gaining business insights—all optimized for mobile use.
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
                      <li>Create a mobile-first banking experience for small businesses</li>
                      <li>Improve deposit success rates and user satisfaction</li>
                      <li>Increase app downloads and user engagement</li>
                      <li>Enhance app store ratings and reviews</li>
                      <li>Streamline financial management for business owners</li>
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
                      <li>Sole proprietors and freelancers</li>
                      <li>Small business financial managers</li>
                      <li>Startup founders and teams</li>
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Mobile Check Deposit</h3>
              <p className="text-zinc-300">
                Optimized the mobile check deposit experience with improved image capture, higher deposit limits, and
                faster processing for business users.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>10% improvement in deposit success rates</li>
                  <li>Real-time deposit confirmation</li>
                  <li>Business-specific deposit limits</li>
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
              <h3 className="text-lg font-semibold mb-2 text-white">Business Analytics</h3>
              <p className="text-zinc-300">
                Developed financial analytics tools providing business owners with insights into cash flow, spending
                patterns, and financial health.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Customizable financial dashboards</li>
                  <li>Trend analysis and forecasting</li>
                  <li>Category-based expense tracking</li>
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Expense Management</h3>
              <p className="text-zinc-300">
                Created tools for tracking, categorizing, and managing business expenses with receipt capture and tax
                preparation features.
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-700/50">
                <h4 className="text-sm font-medium mb-2 text-zinc-400">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  <li>Automated expense categorization</li>
                  <li>Receipt digitization and storage</li>
                  <li>Tax category tagging</li>
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Improved Deposit Success Rates by 10%</h3>
                  <p className="text-zinc-300">
                    Enhanced the mobile check deposit experience through user funnels and A/B testing, resulting in
                    higher successful deposit rates.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">Increased App Downloads by 30%</h3>
                  <p className="text-zinc-300">
                    Led marketing and user acquisition initiatives that significantly boosted app downloads and user
                    adoption.
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
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    Improved App Store Ratings from 3 to 4.5+ Stars
                  </h3>
                  <p className="text-zinc-300">
                    Addressed user pain points and enhanced the app experience, resulting in significantly improved app
                    store ratings and reviews.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Enhanced Business Financial Tools</h3>
                  <p className="text-zinc-300">
                    Developed and launched specialized financial management tools that increased engagement and provided
                    real value to small business owners.
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
              <h3 className="text-lg font-semibold mb-4 text-white">Mobile Strategy</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Platform roadmap development</li>
                <li>Mobile-first design principles</li>
                <li>Cross-platform optimization</li>
                <li>Feature prioritization</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Analytics</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>User behavior analysis</li>
                <li>Conversion funnel optimization</li>
                <li>A/B testing methodology</li>
                <li>Performance metrics tracking</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">UX Design</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>User flow optimization</li>
                <li>Interface design</li>
                <li>Usability testing</li>
                <li>Accessibility improvements</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Product Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Feature specification</li>
                <li>Stakeholder management</li>
                <li>Cross-functional leadership</li>
                <li>Product lifecycle management</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Agile Leadership</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Sprint planning</li>
                <li>Backlog prioritization</li>
                <li>Team coordination</li>
                <li>Iterative development</li>
              </ul>
            </div>

            <div className="bg-zinc-700/30 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white">Financial Product Development</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Banking feature design</li>
                <li>Regulatory compliance</li>
                <li>Security implementation</li>
                <li>Financial data visualization</li>
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

