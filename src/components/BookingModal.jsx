import React from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, ExternalLink, Calendar, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { BOOKING_DESTINATIONS, CONTACT_INFO } from '../data/bookingLinks';
import { BRAND_ASSETS } from '../data/siteContent';

export default function BookingModal({ isOpen, onClose, bookingData }) {
  if (!isOpen) return null;

  // Determine external URL based on context
  const getDestinationUrl = () => {
    if (!bookingData) return BOOKING_DESTINATIONS.DIRECTORY;
    if (bookingData.deepLinkKey && BOOKING_DESTINATIONS[bookingData.deepLinkKey]) {
      return BOOKING_DESTINATIONS[bookingData.deepLinkKey];
    }
    if (bookingData.practitioner === 'Karan Dogra') {
      return BOOKING_DESTINATIONS.KARAN_PROFILE;
    }
    if (bookingData.practitioner === 'HimaniK Dograa') {
      return BOOKING_DESTINATIONS.HIMANI_PROFILE;
    }
    return BOOKING_DESTINATIONS.DIRECTORY;
  };

  const destinationUrl = getDestinationUrl();
  const practitionerName = bookingData?.practitioner || 'HimaniK Dograa';
  const serviceTitle = bookingData?.serviceName || 'Private 6th Sense Visionary Guidance';
  const isHealing = bookingData?.practitioner === 'Karan Dogra' || serviceTitle.toLowerCase().includes('healing') || serviceTitle.toLowerCase().includes('sleep') || serviceTitle.toLowerCase().includes('stress');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-sacred-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-sacred-900 border border-gold-500/30 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden text-ivory-100 z-10 my-8 animate-fadeIn">
        
        {/* Subtle Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-sacred-700 via-gold-400 to-sacred-700"></div>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-sacred-800/80 flex items-start justify-between relative">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-gold-500/10 text-gold-300 border border-gold-500/30">
              <ShieldCheck size={12} className="text-gold-400" />
              <span>Private & Data-Free Session</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-normal mt-1">
              {serviceTitle}
            </h3>
            <p className="text-sm text-ivory-200/70 font-light flex items-center gap-2">
              <span>Guided by</span>
              <strong className="text-gold-300 font-medium">{practitionerName}</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-sacred-800/80 text-ivory-300 hover:text-ivory-50 hover:bg-sacred-700 transition-colors"
            aria-label="Close booking modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6">
          
          {/* Key Differentiator Notice */}
          <div className="p-4 rounded-xl bg-sacred-950/60 border border-gold-500/20 flex gap-3.5 items-start">
            <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 mt-0.5 flex-shrink-0">
              <Lock size={18} />
            </div>
            <div className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
              <strong className="text-gold-300 block font-medium mb-0.5">Zero Personal Information Required</strong>
              You do <span className="underline decoration-gold-400/50 underline-offset-2">not</span> need to provide your full name, date of birth, time of birth, or background notes. The consultation connects directly through intuitive energetic vision.
            </div>
          </div>

          {/* Preparation Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>How To Prepare For Your Session</span>
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm text-ivory-200/80">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Find a quiet, private space with a stable internet connection.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Write down 2–3 key questions or life areas you wish to focus on.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Keep an open mind; no elaborate backstories or explanations needed.</span>
              </li>
            </ul>
          </div>

          {/* Booking System Handoff Explanation */}
          <div className="text-xs text-ivory-300/70 border-t border-sacred-800/80 pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-gold-400" />
              <span>Secure schedule & calendar checkout on <strong>Tealfeed</strong></span>
            </div>
            <div className="text-[11px] text-ivory-400">
              WhatsApp: {CONTACT_INFO.whatsappPreBooking}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider text-sacred-950 font-semibold shadow-lg text-center"
            >
              <span>Continue to Secure Your Session</span>
              <ExternalLink size={16} />
            </a>

            <div className="flex items-center justify-between text-[11px] text-ivory-400 px-2">
              <span>{CONTACT_INFO.policy.refunds}</span>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappPreBooking.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 underline flex items-center gap-1"
              >
                <MessageCircle size={12} />
                <span>Questions? Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
