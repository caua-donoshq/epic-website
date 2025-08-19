"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto px-6 py-3">
        <div className={`transition-all duration-300 ${
          hasScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm rounded-full' 
            : ''
        }`}>
          <div className="flex items-center justify-between h-12 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/epic-new-logo.svg" 
                alt="Epic" 
                width={80} 
                height={28}
                className="h-6 w-auto"
              />
            </Link>
            
            {/* CTA */}
            <div className="flex items-center">
              <Button 
                className="bg-black text-white hover:bg-gray-800 font-medium h-10 px-6 rounded-lg"
                asChild
              >
                <Link href="/signup">Get early access</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}