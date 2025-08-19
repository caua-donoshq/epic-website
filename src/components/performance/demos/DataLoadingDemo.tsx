"use client"

import { useState, useEffect } from "react"

interface DataLoadingDemoProps {
  side: "slow" | "fast"
}

// Simulated user data
const userData = {
  id: 1,
  name: "Sarah Chen",
  role: "Senior Developer",
  avatar: "👩‍💻",
  stats: {
    projects: 12,
    commits: 847,
    reviews: 234
  }
}

export function DataLoadingDemo({ side }: DataLoadingDemoProps) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<typeof userData | null>(null)
  const [cacheHit, setCacheHit] = useState(false)
  const [requestCount, setRequestCount] = useState(0)

  const loadData = async () => {
    if (side === "fast" && data) {
      // Simulate cache hit for Epic-guided version
      setCacheHit(true)
      setTimeout(() => setCacheHit(false), 1000)
      return
    }

    setLoading(true)
    setRequestCount(prev => prev + 1)
    
    // Simulate network delay
    const delay = side === "slow" ? 2000 : 300
    await new Promise(resolve => setTimeout(resolve, delay))
    
    setData(userData)
    setLoading(false)
  }

  // Auto-load on mount for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      loadData()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (side === "slow") {
    return (
      <div className="space-y-4">
        <button
          onClick={loadData}
          className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          Load User Profile
        </button>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        )}

        {data && !loading && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
              <div className="text-4xl">{data.avatar}</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{data.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{data.role}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(data.stats).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-xs text-gray-500 dark:text-gray-500">
          Network requests: {requestCount}
        </div>
      </div>
    )
  }

  // Fast (Epic-guided) version
  return (
    <div className="space-y-4">
      <button
        onClick={loadData}
        className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors relative overflow-hidden"
      >
        Load User Profile
        {cacheHit && (
          <span className="absolute inset-0 bg-green-400 dark:bg-green-600 opacity-30 animate-pulse" />
        )}
      </button>

      {loading && !data && (
        <div className="space-y-4">
          {/* Skeleton loader instead of spinner */}
          <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32" />
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-24" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg animate-pulse">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-12 mx-auto mb-1" />
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      )}

      {data && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
            <div className="text-4xl">{data.avatar}</div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{data.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{data.role}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(data.stats).map(([key, value]) => (
              <div key={key} className="text-center p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
        <span>Network requests: {requestCount}</span>
        {cacheHit && (
          <span className="text-green-600 dark:text-green-400 font-medium animate-in fade-in">
            ✓ Cache hit!
          </span>
        )}
      </div>
    </div>
  )
}