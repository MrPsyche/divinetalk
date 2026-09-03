import React from 'react';
import { Moon, Scissors, Sparkles, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { BRAND_ASSETS, SACRED_HEALING_SERVICES } from '../data/siteContent';

export default function SacredHealingPreview({ onNavigateHealing, onOpenBooking }) {
  const iconMap = {
    'sacred-sleep': Moon,
    'trauma-cord-cutting': Scissors,
    'stress-release': Sparkles,
  };

  return (
    <section className="py-24 sm:py-32 bg-obsidian-900 text-ivory-100 relative overflow-hidden border-t border-gold-500/20">
      
      {/* Ambient Sanctuary Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] aura-glow-sanctuary pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full aura-glow-teal opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="A Sacred Healing Sanctuary"
          title="Heal the Root. Reclaim Your Life."
          subtitle="A dedicated energy-healing vertical led by healer Karan Dogra, focusing on profound nervous-system restoration, subconscious clearing, and clearing chronic burnout."
          theme="dark"
          centered={true}
        />

        {/* Intro Split Banner with Karan's Portrait */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-sacred-950/80 border border-gold-500/30 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image: Karan in Meditative Pose */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-gold-400/50 shadow-2xl p-1 bg-sacred-900">
                <img
                  src={BRAND_ASSETS.karanMeditativeHero}
                  alt="Karan Dogra in Meditative Pose"
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute inset-0 rounded-full border border-gold-400/30 animate-pulse-slow"></span>
              </div>
            </div>

            {/* Right Narrative Copy */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sacred-900 text-gold-300 text-xs uppercase tracking-wider font-semibold border border-gold-500/30">
                <HeartPulse size={13} className="text-gold-400" />
                <span>High-Vibrational Energy Restoration</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-normal">
                Beyond Temporary Relief — Touching the Root of Exhaustion
              </h3>
              
              <p className="text-sm sm:text-base text-ivory-200/85 font-light leading-relaxed">
                In today's intense world, stress doesn't just cloud your mind—it settles into your physical nervous system and subtle energy fields. Sleepless nights, emotional agitation, and persistent fatigue are signs that your energetic core is crying out for realignment. Karan Dogra works intuitively to dissolve hidden layers of tension and restore deep, effortless vitality.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onNavigateHealing}
                  className="btn-gold px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Explore A Sacred Healing</span>
                  <ArrowRight size={14} />
                </button>

                <span className="text-xs text-gold-300/80 font-serif italic">
                  "Give yourself the sacred pause your soul has been asking for."
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Healing Modalities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {SACRED_HEALING_SERVICES.map((srv) => {
            const SrvIcon = iconMap[srv.id] || Sparkles;

            return (
              <div
                key={srv.id}
                className="p-8 rounded-3xl bg-sacred-900/70 border border-gold-500/20 shadow-xl flex flex-col justify-between hover:border-gold-400 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-400 flex items-center justify-center border border-gold-500/30 group-hover:scale-105 transition-transform">
                    <SrvIcon size={22} />
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl text-ivory-50 font-medium">
                      {srv.title}
                    </h4>
                    <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block mt-0.5">
                      {srv.tagline}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-ivory-200/80 font-light leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-sacred-950/60 border border-sacred-800 text-xs text-ivory-300/90">
                    <strong className="text-gold-300 block font-medium mb-1">Recommended for:</strong>
                    {srv.forWhom}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-sacred-800 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking({ 
                      serviceName: srv.title, 
                      practitioner: 'Karan Dogra',
                      deepLinkKey: srv.deepLinkKey 
                    })}
                    className="btn-gold-outline px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 hover:bg-gold-500 hover:text-sacred-950 hover:border-gold-400 transition-all"
                  >
                    <span>Book Session</span>
                    <ArrowRight size={13} />
                  </button>

                  <span className="text-[11px] text-ivory-400 font-light">
                    Karan Dogra
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
