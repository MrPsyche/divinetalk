import React from 'react';
import { ArrowRight, Sparkles, Shield, Lock, Eye, Compass, HeartHandshake } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';

export default function HeroSection({ onOpenBooking, onScrollToSection }) {
  const quickTags = [
    "Love & Relationships",
    "Career & Purpose",
    "Business Roadblocks",
    "Financial Flow",
    "Legal Decisions",
    "Insomnia & Stress",
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 bg-sacred-950 overflow-hidden text-ivory-100">
      
      {/* Sacred Ambient Background Lighting & Aura */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full aura-glow-teal pointer-events-none opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full aura-glow-gold pointer-events-none opacity-25"></div>
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-sacred-600/10 blur-[90px] pointer-events-none"></div>

      {/* Subtle Grid / Sacred Line Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C9A84E_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Proposition (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Sacred Subheader Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sacred-900/90 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-[0.25em] font-medium shadow-inner">
              <Sparkles size={13} className="text-gold-400" />
              <span>A Divine Talk • Private Visionary Guidance</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.08] tracking-tight text-ivory-50">
                Get Instant Answers. <br />
                <span className="font-serif italic text-gold-gradient">
                  Overcome Your Problems.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-ivory-200/80 font-light max-w-2xl leading-relaxed pt-2">
                A private visionary conversation designed to bring unclouded clarity to life’s most pressing dilemmas — without asking for your name, date of birth, or personal background.
              </p>
            </div>

            {/* Signature Brand Differentiator Floating Badge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sacred-900/90 via-sacred-850/80 to-sacred-900/90 border border-gold-500/30 shadow-lg backdrop-blur-md max-w-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-gold-300 font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
                  <Shield size={16} className="text-gold-400 flex-shrink-0" />
                  <span>The ADT Signature Promise:</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-ivory-100 tracking-wide font-medium bg-sacred-950/70 px-3 py-1.5 rounded-lg border border-gold-500/20">
                  <span>NO NAME</span>
                  <span className="text-gold-500">•</span>
                  <span>NO DATE OF BIRTH</span>
                  <span className="text-gold-500">•</span>
                  <span>NO DATA</span>
                </div>
              </div>
              <p className="text-xs text-ivory-200/70 mt-2 font-light">
                Himani’s innate 6th Sense perceives solutions directly through intuitive visions, preserving your complete privacy.
              </p>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking({ serviceName: '6th Sense Visionary Consultation', practitioner: 'HimaniK Dograa' })}
                className="btn-gold px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-3 group shadow-xl"
              >
                <span>Book Your Divine Talk</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onScrollToSection('how-it-works')}
                className="btn-gold-outline px-7 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-medium flex items-center justify-center gap-2"
              >
                <span>How It Works</span>
              </button>
            </div>

            {/* Category Pills / Quick Areas of Focus */}
            <div className="pt-4 border-t border-sacred-800/60">
              <span className="text-[11px] uppercase tracking-widest text-gold-400/80 font-medium block mb-2.5">
                Clarity for any life domain:
              </span>
              <div className="flex flex-wrap gap-2">
                {quickTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => onScrollToSection('services')}
                    className="text-xs px-3 py-1 rounded-full bg-sacred-900/60 text-ivory-200/80 border border-sacred-700/50 hover:border-gold-400/50 hover:text-gold-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Founder Portrait Composition with Sacred Aura (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Sacred Halo Frame */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-b from-gold-400/30 via-sacred-700/40 to-gold-500/10 blur-md opacity-70"></div>
              
              {/* Main Portrait Frame with Arch Styling */}
              <div className="relative rounded-[2.2rem] overflow-hidden bg-sacred-900 border border-gold-400/40 shadow-2xl shadow-black/80">
                <div className="aspect-[4/5] relative">
                  <img
                    src={BRAND_ASSETS.himaniHero}
                    alt="HimaniK Dograa — Lead Visionary & Spiritual Guide"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sacred-950 via-sacred-950/20 to-transparent"></div>
                  
                  {/* Floating Founder Caption Card */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl glass-dark border border-gold-400/30 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold">
                            Lead Visionary
                          </span>
                        </div>
                        <h3 className="font-serif text-xl text-ivory-50 font-medium">
                          HimaniK Dograa
                        </h3>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded bg-sacred-800 text-gold-300 border border-gold-500/30 font-serif italic">
                        Siddhi / 6th Sense
                      </span>
                    </div>
                    <p className="text-[11px] text-ivory-200/80 mt-1.5 leading-snug font-light">
                      "A direct, compassionate connection between souls to reveal the hidden truth behind your situation."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Reassurance Stamp Badge */}
              <div className="absolute -top-4 -right-4 bg-sacred-900 border border-gold-400/50 p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                  <Eye size={16} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest text-gold-300 font-semibold">
                    Intuitive Insight
                  </span>
                  <span className="block text-xs font-serif text-ivory-100">
                    Direct Visionary Guidance
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
