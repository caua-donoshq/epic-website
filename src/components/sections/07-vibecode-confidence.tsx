import { PromptComparison } from "@/components/vibecode/PromptComparison"

export function VibeCodeConfidence() {
  return (
    <section className="py-32 px-6 text-black dark:text-white" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black mb-6" style={{ fontFamily: "'EB Garamond', serif" }}>
            Clear Instructions, Perfect Results
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Epic transforms your ideas into precise, actionable instructions that your coding assistant understands perfectly—eliminating miscommunication and delivering exactly what you envision.
            </p>
          </div>
        </div>
        
        {/* Prompt Comparison Component */}
        <div className="relative">
          <PromptComparison />
        </div>
      </div>
    </section>
  )
}