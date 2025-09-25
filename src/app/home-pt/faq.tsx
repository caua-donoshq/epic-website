"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { FadeIn } from "@/components/animations"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const faqs = [
  {
    question: "Não sou engenheiro. O Epic funcionará para mim?",
    answer: "Absolutamente! O Epic foi projetado com desenvolvimento IA-first em mente. Você não precisa ser um especialista em código – apenas descreva o que deseja construir em português simples. Nosso boilerplate cuida da configuração técnica complexa, enquanto você foca na sua visão. Os assistentes de código IA entendem linguagem natural e podem transformar suas ideias em aplicações funcionais. Pense nisso como ter um parceiro desenvolvedor sênior que fala sua língua."
  },
  {
    question: "Quais recursos integrados posso esperar do boilerplate do Epic?",
    answer: "O Epic vem completo com tudo que aplicações modernas precisam: autenticação de usuário (cadastro, login, recuperação de senha), integração com banco de dados PostgreSQL, componentes de UI bonitos via shadcn/ui, suporte a modo escuro, design responsivo, manipulação de formulários com validação, rotas de API e server actions, upload de arquivos, capacidades de envio de email, configuração de processamento de pagamentos, otimização SEO e configurações de deploy prontas para produção. Além disso, nosso sistema de documentação automatizado garante que cada recurso esteja bem documentado para seu assistente IA aproveitar."
  },
  {
    question: "Qual é a stack tecnológica do Epic?",
    answer: {
      sections: [
        {
          title: "Frontend (Next.js App Router)",
          items: [
            { label: "Framework", value: "Next.js 15.5.0 com TypeScript" },
            { label: "React", value: "React 19 com Server Components" },
            { label: "Estilização", value: "Tailwind CSS + shadcn/ui" },
            { label: "Temas", value: "next-themes para suporte a modo escuro" },
            { label: "Estado", value: "Estado do servidor via RSC, estado do cliente via hooks" },
            { label: "Formulários", value: "Server Actions + react-hook-form para casos complexos" },
            { label: "Busca de Dados", value: "Server Components + TanStack Query (ou SWR) para cliente" },
            { label: "Validação", value: "Schemas Zod" },
            { label: "Autenticação", value: "@supabase/ssr (ou qualquer SDK de provedor)" },
            { label: "Testes", value: "Vitest + React Testing Library + Playwright" }
          ]
        },
        {
          title: "Backend (Next.js Full-Stack)",
          items: [
            { label: "Runtime", value: "Node.js 20+ (Edge Runtime quando benéfico)" },
            { label: "API", value: "Server Actions (primário), Route Handlers (quando necessário)" },
            { label: "Banco de Dados", value: "PostgreSQL via Supabase" },
            { label: "ORM", value: "Drizzle ORM" },
            { label: "Autenticação", value: "Supabase Auth (apenas para auth)" },
            { label: "Gerenciamento de Sessão", value: "Sessões gerenciadas pelo provedor (sem JWTs emitidos pelo app)" },
            { label: "Validação", value: "Schemas Zod" },
            { label: "Sanitização", value: "isomorphic-dompurify para sanitização HTML" },
            { label: "Segurança", value: "pacote server-only para prevenir importações do cliente" },
            { label: "Tempo Real", value: "Server-Sent Events para streaming" },
            { label: "Upload de Arquivo", value: "Server Actions + Supabase Storage" },
            { label: "Testes", value: "Vitest para unitário/integração + Testcontainers para isolamento de BD" }
          ]
        },
        {
          title: "Infraestrutura",
          items: [
            { label: "Hospedagem", value: "Vercel (ideal para Next.js)" },
            { label: "Banco de Dados", value: "Supabase PostgreSQL" },
            { label: "Autenticação", value: "Supabase Auth" },
            { label: "Armazenamento de Arquivos", value: "Supabase Storage" },
            { label: "Email", value: "Resend via Server Actions" },
            { label: "Pagamentos", value: "Stripe via Server Actions" },
            { label: "Monitoramento", value: "Vercel Analytics + Sentry" },
            { label: "CDN", value: "Vercel Edge Network" }
          ]
        },
        {
          title: "Ferramentas de Desenvolvimento",
          items: [
            { label: "Gerenciador de Pacotes", value: "pnpm (mais rápido, eficiente)" },
            { label: "Qualidade de Código", value: "ESLint + Prettier" },
            { label: "Git Hooks", value: "Husky + lint-staged" },
            { label: "Segurança de Tipos", value: "TypeScript modo estrito" },
            { label: "Análise de Bundle", value: "@next/bundle-analyzer" },
            { label: "Teste de Performance", value: "Lighthouse CI" },
            { label: "GUI do Banco de Dados", value: "Drizzle Studio" }
          ]
        }
      ]
    }
  }
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#F6F4F1' }}>
      <div className="container mx-auto max-w-4xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-normal text-black mb-4 leading-tight tracking-tight"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Perguntas Frequentes
            </h2>
            <p className="text-base font-normal leading-relaxed text-black">
              Tudo que você precisa saber sobre construir com Epic
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
                className="group"
              >
                <div className="rounded-lg overflow-hidden transition-all duration-200">
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors hover:bg-[#EFEDE8]">
                    <h3 
                      className="text-xl font-normal text-black pr-4"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 transition-transform duration-200">
                      {openItems.includes(index) ? (
                        <Minus size={20} className="text-gray-600" />
                      ) : (
                        <Plus size={20} className="text-gray-600" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="overflow-hidden transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="px-6 pb-5">
                      <div className="prose prose-gray max-w-none">
                        {typeof faq.answer === 'string' ? (
                          <p className="text-base font-normal leading-loose text-black">
                            {faq.answer}
                          </p>
                        ) : (
                          <div className="space-y-6">
                            {faq.answer.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <h4 className="font-medium text-black mb-3" style={{ fontFamily: "'EB Garamond', serif" }}>
                                  {section.title}
                                </h4>
                                <ul className="space-y-2">
                                  {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-base font-normal leading-loose text-black">
                                      <span className="font-medium text-black">{item.label}:</span>{' '}
                                      {item.value}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}