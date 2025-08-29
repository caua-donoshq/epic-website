"use client"

import { Swap, Lightning, Stack } from "phosphor-react"

const features = [
  {
    icon: Swap,
    title: "Vendor Independence", 
    description: "Swap coding assistants, auth providers, or databases anytime. Vendor independence is one of Epic's key principles so you avoid hidden lock-ins."
  },
  {
    icon: Lightning,
    title: "Performance Infrastructure",
    description: "Epic's boilerplate comes with a built-in performance infrastructure that you can easily import into your files to build lightning fast features."
  },
  {
    icon: Stack,
    title: "Vibe coder friendly tech stack",
    description: "Epic helps you choose modern technologies that helps you build fast: Nextjs, React, Tailwind CSS, Shadcn Components, PostgreSQL, Drizzle ORM and Vercel."
  }
]

export function FeaturesBar() {
  return (
    <section className="py-20 px-6 text-black dark:text-white" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-left p-6 rounded-lg shadow-md"
              style={{ 
                backgroundColor: '#F6F4F1'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <feature.icon size={24} weight="regular" className="text-gray-700 dark:text-gray-300" />
                <h3 className="text-lg text-black dark:text-white" style={{ fontFamily: "'EB Garamond', serif" }}>
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}