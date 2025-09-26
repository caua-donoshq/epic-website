import Image from "next/image"

export function ProjectManagement() {
  return (
    <section className="pt-32 pb-24 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black max-w-xl mx-auto mb-6 font-normal leading-tight tracking-tight" style={{ fontFamily: "'EB Garamond', serif" }}>
            Controle todas as tarefas do seu projeto em um lugar só 
          </h2>
          <p className="text-base font-normal leading-relaxed text-black max-w-3xl mx-auto">
            Vibe code é rápido, mas vira caos. Com o Epic você nunca mais vai se perder no seu workflow, e vai ter uma visão clara das tarefas necessárias para lançar o seu app.
          </p>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/images/project-management-image.svg"
              alt="Visualização do gerenciamento de projetos"
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