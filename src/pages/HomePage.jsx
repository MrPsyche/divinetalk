import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyVbhSection from '../components/WhyVbhSection';
import PhilosophySection from '../components/PhilosophySection';
import ClaritySelector from '../components/ClaritySelector';
import RealLifeSituations from '../components/RealLifeSituations';
import ProcessTimeline from '../components/ProcessTimeline';
import FoundersSection from '../components/FoundersSection';
import SacredHealingPreview from '../components/SacredHealingPreview';
import SocialFeedSection from '../components/SocialFeedSection';
import FaqAccordion from '../components/FaqAccordion';

export default function HomePage({ onOpenBooking, onNavigate }) {
  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 01: Hero Section */}
      <HeroSection 
        onOpenBooking={onOpenBooking} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* 02: Why VBH Feels Different */}
      <WhyVbhSection />

      {/* 03: Our Philosophy */}
      <PhilosophySection />

      {/* 04: Services — Areas of Clarity */}
      <ClaritySelector 
        onOpenBooking={onOpenBooking} 
      />

      {/* 05: Experience Across Real-Life Situations */}
      <div id="situations">
        <RealLifeSituations 
          onOpenBooking={onOpenBooking} 
        />
      </div>

      {/* 06: How It Works */}
      <ProcessTimeline 
        onOpenBooking={onOpenBooking} 
      />

      {/* 07: Meet The Founders */}
      <FoundersSection 
        onOpenBooking={onOpenBooking} 
      />

      {/* 08: A Sacred Healing Vertical */}
      <SacredHealingPreview 
        onOpenBooking={onOpenBooking} 
      />

      {/* 09: Unified Live Channels, Video Reflections & Client Stories */}
      <div id="social-feeds">
        <SocialFeedSection />
      </div>

      {/* 10: Frequently Asked Questions */}
      <FaqAccordion 
        onOpenBooking={onOpenBooking} 
      />
    </div>
  );
}
