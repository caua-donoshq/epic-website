"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
            ? 'bg-white/40 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.08)] border border-white/50 rounded-full' 
            : ''
        }`}>
          <div className="flex items-center justify-between h-12 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center pb-1">
              <Image 
                src="/images/epic-logo-black.svg" 
                alt="Epic" 
                width={100} 
                height={32}
                className="w-auto h-auto max-h-6 md:max-h-8"
              />
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  )
}