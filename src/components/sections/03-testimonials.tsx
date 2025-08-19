"use client"

import { useEffect, useRef, useState } from "react";

const quote = '"Before you open Cursor, open Epic so your AI coding assistant knows exactly what and how to build."';

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
    <section className="relative min-h-screen bg-white dark:bg-[#08090A]">
      <div 
        ref={containerRef}
        className="sticky top-0 flex items-center justify-center min-h-screen px-6"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-4xl md:text-6xl lg:text-6xl font-medium leading-tight tracking-tight text-center">
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