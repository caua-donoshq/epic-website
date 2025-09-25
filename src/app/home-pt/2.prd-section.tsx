import Image from "next/image"

export function PRDSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black max-w-3xl mx-auto mb-6 font-normal leading-tight tracking-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
            Planeje seu app e saiba, desde o início, o caminho para colocá-lo em produção
          </h2>
          <p className="text-base font-normal leading-relaxed text-black max-w-3xl mx-auto">
            Pare de improvisar prompts e desistir de terminar o seu app. O Epic planeja seu projeto por meio de PRDs eficazes, para o Lovable entender o contexto de ponta a ponta. Resultado: menos alucinação e mais velocidade para colocar seu app em produção.
          </p>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/images/prd-section.svg"
              alt="Visualização da seção PRD"
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