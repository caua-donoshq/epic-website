"use client"

import { useState, useEffect } from 'react'
import { EpicAnimatedDemo } from './EpicAnimatedDemo'

export function EpicMockupDemo() {
  const [showAIResponse, setShowAIResponse] = useState(false)
  const [inputValue, setInputValue] = useState('')
  
  // Simulate typing animation for the prompt
  useEffect(() => {
    const targetText = '"I want to add a ChatGPT-like AI chat assistant to my app. When users log in, they should see a "Chat with AI" button or section. When they click it, they get a clean chat window where they can type questions and get helpful AI responses."'
    let currentIndex = 0
    
    const typeText = () => {
      if (currentIndex < targetText.length) {
        setInputValue(targetText.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeText, 30)
      } else {
        setTimeout(() => setShowAIResponse(true), 1000)
      }
    }
    
    setTimeout(() => {
      typeText()
    }, 2000)
  }, [])

  return <EpicAnimatedDemo />
}