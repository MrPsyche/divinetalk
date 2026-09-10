import React, { useState } from 'react';
import { 
  Quote, ChevronLeft, ChevronRight, Play, ExternalLink, 
  Video, MessageSquare, Sparkles, CheckCircle2 
} from 'lucide-react';
import { TESTIMONIALS, SOCIAL_LINKS } from '../data/siteContent';

export const SOCIAL_VIDEO_TESTIMONIALS = [
  {
    id: "yt-1",
    type: "youtube",
    title: "Overcoming Life Crossroads & Finding Real Clarity",
    author: "Client Video Reflection",
    platform: "YouTube",
    videoId: "dQw4w9WgXcQ", // Placeholder: user can replace with their actual YouTube Video ID
    thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:45 min",
    tag: "Life Direction"
  },
  {
    id: "ig-reel-1",
    type: "instagram",
    title: "How Himani Pinpointed the Root Cause in 15 Minutes",
    author: "@priya_wellness",
    platform: "Instagram Reel",
    reelUrl: "https://instagram.com",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    views: "12.4K views",
    tag: "Relationship Clarity"
  },
  {
    id: "ig-reel-2",
    type: "instagram",
    title: "Zero Data Required: The Siddhi Intuitive Experience",
    author: "@rahul.sharma.exec",
    platform: "Instagram Reel",
    reelUrl: "https://instagram.com",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    views: "8.9K views",
    tag: "Career Crossroads"
  },
  {
    id: "fb-1",
    type: "facebook",
    title: "A 2-Year Follow Up on Marriage Transformation",
    author: "Verified Facebook Community Review",
    platform: "Facebook Post",
    postUrl: "https://facebook.com",
    content: "Himani Ji identified the exact misunderstanding damaging our marriage in just two sessions. Two years later, our communication is completely transformed. Invaluable mentorship.",
    tag: "Marriage Harmony"
  }
];

export default function TestimonialsCarousel() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'video' | 'written'
  const [activeVideoEmbed, setActiveVideoEmbed] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F9F7F1] text-[#2D3E40] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-[#1B6B75]">
            <Sparkles size={16} />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Real Client Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Words & Videos from Those Who Found Clarity
          </h2>
          <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed">
            Explore authentic video reflections, social reels, and written reviews across Instagram, YouTube, and Facebook.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#083B40] text-white shadow-xs'
                : 'bg-white text-[#506062] border border-[#E2DCD2] hover:border-[#083B40]'
            }`}
          >
            All Experiences & Socials
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'video'
                ? 'bg-[#083B40] text-white shadow-xs'
                : 'bg-white text-[#506062] border border-[#E2DCD2] hover:border-[#083B40]'
            }`}
          >
            <Video size={13} />
            <span>Reels & Video Feeds</span>
          </button>
          <button
            onClick={() => setActiveTab('written')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'written'
                ? 'bg-[#083B40] text-white shadow-xs'
                : 'bg-white text-[#506062] border border-[#E2DCD2] hover:border-[#083B40]'
            }`}
          >
            <MessageSquare size={13} />
            <span>Verified Reviews</span>
          </button>
        </div>

        {/* 1. SOCIAL REELS & VIDEO FEED GRID (If 'all' or 'video') */}
        {(activeTab === 'all' || activeTab === 'video') && (
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {SOCIAL_VIDEO_TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white border border-[#EFEBE3] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C9A84E]/60 transition-all flex flex-col justify-between group"
                >
                  {/* Thumbnail / Video Box */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-900">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Platform Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                        {item.platform}
                      </span>
                    </div>

                    {/* Play Button Overlay */}
                    <button
                      onClick={() => {
                        if (item.type === 'youtube') {
                          setActiveVideoEmbed(item.embedUrl);
                        } else {
                          window.open(item.reelUrl || SOCIAL_LINKS.instagram, '_blank');
                        }
                      }}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform"
                      aria-label="Play Reel or Video"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/90 text-[#083B40] flex items-center justify-center shadow-lg backdrop-blur-xs">
                        <Play size={20} className="ml-1 fill-[#083B40]" />
                      </div>
                    </button>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-3.5 inset-x-3.5 text-white text-left space-y-1">
                      <span className="text-[10px] font-semibold text-[#C9A84E] uppercase tracking-wider block">
                        {item.tag}
                      </span>
                      <h4 className="text-sm font-bold leading-snug line-clamp-2 text-white">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between text-[11px] text-gray-300 pt-0.5">
                        <span>{item.author}</span>
                        <span>{item.views || item.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="p-4 bg-white flex items-center justify-between text-xs">
                    <span className="text-[#7A8B8D] font-medium flex items-center gap-1">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span>Verified Client</span>
                    </span>
                    <a
                      href={item.reelUrl || item.postUrl || SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#083B40] font-bold hover:text-[#1B6B75] flex items-center gap-1"
                    >
                      <span>Watch</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. FEATURED WRITTEN TESTIMONIAL VIEW (If 'all' or 'written') */}
        {(activeTab === 'all' || activeTab === 'written') && (
          <div className="mt-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#EFEBE3] shadow-md max-w-4xl mx-auto text-left relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#FAF0D7] text-[#B88E28]">
                  <Quote size={24} className="transform -scale-x-100" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083B40]">Verified Consultation Reflection</h3>
                  <span className="text-xs text-[#7A8B8D]">Real experience from our community</span>
                </div>
              </div>

              <span className="text-xs font-semibold text-[#1B6B75] bg-[#EAF2F3] px-3 py-1 rounded-full">
                {current.source}
              </span>
            </div>

            <blockquote className="text-base sm:text-lg text-[#3A4C4E] font-normal leading-relaxed py-6">
              "{current.quote}"
            </blockquote>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs font-bold text-[#083B40]">
                — {current.author}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#7A8B8D] mr-2">
                  {currentIndex + 1} of {TESTIMONIALS.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-[#F9F7F1] border border-[#E2DCD2] flex items-center justify-center text-[#083B40] hover:bg-[#FAF0D7] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-[#F9F7F1] border border-[#E2DCD2] flex items-center justify-center text-[#083B40] hover:bg-[#FAF0D7] transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video Lightbox Modal (For YouTube playback) */}
        {activeVideoEmbed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveVideoEmbed(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer"
              >
                ✕
              </button>
              <div className="aspect-video w-full">
                <iframe
                  src={`${activeVideoEmbed}?autoplay=1`}
                  title="Client Testimonial Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* Social Channel Links Bar */}
        <div className="mt-14 pt-8 border-t border-[#E2DCD2] flex flex-wrap items-center justify-center gap-6 text-xs text-[#506062]">
          <span>Follow our official channels for more video stories:</span>
          <div className="flex items-center gap-4 text-xs font-bold text-[#083B40]">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#1B6B75] flex items-center gap-1">
              <span>📸 Instagram</span>
            </a>
            <span>•</span>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#1B6B75] flex items-center gap-1">
              <span>▶️ YouTube</span>
            </a>
            <span>•</span>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#1B6B75] flex items-center gap-1">
              <span>👥 Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
