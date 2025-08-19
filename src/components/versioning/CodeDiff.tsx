"use client"

import type { Commit } from "./RollbackSimulator"

interface CodeDiffProps {
  commit: Commit | undefined
  stage: "building" | "mistake-detected" | "rolled-back" | "fixed"
}

export function CodeDiff({ commit, stage }: CodeDiffProps) {
  if (!commit) {
    return (
      <div className="p-8 text-center">
        <div className="text-6xl mb-4 opacity-20">📄</div>
        <p className="text-gray-600 dark:text-gray-400">
          Select a commit from the history to view its changes
        </p>
      </div>
    )
  }

  const isRolledBack = stage === "rolled-back" && commit.type === "mistake"
  const isMistake = commit.type === "mistake"

  return (
    <div className="p-4">
      {/* Diff Header */}
      <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">
            {commit.type === "feature" ? "✨" : commit.type === "fix" ? "🔧" : "⚠️"}
          </span>
          <h4 className="font-medium text-gray-900 dark:text-white">
            {commit.message}
          </h4>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
          <span>Commit {commit.id}</span>
          <span>•</span>
          <span>{commit.author}</span>
          <span>•</span>
          <span>{commit.timestamp}</span>
        </div>
        
        {isMistake && stage === "mistake-detected" && (
          <div className="mt-2 p-2 bg-red-100 dark:bg-red-900/30 rounded border border-red-200 dark:border-red-800">
            <p className="text-xs text-red-700 dark:text-red-400 font-medium">
              ⚠️ Performance Issue: This code uses blocking synchronous operations
            </p>
          </div>
        )}
        
        {isRolledBack && (
          <div className="mt-2 p-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-800">
            <p className="text-xs text-green-700 dark:text-green-400 font-medium">
              ✅ This commit has been safely rolled back
            </p>
          </div>
        )}
      </div>

      {/* File Diffs */}
      <div className="space-y-4">
        {commit.diff.map((fileDiff, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            {/* File Header */}
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                  {fileDiff.file}
                </span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                  +{fileDiff.added.length} lines
                </span>
                {fileDiff.removed.length > 0 && (
                  <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-400 px-2 py-1 rounded">
                    -{fileDiff.removed.length} lines
                  </span>
                )}
              </div>
            </div>

            {/* Code Content */}
            <div className="bg-gray-900 text-sm font-mono">
              {/* Removed lines */}
              {fileDiff.removed.map((line, lineIndex) => (
                <div
                  key={`removed-${lineIndex}`}
                  className="flex bg-red-900/30 border-l-4 border-red-500"
                >
                  <span className="w-12 px-2 py-1 text-gray-500 text-right select-none">
                    {lineIndex + 1}
                  </span>
                  <span className="px-2 py-1 text-red-200 flex-1">
                    {line}
                  </span>
                </div>
              ))}

              {/* Added lines */}
              {fileDiff.added.map((line, lineIndex) => {
                const isProblematic = isMistake && (
                  line.includes("hashSync") || 
                  line.includes("This blocks the event loop") ||
                  line.includes("This will freeze the server")
                )
                
                return (
                  <div
                    key={`added-${lineIndex}`}
                    className={`
                      flex border-l-4
                      ${isProblematic && stage === "mistake-detected" 
                        ? "bg-yellow-900/30 border-yellow-500" 
                        : isRolledBack
                        ? "bg-gray-700/50 border-gray-500 opacity-50"
                        : "bg-green-900/30 border-green-500"
                      }
                    `}
                  >
                    <span className="w-12 px-2 py-1 text-gray-500 text-right select-none">
                      {lineIndex + 1}
                    </span>
                    <span 
                      className={`
                        px-2 py-1 flex-1
                        ${isProblematic && stage === "mistake-detected"
                          ? "text-yellow-200"
                          : isRolledBack 
                          ? "text-gray-400 line-through"
                          : "text-green-200"
                        }
                      `}
                    >
                      {line}
                    </span>
                    {isProblematic && stage === "mistake-detected" && (
                      <span className="px-2 py-1 text-yellow-400 text-xs self-center">
                        ⚠️ BLOCKING
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Analysis */}
      {isMistake && stage === "mistake-detected" && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h5 className="font-semibold text-red-800 dark:text-red-400 mb-2">
            🚨 Problem Analysis
          </h5>
          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• <code>bcrypt.hashSync()</code> is a blocking operation</li>
            <li>• Each password hash will freeze the server for 500ms+</li>
            <li>• This will cause timeouts under load</li>
            <li>• Should use <code>bcrypt.hash()</code> (async) instead</li>
          </ul>
        </div>
      )}

      {isRolledBack && (
        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h5 className="font-semibold text-green-800 dark:text-green-400 mb-2">
            ✅ Rollback Complete
          </h5>
          <p className="text-sm text-green-700 dark:text-green-300">
            The problematic code has been safely removed. Your app is back to a working state 
            and you can now implement the proper async solution.
          </p>
        </div>
      )}

      {/* Epic Benefits */}
      {stage === "building" && commit.type === "feature" && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h5 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">
            ✨ Epic's Atomic Commit Benefits
          </h5>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• <strong>Single responsibility:</strong> This commit only adds auth middleware</li>
            <li>• <strong>Clear message:</strong> Describes exactly what was changed</li>
            <li>• <strong>Easy to review:</strong> Focused changes are easier to understand</li>
            <li>• <strong>Safe to rollback:</strong> If needed, only this feature would be affected</li>
          </ul>
        </div>
      )}
    </div>
  )
}