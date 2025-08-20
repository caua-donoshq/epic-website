"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PromptInput,
  PromptInputButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input'
import { 
  Plus,
  Sparkles, 
  Send,
  ChevronDown,
  ChevronRight,
  Copy,
  RefreshCcw,
  ThumbsUp,
  ThumbsDown,
  Brain
} from 'lucide-react'
import { CircleDashed, FunnelSimple } from 'phosphor-react'
import { Actions, Action } from '@/components/ai-elements/actions'
import { Task, TaskContent, TaskItem, TaskTrigger } from '@/components/ai-elements/task'
import { Tag } from '@/components/ui/tag'

// Animation states
type DemoState = 'idle' | 'typing' | 'sent' | 'thinking' | 'responding' | 'generating' | 'complete'

// Helper function to extract category and clean title
const extractCategory = (title: string) => {
  const match = title.match(/^\(([^)]+)\)\s*(.+)/)
  if (match) {
    return {
      category: match[1],
      cleanTitle: match[2]
    }
  }
  return {
    category: null,
    cleanTitle: title
  }
}


const initialTasks = [
  { id: 'TASK-01', title: '(Setup) Clone Epic AI App boilerplate', status: 'completed' },
  { id: 'TASK-02', title: '(Setup) Setup PostgreSQL database', status: 'completed' },
  { id: 'TASK-03', title: '(Setup) Initialize project repo on Github', status: 'completed' },
  { id: 'TASK-04', title: '(Setup) Setup application CSS style variables', status: 'completed' },
]

const aiChatTasks = [
  { id: 'TASK-05', title: '(Backend) Create ai-chat.schema.ts with messages and chats tables', status: 'pending' },
  { id: 'TASK-06', title: '(Backend) Create indexes for messages and chat queries', status: 'pending' },
  { id: 'TASK-07', title: '(Backend) Create chat.types.ts with interfaces', status: 'pending' },
  { id: 'TASK-08', title: '(Backend) Create chat.validation.ts with Zod schemas', status: 'pending' },
  { id: 'TASK-09', title: '(Security) Sanitize HTML message content', status: 'pending' },
  { id: 'TASK-10', title: '(Security) Add rate limiting validation for messages', status: 'pending' },
  { id: 'TASK-11', title: '(Backend) Create ChatService class with chats and messages methods', status: 'pending' },
  { id: 'TASK-12', title: '(Backend) Add AI Provider Integration (OpenAI/ Gemini/ Claude)', status: 'pending' },
  { id: 'TASK-13', title: '(Security) Add Security Logging for All Operations', status: 'pending' },
  { id: 'TASK-14', title: '(Backend) Add error handling and retry logic', status: 'pending' },
  { id: 'TASK-15', title: '(Backend) Create ai-chat.controller.ts', status: 'pending' },
  { id: 'TASK-16', title: '(Backend) Create chat.routes.ts', status: 'pending' },
  { id: 'TASK-17', title: '(Security) Add authentication middleware to all routes', status: 'pending' },
  { id: 'TASK-18', title: '(Security) Add validation middleware all routes', status: 'pending' },
  { id: 'TASK-19', title: '(Backend) Mount routes in main app.ts', status: 'pending' },
  { id: 'TASK-20', title: '(Frontend) Create ai-chat.service for API calls', status: 'pending' },
  { id: 'TASK-21', title: '(Frontend) Implement generative UI streaming message component', status: 'pending' },
  { id: 'TASK-22', title: '(Frontend) Create chat components using Vercel AI Elements', status: 'pending' },
  { id: 'TASK-23', title: '(Frontend) Create useAi-Chats hook', status: 'pending' },
  { id: 'TASK-24', title: '(Performance) Add optimistic updates for messages', status: 'pending' },
  { id: 'TASK-25', title: '(Performance) Use useRealtimeQuery for conversation list', status: 'pending' },
  { id: 'TASK-26', title: '(Performance) Use VirtualList for message history', status: 'pending' },
  { id: 'TASK-27', title: '(Performance) Lazy load chat page with createLazyComponent', status: 'pending' },
  { id: 'TASK-28', title: '(Performance) Use useMemoizedComponent for MessageBubble', status: 'pending' },
  { id: 'TASK-29', title: '(Tests) Write integration tests for backend', status: 'pending' },
  { id: 'TASK-30', title: '(Tests) Write integration tests for frontend', status: 'pending' },
]

