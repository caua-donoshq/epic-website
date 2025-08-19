'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme-context'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setTheme('light')}
        className={`w-6 h-6 border rounded flex items-center justify-center text-xs transition-colors ${
          theme === 'light'
            ? 'border-white text-white bg-white/10'
            : 'border-gray-600 text-gray-400 hover:text-gray-300'
        }`}
        aria-label="Light theme"
      >
        <Sun className="w-3 h-3" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`w-6 h-6 border rounded flex items-center justify-center text-xs transition-colors ${
          theme === 'system'
            ? 'border-white text-white bg-white/10'
            : 'border-gray-600 text-gray-400 hover:text-gray-300'
        }`}
        aria-label="System theme"
      >
        <Monitor className="w-3 h-3" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`w-6 h-6 border rounded flex items-center justify-center text-xs transition-colors ${
          theme === 'dark'
            ? 'border-white text-white bg-white/10'
            : 'border-gray-600 text-gray-400 hover:text-gray-300'
        }`}
        aria-label="Dark theme"
      >
        <Moon className="w-3 h-3" />
      </button>
    </div>
  )
}