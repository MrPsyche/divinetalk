import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';
import { CONTACT_INFO, BOOKING_DESTINATIONS } from '../data/bookingLinks';

export default function Footer({ onNavigate, onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sacred-950 text-ivory-200 border-t border-sacred-800/80 relative overflow-hidden">
      
      {/* Top Gold Subtle Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-sacred-800/60">
          
          {/* Col 1: Brand & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full p-1 bg-gradient-to-br from-gold-400/30 to-sacred-700/60 border border-gold-400/40 flex items-center justify-center overflow-hidden">
                <img
                  src={BRAND_ASSETS.logoUrl}
                  alt="A Divine Talk"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl text-ivory-50 font-medium block">
                  A Divine Talk
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase font-light">
                  Heal & Grow
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory-300/80 font-light leading-relaxed max-w-sm pt-2">
              A private, founder-led spiritual guidance studio offering 6th Sense visionary consultations with HimaniK Dograa and energy healing with Karan Dogra.
            </p>

            <div className="p-3 rounded-xl bg-sacred-900/60 border border-gold-500/20 text-xs text-gold-300/90 flex items-center gap-2 max-w-sm">
              <ShieldCheck size={16} className="text-gold-400 flex-shrink-0" />
              <span>100% Privacy Guarantee • Zero Personal Data Required</span>
            </div>
          </div>

          {/* Col 2: Navigation & Verticals (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-ivory-200/80 hover:text-gold-300 transition-colors"
                >
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/#founders')}
                  className="text-ivory-200/80 hover:text-gold-300 transition-colors"
                >
                  Our Founders (Himani & Karan)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/why-adt')}
                  className="text-ivory-200/80 hover:text-gold-300 transition-colors"
                >
                  Why ADT? (Zero-Data Philosophy)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/#services')}
                  className="text-ivory-200/80 hover:text-gold-300 transition-colors"
                >
                  6th Sense Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/healing')}
                  className="text-ivory-200/80 hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <span>A Sacred Healing</span>
                  <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-sacred-800 text-gold-300 border border-gold-400/30">
                    Energy
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
                  className="text-gold-300 hover:text-gold-200 font-medium transition-colors"
                >
                  Book A Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
              Sanctuary Contact & Location
            </span>
            
            <div className="space-y-3 text-xs sm:text-sm text-ivory-200/80 font-light">
              
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="space-x-3">
                  {CONTACT_INFO.phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="hover:text-gold-300 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-gold-300 transition-colors underline decoration-gold-500/30"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* WhatsApp Numbers */}
              <div className="pt-1 flex flex-wrap gap-4 text-xs">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappPreBooking.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300"
                >
                  <MessageCircle size={13} />
                  <span>Pre-Booking WhatsApp: {CONTACT_INFO.whatsappPreBooking}</span>
                </a>
                <span className="text-ivory-400">
                  Rescheduling: {CONTACT_INFO.whatsappRescheduling}
                </span>
              </div>

              {/* Policy note */}
              <div className="text-[11px] text-ivory-400 pt-1">
                {CONTACT_INFO.policy.refunds} {CONTACT_INFO.policy.rescheduling}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400 font-light">
          <div>
            © {new Date().getFullYear()} A Divine Talk (Heal & Grow). All rights reserved.
          </div>

          <div className="text-[11px] text-center sm:text-right text-ivory-500 max-w-lg">
            Spiritual consultations and energy healing sessions are offered for visionary guidance, inner reflection, and energetic restoration.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-sacred-900 border border-sacred-800 text-gold-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors flex items-center gap-1 text-xs"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={14} />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>

      </div>

    </footer>
  );
}
