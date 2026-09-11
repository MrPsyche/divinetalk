import React from 'react';
import { ArrowRight, Play, Shield, Zap, Leaf } from 'lucide-react';
import { HERO_CONTENT, BRAND_ASSETS } from '../data/siteContent';

export default function HeroSection({ onOpenBooking, onScrollToSection }) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-36 lg:pb-28 bg-[#F9F7F1] text-[#2D3E40] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-left">
            
            {/* Small Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#1B6B75] font-semibold block">
                {HERO_CONTENT.eyebrow}
              </span>
              <span className="text-[10px] text-[#A0884A] font-medium bg-[#FAF0D7] px-2.5 py-0.5 rounded-full border border-[#E9D9B2]">
                Formerly A Divine Talk
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.6rem] font-bold leading-[1.18] sm:leading-[1.12] tracking-tight text-[#083B40]">
              Get Instant Clarity. <br className="hidden sm:inline" />
              <span className="text-[#083B40]">Move Forward With Confidence.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#506062] font-normal leading-relaxed max-w-xl">
              {HERO_CONTENT.subheadline}
            </p>

            {/* 3 Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-1 max-w-lg">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-[#FAF0D7] text-[#B88E28] shadow-xs flex-shrink-0 mt-0.5">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#083B40] uppercase tracking-wider block">IMMEDIATE GUIDANCE</h4>
                  <span className="text-[11px] text-[#6B7C7E] block leading-tight">Instant perception</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-[#FAF0D7] text-[#B88E28] shadow-xs flex-shrink-0 mt-0.5">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#083B40] uppercase tracking-wider block">100% PRIVATE</h4>
                  <span className="text-[11px] text-[#6B7C7E] block leading-tight">Zero data needed</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-[#FAF0D7] text-[#B88E28] shadow-xs flex-shrink-0 mt-0.5">
                  <Leaf size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#083B40] uppercase tracking-wider block">YOUR FREE WILL</h4>
                  <span className="text-[11px] text-[#6B7C7E] block leading-tight">Always respected</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <button
                onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' })}
                className="btn-pill-teal w-full sm:w-auto text-center"
              >
                <span>Book Your Session</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => onScrollToSection('how-it-works')}
                className="btn-pill-outline w-full sm:w-auto text-center justify-center"
              >
                <span>How It Works</span>
                <div className="w-5 h-5 rounded-full bg-[#083B40] text-white flex items-center justify-center ml-1">
                  <Play size={9} className="ml-0.5 fill-white" />
                </div>
              </button>
            </div>

            {/* Subtext */}
            <div className="pt-1 text-xs text-[#7A8B8D]">
              Direct 1-on-1 consultation with HimaniK • Private • No name or birth chart required
            </div>

          </div>

          {/* Right Column: Portrait of Himani with Borderless Golden Card (White Font) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-md mx-auto lg:mr-0">
              
              {/* Natural Image Container with New Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[4/5]">
                <img
                  src={BRAND_ASSETS.himaniHero}
                  alt="HimaniK Dograa — Lead Visionary"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Golden Reassurance Card: NO BORDER, WHITE FONT, CENTERED ON MOBILE */}
              <div className="absolute -bottom-6 left-3 right-3 sm:left-auto sm:right-auto sm:-left-8 sm:-bottom-6 bg-gradient-to-br from-[#D4AF37] via-[#C9A84E] to-[#B88E28] p-4 sm:p-6 rounded-2xl shadow-2xl text-left text-white max-w-none sm:max-w-xs border-0">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/20 text-white backdrop-blur-xs flex-shrink-0 shadow-xs">
                    <Shield size={20} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-white tracking-wide uppercase leading-snug">
                      NO NAME.<br />
                      NO DATE OF BIRTH.<br />
                      NO PERSONAL DETAILS.
                    </h4>
                    <p className="text-[11px] text-white/95 font-medium leading-relaxed pt-1">
                      Just you, your concern, and a conversation that brings clarity.
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
