import React from 'react';
import { ArrowRight, Play, Shield, Compass, Sparkles, MessageCircle } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';

export default function HeroSection({ onOpenBooking, onScrollToSection }) {
  const categories = [
    "Relationships",
    "Career",
    "Business",
    "Finances",
    "Legal Matters",
    "Life Decisions"
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-[#F9F7F1] text-[#2D3E40] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Small Label */}
            <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
              A Divine Talk
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.12] tracking-tight text-[#083B40]">
              Get Instant Answers. <br />
              <span>Overcome Your Problems.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#506062] font-normal leading-relaxed max-w-xl">
              A private visionary conversation designed to bring clarity to the questions that matter most — without your name, date of birth, or any personal details.
            </p>

            {/* 3 Mini Features Row */}
            <div className="grid grid-cols-3 gap-4 pt-1 max-w-lg">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-white text-[#C9A84E] shadow-sm flex-shrink-0 mt-0.5">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#083B40] block">100% Private</h4>
                  <span className="text-[11px] text-[#6B7C7E] block leading-tight">No personal data</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-white text-[#C9A84E] shadow-sm flex-shrink-0 mt-0.5">
                  <Compass size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#083B40] block">Root-Cause Guidance</h4>
                  <span className="text-[11px] text-[#6B7C7E] block leading-tight">Beyond prediction</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-full bg-white text-[#C9A84E] shadow-sm flex-shrink-0 mt-0.5">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#083B40] block">Your Free Will</h4>
                  <span className="text-[11px] text-[#6B7C7E] block leading-tight">Always respected</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking({ serviceName: '6th Sense Visionary Consultation', practitioner: 'HimaniK Dograa' })}
                className="btn-pill-teal"
              >
                <span>Book Your Divine Talk</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => onScrollToSection('how-it-works')}
                className="btn-pill-outline"
              >
                <span>How It Works</span>
                <div className="w-5 h-5 rounded-full bg-[#083B40] text-white flex items-center justify-center ml-1">
                  <Play size={9} className="ml-0.5 fill-white" />
                </div>
              </button>
            </div>

            {/* Trusted By Pill Tags */}
            <div className="pt-4 space-y-2">
              <span className="text-xs text-[#7A8B8D] font-normal block">
                Trusted by hundreds of individuals seeking clarity in:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => onScrollToSection('services')}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-white text-[#506062] border border-[#E5E0D6] hover:border-[#083B40] hover:text-[#083B40] transition-colors shadow-2xs"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Himani's Portrait with Floating White Card (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Natural Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white aspect-[4/5]">
                <img
                  src={BRAND_ASSETS.himaniHero}
                  alt="HimaniK Dograa"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating White Reassurance Card on Bottom-Left */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-gray-100/80 max-w-[280px] sm:max-w-xs text-left">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#EAF2F3] text-[#1B6B75] flex-shrink-0">
                    <Shield size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-[#083B40] tracking-tight uppercase leading-snug">
                      NO NAME.<br />
                      NO DATE OF BIRTH.<br />
                      NO PERSONAL DETAILS.
                    </h4>
                    <p className="text-[11px] text-[#6B7C7E] font-normal leading-relaxed pt-1">
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
