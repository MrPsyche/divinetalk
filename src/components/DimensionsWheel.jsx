import React, { useState } from 'react';
import { HeartPulse, Heart, Brain, Sparkles, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { FIVE_DIMENSIONS } from '../data/siteContent';

export default function DimensionsWheel() {
  const [activeDimensionId, setActiveDimensionId] = useState(FIVE_DIMENSIONS[0].id);

  const iconMap = {
    HeartPulse: HeartPulse,
    Heart: Heart,
    Brain: Brain,
    Sparkles: Sparkles,
    Compass: Compass,
  };

  const activeDim = FIVE_DIMENSIONS.find((d) => d.id === activeDimensionId) || FIVE_DIMENSIONS[0];
  const ActiveIcon = iconMap[activeDim.icon] || Sparkles;

  return (
    <section className="py-24 sm:py-32 bg-ivory-100 text-sacred-950 relative overflow-hidden border-t border-sacred-200">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Holistic Restoration"
          title="The Five Dimensions of Healing"
          subtitle="Energy healing at A Sacred Healing is not a one-dimensional treatment. We harmonize your entire energetic ecosystem across five interconnected planes of human existence."
          theme="light"
          centered={true}
        />

        {/* Interactive Balance Explorer */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: 5 Interactive Dimension Selector Tabs (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-semibold block px-2 mb-1">
              Select a Plane of Alignment
            </span>

            <div className="space-y-2.5">
              {FIVE_DIMENSIONS.map((dim, index) => {
                const DimIcon = iconMap[dim.icon] || Sparkles;
                const isActive = dim.id === activeDimensionId;

                return (
                  <button
                    key={dim.id}
                    onClick={() => setActiveDimensionId(dim.id)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-sacred-900 border-gold-500 text-ivory-50 shadow-xl shadow-sacred-950/20 translate-x-2'
                        : 'bg-ivory-50 border-sacred-200/80 text-sacred-900 hover:border-gold-500/40 hover:bg-ivory-200/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl transition-colors ${
                        isActive
                          ? 'bg-gold-500 text-sacred-950'
                          : 'bg-sacred-100 text-sacred-800 group-hover:bg-gold-100 group-hover:text-gold-800'
                      }`}>
                        <DimIcon size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-medium ${isActive ? 'text-gold-400' : 'text-sacred-500'}`}>
                            0{index + 1}
                          </span>
                          <h4 className={`font-serif text-lg sm:text-xl font-medium ${isActive ? 'text-ivory-50' : 'text-sacred-950'}`}>
                            {dim.name}
                          </h4>
                        </div>
                        <span className={`text-xs block ${isActive ? 'text-gold-200/70' : 'text-sacred-700/70'}`}>
                          {dim.short}
                        </span>
                      </div>
                    </div>

                    <span className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? 'bg-gold-400 scale-125' : 'bg-transparent border border-sacred-300'
                    }`}></span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Central Visual Balance Hub & Detailed Description (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border border-gold-500/30 shadow-2xl shadow-sacred-950/5 relative overflow-hidden">
              
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sacred-600/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-6">
                
                {/* Header of Active Dimension */}
                <div className="flex items-center justify-between border-b border-sacred-100 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3.5 rounded-2xl bg-sacred-900 text-gold-300 shadow-md">
                      <ActiveIcon size={26} />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-semibold block">
                        Dimension Focus
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-sacred-950 font-normal">
                        {activeDim.name} Plane
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-sacred-100 text-sacred-800 font-serif italic border border-sacred-200">
                    Sacred Healing
                  </span>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-sacred-800/90 font-light leading-relaxed">
                  {activeDim.description}
                </p>

                {/* Harmonization Matrix */}
                <div className="p-5 rounded-2xl bg-sacred-900 text-ivory-100 border border-gold-500/30 space-y-3">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                    Key Restorative Effects:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ivory-200/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-gold-400 flex-shrink-0" />
                      <span>Release of accumulated somatic stress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-gold-400 flex-shrink-0" />
                      <span>Subconscious fear pattern clearing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-gold-400 flex-shrink-0" />
                      <span>Aura sealing & boundary reinforcement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-gold-400 flex-shrink-0" />
                      <span>Restoration of effortless flow & peace</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-sacred-600 font-light flex items-center justify-between">
                  <span>Integrated with Sacred Sleep, Cord Cutting & Stress Release</span>
                  <span className="text-gold-700 font-serif italic">Complete Balance</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
