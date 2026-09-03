import React from 'react';
import { Sparkles, Moon, Sun, ArrowRight } from 'lucide-react';

export default function SacredHealingPreview({ onNavigateHealing }) {
  const healingFeatures = [
    {
      title: 'Sacred Sleep Healing',
      desc: 'Rest in a deep, peaceful sleep and wake up energized.',
      icon: Moon,
    },
    {
      title: 'Trauma Cord Cutting',
      desc: 'Release energetic ties and emotional burdens from the past.',
      icon: Sparkles,
    },
    {
      title: 'Stress Release',
      desc: 'Let go of stress, anxiety and feel light, calm and centered.',
      icon: Sun,
    },
  ];

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
              A Sacred Healing
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight text-white">
              Heal the Root. <br />
              Reclaim Your Life.
            </h2>

            <p className="text-sm sm:text-base text-[#D0E4E6] font-normal leading-relaxed">
              Energy-healing experiences designed to restore balance, release what no longer serves you, and help you step into your highest potential.
            </p>

            <div className="pt-2">
              <button
                onClick={onNavigateHealing}
                className="btn-pill-gold"
              >
                <span>Explore Sacred Healing</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column (7 cols): 3 Gold Icon Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {healingFeatures.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div key={idx} className="space-y-3 flex flex-col items-center sm:items-start">
                  <div className="text-[#C9A84E] pb-1">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#D0E4E6] font-normal leading-relaxed">
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
