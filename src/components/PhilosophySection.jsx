import React from 'react';
import { Sun, Heart, Sprout } from 'lucide-react';

export default function PhilosophySection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F6F3EC] text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
              Our Philosophy
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#083B40]">
              Some answers don't need more information. They need a clearer perspective.
            </h2>

            <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed pt-1">
              A Divine Talk goes beyond prediction. It helps you understand the root cause of your situation and see the path forward with clarity, so you can make empowered decisions.
            </p>
          </div>

          {/* Right Column (7 cols): 3 Benefit Items with Vertical Dividers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DCD2] text-center">
            
            {/* Item 1: Clarity */}
            <div className="space-y-3 pt-6 sm:pt-0 sm:px-4">
              <div className="flex justify-center text-[#C9A84E]">
                <Sun size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#083B40]">
                Clarity
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7C7E] font-normal leading-relaxed">
                Understand the real situation at its core.
              </p>
            </div>

            {/* Item 2: Guidance */}
            <div className="space-y-3 pt-6 sm:pt-0 sm:px-4">
              <div className="flex justify-center text-[#C9A84E]">
                <Heart size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#083B40]">
                Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7C7E] font-normal leading-relaxed">
                Receive intuitive insights that make sense.
              </p>
            </div>

            {/* Item 3: Growth */}
            <div className="space-y-3 pt-6 sm:pt-0 sm:px-4">
              <div className="flex justify-center text-[#C9A84E]">
                <Sprout size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#083B40]">
                Growth
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7C7E] font-normal leading-relaxed">
                Move forward with confidence and peace.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
