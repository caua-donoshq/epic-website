"use client"

import { useState } from "react"
import { DataLoadingDemo } from "./demos/DataLoadingDemo"
import { ListRenderingDemo } from "./demos/ListRenderingDemo"
import { NavigationDemo } from "./demos/NavigationDemo"

const tabs = [
  { id: "navigation", label: "Navigation", component: NavigationDemo },
  { id: "data", label: "Data Loading", component: DataLoadingDemo },
  // { id: "list", label: "List Rendering", component: ListRenderingDemo }, // Hidden for now, will use in future
]

export function PerformanceComparison() {
  const [activeTab, setActiveTab] = useState("navigation")
  const ActiveDemo = tabs.find(tab => tab.id === activeTab)?.component || DataLoadingDemo

  return (
    <div className="w-full max-w-5xl mx-auto px-4 lg:px-6">
      {/* Tab Navigation */}
      <div className="mb-10">
        <div className="flex justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200
                ${activeTab === tab.id
                  ? "bg-black text-white"
                  : "text-black border border-black hover:border-gray-600"
                }
              `}
              style={activeTab !== tab.id ? { backgroundColor: '#F6F4EF' } : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Split Screen Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Generic Vibe Coded */}
        <div>
          <h3 className="text-xl font-normal mb-4 text-center text-gray-900 dark:text-white" style={{ fontFamily: "'EB Garamond', serif" }}>Generic Vibe Coded</h3>
          <div className="relative min-h-[320px] rounded-xl p-4 border shadow-md" style={{ backgroundColor: '#F6F4F1' }}>
            <ActiveDemo side="slow" />
          </div>
        </div>

        {/* Epic-guided */}
        <div>
          <h3 className="text-xl font-normal mb-4 text-center text-gray-900 dark:text-white" style={{ fontFamily: "'EB Garamond', serif" }}>Epic-guided</h3>
          <div className="relative min-h-[320px] rounded-xl p-4 border shadow-md" style={{ backgroundColor: '#F6F4F1' }}>
            <ActiveDemo side="fast" />
          </div>
        </div>
      </div>

    </div>
  )
}