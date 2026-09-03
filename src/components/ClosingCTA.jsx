import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';

export default function ClosingCTA({ onOpenBooking, onNavigateHealing }) {
  return (
    <section className="py-28 sm:py-36 bg-sacred-950 text-ivory-100 relative overflow-hidden border-t border-gold-500/20">
      
      {/* Sacred Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] aura-glow-teal opacity-30 pointer-events-none"></div>
      <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] aura-glow-gold opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Sacred Emblems */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sacred-900 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-[0.25em] font-medium shadow-inner">
          <Sparkles size={13} className="text-gold-400" />
          <span>A Divine Talk • Sanctuary of Clarity</span>
        </div>

        {/* Dramatic Poetic Headline */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.12] tracking-tight text-ivory-50 max-w-3xl mx-auto">
            You don’t need to have <br className="hidden sm:inline" />
            <span className="font-serif italic text-gold-gradient">
              everything figured out.
            </span> <br />
            You just need a place to begin.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-ivory-200/80 font-light max-w-xl mx-auto leading-relaxed pt-2">
            Step into a private, compassionate space designed to bring unclouded perspective to your life — without judgment, and without collecting your personal data.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => onOpenBooking({ serviceName: '6th Sense Visionary Consultation', practitioner: 'HimaniK Dograa' })}
            className="btn-gold w-full sm:w-auto px-9 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-3 shadow-2xl group"
          >
            <span>Book Your Divine Talk</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onNavigateHealing}
            className="btn-gold-outline w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-medium flex items-center justify-center gap-2"
          >
            <span>A Sacred Healing</span>
          </button>
        </div>

        {/* Reassurance Footer Details */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory-300/70 font-light border-t border-sacred-800/60 max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-gold-400" />
            <span>100% Privacy Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span>No Birth Details Needed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span>Live 1-on-1 Sanctuary</span>
          </div>
        </div>

      </div>

    </section>
  );
}
