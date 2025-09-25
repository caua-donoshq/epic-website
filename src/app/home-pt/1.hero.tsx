"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F6F4F1' }}>
      {/* Gradient Image Overlay */}
      <div className="absolute top-0 left-0 right-0 h-[90vh] z-0 flex items-center justify-center -mt-20">
        <div className="relative w-3/4 h-full max-w-4xl">
          <Image
            src="/images/gradient.svg"
            alt=""
            fill
            className="object-contain opacity-80"
            priority
          />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-20">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-normal tracking-tight text-center leading-none md:leading-none lg:leading-none text-black mb-8 max-w-xl mt-20" style={{ fontFamily: "'EB Garamond', serif" }}>
          Chega de implorar para o Lovable te obedecer
        </h1>
        
        {/* Subheading */}
        <p className="text-center max-w-xl text-base font-normal leading-relaxed text-black mb-8">
          O Epic transforma suas ideias soltas em especificações claras, para que o Lovable acerte a implementação de primeira e construa aplicações rápidas e seguras (mesmo que você não saiba nada de programação).
        </p>
        
        {/* Test Button */}
        <div className="mb-16 flex flex-col items-center">
          <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-orange-500 transition-colors mb-2">
            Teste gratuitamente
          </button>
          <p className="text-xs text-gray-600">
            Sem precisar colocar seu cartão de crédito
          </p>
        </div>
        
        {/* Product Mockup - Mobile */}
        <div className="block sm:hidden w-[120vw] -ml-[10vw] px-1 mt-8">
          <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: 'transparent' }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '1920/1200', backgroundColor: 'transparent' }}>
              <Image
                src="/images/hero-screenshot.svg"
                alt="Interface do Gerente de Produto IA Epic"
                fill
                className="block w-full h-full object-contain"
                style={{ objectPosition: 'center center' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Mockup - Desktop */}
        <div className="hidden sm:block w-full max-w-[90%] mx-auto px-6 mt-12">
          <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: 'transparent' }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '1920/1200', backgroundColor: 'transparent' }}>
              <Image
                src="/images/hero-screenshot.svg"
                alt="Interface do Gerente de Produto IA Epic"
                fill
                className="block w-full h-full object-contain"
                style={{ objectPosition: 'center center' }}
                priority
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}