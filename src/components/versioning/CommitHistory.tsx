"use client"

import type { Commit } from "./RollbackSimulator"

interface CommitHistoryProps {
  commits: Commit[]
  selectedCommit: string | null
  onCommitSelect: (commitId: string) => void
  stage: "building" | "mistake-detected" | "rolled-back" | "fixed"
}

export function CommitHistory({ commits, selectedCommit, onCommitSelect, stage }: CommitHistoryProps) {
  const getCommitStyle = (commit: Commit) => {
    const isSelected = selectedCommit === commit.id
    const isMistake = commit.type === "mistake"
    const isRolledBack = stage === "rolled-back" && isMistake
    
    if (isRolledBack) {
      return {
        backgroundColor: "#fee2e2", // red-100
        borderColor: "#ef4444", // red-500
        opacity: 0.5,
        transform: "scale(0.95)"
      }
    }
    
    if (isMistake && stage === "mistake-detected") {
      return {
        backgroundColor: "#fee2e2", // red-100
        borderColor: "#ef4444", // red-500
        animation: "pulse 2s infinite"
      }
    }
    
    if (isSelected) {
      return {
        backgroundColor: "#dbeafe", // blue-100
        borderColor: "#3b82f6", // blue-500
        borderWidth: "2px"
      }
    }
    
    return {
      backgroundColor: "#f9fafb", // gray-50
      borderColor: "#e5e7eb", // gray-200
      borderWidth: "1px"
    }
  }

  const getCommitIcon = (commit: Commit) => {
    switch (commit.type) {
      case "feature":
        return "✨"
      case "fix":
        return "🔧"
      case "mistake":
        return stage === "rolled-back" ? "❌" : "⚠️"
      default:
        return "📝"
    }
  }

  const getTimeAgo = (timestamp: string) => {
    return timestamp
  }

  return (
    <div className="p-4">
      <div className="space-y-3">
        {commits.map((commit, index) => {
          const isRolledBack = stage === "rolled-back" && commit.type === "mistake"
          
          return (
            <div
              key={commit.id}
              onClick={() => !isRolledBack && onCommitSelect(commit.id)}
              className={`
                p-4 rounded-lg border transition-all duration-300 cursor-pointer
                ${isRolledBack ? "cursor-not-allowed" : "hover:shadow-md"}
              `}
              style={getCommitStyle(commit)}
            >
              {/* Commit Header */}
              <div className="flex items-start gap-3 mb-2">
                <span className="text-lg mt-0.5">{getCommitIcon(commit)}</span>
                <div className="flex-1 min-w-0">
                  <p className={`
                    font-medium text-sm break-words
                    ${isRolledBack ? "line-through text-gray-400" : "text-gray-900"}
                  `}>
                    {commit.message}
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <span>{commit.id}</span>
                    <span>•</span>
                    <span>{commit.author}</span>
                    <span>•</span>
                    <span>{getTimeAgo(commit.timestamp)}</span>
                  </div>
                </div>
              </div>

              {/* Files Changed */}
              <div className="mt-2">
                <div className="flex flex-wrap gap-1">
                  {commit.files.map((file, fileIndex) => (
                    <span
                      key={fileIndex}
                      className={`
                        px-2 py-1 text-xs rounded font-mono
                        ${isRolledBack 
                          ? "bg-gray-200 text-gray-400" 
                          : "bg-blue-100 text-blue-700"
                        }
                      `}
                    >
                      {file}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rollback indicator */}
              {isRolledBack && (
                <div className="mt-3 p-2 bg-red-100 rounded border border-red-200">
                  <p className="text-xs text-red-600 font-medium">
                    ⏮️ This commit has been rolled back
                  </p>
                </div>
              )}

              {/* Mistake warning */}
              {commit.type === "mistake" && stage === "mistake-detected" && (
                <div className="mt-3 p-2 bg-yellow-100 rounded border border-yellow-200">
                  <p className="text-xs text-yellow-700 font-medium">
                    ⚠️ This commit contains a performance issue
                  </p>
                </div>
              )}
            </div>
          )
        })}

        {/* Branch indicator */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="font-medium">feature/user-authentication</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              {stage === "rolled-back" ? commits.length - 1 : commits.length} commits
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h5 className="text-sm font-medium text-gray-700 mb-2">Commit Types</h5>
        <div className="space-y-1 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span>✨</span>
            <span>New feature</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔧</span>
            <span>Bug fix</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⚠️</span>
            <span>Problematic change</span>
          </div>
        </div>
      </div>
    </div>
  )
}