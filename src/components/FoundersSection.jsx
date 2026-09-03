import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_ASSETS, FOUNDERS } from '../data/siteContent';

export default function FoundersSection({ onOpenBooking, onNavigateHealing }) {
  return (
    <section id="founders" className="py-20 lg:py-28 bg-white text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
            Meet the Founders
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            The People Behind A Divine Talk
          </h2>
          <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed">
            A harmonious vision uniting visionary spiritual intuition with modern platform infrastructure, dedicated to creating a safe sanctuary where clarity, healing, and growth empower you to live a fulfilled life.
          </p>
        </div>

        {/* 2 Founders Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-16 text-left">
          
          {/* Card 1: HimaniK Dograa */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-36 sm:w-48 aspect-[4/5] rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-white">
              <img
                src={BRAND_ASSETS.himaniFounders}
                alt="HimaniK Dograa"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl sm:text-22px font-bold text-[#083B40]">
                  {FOUNDERS[0].name}
                </h3>
                <span className="text-xs font-semibold text-[#1B6B75] uppercase tracking-wider block mt-0.5">
                  {FOUNDERS[0].subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#506062] font-normal leading-relaxed">
                HimaniK is the heart and intuitive guiding light of A Divine Talk. Endowed with a rare spiritual visionary gift ('Siddhi'), she perceives the hidden energetic truths and root causes of complex life situations without asking for personal information. Her approach is grounded in deep empathy and empowerment, ensuring that every session equips you with actionable clarity and confidence.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation', practitioner: 'HimaniK Dograa' })}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] transition-colors"
                >
                  <span>Book Consultation with HimaniK</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Karan Dogra */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-36 sm:w-48 aspect-[4/5] rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-white">
              <img
                src={BRAND_ASSETS.karanFounders}
                alt="Karan Dogra"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl sm:text-22px font-bold text-[#083B40]">
                  {FOUNDERS[1].name}
                </h3>
                <span className="text-xs font-semibold text-[#1B6B75] uppercase tracking-wider block mt-0.5">
                  {FOUNDERS[1].subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#506062] font-normal leading-relaxed">
                Karan is the strategic mind behind the A Divine Talk platform and the hands-on practitioner leading 'A Sacred Healing'. With extensive background in technology, operational security, and client privacy, Karan ensures an effortless, confidential experience. As an energy healer, he specializes in nervous system reset, chronic insomnia relief, and severing draining energetic cords.
              </p>

              <div className="pt-2">
                <button
                  onClick={onNavigateHealing}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] transition-colors"
                >
                  <span>Explore A Sacred Healing</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
