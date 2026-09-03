import React from 'react';
import { ArrowRight, Lock, Eye, Compass, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PILLARS_OF_TRUST } from '../data/siteContent';

export default function WhyTrustSection({ onNavigateWhyAdt }) {
  const iconMap = {
    '01': Lock,
    '02': Eye,
    '03': Compass,
    '04': Sparkles,
  };

  return (
    <section className="py-24 sm:py-32 bg-ivory-100 text-sacred-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Why A Divine Talk"
          title="Designed for Deep Trust & Complete Privacy"
          subtitle="We established A Divine Talk to restore calm reassurance and true integrity to spiritual consultation. Here is what makes our practice unique."
          theme="light"
          centered={true}
        />

        {/* 4 Pillars in Open Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mt-16 sm:mt-20">
          {PILLARS_OF_TRUST.map((pillar) => {
            const Icon = iconMap[pillar.number] || Sparkles;

            return (
              <div
                key={pillar.number}
                className="space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-sacred-200">
                    <span className="font-mono text-2xl font-semibold text-gold-600">
                      {pillar.number}
                    </span>
                    <Icon size={20} className="text-sacred-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-sacred-950">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 text-xs font-semibold uppercase tracking-wider text-gold-700">
                  {pillar.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-16 text-center">
          <button
            onClick={onNavigateWhyAdt}
            className="btn-primary-teal"
          >
            <span>Explore the Zero-Data Methodology</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
