import Image from "next/image"

const codingAssistants = [
  { name: "claude-code", displayName: "Claude Code", logo: "/images/claude-code-logo.png?v=2" },
  { name: "cursor", displayName: "Cursor", logo: "/images/cursor-logo.png?v=2" },
  { name: "windsurf", displayName: "Windsurf", logo: "/images/windsurf-logo.png?v=2" },
]

export function CodingAssistants() {
  return (
    <section className="pt-20 pb-32 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-md md:text-md text-black max-w-3xl mx-auto mb-2 tracking-normal">
            Works with your favorite coding assistant.
          </h2>
          <p className="text-lg text-gray-500">
            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 mt-20 max-w-xl mx-auto">
          {codingAssistants.map((assistant) => (
            <div key={assistant.name} className="flex items-center justify-center">
              <div className="relative h-12 w-42 flex items-center justify-center">
                <Image
                  src={assistant.logo}
                  alt={assistant.displayName}
                  width={162}
                  height={60}
                  className="object-contain"
                  style={{ maxHeight: '70px', width: 'auto' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}