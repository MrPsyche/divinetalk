import React, { useEffect } from 'react';
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BRAND_ASSETS } from '../data/siteContent';

export default function BlogPage({ onOpenBooking, onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-[#F9F7F1] text-[#2D3E40] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-[#1B6B75]">
            <Sparkles size={16} />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Visions By Himani Insights
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#083B40] leading-tight">
            Our Blog & Reflections
          </h1>
          <p className="text-base text-[#506062] font-normal leading-relaxed">
            Perspectives on intuitive decision-making, navigating relationship patterns, and finding unclouded clarity during pivotal life moments.
          </p>
        </div>

        {/* Featured Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="p-7 rounded-2xl bg-white border border-[#EFEBE3] shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md hover:border-[#C9A84E]/50 transition-all text-left"
            >
              <div className="space-y-4">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-[#7A8B8D]">
                  <span className="bg-[#FAF0D7] text-[#B88E28] font-semibold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#083B40] leading-snug hover:text-[#1B6B75] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#506062] font-normal leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & CTA */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-[#7A8B8D]">
                  By {post.author}
                </span>

                <button
                  onClick={() => onOpenBooking({ serviceName: `Consultation (${post.category})`, practitioner: 'HimaniK Dograa' })}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75]"
                >
                  <span>Seek Guidance</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#083B40] text-white text-center space-y-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84E] font-semibold block">
            Direct 1-on-1 Visionary Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a question on your mind right now?
          </h2>
          <p className="text-sm text-[#D0E4E6] max-w-xl mx-auto">
            Skip the analysis paralysis. Have a private, confidential conversation directly with Himani — no birth details required.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking({ serviceName: 'Visionary Consultation with Himani', practitioner: 'HimaniK Dograa' })}
              className="btn-pill-gold"
            >
              <span>Book Your Session</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
