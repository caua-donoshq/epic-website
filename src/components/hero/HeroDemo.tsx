"use client"

import { Plus } from "lucide-react"
import { ExpandableMessage } from "./ExpandableMessage"
import { demoMessages, type ChatMessage } from "./demo-content"

interface HeroDemoProps {
  messages?: ChatMessage[]
}

export function HeroDemo({ messages = demoMessages }: HeroDemoProps) {
  return (
    <div className="mt-20 w-full max-w-3xl">
      <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 overflow-hidden">
        {/* Messages */}
        <div className="p-8 space-y-8">
          {messages.map((message) => (
            <ExpandableMessage key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  )
}