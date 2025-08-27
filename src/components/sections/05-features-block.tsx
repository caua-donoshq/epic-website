import { PerformanceComparison } from "@/components/performance/PerformanceComparison"
import { AppDesignComparison } from "@/components/design/AppDesignComparison"

const features = [
  {
    title: "Create Beautiful Apps",
    description: "Epic guides your coding assistants to build clean, professional interfaces with proper design systems, consistent spacing, and modern UI patterns—not sloppy, thrown-together layouts.",
    section: "UI/UX Design"
  },
  {
    title: "Built for Performance",
    description: "Every Epic-guided task includes lazy loading, intelligent pre-fetching, optimistic updates, smart caching, and React Query guidance, so your app feels lightning-fast—not \"vibe-coded\" slow.",
    section: "Performance optimization"
  },
  {
    title: "Code Versioning Guardrails", 
    description: "Epic instructs assistants to create feature branches and atomic commits for every new task, so you can easily and safely roll back if your coding assistant ever messes up your code.",
    section: "Version control"
  },
  {
    title: "Frontend and Backend Tests",
    description: "Epic writes BDD scenarios for every new task that guides your coding assistants to write tests for your entire application and test your app before deployment so you never ship broken code to production.",
    section: "Testing & Quality"
  }
]

export function FeaturesBlock() {
  return (
    <section className="py-32 px-6 text-black dark:text-white" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Section 1 - Create Beautiful Apps */}
        <div className="mb-32">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black mb-6" style={{ fontFamily: "'EB Garamond', serif" }}>
              {features[0].title}
            </h1>
            <p className="text-center max-w-3xl text-md mb-8 text-black mx-auto">
              {features[0].description}
            </p>
          </div>
          
          <div className="relative">
            <AppDesignComparison />
          </div>
        </div>

        {/* Section 2 - Built for Performance */}
        <div className="mb-32">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black mb-6" style={{ fontFamily: "'EB Garamond', serif" }}>
              {features[1].title}
            </h1>
            <p className="text-center max-w-3xl text-md mb-8 text-black mx-auto">
              {features[1].description}
            </p>
          </div>
          
          <div className="relative">
            <PerformanceComparison />
          </div>
        </div>

        {/* Section 3 - Code Versioning Guardrails */}
        <div className="mb-32">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black mb-6" style={{ fontFamily: "'EB Garamond', serif" }}>
              {features[2].title}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {features[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 - Testing */}
        <div className="mb-16">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black mb-6" style={{ fontFamily: "'EB Garamond', serif" }}>
              {features[3].title}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}