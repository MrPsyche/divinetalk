import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Moon, Compass } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { FOUNDERS } from '../data/siteContent';

export default function FoundersSection({ onOpenBooking, onNavigateHealing }) {
  return (
    <section id="founders" className="py-24 sm:py-32 bg-sacred-950 text-ivory-100 relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full aura-glow-teal opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full aura-glow-gold opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Guiding Minds"
          title="Meet the Founders Behind A Divine Talk"
          subtitle="A harmonious union of visionary spiritual intuition and modern platform infrastructure, dedicated to providing authentic guidance with effortless privacy."
          theme="dark"
          centered={true}
        />

        {/* Dual Split-Screen Editorial Founder Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mt-16 sm:mt-20">
          
          {/* Founder 1: HimaniK Dograa */}
          <div className="p-8 sm:p-10 rounded-3xl bg-sacred-900/90 border border-gold-500/30 shadow-2xl shadow-black/60 flex flex-col justify-between group hover:border-gold-400 transition-all duration-300">
            <div className="space-y-6">
              
              {/* Image & Title Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-sacred-800 pb-6">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-gold-400/60 flex-shrink-0 shadow-lg">
                  <img
                    src={FOUNDERS[0].image}
                    alt={FOUNDERS[0].name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-sacred-900"></span>
                </div>

                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                    {FOUNDERS[0].role}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-medium">
                    {FOUNDERS[0].name}
                  </h3>
                  <p className="text-xs text-gold-300/80 font-serif italic">
                    {FOUNDERS[0].title}
                  </p>
                  <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-sacred-800 text-gold-300 border border-gold-500/20">
                      Siddhi Visionary
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-sacred-800 text-gold-300 border border-gold-500/20">
                      Zero-Data Guidance
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <p className="text-sm sm:text-base text-ivory-200/85 leading-relaxed font-light">
                {FOUNDERS[0].bio}
              </p>

              {/* Quote Block */}
              <div className="p-4 rounded-2xl bg-sacred-950/70 border-l-2 border-gold-400 text-xs sm:text-sm font-serif italic text-gold-200/90 leading-relaxed">
                "{FOUNDERS[0].quote}"
              </div>

              {/* Focus Areas */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold block">
                  Consultation Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {FOUNDERS[0].focusAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-2.5 py-1 rounded-full bg-sacred-800/80 text-ivory-200 border border-sacred-700/60"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-8 mt-6 border-t border-sacred-800 flex items-center justify-between">
              <button
                onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation', practitioner: 'HimaniK Dograa' })}
                className="btn-gold px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-lg"
              >
                <span>{FOUNDERS[0].bookingCta}</span>
                <ArrowRight size={14} />
              </button>
              <span className="text-[11px] text-ivory-400 font-light hidden sm:inline">
                Live 1-on-1 Session
              </span>
            </div>

          </div>

          {/* Founder 2: Karan Dogra */}
          <div className="p-8 sm:p-10 rounded-3xl bg-sacred-900/90 border border-gold-500/30 shadow-2xl shadow-black/60 flex flex-col justify-between group hover:border-gold-400 transition-all duration-300">
            <div className="space-y-6">
              
              {/* Image & Title Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-sacred-800 pb-6">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-gold-400/60 flex-shrink-0 shadow-lg">
                  <img
                    src={FOUNDERS[1].image}
                    alt={FOUNDERS[1].name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-gold-400 rounded-full border-2 border-sacred-900"></span>
                </div>

                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                    {FOUNDERS[1].role}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-medium">
                    {FOUNDERS[1].name}
                  </h3>
                  <p className="text-xs text-gold-300/80 font-serif italic">
                    {FOUNDERS[1].title}
                  </p>
                  <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-sacred-800 text-gold-300 border border-gold-500/20">
                      Platform Strategy
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-sacred-800 text-gold-300 border border-gold-500/20">
                      Sanctuary Energy Healer
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <p className="text-sm sm:text-base text-ivory-200/85 leading-relaxed font-light">
                {FOUNDERS[1].bio}
              </p>

              {/* Quote Block */}
              <div className="p-4 rounded-2xl bg-sacred-950/70 border-l-2 border-gold-400 text-xs sm:text-sm font-serif italic text-gold-200/90 leading-relaxed">
                "{FOUNDERS[1].quote}"
              </div>

              {/* Focus Areas */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold block">
                  Energy Healing Modalities:
                </span>
                <div className="flex flex-wrap gap-2">
                  {FOUNDERS[1].focusAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-2.5 py-1 rounded-full bg-sacred-800/80 text-ivory-200 border border-sacred-700/60"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-8 mt-6 border-t border-sacred-800 flex items-center justify-between">
              <button
                onClick={onNavigateHealing}
                className="btn-gold-outline px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-2 hover:bg-gold-500 hover:text-sacred-950 hover:border-gold-400 transition-all shadow-lg"
              >
                <span>{FOUNDERS[1].bookingCta}</span>
                <ArrowRight size={14} />
              </button>
              <span className="text-[11px] text-ivory-400 font-light hidden sm:inline">
                A Sacred Healing Vertical
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
