"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export function WaitlistSignupSimple() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)

    // Show success immediately for better UX
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 300) // Small delay just for the loading animation

    // Insert email in the background
    supabase
      .from('waitlist')
      .insert([{ email }])
      .then(() => {
        // Silently handle all errors since we already showed success
        // This includes duplicate emails (23505) and any other errors
      })
  }

  if (isSubmitted) {
    return (
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:rounded-full sm:overflow-hidden sm:backdrop-blur-md sm:bg-white/20 sm:shadow-lg">
          <input
            type="email"
            value={email}
            disabled
            className="w-full sm:flex-1 px-6 py-4 sm:py-3 text-base font-normal leading-relaxed text-black placeholder-gray-600 bg-white/30 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none outline-none rounded-full sm:rounded-none shadow-lg sm:shadow-none cursor-not-allowed opacity-50"
          />
          <div className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-3 bg-black/80 backdrop-blur-sm text-white font-medium text-base whitespace-nowrap min-w-max rounded-full shadow-lg">
            You&apos;re in!
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:rounded-full sm:overflow-hidden sm:backdrop-blur-md sm:bg-white/20 sm:shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full sm:flex-1 px-6 py-4 sm:py-3 text-base font-normal leading-relaxed text-black placeholder-gray-950 bg-white/30 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none outline-none rounded-full sm:rounded-none shadow-lg sm:shadow-none"
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-3 bg-black backdrop-blur-md text-white font-medium hover:bg-orange-500/80 hover:backdrop-blur-sm disabled:cursor-not-allowed transition-all text-base whitespace-nowrap min-w-max rounded-full shadow-lg"
        >
          {isLoading ? "Joining..." : "Get Early Access"}
        </button>
      </div>
    </form>
  )
}