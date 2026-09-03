import React, { useState } from 'react';
import { Heart, Briefcase, TrendingUp, DollarSign, Scale, Compass, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CLARITY_CATEGORIES } from '../data/siteContent';

export default function ClaritySelector({ onOpenBooking }) {
  const iconMap = {
    'love-relationships': Heart,
    'career-purpose': Briefcase,
    'business-growth': TrendingUp,
    'financial-instability': DollarSign,
    'legal-cases': Scale,
    'life-decisions': Compass,
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-sacred-950 text-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Areas of Clarity"
          title="Where are you seeking clarity?"
          subtitle="Explore the core life domains where HimaniK's 6th Sense consultation brings unclouded insight and actionable direction."
          theme="dark"
          centered={true}
        />

        {/* Open Editorial Pathways Grid — No Heavy Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mt-16 sm:mt-20">
          {CLARITY_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.id] || Compass;

            return (
              <div
                key={cat.id}
                className="flex flex-col justify-between space-y-4 group text-left"
              >
                <div className="space-y-3">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between pb-2 border-b border-sacred-800">
                    <span className="font-mono text-xs font-semibold text-gold-400">
                      0{idx + 1}
                    </span>
                    <Icon size={20} className="text-ivory-400 group-hover:text-gold-300 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-22px font-semibold text-ivory-50 group-hover:text-gold-200 transition-colors">
                    {cat.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-ivory-300/80 font-normal leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking({ 
                      serviceName: `${cat.title} Consultation`, 
                      practitioner: 'HimaniK Dograa' 
                    })}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group/btn"
                  >
                    <span>Book For This Focus</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Bottom Booking Bar */}
        <div className="mt-16 text-center pt-8 border-t border-sacred-900">
          <button
            onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
            className="btn-primary-gold"
          >
            <span>Book Your Divine Talk Session</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
