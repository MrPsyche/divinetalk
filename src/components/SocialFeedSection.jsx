import React, { useState } from 'react';
import { 
  Play, ExternalLink, Video, Sparkles, CheckCircle2, 
  Heart, MessageCircle, Share2 
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/siteContent';

// Custom Brand SVGs
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
  </svg>
);

export const REELS_FEED_DATA = [
  {
    id: "reel-1",
    title: "How to know if a career roadblock is an energetic misalignment or timing",
    views: "18.4K",
    likes: "1.2K",
    comments: "84",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    url: "https://www.instagram.com/adivinetalk/",
    tag: "Career Insight"
  },
  {
    id: "reel-2",
    title: "Why Himani requires zero birth details for an accurate visionary reading",
    views: "24.6K",
    likes: "2.1K",
    comments: "142",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    url: "https://www.instagram.com/adivinetalk/",
    tag: "Pure Intuition"
  },
  {
    id: "reel-3",
    title: "Resolving repetitive relationship arguments from the root cause",
    views: "31.2K",
    likes: "2.8K",
    comments: "210",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    url: "https://www.instagram.com/adivinetalk/",
    tag: "Relationship Clarity"
  },
  {
    id: "reel-4",
    title: "Making major life decisions with peace instead of fear",
    views: "15.8K",
    likes: "1.5K",
    comments: "96",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    url: "https://www.instagram.com/adivinetalk/",
    tag: "Life Direction"
  }
];

export const YOUTUBE_FEED_DATA = [
  {
    id: "yt-1",
    title: "A Divine Talk — Understanding the 6th Sense Siddhi Guidance",
    duration: "5:20",
    views: "14K views",
    videoId: "dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    channel: "@ADivineTalk"
  },
  {
    id: "yt-2",
    title: "How to Release Past Trauma & Energetic Cord Entanglements",
    duration: "8:45",
    views: "22K views",
    videoId: "dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    channel: "@ADivineTalk"
  },
  {
    id: "yt-3",
    title: "Client Stories: Overcoming Chronic Burnout & Insomnia",
    duration: "6:15",
    views: "9.8K views",
    videoId: "dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    channel: "@ADivineTalk"
  }
];

