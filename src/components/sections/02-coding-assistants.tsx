import Image from "next/image"

export function CodingAssistants() {
  return (
    <section className="pt-20 pb-32 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black max-w-md mx-auto mb-2 font-normal leading-tight tracking-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
            Works with your favorite AI coding assistant.
          </h2>
        </div>

        <div className="flex items-center justify-center mt-20">
          <div className="relative w-full max-w-3xl">
            <Image
              src="/images/coding-assistants.svg"
              alt="Claude Code, Cursor, and Windsurf logos"
              width={768}
              height={92}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}