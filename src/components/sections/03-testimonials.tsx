"use client"

import { useEffect, useRef, useState } from "react";

const quote = '"It\'s like vibe coding with a senior developer by your side"';

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const words = quote.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const section = containerRef.current.closest('section');
      if (!section) return;
      
      const sectionRect = section.getBoundingClientRect();
      
      // Start animation when section top hits the viewport top (sticky position activates)
      if (sectionRect.top <= 0) {
        // Calculate how far we've scrolled into the section
        const scrolledIntoSection = Math.abs(sectionRect.top);
        const sectionHeight = sectionRect.height;
        
        // Progress from 0 to 1 as we scroll through the section
        // Complete the animation within the first 50% of the section scroll
        const scrollProgress = Math.min(1, scrolledIntoSection / (sectionHeight * 0.5));
        setProgress(scrollProgress);
      } else {
        // Reset progress if we're above the section
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen" style={{ backgroundColor: '#F6F4F1' }}>
      <div 
        ref={containerRef}
        className="sticky top-0 flex items-center justify-center min-h-screen px-6"
      >
        {/* Centered gradient behind quote */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none" 
        >
          <div
            className="absolute w-[800px] h-[400px]"
            style={{
              background: `
                radial-gradient(ellipse at center, rgba(255, 119, 0, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 40%, rgba(242, 0, 255, 0.12) 0%, transparent 40%),
                radial-gradient(ellipse at 70% 60%, rgba(255, 119, 0, 0.12) 0%, transparent 40%)
              `,
              filter: 'blur(80px)',
              borderRadius: '50%'
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl relative z-10">
          <p className="text-4xl md:text-6xl lg:text-6xl font-normal leading-tight tracking-tight text-center text-black" style={{ fontFamily: "'EB Garamond', serif" }}>
            {words.map((word, index) => {
              // Calculate if this word should be highlighted based on progress
              const wordProgress = index / words.length;
              const isActive = progress > wordProgress;
              
              return (
                <span
                  key={index}
                  className={`inline-block transition-colors duration-300 ${
                    isActive 
                      ? "text-gray-900 dark:text-white" 
                      : "text-gray-300 dark:text-gray-700"
                  }`}
                  style={{
                    marginRight: index < words.length - 1 ? "0.35em" : "0",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </p>
          
        </div>
      </div>
      
      {/* Spacer to ensure scroll */}
      <div className="h-screen" />
    </section>
  );
}