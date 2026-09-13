import React, { useState, useEffect } from 'react';
import { X, Video, MessageCircle, MapPin, ArrowRight, Shield, Sparkles, Navigation } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/siteContent';

export default function EngagementPopup({ onOpenBooking, onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if previously dismissed in this session
    const dismissed = sessionStorage.getItem('vbh_engagement_popup_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (isDismissed || isVisible) return;

      // Trigger after scrolling past 3-4 sections (approx 750px or 35% of page)
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      if (scrollY > 750 || scrollPercent > 30) {
        // Graceful delay before popup opens
        setTimeout(() => {
          const currentDismissed = sessionStorage.getItem('vbh_engagement_popup_dismissed');
          if (currentDismissed !== 'true') {
            setIsVisible(true);
          }
        }, 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('vbh_engagement_popup_dismissed', 'true');
  };

  const handleSelectOnline = () => {
    handleClose();
    onOpenBooking({ 
      serviceName: 'Online Visionary Consultation with Himani', 
      practitioner: 'HimaniK Dograa' 
    });
  };

  const handleSelectWhatsApp = () => {
    handleClose();
    window.open(SOCIAL_LINKS.whatsapp, '_blank', 'noopener,noreferrer');
  };

  const handleSelectOffline = () => {
    handleClose();
    onNavigate('/contact');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E8DFC8] overflow-hidden text-left p-6 sm:p-8 transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#083B40] via-[#C9A84E] to-[#083B40]" />
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8 mb-6">
          <div className="flex items-center gap-1.5 text-[#B88E28]">
            <Sparkles size={15} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold">
              GET INSTANT CLARITY
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#083B40] leading-snug">
            How Would You Like to Connect?
          </h3>
          <p className="text-xs sm:text-sm text-[#6B7C7E]">
            Choose your preferred way to speak with Himani and receive immediate perspective.
          </p>
        </div>

        {/* 3 Action Options */}
        <div className="space-y-3.5 mb-6">
          
          {/* OPTION 1: BOOK ONLINE SESSION */}
          <button
            onClick={handleSelectOnline}
            className="w-full text-left p-4 rounded-2xl bg-gradient-to-r from-[#083B40] to-[#052F33] hover:from-[#0B555A] hover:to-[#083B40] text-white flex items-center justify-between gap-4 transition-all shadow-md group cursor-pointer border border-[#0D5961]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-[#E5C978] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Video size={22} />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white block">
                    Book an Online Session
                  </span>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#C9A84E] text-[#083B40]">
                    Worldwide
                  </span>
                </div>
                <p className="text-[11px] text-[#C2D7D9] leading-tight">
                  Private 1-on-1 video call from home • 100% Confidential
                </p>
              </div>
            </div>
            <ArrowRight size={18} className="text-[#C9A84E] group-hover:translate-x-1 transition-transform flex-shrink-0 mr-1" />
          </button>

          {/* OPTION 2: WHATSAPP QUERY */}
          <button
            onClick={handleSelectWhatsApp}
            className="w-full text-left p-4 rounded-2xl bg-[#E8F8EE] hover:bg-[#D4F4DF] text-[#1E562A] flex items-center justify-between gap-4 transition-all border border-[#A7E8BD] group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#25D366] flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <MessageCircle size={22} />
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-bold text-[#144A20] block">
                  Quick Query on WhatsApp
                </span>
                <p className="text-[11px] text-[#2F6B3C] leading-tight">
                  Chat directly with our support desk for instant assistance
                </p>
              </div>
            </div>
            <ArrowRight size={18} className="text-[#25D366] group-hover:translate-x-1 transition-transform flex-shrink-0 mr-1" />
          </button>

          {/* OPTION 3: MEET IN-PERSON (NOIDA OFFICE) */}
          <button
            onClick={handleSelectOffline}
            className="w-full text-left p-4 rounded-2xl bg-[#FAF8F3] hover:bg-[#F2ECE0] text-[#2D3E40] flex items-center justify-between gap-4 transition-all border border-[#E8DFC8] group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#FAF0D7] flex items-center justify-center text-[#B88E28] flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <MapPin size={22} />
              </div>
              <div className="space-y-0.5">
                <span className="text-sm font-bold text-[#083B40] block">
                  Meet Offline (Noida Office)
                </span>
                <p className="text-[11px] text-[#6B7C7E] leading-tight">
                  64 (Ground Floor), Block L, Sector 25, NOIDA - 201301
                </p>
              </div>
            </div>
            <Navigation size={17} className="text-[#083B40] group-hover:translate-x-1 transition-transform flex-shrink-0 mr-1" />
          </button>

        </div>

        {/* Footer Reassurance */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#7A8B8D]">
          <div className="flex items-center gap-1.5">
            <Shield size={13} className="text-[#C9A84E]" />
            <span>Zero personal data needed</span>
          </div>
          <button
            onClick={handleClose}
            className="text-[#7A8B8D] hover:text-[#083B40] underline font-medium cursor-pointer"
          >
            Maybe later
          </button>
        </div>

      </div>
    </div>
  );
}
