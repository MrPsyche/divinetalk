import React from 'react';
import { Calendar, MessageSquare, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
      
      {/* Background Subtle Line Art */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0B555A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Simple 3-Step Process"
          title="You Don't Need to Explain Everything."
          subtitle="No complex questionnaires, no astrology charts, and no intrusive history required. Experience how straightforward authentic guidance truly is."
          theme="light"
          centered={true}
        />

        {/* Horizontal Process Steps on Desktop / Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 mt-16 sm:mt-20 relative">
          
          {/* Subtle Connecting Line on Desktop */}
          <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-[1.5px] bg-gradient-to-r from-sacred-600/20 via-gold-500/50 to-sacred-600/20 z-0"></div>

          {HOW_IT_WORKS_STEPS.map((step) => {
            const StepIcon = iconMap[step.step] || Compass;

            return (
              <div
                key={step.step}
                className="relative z-10 p-8 rounded-3xl bg-ivory-50 border border-gold-500/20 shadow-xl shadow-sacred-950/5 flex flex-col justify-between hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-sacred-900 text-gold-300 flex items-center justify-center font-serif text-xl border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-sacred-950 transition-colors shadow-md">
                      {step.step}
                    </div>
                    <div className="p-2.5 rounded-xl bg-sacred-600/10 text-sacred-700">
                      <StepIcon size={20} />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-semibold block">
                      {step.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-sacred-950 font-medium mt-0.5">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-sm text-sacred-800/80 leading-relaxed font-light">
                    {step.description}
                  </p>

                </div>

                <div className="pt-6 mt-6 border-t border-sacred-100 flex items-center gap-2 text-xs text-sacred-600 font-medium">
                  <CheckCircle2 size={14} className="text-gold-600" />
                  <span>Effortless & 100% Confidential</span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Process Booking CTA Box */}
        <div className="mt-16 text-center space-y-4">
          <button
            onClick={() => onOpenBooking({ serviceName: '6th Sense Consultation', practitioner: 'HimaniK Dograa' })}
            className="btn-gold px-9 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold inline-flex items-center gap-3 shadow-xl"
          >
            <span>Book Your Divine Talk Now</span>
            <ArrowRight size={16} />
          </button>
          <p className="text-xs text-sacred-700/70 font-light">
            Convenient live session • Safe & private from the comfort of your home
          </p>
        </div>

      </div>

    </section>
  );
}
