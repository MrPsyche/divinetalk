import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
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
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Answers & Guidance"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our visionary consultations, data privacy, and consultation format."
          theme="light"
          centered={true}
        />

        {/* Clean Editorial Accordion List — No Boxes */}
        <div className="mt-16 divide-y divide-sacred-300">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-6 sm:py-8">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-sacred-950 group-hover:text-gold-700 transition-colors">
                    {faq.question}
                  </h3>

                  <div className="pt-1 text-sacred-700 group-hover:text-gold-700 transition-colors">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 text-base text-sacred-800/85 font-normal leading-relaxed max-w-3xl">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pre-Booking Support Text */}
        <div className="mt-16 pt-8 border-t border-sacred-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sacred-800">
          <span>Have a specific question before booking?</span>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappPreBooking.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sacred-900 hover:text-gold-700 transition-colors"
          >
            <MessageCircle size={16} className="text-emerald-700" />
            <span>Chat with us on WhatsApp ({CONTACT_INFO.whatsappPreBooking})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