export default function SocialFeedSection() {
  const [activePlatform, setActivePlatform] = useState('instagram'); // 'instagram' | 'youtube' | 'facebook'
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F3] text-[#2D3E40] border-y border-[#EFEBE3] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-[#1B6B75]">
            <Sparkles size={16} />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Live Community & Feeds
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Connect With Our Social Feed
          </h2>
          <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed">
            Stay inspired with daily visionary guidance, short reels, and community stories directly from our official channels.
          </p>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {/* Instagram Button */}
          <button
            onClick={() => setActivePlatform('instagram')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activePlatform === 'instagram'
                ? 'bg-[#083B40] text-white shadow-md'
                : 'bg-white text-[#506062] border border-[#E2DCD2] hover:border-[#083B40]'
            }`}
          >
            <InstagramIcon className={activePlatform === 'instagram' ? 'w-4 h-4 text-[#C9A84E]' : 'w-4 h-4 text-pink-600'} />
            <span>Instagram Feed & Reels (@adivinetalk)</span>
          </button>

          {/* YouTube Button */}
          <button
            onClick={() => setActivePlatform('youtube')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activePlatform === 'youtube'
                ? 'bg-[#083B40] text-white shadow-md'
                : 'bg-white text-[#506062] border border-[#E2DCD2] hover:border-[#083B40]'
            }`}
          >
            <YoutubeIcon className={activePlatform === 'youtube' ? 'w-4 h-4 text-[#C9A84E]' : 'w-4 h-4 text-red-600'} />
            <span>YouTube Videos (@ADivineTalk)</span>
          </button>

          {/* Facebook Button */}
          <button
            onClick={() => setActivePlatform('facebook')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activePlatform === 'facebook'
                ? 'bg-[#083B40] text-white shadow-md'
                : 'bg-white text-[#506062] border border-[#E2DCD2] hover:border-[#083B40]'
            }`}
          >
            <FacebookIcon className={activePlatform === 'facebook' ? 'w-4 h-4 text-[#C9A84E]' : 'w-4 h-4 text-blue-600'} />
            <span>Facebook Timeline (@ADivineTalk)</span>
          </button>
        </div>

        {/* 1. INSTAGRAM FEED TAB */}
        {activePlatform === 'instagram' && (
          <div className="space-y-8 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#083B40]">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#083B40]">@adivinetalk</h3>
                  <span className="text-xs text-[#7A8B8D]">Daily Insights, Reels & Live Sessions</span>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline text-xs py-2 px-4 cursor-pointer flex items-center gap-1.5"
              >
                <span>Follow on Instagram</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Reels 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {REELS_FEED_DATA.map((reel) => (
                <a
                  key={reel.id}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl overflow-hidden bg-white border border-[#EFEBE3] shadow-xs hover:shadow-xl hover:border-[#C9A84E]/60 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  {/* Vertical Reel Preview */}
                  <div className="relative aspect-[9/14] overflow-hidden bg-gray-900">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Tag badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                        {reel.tag}
                      </span>
                    </div>

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-[#083B40] flex items-center justify-center shadow-lg backdrop-blur-xs">
                        <Play size={18} className="ml-0.5 fill-[#083B40]" />
                      </div>
                    </div>

                    {/* Bottom metrics on Reel */}
                    <div className="absolute bottom-3.5 inset-x-3.5 text-white space-y-2">
                      <h4 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2 text-white">
                        {reel.title}
                      </h4>

                      <div className="flex items-center justify-between text-[11px] text-gray-300 pt-1 border-t border-white/20">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><Heart size={11} className="fill-pink-500 text-pink-500" /> {reel.likes}</span>
                          <span className="flex items-center gap-1"><MessageCircle size={11} /> {reel.comments}</span>
                        </div>
                        <span className="font-semibold text-[#C9A84E]">{reel.views}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 2. YOUTUBE FEED TAB */}
        {activePlatform === 'youtube' && (
          <div className="space-y-8 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <YoutubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#083B40]">A Divine Talk — Official YouTube</h3>
                  <span className="text-xs text-[#7A8B8D]">Full Guidance Episodes & Client Reflections</span>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-teal text-xs py-2 px-4 cursor-pointer flex items-center gap-1.5"
              >
                <span>Subscribe on YouTube</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {YOUTUBE_FEED_DATA.map((vid) => (
                <div
                  key={vid.id}
                  className="rounded-3xl bg-white border border-[#EFEBE3] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C9A84E] transition-all flex flex-col justify-between group"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {vid.duration}
                    </div>

                    {/* Play Button */}
                    <button
                      onClick={() => setActiveVideoModal(vid.embedUrl)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform"
                      aria-label="Play YouTube Video"
                    >
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                        <Play size={20} className="ml-0.5 fill-white" />
                      </div>
                    </button>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-base font-bold text-[#083B40] leading-snug line-clamp-2">
                      {vid.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-[#7A8B8D] pt-1">
                      <span>{vid.channel}</span>
                      <span>{vid.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. FACEBOOK FEED TAB */}
        {activePlatform === 'facebook' && (
          <div className="space-y-8 text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#083B40]">A Divine Talk — Facebook Page</h3>
                  <span className="text-xs text-[#7A8B8D]">Community Updates, Reviews & Posts</span>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-outline text-xs py-2 px-4 cursor-pointer flex items-center gap-1.5"
              >
                <span>Visit Facebook Page</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Embedded Facebook Stream & Reviews Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Live Facebook Embed Iframe (7 cols) */}
              <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-[#EFEBE3] shadow-xs flex flex-col items-center">
                <span className="text-xs font-bold text-[#083B40] uppercase tracking-wider block mb-4 self-start">
                  Live Facebook Feed Stream
                </span>
                
                <div className="w-full max-w-[500px] overflow-hidden rounded-2xl border border-gray-100 shadow-2xs">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FADivineTalk%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                    width="100%"
                    height="500"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="A Divine Talk Facebook Feed"
                  />
                </div>
              </div>

              {/* Right Column: Verified Facebook Community Reflections (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-[#083B40] uppercase tracking-wider block mb-2">
                  Featured Community Reflections
                </span>

                <div className="p-5 rounded-2xl bg-white border border-[#EFEBE3] shadow-2xs space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7A8B8D]">
                    <span className="font-bold text-[#083B40]">S. Sharma</span>
                    <span>Facebook Recommendation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#506062] leading-relaxed">
                    "I had reached a point where nothing was making sense in my career. Himani’s guidance was clear, direct, and completely free of fear. She pointed out things no one else knew."
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#EFEBE3] shadow-2xs space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7A8B8D]">
                    <span className="font-bold text-[#083B40]">P. Kapoor</span>
                    <span>Facebook Recommendation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#506062] leading-relaxed">
                    "The fact that she doesn't require any birth charts or personal history is incredible. Her insights into our family dispute gave us the peace and direction we desperately needed."
                  </p>
                </div>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-teal w-full text-center text-xs py-2.5 cursor-pointer block"
                >
                  Read All Facebook Reviews
                </a>
              </div>

            </div>
          </div>
        )}

        {/* Video Lightbox Modal */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-black cursor-pointer"
              >
                ✕
              </button>
              <div className="aspect-video w-full">
                <iframe
                  src={`${activeVideoModal}?autoplay=1`}
                  title="YouTube Video Player"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
