import Link from "next/link"
import { ArrowLeft, Calendar, User, Users, BarChart, Lightbulb, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function GreenhouseProjectPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Wells Fargo Greenhouse App</h1>
              <p className="text-lg mb-6 text-white/80">
                A mobile-first banking platform designed to help users manage finances through two linked accounts: one
                for spending and one for bills and savings.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Fintech</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Mobile App</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Banking</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">Financial Health</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>2018-2019</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>Growth Product Manager</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Wells Fargo Greenhouse App"
                  className="rounded-lg shadow-xl w-full relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/30 rounded-lg -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Project Overview</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6 text-foreground/80">
                I led the onboarding and referral program for the Wells Fargo Greenhouse app, a mobile-first banking
                platform designed to help users manage finances through two linked accounts: one for spending and one
                for bills and savings.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                Collaborating with cross-functional teams, I implemented features to enhance financial health. The app
                launched in 2018, targeting users seeking proactive money management tools.
              </p>
              <p className="text-lg text-foreground/80">
                My role involved designing user journeys, implementing multi-channel messaging strategies, and creating
                an incentivized referral system that drove significant user acquisition.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary/5 rounded-2xl p-6 border border-border/10">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Key Objectives</h3>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/70">
                      <li>Improve user onboarding completion rates</li>
                      <li>Increase user acquisition through referrals</li>
                      <li>Enhance engagement with the platform</li>
                      <li>Optimize multi-channel messaging strategy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-6 border border-border/10">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Target Audience</h3>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/70">
                      <li>Millennials and Gen-Z users</li>
                      <li>First-time banking customers</li>
                      <li>Users seeking better financial management tools</li>
                      <li>Mobile-first banking customers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Key Achievements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <BarChart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Increased Engagement by 35%</h3>
                  <p className="text-foreground/70">
                    Designed an improved user journey and integrated multi-channel messaging (email, in-app, push, SMS)
                    to significantly boost user engagement with the platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">20% Increase in User Acquisition</h3>
                  <p className="text-foreground/70">
                    Launched an incentivized in-app referral system that drove a significant increase in new user
                    acquisition through existing customer networks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Optimized Onboarding Flow</h3>
                  <p className="text-foreground/70">
                    Reduced onboarding abandonment by 25% through user testing, funnel analysis, and iterative
                    improvements to the sign-up process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <BarChart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Enhanced Financial Health Features</h3>
                  <p className="text-foreground/70">
                    Collaborated with cross-functional teams to implement features that improved users' financial health
                    awareness and management capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Deliverables */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Skills & Deliverables</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary/5 rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4 text-primary">Customer Onboarding</h3>
              <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                <li>User journey mapping</li>
                <li>Funnel optimization</li>
                <li>Conversion rate improvement</li>
                <li>Onboarding UX design</li>
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4 text-primary">Product Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                <li>Feature prioritization</li>
                <li>Roadmap development</li>
                <li>Cross-functional leadership</li>
                <li>Stakeholder management</li>
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4 text-primary">Data Analytics</h3>
              <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                <li>User behavior analysis</li>
                <li>Conversion funnel analysis</li>
                <li>A/B testing</li>
                <li>Performance metrics tracking</li>
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4 text-primary">UI/UX Prototyping</h3>
              <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                <li>User interface design</li>
                <li>Wireframing</li>
                <li>User testing</li>
                <li>Iterative design process</li>
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4 text-primary">Cross-Functional Leadership</h3>
              <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                <li>Team coordination</li>
                <li>Project management</li>
                <li>Agile methodology</li>
                <li>Sprint planning</li>
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-6 border border-border/10 hover:border-primary/20 transition-colors">
              <h3 className="text-lg font-semibold mb-4 text-primary">Growth Strategy</h3>
              <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                <li>Referral program design</li>
                <li>User acquisition tactics</li>
                <li>Engagement optimization</li>
                <li>Retention strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="py-12 px-4 bg-secondary/10 text-center">
        <Button asChild className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/#projects" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </Button>
      </section>
    </div>
  )
}

