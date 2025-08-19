"use client"

import { useState } from "react"
import { CommitHistory } from "./CommitHistory"
import { CodeDiff } from "./CodeDiff"

export interface Commit {
  id: string
  message: string
  author: string
  timestamp: string
  type: "feature" | "fix" | "mistake"
  files: string[]
  diff: {
    file: string
    added: string[]
    removed: string[]
  }[]
}

const epicCommits: Commit[] = [
  {
    id: "a1b2c3d",
    message: "feat(auth): implement JWT token validation middleware",
    author: "AI Assistant",
    timestamp: "2 hours ago",
    type: "feature",
    files: ["src/middleware/auth.js"],
    diff: [{
      file: "src/middleware/auth.js",
      added: [
        "+ const jwt = require('jsonwebtoken');",
        "+ const { verifyToken } = require('../utils/jwt');",
        "+ ",
        "+ const authMiddleware = async (req, res, next) => {",
        "+   const token = req.headers.authorization?.split(' ')[1];",
        "+   if (!token) return res.status(401).json({ error: 'No token' });",
        "+   try {",
        "+     req.user = await verifyToken(token);",
        "+     next();",
        "+   } catch (err) {",
        "+     res.status(401).json({ error: 'Invalid token' });",
        "+   }",
        "+ };",
        "+ module.exports = authMiddleware;"
      ],
      removed: []
    }]
  },
  {
    id: "e4f5g6h",
    message: "feat(api): add user profile endpoints with validation",
    author: "AI Assistant", 
    timestamp: "1 hour ago",
    type: "feature",
    files: ["src/routes/profile.js"],
    diff: [{
      file: "src/routes/profile.js",
      added: [
        "+ const express = require('express');",
        "+ const router = express.Router();",
        "+ const authMiddleware = require('../middleware/auth');",
        "+ ",
        "+ router.get('/', authMiddleware, async (req, res) => {",
        "+   const user = await User.findById(req.user.id);",
        "+   res.json({ user });",
        "+ });",
        "+ ",
        "+ router.put('/', authMiddleware, async (req, res) => {",
        "+   const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body);",
        "+   res.json({ user: updatedUser });",
        "+ });",
        "+ module.exports = router;"
      ],
      removed: []
    }]
  },
  {
    id: "i7j8k9l",
    message: "feat(ui): implement user dashboard with real-time stats",
    author: "AI Assistant",
    timestamp: "30 minutes ago", 
    type: "feature",
    files: ["src/components/Dashboard.jsx"],
    diff: [{
      file: "src/components/Dashboard.jsx",
      added: [
        "+ import React, { useState, useEffect } from 'react';",
        "+ import { fetchUserStats } from '../api/stats';",
        "+ ",
        "+ export function Dashboard() {",
        "+   const [stats, setStats] = useState(null);",
        "+   ",
        "+   useEffect(() => {",
        "+     fetchUserStats().then(setStats);",
        "+   }, []);",
        "+   ",
        "+   return (",
        "+     <div className='dashboard'>",
        "+       <h1>Welcome back!</h1>",
        "+       {stats && <StatsCard data={stats} />}",
        "+     </div>",
        "+   );",
        "+ }"
      ],
      removed: []
    }]
  },
  {
    id: "m0n1o2p",
    message: "fix(security): add password hashing to auth endpoint",
    author: "AI Assistant",
    timestamp: "10 minutes ago",
    type: "mistake",
    files: ["src/routes/auth.js"],
    diff: [{
      file: "src/routes/auth.js", 
      added: [
        "+ const bcrypt = require('bcrypt');",
        "+ ",
        "+ // MISTAKE: Using synchronous hashing in production!",
        "+ const hashPassword = (password) => {",
        "+   return bcrypt.hashSync(password, 12); // This blocks the event loop!",
        "+ };",
        "+ ",
        "+ router.post('/register', async (req, res) => {",
        "+   const hashedPassword = hashPassword(req.body.password);",
        "+   // This will freeze the server for 500ms+ per request",
        "+   const user = await User.create({ ...req.body, password: hashedPassword });",
        "+   res.json({ user });",
        "+ });"
      ],
      removed: []
    }]
  }
]

type SimulatorStage = "building" | "mistake-detected" | "rolled-back" | "fixed"

