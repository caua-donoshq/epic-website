"use client"

import { RainbowButton } from "@/components/ui/button-rainbow"
import Link from "next/link"
import Image from "next/image"
import { AnimatedChatDemo } from "@/components/hero/AnimatedChatDemo"

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
            src="/images/epic-new-logo.svg" 
            alt="Epic" 
            width={120} 
            height={40}
            className="h-10 w-auto"
          />
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium tracking-tight text-center leading-tight md:leading-tight lg:leading-snug text-gray-900 mb-8 max-w-4xl">
          It&apos;s like vibe coding with a senior developer by your side
        </h1>
        
        {/* CTA Button */}
        <Link href="/signup">
          <RainbowButton className="mb-8">
            Get early access
          </RainbowButton>
        </Link>
        
        {/* Subheading */}
        <p className="text-center max-w-2xl text-md" style={{ color: '#7C7C7C' }}>
          Epic is the AI tech lead that turns your ideas into tasks, detailed with the right stack, security rails, and architecture principles
        </p>
        
        {/* Chat Interface Demo */}
        <AnimatedChatDemo />
      </div>
    </section>
  )
}