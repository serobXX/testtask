"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  isMobile: boolean;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  isMobile,
}: SlideNavigationProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Pagination Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: isMobile ? 6 : 2 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentSlide === index 
                ? "w-12 bg-primary" 
                : "w-2 bg-gray-300"
            )}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          className={cn(
            "transition-all duration-300 hover:scale-110",
            currentSlide === 0 && "opacity-50 cursor-not-allowed"
          )}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          className={cn(
            "transition-all duration-300 hover:scale-110",
            currentSlide === totalSlides - 1 && "opacity-50 cursor-not-allowed"
          )}
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}