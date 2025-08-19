"use client"

import { useState } from "react"
import type { DesignTokens } from "./LiveThemeSwitcher"

interface ConfigEditorProps {
  tokens: DesignTokens
  onTokenChange: (key: keyof DesignTokens, value: string | number) => void
}

interface ColorInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  description?: string
}

function ColorInput({ label, value, onChange, description }: ColorInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="flex gap-3 items-center">
        <div className="relative group w-12 h-10">
          <div 
            className="w-full h-full rounded-lg border-2 border-gray-200 dark:border-gray-600 shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-105"
            style={{ backgroundColor: value }}
          />
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-4 py-2.5 text-sm bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
          placeholder="#3b82f6"
        />
      </div>
      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      )}
    </div>
  )
}

interface SliderInputProps {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  unit: string
  description?: string
}

function SliderInput({ label, value, onChange, min, max, step = 1, unit, description }: SliderInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="flex gap-3 items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <span className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded min-w-[60px] text-center">
          {value}{unit}
        </span>
      </div>
      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      )}
    </div>
  )
}

const fontFamilies = [
  { name: "Inter", value: "Inter", category: "Sans Serif" },
  { name: "Roboto", value: "Roboto", category: "Sans Serif" },
  { name: "Open Sans", value: "Open Sans", category: "Sans Serif" },
  { name: "Libre Baskerville", value: "Libre Baskerville", category: "Serif" },
  { name: "Lora", value: "Lora", category: "Serif" },
  { name: "JetBrains Mono", value: "JetBrains Mono", category: "Monospace" },
  { name: "Roboto Mono", value: "Roboto Mono", category: "Monospace" }
]

export function ConfigEditor({ tokens, onTokenChange }: ConfigEditorProps) {
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "spacing">("colors")

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab("colors")}
          className={`
            flex-1 py-3 px-4 text-sm font-medium transition-colors
            ${activeTab === "colors"
              ? "bg-white dark:bg-gray-900 text-pink-600 dark:text-pink-400 border-b-2 border-pink-600 dark:border-pink-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }
          `}
        >
          Colors
        </button>
        <button
          onClick={() => setActiveTab("typography")}
          className={`
            flex-1 py-3 px-4 text-sm font-medium transition-colors
            ${activeTab === "typography"
              ? "bg-white dark:bg-gray-900 text-pink-600 dark:text-pink-400 border-b-2 border-pink-600 dark:border-pink-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }
          `}
        >
          Typography
        </button>
        <button
          onClick={() => setActiveTab("spacing")}
          className={`
            flex-1 py-3 px-4 text-sm font-medium transition-colors
            ${activeTab === "spacing"
              ? "bg-white dark:bg-gray-900 text-pink-600 dark:text-pink-400 border-b-2 border-pink-600 dark:border-pink-400"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }
          `}
        >
          Layout
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "colors" && (
          <div className="space-y-6">
            <ColorInput
              label="Primary"
              value={tokens.primary}
              onChange={(value) => onTokenChange("primary", value)}
              description="Main brand color for buttons, links, etc."
            />
            
            <ColorInput
              label="Primary Text"
              value={tokens.primaryForeground}
              onChange={(value) => onTokenChange("primaryForeground", value)}
              description="Text color on primary background"
            />
            
            <ColorInput
              label="Secondary"
              value={tokens.secondary}
              onChange={(value) => onTokenChange("secondary", value)}
              description="Secondary background color"
            />
            
            <ColorInput
              label="Accent"
              value={tokens.accent}
              onChange={(value) => onTokenChange("accent", value)}
              description="Accent color for highlights"
            />
            
            <ColorInput
              label="Background"
              value={tokens.background}
              onChange={(value) => onTokenChange("background", value)}
              description="Main page background"
            />
            
            <ColorInput
              label="Text"
              value={tokens.foreground}
              onChange={(value) => onTokenChange("foreground", value)}
              description="Primary text color"
            />
            
            <ColorInput
              label="Card"
              value={tokens.card}
              onChange={(value) => onTokenChange("card", value)}
              description="Card background color"
            />
            
            <ColorInput
              label="Border"
              value={tokens.border}
              onChange={(value) => onTokenChange("border", value)}
              description="Border and divider color"
            />
          </div>
        )}

        {activeTab === "typography" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Font Family
              </label>
              <select
                value={tokens.fontFamily}
                onChange={(e) => onTokenChange("fontFamily", e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
              >
                {fontFamilies.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.name} ({font.category})
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 dark:text-gray-400">Choose the primary font family for your design</p>
            </div>

            <SliderInput
              label="Font Weight"
              value={tokens.fontWeight}
              onChange={(value) => onTokenChange("fontWeight", value)}
              min={100}
              max={900}
              step={100}
              unit=""
              description="Base font weight (100-900)"
            />

            <div className="bg-gray-50/80 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-200/60 dark:border-gray-700/60">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Font Preview</h4>
              <div 
                className="space-y-2"
                style={{ 
                  fontFamily: tokens.fontFamily,
                  fontWeight: tokens.fontWeight 
                }}
              >
                <p className="text-2xl text-gray-900 dark:text-white">The quick brown fox</p>
                <p className="text-base text-gray-700 dark:text-gray-300">jumps over the lazy dog</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">0123456789 !@#$%^&*()</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "spacing" && (
          <div className="space-y-6">
            <SliderInput
              label="Border Radius"
              value={tokens.radius}
              onChange={(value) => onTokenChange("radius", value)}
              min={0}
              max={24}
              unit="px"
              description="Corner radius for buttons, cards, inputs"
            />
            
            <SliderInput
              label="Base Spacing"
              value={tokens.spacing}
              onChange={(value) => onTokenChange("spacing", value)}
              min={4}
              max={32}
              unit="px"
              description="Base unit for padding and margins"
            />
          </div>
        )}
      </div>

    </div>
  )
}