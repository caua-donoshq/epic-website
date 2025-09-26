import Image from "next/image"

export function PRDSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black max-w-3xl mx-auto mb-6 font-normal leading-tight tracking-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
            Plan your app and know, from the start, the path to put it into production
          </h2>
          <p className="text-base font-normal leading-relaxed text-black max-w-3xl mx-auto">
            Stop improvising prompts and giving up on finishing your app. Epic plans your project through effective PRDs, so Lovable understands the context end-to-end. Result: less hallucination and more speed to get your app into production.
          </p>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/images/prd-section.svg"
              alt="PRD section visualization"
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