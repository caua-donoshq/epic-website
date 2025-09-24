import { AppDesignComparison } from "@/components/design/AppDesignComparison"

export function CreateBeautifulApps() {
  return (
    <section className="py-32 px-6 text-black dark:text-white" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Create Beautiful Apps */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black mb-6" style={{ fontFamily: "'EB Garamond', serif" }}>
            Apps que não parecem feitos por AI 
          </h1>
          <p className="text-center max-w-3xl text-base font-normal leading-relaxed text-black mb-8 mx-auto">
            O Epic mantém um arquivo de estilo central para todas as cores, fontes e componentes da sua marca e ajuda você a configurar sua identidade visual desde o início. Chega de interfaces genéricas.
          </p>
        </div>
        
        <div className="relative">
          <AppDesignComparison />
        </div>

      </div>
    </section>
  )
}