import React from 'react';
import { Sparkles, Moon, Sun, ArrowRight } from 'lucide-react';
import { SACRED_HEALING_SERVICES } from '../data/siteContent';

export default function SacredHealingPreview({ onNavigateHealing }) {
  const iconMap = {
    'sacred-sleep': Moon,
    'trauma-cord-cutting': Sparkles,
    'stress-release': Sun,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#073E42] text-white relative overflow-hidden">
      
      {/* Background Subtle Lotus Petal Watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84E] font-semibold block">
              A Sacred Healing Vertical
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight text-white">
              Heal the Root. <br />
              Reclaim Your Life.
            </h2>

            <p className="text-sm sm:text-base text-[#D0E4E6] font-normal leading-relaxed">
              Led by healer Karan Dogra, A Sacred Healing offers gentle yet transformative high-vibrational energy work designed to release the emotional and physical burdens that weigh you down. Instead of managing symptoms, we dissolve hidden energetic roots to bring lasting harmony, restorative sleep, and vitality.
            </p>

            <div className="pt-2">
              <button
                onClick={onNavigateHealing}
                className="btn-pill-gold"
              >
                <span>Explore A Sacred Healing</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column (7 cols): 3 Gold Icon Columns with Rich Copy */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {SACRED_HEALING_SERVICES.map((item) => {
              const Icon = iconMap[item.id] || Sparkles;

              return (
                <div key={item.id} className="space-y-3 flex flex-col items-center sm:items-start">
                  <div className="text-[#C9A84E] pb-1">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D0E4E6] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
