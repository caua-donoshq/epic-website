"use client"

import { useState } from "react"

interface NavigationDemoProps {
  side: "slow" | "fast"
}

const pages = [
  { id: "home", name: "Home", icon: "🏠", content: "Welcome to the home page" },
  { id: "profile", name: "Profile", icon: "👤", content: "User profile information" },
  { id: "settings", name: "Settings", icon: "⚙️", content: "Application settings" },
  { id: "dashboard", name: "Dashboard", icon: "📊", content: "Analytics dashboard" },
]

export function NavigationDemo({ side }: NavigationDemoProps) {
  const [currentPage, setCurrentPage] = useState("home")
  const [isNavigating, setIsNavigating] = useState(false)
  const [prefetchedPages, setPrefetchedPages] = useState<Set<string>>(new Set())

  const handleNavigation = async (pageId: string) => {
    if (pageId === currentPage) return

    if (side === "slow") {
      // Simulate full page reload
      setIsNavigating(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setCurrentPage(pageId)
      setIsNavigating(false)
    } else {
      // Instant client-side navigation
      setCurrentPage(pageId)
      // Show quick flash to indicate navigation
      setIsNavigating(true)
      setTimeout(() => setIsNavigating(false), 100)
    }
  }

  const handleMouseEnter = (pageId: string) => {
    if (side === "fast" && !prefetchedPages.has(pageId)) {
      // Simulate prefetching on hover
      setPrefetchedPages(prev => new Set(prev).add(pageId))
    }
  }

  const currentPageData = pages.find(p => p.id === currentPage)

  return (
    <div className="h-full flex flex-col">
      {/* Navigation Bar */}
      <div className="flex gap-2 p-2 bg-gray-100 dark:bg-gray-900 rounded-lg mb-4">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => handleNavigation(page.id)}
            onMouseEnter={() => handleMouseEnter(page.id)}
            className={`
              flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all relative
              ${currentPage === page.id
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }
              ${isNavigating && side === "slow" ? "opacity-50 cursor-not-allowed" : ""}
            `}
            disabled={isNavigating && side === "slow"}
          >
            <span className="flex items-center justify-center gap-1">
              <span className="text-base">{page.icon}</span>
              <span className="hidden sm:inline">{page.name}</span>
            </span>
            
            {/* Prefetch indicator for fast version */}
            {side === "fast" && prefetchedPages.has(page.id) && page.id !== currentPage && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            )}
          </button>
        ))}
      </div>

      {/* Page Content */}
      <div className="flex-1 relative">
        {isNavigating && side === "slow" && (
          <div className="absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center z-10 rounded-lg">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto" />
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Loading page...</p>
            </div>
          </div>
        )}

        <div className={`
          p-6 bg-gray-100 dark:bg-gray-900 rounded-lg h-full
          ${isNavigating && side === "fast" ? "animate-in fade-in duration-100" : ""}
          ${!isNavigating && side === "fast" ? "animate-in slide-in-from-right duration-200" : ""}
        `}>
          {currentPageData && (
            <>
              <div className="text-4xl mb-4">{currentPageData.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {currentPageData.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{currentPageData.content}</p>
              
              {/* Mock content */}
              <div className="mt-6 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation Info */}
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-500 flex justify-between">
        <span>{side === "slow" ? "Full page reload" : "Client-side routing"}</span>
        {side === "fast" && (
          <span className="text-green-600 dark:text-green-400">
            Prefetched: {prefetchedPages.size} pages
          </span>
        )}
      </div>
    </div>
  )
}