export function RollbackSimulator() {
  const [currentStage, setCurrentStage] = useState<SimulatorStage>("building")
  const [visibleCommits, setVisibleCommits] = useState(3)
  const [selectedCommit, setSelectedCommit] = useState<string | null>(null)

  const handleNext = () => {
    switch (currentStage) {
      case "building":
        setVisibleCommits(4)
        setCurrentStage("mistake-detected")
        break
      case "mistake-detected":
        setVisibleCommits(3)
        setCurrentStage("rolled-back")
        break
      case "rolled-back":
        setCurrentStage("fixed")
        break
    }
  }

  const handleReset = () => {
    setCurrentStage("building")
    setVisibleCommits(3)
    setSelectedCommit(null)
  }

  const getStageDescription = () => {
    switch (currentStage) {
      case "building":
        return "Building features with Epic's atomic commits - each commit is focused and safe"
      case "mistake-detected":
        return "⚠️ AI assistant made a mistake! Added blocking synchronous code that freezes the server"
      case "rolled-back":
        return "✅ Rolled back just the problematic commit - all other features remain intact"
      case "fixed":
        return "🎉 Problem fixed! Ready to implement the proper async version"
    }
  }

  const getActionButton = () => {
    switch (currentStage) {
      case "building":
        return { text: "AI adds password hashing", action: handleNext }
      case "mistake-detected":
        return { text: "🔄 Rollback last commit", action: handleNext }
      case "rolled-back":
        return { text: "✨ Show solution", action: handleNext }
      case "fixed":
        return { text: "🔄 Reset demo", action: handleReset }
    }
  }

  const commits = epicCommits.slice(0, visibleCommits)
  const button = getActionButton()

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Rollback Simulator
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Watch how Epic's atomic commits make it safe and easy to rollback when AI assistants make mistakes
        </p>
      </div>

      {/* Stage Indicator */}
      <div className="mb-6 p-4 rounded-lg border-l-4 transition-all duration-300" 
           style={{
             borderLeftColor: currentStage === "mistake-detected" ? "#ef4444" : 
                             currentStage === "rolled-back" ? "#22c55e" : "#3b82f6",
             backgroundColor: currentStage === "mistake-detected" ? "#fef2f2" :
                             currentStage === "rolled-back" ? "#f0fdf4" : "#eff6ff"
           }}>
        <p className="font-medium text-gray-900 dark:text-white">
          {getStageDescription()}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Commit History */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-lg">📚</span>
              Git History
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Epic's atomic commits - focused and safe
            </p>
          </div>
          <CommitHistory 
            commits={commits}
            selectedCommit={selectedCommit}
            onCommitSelect={setSelectedCommit}
            stage={currentStage}
          />
        </div>

        {/* Code Diff */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-lg">🔍</span>
              Code Changes
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {selectedCommit ? "Viewing commit changes" : "Select a commit to see changes"}
            </p>
          </div>
          <CodeDiff 
            commit={commits.find(c => c.id === selectedCommit)}
            stage={currentStage}
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 text-center">
        <button
          onClick={button.action}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95
            ${currentStage === "mistake-detected" 
              ? "bg-red-500 hover:bg-red-600 text-white" 
              : currentStage === "rolled-back"
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
            }
          `}
        >
          {button.text}
        </button>
      </div>

      {/* Benefits */}
      {currentStage === "rolled-back" && (
        <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-400 mb-3">
            🎯 Why Epic's atomic commits saved the day:
          </h4>
          <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
            <li>✅ <strong>Surgical rollback:</strong> Only the problematic commit was removed</li>
            <li>✅ <strong>Features preserved:</strong> Auth middleware and dashboard remain intact</li>
            <li>✅ <strong>Clean history:</strong> Easy to identify exactly what went wrong</li>
            <li>✅ <strong>Quick recovery:</strong> Back to working state in seconds</li>
          </ul>
        </div>
      )}

      {currentStage === "fixed" && (
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-400 mb-3">
            ✨ The proper fix would be:
          </h4>
          <pre className="text-sm bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Use async hashing instead
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12); // Non-blocking!
};

router.post('/register', async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  const user = await User.create({ ...req.body, password: hashedPassword });
  res.json({ user });
});`}
          </pre>
        </div>
      )}
    </div>
  )
}