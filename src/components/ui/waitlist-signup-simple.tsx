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
      <div className="w-full max-w-2xl">
        <div className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            disabled
            className="w-full px-6 py-3 text-black placeholder-gray-600 bg-transparent border border-black rounded-lg outline-none text-base cursor-not-allowed opacity-50"
          />
          <div className="w-full px-6 py-3 bg-[#2A2A2A] text-white font-medium rounded-lg text-center text-base">
            You&apos;re in!
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-6 py-3 text-black placeholder-gray-600 bg-transparent border border-black rounded-lg outline-none focus:border-gray-600 text-base"
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="w-full px-6 py-3 bg-[#2A2A2A] text-white font-medium rounded-lg hover:bg-[#000000] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-base"
        >
          {isLoading ? "Joining..." : "Get Early Access"}
        </button>
      </div>
    </form>
  )
}