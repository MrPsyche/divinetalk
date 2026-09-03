import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';
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
    <section className="py-24 sm:py-32 bg-sacred-950 text-ivory-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Section Header */}
        <SectionHeader
          badge="Client Experiences"
          title="Words From Those Who Found Clarity"
          subtitle="Real, unsolicited reflections from private consultation and healing sessions."
          theme="dark"
          centered={true}
        />

        {/* Large Editorial Quotation */}
        <div className="mt-16 sm:mt-20 relative max-w-3xl mx-auto text-left">
          
          <Quote size={40} className="text-gold-500/30 mb-6 transform -scale-x-100" />

          <blockquote className="text-xl sm:text-2xl md:text-[1.65rem] font-normal text-ivory-50 leading-relaxed">
            "{current.quote}"
          </blockquote>

          <div className="mt-8 pt-6 border-t border-sacred-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-semibold text-gold-300 block">
                {current.author}
              </span>
              <span className="text-xs text-ivory-400 font-normal">
                {current.location} • {current.category}
              </span>
            </div>

            {/* Simple Minimal Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-ivory-400 mr-2">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-lg bg-sacred-900 text-ivory-200 hover:text-gold-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-lg bg-sacred-900 text-ivory-200 hover:text-gold-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
