import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, ArrowRight, User } from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts } from '../utils/blogStorage';
import { BRAND_ASSETS } from '../data/siteContent';

export default function BlogPostDetail({ slug, onNavigate, onOpenBooking }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = getBlogPostBySlug(slug);
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug && p.id !== slug).slice(0, 2);

  if (!post) {
    return (
      <div className="pt-36 pb-24 min-h-screen bg-[#F9F7F1] text-center px-6">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-[#083B40]">Article Not Found</h2>
          <p className="text-sm text-[#506062]">The blog post you are looking for may have been moved or updated.</p>
          <button
            onClick={() => onNavigate('/blog')}
            className="btn-pill-teal"
          >
            <ArrowLeft size={14} />
            <span>Return to All Articles</span>
          </button>
        </div>
      </div>
    );
  }

  // Render markdown-like content into clean HTML elements
  const renderFormattedContent = (contentStr) => {
    if (!contentStr) return null;
    const lines = contentStr.split('\n\n');

    return lines.map((block, idx) => {
      const trimmed = block.trim();
      
      // H3 / H2 Heading
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#083B40] pt-4 pb-1">
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-[#083B40] pt-6 pb-2">
            {trimmed.replace('## ', '')}
          </h2>
        );
      }

      // Blockquote
      if (trimmed.startsWith('> ')) {
        return (
          <blockquote key={idx} className="my-6 border-l-4 border-[#C9A84E] bg-[#FAF8F3] p-5 rounded-r-xl italic text-[#083B40] text-base sm:text-lg">
            {trimmed.replace('> ', '').replace(/^"|"$/g, '')}
          </blockquote>
        );
      }

      // Bullet List
      if (trimmed.includes('\n- ') || trimmed.startsWith('- ') || trimmed.includes('\n1. ')) {
        const items = trimmed.split('\n');
        return (
          <ul key={idx} className="space-y-2 my-4 pl-5 list-disc text-sm sm:text-base text-[#4A5B5E]">
            {items.map((item, i) => (
              <li key={i}>
                {item.replace(/^- |^\d+\.\s*/, '')}
              </li>
            ))}
          </ul>
        );
      }

      // Standard Paragraph (with bold tag parsing)
      return (
        <p key={idx} className="text-base sm:text-[1.0625rem] text-[#4A5B5E] leading-relaxed font-normal">
          {trimmed}
        </p>
      );
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-[#F9F7F1] text-[#2D3E40] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Back Button & Breadcrumbs */}
        <div className="flex items-center justify-between pb-8">
          <button
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] transition-colors cursor-pointer"
          >
            <ArrowLeft size={15} />
            <span>All Articles</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white border border-[#E2DCD2] text-[#083B40] hover:bg-[#FAF8F3] transition-colors cursor-pointer shadow-2xs"
            title="Share Article"
          >
            <Share2 size={16} />
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-4 text-left pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A8B8D]">
            <span className="bg-[#FAF0D7] text-[#B88E28] font-bold px-3 py-1 rounded-full border border-[#E9D9B2]">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-[#083B40] leading-[1.2] tracking-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#6B7C7E] font-normal leading-relaxed pt-1">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-[#083B40]">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-[#E2DCD2]">
              <img src={BRAND_ASSETS.himaniHero} alt={post.author} className="w-full h-full object-cover object-top" />
            </div>
            <span>By {post.author}</span>
          </div>
        </header>

        {/* Featured Cover Image */}
        {post.coverImage && (
          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E2DCD2] aspect-[16/9] mb-12 bg-white">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Formatted Article Body */}
        <main className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EFEBE3] shadow-xs text-left space-y-6">
          {renderFormattedContent(post.content)}
        </main>

        {/* Author Bio Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] flex flex-col sm:flex-row items-center sm:items-start gap-6 text-left">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-xs flex-shrink-0 bg-white border border-[#E2DCD2]">
            <img src={BRAND_ASSETS.himaniHero} alt="HimaniK Dograa" className="w-full h-full object-cover object-top" />
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#1B6B75] font-semibold block">About The Author</span>
            <h4 className="text-lg font-bold text-[#083B40]">HimaniK Dograa</h4>
            <p className="text-xs sm:text-sm text-[#506062] leading-relaxed">
              Himani is the lead visionary and primary practitioner of Visions By Himani. Through innate spiritual vision (Siddhi), she guides individuals across career crossroads, relationship rifts, and major life decisions with 100% privacy and zero personal data.
            </p>
          </div>
        </div>

        {/* Action Consultation Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#083B40] text-white text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84E] font-semibold block">
            Direct 1-on-1 Visionary Clarity
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Seeking Clarity on This Specific Topic?
          </h3>
          <p className="text-sm text-[#D0E4E6] max-w-lg mx-auto">
            Book a private, confidential session directly with Himani — no birth charts or background questionnaires required.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking({ serviceName: `Consultation (${post.category})`, practitioner: 'HimaniK Dograa' })}
              className="btn-pill-gold cursor-pointer"
            >
              <span>Book Your Session</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 text-left space-y-6">
            <h3 className="text-2xl font-bold text-[#083B40]">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((r) => (
                <div
                  key={r.id}
                  onClick={() => onNavigate(`/blog/${r.slug}`)}
                  className="p-6 rounded-2xl bg-white border border-[#EFEBE3] shadow-2xs hover:border-[#C9A84E] transition-all cursor-pointer space-y-3"
                >
                  <span className="text-xs font-semibold text-[#B88E28] bg-[#FAF0D7] px-2.5 py-0.5 rounded-full">
                    {r.category}
                  </span>
                  <h4 className="text-base font-bold text-[#083B40] hover:text-[#1B6B75] transition-colors leading-snug">
                    {r.title}
                  </h4>
                  <p className="text-xs text-[#6B7C7E] line-clamp-2">
                    {r.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
