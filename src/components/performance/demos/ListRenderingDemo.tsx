"use client"

import { useState, useEffect, useRef } from "react"

interface ListRenderingDemoProps {
  side: "slow" | "fast"
}

// Generate list items
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
    emoji: ["📦", "🎯", "🚀", "💎", "🔥"][i % 5]
  }))
}

const allItems = generateItems(1000)

export function ListRenderingDemo({ side }: ListRenderingDemoProps) {
  const [items, setItems] = useState<typeof allItems>([])
  const [loading, setLoading] = useState(false)
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const loadItems = async () => {
    setLoading(true)
    setItems([])
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    if (side === "slow") {
      // Load all items at once
      setItems(allItems)
    } else {
      // Load only visible items for fast version
      setItems(allItems.slice(0, 20))
    }
    
    setLoading(false)
  }

  const handleScroll = () => {
    if (side === "fast" && scrollContainerRef.current) {
      const { scrollTop, clientHeight } = scrollContainerRef.current
      const itemHeight = 64 // Approximate height of each item
      const start = Math.floor(scrollTop / itemHeight)
      const end = Math.ceil((scrollTop + clientHeight) / itemHeight)
      
      setVisibleRange({ start: Math.max(0, start - 5), end: Math.min(allItems.length, end + 5) })
    }
  }

  // Update visible items when range changes (fast version only)
  useEffect(() => {
    if (side === "fast" && !loading) {
      setItems(allItems.slice(visibleRange.start, visibleRange.end))
    }
  }, [visibleRange, side, loading])

  // Auto-load on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      loadItems()
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Add custom CSS for janky scrolling
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .scroll-slow {
        scroll-behavior: auto !important;
      }
      
      .scroll-slow::-webkit-scrollbar {
        width: 8px;
      }
      
      .scroll-slow::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 4px;
      }
    `
    document.head.appendChild(style)
    
    // Cleanup
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="h-full flex flex-col">
      <button
        onClick={loadItems}
        className="w-full py-2 px-4 mb-4 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        Load 1000 Items
      </button>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-3 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}

      {!loading && items.length > 0 && (
        <>
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
            {side === "slow" ? "Rendering all 1000 items" : "Virtual scrolling - rendering visible items only"}
          </div>
          
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className={`
              flex-1 overflow-y-auto space-y-2 pr-2
              ${side === "slow" ? "scroll-slow" : ""}
            `}
            style={{
              height: "300px",
              ...(side === "fast" && {
                position: "relative"
              })
            }}
          >
            {side === "fast" && (
              <div style={{ height: `${allItems.length * 64}px`, position: "relative" }}>
                <div style={{ transform: `translateY(${visibleRange.start * 64}px)` }}>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 mb-2 bg-gray-100 dark:bg-gray-900 rounded-lg animate-in fade-in slide-in-from-right duration-200"
                      style={{ height: "56px" }}
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-gray-900 dark:text-white">{item.name}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {side === "slow" && items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-900 dark:text-white">{item.name}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-500 flex justify-between">
            <span>Total items: {allItems.length}</span>
            <span className={side === "fast" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              {side === "fast" ? `Rendering: ${items.length}` : "Rendering: ALL"}
            </span>
          </div>
        </>
      )}
    </div>
  )
}