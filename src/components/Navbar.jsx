import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';

export default function Navbar({ currentPath, onNavigate, onOpenBooking, isAudioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Founders', path: '/#founders' },
    { label: 'Why ADT?', path: '/why-adt' },
    { label: 'Services', path: '/#services' },
    { label: 'A Sacred Healing', path: '/healing' },
  ];

  const handleLinkClick = (path) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sacred-950/95 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <img
                src={BRAND_ASSETS.logoUrl}
                alt="A Divine Talk"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-semibold tracking-tight text-ivory-50 group-hover:text-gold-300 transition-colors">
                A Divine Talk
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gold-400 uppercase font-medium">
                Heal & Grow
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path === '/' && currentPath === '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-[0.9375rem] font-medium transition-colors relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-gold-300'
                      : 'text-ivory-200/80 hover:text-ivory-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Area: Audio Ambience + Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onToggleAudio}
              title={isAudioPlaying ? "Mute Sanctuary Ambience" : "Play Gentle Sanctuary Ambience"}
              className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
                isAudioPlaying
                  ? 'bg-gold-500/20 text-gold-300'
                  : 'text-ivory-200/60 hover:text-ivory-50'
              }`}
            >
              {isAudioPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            <button
              onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
              className="btn-primary-gold"
            >
              <span>Book Your Session</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Menu & Audio */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-lg ${
                isAudioPlaying ? 'bg-gold-500/20 text-gold-300' : 'text-ivory-200/60'
              }`}
            >
              {isAudioPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-sacred-950 px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.path)}
                className="text-left text-xl font-medium text-ivory-100 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-6 border-t border-sacred-900 flex flex-col gap-3">
              <span className="text-xs text-gold-300/80 font-medium">
                100% Confidential • Zero Personal Data Required
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' });
                }}
                className="btn-primary-gold w-full text-center"
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
