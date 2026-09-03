import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteContent';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F9F7F1] text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
              Client Experiences
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#083B40]">
              Words from Those Who Found Clarity
            </h2>

            <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed">
              Real people. Real experiences. Real clarity.
            </p>

            <div className="pt-2">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] transition-colors"
              >
                <span>Read all stories</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Right Column (7 cols): Featured Testimonial Card with Carousel Controls */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div className="w-full flex items-center gap-3 sm:gap-4">
              
              {/* Left Circular Arrow */}
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#083B40] hover:bg-[#FAF8F3] transition-colors flex-shrink-0"
                aria-label="Previous story"
              >
                <ChevronLeft size={18} />
              </button>

              {/* White Card */}
              <div className="w-full p-8 sm:p-10 rounded-2xl bg-white shadow-lg border border-gray-100/60 text-left space-y-4 min-h-[220px] flex flex-col justify-between">
                <div className="space-y-3">
                  <Quote size={28} className="text-[#083B40] transform -scale-x-100" />
                  <p className="text-sm sm:text-base text-[#3A4C4E] font-normal leading-relaxed">
                    "{current.quote}"
                  </p>
                </div>

                <div className="text-xs font-semibold text-[#1B6B75] pt-2">
                  — {current.author} <span className="font-normal text-gray-400">({current.location})</span>
                </div>
              </div>

              {/* Right Circular Arrow */}
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#083B40] hover:bg-[#FAF8F3] transition-colors flex-shrink-0"
                aria-label="Next story"
              >
                <ChevronRight size={18} />
              </button>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentIndex === i ? 'w-5 bg-[#083B40]' : 'w-1.5 bg-[#D2C8BA]'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
