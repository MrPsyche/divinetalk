import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_ASSETS } from '../data/siteContent';
import { CONTACT_INFO } from '../data/bookingLinks';

export default function Footer({ onNavigate, onOpenBooking }) {
  return (
    <footer className="bg-[#052F33] text-white pt-16 pb-10 text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#0D464B]">
          
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src={BRAND_ASSETS.logoUrl}
                  alt="A Divine Talk"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  A Divine Talk
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#C9A84E] uppercase font-semibold">
                  Heal & Grow
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C2D7D9] font-normal leading-relaxed max-w-sm pt-1">
              A private space for clarity, healing and growth. You don't have to have everything figured out. You just need a place to begin.
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#C9A84E] font-semibold block mb-2">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C2D7D9]">
              <li>
                <button onClick={() => onNavigate('/#founders')} className="hover:text-white transition-colors">
                  Our Founders
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/why-adt')} className="hover:text-white transition-colors">
                  Why ADT?
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/healing')} className="hover:text-white transition-colors">
                  A Sacred Healing
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })} className="hover:text-[#C9A84E] transition-colors">
                  Book Your Session
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#C9A84E] font-semibold block mb-2">
              Services
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C2D7D9]">
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-white transition-colors">
                  Love & Relationships
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-white transition-colors">
                  Career & Purpose
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-white transition-colors">
                  Business
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-white transition-colors">
                  Finances
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-white transition-colors">
                  Legal Cases
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#services')} className="hover:text-white transition-colors">
                  Life Decisions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#C9A84E] font-semibold block mb-2">
              Get in Touch
            </span>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#C2D7D9]">
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#C9A84E] flex-shrink-0" />
                <span>+91 93192 38007</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#C9A84E] flex-shrink-0" />
                <span>+91 95825 64069</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#C9A84E] flex-shrink-0" />
                <a href="mailto:admin@adivinetalk.com" className="hover:text-white underline decoration-white/30">
                  admin@adivinetalk.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin size={14} className="text-[#C9A84E] flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  64 (Ground Floor), Block L, Sector 25, NOIDA - 201301, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal, Social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BA4A6]">
          <div>
            © 2026 A Divine Talk. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/why-adt')} className="hover:text-white">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('/why-adt')} className="hover:text-white">
              Terms of Service
            </button>
          </div>

          <div className="flex items-center gap-3 text-[#C9A84E]">
            {/* Instagram SVG */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Facebook SVG */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
