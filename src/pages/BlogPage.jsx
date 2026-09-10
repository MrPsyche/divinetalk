import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Calendar, Search, Sparkles, Plus, Settings } from 'lucide-react';
import { getBlogPosts } from '../utils/blogStorage';

export default function BlogPage({ onOpenBooking, onNavigate }) {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    const list = getBlogPosts();
    setPosts(list);
  }, []);

  const categories = ['All', ...new Set(posts.map((p) => p.category))];

  const filteredPosts = posts.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-[#F9F7F1] text-[#2D3E40] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-[#1B6B75]">
            <Sparkles size={16} />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Visions By Himani Insights
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#083B40] leading-tight">
            Our Blog & Perspectives
          </h1>
          <p className="text-base text-[#506062] font-normal leading-relaxed">
            Explorations into intuitive decision-making, navigating relationship patterns, and finding unclouded clarity during pivotal life crossroads.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-14 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#E2DCD2] bg-white text-xs sm:text-sm focus:outline-none focus:border-[#083B40] transition-colors shadow-2xs"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#083B40] text-white shadow-xs'
                    : 'bg-white text-[#506062] border border-[#E2DCD2] hover:border-[#083B40]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Dynamic Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-3xl border border-[#EFEBE3] max-w-md mx-auto space-y-3">
            <h3 className="text-lg font-bold text-[#083B40]">No Articles Found</h3>
            <p className="text-xs text-[#6B7C7E]">Try searching with different keywords or categories.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="btn-pill-teal text-xs py-2 px-4 cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigate(`/blog/${post.slug}`)}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EFEBE3] shadow-xs flex flex-col justify-between space-y-5 hover:shadow-xl hover:border-[#C9A84E]/60 transition-all text-left cursor-pointer group"
              >
                <div className="space-y-4">
                  {/* Cover Image */}
                  {post.coverImage && (
                    <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 group-hover:scale-[1.01] transition-transform">
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-[#7A8B8D]">
                    <span className="bg-[#FAF0D7] text-[#B88E28] font-bold px-2.5 py-0.5 rounded-full border border-[#E9D9B2]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#083B40] leading-snug group-hover:text-[#1B6B75] transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#506062] font-normal leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[#7A8B8D] font-medium">
                    {post.date}
                  </span>

                  <span className="inline-flex items-center gap-1 font-bold text-[#083B40] group-hover:text-[#1B6B75] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Admin Management Quick Link Banner */}
        <div className="mt-20 pt-8 border-t border-[#E2DCD2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8B8D]">
          <div className="flex items-center gap-2">
            <span>Author & Publisher: <strong>HimaniK Dograa</strong></span>
          </div>

          <button
            onClick={() => onNavigate('/admin')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] bg-white px-3.5 py-1.5 rounded-full border border-[#E2DCD2] shadow-2xs cursor-pointer"
          >
            <Settings size={13} />
            <span>Blog Admin Studio</span>
          </button>
        </div>

      </div>
    </div>
  );
}
