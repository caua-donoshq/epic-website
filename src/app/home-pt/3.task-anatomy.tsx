import Image from "next/image"

export function TaskAnatomy() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black max-w-xl mx-auto mb-6 font-normal leading-tight tracking-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
            Diga ao Epic o que você quer. O Epic mostra para a AI como fazer.
          </h2>
          <p className="text-base font-normal leading-relaxed text-black max-w-3xl mx-auto">
            O Epic transforma suas ideias em PRPs (Product Requirements Prompts) altamente eficazes para você copiar e colar no seu assistente de código e construir o app que deseja, com as proteções necessárias.
          </p>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/images/task-anatomy.svg"
              alt="Visualização da anatomia da tarefa"
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