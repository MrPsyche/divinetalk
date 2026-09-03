import React from 'react';
import { Heart, Briefcase, TrendingUp, Wallet, Scale, Compass, ArrowRight } from 'lucide-react';
import { CLARITY_CATEGORIES } from '../data/siteContent';

export default function ClaritySelector({ onOpenBooking }) {
  const iconMap = {
    'love-relationships': Heart,
    'career-purpose': Briefcase,
    'business-growth': TrendingUp,
    'financial-instability': Wallet,
    'legal-cases': Scale,
    'life-decisions': Compass,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
            What Can We Help You With?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Where are you seeking clarity on?
          </h2>
          <p className="text-sm text-[#506062] font-normal leading-relaxed pt-1">
            HimaniK's 6th Sense visionary consultation uncovers the unseen energetic root causes across every major domain of your life.
          </p>
        </div>

        {/* 6 Columns Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 sm:gap-6 mt-16 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#EFEBE3]">
          {CLARITY_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.id] || Compass;

            return (
              <div
                key={cat.id}
                onClick={() => onOpenBooking({ serviceName: `${cat.title} Consultation`, practitioner: 'HimaniK Dograa' })}
                className="pt-6 lg:pt-0 lg:px-3 space-y-3 flex flex-col items-center justify-between group cursor-pointer"
              >
                <div className="space-y-3 flex flex-col items-center">
                  <div className="text-[#083B40] group-hover:text-[#1B6B75] transition-colors pb-1">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>

                  <h3 className="text-base font-bold text-[#083B40] leading-snug group-hover:text-[#1B6B75] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-[#6B7C7E] font-normal leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="pt-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#1B6B75] group-hover:text-[#083B40] transition-colors">
                    <span>Explore Clarity</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All Concerns CTA Button */}
        <div className="mt-14">
          <button
            onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
            className="btn-pill-teal"
          >
            <span>Book Your Divine Talk Session</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
