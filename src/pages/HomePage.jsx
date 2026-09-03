import React from 'react';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import ClaritySelector from '../components/ClaritySelector';
import WhyTrustSection from '../components/WhyTrustSection';
import FoundersSection from '../components/FoundersSection';
import ProcessTimeline from '../components/ProcessTimeline';
import SacredHealingPreview from '../components/SacredHealingPreview';
import DimensionsWheel from '../components/DimensionsWheel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FaqAccordion from '../components/FaqAccordion';
import ClosingCTA from '../components/ClosingCTA';

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

      {/* 02: The Big Idea / Philosophy */}
      <PhilosophySection 
        onNavigateWhyAdt={() => onNavigate('/why-adt')} 
      />

      {/* 03: What Are You Looking For Clarity On? (Interactive Self-Selector) */}
      <ClaritySelector 
        onOpenBooking={onOpenBooking} 
      />

      {/* 04: Why A Divine Talk? (The 4 Pillars of Trust) */}
      <WhyTrustSection 
        onNavigateWhyAdt={() => onNavigate('/why-adt')} 
      />

      {/* 05: Meet The Founders */}
      <FoundersSection 
        onOpenBooking={onOpenBooking} 
        onNavigateHealing={() => onNavigate('/healing')} 
      />

      {/* 06: How It Works (3-Step Timeline) */}
      <ProcessTimeline 
        onOpenBooking={onOpenBooking} 
      />

      {/* 07: A Sacred Healing (Sanctuary Transition) */}
      <SacredHealingPreview 
        onNavigateHealing={() => onNavigate('/healing')} 
        onOpenBooking={onOpenBooking} 
      />

      {/* 08: The Five Dimensions of Healing */}
      <DimensionsWheel />

      {/* 09: Testimonials */}
      <TestimonialsCarousel />

      {/* 10: FAQ */}
      <FaqAccordion />

      {/* 11: Final Closing CTA */}
      <ClosingCTA 
        onOpenBooking={onOpenBooking} 
        onNavigateHealing={() => onNavigate('/healing')} 
      />
    </div>
  );
}
