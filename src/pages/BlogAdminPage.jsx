import React, { useState, useEffect } from 'react';
import { 
  Plus, Edit3, Trash2, Eye, Image as ImageIcon, CheckCircle, 
  ArrowLeft, RefreshCw, Upload, FileText, Sparkles, BookOpen, AlertCircle
} from 'lucide-react';
import { 
  getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost, resetBlogPostsToDefault 
} from '../utils/blogStorage';

export default function BlogAdminPage({ onNavigate }) {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'editor'
  const [editingPostId, setEditingPostId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Decision Making',
    readTime: '4 min read',
    excerpt: '',
    coverImage: '',
    content: '',
    author: 'HimaniK Dograa'
  });
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadPosts();
  }, []);

  const loadPosts = () => {
    const list = getBlogPosts();
    setPosts(list);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleStartNewPost = () => {
    setEditingPostId(null);
    setFormData({
      title: '',
      slug: '',
      category: 'Decision Making',
      readTime: '4 min read',
      excerpt: '',
      coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
      content: '',
      author: 'HimaniK Dograa'
    });
    setPreviewMode(false);
    setActiveTab('editor');
  };

  const handleEditPost = (post) => {
    setEditingPostId(post.id);
    setFormData({
      title: post.title,
      slug: post.slug,
      category: post.category,
      readTime: post.readTime,
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      content: post.content,
      author: post.author || 'HimaniK Dograa'
    });
    setPreviewMode(false);
    setActiveTab('editor');
  };

  const handleDeletePost = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteBlogPost(id);
      loadPosts();
      showToast('Article deleted successfully.');
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all blog articles to initial defaults?')) {
      resetBlogPostsToDefault();
      loadPosts();
      showToast('Articles reset to defaults.');
    }
  };

  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          coverImage: reader.result
        }));
        showToast('Image uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in both the Title and the Article Content.');
      return;
    }

    if (editingPostId) {
      updateBlogPost(editingPostId, formData);
      showToast('Article updated successfully!');
    } else {
      createBlogPost(formData);
      showToast('New article published successfully!');
    }

    loadPosts();
    setActiveTab('list');
  };

  const insertSnippet = (snippet) => {
    setFormData((prev) => ({
      ...prev,
      content: prev.content ? `${prev.content}\n\n${snippet}` : snippet
    }));
  };

  return (
    <div className="pt-28 lg:pt-32 pb-24 bg-[#F9F7F1] text-[#2D3E40] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-24 right-6 z-50 bg-[#083B40] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-sm animate-bounce">
            <CheckCircle size={18} className="text-[#C9A84E]" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Top Admin Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-[#E2DCD2]">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1B6B75]">
                VBH Content Studio
              </span>
              <span className="bg-[#FAF0D7] text-[#B88E28] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#E9D9B2]">
                Admin Panel
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#083B40]">
              Blog Publishing & Article Manager
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('/blog')}
              className="btn-pill-outline text-xs py-2 px-4 cursor-pointer"
            >
              <Eye size={14} />
              <span>View Public Blog</span>
            </button>

            {activeTab === 'list' ? (
              <button
                onClick={handleStartNewPost}
                className="btn-pill-teal text-xs py-2 px-4 cursor-pointer"
              >
                <Plus size={14} />
                <span>Write New Article</span>
              </button>
            ) : (
              <button
                onClick={() => setActiveTab('list')}
                className="btn-pill-outline text-xs py-2 px-4 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Back to Articles</span>
              </button>
            )}
          </div>
        </div>

        {/* TAB 1: LIST / MANAGE ALL ARTICLES */}
        {activeTab === 'list' && (
          <div className="mt-8 space-y-6 text-left">
            
            {/* Quick Stats Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#EFEBE3] shadow-2xs">
                <span className="text-xs text-[#7A8B8D] font-medium block">Total Published Articles</span>
                <span className="text-3xl font-bold text-[#083B40] mt-1 block">{posts.length}</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#EFEBE3] shadow-2xs">
                <span className="text-xs text-[#7A8B8D] font-medium block">Active Author</span>
                <span className="text-lg font-bold text-[#083B40] mt-1 block">HimaniK Dograa</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#EFEBE3] shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A8B8D] font-medium block">Default Articles</span>
                  <span className="text-xs text-[#6B7C7E]">Restore original articles if needed</span>
                </div>
                <button
                  onClick={handleResetDefaults}
                  className="p-2 rounded-xl text-[#083B40] hover:bg-[#FAF8F3] border border-gray-200 cursor-pointer"
                  title="Reset to defaults"
                >
                  <RefreshCw size={15} />
                </button>
              </div>
            </div>

            {/* Articles Table / Grid */}
            <div className="bg-white rounded-3xl border border-[#EFEBE3] shadow-xs overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#083B40]">
                  All Articles ({posts.length})
                </h2>
                <button
                  onClick={handleStartNewPost}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Create Article</span>
                </button>
              </div>

              {posts.length === 0 ? (
                <div className="p-12 text-center space-y-4">
                  <BookOpen size={36} className="mx-auto text-[#C9A84E]" />
                  <p className="text-sm text-[#506062]">No articles found. Write your first blog post!</p>
                  <button onClick={handleStartNewPost} className="btn-pill-teal text-xs py-2 px-4">
                    Create First Article
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#FAF8F3] transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        {post.coverImage && (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold text-[#B88E28] bg-[#FAF0D7] px-2 py-0.5 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-[#7A8B8D]">{post.date}</span>
                            <span className="text-xs text-[#7A8B8D]">• {post.readTime}</span>
                          </div>
                          <h3 className="text-base font-bold text-[#083B40] leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-xs text-[#6B7C7E] line-clamp-1 max-w-xl">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                        <button
                          onClick={() => onNavigate(`/blog/${post.slug}`)}
                          className="p-2 rounded-xl text-[#083B40] hover:bg-white hover:shadow-xs border border-transparent hover:border-gray-200 transition-all cursor-pointer"
                          title="View Live Article"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleEditPost(post)}
                          className="p-2 rounded-xl text-[#1B6B75] hover:bg-white hover:shadow-xs border border-transparent hover:border-gray-200 transition-all cursor-pointer"
                          title="Edit Article"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-2 rounded-xl text-red-500 hover:bg-red-50 hover:border-red-200 border border-transparent transition-all cursor-pointer"
                          title="Delete Article"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: ARTICLE EDITOR FORM */}
        {activeTab === 'editor' && (
          <div className="mt-8 text-left max-w-4xl mx-auto space-y-6">
            
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#083B40]">
                {editingPostId ? 'Edit Article' : 'Write & Publish New Article'}
              </h2>

              <button
                type="button"
                onClick={() => setPreviewMode(!previewMode)}
                className="btn-pill-outline text-xs py-1.5 px-3 cursor-pointer"
              >
                {previewMode ? 'Switch to Editor' : 'Live Preview'}
              </button>
            </div>

            {previewMode ? (
              /* LIVE PREVIEW BOX */
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EFEBE3] shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-xs text-[#7A8B8D]">
                  <span className="bg-[#FAF0D7] text-[#B88E28] font-bold px-3 py-1 rounded-full">
                    {formData.category}
                  </span>
                  <span>• {formData.readTime}</span>
                </div>
                <h1 className="text-3xl font-bold text-[#083B40]">{formData.title || 'Untitled Article'}</h1>
                <p className="text-base text-[#6B7C7E] italic">{formData.excerpt}</p>
                {formData.coverImage && (
                  <div className="rounded-2xl overflow-hidden aspect-[16/9]">
                    <img src={formData.coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="text-base text-[#4A5B5E] leading-relaxed whitespace-pre-line pt-4 border-t border-gray-100">
                  {formData.content || 'Article content will appear here...'}
                </div>
              </div>
            ) : (
              /* FORM CONTROLS */
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-[#EFEBE3] shadow-xs space-y-6">
                
                {/* Title */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#083B40]">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Overcoming Career Crossroads with Intuitive Clarity"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors"
                  />
                </div>

                {/* Category & Read Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-bold text-[#083B40]">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors bg-white"
                    >
                      <option value="Decision Making">Decision Making</option>
                      <option value="Relationships">Relationships</option>
                      <option value="Career & Purpose">Career & Purpose</option>
                      <option value="Business Strategy">Business Strategy</option>
                      <option value="Finances & Prosperity">Finances & Prosperity</option>
                      <option value="Spiritual Guidance">Spiritual Guidance</option>
                      <option value="Mindset & Peace">Mindset & Peace</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-bold text-[#083B40]">
                      Estimated Read Time
                    </label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      placeholder="e.g. 4 min read"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors"
                    />
                  </div>
                </div>

                {/* Excerpt */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#083B40]">
                    Short Summary / Excerpt *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief 1-2 sentence overview of what the reader will gain..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors"
                  />
                </div>

                {/* Cover Image Uploader */}
                <div className="space-y-2 p-5 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3]">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#083B40] block">
                    Cover Image (Upload from Computer or Paste URL)
                  </label>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* File Upload Button */}
                    <label className="btn-pill-outline text-xs py-2 px-4 cursor-pointer flex items-center gap-2 bg-white">
                      <Upload size={14} />
                      <span>Upload Image File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileUpload}
                        className="hidden"
                      />
                    </label>

                    <span className="text-xs text-[#7A8B8D]">or paste URL:</span>

                    <input
                      type="url"
                      value={formData.coverImage}
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                      className="flex-grow px-3 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#083B40]"
                    />
                  </div>

                  {formData.coverImage && (
                    <div className="mt-3 relative w-36 h-20 rounded-xl overflow-hidden border border-gray-200 shadow-2xs">
                      <img src={formData.coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Content Editor with Formatting Helpers */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-[#083B40]">
                      Full Article Content (Markdown / Text) *
                    </label>

                    {/* Helper buttons */}
                    <div className="flex items-center gap-1.5 text-xs text-[#083B40]">
                      <button
                        type="button"
                        onClick={() => insertSnippet('### Subheading Title Here')}
                        className="px-2 py-1 rounded bg-[#FAF0D7] text-[#083B40] font-semibold text-[11px] hover:bg-[#F0E2BD]"
                      >
                        + Heading
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippet('> "Your meaningful quote or takeaway here."')}
                        className="px-2 py-1 rounded bg-[#FAF0D7] text-[#083B40] font-semibold text-[11px] hover:bg-[#F0E2BD]"
                      >
                        + Quote
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippet('- Key point 1\n- Key point 2\n- Key point 3')}
                        className="px-2 py-1 rounded bg-[#FAF0D7] text-[#083B40] font-semibold text-[11px] hover:bg-[#F0E2BD]"
                      >
                        + Bullet List
                      </button>
                    </div>
                  </div>

                  <textarea
                    rows={12}
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your article here. Use paragraphs, subheadings (###), and bullet points (-)..."
                    className="w-full p-4 rounded-xl border border-gray-200 text-sm font-sans focus:outline-none focus:border-[#083B40] transition-colors leading-relaxed"
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setActiveTab('list')}
                    className="btn-pill-outline text-xs py-2.5 px-5 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-pill-teal text-xs py-2.5 px-6 cursor-pointer"
                  >
                    <span>{editingPostId ? 'Save Article Updates' : 'Publish Article Live'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
