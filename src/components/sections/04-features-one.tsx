import Image from "next/image"

const features = [
  {
    title: "Clean Architecture",
    description: "Every feature built with Epic is modular and easy to maintain and follows strict separation of concerns and 'don't repeat yourself' (DRY) principles.",
    icon: "/images/spend-less-tokens 1.svg"
  },
  {
    title: "Built-In Security Middleware", 
    description: "Epic standard boilerplate comes with a robust, built-in security infrastructure that protects your app against common web apps vulnerabilities.",
    icon: "/images/security-peace-of-mind 1.svg"
  },
  {
    title: "Built-In Authentication",
    description: "Epic standard boilerplate comes with built in Authentication, password recovery and Magic Link/ OTP login.",
    icon: "/images/built-in-auth.svg"
  },
  {
    title: "",
    description: "",
    icon: ""
  }
]

export function FeaturesOne() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black"
            style={{ 
              fontFamily: "'EB Garamond', serif"
            }}
          >
            Built for vibe coders
          </h2>
        </div>
        
        {/* Feature Cards Grid - Custom layout */}
        <div className="max-w-4xl mx-auto">
          {/* First card - full width with image on right */}
          <div className="pb-8" style={{ borderBottom: '1px solid #C7C5C3' }}>
            <div className="rounded-2xl p-8 min-h-[280px] flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                {/* Title */}
                {features[0].title && (
                  <h3 
                    className="text-4xl font-normal mb-3 text-black max-w-96"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {features[0].title}
                  </h3>
                )}
                
                {/* Description */}
                {features[0].description && (
                  <p className="text-base font-normal leading-relaxed text-black max-w-96">
                    {features[0].description}
                  </p>
                )}
              </div>
              
              {/* Icon on the right */}
              {features[0].icon && (
                <div className="flex-shrink-0">
                  <Image 
                    src={features[0].icon} 
                    alt={features[0].title}
                    width={240}
                    height={240}
                    className="object-contain transition-transform duration-300 hover:rotate-3"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Second and third cards - side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative pt-8">
            {/* Vertical divider */}
            <div 
              className="hidden md:block absolute left-1/2 w-px"
              style={{ backgroundColor: '#C7C5C3', transform: 'translateX(-50%)', top: '-1px', bottom: '0' }}
            />
            {features.slice(1, 3).map((feature, index) => (
              <div 
                key={index} 
                className="rounded-2xl p-8 min-h-[280px] flex flex-col"
              >
                {/* Title */}
                {feature.title && (
                  <h3 
                    className="text-4xl font-normal mb-3 text-black"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {feature.title}
                  </h3>
                )}
                
                {/* Description */}
                {feature.description && (
                  <p className="text-md font-normal leading-relaxed text-black mb-6">
                    {feature.description}
                  </p>
                )}
                
                {/* Icon or Stacked Cards */}
                <div className="mt-auto flex justify-center">
                  {index === 0 ? (
                    // Stacked cards for Security peace of mind
                    <div className="relative w-[320px] h-[200px]">
                      {/* Card 3 (back/top left) */}
                      <div className="absolute top-0 left-0 transition-transform duration-300 hover:-translate-y-3 hover:translate-x-1">
                        <Image 
                          src="/images/stacked-card-3.svg" 
                          alt="Security card 3"
                          width={250}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                      {/* Card 2 (middle) */}
                      <div className="absolute top-8 left-6 transition-transform duration-300 hover:-translate-y-6 hover:translate-x-2">
                        <Image 
                          src="/images/stacked-card-2.svg" 
                          alt="Security card 2"
                          width={250}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                      {/* Card 1 (front/bottom right) */}
                      <div className="absolute top-16 left-12 transition-transform duration-300 hover:-translate-y-9 hover:translate-x-3">
                        <Image 
                          src="/images/stacked-card-1.svg" 
                          alt="Security card 1"
                          width={250}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : index === 1 ? (
                    // Built-in Auth SVG
                    <div className="mt-auto flex justify-center">
                      <Image
                        src="/images/built-in-auth.svg"
                        alt="Built-in Authentication Features"
                        width={340}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    // Regular icon for other cards
                    feature.icon && (
                      <Image 
                        src={feature.icon} 
                        alt={feature.title}
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}