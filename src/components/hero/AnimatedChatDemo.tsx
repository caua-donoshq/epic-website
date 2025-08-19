"use client"

import { useState, useEffect } from "react"
import { Sparkle, ArrowsOutSimple, X, Copy, Check } from "phosphor-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { fullTaskContent } from "./task-content"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

interface Message {
  id: number
  role: "user" | "assistant"
  content: string
  preview?: string
}

const animationMessages: Message[] = [
  {
    id: 1,
    role: "user",
    content: "I want to add a ChatGPT-like AI chat assistant to my app. When users log in, they should see a \"Chat with AI\" button or section. When they click it, they get a clean chat window where they can type questions and get helpful AI responses.",
    preview: "Epic is thinking..."
  },
  {
    id: 2,
    role: "assistant", 
    content: fullTaskContent,
    preview: "Epic is thinking..."
  }
]

export function AnimatedChatDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
      
      // Start typing animation after a brief delay
      const typingTimer = setTimeout(() => {
        setIsTyping(true)
      }, 500)
      
      return () => clearTimeout(typingTimer)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  // Handle animation progression after typing is complete
  useEffect(() => {
    if (!isTyping && displayedText && currentStep === 0) {
      // Start "Epic is thinking..." step after typing completes
      const stepTimer = setTimeout(() => {
        setCurrentStep(1)
        
        // Then show the full response after longer thinking time
        const finalTimer = setTimeout(() => {
          setCurrentStep(2)
          setIsAnimating(false)
        }, 2500) // Increased from 1500ms to 2500ms for longer "thinking" time
        
        return () => clearTimeout(finalTimer)
      }, 800) // Increased pause after typing completes
      
      return () => clearTimeout(stepTimer)
    }
  }, [isTyping, displayedText, currentStep])

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return

    const fullText = animationMessages[0].content
    let currentIndex = 0
    setDisplayedText("")

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 15) // Faster typing speed

    return () => clearInterval(typingInterval)
  }, [isTyping])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullTaskContent)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const renderMessage = (step: number) => {
    if (step === 0) {
      return (
        <div className="h-full flex items-center px-6">
          <div className="flex items-start gap-3 w-full">
            <Sparkle size={20} weight="fill" className="text-gray-400 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              {displayedText}
              {isTyping && (
                <span className="animate-pulse text-gray-400 ml-1">|</span>
              )}
            </p>
          </div>
        </div>
      )
    }
    
    if (step === 1) {
      return (
        <div className="h-full flex flex-col justify-center px-6 space-y-4">
          <div className="flex items-start gap-3">
            <Sparkle size={20} weight="fill" className="text-gray-400 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">{displayedText}</p>
          </div>
          <div className="pl-8">
            <p className="text-gray-500 italic">Epic is thinking...</p>
          </div>
        </div>
      )
    }
    
    // Step 2 - Full response
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-start gap-3">
          <Sparkle size={20} weight="fill" className="text-gray-400 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed">{displayedText}</p>
        </div>
        <div className="pl-8 relative">
          <div 
            className="rounded-lg p-4 max-h-[400px] overflow-y-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Expand Button */}
            <button
              onClick={() => setIsFullScreen(true)}
              className={`absolute bottom-8 right-6 p-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 z-50 ${
                isHovering 
                  ? 'opacity-100 bg-gray-100 hover:bg-gray-200 text-gray-600 shadow-lg' 
                  : 'opacity-0'
              }`}
              aria-label="Expand to full screen"
            >
              <ArrowsOutSimple size={16} weight="regular" />
            </button>
            <div className="prose prose-sm max-w-none text-gray-700">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                h1: ({ children }) => (
                  <h1 className="text-xl font-bold text-gray-800 mb-4 mt-6 first:mt-0">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-lg font-semibold text-gray-800 mb-3 mt-5 first:mt-0">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-base font-semibold text-gray-800 mb-2 mt-4 first:mt-0">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mb-3 text-gray-600 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-3 text-gray-600 space-y-1">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-gray-600">{children}</li>
                ),
                code: ({ inline, children, ...props }: any) => {
                  return inline ? (
                    <code className="bg-pink-50 text-pink-700 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                      {children}
                    </code>
                  ) : (
                    <code className="block text-gray-800 p-3 rounded-lg text-sm font-mono overflow-x-auto" {...props} style={{ backgroundColor: '#EDEDEB' }}>
                      {children}
                    </code>
                  )
                },
                pre: ({ children }) => (
                  <pre className="mb-4">{children}</pre>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-800">{children}</strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-pink-300 pl-4 italic text-gray-600 mb-3">
                    {children}
                  </blockquote>
                )
                }}
              >
                {fullTaskContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-20 w-full max-w-4xl">
      <div 
        className={`bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 overflow-hidden transition-all duration-1000 ease-out ${
          currentStep === 0 ? 'h-28' : 
          currentStep === 1 ? 'h-36' : 
          'h-[500px]'
        }`}
      >
        {renderMessage(currentStep)}
      </div>

      {/* Full Screen Modal */}
      <Dialog open={isFullScreen} onOpenChange={setIsFullScreen}>
        <DialogContent className="!max-w-6xl !w-[90vw] max-h-[85vh] overflow-hidden bg-white/95 backdrop-blur-md border border-white/50 shadow-2xl" showCloseButton={false}>
          <DialogHeader className="border-b border-gray-200/60 pb-4">
            <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center justify-between">
              Epic Technical Specification
              <div className="flex items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition-colors duration-200 text-sm font-medium"
                  aria-label="Copy prompt to clipboard"
                >
                  {isCopied ? (
                    <>
                      <Check size={16} weight="bold" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} weight="bold" />
                      Copy Prompt
                    </>
                  )}
                </button>
                <DialogClose asChild>
                  <button
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Close full screen view"
                  >
                    <X size={20} weight="bold" className="text-gray-600" />
                  </button>
                </DialogClose>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-6 overflow-y-auto max-h-[70vh] pr-2">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-8 first:mt-0">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-7 first:mt-0">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 first:mt-0">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-gray-700 leading-relaxed text-base">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                  code: ({ inline, children, ...props }: any) => {
                    return inline ? (
                      <code className="bg-pink-50 text-pink-700 px-2 py-1 rounded text-sm font-mono" {...props}>
                        {children}
                      </code>
                    ) : (
                      <code className="block text-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto" {...props} style={{ backgroundColor: '#EDEDEB' }}>
                        {children}
                      </code>
                    )
                  },
                  pre: ({ children }) => (
                    <pre className="mb-6">{children}</pre>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-800">{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-pink-300 pl-6 italic text-gray-600 mb-4">
                      {children}
                    </blockquote>
                  )
                }}
              >
                {fullTaskContent}
              </ReactMarkdown>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}