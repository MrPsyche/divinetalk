import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';

export default function HeroSection({ onOpenBooking, onScrollToSection }) {
  return (
    <section className="relative min-h-[88vh] flex items-center pt-32 pb-20 lg:py-36 bg-sacred-950 text-ivory-100 overflow-hidden">
      
      {/* Subtle Atmospheric Light */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-sacred-600/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] rounded-full bg-gold-500/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Small Label */}
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold block">
              A Divine Talk
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-semibold leading-[1.12] tracking-tight text-ivory-50">
              Get Instant Answers. <br />
              <span className="text-gold-accent font-medium">Overcome Your Problems.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-ivory-200/85 font-normal leading-relaxed max-w-2xl">
              A private visionary conversation designed to bring clarity to the questions that matter most — without requiring your name, date of birth, or personal details.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking({ serviceName: '6th Sense Visionary Consultation', practitioner: 'HimaniK Dograa' })}
                className="btn-primary-gold"
              >
                <span>Book Your Divine Talk</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onScrollToSection('how-it-works')}
                className="btn-ghost-dark"
              >
                <Play size={14} className="text-gold-400 fill-gold-400" />
                <span>How It Works</span>
              </button>
            </div>

            {/* Simple Subtext */}
            <div className="pt-4 text-xs text-ivory-400 font-normal tracking-wide">
              Love & Relationships • Career & Purpose • Business • Finances • Legal Matters • Life Decisions
            </div>

          </div>

          {/* Right Column: Himani's Portrait with Integrated Privacy Statement (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Natural Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-sacred-900">
                <div className="aspect-[4/5] relative">
                  <img
                    src={BRAND_ASSETS.himaniHero}
                    alt="HimaniK Dograa — Lead Visionary & Guide"
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Subtle Gradient at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sacred-950/80 via-transparent to-transparent"></div>
                  
                  {/* Integrated Signature Brand Statement */}
                  <div className="absolute bottom-6 inset-x-6 p-5 rounded-xl bg-sacred-950/85 backdrop-blur-md">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-semibold block mb-1">
                      Pure Intuitive Connection
                    </span>
                    <p className="text-sm font-semibold text-ivory-50 tracking-wide">
                      NO NAME. NO DATE OF BIRTH. NO PERSONAL DETAILS.
                    </p>
                    <p className="text-xs text-ivory-300/80 font-normal mt-1">
                      Himani’s visionary gift reveals your solutions instantly through direct energetic perception.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
