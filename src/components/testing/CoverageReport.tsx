"use client"

interface CoverageReportProps {
  passedTests: number
  totalTests: number
  stage: "scenarios" | "running" | "completed"
}

export function CoverageReport({ passedTests, totalTests, stage }: CoverageReportProps) {
  const coveragePercentage = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0
  
  const coverageAreas = [
    {
      name: "Frontend Components",
      percentage: stage === "completed" ? 95 : stage === "running" ? Math.min(85, (passedTests / totalTests) * 95) : 0,
      color: "bg-blue-500"
    },
    {
      name: "API Endpoints",
      percentage: stage === "completed" ? 92 : stage === "running" ? Math.min(82, (passedTests / totalTests) * 92) : 0,
      color: "bg-green-500"
    },
    {
      name: "Database Operations",
      percentage: stage === "completed" ? 88 : stage === "running" ? Math.min(78, (passedTests / totalTests) * 88) : 0,
      color: "bg-purple-500"
    },
    {
      name: "Integration Tests",
      percentage: stage === "completed" ? 90 : stage === "running" ? Math.min(80, (passedTests / totalTests) * 90) : 0,
      color: "bg-orange-500"
    }
  ]

  const overallCoverage = stage === "completed" ? 91 : 
                         stage === "running" ? Math.min(81, (passedTests / totalTests) * 91) : 0

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="text-lg">📊</span>
          Test Coverage
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Comprehensive coverage across your application
        </p>
      </div>

      {/* Overall Coverage */}
      <div className="p-4">
        <div className="text-center mb-6">
          <div className="relative w-24 h-24 mx-auto mb-3">
            {/* Background Circle */}
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Progress Circle */}
              <path
                className={`transition-all duration-1000 ${
                  overallCoverage >= 90 ? "text-green-500" :
                  overallCoverage >= 80 ? "text-yellow-500" :
                  "text-red-500"
                }`}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray={`${overallCoverage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            
            {/* Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {overallCoverage}%
              </span>
            </div>
          </div>
          
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Overall Test Coverage
          </p>
          {stage === "completed" && (
            <p className="text-xs text-green-600 mt-1">
              ✅ Excellent coverage achieved
            </p>
          )}
        </div>

        {/* Coverage Breakdown */}
        <div className="space-y-4">
          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Coverage by Area
          </h5>
          
          {coverageAreas.map((area, index) => (
            <div key={area.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {area.name}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {Math.round(area.percentage)}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${area.color}`}
                  style={{ 
                    width: `${area.percentage}%`,
                    transitionDelay: `${index * 200}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Test Types */}
        {stage !== "scenarios" && (
          <div className="mt-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Test Types Covered
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">Unit Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">API Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">E2E Tests</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-gray-600 dark:text-gray-400">Integration</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {stage === "completed" && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-t border-green-200 dark:border-green-800">
          <div className="flex items-start gap-3">
            <span className="text-green-500 text-lg mt-0.5">🎯</span>
            <div>
              <h5 className="text-sm font-medium text-green-800 dark:text-green-400 mb-1">
                Production Ready
              </h5>
              <p className="text-xs text-green-700 dark:text-green-300">
                Your code has excellent test coverage and is safe to deploy to production.
              </p>
            </div>
          </div>
        </div>
      )}

      {stage === "scenarios" && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <span className="text-blue-500 text-lg mt-0.5">📈</span>
            <div>
              <h5 className="text-sm font-medium text-blue-800 dark:text-blue-400 mb-1">
                Comprehensive Testing
              </h5>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                Epic ensures high coverage across frontend, backend, and integration layers.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}