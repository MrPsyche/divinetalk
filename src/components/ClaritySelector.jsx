import React, { useState } from 'react';
import { Heart, Briefcase, TrendingUp, DollarSign, Scale, Compass, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CLARITY_CATEGORIES } from '../data/siteContent';

export default function ClaritySelector({ onOpenBooking }) {
  const [selectedId, setSelectedId] = useState(CLARITY_CATEGORIES[0].id);

  const iconsMap = {
    'love-relationships': Heart,
    'career-purpose': Briefcase,
    'business-growth': TrendingUp,
    'financial-instability': DollarSign,
    'legal-cases': Scale,
    'life-decisions': Compass,
  };

  const selectedCategory = CLARITY_CATEGORIES.find((c) => c.id === selectedId) || CLARITY_CATEGORIES[0];
  const IconComponent = iconsMap[selectedCategory.id] || Compass;

  return (
    <section id="services" className="py-24 sm:py-32 bg-sacred-950 text-ivory-100 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full aura-glow-gold opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full aura-glow-teal opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Areas of Clarity"
          title="What are you seeking clarity on?"
          subtitle="Select the life domain where you are currently experiencing turmoil, stagnation, or critical decisions. HimaniK's 6th Sense consultation uncovers the energetic root causes."
          theme="dark"
          centered={true}
        />

        {/* Interactive 2-Panel Self-Selection Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16 items-start">
          
          {/* Left Column: Interactive Domain Selector Menu (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-semibold px-2 block mb-1">
              Select Your Current Situation
            </span>
            
            <div className="space-y-2.5">
              {CLARITY_CATEGORIES.map((cat, idx) => {
                const ItemIcon = iconsMap[cat.id] || Compass;
                const isSelected = cat.id === selectedId;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedId(cat.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-sacred-800/90 to-sacred-900 border-gold-400 text-ivory-50 shadow-xl shadow-black/40 translate-x-1.5'
                        : 'bg-sacred-900/40 border-sacred-800/80 text-ivory-200/70 hover:bg-sacred-900/80 hover:border-gold-500/30 hover:text-ivory-100'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl border transition-colors ${
                        isSelected 
                          ? 'bg-gold-500 text-sacred-950 border-gold-400' 
                          : 'bg-sacred-800/70 text-gold-400/80 border-sacred-700/60 group-hover:text-gold-300'
                      }`}>
                        <ItemIcon size={18} />
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-gold-400/80 font-medium">
                            0{idx + 1}
                          </span>
                          <h4 className={`font-serif text-lg sm:text-xl font-medium ${isSelected ? 'text-ivory-50' : 'text-ivory-200'}`}>
                            {cat.title}
                          </h4>
                        </div>
                        <p className="text-xs text-ivory-300/60 font-light truncate max-w-[240px] sm:max-w-xs mt-0.5">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>

                    <ArrowRight 
                      size={16} 
                      className={`transition-all duration-300 ${
                        isSelected 
                          ? 'text-gold-400 translate-x-0 opacity-100' 
                          : 'text-ivory-500 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                      }`} 
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep-Dive Editorial Chapter Showcase (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-sacred-900/90 border border-gold-400/30 shadow-2xl shadow-black/60 relative overflow-hidden backdrop-blur-xl">
              
              {/* Top Chapter Tag & Icon */}
              <div className="flex items-center justify-between border-b border-sacred-800/80 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/30">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                      Chapter Analysis • 6th Sense Guidance
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-normal">
                      {selectedCategory.title}
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-serif italic text-gold-300 bg-sacred-800/80 border border-gold-500/20">
                  Zero Data Required
                </span>
              </div>

              {/* Tagline & Full Editorial Narrative */}
              <div className="space-y-6">
                <p className="font-serif italic text-lg sm:text-xl text-gold-200/90 leading-snug">
                  "{selectedCategory.tagline}"
                </p>

                <p className="text-sm sm:text-base text-ivory-200/85 leading-relaxed font-light">
                  {selectedCategory.fullDesc}
                </p>

                {/* Common Symptoms / Triggers Checklist */}
                <div className="p-5 rounded-2xl bg-sacred-950/60 border border-sacred-800">
                  <span className="text-xs uppercase tracking-widest text-gold-400/90 font-semibold block mb-3 flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>Common Signs & Challenges Addressed</span>
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedCategory.symptoms.map((sym, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-ivory-200/80">
                        <CheckCircle2 size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                        <span>{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expected Outcome */}
                <div className="p-4 rounded-xl bg-sacred-800/40 border border-gold-500/20 text-xs sm:text-sm text-ivory-200/90">
                  <strong className="text-gold-300 font-medium block mb-1">Expected Outcome:</strong>
                  {selectedCategory.outcome}
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    onClick={() => onOpenBooking({ 
                      serviceName: `${selectedCategory.title} Consultation`, 
                      practitioner: 'HimaniK Dograa' 
                    })}
                    className="btn-gold px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 group shadow-xl"
                  >
                    <span>{selectedCategory.ctaText}</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-xs text-ivory-400/80 text-center sm:text-right font-light">
                    Conducted privately with HimaniK Dograa
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
