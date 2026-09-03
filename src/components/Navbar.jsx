import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Volume2, VolumeX, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';

export default function Navbar({ currentPath, onNavigate, onOpenBooking, isAudioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Founders', path: '/#founders' },
    { label: 'Why ADT?', path: '/why-adt' },
    { label: 'Services', path: '/#services' },
    { label: 'A Sacred Healing', path: '/healing', badge: 'Vertical' },
  ];

  const handleLinkClick = (path) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-sacred-950/85 backdrop-blur-md border-b border-gold-500/20 py-3.5 shadow-xl shadow-sacred-950/20'
          : 'bg-gradient-to-b from-sacred-950/90 via-sacred-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 bg-gradient-to-br from-gold-400/30 to-sacred-700/60 border border-gold-400/40 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src={BRAND_ASSETS.logoUrl}
                alt="A Divine Talk Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                onError={(e) => {
                  // Fallback vector icon if image fails
                  e.target.style.display = 'none';
                }}
              />
              <span className="absolute inset-0 bg-gold-400/10 rounded-full animate-pulse-slow pointer-events-none"></span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl md:text-22px tracking-wide font-medium text-ivory-50 group-hover:text-gold-200 transition-colors">
                A Divine Talk
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gold-400/90 uppercase font-light">
                Heal & Grow
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path === '/' && currentPath === '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-sm tracking-wide font-normal transition-all relative py-1 flex items-center gap-1.5 focus:outline-none ${
                    isActive
                      ? 'text-gold-300 font-medium'
                      : 'text-ivory-200/80 hover:text-gold-200'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-sacred-700 text-gold-300 border border-gold-400/30">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Area: Audio Ambience + Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Ambient Sound Toggle */}
            <button
              onClick={onToggleAudio}
              title={isAudioPlaying ? "Mute Sanctuary Ambience" : "Play Gentle Sanctuary Ambience"}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                isAudioPlaying
                  ? 'bg-gold-500/20 text-gold-300 border-gold-400/40 shadow-[0_0_15px_rgba(201,168,78,0.3)]'
                  : 'bg-sacred-900/60 text-ivory-200/60 border-ivory-200/15 hover:text-gold-200 hover:border-gold-400/30'
              }`}
            >
              {isAudioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Book Your Session Primary CTA */}
            <button
              onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
              className="btn-gold px-5 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-wider flex items-center gap-2 group cursor-pointer"
            >
              <span>Book Your Session</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu & Audio Toggle Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-full border ${
                isAudioPlaying
                  ? 'bg-gold-500/20 text-gold-300 border-gold-400/40'
                  : 'bg-sacred-900/60 text-ivory-200/60 border-ivory-200/15'
              }`}
            >
              {isAudioPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ivory-100 hover:text-gold-300 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-sacred-950/95 backdrop-blur-2xl border-b border-gold-500/30 px-6 py-8 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-5">
            <div className="pb-3 border-b border-sacred-800">
              <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase font-semibold">
                Menu Navigation
              </span>
            </div>
            
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.path)}
                className="text-left font-serif text-2xl text-ivory-100 hover:text-gold-300 transition-colors flex items-center justify-between py-1"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded bg-sacred-800 text-gold-400 border border-gold-500/30">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-6 border-t border-sacred-800/80 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-gold-300/80">
                <ShieldCheck size={14} className="text-gold-400" />
                <span>100% Confidential • Zero Personal Data Required</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' });
                }}
                className="btn-gold w-full py-3 rounded-full text-center text-sm uppercase tracking-wider font-semibold shadow-lg"
              >
                Book Your Divine Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
