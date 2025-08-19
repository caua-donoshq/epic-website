"use client"

import { useState } from "react"
import { ConfigEditor } from "./ConfigEditor"
import { LivePreview } from "./LivePreview"

export interface DesignTokens {
  primary: string
  primaryForeground: string
  secondary: string
  accent: string
  background: string
  foreground: string
  card: string
  border: string
  radius: number
  spacing: number
  fontFamily: string
  fontWeight: number
}

const defaultTokens: DesignTokens = {
  primary: "#3b82f6", // blue-500
  primaryForeground: "#ffffff",
  secondary: "#f1f5f9", // slate-100
  accent: "#8b5cf6", // violet-500
  background: "#ffffff",
  foreground: "#0f172a", // slate-900
  card: "#ffffff",
  border: "#e2e8f0", // slate-200
  radius: 8,
  spacing: 16,
  fontFamily: "Inter",
  fontWeight: 400
}

const presetThemes = [
  {
    name: "Modern Sans",
    tokens: { ...defaultTokens, fontFamily: "Inter", fontWeight: 400 }
  },
  {
    name: "Epic Brand",
    tokens: {
      ...defaultTokens,
      primary: "#ec4899", // pink-500
      accent: "#f97316", // orange-500
      secondary: "#fef7ff", // pink-50
      fontFamily: "Inter",
      fontWeight: 500
    }
  },
  {
    name: "Clean Serif",
    tokens: {
      ...defaultTokens,
      primary: "#6366f1", // indigo-500
      accent: "#8b5cf6", // violet-500
      secondary: "#f8fafc", // slate-50
      fontFamily: "Libre Baskerville",
      fontWeight: 400
    }
  },
  {
    name: "Developer",
    tokens: {
      ...defaultTokens,
      primary: "#10b981", // emerald-500
      accent: "#f59e0b", // amber-500
      secondary: "#ecfdf5", // emerald-50
      fontFamily: "JetBrains Mono",
      fontWeight: 400
    }
  },
  {
    name: "Dark Professional",
    tokens: {
      ...defaultTokens,
      primary: "#3b82f6",
      background: "#0f172a", // slate-900
      foreground: "#f8fafc", // slate-50
      card: "#1e293b", // slate-800
      border: "#334155", // slate-700
      secondary: "#1e293b", // slate-800
      fontFamily: "Inter",
      fontWeight: 400
    }
  }
]

export function LiveThemeSwitcher() {
  const [tokens, setTokens] = useState<DesignTokens>(defaultTokens)
  const [activePreset, setActivePreset] = useState("Modern Sans")

  const handleTokenChange = (key: keyof DesignTokens, value: string | number) => {
    setTokens(prev => ({ ...prev, [key]: value }))
    setActivePreset("Custom")
  }

  const applyPreset = (preset: typeof presetThemes[0]) => {
    setTokens(preset.tokens)
    setActivePreset(preset.name)
  }

  return (
    <div className="w-full max-w-7xl mx-auto">

      {/* Preset Themes */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {presetThemes.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className={`
                relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95
                ${activePreset === preset.name
                  ? "bg-gradient-to-r from-pink-400 to-orange-400 text-white shadow-xl shadow-pink-400/25"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-lg backdrop-blur-sm"
                }
              `}
            >
              {activePreset === preset.name && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl blur opacity-30"></div>
              )}
              <span className="relative z-10">{preset.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Config Editor - Left Side */}
        <div className="xl:col-span-2 order-2 xl:order-1">
          <div className="sticky top-6">
            <ConfigEditor 
              tokens={tokens} 
              onTokenChange={handleTokenChange}
            />
          </div>
        </div>

        {/* Live Preview - Right Side */}
        <div className="xl:col-span-3 order-1 xl:order-2">
          <LivePreview tokens={tokens} />
        </div>
      </div>
    </div>
  )
}