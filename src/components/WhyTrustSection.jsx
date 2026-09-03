import React from 'react';
import { ShieldCheck, Eye, Sparkles, UserCheck, ArrowRight, Lock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PILLARS_OF_TRUST } from '../data/siteContent';

export default function WhyTrustSection({ onNavigateWhyAdt }) {
  const iconMap = {
    '01': Lock,
    '02': Eye,
    '03': UserCheck,
    '04': Sparkles,
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory-100 text-sacred-950 relative overflow-hidden border-y border-sacred-200/60">
      
      {/* Background Soft Gradients */}
      <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-sacred-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Why A Divine Talk"
          title="Designed for Deep Trust & Complete Privacy"
          subtitle="We founded A Divine Talk to restore integrity, dignity, and calm reassurance to spiritual consultation. Here is what sets our sanctuary apart."
          theme="light"
          centered={true}
        />

        {/* 4 Pillars Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {PILLARS_OF_TRUST.map((pillar) => {
            const Icon = iconMap[pillar.number] || ShieldCheck;

            return (
              <div
                key={pillar.number}
                className="p-8 rounded-3xl bg-ivory-50 border border-gold-500/20 shadow-lg shadow-sacred-950/5 flex flex-col justify-between hover:shadow-2xl hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl sm:text-4xl text-gold-600 font-light tracking-tight group-hover:text-gold-500 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-sacred-600/10 text-sacred-700 border border-sacred-600/20 group-hover:bg-sacred-700 group-hover:text-gold-300 transition-all">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif text-xl sm:text-22px text-sacred-950 font-medium">
                      {pillar.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-gold-700 font-semibold block mt-0.5">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-sacred-800/80 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="mt-6 pt-4 border-t border-sacred-100 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-sacred-600">
                    {pillar.highlight}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Objection Handling Quote Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-sacred-900 text-ivory-100 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-ivory-50 font-medium">
              Want to understand how a reading works without your birth details?
            </h4>
            <p className="text-xs sm:text-sm text-ivory-200/80 font-light">
              Explore the detailed methodology, Himani's visionary Siddhi, and our core guarantees.
            </p>
          </div>

          <button
            onClick={onNavigateWhyAdt}
            className="btn-gold px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold flex-shrink-0 flex items-center gap-2 group"
          >
            <span>Read Why Choose ADT</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

    </section>
  );
}
