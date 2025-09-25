"use client";

import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
}

export const SparklesCore = ({ className, ...props }: SparklesProps) => {
  return <div className={cn("w-full h-full", className)} {...props} />;
};