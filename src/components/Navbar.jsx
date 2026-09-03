import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';

export default function Navbar({ currentPath, onNavigate, onOpenBooking }) {
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
          ? 'bg-white/95 backdrop-blur-md py-3.5 shadow-sm border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <img
                src={BRAND_ASSETS.logoUrl}
                alt="A Divine Talk"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#083B40] group-hover:text-[#0B555A] transition-colors">
                A Divine Talk
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#C9A84E] uppercase font-semibold">
                Heal & Grow
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-[0.9375rem] font-medium transition-colors focus:outline-none ${
                    isActive ? 'text-[#083B40] font-semibold' : 'text-[#4A5B5E] hover:text-[#083B40]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
              className="btn-pill-teal"
            >
              <span>Book Your Session</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#083B40] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 shadow-xl">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleLinkClick('/')}
              className="text-left text-base font-medium text-[#083B40]"
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.path)}
                className="text-left text-base font-medium text-[#4A5B5E] hover:text-[#083B40]"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' });
                }}
                className="btn-pill-teal w-full text-center"
              >
                Book Your Session
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
