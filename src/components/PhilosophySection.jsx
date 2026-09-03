import React from 'react';
import { ArrowRight, Compass, Feather, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function PhilosophySection({ onNavigateWhyAdt }) {
  return (
    <section className="py-24 sm:py-32 bg-ivory-200 text-sacred-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Our Philosophy"
          title="Some answers don’t need more information. They need a clearer perspective."
          subtitle="In an overwhelmed world, solving our problems doesn't require collecting more birth charts or endless backstories. True clarity begins when we see the root cause."
          theme="light"
          centered={true}
        />

        {/* 3 Open Editorial Columns — No Cards, No Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mt-16 sm:mt-20">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sacred-700">
              <Compass size={24} className="text-sacred-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-700">
                01 • Clarity
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-sacred-950">
              The Root-Cause Principle
            </h3>
            <p className="text-base text-sacred-800/80 leading-relaxed font-normal">
              A stalled career, relationship conflict, or persistent financial blocks are rarely isolated events. They are symptoms of deeper energetic patterns. We reveal the core 'why' so lasting change can occur.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sacred-700">
              <Feather size={24} className="text-gold-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-700">
                02 • Guidance
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-sacred-950">
              Zero Personal Data Required
            </h3>
            <p className="text-base text-sacred-800/80 leading-relaxed font-normal">
              Authentic spiritual intuition does not depend on reading your biography or calculating horoscope charts. It is an immediate intuitive perception, preserving your complete personal privacy.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sacred-700">
              <ShieldCheck size={24} className="text-sacred-600" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-700">
                03 • Growth
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-sacred-950">
              Personal Sovereignty & Free Will
            </h3>
            <p className="text-base text-sacred-800/80 leading-relaxed font-normal">
              Guidance is not fixed destiny. We provide you with unclouded perspective and practical clarity so you can exercise your own free will and shape your outcome with confidence.
            </p>
          </div>

        </div>

        {/* Read More Link */}
        <div className="mt-16 text-center">
          <button
            onClick={onNavigateWhyAdt}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sacred-900 hover:text-gold-700 transition-colors group"
          >
            <span>Learn what makes A Divine Talk different</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
