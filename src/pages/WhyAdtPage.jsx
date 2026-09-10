import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Leaf, Sparkles } from 'lucide-react';
import { BRAND_ASSETS, WHY_VBH_DIFFERENT, PHILOSOPHY_CONTENT } from '../data/siteContent';

export default function WhyAdtPage({ onOpenBooking, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 lg:pt-28 bg-[#F9F7F1] text-[#2D3E40] min-h-screen">
      
      {/* 01: Hero of Why VBH */}
      <section className="relative py-20 sm:py-28 bg-[#083B40] text-white overflow-hidden text-left">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84E] font-semibold block">
            Pure Intuitive Guidance • 100% Privacy
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight text-white">
            Why Visions By Himani <br />
            <span className="text-[#C9A84E]">Feels Completely Different.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#D0E4E6] font-normal leading-relaxed max-w-2xl">
            In an overwhelmed world, finding clarity doesn't always require lengthy charts, questionnaires or analyzing your history. Sometimes, what you need is a direct conversation that helps you see your situation differently.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' })}
              className="btn-pill-gold"
            >
              <span>Book Your Session</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="btn-pill-outline bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white"
            >
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </section>

      {/* 02: 4 Pillars of Difference */}
      <section className="py-20 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-4 text-left max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
            The VBH Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Authentic guidance without the noise.
          </h2>
          <p className="text-base text-[#506062] leading-relaxed font-normal">
            When facing acute uncertainty — whether in relationships, career, legal disputes, or life choices — traditional astrology and psychic readings often demand extensive personal backgrounds. Here is why VBH is different:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {WHY_VBH_DIFFERENT.map((item, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-white border border-[#EFEBE3] shadow-xs space-y-3">
              <h3 className="text-xl font-bold text-[#083B40] flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#B88E28]" />
                <span>{item.title}</span>
              </h3>
              <p className="text-sm text-[#506062] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 03: Meet Himani Story */}
      <section className="py-20 bg-[#F6F3EC] border-y border-[#E2DCD2]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl bg-white border border-[#E2DCD2]">
                <img
                  src={BRAND_ASSETS.himaniHero}
                  alt="HimaniK Dograa"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
                Primary Practitioner
              </span>
              <h3 className="text-3xl font-bold text-[#083B40]">
                Himani’s Visionary Gift
              </h3>
              
              <p className="text-base text-[#506062] leading-relaxed font-normal">
                Himani’s ability is known as a <strong>Siddhi</strong> — an intuitive faculty to perceive root causes and clear trajectories without tools, cards, or prior data.
              </p>

              <p className="text-base text-[#506062] leading-relaxed font-normal">
                Rather than creating dependence, every consultation is designed to empower your own free will, giving you the unclouded perspective to move forward with peace and confidence.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' })}
                  className="btn-pill-teal"
                >
                  <span>Schedule Consultation with Himani</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
