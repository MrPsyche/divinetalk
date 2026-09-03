import React from 'react';
import { Heart, Briefcase, TrendingUp, Wallet, Scale, Compass, ArrowRight } from 'lucide-react';

export default function ClaritySelector({ onOpenBooking }) {
  const categories = [
    {
      id: 'love-relationships',
      title: 'Love & Relationships',
      desc: 'Heal relationships and find emotional clarity.',
      icon: Heart,
    },
    {
      id: 'career-purpose',
      title: 'Career & Purpose',
      desc: 'Discover direction and fulfillment in your work.',
      icon: Briefcase,
    },
    {
      id: 'business-growth',
      title: 'Business',
      desc: 'Overcome challenges and grow with clarity.',
      icon: TrendingUp,
    },
    {
      id: 'financial-instability',
      title: 'Finances',
      desc: 'Find stability and financial confidence.',
      icon: Wallet,
    },
    {
      id: 'legal-cases',
      title: 'Legal Cases',
      desc: 'Seek guidance in complex legal matters.',
      icon: Scale,
    },
    {
      id: 'life-decisions',
      title: 'Life Decisions',
      desc: 'Make important choices with peace of mind.',
      icon: Compass,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
            What Can We Help You With?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Where are you seeking clarity on?
          </h2>
        </div>

        {/* 6 Columns Grid with Vertical Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 mt-16 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#EFEBE3]">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <div
                key={cat.id}
                onClick={() => onOpenBooking({ serviceName: `${cat.title} Consultation`, practitioner: 'HimaniK Dograa' })}
                className="pt-6 sm:pt-0 sm:px-3 space-y-3 flex flex-col items-center group cursor-pointer"
              >
                <div className="text-[#083B40] group-hover:text-[#1B6B75] transition-colors pb-1">
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                <h3 className="text-base font-bold text-[#083B40] leading-snug group-hover:text-[#1B6B75] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-[#6B7C7E] font-normal leading-relaxed max-w-[170px]">
                  {cat.desc}
                </p>
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
            <span>Explore All Concerns</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
