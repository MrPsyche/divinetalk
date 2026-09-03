import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ClosingCTA({ onOpenBooking, onNavigateHealing }) {
  return (
    <section className="py-28 sm:py-36 bg-sacred-950 text-ivory-100 relative overflow-hidden">
      
      {/* Subtle Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sacred-600/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-8">
        
        <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold block">
          A Divine Talk
        </span>

        {/* Poetic Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.15] tracking-tight text-ivory-50 max-w-3xl mx-auto">
          You don’t need to have everything figured out. <br />
          <span className="text-gold-accent font-medium">You just need a place to begin.</span>
        </h2>
        
        <p className="text-base sm:text-lg text-ivory-200/80 font-normal max-w-xl mx-auto leading-relaxed">
          Step into a private, compassionate space designed to bring unclouded perspective to your life — without judgment, and without collecting your personal data.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking({ serviceName: '6th Sense Visionary Consultation', practitioner: 'HimaniK Dograa' })}
            className="btn-primary-gold"
          >
            <span>Book Your Divine Talk</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onNavigateHealing}
            className="btn-ghost-dark"
          >
            <span>Explore A Sacred Healing</span>
          </button>
        </div>

        {/* Simple Note */}
        <div className="pt-6 text-xs text-ivory-400 font-normal">
          100% Privacy Guaranteed • Zero Personal Data Required
        </div>

      </div>

    </section>
  );
}
