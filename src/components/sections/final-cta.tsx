import { FadeIn } from "@/components/animations"

export function FinalCTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden" style={{ backgroundColor: '#F6F4F0' }}>
      {/* Top fade to seamlessly integrate with section above */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F6F4F1] to-transparent z-10" />
      
      {/* Side gradients - pink/purple on left, orange on right */}
      <div className="absolute inset-0">
        {/* Left gradient - pink/purple */}
        <div 
          className="absolute left-0 top-0 h-full w-1/2"
          style={{
            backgroundImage: 'radial-gradient(ellipse at left center, rgba(236, 72, 153, 0.3), transparent 70%)'
          }}
        />
        {/* Right gradient - orange */}
        <div 
          className="absolute right-0 top-0 h-full w-1/2"
          style={{
            backgroundImage: 'radial-gradient(ellipse at right center, rgba(255, 107, 0, 0.3), transparent 70%)'
          }}
        />
      </div>
      
      {/* Bottom fade to seamlessly integrate with section below */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F6F4F1] to-transparent z-10" />
      
      <div className="container mx-auto max-w-2xl relative z-10">
        <FadeIn>
          <div className="text-center">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-normal text-black mb-8 leading-tight tracking-tight"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Ready to vibe-code without the chaos?
            </h2>
            
            <p className="text-center max-w-2xl mx-auto text-md text-black">
              Start with Epic and let your AI do its best work.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}