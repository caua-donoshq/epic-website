const features = [
  {
    icon: "🔒",
    title: "Security-First Middleware",
    description: "CSRF, rate limiting, XSS, CORS, and more baked into Epic boilerplate and tasks so coding assistants build safer applications that make common attacks bounce off."
  },
  {
    icon: "🏗️",
    title: "Clean, Scalable Architecture", 
    description: "Epic boilerplate uses a feature-based folder structure and follows strict separation of concerns principles to keep your codebase organized as you grow."
  },
  {
    icon: "🔄",
    title: "Vendor-Independent Design",
    description: "Swap coding assistants, auth providers, or databases anytime. Vendor independence is one of Epic's key principles so you avoid hidden lock-ins."
  },
  {
    icon: "📚",
    title: "Auto Documentation",
    description: "Successful implementations are documented as they ship, so future prompts reuse knowledge instead of reinventing wheels and spending tokens."
  }
]

export function FeaturesBar() {
  return (
    <section className="py-20 px-6 text-black dark:text-white" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl opacity-70">{feature.icon}</span>
                <h3 className="text-lg font-medium text-black dark:text-white">
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