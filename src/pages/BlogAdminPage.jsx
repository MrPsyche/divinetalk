import React, { useState, useEffect } from 'react';
import { 
  Plus, Edit3, Trash2, Eye, CheckCircle, ArrowLeft, RefreshCw, 
  Upload, Sparkles, BookOpen, Lock, LogOut, Key, User, ShieldAlert,
  Film, Video, Share2, Play, Save, Inbox, MessageSquare, Download,
  Filter, Search, PhoneCall, Mail, ExternalLink, Calendar, MapPin, X,
  Clock, MessageCircle, Navigation, Shield
} from 'lucide-react';
import { 
  getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost, resetBlogPostsToDefault 
} from '../utils/blogStorage';
import { 
  getSocialFeeds, saveSocialFeeds, resetSocialFeedsToDefault, 
  extractInstagramId, extractYouTubeId 
} from '../utils/socialStorage';
import { 
  getLeads, updateLeadStatus, deleteLead, resetLeadsToDefault, exportLeadsToCsv 
} from '../utils/leadsStorage';
import { BRAND_ASSETS, SOCIAL_LINKS } from '../data/siteContent';

const AUTH_KEY = 'vbh_admin_authenticated_v1';
const DEFAULT_ADMIN_EMAIL = 'admin@visionsbyhimani.com';
const DEFAULT_ADMIN_PASS = 'vbh2026';

