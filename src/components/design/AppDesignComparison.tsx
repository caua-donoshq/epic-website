"use client"

import { Compare } from "@/components/ui/compare"

export function AppDesignComparison() {
  return (
    <div className="flex items-center justify-center">
      <Compare
        firstImage="/images/bad-designed-app.png"
        secondImage="/images/well-designed-app.png"
        className="w-[700px] h-[450px] md:w-[900px] md:h-[550px] rounded-2xl shadow-lg"
        slideMode="hover"
        initialSliderPercentage={50}
        autoplay={true}
        autoplayDuration={4000}
      />
    </div>
  )
}