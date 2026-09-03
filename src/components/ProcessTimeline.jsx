import React from 'react';
import { ArrowRight, Calendar, MessageSquare, Compass } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { HOW_IT_WORKS_STEPS } from '../data/siteContent';

export default function ProcessTimeline({ onOpenBooking }) {
  const iconMap = {
    '01': Calendar,
    '02': MessageSquare,
    '03': Compass,
  };

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-ivory-200 text-sacred-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Simple 3-Step Journey"
          title="You Don't Need to Explain Everything."
          subtitle="No complex questionnaires, no horoscope charts, and no intrusive history required. Experience how straightforward authentic guidance truly is."
          theme="light"
          centered={true}
        />

        {/* 3-Step Open Journey Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-20 relative">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const StepIcon = iconMap[step.step] || Compass;

            return (
              <div
                key={step.step}
                className="space-y-4 text-left"
              >
                <div className="flex items-center justify-between pb-3 border-b border-sacred-300">
                  <span className="font-mono text-3xl font-semibold text-gold-600">
                    {step.step}
                  </span>
                  <StepIcon size={22} className="text-sacred-700" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-700 block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl font-semibold text-sacred-950">
                    {step.title}
                  </h3>
                </div>

                <p className="text-base text-sacred-800/80 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenBooking({ serviceName: '6th Sense Consultation', practitioner: 'HimaniK Dograa' })}
            className="btn-primary-teal"
          >
            <span>Book Your Divine Talk</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
