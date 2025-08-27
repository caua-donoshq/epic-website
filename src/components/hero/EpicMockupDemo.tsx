"use client"

import { useEffect, useState } from 'react'
import { EpicAnimatedDemo } from './EpicAnimatedDemo'

export function EpicMockupDemo() {
  const [key, setKey] = useState(0)
  
  useEffect(() => {
    // Force remount to ensure clean state
    setKey(Date.now())
  }, [])
  
  return <EpicAnimatedDemo key={key} />
}