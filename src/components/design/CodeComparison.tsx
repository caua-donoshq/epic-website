"use client"

import { Compare } from "@/components/ui/compare"

export function CodeComparison() {
  return (
    <Compare
      firstImage="/images/clean-code.svg"
      secondImage="/images/messy-code.svg"
      className="w-[320px] h-[320px]"
      firstImageClassName="object-contain"
      secondImageClassname="object-contain"
      slideMode="hover"
      initialSliderPercentage={50}
      autoplay={false}
      autoplayDuration={4000}
    />
  )
}