"use client"

import { useState } from "react"
import Image from "next/image"
import { GitBranch, TestTube, Shield, Lightning, User } from "phosphor-react"

const prompts = [
  {
    id: "versioning",
    label: "Code Versioning Guardrails",
    icon: GitBranch,
    whatToDo: "Set up version control for my project",
    howToDo: `You are implementing a Git workflow with strict versioning practices. Create a comprehensive version control strategy that includes:

**Branch Strategy:**
- Main branch: production-ready code only
- Develop branch: integration branch for features
- Feature branches: feature/[ticket-id]-description
- Hotfix branches: hotfix/[issue]-description

**Commit Standards:**
- Use conventional commits: feat:, fix:, docs:, style:, refactor:, test:, chore:
- Each commit must be atomic and focused on a single change
- Include ticket numbers in commit messages
- Write descriptive commit messages explaining the "why"

**Pre-commit Hooks:**
- Run linting and formatting checks
- Execute unit tests for changed files
- Validate commit message format
- Check for sensitive data exposure

**Pull Request Requirements:**
- Require code reviews from at least 2 team members
- All CI/CD checks must pass
- Update documentation for API changes
- Include screenshots for UI changes`
  },
  {
    id: "testing",
    label: "Frontend and Backend Tests",
    icon: TestTube,
    whatToDo: "Write tests for my application",
    howToDo: `You are a test-driven development specialist implementing comprehensive testing. Create a full testing strategy:

**BDD Scenarios:**
Given: User is on the login page
When: User enters valid credentials
Then: User should be redirected to dashboard
And: User session should be created
And: Analytics event should be tracked

**Frontend Testing Requirements:**
- Unit tests: 90% coverage minimum
- Integration tests for all user flows
- Visual regression tests for UI components
- Accessibility tests (WCAG 2.1 AA compliance)
- Performance tests (Core Web Vitals)

**Backend Testing Requirements:**
- Unit tests for all business logic
- API endpoint tests with edge cases
- Database integration tests
- Load testing for concurrent users
- Security tests for authentication/authorization

**Test Structure:**
- Use AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test error scenarios and edge cases
- Include performance benchmarks`
  },
  {
    id: "security",
    label: "Security-First Middleware",
    icon: Shield,
    whatToDo: "Add security to my API",
    howToDo: `You are implementing enterprise-grade security middleware. Create a comprehensive security layer:

**Authentication & Authorization:**
- Implement JWT with refresh tokens (15min access, 7day refresh)
- Role-based access control (RBAC) with granular permissions
- Multi-factor authentication support
- Session management with secure cookies

**Security Headers:**
- Content Security Policy (CSP) with strict directives
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security with preload
- X-XSS-Protection: 1; mode=block

**Input Validation & Sanitization:**
- Validate all inputs against strict schemas
- Sanitize user inputs to prevent XSS
- Implement SQL injection prevention
- Rate limiting: 100 requests/min per IP
- Request size limits: 10MB max

**Monitoring & Logging:**
- Log all authentication attempts
- Track failed requests and suspicious patterns
- Implement intrusion detection
- Real-time security alerts
- Audit trail for sensitive operations`
  },
  {
    id: "performance",
    label: "Performance Optimization",
    icon: Lightning,
    whatToDo: "Make my app faster",
    howToDo: `You are a performance optimization expert. Implement comprehensive performance improvements:

**Frontend Optimization:**
- Code splitting with dynamic imports
- Lazy load images with intersection observer
- Implement virtual scrolling for lists > 100 items
- Use React.memo and useMemo for expensive computations
- Preload critical resources with resource hints

**Backend Optimization:**
- Implement Redis caching with TTL strategies
- Database query optimization with indexes
- Use connection pooling (min: 10, max: 100)
- Implement request batching and debouncing
- Add CDN for static assets

**Monitoring Requirements:**
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- API response time p99 < 200ms
- Time to Interactive < 3.5s
- Bundle size budget: 200KB gzipped
- Memory usage monitoring

**Caching Strategy:**
- Browser cache: 1 year for hashed assets
- API cache: 5 minutes for public data
- Implement stale-while-revalidate
- Use service workers for offline support`
  }
]

export function PromptComparison() {
  const [activeTab, setActiveTab] = useState("versioning")
  const activePrompt = prompts.find(p => p.id === activeTab) || prompts[0]

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {prompts.map((prompt) => (
            <button
              key={prompt.id}
              onClick={() => setActiveTab(prompt.id)}
              className={`
                px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                flex items-center gap-2
                ${activeTab === prompt.id
                  ? "bg-black text-white shadow-lg"
                  : "text-black border border-gray-300 hover:border-gray-400"
                }
              `}
              style={activeTab !== prompt.id ? { backgroundColor: '#F6F4F1' } : undefined}
            >
              <prompt.icon size={16} weight="regular" />
              {prompt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What to Do Card */}
        <div>
          <h3 className="text-2xl font-normal mb-4 text-center text-gray-900" style={{ fontFamily: "'EB Garamond', serif" }}>
            What to Do
          </h3>
          <div className="rounded-xl border shadow-sm h-full min-h-[400px] p-6" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E5E5' }}>
            <div className="flex items-center gap-2 mb-4">
              <User size={24} weight="regular" className="text-gray-400" />
              <span className="text-sm text-gray-500">User</span>
            </div>
            <p className="text-lg text-gray-800">
              {activePrompt.whatToDo}
            </p>
            
            <div className="mt-8">
              <div className="text-sm font-medium text-gray-500 mb-4">Result:</div>
              <div className="text-gray-600">
                Minor changes applied, but structure remains messy
              </div>
            </div>
          </div>
        </div>

        {/* How to Do Card */}
        <div className="mt-8 lg:mt-0">
          <h3 className="text-2xl font-normal mb-4 text-center text-gray-900" style={{ fontFamily: "'EB Garamond', serif" }}>
            How to Do
          </h3>
          <div className="rounded-xl border shadow-sm h-full min-h-[400px] p-6" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E5E5' }}>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/epic-logo-black.svg" 
                alt="Epic" 
                width={60} 
                height={24} 
                className="object-contain"
              />
            </div>
            <div className="text-sm text-gray-800 whitespace-pre-line overflow-y-auto max-h-[300px] custom-scrollbar">
              {activePrompt.howToDo}
            </div>
            
            <div className="mt-8">
              <div className="text-sm font-medium text-gray-500 mb-4">Result:</div>
              <div className="text-green-600 font-medium">
                {activeTab === "versioning" && "Code fully organized with proper branching strategy"}
                {activeTab === "testing" && "Comprehensive test suite with 90%+ coverage"}
                {activeTab === "security" && "Enterprise-grade security implementation"}
                {activeTab === "performance" && "Lightning-fast app with optimized performance"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}