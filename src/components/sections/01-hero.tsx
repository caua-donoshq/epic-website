"use client"

import Image from "next/image"
import { WaitlistSignupSimple } from "@/components/ui/waitlist-signup-simple"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F6F4F1' }}>
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: `
            radial-gradient(circle at 5% 50%, rgba(255, 119, 0, 0.25) 0%, rgba(255, 119, 0, 0.15) 25%, transparent 40%),
            radial-gradient(circle at 0% 50%, rgba(242, 0, 255, 0.2) 0%, rgba(242, 0, 255, 0.1) 10%, transparent 25%),
            radial-gradient(circle at 95% 45%, rgba(255, 119, 0, 0.25) 0%, rgba(255, 119, 0, 0.15) 25%, transparent 40%),
            radial-gradient(circle at 100% 45%, rgba(242, 0, 255, 0.2) 0%, rgba(242, 0, 255, 0.1) 10%, transparent 25%)
          `,
          height: '100%'
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-20">
        {/* Logo */}
        <div className="mb-20">
          <Image 
            src="/images/epic-logo-black.svg" 
            alt="Epic" 
            width={120} 
            height={40}
            className="w-auto h-8 md:h-10 lg:h-8"
            priority
          />
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-center leading-none md:leading-none lg:leading-none text-black mb-8 max-w-4xl" style={{ fontFamily: "'EB Garamond', serif" }}>
          Vibe code reliable applications even if you&apos;re not an engineer
        </h1>
        
        {/* Subheading */}
        <p className="text-center max-w-3xl text-md mb-8 text-black">
          You tell Epic what you want to build. Epic turns your idea into tasks, detailed with the right stack,
          security rails, and architecture principles so that your coding assistant build it right.
        </p>
        
        {/* Waitlist Signup */}
        <div className="mb-16 w-full max-w-sm">
          <WaitlistSignupSimple />
        </div>
        
        {/* Product Mockup */}
        <div className="w-full max-w-[90%] mx-auto px-6 mt-12">
          <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: 'transparent' }}>
            {/* Product Screenshot Area */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '1920/1200', backgroundColor: 'transparent' }}>
              {/* Static Screenshot - Shown on all screen sizes */}
              <Image 
                src="/images/product-screenshot.png" 
                alt="Epic AI Product Manager Interface"
                width={1920}
                height={1200}
                className="block w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}