"use client";

import { useState, useEffect } from "react";
import { services } from "./data";
import { ServiceCard } from "./ServiceCard";
import { SlideNavigation } from "./SlideNavigation";
import { cn } from "@/lib/utils";

const SLIDES_PER_VIEW = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
};

export function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(SLIDES_PER_VIEW.mobile);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(SLIDES_PER_VIEW.desktop);
        setIsMobile(false);
      } else if (width >= 768) {
        setSlidesPerView(SLIDES_PER_VIEW.tablet);
        setIsMobile(false);
      } else {
        setSlidesPerView(SLIDES_PER_VIEW.mobile);
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleServices = () => {
    return services.slice(
      currentSlide * slidesPerView,
      (currentSlide + 1) * slidesPerView
    );
  };


  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl text-[#A59DFF] font-bold text-primary">Наши услуги</h2>
            </div>
          </div>
          <SlideNavigation
            onDotClick={handleDotClick}
            currentSlide={currentSlide}
            isMobile={isMobile} />
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleServices().map((service) => (
              <div
                key={service.id}
                className="transform transition-all duration-500 opacity-100"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}