import Image from "next/image"
import { CodeComparison } from "@/components/design/CodeComparison"

const features = [
  {
    title: "Gere o Knowledge Base do seu projeto automaticamente",
    description: "Menos alucinação, mais precisão. Com o Klowledge Base construído especificamente para o seu projeto, construir apps com o Lovable se torna modular e fácil de manter, pois será seguida uma rigorosa separação de responsabilidades e princípios de arquitetura.",
    icon: "/images/spend-less-tokens 1.svg"
  },
  {
    title: "Durma tranquilo sabendo que seu app não vai cometer nenhuma gafe de segurança",
    description: "Os prompts gerados pelo Epic garantem uma infraestrutura de segurança robusta, que protege sua aplicação contra vulnerabilidades comuns de apps Vibe Coded (tipo deixar sua waitlist exposta no frontend).",
    icon: "/images/security-peace-of-mind 1.svg"
  },
  {
    title: "Apps Velozes",
    description: "As tasks do Epic garantem a implementação de uma infraestrutura de performance avançada, garantindo que seu app não demore pra carregar.",
    icon: "/images/50ms.svg"
  },
  {
    title: "Mais Vibe Coding, menos Vibe Debugging",
    description: "Cansado de arrumar uma coisa e quebrar outra? Os PRPs do EPic garantem uma arquitetura com separação de responsabilidades, garantindo que você não estrague uma feature enquanto constrói outra, ajudando você a terminar o seu projeto muito mais rápido.",
    icon: "/images/tech-stack.svg"
  }
]

export function FeaturesOne() {
  return (
    <section className="pt-24 pb-0 px-4" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-black"
            style={{ 
              fontFamily: "'EB Garamond', serif"
            }}
          >
            Feito para quem não sabe programar
          </h2>
        </div>
        
        {/* Feature Cards Grid - Custom layout */}
        <div className="max-w-4xl mx-auto">
          {/* First card - full width with image on right */}
          <div className="pb-8" style={{ borderBottom: '1px solid #C7C5C3' }}>
            <div className="rounded-2xl p-8 min-h-[280px] flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                {/* Title */}
                {features[0].title && (
                  <h3 
                    className="text-4xl font-normal mb-3 text-black"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {features[0].title}
                  </h3>
                )}
                
                {/* Description */}
                {features[0].description && (
                  <p className="text-base font-normal leading-relaxed text-black max-w-96">
                    {features[0].description}
                  </p>
                )}
              </div>
              
              {/* Icon on the right */}
              {features[0].icon && (
                <div className="flex-shrink-0">
                  <Image 
                    src={features[0].icon} 
                    alt={features[0].title}
                    width={240}
                    height={240}
                    className="object-contain transition-transform duration-300 hover:rotate-3"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Second card - Security - full width with image on left */}
          <div className="pt-8 pb-8" style={{ borderBottom: '1px solid #C7C5C3' }}>
            <div className="rounded-2xl p-8 min-h-[280px] flex flex-col md:flex-row items-center gap-4">
              {/* Stacked cards on the left */}
              <div className="flex-shrink-0">
                <div className="relative w-[320px] h-[200px]">
                  {/* Card 3 (back/top left) */}
                  <div className="absolute top-0 left-0 transition-transform duration-300 hover:-translate-y-3 hover:translate-x-1">
                    <Image
                      src="/images/stacked-card-3.svg"
                      alt="Cartão de segurança 3"
                      width={250}
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  {/* Card 2 (middle) */}
                  <div className="absolute top-8 left-6 transition-transform duration-300 hover:-translate-y-6 hover:translate-x-2">
                    <Image
                      src="/images/stacked-card-2.svg"
                      alt="Cartão de segurança 2"
                      width={250}
                      height={140}
                      className="object-contain"
                    />
                  </div>
                  {/* Card 1 (front/bottom right) */}
                  <div className="absolute top-16 left-12 transition-transform duration-300 hover:-translate-y-9 hover:translate-x-3">
                    <Image
                      src="/images/stacked-card-1.svg"
                      alt="Cartão de segurança 1"
                      width={250}
                      height={140}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {/* Title */}
                {features[1].title && (
                  <h3
                    className="text-4xl font-normal mb-3 text-black"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {features[1].title}
                  </h3>
                )}

                {/* Description */}
                {features[1].description && (
                  <p className="text-base font-normal leading-relaxed text-black max-w-96">
                    {features[1].description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Third card - Menos Vibe Debugging - full width with image on right */}
          <div className="pt-8">
            <div className="rounded-2xl p-8 min-h-[280px] flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                {/* Title */}
                {features[3].title && (
                  <h3 
                    className="text-4xl font-normal mb-3 text-black max-w-96"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    {features[3].title}
                  </h3>
                )}
                
                {/* Description */}
                {features[3].description && (
                  <p className="text-base font-normal leading-relaxed text-black max-w-96">
                    {features[3].description}
                  </p>
                )}
              </div>
              
              {/* Code Comparison on the right */}
              {features[3].icon && (
                <div className="flex-shrink-0">
                  <CodeComparison />
                </div>
              )}
            </div>
          </div>

          {/* Horizontal divider at bottom */}
          <div className="w-full h-px mt-8" style={{ backgroundColor: '#C7C5C3' }} />
        </div>
        
      </div>
    </section>
  )
}