"use client"

import { useState } from "react"
import { DataLoadingDemo } from "./demos/DataLoadingDemo"
import { ListRenderingDemo } from "./demos/ListRenderingDemo"
import { NavigationDemo } from "./demos/NavigationDemo"
import { FormUpdateDemo } from "./demos/FormUpdateDemo"

const tabs = [
  { id: "data", label: "Data Loading", component: DataLoadingDemo },
  // { id: "list", label: "List Rendering", component: ListRenderingDemo }, // Hidden for now, will use in future
  { id: "navigation", label: "Navigation", component: NavigationDemo },
  { id: "forms", label: "Form Updates", component: FormUpdateDemo },
]

export function PerformanceComparison() {
  const [activeTab, setActiveTab] = useState("data")
  const ActiveDemo = tabs.find(tab => tab.id === activeTab)?.component || DataLoadingDemo

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-6">
      {/* Tab Navigation */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95
                ${activeTab === tab.id
                  ? "bg-gradient-to-r from-pink-400 to-orange-400 text-white shadow-xl shadow-pink-400/20"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-800/50"
                }
              `}
            >
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl blur opacity-25"></div>
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Split Screen Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Vibe-Coded Side */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gray-300 dark:bg-gray-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 dark:border-gray-700/60 shadow-xl">
            
            {/* Header */}
            <div className="mb-8 pt-4">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Without Epic</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Traditional implementation - slow and janky
              </p>
            </div>
            
            {/* Demo Content */}
            <div className="relative">
              <div className="absolute -inset-2 bg-white/20 dark:bg-black/20 rounded-2xl blur"></div>
              <div className="relative min-h-[450px] bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/50 dark:border-gray-600/50 shadow-inner">
                <ActiveDemo side="slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Epic-Guided Side */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-pink-50/80 via-orange-50/80 to-pink-50/80 dark:from-pink-950/30 dark:via-orange-950/30 dark:to-pink-950/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/60 dark:border-pink-800/60 shadow-xl">
            
            {/* Header */}
            <div className="mb-8 pt-4">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">With Epic</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Performance optimized - fast and smooth
              </p>
            </div>
            
            {/* Demo Content */}
            <div className="relative">
              <div className="absolute -inset-2 bg-white/20 dark:bg-black/20 rounded-2xl blur"></div>
              <div className="relative min-h-[450px] bg-white/60 dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/50 dark:border-gray-600/50 shadow-inner">
                <ActiveDemo side="fast" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}