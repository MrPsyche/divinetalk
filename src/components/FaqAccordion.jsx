import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/siteContent';

export default function FaqAccordion({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white text-[#2D3E40] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Answers to Common Questions
          </h2>
        </div>

        {/* Clean Accordion Container */}
        <div className="rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] overflow-hidden text-left divide-y divide-[#EFEBE3]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-[#083B40]">
                    {faq.question}
                  </h3>

                  <div className="text-[#6B7C7E] flex-shrink-0">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#506062] font-normal leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom Bar Inside the FAQ container */}
          <div className="p-4 sm:p-6 bg-[#F4EFE6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1B6B75] shadow-xs">
                <MessageSquare size={16} />
              </div>
              <div>
                <span className="text-xs font-bold text-[#083B40] block">
                  Still have questions?
                </span>
                <span className="text-[11px] text-[#6B7C7E] block">
                  We're here to help.
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
              className="btn-pill-teal text-xs py-2.5 px-5"
            >
              <span>Book Your Session</span>
              <ArrowRight size={13} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
