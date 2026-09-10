import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyVbhSection from '../components/WhyVbhSection';
import PhilosophySection from '../components/PhilosophySection';
import ClaritySelector from '../components/ClaritySelector';
import RealLifeSituations from '../components/RealLifeSituations';
import ProcessTimeline from '../components/ProcessTimeline';
import FoundersSection from '../components/FoundersSection';
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
      {/* 01: Hero Section with New Himani Portrait & Golden Floating Box */}
      <HeroSection 
        onOpenBooking={onOpenBooking} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* 02: New Section — Why VBH Feels Different */}
      <WhyVbhSection />

      {/* 03: Our Philosophy */}
      <PhilosophySection />

      {/* 04: Services — Areas of Clarity */}
      <ClaritySelector 
        onOpenBooking={onOpenBooking} 
      />

      {/* 05: Experience Across Real-Life Situations Showcase */}
      <div id="situations">
        <RealLifeSituations 
          onOpenBooking={onOpenBooking} 
        />
      </div>

      {/* 06: How It Works (1. Book, 2. Conversation, 3. Get Clarity) */}
      <ProcessTimeline 
        onOpenBooking={onOpenBooking} 
      />

      {/* 07: Meet The Founders (Himani Primary Practitioner & Karan Strategic Mind) */}
      <FoundersSection 
        onOpenBooking={onOpenBooking} 
      />

      {/* 08: Client Experiences & Social Testimonials */}
      <TestimonialsCarousel />

      {/* 09: Frequently Asked Questions */}
      <FaqAccordion 
        onOpenBooking={onOpenBooking} 
      />
    </div>
  );
}
