import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle2, ArrowRight, Sparkles, Feather, Compass, MessageCircle, HeartHandshake } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { BRAND_ASSETS, FOUNDERS } from '../data/siteContent';
import { CONTACT_INFO } from '../data/bookingLinks';

export default function WhyAdtPage({ onOpenBooking, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 lg:pt-28 bg-ivory-200 text-sacred-950 min-h-screen">
      
      {/* 01: Hero of Why ADT */}
      <section className="relative py-16 sm:py-24 bg-sacred-950 text-ivory-100 overflow-hidden">
        
        {/* Background Aura */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full aura-glow-teal opacity-25 pointer-events-none"></div>
        <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] rounded-full aura-glow-gold opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sacred-900 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-[0.2em] font-medium">
            <ShieldCheck size={13} className="text-gold-400" />
            <span>Pure Connection • Zero Data Required</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-ivory-50">
            Your Path to <span className="font-serif italic text-gold-gradient">Clarity and Confidence.</span>
          </h1>

          <p className="text-lg sm:text-xl text-ivory-200/80 font-light max-w-2xl mx-auto leading-relaxed">
            In a world filled with noise and uncertainty, finding an unclouded path forward can feel impossible. We founded A Divine Talk on a singular belief: genuine spiritual guidance should never require your personal data to be accurate.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking({ serviceName: '6th Sense Visionary Consultation', practitioner: 'HimaniK Dograa' })}
              className="btn-gold px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-xl"
            >
              Book Your Divine Talk
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="btn-gold-outline px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* 02: Are You Seeking True Answers? (Editorial Storytelling) */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold block">
              The Real Dilemma
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-sacred-950 font-normal leading-snug">
              Why should you have to expose your entire personal life just to find clarity?
            </h2>
            
            <p className="text-sm sm:text-base text-sacred-800/85 leading-relaxed font-light">
              When facing acute crisis—whether a fractured marriage, an overwhelming career stagnation, an unresolvable legal case, or crushing financial uncertainty—most people turn to traditional astrologers or fortune-tellers only to be asked for intimate background details:
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-sacred-700 font-light pl-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>Exact time, place, and date of birth</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>Full names, family histories, and personal relationships</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>Long, exhausting explanations of past trauma</span>
              </li>
            </ul>

            <p className="text-sm sm:text-base text-sacred-900 font-medium leading-relaxed pt-2">
              At A Divine Talk (ADT), we believe this approach is fundamentally backward. True visionary intuition does not rely on biographical data—it reads the energetic essence directly.
            </p>
          </div>

          {/* Right Comparison Box */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-sacred-900 text-ivory-100 border border-gold-500/30 shadow-2xl shadow-sacred-950/20 space-y-6">
            <div className="flex items-center gap-3 border-b border-sacred-800 pb-4">
              <div className="p-2 rounded-xl bg-gold-500/10 text-gold-300">
                <Lock size={20} />
              </div>
              <h3 className="font-serif text-xl text-ivory-50 font-medium">
                The ADT Difference
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-ivory-200/85 font-light">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span><strong>No Personal Info:</strong> No name, DOB, or charts required.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span><strong>Instant Visionary Insight:</strong> Visions appear the moment a question is raised.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span><strong>Root-Cause Solutions:</strong> Clear action plans rather than fear-based prophecies.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span><strong>Total Sovereignty:</strong> You retain complete free will and agency.</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-sacred-950/80 border border-gold-500/20 text-xs font-serif italic text-gold-300 text-center">
              "A pure, direct connection between souls."
            </div>
          </div>

        </div>
      </section>

      {/* 03: Our Visionary, Himani */}
      <section className="py-20 bg-ivory-100 border-y border-sacred-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-sacred-900">
                <img
                  src={BRAND_ASSETS.himaniFounders}
                  alt="HimaniK Dograa"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacred-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 inset-x-3 text-center text-ivory-100">
                  <span className="font-serif text-lg font-medium block">HimaniK Dograa</span>
                  <span className="text-[10px] text-gold-300 uppercase tracking-widest">Founder & Visionary Guide</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5 text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold block">
                Meet the Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-sacred-950 font-normal">
                Himani’s Innate Spiritual Gift
              </h2>
              
              <p className="text-sm sm:text-base text-sacred-800/85 leading-relaxed font-light">
                Himani founded A Divine Talk with a simple goal: to provide a pure and compassionate space for spiritual guidance. Her kind demeanor and powerful visionary gift have helped countless individuals find their way through life's most challenging moments.
              </p>

              <p className="text-sm sm:text-base text-sacred-800/85 leading-relaxed font-light">
                Her ability is recognized in traditional philosophy as a <strong>Siddhi</strong>—an intuitive faculty to perceive visions and root realities without external aids. Rather than creating dependency, she believes that everyone deserves a clear vision for their life and is dedicated to helping you awaken yours.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'Divine Talk with Himani', practitioner: 'HimaniK Dograa' })}
                  className="btn-gold px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Schedule Consultation with Himani</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04: The 4 Core Guarantees of Why Choose ADT */}
      <section className="py-24 sm:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Core Pillars"
          title="Why Choose A Divine Talk?"
          subtitle="The difference is in our approach. We are founded on the principle that your solutions are already within you, waiting to be revealed."
          theme="light"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-ivory-50 border border-gold-500/20 shadow-lg space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sacred-600/10 text-sacred-700">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-serif text-2xl text-sacred-950 font-medium">
                100% Privacy
              </h3>
            </div>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-light">
              We guarantee complete confidentiality. A Divine Talk requires no personal information whatsoever—not even your date of birth. Our focus is purely on the energetic connection, never on data harvesting.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-ivory-50 border border-gold-500/20 shadow-lg space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sacred-600/10 text-sacred-700">
                <Eye size={20} />
              </div>
              <h3 className="font-serif text-2xl text-sacred-950 font-medium">
                Unrivaled Clarity
              </h3>
            </div>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-light">
              We go far beyond predictions. Himani's visionary gift is about solving your problems by giving you the actionable insights and clarity you need to move forward with unshakeable confidence.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-ivory-50 border border-gold-500/20 shadow-lg space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sacred-600/10 text-sacred-700">
                <Compass size={20} />
              </div>
              <h3 className="font-serif text-2xl text-sacred-950 font-medium">
                Real Solutions
              </h3>
            </div>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-light">
              You won't leave with more questions or fear. You'll leave with a sense of profound peace and a clear understanding of the concrete steps you can take to solve your challenges and unlock your potential.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-3xl bg-ivory-50 border border-gold-500/20 shadow-lg space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sacred-600/10 text-sacred-700">
                <Feather size={20} />
              </div>
              <h3 className="font-serif text-2xl text-sacred-950 font-medium">
                Seamless and Simple
              </h3>
            </div>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-light">
              Our process is straightforward and respectful. No forms, no complicated ritual procedures. Just a calm, compassionate, live divine talk from your home.
            </p>
          </div>

        </div>

        {/* Final Page CTA */}
        <div className="mt-16 p-10 rounded-3xl bg-sacred-950 text-ivory-100 text-center border border-gold-500/30 space-y-6 shadow-2xl">
          <h3 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-normal">
            Ready for Your Divine Talk?
          </h3>
          <p className="text-sm sm:text-base text-ivory-200/80 font-light max-w-xl mx-auto leading-relaxed">
            If you are ready to move from uncertainty to clarity, we are here to help. Your journey to a solved problem is just a divine talk away.
          </p>
          <div>
            <button
              onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation', practitioner: 'HimaniK Dograa' })}
              className="btn-gold px-9 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold inline-flex items-center gap-2 shadow-xl"
            >
              <span>Schedule Your Consultation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}
