import Image from "next/image"
import { FadeIn } from "@/components/animations"

export function FinalCTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden" style={{ backgroundColor: '#F6F4F0' }}>
      {/* Top fade to seamlessly integrate with section above */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F6F4F1] to-transparent z-10" />
      
      {/* Gradient Image Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-6xl">
          <Image
            src="/images/gradient.svg"
            alt=""
            fill
            className="object-contain opacity-80"
            priority
          />
        </div>
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
              Vibe Coding sem caos
            </h2>
            
            <p className="text-center max-w-2xl mx-auto text-base font-normal leading-relaxed text-black">
              Baixe o Epic e extraia o potencial máximo da sua AI.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}