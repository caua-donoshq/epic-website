"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function WaitlistSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)

    // Use form submission to avoid CORS
    const formData = new FormData()
    formData.append('email', email)
    formData.append('timestamp', new Date().toISOString())

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzdm9oMvseD_7e2zBwNiExUHvsMSZ9AEoi4z9Sng2xOV_Fs9WoRNtFEHZb8PZnqTHup/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This bypasses CORS but we won't get the response
      })
      
      // Since we can't read the response with no-cors, we'll assume success
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      // Even with no-cors, if we get here, something went wrong
      alert('There was an error submitting your email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4 p-6 bg-green-50 rounded-xl border border-green-200">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-green-900 mb-1">You&apos;re on the list!</h3>
          <p className="text-green-700 text-sm">We&apos;ll notify you when Epic is ready.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-2 p-1 bg-white rounded-xl border border-gray-200 shadow-sm sm:items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none text-sm"
        />
        <Button 
          type="submit"
          disabled={isLoading || !email}
          className="bg-[#FF6900] text-white hover:bg-[#E55F00] font-medium px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isLoading ? "Joining..." : "Get early access"}
        </Button>
      </div>
    </form>
  )
}