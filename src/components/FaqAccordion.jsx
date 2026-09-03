import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { FAQS } from '../data/siteContent';
import { CONTACT_INFO } from '../data/bookingLinks';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-ivory-200 text-sacred-950 relative overflow-hidden">
      
      {/* Background Soft Geometry */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Clarity & Understanding"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our visionary consultations, data privacy, session format, and personal free will."
          theme="light"
          centered={true}
        />

        {/* Accordion List */}
        <div className="mt-14 sm:mt-16 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-ivory-50 border-gold-500/50 shadow-xl shadow-sacred-950/5'
                    : 'bg-ivory-100/80 border-sacred-200/70 hover:border-gold-500/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                      isOpen ? 'bg-gold-500/20 text-gold-800' : 'bg-sacred-100 text-sacred-700'
                    }`}>
                      0{index + 1}
                    </span>
                    <h3 className={`font-serif text-lg sm:text-xl font-medium ${
                      isOpen ? 'text-sacred-950' : 'text-sacred-900'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-full border transition-all ${
                    isOpen
                      ? 'bg-sacred-900 text-gold-300 border-gold-500/40'
                      : 'bg-sacred-100 text-sacred-700 border-sacred-200'
                  }`}>
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-sacred-100/60 animate-fadeIn">
                    <p className="text-sm sm:text-base text-sacred-800/85 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Pre-Booking Assistance Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-sacred-900 text-ivory-100 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400">
              <MessageCircle size={22} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-ivory-50 font-medium">
                Have a specific question before booking?
              </h4>
              <p className="text-xs text-ivory-200/70 font-light">
                Our support desk is available on WhatsApp to assist with scheduling and inquiries.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappPreBooking.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap"
          >
            Chat with Desk
          </a>
        </div>

      </div>

    </section>
  );
}
