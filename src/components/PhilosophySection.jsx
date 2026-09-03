import React from 'react';
import { Compass, Sparkles, Feather, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function PhilosophySection({ onNavigateWhyAdt }) {
  return (
    <section className="py-24 sm:py-32 bg-ivory-200 text-sacred-950 relative overflow-hidden">
      
      {/* Background Subtle Watermark Lotus/Geometry Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-sacred-600/5 via-gold-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="The Philosophy"
          title="Some answers don’t need more information. They need a clearer perspective."
          subtitle="In an overwhelmed world, we often believe that solving our problems requires collecting more data, consulting more horoscopes, or telling endless backstories. But true clarity begins when we see the root cause."
          theme="light"
          centered={true}
        />

        {/* Editorial 3-Column Narrative Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16 sm:mt-20">
          
          {/* Narrative Pillar 1: Root Causes */}
          <div className="p-8 rounded-3xl bg-ivory-50 border border-gold-500/20 shadow-xl shadow-sacred-950/5 flex flex-col justify-between group hover:border-gold-500/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sacred-600/10 text-sacred-700 flex items-center justify-center border border-sacred-600/20 group-hover:scale-105 transition-transform">
                <Compass size={22} className="text-sacred-700" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold block">
                01 • Beyond Surface Symptoms
              </span>
              <h3 className="font-serif text-2xl text-sacred-950 font-medium">
                The Root-Cause Principle
              </h3>
              <p className="text-sm sm:text-base text-sacred-800/80 leading-relaxed font-light">
                A stalled promotion, a fracturing relationship, or persistent financial blocks are rarely isolated incidents. They are surface symptoms of deeper, unseen energetic patterns. We reveal the core 'why' so the entire structure shifts.
              </p>
            </div>
            <div className="pt-6 border-t border-sacred-100 text-xs font-serif italic text-sacred-600">
              "Address the root, and the symptoms dissolve."
            </div>
          </div>

          {/* Narrative Pillar 2: Zero Data / Pure Connection */}
          <div className="p-8 rounded-3xl bg-sacred-900 text-ivory-100 border border-gold-500/30 shadow-2xl shadow-sacred-950/20 flex flex-col justify-between group hover:border-gold-400 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-300 flex items-center justify-center border border-gold-500/30 group-hover:scale-105 transition-transform">
                <Feather size={22} className="text-gold-300" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                02 • Radical Privacy
              </span>
              <h3 className="font-serif text-2xl text-ivory-50 font-medium">
                Zero Personal Data Needed
              </h3>
              <p className="text-sm sm:text-base text-ivory-200/80 leading-relaxed font-light">
                Authentic visionary ability does not require reading your biography or analyzing astrological charts. It is an immediate, intuitive perception between souls. You never have to surrender your personal privacy to receive profound guidance.
              </p>
            </div>
            <div className="pt-6 border-t border-sacred-800 text-xs font-serif italic text-gold-300 relative z-10">
              "No birth details. No questionnaires. 100% Confidential."
            </div>
          </div>

          {/* Narrative Pillar 3: Empowered Sovereignty */}
          <div className="p-8 rounded-3xl bg-ivory-50 border border-gold-500/20 shadow-xl shadow-sacred-950/5 flex flex-col justify-between group hover:border-gold-500/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sacred-600/10 text-sacred-700 flex items-center justify-center border border-sacred-600/20 group-hover:scale-105 transition-transform">
                <ShieldCheck size={22} className="text-sacred-700" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold block">
                03 • Personal Sovereignty
              </span>
              <h3 className="font-serif text-2xl text-sacred-950 font-medium">
                Guidance Over Fate
              </h3>
              <p className="text-sm sm:text-base text-sacred-800/80 leading-relaxed font-light">
                We reject fatalistic predictions that leave you feeling powerless. Guidance is not destiny—it is illumination. We provide you with the wisdom, perspective, and clarity needed to exercise your own free will and shape your outcome.
              </p>
            </div>
            <div className="pt-6 border-t border-sacred-100 text-xs font-serif italic text-sacred-600">
              "Your future remains in your own hands."
            </div>
          </div>

        </div>

        {/* Read More on Why ADT Link */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateWhyAdt}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-sacred-800 hover:text-gold-700 font-semibold transition-colors group"
          >
            <span>Discover What Makes A Divine Talk Truly Different</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-gold-600" />
          </button>
        </div>

      </div>

    </section>
  );
}
