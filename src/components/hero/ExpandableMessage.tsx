"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Sparkle } from "phosphor-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { ChatMessage } from "./demo-content"

interface ExpandableMessageProps {
  message: ChatMessage
}

export function ExpandableMessage({ message }: ExpandableMessageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  if (message.role === "user") {
    return (
      <div className="flex items-start gap-2">
        <Sparkle size={20} weight="fill" className="text-gray-400 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed">{message.content}</p>
        </div>
      </div>
    )
  }

  // Assistant message with expandable content
  return (
    <>
      <div className="flex-1">
        <div className="relative">
          {/* Truncated preview */}
          <div className="relative overflow-hidden">
            <div className="max-h-[8rem] md:max-h-[10rem] overflow-hidden">
              <pre className="whitespace-pre-wrap font-sans text-gray-600 leading-relaxed">
                {message.content}
              </pre>
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
          </div>
            
          {/* View more button */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
            aria-label="View full Epic response"
          >
            View more →
          </button>
        </div>
      </div>

      {/* Full content dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between pr-12">
              <span>Epic Output</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="absolute right-12 top-4"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
              {message.content}
            </pre>
          </div>
          
          <div className="mt-6 flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}