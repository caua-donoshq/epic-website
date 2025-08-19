"use client"

import { useState } from "react"
import { TestScenarioGenerator } from "./TestScenarioGenerator"
import { TestExecutionPanel } from "./TestExecutionPanel"
import { CoverageReport } from "./CoverageReport"

export interface TestScenario {
  id: string
  feature: string
  scenario: string
  given: string
  when: string
  then: string
  testCode: string
  status: "pending" | "running" | "passed" | "failed"
}

const sampleScenarios: TestScenario[] = [
  {
    id: "1",
    feature: "User Authentication",
    scenario: "Successful login with valid credentials",
    given: "I am on the login page",
    when: "I enter valid email and password",
    then: "I should be redirected to the dashboard",
    testCode: `it('should login with valid credentials', async () => {
  await page.goto('/login');
  await page.fill('[data-testid="email"]', 'user@test.com');
  await page.fill('[data-testid="password"]', 'password123');
  await page.click('[data-testid="login-button"]');
  await expect(page).toHaveURL('/dashboard');
});`,
    status: "pending"
  },
  {
    id: "2", 
    feature: "User Authentication",
    scenario: "Failed login with invalid credentials",
    given: "I am on the login page",
    when: "I enter invalid email and password",
    then: "I should see an error message",
    testCode: `it('should show error for invalid credentials', async () => {
  await page.goto('/login');
  await page.fill('[data-testid="email"]', 'wrong@test.com');
  await page.fill('[data-testid="password"]', 'wrongpass');
  await page.click('[data-testid="login-button"]');
  await expect(page.locator('[data-testid="error"]')).toBeVisible();
});`,
    status: "pending"
  },
  {
    id: "3",
    feature: "Profile Management", 
    scenario: "Update user profile successfully",
    given: "I am logged in as a user",
    when: "I update my profile information",
    then: "I should see a success confirmation",
    testCode: `it('should update profile successfully', async () => {
  await login('user@test.com', 'password123');
  await page.goto('/profile');
  await page.fill('[data-testid="name"]', 'John Updated');
  await page.click('[data-testid="save-button"]');
  await expect(page.locator('[data-testid="success"]')).toBeVisible();
});`,
    status: "pending"
  }
]

type RunnerStage = "scenarios" | "running" | "completed"

export function LiveTestRunner() {
  const [currentStage, setCurrentStage] = useState<RunnerStage>("scenarios")
  const [scenarios, setScenarios] = useState<TestScenario[]>(sampleScenarios)
  const [runningTestIndex, setRunningTestIndex] = useState(-1)

  const handleRunTests = async () => {
    setCurrentStage("running")
    setRunningTestIndex(0)

    // Simulate running tests one by one
    for (let i = 0; i < scenarios.length; i++) {
      setRunningTestIndex(i)
      
      // Update scenario to running
      setScenarios(prev => prev.map((scenario, index) => 
        index === i ? { ...scenario, status: "running" } : scenario
      ))
      
      // Simulate test execution time
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mark as passed (for demo, all tests pass)
      setScenarios(prev => prev.map((scenario, index) => 
        index === i ? { ...scenario, status: "passed" } : scenario
      ))
    }
    
    setRunningTestIndex(-1)
    setCurrentStage("completed")
  }

  const handleReset = () => {
    setCurrentStage("scenarios")
    setRunningTestIndex(-1)
    setScenarios(sampleScenarios.map(s => ({ ...s, status: "pending" })))
  }

  const passedTests = scenarios.filter(s => s.status === "passed").length
  const totalTests = scenarios.length

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Live Test Suite Runner
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Watch Epic generate BDD scenarios and run comprehensive tests before deployment
        </p>
      </div>

      {/* Stage Indicator */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
          currentStage === "scenarios" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            currentStage === "scenarios" ? "bg-blue-500 animate-pulse" : "bg-gray-400"
          }`} />
          <span className="text-sm font-medium">Generate Scenarios</span>
        </div>
        
        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
          currentStage === "running" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-600"
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            currentStage === "running" ? "bg-yellow-500 animate-pulse" : "bg-gray-400"
          }`} />
          <span className="text-sm font-medium">Running Tests</span>
        </div>
        
        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
          currentStage === "completed" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            currentStage === "completed" ? "bg-green-500" : "bg-gray-400"
          }`} />
          <span className="text-sm font-medium">All Tests Passed</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* BDD Scenarios */}
        <div className="xl:col-span-2">
          <TestScenarioGenerator 
            scenarios={scenarios}
            runningTestIndex={runningTestIndex}
            stage={currentStage}
          />
        </div>

        {/* Test Execution & Coverage */}
        <div className="space-y-6">
          <TestExecutionPanel 
            scenarios={scenarios}
            isRunning={currentStage === "running"}
            onRunTests={handleRunTests}
            onReset={handleReset}
            stage={currentStage}
          />
          
          <CoverageReport 
            passedTests={passedTests}
            totalTests={totalTests}
            stage={currentStage}
          />
        </div>
      </div>

      {/* Success Message */}
      {currentStage === "completed" && (
        <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
              All Tests Passed! Ready to Deploy
            </h4>
            <p className="text-sm text-green-700 dark:text-green-300 mb-4">
              Epic's comprehensive testing ensures your code works perfectly before it reaches production.
            </p>
            <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
              🚀 Deploy with Confidence
            </button>
          </div>
        </div>
      )}

      {/* Epic Benefits */}
      {currentStage === "completed" && (
        <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-3">
            🛡️ Why Epic's Testing Approach Works:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
            <div>
              <strong>BDD Scenarios:</strong> Human-readable tests that define exact behavior
            </div>
            <div>
              <strong>Comprehensive Coverage:</strong> Frontend, backend, and integration tests
            </div>
            <div>
              <strong>Pre-deployment:</strong> Catch issues before they reach users
            </div>
            <div>
              <strong>AI-Generated:</strong> Tests written automatically from your requirements
            </div>
          </div>
        </div>
      )}
    </div>
  )
}