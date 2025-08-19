"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "" 
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : directions[direction].y,
        x: isInView ? 0 : directions[direction].x,
      }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.21, 1.02, 0.73, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}