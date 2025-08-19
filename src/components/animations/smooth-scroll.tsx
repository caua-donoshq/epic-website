"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SmoothScrollProps {
  children: ReactNode
  className?: string
}

export function SmoothScroll({ children, className = "" }: SmoothScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  )
}