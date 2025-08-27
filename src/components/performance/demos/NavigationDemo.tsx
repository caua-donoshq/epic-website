"use client"

import { useState } from "react"
import { House, User, Gear, ChartLine } from "phosphor-react"

interface NavigationDemoProps {
  side: "slow" | "fast"
}

const pages = [
  { id: "home", name: "Home", icon: House, content: "Welcome to the home page" },
  { id: "profile", name: "Profile", icon: User, content: "User profile information" },
  { id: "settings", name: "Settings", icon: Gear, content: "Application settings" },
  { id: "dashboard", name: "Dashboard", icon: ChartLine, content: "Analytics dashboard" },
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
      <div className="flex gap-1 p-1.5 rounded-lg mb-3 border shadow-sm" style={{ backgroundColor: '#F6F4F1', borderColor: '#E5E5E5' }}>
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => handleNavigation(page.id)}
            onMouseEnter={() => handleMouseEnter(page.id)}
            className={`
              flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all relative
              ${currentPage === page.id
                ? "text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }
              ${isNavigating && side === "slow" ? "opacity-50 cursor-not-allowed" : ""}
            `}
            style={currentPage === page.id ? { backgroundColor: '#E4DCD0' } : undefined}
            disabled={isNavigating && side === "slow"}
          >
            <span className="flex items-center justify-center gap-1">
              <page.icon size={14} weight="regular" />
              <span className="hidden sm:inline">{page.name}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Page Content */}
      <div className="flex-1 relative">
        {isNavigating && side === "slow" && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 rounded-lg">
            <div className="text-center">
              <div className="w-8 h-8 border-3 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto" />
              <p className="mt-3 text-xs text-gray-600">Loading page...</p>
            </div>
          </div>
        )}

        <div className={`
          p-4 rounded-lg h-full border shadow-sm
          ${isNavigating && side === "fast" ? "animate-in fade-in duration-100" : ""}
          ${!isNavigating && side === "fast" ? "animate-in slide-in-from-right duration-200" : ""}
        `} style={{ backgroundColor: '#F6F4F1', borderColor: '#E5E5E5' }}>
          {currentPageData && (
            <>
              <div className="mb-3">
                {currentPageData.icon && <currentPageData.icon size={32} weight="regular" className="text-gray-700" />}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {currentPageData.name}
              </h3>
              <p className="text-sm text-gray-600">{currentPageData.content}</p>
              
              {/* Mock content */}
              <div className="mt-4 space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation Info */}
      <div className="mt-3 text-xs text-gray-500 flex justify-between">
        <span>{side === "slow" ? "Full page reload" : "Client-side routing"}</span>
        {side === "fast" && (
          <span className="text-green-600">
            Prefetched: {prefetchedPages.size} pages
          </span>
        )}
      </div>
    </div>
  )
}