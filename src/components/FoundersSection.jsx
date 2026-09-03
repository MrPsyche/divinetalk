import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { FOUNDERS, BRAND_ASSETS } from '../data/siteContent';

export default function FoundersSection({ onOpenBooking, onNavigateHealing }) {
  return (
    <section id="founders" className="py-24 sm:py-32 bg-sacred-950 text-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Guiding Minds"
          title="The People Behind A Divine Talk"
          subtitle="A harmonious partnership of visionary spiritual insight and modern platform infrastructure, dedicated to providing authentic guidance with effortless privacy."
          theme="dark"
          centered={true}
        />

        {/* Magazine Editorial Profiles */}
        <div className="space-y-24 mt-20">
          
          {/* Profile 1: HimaniK Dograa */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-sacred-900 aspect-[4/5]">
                <img
                  src={FOUNDERS[0].image}
                  alt="HimaniK Dograa"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                  Lead Visionary & Guiding Light
                </span>
                <h3 className="text-3xl sm:text-4xl font-semibold text-ivory-50">
                  {FOUNDERS[0].name}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-ivory-200/90 leading-relaxed font-normal">
                {FOUNDERS[0].bio}
              </p>

              <blockquote className="border-l-2 border-gold-400 pl-4 py-1 text-base text-gold-200/90 font-normal italic">
                "{FOUNDERS[0].quote}"
              </blockquote>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation', practitioner: 'HimaniK Dograa' })}
                  className="btn-primary-gold"
                >
                  <span>Book a Divine Talk with Himani</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Profile 2: Karan Dogra */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image (5 cols, order reversed on desktop for magazine rhythm) */}
            <div className="lg:col-span-5 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-sacred-900 aspect-[4/5]">
                <img
                  src={BRAND_ASSETS.karanMeditativeHero}
                  alt="Karan Dogra"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7 lg:order-1 space-y-6 text-left">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                  Co-Founder & Energy Healer
                </span>
                <h3 className="text-3xl sm:text-4xl font-semibold text-ivory-50">
                  {FOUNDERS[1].name}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-ivory-200/90 leading-relaxed font-normal">
                {FOUNDERS[1].bio}
              </p>

              <blockquote className="border-l-2 border-gold-400 pl-4 py-1 text-base text-gold-200/90 font-normal italic">
                "{FOUNDERS[1].quote}"
              </blockquote>

              <div className="pt-2">
                <button
                  onClick={onNavigateHealing}
                  className="btn-ghost-dark bg-sacred-800 hover:bg-sacred-700 text-ivory-50"
                >
                  <span>Explore A Sacred Healing</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
