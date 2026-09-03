import React, { useState } from 'react';
import { HeartPulse, Heart, Brain, Sparkles, Compass } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { FIVE_DIMENSIONS } from '../data/siteContent';

export default function DimensionsWheel() {
  const [activeId, setActiveId] = useState(FIVE_DIMENSIONS[0].id);

  const iconMap = {
    HeartPulse: HeartPulse,
    Heart: Heart,
    Brain: Brain,
    Sparkles: Sparkles,
    Compass: Compass,
  };

  const activeDim = FIVE_DIMENSIONS.find((d) => d.id === activeId) || FIVE_DIMENSIONS[0];
  const ActiveIcon = iconMap[activeDim.icon] || Sparkles;

  return (
    <section className="py-24 sm:py-32 bg-ivory-100 text-sacred-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Holistic Restoration"
          title="The Five Dimensions of Healing"
          subtitle="Energy healing at A Sacred Healing is not a one-dimensional treatment. We harmonize your entire energetic ecosystem across five interconnected planes of human existence."
          theme="light"
          centered={true}
        />

        {/* 5 Dimensions Open Selector */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {FIVE_DIMENSIONS.map((dim, idx) => {
            const DimIcon = iconMap[dim.icon] || Sparkles;
            const isActive = dim.id === activeId;

            return (
              <button
                key={dim.id}
                onClick={() => setActiveId(dim.id)}
                className={`p-6 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-sacred-900 text-ivory-50 shadow-md'
                    : 'bg-ivory-50 text-sacred-900 hover:bg-ivory-200/80'
                }`}
              >
                <div className="space-y-3">
                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-gold-400' : 'text-sacred-500'}`}>
                    0{idx + 1}
                  </span>
                  <h4 className="text-lg font-semibold block">
                    {dim.name}
                  </h4>
                  <span className={`text-xs block ${isActive ? 'text-ivory-300' : 'text-sacred-600'}`}>
                    {dim.short}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Dimension Narrative */}
        <div className="mt-12 p-8 sm:p-12 rounded-2xl bg-ivory-50 text-sacred-950 space-y-4 max-w-4xl mx-auto text-left shadow-sm">
          <div className="flex items-center gap-3 text-sacred-800">
            <ActiveIcon size={24} className="text-gold-600" />
            <h3 className="text-2xl font-semibold text-sacred-950">
              {activeDim.name} Alignment
            </h3>
          </div>
          
          <p className="text-base sm:text-lg text-sacred-800/85 font-normal leading-relaxed">
            {activeDim.description}
          </p>
        </div>

      </div>
    </section>
  );
}