export function EpicAnimatedDemo() {
  const [demoState, setDemoState] = useState<DemoState>('idle')
  const [typedText, setTypedText] = useState('')
  const [messages, setMessages] = useState<Array<{id: string, sender: 'user' | 'epic', text: string}>>([])
  const [projectTasks, setProjectTasks] = useState(initialTasks)
  const [aiChatVisible, setAiChatVisible] = useState(false)
  const [visibleAiTasks, setVisibleAiTasks] = useState<typeof aiChatTasks>([])
  const [, setCurrentTaskIndex] = useState(0)
  const [projectSetupOpen, setProjectSetupOpen] = useState(true)
  const [aiChatOpen, setAiChatOpen] = useState(true)
  const [showReasoning, setShowReasoning] = useState(false)
  const [showTaskCreation, setShowTaskCreation] = useState(false)
  const [currentTaskCreation, setCurrentTaskCreation] = useState('')
  
  const demoMessage = `I want to add a ChatGPT-like AI chat assistant to my app. When users log in, they should see a "Chat with AI" button or section. When they click it, they get a clean chat window where they can type questions and get helpful AI responses.`
  const epicResponse = "Perfect! I've created 26 comprehensive tasks covering backend infrastructure, frontend components, security measures, and performance optimizations. These are ready to copy into your coding assistant for implementation."

  // Demo animation sequence
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    
    const runDemo = () => {
      // Reset state
      setDemoState('idle')
      setTypedText('')
      setMessages([])
      setProjectTasks(initialTasks)
      setAiChatVisible(false)
      setVisibleAiTasks([])
      setCurrentTaskIndex(0)
      
      // Start typing after 2s
      timeouts.push(setTimeout(() => {
        setDemoState('typing')
        let currentIndex = 0
        
        const typeCharacter = () => {
          if (currentIndex < demoMessage.length) {
            setTypedText(demoMessage.slice(0, currentIndex + 1))
            currentIndex++
            timeouts.push(setTimeout(typeCharacter, 40))
          } else {
            // Finished typing, send message
            timeouts.push(setTimeout(() => {
              setDemoState('sent')
              setMessages([{ id: '1', sender: 'user', text: demoMessage }])
              setTypedText('')
              
              // Epic starts thinking
              timeouts.push(setTimeout(() => {
                setDemoState('thinking')
                
                // Show reasoning
                timeouts.push(setTimeout(() => {
                  setShowReasoning(true)
                  
                    // Show task creation
                    timeouts.push(setTimeout(() => {
                      setShowReasoning(false)
                      setShowTaskCreation(true)
                      
                      // Animate through different tasks being created
                      const tasks = [
                        'Creating task 05: Backend schema design...',
                        'Creating task 12: AI Provider integration...',
                        'Creating task 18: Authentication middleware...',
                        'Creating task 22: Frontend chat components...',
                        'Creating task 26: Performance optimizations...'
                      ]
                      
                      let taskIndex = 0
                      const cycleTask = () => {
                        if (taskIndex < tasks.length) {
                          setCurrentTaskCreation(tasks[taskIndex])
                          taskIndex++
                          timeouts.push(setTimeout(cycleTask, 800))
                        } else {
                          // Epic responds
                          timeouts.push(setTimeout(() => {
                            setDemoState('responding')
                            setMessages(prev => [...prev, { id: '2', sender: 'epic', text: epicResponse }])
                            setShowTaskCreation(false)
                          
                            // Generate AI Chat accordion and tasks
                            timeouts.push(setTimeout(() => {
                              setDemoState('generating')
                              setAiChatVisible(true)
                              
                              // Add tasks one by one with stagger
                              const addTasksSequentially = (index: number) => {
                                if (index < aiChatTasks.length) {
                                  setVisibleAiTasks(prev => [...prev, aiChatTasks[index]])
                                  setCurrentTaskIndex(index + 1)
                                  
                                  // Add next task after short delay (show first few quickly, then slow down)
                                  const delay = index < 5 ? 200 : index < 10 ? 400 : 800
                                  timeouts.push(setTimeout(() => addTasksSequentially(index + 1), delay))
                                } else {
                                  setDemoState('complete')
                                }
                              }
                              
                              addTasksSequentially(0)
                            }, 1000))
                          }, 1000))
                        }
                      }
                      
                      cycleTask()
                    }, 4000))
                }, 1000))
              }, 500))
            }, 1000))
          }
        }
        typeCharacter()
      }, 2000))
    }

    runDemo()
    
    // No loop for now - commented out for testing
    // const loopInterval = setInterval(() => {
    //   timeouts.forEach(clearTimeout)
    //   timeouts = []
    //   runDemo()
    // }, 20000)

    return () => {
      // clearInterval(loopInterval)
      timeouts.forEach(clearTimeout)
    }
  }, [demoMessage, epicResponse])

  return (
    <div className="w-full h-full bg-white flex flex-col lg:flex-row text-[10px] font-inter" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Left Panel - Epic Chat */}
      <div className="w-full lg:w-[400px] bg-gray-50 flex flex-col min-h-[400px] lg:min-h-full">
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-6 py-4 bg-gray-50">
          <div className="bg-[#F97316] w-7 h-7 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-[10px]">E</span>
          </div>
          <span className="font-medium text-gray-900 text-[12px]">My Project</span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 px-6 py-6 flex flex-col justify-end">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
                  message.sender === 'user' 
                    ? 'bg-[#F3F3F3] border border-[#D8D8D8] text-black' 
                    : 'bg-white border border-[#D8D8D8] text-gray-900'
                }`}>
                  <p className="text-[10px] leading-loose">{message.text}</p>
                </div>
                {message.sender === 'epic' && (
                  <div className="mt-1">
                    <Actions className="text-[8px] scale-75">
                      <Action label="Retry">
                        <RefreshCcw className="w-2.5 h-2.5" />
                      </Action>
                      <Action label="Like">
                        <ThumbsUp className="w-2.5 h-2.5" />
                      </Action>
                      <Action label="Dislike">
                        <ThumbsDown className="w-2.5 h-2.5" />
                      </Action>
                      <Action label="Copy">
                        <Copy className="w-2.5 h-2.5" />
                      </Action>
                    </Actions>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Reasoning component */}
          {showReasoning && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-4"
            >
              <div className="bg-gray-50 border border-[#D8D8D8] rounded-lg p-3 text-left">
                <div className="flex items-center gap-2 mb-2 cursor-pointer">
                  <Brain className="w-3 h-3 text-gray-600" />
                  <span className="text-[9px] font-medium text-gray-600">Thought for 2 seconds</span>
                  <ChevronDown className="w-3 h-3 text-gray-600" />
                </div>
                <div className="text-[9px] text-gray-700 space-y-2">
                  <p>Let me analyze this ChatGPT-like AI chat request step by step.</p>
                  <p>First, I need to understand what the user is asking for: They want a complete AI chat assistant feature that integrates seamlessly into their existing application.</p>
                  <p>For this implementation, I&apos;ll need to consider: Backend infrastructure (database schema, API routes, AI provider integration), Frontend components (chat UI, real-time updates, message handling), Security measures (authentication, rate limiting, input sanitization), and Performance optimizations (caching, virtualization, lazy loading).</p>
                  <p>I&apos;ll structure this as a comprehensive task breakdown covering all technical layers - from database design to user interface, ensuring security best practices and scalable architecture patterns throughout.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Task Creation component */}
          {showTaskCreation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-4"
            >
              <Task className="w-full text-left">
                <TaskTrigger title="Creating AI Chat Tasks" />
                <TaskContent>
                  <TaskItem>
                    <span className="text-[9px] text-gray-600">{currentTaskCreation}</span>
                  </TaskItem>
                  <TaskItem>
                    <span className="text-[9px] text-gray-500">Analyzing project structure...</span>
                  </TaskItem>
                  <TaskItem>
                    <span className="text-[9px] text-gray-500">Generating comprehensive task breakdown...</span>
                  </TaskItem>
                </TaskContent>
              </Task>
            </motion.div>
          )}
          
          {/* Thinking indicator */}
          {demoState === 'thinking' && !showReasoning && !showTaskCreation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-left mb-4"
            >
              <div className="inline-block px-4 py-2 rounded-lg bg-white border border-gray-200">
                <div className="flex items-center gap-1">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Chat Input */}
        <div className="px-6 pb-6">
          <PromptInput onSubmit={(e) => e.preventDefault()} className="bg-white border-gray-300 shadow-sm">
            <PromptInputTextarea 
              placeholder="Ask Epic..."
              value={typedText}
              onChange={() => {}}
              className="bg-white text-gray-900 placeholder:text-gray-500 !text-[10px] !leading-relaxed resize-none h-[80px] !p-3 overflow-hidden"
            />
            <PromptInputToolbar className="bg-white border-t border-gray-200 px-3 py-2">
              <PromptInputTools className="gap-1">
                <PromptInputButton size="sm" variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 h-8 px-2">
                  <Plus className="w-4 h-4" />
                </PromptInputButton>
                <PromptInputButton size="sm" variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 h-6 px-2 text-[9px]">
<Sparkles className="!w-2 !h-2 mr-1" />
                  Enhance
                </PromptInputButton>
              </PromptInputTools>
              <PromptInputSubmit 
                size="sm"
                disabled={false}
                status="ready"
                className="bg-gray-900 hover:bg-gray-800 text-white h-6 px-3 text-[9px]"
              >
<Send className="!w-2 !h-2 mr-1" />
                Send
              </PromptInputSubmit>
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </div>

      {/* Right Panel - Tasks */}
      <div className="flex-1 flex flex-col bg-gray-50 p-2 min-h-[400px] lg:min-h-full">
        <div className="flex-1 flex flex-col bg-white border border-[#D8D8D8] rounded-lg overflow-hidden">

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white px-4 sm:px-6 py-2 gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] text-gray-600 hover:bg-gray-100 rounded">
              <FunnelSimple className="w-3 h-3" />
              <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-medium text-gray-700 hover:bg-gray-100 rounded">
              <Plus className="w-3 h-3" />
              <span className="hidden sm:inline">Add Tasks</span>
            </button>
          </div>
          
          {/* View PRD Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] sm:text-[10px] text-gray-600">View PRD</span>
            <div className="relative inline-flex h-4 w-7 items-center rounded-full bg-gray-200">
              <div className="h-3 w-3 rounded-full bg-white shadow-sm transition-transform translate-x-0.5"></div>
            </div>
          </div>
        </div>

        {/* Task Content */}
        <div className="flex-1 bg-white overflow-y-auto">
          <div className="">
            {/* Project Setup Section */}
            <div className="mb-0">
              <div className="flex items-center gap-2 bg-[#F5F5F5] border-t border-b border-[#D8D8D8] px-4 sm:px-6 py-1 cursor-pointer" onClick={() => setProjectSetupOpen(!projectSetupOpen)}>
                {projectSetupOpen ? (
                  <ChevronDown className="w-3 h-3 text-gray-600" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                )}
                <span className="font-medium text-gray-900 text-[9px] sm:text-[10px]">Project Setup</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500">
                  {projectTasks.length}
                </span>
                <Plus className="w-3 h-3 text-gray-400 ml-auto" />
              </div>

              {/* Project Setup Tasks */}
              {projectSetupOpen && (
              <div className="py-2">
                {projectTasks.map((task) => {
                  const { category, cleanTitle } = extractCategory(task.title)
                  return (
                    <div
                      key={task.id}
                      className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 hover:bg-gray-50 cursor-pointer group"
                    >
                      <span className="text-[9px] sm:text-[10px] font-medium text-gray-500 w-12 sm:w-16 flex-shrink-0">{task.id}</span>
                      <div className="w-4 h-4 bg-[#F97316] rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-gray-900 flex-1 min-w-0">{cleanTitle}</span>
                      {category && <Tag category={category} />}
                      <Copy className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )
                })}
              </div>
              )}
            </div>

            {/* AI Chat Section - Only shows after Epic responds */}
            <AnimatePresence>
              {aiChatVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-0"
                >
                  <div className="flex items-center gap-2 bg-[#F5F5F5] border-t border-b border-[#D8D8D8] px-4 sm:px-6 py-1 cursor-pointer" onClick={() => setAiChatOpen(!aiChatOpen)}>
                    {aiChatOpen ? (
                      <ChevronDown className="w-3 h-3 text-gray-600" />
                    ) : (
                      <ChevronRight className="w-3 h-3 text-gray-600" />
                    )}
                    <span className="font-medium text-gray-900 text-[9px] sm:text-[10px]">AI Chat</span>
                    <span className="text-[9px] sm:text-[10px] text-gray-500">
                      {visibleAiTasks.length}
                    </span>
                    <Plus className="w-3 h-3 text-gray-400 ml-auto" />
                  </div>

                  {/* AI Chat Tasks */}
                  {aiChatOpen && (
                  <div className="py-2">
                    <AnimatePresence>
                      {visibleAiTasks.map((task, index) => {
                        const { category, cleanTitle } = extractCategory(task.title)
                        return (
                          <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 hover:bg-gray-50 cursor-pointer group"
                          >
                            <span className="text-[9px] sm:text-[10px] font-medium text-gray-500 w-12 sm:w-16 flex-shrink-0">{task.id}</span>
                            <CircleDashed size={16} className="text-gray-400" />
                            <span className="text-[9px] sm:text-[10px] text-gray-900 flex-1 min-w-0">{cleanTitle}</span>
                            {category && <Tag category={category} />}
                       <Copy className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        )
                      })}
                    </AnimatePresence>
                  </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}