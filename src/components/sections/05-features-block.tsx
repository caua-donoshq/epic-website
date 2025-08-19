import { PerformanceComparison } from "@/components/performance/PerformanceComparison"
import { LiveThemeSwitcher } from "@/components/design/LiveThemeSwitcher"
import { RollbackSimulator } from "@/components/versioning/RollbackSimulator"
import { LiveTestRunner } from "@/components/testing/LiveTestRunner"

const features = [
  {
    title: "Built for Performance",
    description: "Every Epic-guided task includes lazy loading, intelligent pre-fetching, optimistic updates, smart caching, and React Query guidance, so your app feels lightning-fast—not \"vibe-coded\" slow.",
    section: "Performance optimization"
  },
  {
    title: "Create Beautiful Apps",
    description: "A ready-made stylized shadcn component library with styling rules controlled in one single file mean you get polished UI, with consistent styling across every single component, without pixel-hunting.",
    section: "UI & Design system"
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
    <section className="py-32 px-6 bg-white dark:bg-[#0a0a0a] text-black dark:text-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Hero Section - Built for Performance */}
        <div className="mb-32">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl font-normal mb-6 leading-tight text-black dark:text-white">
              {features[0].title}
            </h1>
            <div className="max-w-4xl">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Align your team around lightning-fast apps.{' '}
                <span className="text-gray-700 dark:text-gray-300">
                  {features[0].description}
                </span>
              </p>
            </div>
          </div>
          
          <div className="relative">
            <PerformanceComparison />
          </div>
        </div>

        {/* Section 2 - Create Beautiful Apps */}
        <div className="mb-32">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl font-normal mb-6 leading-tight text-black dark:text-white">
              {features[1].title}
            </h1>
            <div className="max-w-4xl">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {features[1].description}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <LiveThemeSwitcher />
          </div>
        </div>

        {/* Section 3 - Code Versioning Guardrails */}
        <div className="mb-32">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl font-normal mb-6 leading-tight text-black dark:text-white">
              {features[2].title}
            </h1>
            <div className="max-w-4xl">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {features[2].description}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#333333] rounded-2xl overflow-hidden">
              <RollbackSimulator />
            </div>
          </div>
        </div>

        {/* Section 4 - Testing */}
        <div className="mb-16">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl font-normal mb-6 leading-tight text-black dark:text-white">
              {features[3].title}
            </h1>
            <div className="max-w-4xl">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {features[3].description}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#333333] rounded-2xl overflow-hidden">
              <LiveTestRunner />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}