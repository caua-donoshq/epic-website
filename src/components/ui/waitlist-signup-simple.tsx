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
        <div className="flex items-center rounded-full overflow-hidden backdrop-blur-md bg-white/20 shadow-lg">
          <input
            type="email"
            value={email}
            disabled
            className="flex-1 px-6 py-3 text-black placeholder-gray-600 bg-transparent outline-none text-base cursor-not-allowed opacity-50"
          />
          <div className="px-10 py-3 bg-black/80 backdrop-blur-sm text-white font-medium text-base whitespace-nowrap min-w-max rounded-full shadow-lg">
            You&apos;re in!
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center rounded-full overflow-hidden backdrop-blur-md bg-white/20 shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-6 py-3 text-black placeholder-gray-950 bg-transparent outline-none text-base"
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="px-10 py-3 bg-black backdrop-blur-md text-white font-medium hover:bg-orange-500/80 hover:backdrop-blur-sm disabled:cursor-not-allowed transition-all text-base whitespace-nowrap min-w-max rounded-full shadow-lg"
        >
          {isLoading ? "Joining..." : "Get Early Access"}
        </button>
      </div>
    </form>
  )
}