import { FadeIn } from "@/components/animations"
import { RainbowButton } from "@/components/ui/button-rainbow"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      {/* Top fade to seamlessly integrate with section above */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />
      
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
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      
      <div className="container mx-auto max-w-2xl relative z-10">
        <FadeIn>
          <div className="text-center">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif' }}
            >
              Ready to vibe-code without the chaos?
            </h2>
            
            <p 
              className="text-center max-w-2xl mx-auto mb-8" 
              style={{ color: '#7C7C7C', fontFamily: '"DM Sans", system-ui, -apple-system, sans-serif' }}
            >
              Start with Epic and let your AI do its best work.
            </p>

            <div className="flex justify-center">
              <Link href="/signup">
                <RainbowButton className="mb-8">
                  Get early access
                </RainbowButton>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}