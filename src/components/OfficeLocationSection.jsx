import React from 'react';
import { Video, MapPin, Navigation, Phone, MessageCircle, ArrowRight, Shield, Globe, Clock } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/siteContent';
import { CONTACT_INFO } from '../data/bookingLinks';

export default function OfficeLocationSection({ onOpenBooking }) {
  const mapEmbedUrl = "https://maps.google.com/maps?q=64%20Block%20L%20Sector%2025%20NOIDA%20201301%20India&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=64+Block+L+Sector+25+NOIDA+201301+India";

  return (
    <section id="connect-office" className="py-20 lg:py-28 bg-[#F9F7F1] text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-[#1B6B75] font-bold block">
            HOW TO CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40] tracking-tight">
            Connect Online or Meet In-Person
          </h2>
          <p className="text-sm sm:text-base text-[#6B7C7E] font-normal leading-relaxed">
            Whether you seek instant clarity from anywhere across the globe or prefer a private face-to-face consultation at our sanctuary.
          </p>
        </div>

        {/* Two-Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* BOX 1: ONLINE SESSION (Dark Emerald / Teal Luxury Card) */}
          <div className="bg-gradient-to-br from-[#083B40] via-[#063337] to-[#042427] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden border border-[#0F535B]">
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#C9A84E]/10 blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#C9A84E] shadow-inner border border-white/10">
                  <Video size={26} />
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#C9A84E]/20 text-[#E5C978] border border-[#C9A84E]/30">
                  Global Access
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Book an Online Session
                </h3>
                <p className="text-xs sm:text-sm text-[#C2D7D9] leading-relaxed">
                  Join a private 1-on-1 video consultation from the comfort and complete privacy of your home, anywhere in the world.
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#E2F0F1]">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84E]/20 text-[#C9A84E] flex items-center justify-center flex-shrink-0">
                    <Shield size={12} />
                  </div>
                  <span>100% Confidential • No name or birth chart required</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84E]/20 text-[#C9A84E] flex items-center justify-center flex-shrink-0">
                    <Globe size={12} />
                  </div>
                  <span>Available worldwide across all international timezones</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84E]/20 text-[#C9A84E] flex items-center justify-center flex-shrink-0">
                    <Clock size={12} />
                  </div>
                  <span>Direct answers & unclouded guidance in real-time</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-8 space-y-3 relative z-10">
              <button
                onClick={() => onOpenBooking({ serviceName: 'Online Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' })}
                className="btn-pill-gold w-full text-center justify-center py-3.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Book an Online Session</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 text-[#C2D7D9] hover:text-white text-xs font-medium border border-white/10 transition-colors"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                <span>Pre-Booking Query on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* BOX 2: IN-PERSON OFFICE VISIT & LIVE GOOGLE MAP */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#E8DFC8] flex flex-col justify-between text-left space-y-6">
            
            <div className="space-y-5">
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-[#FAF0D7] flex items-center justify-center text-[#B88E28] shadow-xs">
                  <MapPin size={26} />
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF0D7] text-[#8C6D1F] border border-[#E8DFC8]">
                  In-Person Sanctuary
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#083B40] tracking-tight">
                  Meet Offline at Our Office
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7C7E] leading-relaxed">
                  If you prefer a face-to-face personal consultation, you are welcome to visit our sanctuary in Noida.
                </p>
              </div>

              {/* Address Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F9F7F1] border border-[#EFEBE3] flex items-start gap-3">
                <MapPin size={18} className="text-[#083B40] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-[#083B40] block">
                    Visions By Himani Sanctuary
                  </span>
                  <p className="text-xs text-[#506062] leading-snug">
                    64 (Ground Floor), Block L, Sector 25, NOIDA - 201301, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Live Interactive Google Map */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E5DFD3] shadow-sm bg-gray-100 h-48 sm:h-52 w-full">
                <iframe
                  title="Visions By Himani Office Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Actions: Directions Button & Phone */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-teal w-full sm:w-auto flex-1 text-center justify-center py-3 text-xs sm:text-sm font-semibold shadow-md cursor-pointer"
              >
                <Navigation size={15} />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneNumbers[0]}`}
                className="btn-pill-outline w-full sm:w-auto text-center justify-center py-3 text-xs sm:text-sm font-semibold"
              >
                <Phone size={14} className="text-[#083B40]" />
                <span>Call +91 93192 38007</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
