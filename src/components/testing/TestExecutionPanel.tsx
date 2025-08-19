"use client"

import type { TestScenario } from "./LiveTestRunner"

interface TestExecutionPanelProps {
  scenarios: TestScenario[]
  isRunning: boolean
  onRunTests: () => void
  onReset: () => void
  stage: "scenarios" | "running" | "completed"
}

export function TestExecutionPanel({ scenarios, isRunning, onRunTests, onReset, stage }: TestExecutionPanelProps) {
  const runningScenario = scenarios.find(s => s.status === "running")
  const passedCount = scenarios.filter(s => s.status === "passed").length
  const totalCount = scenarios.length

  const getActionButton = () => {
    switch (stage) {
      case "scenarios":
        return {
          text: "▶️ Run Test Suite",
          action: onRunTests,
          className: "bg-blue-500 hover:bg-blue-600 text-white"
        }
      case "running":
        return {
          text: "⏳ Running Tests...",
          action: () => {},
          className: "bg-yellow-500 text-white cursor-not-allowed"
        }
      case "completed":
        return {
          text: "🔄 Reset Demo",
          action: onReset,
          className: "bg-gray-500 hover:bg-gray-600 text-white"
        }
    }
  }

  const button = getActionButton()

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="text-lg">🧪</span>
          Test Execution
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Real-time test runner with live feedback
        </p>
      </div>

      {/* Execution Content */}
      <div className="p-4">
        {/* Current Status */}
        <div className="mb-6">
          {stage === "scenarios" && (
            <div className="text-center py-8">
              <div className="text-4xl mb-3 opacity-50">🚀</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ready to run comprehensive tests
              </p>
            </div>
          )}

          {stage === "running" && runningScenario && (
            <div className="text-center py-6">
              <div className="text-3xl mb-3 animate-bounce">⚡</div>
              <p className="font-medium text-gray-900 dark:text-white mb-2">
                Running Test
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {runningScenario.scenario}
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(passedCount / totalCount) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">
                {passedCount} of {totalCount} tests completed
              </p>
            </div>
          )}

          {stage === "completed" && (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">🎉</div>
              <p className="font-medium text-green-600 mb-2">
                All Tests Passed!
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ready for production deployment
              </p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={button.action}
          disabled={isRunning}
          className={`
            w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
            ${button.className}
            ${isRunning ? "" : "hover:scale-105 active:scale-95"}
          `}
        >
          {button.text}
        </button>

        {/* Test Summary */}
        {(stage === "running" || stage === "completed") && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Test Results Summary
            </h5>
            <div className="space-y-2">
              {scenarios.map((scenario, index) => (
                <div key={scenario.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400 truncate flex-1 mr-2">
                    {scenario.feature}
                  </span>
                  <span className={`
                    text-xs px-2 py-1 rounded font-medium
                    ${scenario.status === "passed" ? "bg-green-100 text-green-700" :
                      scenario.status === "running" ? "bg-yellow-100 text-yellow-700" :
                      scenario.status === "failed" ? "bg-red-100 text-red-700" :
                      "bg-gray-100 text-gray-700"
                    }
                  `}>
                    {scenario.status === "passed" ? "PASS" :
                     scenario.status === "running" ? "RUN" :
                     scenario.status === "failed" ? "FAIL" : "WAIT"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        {stage !== "scenarios" && (
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-green-50 rounded">
              <div className="text-lg font-bold text-green-600">{passedCount}</div>
              <div className="text-xs text-green-600">Passed</div>
            </div>
            <div className="p-2 bg-gray-50 rounded">
              <div className="text-lg font-bold text-gray-600">{totalCount}</div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
            <div className="p-2 bg-blue-50 rounded">
              <div className="text-lg font-bold text-blue-600">
                {Math.round((passedCount / totalCount) * 100)}%
              </div>
              <div className="text-xs text-blue-600">Success</div>
            </div>
          </div>
        )}
      </div>

      {/* Benefits */}
      {stage === "scenarios" && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-t border-green-200 dark:border-green-800">
          <div className="flex items-start gap-3">
            <span className="text-green-500 text-lg mt-0.5">🛡️</span>
            <div>
              <h5 className="text-sm font-medium text-green-800 dark:text-green-400 mb-1">
                Pre-deployment Safety
              </h5>
              <p className="text-xs text-green-700 dark:text-green-300">
                Epic runs comprehensive tests before deployment, catching issues before they reach users.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}