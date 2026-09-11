import React, { useState, useEffect } from 'react';
import { 
  Play, ExternalLink, Sparkles, Heart, MessageCircle, 
  Plus, Trash2, CheckCircle2, Film, Video, Share2, X, Maximize2, Volume2,
  Quote, ChevronLeft, ChevronRight, MessageSquare
} from 'lucide-react';
import { SOCIAL_LINKS, TESTIMONIALS } from '../data/siteContent';
import { 
  getSocialFeeds, extractInstagramId, extractYouTubeId 
} from '../utils/socialStorage';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
  </svg>
);

export default function SocialFeedSection() {
  const [activePlatform, setActivePlatform] = useState('instagram'); // 'instagram' | 'youtube' | 'facebook' | 'testimonials'
  const [socialData, setSocialData] = useState(getSocialFeeds());
  const [selectedYtVideo, setSelectedYtVideo] = useState(null);
  const [activeModalVideo, setActiveModalVideo] = useState(null); // { type: 'video' | 'youtube', src, title, link, category, excerpt }
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const currentTestimonial = TESTIMONIALS[testimonialIndex];

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleUpdate = () => setSocialData(getSocialFeeds());
    window.addEventListener('vbh_social_updated', handleUpdate);
    return () => window.removeEventListener('vbh_social_updated', handleUpdate);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8F3] text-[#2D3E40] border-y border-[#EFEBE3] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Unified Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-[#1B6B75]">
            <Sparkles size={16} />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Live Channels & Real Client Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#083B40]">
            Our Official Social Stream & Client Reflections
          </h2>
          <p className="text-sm sm:text-base text-[#506062] font-normal leading-relaxed">
            Watch recent video reflections from our official Instagram, YouTube, and Facebook channels, and explore verified client experiences.
          </p>
        </div>

        {/* Platform & Category Selector Tabs */}
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
            <span>Instagram Reels (@adivinetalk)</span>
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
            <svg className={activePlatform === 'youtube' ? 'w-4 h-4 text-[#C9A84E]' : 'w-4 h-4 text-red-600'} fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
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
            <span>Facebook Page (@ADivineTalk)</span>
          </button>

          {/* Written Reviews Button */}
          <button
            onClick={() => setActivePlatform('testimonials')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activePlatform === 'testimonials'
                ? 'bg-[#083B40] text-white shadow-md'
                : 'bg-white text-[#506062] border border-[#E2DCD2] hover:border-[#083B40]'
            }`}
          >
            <MessageSquare className={activePlatform === 'testimonials' ? 'w-4 h-4 text-[#C9A84E]' : 'w-4 h-4 text-[#1B6B75]'} />
            <span>Client Reviews & Stories</span>
          </button>
        </div>

        {/* 1. INSTAGRAM FEED STREAM */}
        {activePlatform === 'instagram' && (
          <div className="space-y-8 text-left">
            {/* Account Profile Banner */}
            <div className="p-6 rounded-3xl bg-white border border-[#EFEBE3] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#083B40]">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083B40]">@adivinetalk</h3>
                  <p className="text-xs text-[#7A8B8D]">Official Instagram Account of HimaniK Dograa & A Divine Talk</p>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-teal text-xs py-2.5 px-5 cursor-pointer flex items-center gap-2"
              >
                <span>View Full Reels on Instagram</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Instagram Reels Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialData.instagram.reels.map((reel, index) => {
                const igId = reel.reelId || extractInstagramId(reel.reelUrl);
                const videoFile = reel.videoSrc || `/videos/reels/reel${index + 1}.mp4`;

                return (
                  <div 
                    key={reel.id || index}
                    className="bg-white p-5 rounded-3xl border border-[#EFEBE3] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                  >
                    {/* HTML5 Video Player with controls and sound */}
                    <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-900 border border-[#EFEBE3] shadow-inner aspect-[9/14] group flex items-center justify-center">
                      <video
                        src={videoFile}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                        title={reel.title}
                      />
                      
                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                        <span className="text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-md text-[#E0C068] px-2.5 py-1 rounded-full border border-white/20">
                          {reel.category || 'Reel Reflection'}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-pink-400 border border-white/20">
                          <InstagramIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Expand / Popup Button */}
                      <button
                        type="button"
                        onClick={() => setActiveModalVideo({
                          type: 'video',
                          src: videoFile,
                          title: reel.title,
                          category: reel.category,
                          link: reel.reelUrl || (igId ? `https://www.instagram.com/reel/${igId}/` : SOCIAL_LINKS.instagram),
                          excerpt: reel.excerpt
                        })}
                        className="absolute bottom-14 right-3 p-2 rounded-full bg-black/60 hover:bg-[#083B40] text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
                        title="Open Video in Popup Modal"
                      >
                        <Maximize2 size={14} />
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#B88E28]">{reel.category}</span>
                        <a 
                          href={SOCIAL_LINKS.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1B6B75] font-semibold hover:underline flex items-center gap-1"
                        >
                          <span>@adivinetalk</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                      <h4 className="text-sm font-bold text-[#083B40] line-clamp-2 leading-snug">
                        {reel.title}
                      </h4>
                      <p className="text-xs text-[#506062] leading-relaxed line-clamp-2">
                        {reel.excerpt}
                      </p>
                    </div>

                    {/* Action Link to Main Instagram Page */}
                    <a
                      href={reel.reelUrl || (igId ? `https://www.instagram.com/reel/${igId}/` : SOCIAL_LINKS.instagram)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-outline w-full text-center text-xs py-2.5 cursor-pointer flex items-center justify-center gap-1.5 hover:bg-[#083B40] hover:text-white transition-colors"
                    >
                      <Play size={13} className="fill-current" />
                      <span>Watch Reel on Instagram (@adivinetalk)</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. YOUTUBE VIDEO STREAM TAB */}
        {activePlatform === 'youtube' && (
          <div className="space-y-8 text-left">
            {/* YouTube Account Header */}
            <div className="p-6 rounded-3xl bg-white border border-[#EFEBE3] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083B40]">A Divine Talk — Official YouTube Channel</h3>
                  <p className="text-xs text-[#7A8B8D]">Video discourses, visionary guidance, and spiritual clarity</p>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-teal text-xs py-2.5 px-5 cursor-pointer flex items-center gap-2"
              >
                <span>Subscribe on YouTube</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* YouTube Featured Video & Playlist Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Featured YouTube Video Embed (7 cols) */}
              <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-[#EFEBE3] shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#083B40] uppercase tracking-wider block">
                    Featured Video Stream
                  </span>
                  <span className="text-xs text-[#1B6B75] font-semibold flex items-center gap-1">
                    <Sparkles size={13} /> Official Channel
                  </span>
                </div>

                {(() => {
                  const currentVideo = selectedYtVideo || socialData.youtube.videos[0];
                  const ytid = currentVideo?.videoId 
                    ? extractYouTubeId(currentVideo.videoId) 
                    : extractYouTubeId(currentVideo?.videoUrl) || extractYouTubeId(socialData.youtube.featuredVideoUrl);

                  if (ytid) {
                    return (
                      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-md bg-black">
                        <iframe
                          className="w-full h-full border-0"
                          src={`https://www.youtube-nocookie.com/embed/${ytid}?rel=0&modestbranding=1`}
                          title={currentVideo?.title || "A Divine Talk YouTube Channel"}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    );
                  }

                  return (
                    <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-[#083B40] via-[#0D4D54] to-[#052629] p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-md">
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold text-[#C9A84E] uppercase tracking-widest">
                          A Divine Talk • Video Hub
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold leading-snug">
                          {currentVideo?.title || "Visionary Discourses & Consultations with HimaniK Dograa"}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300">
                          {currentVideo?.description || "Explore transformative perspectives on life crossroads, relational healing, and finding clarity."}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setActiveModalVideo({
                            type: 'video',
                            src: '/videos/reels/reel1.mp4',
                            title: currentVideo?.title || 'Understanding 6th Sense Consultations',
                            category: 'Spiritual Perspective',
                            link: SOCIAL_LINKS.youtube,
                            excerpt: currentVideo?.description || 'Watch the consultation discussion with Himani.'
                          })}
                          className="btn-pill-teal text-xs py-2.5 px-5 cursor-pointer flex items-center gap-2 bg-[#C9A84E] text-[#083B40] font-bold hover:bg-[#b59540]"
                        >
                          <Play size={14} className="fill-[#083B40]" />
                          <span>Play Video with Sound</span>
                        </button>

                        <a
                          href={currentVideo?.videoUrl || SOCIAL_LINKS.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill-outline text-xs py-2.5 px-4 cursor-pointer flex items-center gap-1.5 text-white border-white/30 hover:bg-white/10"
                        >
                          <span>Open on YouTube</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  );
                })()}

                <div className="pt-2 text-xs text-[#6B7C7E] flex items-center justify-between">
                  <span>To add specific YouTube video IDs or Shorts, configure them in the Admin Panel.</span>
                  <a 
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B6B75] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>@ADivineTalk</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Video Categories & Playlist List (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-[#083B40] uppercase tracking-wider block">
                  Channel Video Topics
                </span>

                {socialData.youtube.videos.map((vid, idx) => (
                  <div 
                    key={vid.id || idx}
                    onClick={() => {
                      setSelectedYtVideo(vid);
                      setActiveModalVideo({
                        type: 'video',
                        src: `/videos/reels/reel${(idx % 3) + 1}.mp4`,
                        title: vid.title,
                        category: vid.category || 'Topic',
                        link: vid.videoUrl || SOCIAL_LINKS.youtube,
                        excerpt: vid.description
                      });
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer text-left group ${
                      (selectedYtVideo?.id === vid.id || (!selectedYtVideo && idx === 0))
                        ? 'bg-white border-[#1B6B75] shadow-md ring-1 ring-[#1B6B75]/20'
                        : 'bg-white/80 border-[#EFEBE3] hover:bg-white hover:border-[#CBD5E1]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-[10px] font-bold text-[#B88E28] uppercase tracking-wider">
                        {vid.category || 'Topic'}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#1B6B75]/10 flex items-center justify-center text-[#1B6B75] group-hover:scale-110 transition-transform">
                        <Play size={11} className="fill-[#1B6B75] ml-0.5" />
                      </div>
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-[#083B40] mb-1">
                      {vid.title}
                    </h5>
                    <p className="text-[11px] text-[#506062] line-clamp-2">
                      {vid.description}
                    </p>
                  </div>
                ))}

                <div className="p-4 rounded-2xl bg-white border border-[#EFEBE3] space-y-2 text-left">
                  <span className="text-xs font-bold text-[#083B40] block">⚡ 6th Sense Siddhi & Consultation Topics</span>
                  <p className="text-xs text-[#506062]">Direct intuitive perception mechanics that operate without requiring horoscope or personal birth records.</p>
                </div>

                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-teal w-full text-center text-xs py-2.5 cursor-pointer block"
                >
                  Visit Full YouTube Video Library
                </a>
              </div>

            </div>
          </div>
        )}

        {/* 3. FACEBOOK LIVE PAGE TAB */}
        {activePlatform === 'facebook' && (
          <div className="space-y-8 text-left">
            <div className="p-6 rounded-3xl bg-white border border-[#EFEBE3] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083B40]">A Divine Talk — Facebook Page</h3>
                  <p className="text-xs text-[#7A8B8D]">Live updates, community events, and reviews</p>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-teal text-xs py-2.5 px-5 cursor-pointer flex items-center gap-2"
              >
                <span>Open @ADivineTalk on Facebook</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Embedded Live Facebook Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
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

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-[#083B40] uppercase tracking-wider block mb-2">
                  Verified Community Reviews
                </span>

                <div className="p-5 rounded-2xl bg-white border border-[#EFEBE3] shadow-2xs space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7A8B8D]">
                    <span className="font-bold text-[#083B40]">S. Sharma</span>
                    <span>Facebook Recommendation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#506062] leading-relaxed">
                    "I had reached a point where nothing was making sense in my career. Himani’s guidance was clear, direct, and completely free of fear."
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#EFEBE3] shadow-2xs space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7A8B8D]">
                    <span className="font-bold text-[#083B40]">P. Kapoor</span>
                    <span>Facebook Recommendation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#506062] leading-relaxed">
                    "Her insights into our family dispute gave us the peace and direction we desperately needed."
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

        {/* 4. WRITTEN CLIENT TESTIMONIALS TAB */}
        {activePlatform === 'testimonials' && (
          <div className="space-y-8 text-left">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EFEBE3] shadow-md max-w-4xl mx-auto text-left relative">
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
                  {currentTestimonial.source}
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-[#3A4C4E] font-normal leading-relaxed py-6">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs font-bold text-[#083B40]">
                  — {currentTestimonial.author}
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#7A8B8D] mr-2">
                    {testimonialIndex + 1} of {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={handlePrevTestimonial}
                    className="w-8 h-8 rounded-full bg-[#F9F7F1] border border-[#E2DCD2] flex items-center justify-center text-[#083B40] hover:bg-[#FAF0D7] transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="w-8 h-8 rounded-full bg-[#F9F7F1] border border-[#E2DCD2] flex items-center justify-center text-[#083B40] hover:bg-[#FAF0D7] transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Channel Links Bar */}
        <div className="mt-14 pt-8 border-t border-[#E2DCD2] flex flex-wrap items-center justify-center gap-6 text-xs text-[#506062]">
          <span>Follow our official channels for more video stories:</span>
          <div className="flex items-center gap-4 text-xs font-bold text-[#083B40]">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#1B6B75] flex items-center gap-1">
              <span>📸 Instagram (@adivinetalk)</span>
            </a>
            <span>•</span>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#1B6B75] flex items-center gap-1">
              <span>▶️ YouTube (@ADivineTalk)</span>
            </a>
            <span>•</span>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#1B6B75] flex items-center gap-1">
              <span>👥 Facebook (@ADivineTalk)</span>
            </a>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* UNIVERSAL VIDEO POPUP MODAL */}
      {/* ========================================================= */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative bg-[#083B40] text-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C9A84E] text-[#083B40] px-2.5 py-0.5 rounded-full">
                  {activeModalVideo.category || 'Video'}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {activeModalVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalVideo(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close Video"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full bg-black aspect-video flex items-center justify-center overflow-hidden">
              <video
                src={activeModalVideo.src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer & Redirect Action */}
            <div className="p-4 sm:p-5 bg-[#052629] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-neutral-300 line-clamp-2 max-w-md text-left">
                {activeModalVideo.excerpt || 'Watch full discussion and connect with Himani on our official social channels.'}
              </p>

              <a
                href={activeModalVideo.link || SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-teal text-xs py-2 px-5 cursor-pointer flex items-center gap-2 bg-[#C9A84E] text-[#083B40] font-bold hover:bg-[#b59540] flex-shrink-0"
              >
                <span>Open in Official App</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
