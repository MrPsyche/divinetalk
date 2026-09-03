import React, { useEffect } from 'react';
import { Moon, Scissors, Sparkles, HeartPulse, Heart, Brain, Compass, ShieldCheck, CheckCircle2, ArrowRight, Calendar, UserCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import DimensionsWheel from '../components/DimensionsWheel';
import { BRAND_ASSETS, SACRED_HEALING_SERVICES, FOUNDERS } from '../data/siteContent';
import { BOOKING_DESTINATIONS, CONTACT_INFO } from '../data/bookingLinks';

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
    <div className="pt-24 lg:pt-28 bg-obsidian-950 text-ivory-100 min-h-screen">
      
      {/* 01: Immersive Sanctuary Hero */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-sacred-950 via-obsidian-900 to-obsidian-950 overflow-hidden border-b border-gold-500/20">
        
        {/* Ambient Sanctuary Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] aura-glow-sanctuary pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full aura-glow-teal opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Sanctuary Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sacred-900 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-[0.2em] font-medium">
                <HeartPulse size={13} className="text-gold-400" />
                <span>A Dedicated Vertical of A Divine Talk</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-ivory-50">
                Restore Your Core: <br />
                <span className="font-serif italic text-gold-gradient">
                  A Sacred Healing.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gold-200/90 font-serif italic">
                "Heal the Root. Reclaim Your Life. Profound Energy Healing for Modern Stress."
              </p>

              <p className="text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">
                Led by healer Karan Dogra, <strong>A Sacred Healing</strong> offers gentle yet profoundly transformative high-vibrational energy work designed to release the emotional, nervous-system, and physical burdens that weigh you down. Instead of managing stress, we help you dissolve its hidden root causes.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'A Sacred Healing Session', practitioner: 'Karan Dogra' })}
                  className="btn-gold px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Book A Healing Session</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => onNavigate('/')}
                  className="btn-gold-outline px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider"
                >
                  Return to Home
                </button>
              </div>
            </div>

            {/* Right Column: Karan Meditative Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-gold-400/50 shadow-2xl shadow-black/90 bg-sacred-900">
                <img
                  src={BRAND_ASSETS.karanMeditativeHero}
                  alt="Karan Dogra in Meditative Pose"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacred-950 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl glass-dark border border-gold-500/30 text-center">
                  <span className="font-serif text-xl text-ivory-50 font-medium block">
                    Karan Dogra
                  </span>
                  <span className="text-[10px] text-gold-300 uppercase tracking-widest block mt-0.5">
                    Sanctuary Energy Healer
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02: The Importance of Sacred Healing */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-sacred-900/80 border border-gold-500/30 shadow-2xl space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
            Why Energy Healing Matters Now
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-normal">
            The Importance of Sacred Healing
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-ivory-200/85 font-light leading-relaxed">
            <p>
              In today’s fast-moving world, stress does more than cloud your mind—it quietly settles into your body and energy field, showing up as burnout, chronic fatigue, nighttime anxiety, or even unexplained somatic pain.
            </p>
            <p>
              Sleepless nights, emotional agitation, or feeling perpetually stuck in life are not the real problems; they are warning signs of a deeper energetic imbalance within.
            </p>
            <p className="font-serif italic text-lg text-gold-200 pt-1">
              "True well-being is not about quick fixes but about gently addressing the root cause. Healing begins when you give yourself the sacred pause your soul has been asking for."
            </p>
            <p>
              This is more than a session—it is a sanctuary where transformation happens. Supported with unconditional empathy and care, you release hidden burdens, restore balance, and return to a life of clarity, restful sleep, and peace.
            </p>
          </div>
        </div>
      </section>

      {/* 03: The Five Dimensions of Healing (Interactive) */}
      <DimensionsWheel />

      {/* 04: Our Signature Healing Services */}
      <section className="py-24 sm:py-32 bg-sacred-950 text-ivory-100 relative overflow-hidden border-t border-sacred-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SectionHeader
            badge="Signature Modalities"
            title="Our Core Healing Services"
            subtitle="Explore the three dedicated sessions delivered personally by healer Karan Dogra, each targeting specific energetic blockages."
            theme="dark"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {SACRED_HEALING_SERVICES.map((service) => {
              const ServiceIcon = iconMap[service.id] || Sparkles;

              return (
                <div
                  key={service.id}
                  className="p-8 sm:p-10 rounded-3xl bg-sacred-900/90 border border-gold-500/30 shadow-2xl flex flex-col justify-between hover:border-gold-400 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500/10 text-gold-300 flex items-center justify-center border border-gold-500/30 group-hover:scale-105 transition-transform">
                      <ServiceIcon size={26} />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-medium">
                        {service.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block mt-1">
                        {service.tagline}
                      </span>
                    </div>

                    <p className="text-sm text-ivory-200/80 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="p-4 rounded-xl bg-sacred-950/70 border border-sacred-800 text-xs text-ivory-300">
                      <strong className="text-gold-300 block font-medium mb-1">Target Audience:</strong>
                      {service.forWhom}
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] uppercase tracking-widest text-gold-400/90 font-semibold block">
                        Core Benefits:
                      </span>
                      {service.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-ivory-200/80">
                          <CheckCircle2 size={13} className="text-gold-400 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-sacred-800 flex items-center justify-between">
                    <button
                      onClick={() => onOpenBooking({ 
                        serviceName: service.title, 
                        practitioner: 'Karan Dogra',
                        deepLinkKey: service.deepLinkKey 
                      })}
                      className="btn-gold px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-lg"
                    >
                      <span>Book Session</span>
                      <ArrowRight size={14} />
                    </button>

                    <span className="text-xs text-gold-300/80 font-serif italic">
                      Private 1-on-1
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 05: Booking Roadmap & Final Healing CTA */}
      <section className="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-sacred-900 to-sacred-950 border border-gold-500/40 shadow-2xl space-y-8 text-center relative overflow-hidden">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
              Begin Your Restoration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 font-normal">
              Ready to Heal and Thrive?
            </h2>
            <p className="text-sm sm:text-base text-ivory-200/80 font-light leading-relaxed">
              Stop spending your vital energy fighting problems. Start investing in your core peace. The path to a fulfilled, contented, and aligned life begins here.
            </p>
          </div>

          {/* 4-Step Booking Checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left pt-2">
            <div className="p-4 rounded-xl bg-sacred-950/70 border border-gold-500/20 text-xs">
              <span className="font-mono text-gold-400 font-bold block mb-1">01</span>
              <span className="text-ivory-100 font-medium block">Click Book Now</span>
              <span className="text-[11px] text-ivory-400 font-light">Open pre-flight session scheduler</span>
            </div>
            <div className="p-4 rounded-xl bg-sacred-950/70 border border-gold-500/20 text-xs">
              <span className="font-mono text-gold-400 font-bold block mb-1">02</span>
              <span className="text-ivory-100 font-medium block">Select Service</span>
              <span className="text-[11px] text-ivory-400 font-light">Sleep, Cord Cutting, or Stress</span>
            </div>
            <div className="p-4 rounded-xl bg-sacred-950/70 border border-gold-500/20 text-xs">
              <span className="font-mono text-gold-400 font-bold block mb-1">03</span>
              <span className="text-ivory-100 font-medium block">Choose Slot</span>
              <span className="text-[11px] text-ivory-400 font-light">Convenient date and time</span>
            </div>
            <div className="p-4 rounded-xl bg-sacred-950/70 border border-gold-500/20 text-xs">
              <span className="font-mono text-gold-400 font-bold block mb-1">04</span>
              <span className="text-ivory-100 font-medium block">Experience Relief</span>
              <span className="text-[11px] text-ivory-400 font-light">Private 1-on-1 energy session</span>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-4">
            <button
              onClick={() => onOpenBooking({ serviceName: 'A Sacred Healing', practitioner: 'Karan Dogra' })}
              className="btn-gold px-10 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold inline-flex items-center gap-2.5 shadow-2xl"
            >
              <span>Schedule Today & Book Now</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
