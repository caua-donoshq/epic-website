import { FadeIn, Stagger, StaggerItem } from "@/components/animations"
import { Zap, Shield, Code } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Spend Less Tokens with AI-Friendly Architecture",
    description: "Epic organizes your code so assistants can understand your codebase using fewer context tokens. You spend less on upgrades and never stall waiting for usage limits to reset."
  },
  {
    icon: Shield,
    title: "Security Peace of Mind",
    description: "Every task ships with clear security criteria, letting your coding assistant know the exact checks to pass, so you launch without the \"will my app get hacked?\" anxiety."
  },
  {
    icon: Code,
    title: "More Vibe Coding, Less Vibe Debugging",
    description: "Epic's modular task specs and AI-friendly architecture principles keep your application code readable and maintainable. When bugs appear, it is easier for AI coding assistants to understand the fix instead of wrestling with code-debt spaghetti."
  }
]

export function VibeCoders() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-heading mb-4">
              🔥 Built for Vibe Coders
            </h2>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={index}>
                <div className="group relative h-full">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full bg-card border border-border rounded-2xl p-8 group-hover:border-accent/30 transition-all duration-300">
                    <div className="mb-6">
                      <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-heading mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}