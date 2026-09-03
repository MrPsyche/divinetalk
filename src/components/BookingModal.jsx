import React from 'react';
import { X, CheckCircle2, Lock, ExternalLink, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { BOOKING_DESTINATIONS, CONTACT_INFO } from '../data/bookingLinks';

export default function BookingModal({ isOpen, onClose, bookingData }) {
  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-sacred-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-sacred-900 rounded-2xl shadow-2xl text-ivory-100 z-10 my-8 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-sacred-800 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-400 block">
              Private Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-ivory-50">
              {serviceTitle}
            </h3>
            <p className="text-sm text-ivory-300 font-normal pt-0.5">
              Guided by <strong className="text-gold-300 font-medium">{practitionerName}</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ivory-400 hover:text-ivory-50 hover:bg-sacred-800 transition-colors"
            aria-label="Close booking modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Privacy Reassurance */}
          <div className="p-4 rounded-xl bg-sacred-950 text-xs sm:text-sm text-ivory-200 leading-relaxed space-y-1">
            <div className="flex items-center gap-2 text-gold-300 font-semibold">
              <Lock size={15} />
              <span>Zero Personal Information Required</span>
            </div>
            <p className="text-ivory-300 font-normal">
              You do not need to provide your date of birth, time of birth, or background notes. The consultation connects directly through intuitive visionary perception.
            </p>
          </div>

          {/* Preparation Notes */}
          <div className="space-y-2.5">
            <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
              How To Prepare:
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-ivory-200/90 font-normal">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Find a quiet space where you feel comfortable speaking.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Keep in mind 2–3 specific questions or situations you wish to clarify.</span>
              </li>
            </ul>
          </div>

          {/* Action Button */}
          <div className="space-y-3 pt-2">
            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold w-full text-center"
            >
              <span>Continue to Schedule on Tealfeed</span>
              <ExternalLink size={16} />
            </a>

            <div className="flex items-center justify-between text-[11px] text-ivory-400 pt-1">
              <span>{CONTACT_INFO.policy.refunds}</span>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappPreBooking.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-300 hover:underline"
              >
                Questions? WhatsApp Us
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
