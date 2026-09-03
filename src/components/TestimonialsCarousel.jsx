import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Sparkles, Star, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { TESTIMONIALS } from '../data/siteContent';

export default function TestimonialsCarousel() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Relationships', 'Career & Purpose', 'Anxiety & Peace', 'Inner Peace'];

  const filteredTestimonials = activeCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === activeCategory);

  const current = filteredTestimonials[currentIndex % filteredTestimonials.length] || TESTIMONIALS[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-sacred-950 text-ivory-100 relative overflow-hidden">
      
      {/* Subtle Aura Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] aura-glow-teal opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] aura-glow-gold opacity-15 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Authentic Reflections"
          title="Words From Those Who Found Clarity"
          subtitle="Real experiences shared by clients who sought visionary guidance and healing during times of uncertainty, crisis, and life turning points."
          theme="dark"
          centered={true}
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-12 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-sacred-950 font-semibold shadow-lg shadow-gold-500/20'
                  : 'bg-sacred-900/60 text-ivory-200/70 border border-sacred-800 hover:border-gold-500/30 hover:text-ivory-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Large Editorial Testimonial Card */}
        <div className="relative mt-8 p-8 sm:p-14 lg:p-16 rounded-3xl bg-sacred-900/90 border border-gold-500/30 shadow-2xl shadow-black/80 backdrop-blur-xl">
          
          {/* Top Gold Quote Icon */}
          <div className="flex items-center justify-between border-b border-sacred-800/80 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/20">
                <Quote size={28} className="transform -scale-x-100" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold block">
                  {current.category}
                </span>
                <span className="text-xs font-serif italic text-ivory-300/80">
                  {current.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gold-400/80 bg-sacred-950/70 px-3 py-1 rounded-full border border-gold-500/20">
              <span>{currentIndex + 1}</span>
              <span>/</span>
              <span>{filteredTestimonials.length}</span>
            </div>
          </div>

          {/* Large Quote Typography */}
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center">
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory-50 leading-relaxed font-light italic">
              "{current.quote}"
            </blockquote>
          </div>

          {/* Key Outcome Highlight & Author Info */}
          <div className="mt-10 pt-6 border-t border-sacred-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gold-300 font-medium">
                <Sparkles size={13} className="text-gold-400" />
                <span>Key Experience: {current.highlight}</span>
              </div>
              <span className="text-xs text-ivory-400 font-light block">
                {current.author} • Verified Session Feedback
              </span>
            </div>

            {/* Navigation Carousel Arrows */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-sacred-800 border border-sacred-700 text-ivory-200 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-sacred-800 border border-sacred-700 text-ivory-200 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Verified Notice */}
        <div className="mt-6 text-center text-xs text-ivory-400/60 font-light">
          All client testimonials are real, unsolicited reflections from private consultation sessions.
        </div>

      </div>

    </section>
  );
}
