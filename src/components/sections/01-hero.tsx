"use client"

import Image from "next/image"
import { WaitlistSignupSimple } from "@/components/ui/waitlist-signup-simple"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F6F4F1' }}>
      {/* Gradient Image Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-6xl">
          <Image
            src="/images/gradient.png"
            alt=""
            fill
            className="object-contain opacity-80"
            priority
          />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-20">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal tracking-tight text-center leading-none md:leading-none lg:leading-none text-black mb-8 max-w-2xl mt-20" style={{ fontFamily: "'EB Garamond', serif" }}>
          Vibe code reliable applications even if you&apos;re not an engineer
        </h1>
        
        {/* Subheading */}
        <p className="text-center max-w-3xl text-base font-normal leading-relaxed text-black mb-8">
          You tell Epic what you want to build. Epic turns your idea into tasks, detailed with the right stack,
          security rails, and architecture principles so that your coding assistant builds it right.
        </p>
        
        {/* Waitlist Signup */}
        <div className="mb-16 w-full max-w-lg">
          <WaitlistSignupSimple />
        </div>
        
        {/* Product Mockup - Mobile */}
        <div className="block sm:hidden w-[120vw] -ml-[10vw] px-1 mt-8">
          <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: 'transparent' }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '1920/1200', backgroundColor: 'transparent' }}>
              <Image 
                src="/images/hero-image.svg" 
                alt="Epic AI Product Manager Interface"
                width={1920}
                height={1200}
                className="block w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Mockup - Desktop */}
        <div className="hidden sm:block w-full max-w-[90%] mx-auto px-6 mt-12">
          <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: 'transparent' }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '1920/1200', backgroundColor: 'transparent' }}>
              <Image 
                src="/images/hero-image.svg" 
                alt="Epic AI Product Manager Interface"
                width={1920}
                height={1200}
                className="block w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
                priority
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}