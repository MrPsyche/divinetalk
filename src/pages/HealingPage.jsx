import React, { useEffect } from 'react';
import { ArrowRight, Moon, Scissors, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import DimensionsWheel from '../components/DimensionsWheel';
import { BRAND_ASSETS, SACRED_HEALING_SERVICES } from '../data/siteContent';

export default function HealingPage({ onOpenBooking, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconMap = {
    'sacred-sleep': Moon,
    'trauma-cord-cutting': Scissors,
    'stress-release': Sparkles,
  };

  return (
    <div className="pt-24 lg:pt-28 bg-sacred-950 text-ivory-100 min-h-screen">
      
      {/* 01: Immersive Sanctuary Hero */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-sacred-950 via-sacred-900 to-sacred-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold block">
                A Sacred Healing Vertical
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-ivory-50">
                Restore Your Core: <br />
                <span className="text-gold-accent font-medium">A Sacred Healing.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gold-200/90 font-normal italic">
                "Heal the Root. Reclaim Your Life. Profound Energy Healing for Modern Stress."
              </p>

              <p className="text-base sm:text-lg text-ivory-200/85 font-normal leading-relaxed">
                Led by healer Karan Dogra, <strong>A Sacred Healing</strong> offers high-vibrational energy work designed to release the emotional, nervous system, and physical burdens that weigh you down. Instead of managing stress, we help you dissolve its hidden root causes.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'A Sacred Healing Session', practitioner: 'Karan Dogra' })}
                  className="btn-primary-gold"
                >
                  <span>Book A Healing Session</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => onNavigate('/')}
                  className="btn-ghost-dark"
                >
                  <span>Return to Home</span>
                </button>
              </div>
            </div>

            {/* Right: Karan Meditative Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-sacred-900 aspect-[4/5]">
                <img
                  src={BRAND_ASSETS.karanMeditativeHero}
                  alt="Karan Dogra in Meditative Pose"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02: The Importance of Sacred Healing Narrative */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-left space-y-6">
        <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
          Why Energy Healing Matters
        </span>
        
        <h2 className="text-3xl sm:text-4xl font-semibold text-ivory-50 leading-snug">
          The Importance of Sacred Healing
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-ivory-200/85 font-normal leading-relaxed">
          <p>
            In today’s fast-moving world, stress does more than cloud your mind—it quietly settles into your body and subtle energy fields, showing up as burnout, chronic fatigue, anxiety, or unexplained tension.
          </p>
          <p>
            Sleepless nights, emotional agitation, or feeling stuck in life are not the real problems; they are signs of a deeper energetic imbalance within.
          </p>
          <p className="text-gold-200 font-normal italic pt-1 border-l-2 border-gold-400 pl-4">
            "True well-being is not about quick fixes but about gently addressing the root cause. Healing begins when you give yourself the sacred pause your soul has been asking for."
          </p>
          <p>
            Supported with love and care, you release hidden burdens, restore balance, and return to a life of clarity, restful sleep, and peace.
          </p>
        </div>
      </section>

      {/* 03: The Five Dimensions of Healing */}
      <DimensionsWheel />

      {/* 04: Our Core Healing Services */}
      <section className="py-24 sm:py-32 bg-sacred-950 text-ivory-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <SectionHeader
            badge="Signature Modalities"
            title="Our Core Healing Services"
            subtitle="Explore the three dedicated sessions delivered personally by healer Karan Dogra."
            theme="dark"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mt-16 sm:mt-20">
            {SACRED_HEALING_SERVICES.map((service, idx) => {
              const Icon = iconMap[service.id] || Sparkles;

              return (
                <div
                  key={service.id}
                  className="space-y-4 flex flex-col justify-between text-left"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-sacred-800">
                      <span className="font-mono text-xs font-semibold text-gold-400">
                        0{idx + 1}
                      </span>
                      <Icon size={20} className="text-ivory-400" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
                        {service.tagline}
                      </span>
                      <h3 className="text-2xl font-semibold text-ivory-50">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-ivory-300/80 font-normal leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 text-xs text-ivory-400">
                      <strong>Recommended for:</strong> {service.forWhom}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-sacred-900">
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

      {/* 05: Booking Roadmap */}
      <section className="py-24 sm:py-32 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
            Begin Your Restoration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50">
            Ready to Heal and Thrive?
          </h2>
          <p className="text-base text-ivory-200/80 font-normal max-w-xl mx-auto">
            Stop spending energy on problems and start investing in your core peace.
          </p>
        </div>

        {/* 4-Step Checklist */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-left pt-4">
          <div>
            <span className="font-mono text-sm text-gold-400 font-semibold block mb-1">01</span>
            <span className="text-sm font-semibold text-ivory-100 block">Click Book</span>
            <span className="text-xs text-ivory-400 font-normal">Choose your session</span>
          </div>
          <div>
            <span className="font-mono text-sm text-gold-400 font-semibold block mb-1">02</span>
            <span className="text-sm font-semibold text-ivory-100 block">Select Service</span>
            <span className="text-xs text-ivory-400 font-normal">Sleep, Cord, or Stress</span>
          </div>
          <div>
            <span className="font-mono text-sm text-gold-400 font-semibold block mb-1">03</span>
            <span className="text-sm font-semibold text-ivory-100 block">Choose Slot</span>
            <span className="text-xs text-ivory-400 font-normal">Convenient time</span>
          </div>
          <div>
            <span className="font-mono text-sm text-gold-400 font-semibold block mb-1">04</span>
            <span className="text-sm font-semibold text-ivory-100 block">Experience Relief</span>
            <span className="text-xs text-ivory-400 font-normal">Private 1-on-1 session</span>
          </div>
        </div>

        <div className="pt-6">
          <button
            onClick={() => onOpenBooking({ serviceName: 'A Sacred Healing', practitioner: 'Karan Dogra' })}
            className="btn-primary-gold"
          >
            <span>Book Your Personalized Session</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
