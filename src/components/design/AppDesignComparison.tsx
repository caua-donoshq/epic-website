"use client"

import { Compare } from "@/components/ui/compare"

export function AppDesignComparison() {
  return (
    <div className="flex items-center justify-center px-4">
      <Compare
        firstImage="/images/bad-designed-app.png"
        secondImage="/images/well-designed-app.png"
        className="w-full max-w-[350px] h-[225px] sm:max-w-[500px] sm:h-[320px] md:max-w-[700px] md:h-[450px] lg:max-w-[900px] lg:h-[550px] rounded-2xl shadow-lg"
        slideMode="hover"
        initialSliderPercentage={50}
        autoplay={false}
        autoplayDuration={4000}
      />
    </div>
  )
}