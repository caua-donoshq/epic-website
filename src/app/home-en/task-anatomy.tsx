import Image from "next/image"

export function TaskAnatomy() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black max-w-4xl mx-auto mb-6 font-normal leading-tight tracking-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
            You tell Epic what you want to build. Epic tells your coding assistant how to build it right
          </h2>
          <p className="text-base font-normal leading-relaxed text-black max-w-3xl mx-auto">
            Epic turns your requests into highly effective prompts for you to copy and paste into your ai coding assistant, to build the app you want, with the guardrails you need.
          </p>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/images/task-anatomy.svg"
              alt="Task anatomy visualization"
              width={1200}
              height={600}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}