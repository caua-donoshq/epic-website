"use client"

import { useState } from "react"

interface FormUpdateDemoProps {
  side: "slow" | "fast"
}

interface UserData {
  name: string
  email: string
  bio: string
}

export function FormUpdateDemo({ side }: FormUpdateDemoProps) {
  const [formData, setFormData] = useState<UserData>({
    name: "Alex Johnson",
    email: "alex@example.com",
    bio: "Full-stack developer"
  })
  const [savedData, setSavedData] = useState<UserData>(formData)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [optimisticData, setOptimisticData] = useState<UserData | null>(null)

  const handleChange = (field: keyof UserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setSaveStatus("idle")
  }

  const handleSave = async () => {
    if (side === "slow") {
      // Traditional approach: show loading, wait, then update
      setIsSaving(true)
      setSaveStatus("saving")
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate occasional error for demo
      if (Math.random() > 0.8) {
        setSaveStatus("error")
        setIsSaving(false)
        return
      }
      
      setSavedData(formData)
      setSaveStatus("saved")
      setIsSaving(false)
    } else {
      // Optimistic update: update UI immediately
      setOptimisticData(formData)
      setSavedData(formData)
      setSaveStatus("saved")
      
      // Simulate background sync
      setTimeout(async () => {
        // Simulate API call in background
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Clear optimistic state after sync
        setOptimisticData(null)
      }, 100)
    }
    
    // Clear status after a delay
    setTimeout(() => setSaveStatus("idle"), 2000)
  }

  const displayData = optimisticData || savedData

  return (
    <div className="space-y-4">
      {/* Form */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSaving}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSaving}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Bio
          </label>
          <textarea
            value={formData.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            disabled={isSaving}
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={isSaving || JSON.stringify(formData) === JSON.stringify(savedData)}
        className={`
          w-full py-2 px-4 rounded-lg text-sm font-medium transition-all relative
          ${isSaving || JSON.stringify(formData) === JSON.stringify(savedData)
            ? "bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
          }
        `}
      >
        {isSaving ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Saving...
          </span>
        ) : (
          "Save Changes"
        )}
      </button>

      {/* Status Messages */}
      {saveStatus === "saved" && (
        <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm animate-in fade-in slide-in-from-top duration-200">
          ✓ Changes saved successfully
        </div>
      )}
      
      {saveStatus === "error" && (
        <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm animate-in fade-in slide-in-from-top duration-200">
          ✗ Failed to save changes
        </div>
      )}

      {/* Saved Data Display */}
      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Saved Data {optimisticData && side === "fast" && (
            <span className="text-xs text-green-600 dark:text-green-400 ml-2">(Optimistic)</span>
          )}
        </h4>
        <div className="space-y-1 text-sm">
          <div><span className="text-gray-500">Name:</span> <span className="text-gray-900 dark:text-white">{displayData.name}</span></div>
          <div><span className="text-gray-500">Email:</span> <span className="text-gray-900 dark:text-white">{displayData.email}</span></div>
          <div><span className="text-gray-500">Bio:</span> <span className="text-gray-900 dark:text-white">{displayData.bio}</span></div>
        </div>
      </div>

      {/* Info */}
      <div className="text-xs text-gray-500 dark:text-gray-500">
        {side === "slow" ? "Traditional save with loading state" : "Optimistic updates with background sync"}
      </div>
    </div>
  )
}