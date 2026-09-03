import React from 'react';
import { ArrowRight, Moon, Scissors, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { BRAND_ASSETS, SACRED_HEALING_SERVICES } from '../data/siteContent';

export default function SacredHealingPreview({ onNavigateHealing, onOpenBooking }) {
  const iconMap = {
    'sacred-sleep': Moon,
    'trauma-cord-cutting': Scissors,
    'stress-release': Sparkles,
  };

  return (
    <section className="py-24 sm:py-32 bg-sacred-900 text-ivory-100 relative overflow-hidden">
      
      {/* Soft Ambient Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-sacred-600/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="A Sacred Healing Sanctuary"
          title="Heal the Root. Reclaim Your Life."
          subtitle="A dedicated energy-healing vertical led by healer Karan Dogra, focusing on profound nervous-system restoration, subconscious clearing, and relieving chronic burnout."
          theme="dark"
          centered={true}
        />

        {/* Editorial Sanctuary Narrative with Karan's Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-16 sm:mt-20">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-sacred-950 aspect-[4/5]">
              <img
                src={BRAND_ASSETS.karanMeditativeHero}
                alt="Karan Dogra — Healer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-ivory-50">
              Beyond Temporary Relief — Touching the Root of Exhaustion
            </h3>
            
            <p className="text-base sm:text-lg text-ivory-200/85 leading-relaxed font-normal">
              In today's fast-paced world, stress quietly settles into your nervous system and subtle energy field. Sleepless nights, emotional fatigue, and anxiety are warning signs of a deeper energetic imbalance.
            </p>

            <p className="text-base sm:text-lg text-ivory-200/85 leading-relaxed font-normal">
              Karan Dogra works directly on the nervous system and subconscious mind to dissolve accumulated tension, restore restorative sleep, and sever draining energetic cords.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onNavigateHealing}
                className="btn-primary-gold"
              >
                <span>Explore A Sacred Healing</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Healing Chapters — Open Editorial Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mt-20 pt-16 border-t border-sacred-800">
          {SACRED_HEALING_SERVICES.map((service, idx) => {
            const Icon = iconMap[service.id] || Sparkles;

            return (
              <div
                key={service.id}
                className="space-y-4 flex flex-col justify-between text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-sacred-800">
                    <span className="font-mono text-xs font-semibold text-gold-400">
                      CHAPTER 0{idx + 1}
                    </span>
                    <Icon size={20} className="text-ivory-400" />
                  </div>

                  <h4 className="text-xl sm:text-22px font-semibold text-ivory-50">
                    {service.title}
                  </h4>

                  <p className="text-sm text-ivory-300/80 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking({ 
                      serviceName: service.title, 
                      practitioner: 'Karan Dogra',
                      deepLinkKey: service.deepLinkKey 
                    })}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <span>Book Session</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
