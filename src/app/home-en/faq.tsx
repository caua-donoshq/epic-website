"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { FadeIn } from "@/components/animations"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const faqs = [
  {
    question: "I'm not an engineer. Will Epic work for me?",
    answer: "Absolutely! Epic was designed with AI-first development in mind. You don't need to be a coding expert – just describe what you want to build in plain English. Our boilerplate handles the complex technical setup, while you focus on your vision. AI coding assistants understand natural language and can transform your ideas into functional applications. Think of it as having a senior developer partner who speaks your language."
  },
  {
    question: "What built-in features can I expect from Epic's boilerplate?",
    answer: "Epic comes complete with everything modern applications need: user authentication (signup, login, password recovery), PostgreSQL database integration, beautiful UI components via shadcn/ui, dark mode support, responsive design, form handling with validation, API routes and server actions, file uploads, email sending capabilities, payment processing setup, SEO optimization, and production-ready deployment configurations. Additionally, our automated documentation system ensures every feature is well-documented for your AI assistant to leverage."
  },
  {
    question: "What is Epic's technology stack?",
    answer: {
      sections: [
        {
          title: "Frontend (Next.js App Router)",
          items: [
            { label: "Framework", value: "Next.js 15.5.0 with TypeScript" },
            { label: "React", value: "React 19 with Server Components" },
            { label: "Styling", value: "Tailwind CSS + shadcn/ui" },
            { label: "Theming", value: "next-themes for dark mode support" },
            { label: "State", value: "Server state via RSC, client state via hooks" },
            { label: "Forms", value: "Server Actions + react-hook-form for complex cases" },
            { label: "Data Fetching", value: "Server Components + TanStack Query (or SWR) for client" },
            { label: "Validation", value: "Zod schemas" },
            { label: "Authentication", value: "@supabase/ssr (or any provider SDK)" },
            { label: "Testing", value: "Vitest + React Testing Library + Playwright" }
          ]
        },
        {
          title: "Backend (Next.js Full-Stack)",
          items: [
            { label: "Runtime", value: "Node.js 20+ (Edge Runtime when beneficial)" },
            { label: "API", value: "Server Actions (primary), Route Handlers (when needed)" },
            { label: "Database", value: "PostgreSQL via Supabase" },
            { label: "ORM", value: "Drizzle ORM" },
            { label: "Authentication", value: "Supabase Auth (auth only)" },
            { label: "Session Management", value: "Provider-managed sessions (no app-issued JWTs)" },
            { label: "Validation", value: "Zod schemas" },
            { label: "Sanitization", value: "isomorphic-dompurify for HTML sanitization" },
            { label: "Security", value: "server-only package to prevent client imports" },
            { label: "Real-time", value: "Server-Sent Events for streaming" },
            { label: "File Upload", value: "Server Actions + Supabase Storage" },
            { label: "Testing", value: "Vitest for unit/integration + Testcontainers for DB isolation" }
          ]
        },
        {
          title: "Infrastructure",
          items: [
            { label: "Hosting", value: "Vercel (ideal for Next.js)" },
            { label: "Database", value: "Supabase PostgreSQL" },
            { label: "Authentication", value: "Supabase Auth" },
            { label: "File Storage", value: "Supabase Storage" },
            { label: "Email", value: "Resend via Server Actions" },
            { label: "Pagamentos", value: "Stripe via Server Actions" },
            { label: "Monitoring", value: "Vercel Analytics + Sentry" },
            { label: "CDN", value: "Vercel Edge Network" }
          ]
        },
        {
          title: "Development Tools",
          items: [
            { label: "Package Manager", value: "pnpm (faster, efficient)" },
            { label: "Code Quality", value: "ESLint + Prettier" },
            { label: "Git Hooks", value: "Husky + lint-staged" },
            { label: "Type Safety", value: "TypeScript strict mode" },
            { label: "Bundle Analysis", value: "@next/bundle-analyzer" },
            { label: "Performance Testing", value: "Lighthouse CI" },
            { label: "Database GUI", value: "Drizzle Studio" }
          ]
        }
      ]
    }
  }
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-normal text-black mb-4 leading-tight tracking-tight"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-base font-normal leading-relaxed text-black">
              Everything you need to know about building with Epic
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
                className="group"
              >
                <div className="rounded-lg overflow-hidden transition-all duration-200">
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors hover:bg-[#EFEDE8]">
                    <h3 
                      className="text-xl font-normal text-black pr-4"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 transition-transform duration-200">
                      {openItems.includes(index) ? (
                        <Minus size={20} className="text-gray-600" />
                      ) : (
                        <Plus size={20} className="text-gray-600" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="px-6 pb-5">
                      <div className="prose prose-gray max-w-none">
                        {typeof faq.answer === 'string' ? (
                          <p className="text-base font-normal leading-loose text-black">
                            {faq.answer}
                          </p>
                        ) : (
                          <div className="space-y-6">
                            {faq.answer.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <h4 className="font-medium text-black mb-3" style={{ fontFamily: "'EB Garamond', serif" }}>
                                  {section.title}
                                </h4>
                                <ul className="space-y-2">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-base font-normal leading-loose text-black">
                                      <span className="font-medium text-black">{item.label}:</span>{' '}
                                      {item.value}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}