"use client"

import { useEffect, useState } from "react"
import { CodeSimple } from "phosphor-react"
import type { DesignTokens } from "./LiveThemeSwitcher"

interface LivePreviewProps {
  tokens: DesignTokens
}

export function LivePreview({ tokens }: LivePreviewProps) {
  const [showCode, setShowCode] = useState(false)

  // Apply tokens as CSS custom properties and load Google Fonts
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--theme-primary', tokens.primary)
    root.style.setProperty('--theme-primary-foreground', tokens.primaryForeground)
    root.style.setProperty('--theme-secondary', tokens.secondary)
    root.style.setProperty('--theme-accent', tokens.accent)
    root.style.setProperty('--theme-background', tokens.background)
    root.style.setProperty('--theme-foreground', tokens.foreground)
    root.style.setProperty('--theme-card', tokens.card)
    root.style.setProperty('--theme-border', tokens.border)
    root.style.setProperty('--theme-radius', `${tokens.radius}px`)
    root.style.setProperty('--theme-spacing', `${tokens.spacing}px`)
    root.style.setProperty('--theme-font-family', tokens.fontFamily)
    root.style.setProperty('--theme-font-weight', tokens.fontWeight.toString())

    // Load Google Font dynamically
    const fontName = tokens.fontFamily.replace(/\s+/g, '+')
    const existingLink = document.querySelector(`link[href*="${fontName}"]`)
    
    if (!existingLink) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@100;200;300;400;500;600;700;800;900&display=swap`
      document.head.appendChild(link)
    }
  }, [tokens])

  return (
    <div 
      className="min-h-[600px] rounded-xl border transition-all duration-300 relative"
      style={{
        backgroundColor: tokens.background,
        borderColor: tokens.border,
        color: tokens.foreground,
        fontFamily: tokens.fontFamily,
        fontWeight: tokens.fontWeight
      }}
    >
      {/* Header with Toggle Button */}
      <div className="flex justify-between items-start p-6 pb-4">
        <div>
          <h3 className="text-2xl font-bold mb-2" style={{ color: tokens.foreground }}>
            {showCode ? "Generated CSS" : "Live Preview"}
          </h3>
          <p style={{ color: tokens.foreground, opacity: 0.7 }}>
            {showCode ? "Copy and use in your project" : "Watch components update as you change design tokens"}
          </p>
        </div>
        
        {/* Toggle Button */}
        <button
          onClick={() => setShowCode(!showCode)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95
            ${showCode
              ? "bg-gradient-to-r from-pink-400 to-orange-400 text-white shadow-xl shadow-pink-400/25"
              : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-lg backdrop-blur-sm"
            }
          `}
        >
          <CodeSimple size={16} weight="bold" />
          {showCode ? "Show Preview" : "Show Code"}
        </button>
      </div>

      {/* Content Area */}
      <div className="px-6 pb-6">
        {showCode ? (
          /* Code View */
          <div className="p-6 bg-gray-900 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400 font-mono">epic.config.css</span>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto leading-relaxed">
{`:root {
  --primary: ${tokens.primary};
  --primary-foreground: ${tokens.primaryForeground};
  --secondary: ${tokens.secondary};
  --accent: ${tokens.accent};
  --background: ${tokens.background};
  --foreground: ${tokens.foreground};
  --card: ${tokens.card};
  --border: ${tokens.border};
  --radius: ${tokens.radius}px;
  --spacing: ${tokens.spacing}px;
  --font-family: '${tokens.fontFamily}', sans-serif;
  --font-weight: ${tokens.fontWeight};
}`}
            </pre>
          </div>
        ) : (
          /* Preview Content */
          <div className="space-y-8">
            {/* Buttons Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: tokens.foreground }}>
                Buttons
              </h4>
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-4 py-2 font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{
                    backgroundColor: tokens.primary,
                    color: tokens.primaryForeground,
                    borderRadius: `${tokens.radius}px`
                  }}
                >
                  Primary Button
                </button>
                
                <button
                  className="px-4 py-2 font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{
                    backgroundColor: tokens.secondary,
                    color: tokens.foreground,
                    borderRadius: `${tokens.radius}px`
                  }}
                >
                  Secondary Button
                </button>
                
                <button
                  className="px-4 py-2 font-medium border-2 transition-all duration-200 hover:opacity-80 active:scale-95"
                  style={{
                    borderColor: tokens.border,
                    color: tokens.foreground,
                    borderRadius: `${tokens.radius}px`,
                    backgroundColor: 'transparent'
                  }}
                >
                  Outline Button
                </button>
              </div>
            </div>

            {/* Cards Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: tokens.foreground }}>
                Cards
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="border transition-all duration-300"
                  style={{
                    backgroundColor: tokens.card,
                    borderColor: tokens.border,
                    borderRadius: `${tokens.radius}px`,
                    padding: `${tokens.spacing}px`
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center text-white font-bold"
                      style={{
                        backgroundColor: tokens.primary,
                        borderRadius: `${tokens.radius}px`
                      }}
                    >
                      A
                    </div>
                    <div>
                      <h5 className="font-semibold" style={{ color: tokens.foreground }}>
                        User Profile
                      </h5>
                      <p className="text-sm" style={{ color: tokens.foreground, opacity: 0.7 }}>
                        @username
                      </p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: tokens.foreground, opacity: 0.8 }}>
                    This is a sample card component with consistent theming applied through design tokens.
                  </p>
                </div>

                <div
                  className="border transition-all duration-300"
                  style={{
                    backgroundColor: tokens.card,
                    borderColor: tokens.border,
                    borderRadius: `${tokens.radius}px`,
                    padding: `${tokens.spacing}px`
                  }}
                >
                  <h5 className="font-semibold mb-2" style={{ color: tokens.foreground }}>
                    Statistics
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: tokens.foreground, opacity: 0.7 }}>
                        Total Users
                      </span>
                      <span className="font-bold" style={{ color: tokens.accent }}>
                        1,247
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: tokens.foreground, opacity: 0.7 }}>
                        Active Sessions
                      </span>
                      <span className="font-bold" style={{ color: tokens.accent }}>
                        892
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: tokens.foreground }}>
                Form Elements
              </h4>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: tokens.foreground }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: tokens.background,
                      borderColor: tokens.border,
                      color: tokens.foreground,
                      borderRadius: `${tokens.radius}px`,
                      '--tw-ring-color': tokens.primary
                    } as React.CSSProperties}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: tokens.foreground }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    rows={3}
                    className="w-full px-3 py-2 border transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                    style={{
                      backgroundColor: tokens.background,
                      borderColor: tokens.border,
                      color: tokens.foreground,
                      borderRadius: `${tokens.radius}px`,
                      '--tw-ring-color': tokens.primary
                    } as React.CSSProperties}
                  />
                </div>
              </div>
            </div>

            {/* Badge Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: tokens.foreground }}>
                Badges & Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-2 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: tokens.primary,
                    color: tokens.primaryForeground,
                    borderRadius: `${Math.max(tokens.radius - 2, 2)}px`
                  }}
                >
                  Primary Badge
                </span>
                <span
                  className="px-2 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: tokens.secondary,
                    color: tokens.foreground,
                    borderRadius: `${Math.max(tokens.radius - 2, 2)}px`
                  }}
                >
                  Secondary Badge
                </span>
                <span
                  className="px-2 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: tokens.accent,
                    color: tokens.primaryForeground,
                    borderRadius: `${Math.max(tokens.radius - 2, 2)}px`
                  }}
                >
                  Accent Badge
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: tokens.foreground }}>
                Progress Indicators
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: tokens.foreground }}>Progress</span>
                    <span style={{ color: tokens.foreground, opacity: 0.7 }}>75%</span>
                  </div>
                  <div
                    className="w-full h-2 overflow-hidden"
                    style={{
                      backgroundColor: tokens.secondary,
                      borderRadius: `${tokens.radius}px`
                    }}
                  >
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        backgroundColor: tokens.primary,
                        width: "75%"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}