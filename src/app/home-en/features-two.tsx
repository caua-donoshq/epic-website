const features = [
  {
    title: "Vendor Independence", 
    description: "Swap coding assistants, auth providers, or databases anytime. Vendor independence is one of Epic's key principles so you avoid hidden lock-ins.",
    icon: ""
  },
  {
    title: "Performance Infrastructure",
    description: "Epic's boilerplate comes with a built-in performance infrastructure that you can easily import into your files to build lightning fast features.",
    icon: ""
  }
]

export function FeaturesTwo() {
  return (
    <section className="pt-0 pb-24 px-4" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        
        {/* Feature Cards Grid - Two cards side by side */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative pt-8">
            {/* Vertical divider */}
            <div 
              className="hidden md:block absolute left-1/2 w-px"
              style={{ 
                backgroundColor: '#C7C5C3', 
                transform: 'translateX(-50%)',
                top: '0',
                height: '200px'
              }}
            />
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="rounded-2xl px-6 pt-6 pb-1 min-h-[280px] flex flex-col"
              >
                {/* Title */}
                {feature.title && (
                  <h3 
                    className={`text-4xl font-normal mb-3 text-black ${index === 1 ? 'whitespace-normal md:whitespace-nowrap text-3xl md:text-4xl' : 'whitespace-nowrap'}`}
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {feature.title}
                  </h3>
                )}
                
                {/* Description */}
                {feature.description && (
                  <p className="text-base font-normal leading-relaxed text-black">
                    {feature.description}
                  </p>
                )}
                
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}