import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';

export default function FoundersSection({ onOpenBooking, onNavigateHealing }) {
  return (
    <section id="founders" className="py-20 lg:py-28 bg-white text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
            Meet the Founders
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            The People Behind A Divine Talk
          </h2>
          <p className="text-sm text-[#506062] font-normal leading-relaxed">
            A shared vision to create a space where clarity, healing, and growth come together to help you live a more aligned and empowered life.
          </p>
        </div>

        {/* 2 Founders Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 text-left">
          
          {/* Card 1: HimaniK Dograa */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-36 sm:w-44 aspect-[4/5] rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-white">
              <img
                src={BRAND_ASSETS.himaniFounders}
                alt="HimaniK Dograa"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2.5">
              <div>
                <h3 className="text-xl font-bold text-[#083B40]">
                  HimaniK Dograa
                </h3>
                <span className="text-xs font-semibold text-[#1B6B75] uppercase tracking-wider block mt-0.5">
                  The Visionary
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#506062] font-normal leading-relaxed">
                HimaniK is the heart of A Divine Talk. A gifted intuitive with a rare ability to perceive truth and provide clarity. Her visionary insights help you understand the real situation and find the right path forward.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation', practitioner: 'HimaniK Dograa' })}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] transition-colors"
                >
                  <span>Learn more about HimaniK</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Karan Dogra */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-36 sm:w-44 aspect-[4/5] rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-white">
              <img
                src={BRAND_ASSETS.karanFounders}
                alt="Karan Dogra"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2.5">
              <div>
                <h3 className="text-xl font-bold text-[#083B40]">
                  Karan Dogra
                </h3>
                <span className="text-xs font-semibold text-[#1B6B75] uppercase tracking-wider block mt-0.5">
                  The Strategic Mind & Healer
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#506062] font-normal leading-relaxed">
                Karan leads the technology and operations behind A Divine Talk and also offers transformative energy healing experiences through A Sacred Healing to restore balance and inner peace.
              </p>

              <div className="pt-2">
                <button
                  onClick={onNavigateHealing}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] transition-colors"
                >
                  <span>Explore Sacred Healing</span>
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
