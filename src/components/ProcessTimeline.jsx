import React from 'react';
import { Calendar, User, Lightbulb, Check, ArrowRight } from 'lucide-react';

export default function ProcessTimeline({ onOpenBooking }) {
  const steps = [
    {
      number: '1',
      title: 'Book Your Session',
      desc: 'Choose a time that works for you and come prepared with your questions.',
      icon: Calendar,
    },
    {
      number: '2',
      title: 'Have the Conversation',
      desc: 'A private live session focused on your concern and the guidance you seek.',
      icon: User,
    },
    {
      number: '3',
      title: 'Leave with Clarity',
      desc: 'Gain a clear perspective and take empowered action in your life.',
      icon: Lightbulb,
    },
  ];

  const benefits = [
    '100% private & confidential',
    'No personal information required',
    'Live 1-on-1 conversation',
    'Clarity you can apply in real life',
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F9F7F1] text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
                Simple, Private, Powerful
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#083B40]">
                How Your Divine Talk Consultation Works
              </h2>
              <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed">
                A simple 3-step process designed to bring you clarity and direction.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#083B40] text-white flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium text-[#2D3E40]">{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenBooking({ serviceName: 'General Consultation', practitioner: 'HimaniK Dograa' })}
                className="btn-pill-teal"
              >
                <span>Explore All Session</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column (7 cols): 3 Horizontal Connected Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 relative text-center">
            
            {/* Dashed Connecting Line (Desktop) */}
            <div className="hidden sm:block absolute top-7 left-[18%] right-[18%] h-[1px] border-t-2 border-dashed border-[#D2C8BA] z-0"></div>

            {steps.map((step) => {
              const StepIcon = step.icon;

              return (
                <div key={step.number} className="space-y-3 relative z-10 flex flex-col items-center">
                  
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#083B40] relative">
                    <StepIcon size={22} strokeWidth={1.75} />
                  </div>

                  {/* Step Number Circle */}
                  <div className="w-6 h-6 rounded-full bg-[#083B40] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                    {step.number}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1 pt-1">
                    <h3 className="text-base font-bold text-[#083B40]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#6B7C7E] font-normal leading-relaxed max-w-[180px]">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
