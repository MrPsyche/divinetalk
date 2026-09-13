import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail, MessageCircle, Navigation, Video, 
  Calendar, Clock, Shield, Globe, Send, CheckCircle, ChevronRight,
  HelpCircle, Compass, Sparkles, AlertCircle
} from 'lucide-react';
import { BRAND_ASSETS, SOCIAL_LINKS } from '../data/siteContent';
import { CONTACT_INFO } from '../data/bookingLinks';
import { saveLead } from '../utils/leadsStorage';

export default function ContactPage({ onOpenBooking, onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mode: 'online', // 'online' | 'offline'
    area: 'Love & Relationships',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapEmbedUrl = "https://maps.google.com/maps?q=64%20Block%20L%20Sector%2025%20NOIDA%20201301%20India&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=64+Block+L+Sector+25+NOIDA+201301+India";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to persistent leads storage for Admin Panel
    saveLead(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        mode: 'online',
        area: 'Love & Relationships',
        message: ''
      });
    }, 6000);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-[#F9F7F1] text-[#2D3E40] min-h-screen">
      
      {/* 01: Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#7A8B8D] mb-4">
          <button onClick={() => onNavigate('/')} className="hover:text-[#083B40] transition-colors cursor-pointer">
            Home
          </button>
          <ChevronRight size={13} />
          <span className="text-[#083B40] font-semibold">Contact & Sanctuary Location</span>
        </div>

        <span className="text-xs uppercase tracking-[0.24em] text-[#1B6B75] font-bold block mb-3">
          GET IN TOUCH & VISIT US
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#083B40] tracking-tight mb-4">
          Connect Online or Visit Our Noida Sanctuary
        </h1>
        <p className="text-sm sm:text-base text-[#6B7C7E] max-w-2xl mx-auto leading-relaxed">
          Whether you seek instant intuitive clarity from anywhere across the globe or prefer a private face-to-face consultation at our office, we are here to welcome you.
        </p>
      </section>

      {/* 02: Dual Experience Cards (Online vs Offline) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Online Consultation */}
          <div className="bg-gradient-to-br from-[#083B40] via-[#063337] to-[#042427] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden border border-[#0F535B]">
            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#C9A84E]/10 blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#C9A84E] shadow-inner border border-white/10">
                  <Video size={28} />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-[#C9A84E]/20 text-[#E5C978] border border-[#C9A84E]/30">
                  Worldwide Access
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Book an Online Session
                </h2>
                <p className="text-xs sm:text-sm text-[#C2D7D9] leading-relaxed">
                  Join a private 1-on-1 direct video consultation from the comfort and complete privacy of your home, anywhere in the world.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#E2F0F1]">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84E]/20 text-[#C9A84E] flex items-center justify-center flex-shrink-0">
                    <Shield size={12} />
                  </div>
                  <span>100% Confidential • No Name or Date of Birth Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84E]/20 text-[#C9A84E] flex items-center justify-center flex-shrink-0">
                    <Globe size={12} />
                  </div>
                  <span>Available globally across all international timezones</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84E]/20 text-[#C9A84E] flex items-center justify-center flex-shrink-0">
                    <Clock size={12} />
                  </div>
                  <span>Direct answers & unclouded guidance in real-time</span>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-3 relative z-10">
              <button
                onClick={() => onOpenBooking({ serviceName: 'Online Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' })}
                className="btn-pill-gold w-full text-center justify-center py-3.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <Calendar size={16} />
                <span>Book an Online Session</span>
              </button>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 text-[#C2D7D9] hover:text-white text-xs font-medium border border-white/10 transition-colors"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>Pre-Booking Query on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: In-Person Noida Office */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#E8DFC8] flex flex-col justify-between text-left space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF0D7] flex items-center justify-center text-[#B88E28] shadow-xs">
                  <MapPin size={28} />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-[#FAF0D7] text-[#8C6D1F] border border-[#E8DFC8]">
                  In-Person Sanctuary
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#083B40] tracking-tight">
                  Meet Us Offline at Our Office
                </h2>
                <p className="text-xs sm:text-sm text-[#6B7C7E] leading-relaxed">
                  If you prefer a face-to-face personal consultation, you are warmly invited to visit our peaceful office sanctuary in Noida.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F7F1] border border-[#EFEBE3] space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#083B40] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#083B40] block uppercase tracking-wide">
                      Office Address
                    </span>
                    <p className="text-xs sm:text-sm text-[#2D3E40] font-medium leading-relaxed pt-0.5">
                      64 (Ground Floor), Block L, Sector 25, NOIDA - 201301, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#7A8B8D] pt-1 border-t border-gray-200/60">
                  <Clock size={14} className="text-[#C9A84E] flex-shrink-0" />
                  <span>Visiting Hours: Mon – Sat, 10:00 AM – 7:00 PM (By Appointment)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-teal w-full sm:w-auto flex-1 text-center justify-center py-3.5 text-xs sm:text-sm font-semibold shadow-md cursor-pointer"
              >
                <Navigation size={16} />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneNumbers[0]}`}
                className="btn-pill-outline w-full sm:w-auto text-center justify-center py-3.5 text-xs sm:text-sm font-semibold"
              >
                <Phone size={15} className="text-[#083B40]" />
                <span>Call +91 93192 38007</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 03: Live Interactive Map & Detailed Direction Guide */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E8DFC8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Map Column (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md border border-gray-200 h-80 sm:h-96 w-full relative">
              <iframe
                title="Visions By Himani Office Map"
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

            {/* Travel Guide Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84E] font-bold block mb-1">
                  HOW TO REACH
                </span>
                <h3 className="text-2xl font-bold text-[#083B40]">
                  Reaching Our Noida Sanctuary
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#506062]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FAF0D7] text-[#B88E28] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Navigation size={16} />
                  </div>
                  <div>
                    <strong className="text-[#083B40] block">By Metro:</strong>
                    <span className="leading-relaxed">
                      Conveniently accessible via <strong>Noida Sector 34</strong> or <strong>Wave City Center</strong> Metro Station (Blue Line), just 5–7 minutes away by cab or auto.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FAF0D7] text-[#B88E28] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass size={16} />
                  </div>
                  <div>
                    <strong className="text-[#083B40] block">By Road / Cab:</strong>
                    <span className="leading-relaxed">
                      Direct connectivity via the DND Flyway and Noida-Greater Noida Expressway. Ample parking available near the sanctuary.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FAF0D7] text-[#B88E28] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield size={16} />
                  </div>
                  <div>
                    <strong className="text-[#083B40] block">Privacy & Sanctuary Protocol:</strong>
                    <span className="leading-relaxed">
                      All offline consultations are conducted in complete privacy with dedicated, peaceful 1-on-1 time. Prior appointment is mandatory.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-teal text-xs py-3 px-6 shadow-md inline-flex items-center gap-2"
                >
                  <Navigation size={14} />
                  <span>Open in Google Maps Application</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04: Direct Communication Channels (4 Cards) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-bold block">
            DIRECT CHANNELS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#083B40]">
            Speak Directly With Our Desk
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          {/* Phone */}
          <div className="bg-white p-6 rounded-2xl border border-[#EFEBE3] shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0D7] text-[#B88E28] flex items-center justify-center">
              <Phone size={18} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#083B40] block">Phone Consultation</span>
              <p className="text-xs text-[#7A8B8D]">Mon – Sat, 10am – 7pm</p>
            </div>
            <a href="tel:+919319238007" className="text-sm font-bold text-[#083B40] hover:text-[#1B6B75] block">
              +91 93192 38007
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl border border-[#EFEBE3] shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0D7] text-[#B88E28] flex items-center justify-center">
              <Mail size={18} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#083B40] block">Official Email</span>
              <p className="text-xs text-[#7A8B8D]">Response within 24 hours</p>
            </div>
            <a href="mailto:admin@visionsbyhimani.com" className="text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] block truncate">
              admin@visionsbyhimani.com
            </a>
          </div>

          {/* WhatsApp Pre-Booking */}
          <div className="bg-white p-6 rounded-2xl border border-[#EFEBE3] shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] text-[#25D366] flex items-center justify-center">
              <MessageCircle size={18} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#083B40] block">WhatsApp Pre-Booking</span>
              <p className="text-xs text-[#7A8B8D]">Quick answers & scheduling</p>
            </div>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#083B40] hover:text-[#25D366] block">
              +91 98838 13143
            </a>
          </div>

          {/* WhatsApp Rescheduling */}
          <div className="bg-white p-6 rounded-2xl border border-[#EFEBE3] shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0D7] text-[#B88E28] flex items-center justify-center">
              <Clock size={18} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#083B40] block">Rescheduling Desk</span>
              <p className="text-xs text-[#7A8B8D]">Min 48h notice policy</p>
            </div>
            <a href={`https://wa.me/917510997770`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#083B40] hover:text-[#B88E28] block">
              +91 75109 97770
            </a>
          </div>

        </div>
      </section>

      {/* 05: Inquiry & Appointment Request Form */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 text-left">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#E8DFC8]">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84E] font-bold block">
              MESSAGE OUR TEAM
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#083B40]">
              Request an Appointment or Send an Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7C7E]">
              Fill in your preferred consultation mode and question below. Our team will reach back promptly.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#E8F8EE] border border-[#A7E8BD] text-center space-y-3 animate-fadeIn">
              <CheckCircle size={40} className="text-[#25D366] mx-auto" />
              <h3 className="text-xl font-bold text-[#083B40]">Thank you! Your message has been received.</h3>
              <p className="text-xs sm:text-sm text-[#2D5A38] max-w-md mx-auto">
                Our support team will connect with you on WhatsApp / Email within 24 hours to confirm your consultation schedule.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#083B40] uppercase tracking-wide">
                    Your Name (or Pseudonym)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya / S. Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#083B40] uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#083B40] uppercase tracking-wide">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors"
                  />
                </div>

                {/* Preferred Mode */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#083B40] uppercase tracking-wide">
                    Preferred Mode
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors bg-white"
                  >
                    <option value="online">Online Video Session (Worldwide)</option>
                    <option value="offline">In-Person Office Visit (Noida, India)</option>
                  </select>
                </div>

              </div>

              {/* Area of Consultation */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#083B40] uppercase tracking-wide">
                  Area of Clarity / Topic
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors bg-white"
                >
                  <option value="Love & Relationships">Love & Relationships</option>
                  <option value="Career & Purpose">Career Crossroads & Purpose</option>
                  <option value="Business & Partnerships">Business Decisions & Partnerships</option>
                  <option value="Finances & Wealth Patterns">Finances & Wealth Patterns</option>
                  <option value="Legal Disputes & Court Matters">Legal Disputes & Court Matters</option>
                  <option value="General Question & Other">General Question & Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#083B40] uppercase tracking-wide">
                  Your Concern or Inquiry (Brief Summary)
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a brief overview of what you seek clarity about..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-pill-teal w-full text-center justify-center py-3.5 text-sm font-semibold shadow-md cursor-pointer"
              >
                <Send size={16} />
                <span>Submit Inquiry & Book Schedule</span>
              </button>
            </form>
          )}

        </div>
      </section>

      {/* 06: Sanctuary Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
        <div className="space-y-3 text-center mb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-bold block">
            LOCATION FAQS
          </span>
          <h3 className="text-2xl font-bold text-[#083B40]">
            Frequently Asked Questions About Visiting
          </h3>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white border border-[#EFEBE3] shadow-xs space-y-2">
            <h4 className="text-sm font-bold text-[#083B40]">
              Do I need to book in advance before visiting the Noida office?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B7C7E] leading-relaxed">
              Yes, absolutely. To ensure 100% confidentiality, zero waiting time, and completely undisturbed private visionary sessions, all in-person visits require prior appointment booking.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EFEBE3] shadow-xs space-y-2">
            <h4 className="text-sm font-bold text-[#083B40]">
              Is there any difference in clarity between Online and In-Person sessions?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B7C7E] leading-relaxed">
              None at all. Himani's visionary perception (Divya Drishti) connects with your energetic presence and concern instantaneously, whether you are seated in our sanctuary or joining via video call across continents.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EFEBE3] shadow-xs space-y-2">
            <h4 className="text-sm font-bold text-[#083B40]">
              Do I need to bring any documents, charts, or personal items?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B7C7E] leading-relaxed">
              No documents or birth charts are required. Simply come with an open mind and the questions that matter most to you.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
