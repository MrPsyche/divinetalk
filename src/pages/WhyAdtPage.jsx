import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Lock, ShieldCheck, Eye, Compass, Feather } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { BRAND_ASSETS, FOUNDERS } from '../data/siteContent';

export default function WhyAdtPage({ onOpenBooking, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 lg:pt-28 bg-ivory-200 text-sacred-950 min-h-screen">
      
      {/* 01: Hero of Why ADT */}
      <section className="relative py-20 sm:py-28 bg-sacred-950 text-ivory-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold block">
            Pure Intuitive Guidance • 100% Privacy
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.12] tracking-tight text-ivory-50">
            Your Path to <span className="text-gold-accent font-medium">Clarity and Confidence.</span>
          </h1>

          <p className="text-base sm:text-lg text-ivory-200/85 font-normal max-w-2xl mx-auto leading-relaxed">
            In a world filled with noise and uncertainty, finding a clear path forward can feel overwhelming. We founded A Divine Talk on a simple truth: genuine spiritual guidance should never require your personal data to be accurate.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking({ serviceName: '6th Sense Visionary Consultation', practitioner: 'HimaniK Dograa' })}
              className="btn-primary-gold"
            >
              <span>Book Your Divine Talk</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="btn-ghost-dark"
            >
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </section>

      {/* 02: Narrative on Why We Don't Ask For Data */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-6 text-left max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold block">
            The Fundamental Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-sacred-950 leading-snug">
            Why should you have to expose your private details just to find direction?
          </h2>
          
          <p className="text-base sm:text-lg text-sacred-800/85 leading-relaxed font-normal">
            When facing acute uncertainty—whether a relationship impasse, career stagnation, legal stress, or financial decisions—traditional astrology and fortune-telling often demand your birth time, family names, and long personal backstories.
          </p>

          <p className="text-base sm:text-lg text-sacred-800/85 leading-relaxed font-normal">
            At A Divine Talk, we believe this approach creates unnecessary friction and compromises your privacy. Authentic visionary intuition does not analyze personal history; it connects directly with the energetic root of your situation.
          </p>
        </div>

        {/* 4 Open Comparison Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-sacred-300">
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-sacred-950 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-gold-600" />
              <span>Zero Personal Information</span>
            </h4>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
              No date of birth, time of birth, birth chart, or family history required.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-sacred-950 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-gold-600" />
              <span>Instant Visionary Insight</span>
            </h4>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
              Visions and root causes appear the moment your question is stated.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-sacred-950 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-gold-600" />
              <span>Real Root-Cause Solutions</span>
            </h4>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
              Practical, grounded advice rather than fear-based fatalistic predictions.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-sacred-950 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-gold-600" />
              <span>Full Free Will & Agency</span>
            </h4>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
              Guidance illuminates your path so you make empowered decisions.
            </p>
          </div>
        </div>
      </section>

      {/* 03: Meet Himani Story */}
      <section className="py-20 bg-ivory-100 border-y border-sacred-300">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl bg-sacred-900">
                <img
                  src={BRAND_ASSETS.himaniFounders}
                  alt="HimaniK Dograa"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold block">
                The Guiding Mind
              </span>
              <h3 className="text-3xl font-semibold text-sacred-950">
                Himani’s Innate Spiritual Gift
              </h3>
              
              <p className="text-base text-sacred-800/85 leading-relaxed font-normal">
                Himani founded A Divine Talk with a clear purpose: to provide a pure and compassionate space for spiritual guidance. Her kind demeanor and powerful visionary gift have helped countless individuals find their way through life's most challenging moments.
              </p>

              <p className="text-base text-sacred-800/85 leading-relaxed font-normal">
                Her ability is recognized as a <strong>Siddhi</strong>—an intuitive faculty to perceive visions and root causes without tools or prior data. Rather than creating dependency, her focus is on awakening your own confidence.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ serviceName: 'Divine Talk with Himani', practitioner: 'HimaniK Dograa' })}
                  className="btn-primary-teal"
                >
                  <span>Schedule Consultation with Himani</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04: The 4 Core Guarantees */}
      <section className="py-24 sm:py-32 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          badge="Our Guarantees"
          title="Why Choose A Divine Talk?"
          subtitle="The difference is in our approach. We believe that your solutions are already within you, waiting to be revealed."
          theme="light"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 text-left">
          
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-sacred-950">
              100% Privacy Guaranteed
            </h4>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
              We require zero personal information—not even your date of birth. Our focus is purely on the energetic connection, never on data collection.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-sacred-950">
              Unrivaled Clarity
            </h4>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
              We go beyond predictions. Himani's visionary gift is about solving your problems by giving you actionable clarity to move forward with confidence.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-sacred-950">
              Real Solutions
            </h4>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
              You won't leave with more questions or fear. You'll leave with peace of mind and an understanding of the steps to take to unlock your true potential.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-sacred-950">
              Seamless & Simple
            </h4>
            <p className="text-sm text-sacred-800/80 leading-relaxed font-normal">
              Our process is straightforward and respectful. No forms, no complicated procedures. Just a calm, private, divine talk.
            </p>
          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-20 pt-12 border-t border-sacred-300 text-center space-y-4">
          <h3 className="text-3xl font-semibold text-sacred-950">
            Ready for Your Divine Talk?
          </h3>
          <p className="text-base text-sacred-800/80 font-normal max-w-xl mx-auto">
            Your journey to clarity and solved problems is just a divine talk away.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation', practitioner: 'HimaniK Dograa' })}
              className="btn-primary-teal"
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
