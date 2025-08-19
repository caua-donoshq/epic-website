"use client"

import type { TestScenario } from "./LiveTestRunner"

interface TestScenarioGeneratorProps {
  scenarios: TestScenario[]
  runningTestIndex: number
  stage: "scenarios" | "running" | "completed"
}

export function TestScenarioGenerator({ scenarios, runningTestIndex, stage }: TestScenarioGeneratorProps) {
  const getScenarioStatus = (scenario: TestScenario, index: number) => {
    if (stage === "running" && index === runningTestIndex) {
      return "running"
    }
    return scenario.status
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "running":
        return "⏳"
      case "passed":
        return "✅"
      case "failed":
        return "❌"
      default:
        return "⚪"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "border-yellow-300 bg-yellow-50"
      case "passed":
        return "border-green-300 bg-green-50"
      case "failed":
        return "border-red-300 bg-red-50"
      default:
        return "border-gray-200 bg-white"
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="text-lg">📋</span>
          BDD Test Scenarios
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Epic generates comprehensive scenarios in Given/When/Then format
        </p>
      </div>

      {/* Scenarios List */}
      <div className="p-4 space-y-4">
        {scenarios.map((scenario, index) => {
          const status = getScenarioStatus(scenario, index)
          
          return (
            <div
              key={scenario.id}
              className={`
                p-4 rounded-lg border transition-all duration-300
                ${getStatusColor(status)}
                ${status === "running" ? "scale-105 shadow-lg" : ""}
              `}
            >
              {/* Scenario Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{getStatusIcon(status)}</span>
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      {scenario.feature}
                    </h5>
                    {status === "running" && (
                      <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded animate-pulse">
                        Running...
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {scenario.scenario}
                  </p>
                </div>
              </div>

              {/* BDD Steps */}
              <div className="space-y-2 mb-4">
                <div className="flex gap-3">
                  <span className="text-xs font-semibold text-blue-600 w-12">GIVEN</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{scenario.given}</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-xs font-semibold text-green-600 w-12">WHEN</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{scenario.when}</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-xs font-semibold text-purple-600 w-12">THEN</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{scenario.then}</span>
                </div>
              </div>

              {/* Generated Test Code */}
              <details className="group">
                <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700 select-none">
                  📄 View Generated Test Code
                </summary>
                <div className="mt-2 p-3 bg-gray-900 rounded-lg overflow-x-auto">
                  <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap">
                    {scenario.testCode}
                  </pre>
                </div>
              </details>

              {/* Status Messages */}
              {status === "running" && (
                <div className="mt-3 p-2 bg-yellow-100 rounded border border-yellow-200">
                  <p className="text-xs text-yellow-700 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></span>
                    Executing test scenario...
                  </p>
                </div>
              )}

              {status === "passed" && (
                <div className="mt-3 p-2 bg-green-100 rounded border border-green-200">
                  <p className="text-xs text-green-700 font-medium">
                    ✅ Test passed - functionality works as expected
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Epic Benefits Callout */}
      {stage === "scenarios" && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <span className="text-blue-500 text-lg mt-0.5">💡</span>
            <div>
              <h5 className="text-sm font-medium text-blue-800 dark:text-blue-400 mb-1">
                Epic's BDD Advantage
              </h5>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                These scenarios are automatically generated from your feature requirements. 
                Each test is precise, readable, and covers both happy paths and edge cases.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}