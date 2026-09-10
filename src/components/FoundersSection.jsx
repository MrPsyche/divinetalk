import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_ASSETS, FOUNDERS } from '../data/siteContent';

export default function FoundersSection({ onOpenBooking }) {
  return (
    <section id="founders" className="py-20 lg:py-28 bg-white text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
            The Guiding Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            The People Behind Visions By Himani
          </h2>
          <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed">
            A dedicated partnership uniting intuitive visionary clarity with seamless, private platform infrastructure.
          </p>
        </div>

        {/* 2 Founders Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-16 text-left">
          
          {/* Card 1: HimaniK Dograa (Primary Practitioner) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-36 sm:w-48 aspect-[4/5] rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-white border border-[#E2DCD2]">
              <img
                src={FOUNDERS[0].image}
                alt="HimaniK Dograa — Primary Practitioner"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl sm:text-22px font-bold text-[#083B40]">
                  {FOUNDERS[0].name}
                </h3>
                <span className="text-xs font-semibold text-[#1B6B75] uppercase tracking-wider block mt-0.5">
                  {FOUNDERS[0].role}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#506062] font-normal leading-relaxed">
                {FOUNDERS[0].bio}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' })}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] transition-colors"
                >
                  <span>Book Consultation with Himani</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Karan Dogra (The Strategic Mind) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-36 sm:w-48 aspect-[4/5] rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-white border border-[#E2DCD2]">
              <img
                src={FOUNDERS[1].image}
                alt="Karan Dogra — Strategic Mind"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl sm:text-22px font-bold text-[#083B40]">
                  {FOUNDERS[1].name}
                </h3>
                <span className="text-xs font-semibold text-[#1B6B75] uppercase tracking-wider block mt-0.5">
                  {FOUNDERS[1].role}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#506062] font-normal leading-relaxed">
                {FOUNDERS[1].bio}
              </p>

              <div className="pt-2 text-xs text-[#7A8B8D]">
                <span>Platform Security & Client Privacy Operations</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
