import React from 'react';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import ClaritySelector from '../components/ClaritySelector';
import ProcessTimeline from '../components/ProcessTimeline';
import FoundersSection from '../components/FoundersSection';
import SacredHealingPreview from '../components/SacredHealingPreview';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
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

      {/* 02: Our Philosophy */}
      <PhilosophySection />

      {/* 03: What Can We Help You With? / Where are you seeking clarity on? */}
      <ClaritySelector 
        onOpenBooking={onOpenBooking} 
      />

      {/* 04: Simple, Private, Powerful / How Your Divine Talk Consultation Works */}
      <ProcessTimeline 
        onOpenBooking={onOpenBooking} 
      />

      {/* 05: Meet The Founders / The People Behind A Divine Talk */}
      <FoundersSection 
        onOpenBooking={onOpenBooking} 
        onNavigateHealing={() => onNavigate('/healing')} 
      />

      {/* 06: A Sacred Healing Banner */}
      <SacredHealingPreview 
        onNavigateHealing={() => onNavigate('/healing')} 
      />

      {/* 07: Client Experiences / Words from Those Who Found Clarity */}
      <TestimonialsCarousel />

      {/* 08: Frequently Asked Questions / Answers to Common Questions */}
      <FaqAccordion 
        onOpenBooking={onOpenBooking} 
      />
    </div>
  );
}
