"use client";


import { cn } from "@/lib/utils";

interface SlideNavigationProps {
  currentSlide: number;
  isMobile: boolean;
  onDotClick: (index: number) => void;
}

export function SlideNavigation({
  currentSlide,
  isMobile,
  onDotClick,
}: SlideNavigationProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {Array.from({ length: isMobile ? 6 : 2 }).map((_, index) => (
          <div
            key={index}
            onClick={() => onDotClick(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor pointer",
              currentSlide === index
                ? "w-12 bg-primary"
                : "w-2 bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}