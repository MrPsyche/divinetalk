import React from 'react';
import { Zap, Lock, Leaf, Target } from 'lucide-react';
import { WHY_VBH_DIFFERENT } from '../data/siteContent';

export default function WhyVbhSection() {
  const iconMap = {
    Zap: Zap,
    Lock: Lock,
    Leaf: Leaf,
    Target: Target
  };

  return (
    <section className="py-20 lg:py-24 bg-white text-[#2D3E40] relative border-b border-[#EFEBE3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#1B6B75] font-semibold block">
            A Refreshing Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Why VBH Feels Different
          </h2>
          <p className="text-sm text-[#506062] font-normal leading-relaxed">
            Spiritual consultation designed for pure clarity, deep privacy, and personal empowerment.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {WHY_VBH_DIFFERENT.map((item, idx) => {
            const Icon = iconMap[item.icon] || Zap;

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] space-y-4 hover:border-[#C9A84E]/50 transition-all hover:shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#B88E28] shadow-xs">
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-bold text-[#083B40]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#506062] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
