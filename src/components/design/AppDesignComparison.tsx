"use client"

import { Compare } from "@/components/ui/compare"

export function AppDesignComparison() {
  return (
    <div className="flex items-center justify-center px-4">
      <Compare
        firstImage="/images/good-design.svg"
        secondImage="/images/bad-design.svg"
        className="w-full max-w-[320px] h-[200px] sm:max-w-[480px] sm:h-[300px] md:max-w-[640px] md:h-[400px] lg:max-w-[800px] lg:h-[500px]"
        firstImageClassName=""
        secondImageClassname=""
        slideMode="hover"
        initialSliderPercentage={50}
        autoplay={false}
        autoplayDuration={4000}
      />
    </div>
  )
}