"use client"

import Image from "next/image"
import { EpicMockupDemo } from "@/components/hero/EpicMockupDemo"
import { WaitlistSignupSimple } from "@/components/ui/waitlist-signup-simple"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      {/* Side gradients - pink/purple on left, blue on right */}
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
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-20">
        {/* Logo */}
        <div className="mb-20">
          <Image 
            src="/images/epic-logo.svg" 
            alt="Epic" 
            width={160} 
            height={50}
            className="w-auto h-auto max-h-12 md:max-h-14 lg:max-h-16"
          />
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center leading-none md:leading-none lg:leading-none text-gray-900 mb-8 max-w-4xl" style={{ fontFamily: "'EB Garamond', serif" }}>
          Vibe code reliable applications even if you&apos;re not an engineer
        </h1>
        
        {/* Subheading */}
        <p className="text-center max-w-3xl text-md mb-8" style={{ color: '#7C7C7C' }}>
          You tell Epic what you want to build. Epic turns your idea into tasks, detailed with the right stack,
          security rails, and architecture principles so that your coding assistant build it right.
        </p>
        
        {/* Waitlist Signup */}
        <div className="mb-16">
          <WaitlistSignupSimple />
        </div>
        
        {/* Product Mockup */}
        <div className="w-full max-w-[90%] mx-auto px-6 mt-12">
          <div className="relative rounded-xl shadow-2xl overflow-hidden bg-white border border-gray-200">
            {/* Product Screenshot Area */}
            <div className="relative bg-gray-50 overflow-hidden" style={{ aspectRatio: '1920/1200' }}>
              {/* Animation - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:block">
                <EpicMockupDemo />
              </div>
              {/* Static Screenshot - Shown on mobile, hidden on desktop */}
              <Image 
                src="/images/product-screenshot.png" 
                alt="Epic AI Product Manager Interface"
                width={1920}
                height={1200}
                className="block lg:hidden w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}