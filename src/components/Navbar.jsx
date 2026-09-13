import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_ASSETS, SOCIAL_LINKS } from '../data/siteContent';

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
    { label: 'Why VBH?', path: '/why-vbh' },
    { label: 'Services', path: '/#services' },
    { label: 'Real-Life Situations', path: '/#situations' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-white border border-[#E2DCD2]/80 shadow-xs p-0.5">
              <img
                src={BRAND_ASSETS.logoUrl}
                alt="Visions By Himani"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#083B40] group-hover:text-[#1B6B75] transition-colors leading-tight">
                Visions By Himani
              </span>
              <span className="text-[10px] tracking-[0.18em] text-[#C9A84E] uppercase font-semibold">
                Formerly A Divine Talk
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-sm font-medium transition-colors focus:outline-none cursor-pointer ${
                    isActive ? 'text-[#083B40] font-semibold' : 'text-[#4A5B5E] hover:text-[#083B40]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Social Links & Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 text-[#083B40]/70 mr-1">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#083B40] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#083B40] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#083B40] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
            </div>

            {/* Book CTA */}
            <button
              onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' })}
              className="btn-pill-teal"
            >
              <span>Book Your Session</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center">
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
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 shadow-xl">
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
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking({ serviceName: 'Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' });
                }}
                className="btn-pill-teal w-full text-center"
              >
                Book Your Session
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-[#083B40]">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <span>•</span>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
                <span>•</span>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
