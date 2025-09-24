import { AppDesignComparison } from "@/components/design/AppDesignComparison"

export function CreateBeautifulApps() {
  return (
    <section className="py-32 px-6 text-black dark:text-white" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Create Beautiful Apps */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black mb-6" style={{ fontFamily: "'EB Garamond', serif" }}>
            Create Beautiful Apps
          </h1>
          <p className="text-center max-w-3xl text-base font-normal leading-relaxed text-black mb-8 mx-auto">
            Epic keeps one central style file for all your brand colors, fonts, and components and helps you setup your brand identity from the start. No more generic UIs.
          </p>
        </div>
        
        <div className="relative">
          <AppDesignComparison />
        </div>

      </div>
    </section>
  )
}