import { Coins, Fingerprint, Code } from "lucide-react"

const features = [
  {
    title: "Spend Less\nTokens",
    description: "Epic organizes your code so assistants can understand your codebase using fewer context tokens. You spend less on upgrades and never stall waiting for usage limits to reset.",
    iconType: "coins"
  },
  {
    title: "Security Peace\nof Mind", 
    description: "Every task ships with clear security criteria, letting your coding assistant know the exact checks to pass, so you launch without the \"will my app get hacked?\" anxiety.",
    iconType: "fingerprint"
  },
  {
    title: "Less Vibe\nDebugging",
    description: "Epic's modular task specs and AI-friendly architecture keep code clean and maintainable. When bugs pop up, assistants fix them fast,no wrestling with spaghetti or hunting context across files.",
    iconType: "code"
  }
]

export function FeaturesOne() {
  return (
    <section className="py-40 px-50 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Section - Separate for better control */}
        <div className="mb-32">
          <div className="grid grid-cols-12 gap-8 items-start ml-6 mr-0">
            {/* Left side - Heading */}
            <div className="col-span-12 lg:col-span-6">
              <h2 
                className="leading-tight tracking-tight text-black dark:text-white"
                style={{ 
                  fontSize: '56px',
                  fontWeight: 502,
                  fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif'
                }}
              >
                Built for 
                <br />
                Vibe Coders
              </h2>
            </div>
            
            {/* Right side - Description and CTA */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-7">
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Epic is shaped by the practices that help vibe coders ship faster with AI assistants while maintaining quality and security.
              </p>
              <button className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center">
                Get early access <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Feature Cards Section - Separate for cleaner management */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-10 min-h-[420px] flex flex-col overflow-hidden ${
                index === 0 
                  ? 'bg-gradient-to-b from-pink-300 to-orange-300' 
                  : index === 1
                  ? 'bg-gradient-to-br from-orange-300 via-pink-300 to-pink-400'
                  : 'bg-gradient-to-tr from-pink-400 via-orange-300 to-pink-300'
              }`}
              style={{
                '--grain-opacity': '0.25' // Adjust this value to control grain intensity (0-1)
              } as React.CSSProperties}
            >
              {/* Title with DM Sans font */}
              <h3 
                className="text-2xl mb-6 leading-tighter text-white whitespace-pre-line font-semiboldr"
                style={{ fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif' }}
              >
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-base leading-relaxed mb-auto text-white/90">
                {feature.description}
              </p>
              
              {/* Feature illustration at bottom */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center justify-center text-white w-32 h-32">
                  {feature.iconType === "coins" && <Coins size={32} fill="currentColor" />}
                  {feature.iconType === "fingerprint" && <Fingerprint size={32} fill="currentColor" />}
                  {feature.iconType === "code" && <Code size={32} fill="currentColor" />}
                </div>
              </div>
              
              {/* Grain overlay */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  opacity: 'var(--grain-opacity)'
                }}
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}