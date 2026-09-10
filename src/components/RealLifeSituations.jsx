import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { REAL_LIFE_SITUATIONS } from '../data/siteContent';

export default function RealLifeSituations({ onOpenBooking }) {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF8F3] text-[#2D3E40] border-y border-[#EFEBE3] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-[#1B6B75]">
            <Sparkles size={16} />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Real-World Guidance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Experience Across Real-Life Situations
          </h2>
          <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed">
            From high-stakes commercial dilemmas to delicate personal milestones, Himani has guided individuals through a vast spectrum of real-world scenarios:
          </p>
        </div>

        {/* Situations Cloud */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-5xl mx-auto">
          {REAL_LIFE_SITUATIONS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onOpenBooking({ serviceName: `${item} Consultation`, practitioner: 'HimaniK Dograa' })}
              className="px-4 py-2.5 rounded-full bg-white text-[#083B40] text-xs sm:text-sm font-medium border border-[#E2DCD2] hover:border-[#C9A84E] hover:bg-[#FAF0D7] hover:text-[#083B40] transition-all shadow-2xs text-left cursor-pointer"
            >
              {item}
            </button>
          ))}
          
          <div className="px-4 py-2.5 rounded-full bg-[#FAF0D7] text-[#B88E28] text-xs sm:text-sm font-semibold border border-[#E9D9B2]">
            + And Much More
          </div>
        </div>

        {/* Subtext CTA */}
        <div className="mt-10 pt-6">
          <p className="text-xs sm:text-sm text-[#6B7C7E] max-w-md mx-auto mb-4">
            Have a unique situation not listed above? Bring whatever is on your mind to your private session.
          </p>
          <button
            onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
            className="btn-pill-teal"
          >
            <span>Book Your Conversation</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