export default function BlogAdminPage({ onNavigate }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Main Studio Mode: 'blog' | 'social' | 'leads'
  const [studioSection, setStudioSection] = useState('blog');

  // Blog Studio State
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'editor'
  const [editingPostId, setEditingPostId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Social Feeds State
  const [socialData, setSocialData] = useState(getSocialFeeds());

  // Leads State
  const [leads, setLeads] = useState(getLeads());
  const [leadFilter, setLeadFilter] = useState('all');
  const [leadSearch, setLeadSearch] = useState('');
  const [selectedLeadModal, setSelectedLeadModal] = useState(null);

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
    // Check existing auth
    const savedAuth = sessionStorage.getItem(AUTH_KEY) || localStorage.getItem(AUTH_KEY);
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      loadPosts();
      setSocialData(getSocialFeeds());
      loadLeads();
    }
  }, []);

  const loadLeads = () => {
    setLeads(getLeads());
  };

  const loadPosts = () => {
    const list = getBlogPosts();
    setPosts(list);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    const cleanEmail = loginEmail.trim().toLowerCase();
    const cleanPass = loginPassword.trim();

    if (
      (cleanEmail === DEFAULT_ADMIN_EMAIL || cleanEmail === 'admin' || cleanEmail === 'himani') &&
      cleanPass === DEFAULT_ADMIN_PASS
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, 'true');
      localStorage.setItem(AUTH_KEY, 'true');
      loadPosts();
    } else {
      setLoginError('Invalid admin email or password. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(AUTH_KEY);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // -------------------------------------------------------------
  // LEADS ACTIONS
  // -------------------------------------------------------------
  const handleUpdateLeadStatus = (id, newStatus) => {
    const updated = updateLeadStatus(id, newStatus);
    setLeads(updated);
    if (selectedLeadModal && selectedLeadModal.id === id) {
      setSelectedLeadModal({ ...selectedLeadModal, status: newStatus });
    }
    showToast(`Inquiry status updated to ${newStatus.toUpperCase()}`);
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry record?')) {
      const updated = deleteLead(id);
      setLeads(updated);
      if (selectedLeadModal && selectedLeadModal.id === id) {
        setSelectedLeadModal(null);
      }
      showToast('Inquiry deleted.');
    }
  };

  const handleExportCsv = () => {
    exportLeadsToCsv();
    showToast('Leads exported to CSV successfully!');
  };

  const handleResetLeads = () => {
    if (window.confirm('Reset inquiries to sample list?')) {
      const def = resetLeadsToDefault();
      setLeads(def);
      showToast('Leads reset to default.');
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    if (leadFilter === 'new' && lead.status !== 'new') return false;
    if (leadFilter === 'contacted' && lead.status !== 'contacted') return false;
    if (leadFilter === 'resolved' && lead.status !== 'resolved') return false;
    if (leadFilter === 'online' && lead.mode !== 'online') return false;
    if (leadFilter === 'offline' && lead.mode !== 'offline') return false;

    if (leadSearch.trim()) {
      const q = leadSearch.toLowerCase();
      const matchName = (lead.name || '').toLowerCase().includes(q);
      const matchEmail = (lead.email || '').toLowerCase().includes(q);
      const matchPhone = (lead.phone || '').toLowerCase().includes(q);
      const matchArea = (lead.area || '').toLowerCase().includes(q);
      const matchMsg = (lead.message || '').toLowerCase().includes(q);
      return matchName || matchEmail || matchPhone || matchArea || matchMsg;
    }
    return true;
  });

  const newLeadsCount = leads.filter(l => l.status === 'new').length;

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

  // --- SOCIAL FEED HANDLERS ---
  const handleSaveSocialFeeds = (e) => {
    e.preventDefault();
    saveSocialFeeds(socialData);
    showToast('Social feeds & video links updated successfully!');
  };

  const handleResetSocialFeeds = () => {
    if (window.confirm('Reset social links and video feeds to default?')) {
      const defaults = resetSocialFeedsToDefault();
      setSocialData(defaults);
      showToast('Social feeds reset to defaults.');
    }
  };

  const updateReelItem = (index, field, value) => {
    const newReels = [...socialData.instagram.reels];
    newReels[index] = { ...newReels[index], [field]: value };
    setSocialData({
      ...socialData,
      instagram: { ...socialData.instagram, reels: newReels }
    });
  };

  const updateYtItem = (index, field, value) => {
    const newVids = [...socialData.youtube.videos];
    newVids[index] = { ...newVids[index], [field]: value };
    setSocialData({
      ...socialData,
      youtube: { ...socialData.youtube, videos: newVids }
    });
  };

  // -------------------------------------------------------------
  // VIEW 1: SECURE LOGIN SCREEN (IF NOT AUTHENTICATED)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="pt-28 lg:pt-36 pb-24 bg-[#F9F7F1] text-[#2D3E40] min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#EFEBE3] text-left space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF0D7] text-[#B88E28] flex items-center justify-center mx-auto shadow-xs">
              <Lock size={26} />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1B6B75] block">
                VBH Studio
              </span>
              <h1 className="text-2xl font-bold text-[#083B40]">
                Admin Authentication
              </h1>
            </div>

            <p className="text-xs text-[#6B7C7E]">
              Enter your admin credentials to access the blog publishing manager.
            </p>
          </div>

          {/* Error Banner */}
          {loginError && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <ShieldAlert size={16} className="flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider font-bold text-[#083B40] block">
                Admin Email / Username
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="admin@visionsbyhimani.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider font-bold text-[#083B40] block">
                Admin Password
              </label>
              <div className="relative">
                <Key size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#083B40] transition-colors"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-pill-teal w-full text-center py-3 text-sm cursor-pointer shadow-md"
              >
                <span>Unlock Admin Studio</span>
              </button>
            </div>

          </form>

          {/* Default Credentials Hint Box */}
          <div className="pt-4 border-t border-gray-100 text-center space-y-1">
            <span className="text-[11px] text-[#7A8B8D] block">
              Default Credentials: <strong>admin</strong> / Password: <strong>vbh2026</strong>
            </span>
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="text-xs font-semibold text-[#083B40] hover:text-[#1B6B75] inline-flex items-center gap-1 pt-2 cursor-pointer"
            >
              <ArrowLeft size={13} />
              <span>Return to Public Website</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
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
                VBH Management Studio
              </span>
              <span className="bg-[#FAF0D7] text-[#B88E28] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#E9D9B2]">
                Admin Verified
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#083B40]">
              {studioSection === 'blog' && 'Blog Publishing Studio'}
              {studioSection === 'social' && 'Social Feeds & Video Hub'}
              {studioSection === 'leads' && 'Inquiries & Contact Leads'}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Studio Switcher Tabs */}
            <div className="bg-white p-1 rounded-full border border-[#E2DCD2] flex items-center gap-1 shadow-2xs">
              <button
                onClick={() => setStudioSection('blog')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  studioSection === 'blog' ? 'bg-[#083B40] text-white' : 'text-[#506062] hover:text-[#083B40]'
                }`}
              >
                <BookOpen size={13} />
                <span>Blog Articles</span>
              </button>
              
              <button
                onClick={() => setStudioSection('social')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  studioSection === 'social' ? 'bg-[#083B40] text-white' : 'text-[#506062] hover:text-[#083B40]'
                }`}
              >
                <Film size={13} />
                <span>Social Feeds</span>
              </button>

              <button
                onClick={() => setStudioSection('leads')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 relative ${
                  studioSection === 'leads' ? 'bg-[#083B40] text-white' : 'text-[#506062] hover:text-[#083B40]'
                }`}
              >
                <Inbox size={13} />
                <span>Leads & Inquiries</span>
                {newLeadsCount > 0 && (
                  <span className="px-1.5 py-0.2 bg-[#D4AF37] text-[#083B40] font-extrabold text-[9px] rounded-full">
                    {newLeadsCount}
                  </span>
                )}
              </button>
            </div>

            <button
              onClick={() => onNavigate('/')}
              className="btn-pill-outline text-xs py-2 px-3.5 cursor-pointer"
            >
              <Eye size={14} />
              <span>Live Site</span>
            </button>

            {studioSection === 'blog' && (
              activeTab === 'list' ? (
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
              )
            )}

            {studioSection === 'leads' && (
              <button
                onClick={handleExportCsv}
                className="btn-pill-teal text-xs py-2 px-4 cursor-pointer flex items-center gap-1.5"
              >
                <Download size={14} />
                <span>Export CSV</span>
              </button>
            )}

            {/* Log Out Button */}
            <button
              onClick={handleLogout}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all cursor-pointer shadow-2xs"
              title="Log Out of Admin"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 1: LEADS & INQUIRIES STUDIO */}
        {/* ------------------------------------------------------------- */}
        {studioSection === 'leads' && (
          <div className="pt-8 space-y-8 text-left">
            
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#EFEBE3] shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#7A8B8D] font-bold block">Total Inquiries</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#083B40] block pt-1">{leads.length}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#EFEBE3] shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold block">New / Unread</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#B88E28] block pt-1">{newLeadsCount}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#EFEBE3] shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#1B6B75] font-bold block">Online Video</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#1B6B75] block pt-1">
                  {leads.filter(l => l.mode === 'online').length}
                </span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#EFEBE3] shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#7A8B8D] font-bold block">Offline Noida Office</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#083B40] block pt-1">
                  {leads.filter(l => l.mode === 'offline').length}
                </span>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EFEBE3] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'all', label: `All (${leads.length})` },
                  { id: 'new', label: `New (${newLeadsCount})` },
                  { id: 'online', label: 'Online Video' },
                  { id: 'offline', label: 'In-Person Office' },
                  { id: 'contacted', label: 'Contacted' },
                  { id: 'resolved', label: 'Resolved' },
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setLeadFilter(f.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                      leadFilter === f.id
                        ? 'bg-[#083B40] text-white'
                        : 'bg-gray-100 text-[#506062] hover:bg-gray-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[240px]">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  placeholder="Search seeker name, email, phone..."
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#083B40] bg-white"
                />
              </div>
            </div>

            {/* Leads Table / Card List */}
            {filteredLeads.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-[#EFEBE3] space-y-3">
                <Inbox size={40} className="text-gray-300 mx-auto" />
                <h3 className="text-base font-bold text-[#083B40]">No Inquiries Found</h3>
                <p className="text-xs text-[#7A8B8D]">No matching leads submitted or matching the current filter.</p>
                <button onClick={handleResetLeads} className="text-xs text-[#1B6B75] hover:underline font-semibold pt-2">
                  Seed Sample Inquiries
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-[#EFEBE3] shadow-sm overflow-hidden divide-y divide-gray-100">
                {filteredLeads.map((lead) => {
                  const cleanPhone = (lead.phone || '').replace(/[^0-9]/g, '');
                  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Namaste ${lead.name}, thank you for contacting Visions By Himani regarding ${lead.area}. How can we assist you with scheduling your session?`)}`;

                  return (
                    <div key={lead.id} className="p-5 sm:p-6 hover:bg-[#FAF8F3]/60 transition-colors flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      
                      {/* Left: Info */}
                      <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm sm:text-base font-bold text-[#083B40]">
                            {lead.name}
                          </span>

                          {/* Mode Badge */}
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                            lead.mode === 'online' 
                              ? 'bg-teal-50 text-teal-800 border border-teal-200' 
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}>
                            {lead.mode === 'online' ? <Video size={10} /> : <MapPin size={10} />}
                            <span>{lead.mode === 'online' ? 'Online Video' : 'In-Person Office'}</span>
                          </span>

                          {/* Area of Clarity */}
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-[#506062]">
                            {lead.area}
                          </span>

                          {/* Time */}
                          <span className="text-[11px] text-gray-400">
                            • {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>

                        {/* Contact details */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7C7E]">
                          <a href={`tel:${lead.phone}`} className="hover:text-[#083B40] font-medium flex items-center gap-1">
                            <PhoneCall size={12} className="text-[#C9A84E]" />
                            <span>{lead.phone}</span>
                          </a>
                          <a href={`mailto:${lead.email}`} className="hover:text-[#083B40] flex items-center gap-1">
                            <Mail size={12} className="text-[#C9A84E]" />
                            <span>{lead.email}</span>
                          </a>
                        </div>

                        {/* Message Snippet */}
                        <p className="text-xs text-[#506062] line-clamp-2 leading-relaxed bg-[#FAF8F3] p-2.5 rounded-xl border border-[#EFEBE3]">
                          "{lead.message}"
                        </p>
                      </div>

                      {/* Right: Status Dropdown & Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0 pt-2 lg:pt-0">
                        
                        {/* Status Selector */}
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl border focus:outline-none cursor-pointer ${
                            lead.status === 'new' 
                              ? 'bg-amber-50 text-amber-800 border-amber-300' 
                              : lead.status === 'contacted'
                              ? 'bg-blue-50 text-blue-800 border-blue-300'
                              : 'bg-green-50 text-green-800 border-green-300'
                          }`}
                        >
                          <option value="new">🟡 Status: New</option>
                          <option value="contacted">🔵 Status: Contacted</option>
                          <option value="resolved">🟢 Status: Resolved</option>
                        </select>

                        {/* WhatsApp Action */}
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#E8F8EE] text-[#25D366] hover:bg-[#D0F4DC] border border-[#A7E8BD] transition-colors"
                          title="Message seeker on WhatsApp"
                        >
                          <MessageCircle size={16} />
                        </a>

                        {/* View Details Modal */}
                        <button
                          onClick={() => setSelectedLeadModal(lead)}
                          className="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-[#083B40] transition-colors cursor-pointer"
                        >
                          View Details
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-2 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                          title="Delete Lead"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* Selected Lead Details Modal */}
            {selectedLeadModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
                <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DFC8] space-y-5 text-left relative">
                  <button
                    onClick={() => setSelectedLeadModal(null)}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center cursor-pointer"
                  >
                    <X size={16} />
                  </button>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C9A84E]">
                      INQUIRY DOSSIER
                    </span>
                    <h3 className="text-xl font-bold text-[#083B40]">
                      {selectedLeadModal.name}
                    </h3>
                    <span className="text-xs text-gray-400 block">
                      Submitted on {new Date(selectedLeadModal.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] text-xs">
                    <div>
                      <span className="text-gray-400 block font-semibold">Phone:</span>
                      <a href={`tel:${selectedLeadModal.phone}`} className="font-bold text-[#083B40] hover:underline">
                        {selectedLeadModal.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-semibold">Email:</span>
                      <a href={`mailto:${selectedLeadModal.email}`} className="font-bold text-[#083B40] hover:underline truncate block">
                        {selectedLeadModal.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-semibold">Mode Preference:</span>
                      <span className="font-bold text-[#083B40]">
                        {selectedLeadModal.mode === 'online' ? 'Online Video Call' : 'In-Person Noida Sanctuary'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-semibold">Topic:</span>
                      <span className="font-bold text-[#083B40]">{selectedLeadModal.area}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[#083B40] uppercase tracking-wide">
                      Seeker Concern / Message
                    </span>
                    <div className="p-4 rounded-2xl bg-white border border-gray-200 text-xs sm:text-sm text-[#2D3E40] leading-relaxed max-h-48 overflow-y-auto">
                      {selectedLeadModal.message}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-500">Status:</span>
                      <select
                        value={selectedLeadModal.status}
                        onChange={(e) => handleUpdateLeadStatus(selectedLeadModal.id, e.target.value)}
                        className="text-xs font-bold px-3 py-1.5 rounded-xl border border-gray-300"
                      >
                        <option value="new">🟡 New</option>
                        <option value="contacted">🔵 Contacted</option>
                        <option value="resolved">🟢 Resolved</option>
                      </select>
                    </div>

                    <a
                      href={`https://wa.me/${(selectedLeadModal.phone || '').replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-teal text-xs py-2 px-4 inline-flex items-center gap-1.5"
                    >
                      <MessageCircle size={14} />
                      <span>Chat WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* SECTION A: BLOG ARTICLES MANAGER */}
        {studioSection === 'blog' && (
          <>

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
      </>
    )}

    {/* ========================================================= */}
    {/* SECTION B: SOCIAL FEEDS & VIDEO HUB MANAGER */}
    {/* ========================================================= */}
    {studioSection === 'social' && (
      <div className="mt-8 space-y-8 text-left max-w-5xl mx-auto">
        
        {/* Explanatory Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#083B40] text-white space-y-3 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#C9A84E]">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-widest font-bold">
                Direct Video & Social Stream Sync
              </span>
            </div>
            <button
              type="button"
              onClick={handleResetSocialFeeds}
              className="text-xs text-neutral-300 hover:text-white underline cursor-pointer"
            >
              Reset to Defaults
            </button>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Configure Live Instagram Reels & YouTube Videos
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
            Paste your exact Instagram Reel links (e.g. <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#C9A84E]">https://www.instagram.com/reel/Cxxxxxx/</code>) or YouTube Video/Shorts links (e.g. <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#C9A84E]">https://youtu.be/xxxxxx</code>) below. The homepage will automatically embed and stream the playable video players!
          </p>
        </div>

        <form onSubmit={handleSaveSocialFeeds} className="space-y-8">
          
          {/* 1. INSTAGRAM REELS MANAGER */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFEBE3] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 p-0.5 text-white flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-pink-600">
                    <Film size={18} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083B40]">Instagram Reels Configuration</h3>
                  <p className="text-xs text-[#7A8B8D]">Account: {socialData.instagram.handle}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialData.instagram.reels.map((reel, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] space-y-3 text-left">
                  <span className="text-xs font-bold text-[#083B40] uppercase tracking-wider block">
                    Reel Slot #{idx + 1}
                  </span>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#506062] block">
                      Reel or Post URL:
                    </label>
                    <input
                      type="url"
                      value={reel.reelUrl || ''}
                      onChange={(e) => updateReelItem(idx, 'reelUrl', e.target.value)}
                      placeholder="https://www.instagram.com/reel/Cxxxxxx/"
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#083B40]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#506062] block">
                      Video Title / Topic:
                    </label>
                    <input
                      type="text"
                      value={reel.title || ''}
                      onChange={(e) => updateReelItem(idx, 'title', e.target.value)}
                      placeholder="Title of reel..."
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#083B40]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#506062] block">
                      Category Badge:
                    </label>
                    <input
                      type="text"
                      value={reel.category || ''}
                      onChange={(e) => updateReelItem(idx, 'category', e.target.value)}
                      placeholder="e.g. Visionary Insights"
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#083B40]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#506062] block">
                      Short Description:
                    </label>
                    <textarea
                      rows={2}
                      value={reel.excerpt || ''}
                      onChange={(e) => updateReelItem(idx, 'excerpt', e.target.value)}
                      placeholder="Brief description..."
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#083B40]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. YOUTUBE VIDEO MANAGER */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EFEBE3] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                  <Video size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#083B40]">YouTube Videos & Shorts Configuration</h3>
                  <p className="text-xs text-[#7A8B8D]">Channel: {socialData.youtube.handle}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Featured Video */}
              <div className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] space-y-3">
                <span className="text-xs font-bold text-[#083B40] uppercase tracking-wider block">
                  Featured YouTube Video
                </span>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#506062] block">
                    YouTube Video URL or Shorts Link:
                  </label>
                  <input
                    type="url"
                    value={socialData.youtube.featuredVideoUrl || ''}
                    onChange={(e) => setSocialData({
                      ...socialData,
                      youtube: { ...socialData.youtube, featuredVideoUrl: e.target.value }
                    })}
                    placeholder="https://www.youtube.com/watch?v=xxxxxx"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#083B40]"
                  />
                </div>
                <span className="text-[11px] text-[#7A8B8D] block">
                  Supports full YouTube URLs, shortened youtu.be links, or Shorts links.
                </span>
              </div>

              {/* Topic Videos */}
              {socialData.youtube.videos.map((vid, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#EFEBE3] space-y-3">
                  <span className="text-xs font-bold text-[#083B40] uppercase tracking-wider block">
                    Topic Video #{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#506062] block">
                      YouTube Video URL:
                    </label>
                    <input
                      type="url"
                      value={vid.videoUrl || ''}
                      onChange={(e) => updateYtItem(idx, 'videoUrl', e.target.value)}
                      placeholder="https://youtu.be/xxxxxx"
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#083B40]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#506062] block">
                      Title:
                    </label>
                    <input
                      type="text"
                      value={vid.title || ''}
                      onChange={(e) => updateYtItem(idx, 'title', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:border-[#083B40]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex items-center justify-end gap-4 pt-2">
            <button
              type="submit"
              className="btn-pill-teal text-sm py-3 px-8 cursor-pointer flex items-center gap-2 shadow-md"
            >
              <Save size={16} />
              <span>Save All Social Stream Settings</span>
            </button>
          </div>

        </form>

      </div>
    )}

      </div>
    </div>
  );
}
