import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';
import { CONTACT_INFO } from '../data/bookingLinks';

export default function Footer({ onNavigate, onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sacred-950 text-ivory-200 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-sacred-900">
          
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src={BRAND_ASSETS.logoUrl}
                  alt="A Divine Talk"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-semibold text-ivory-50 block">
                  A Divine Talk
                </span>
                <span className="text-[10px] tracking-[0.2em] text-gold-400 uppercase font-medium">
                  Heal & Grow
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory-300/80 font-normal leading-relaxed max-w-sm pt-2">
              A private, founder-led spiritual guidance and energy healing sanctuary offering 6th Sense visionary consultations with HimaniK Dograa and energy restoration with Karan Dogra.
            </p>

            <span className="text-xs text-gold-300/80 block pt-1">
              Zero Personal Data Required • 100% Confidential
            </span>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-3 text-sm text-ivory-200/80">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-ivory-50 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/#founders')}
                  className="hover:text-ivory-50 transition-colors"
                >
                  Our Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/why-adt')}
                  className="hover:text-ivory-50 transition-colors"
                >
                  Why ADT?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/#services')}
                  className="hover:text-ivory-50 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/healing')}
                  className="hover:text-ivory-50 transition-colors"
                >
                  A Sacred Healing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
                  className="text-gold-300 hover:text-gold-200 font-medium transition-colors"
                >
                  Book Your Session
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Business Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
              Contact & Sanctuary Location
            </span>
            
            <div className="space-y-3 text-sm text-ivory-200/80 font-normal">
              
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
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

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-gold-300/90">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappPreBooking.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-gold-200"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp: {CONTACT_INFO.whatsappPreBooking}</span>
                </a>
              </div>

              <div className="text-xs text-ivory-400 pt-1">
                {CONTACT_INFO.policy.refunds} {CONTACT_INFO.policy.rescheduling}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400 font-normal">
          <div>
            © {new Date().getFullYear()} A Divine Talk (Heal & Grow). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
