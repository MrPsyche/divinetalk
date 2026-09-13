import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import WhyAdtPage from './pages/WhyAdtPage';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import BlogAdminPage from './pages/BlogAdminPage';
import ContactPage from './pages/ContactPage';
import EngagementPopup from './components/EngagementPopup';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    data: null,
  });

  // Synchronize browser history and hash navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      const targetBase = basePath || '/';
      
      if (currentPath !== targetBase) {
        window.history.pushState({}, '', path);
        setCurrentPath(targetBase);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.history.pushState({}, '', path);
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (data = {}) => {
    setBookingModalState({
      isOpen: true,
      data,
    });
  };

  const handleCloseBooking = () => {
    setBookingModalState({
      isOpen: false,
      data: null,
    });
  };

  // Render Page Content based on Path
  const renderPage = () => {
    // Admin Studio
    if (currentPath === '/admin' || currentPath === '/admin/blogs') {
      return (
        <BlogAdminPage
          onNavigate={handleNavigate}
        />
      );
    }

    // Dynamic Single Blog Post Route: /blog/:slug
    if (currentPath.startsWith('/blog/') && currentPath.length > 6) {
      const slug = currentPath.replace('/blog/', '').split('?')[0].split('#')[0];
      return (
        <BlogPostDetail
          slug={slug}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    // All Blogs
    if (currentPath === '/blog') {
      return (
        <BlogPage
          onOpenBooking={handleOpenBooking}
          onNavigate={handleNavigate}
        />
      );
    }

    // Why VBH / Why ADT
    if (currentPath === '/why-vbh' || currentPath === '/why-adt') {
      return (
        <WhyAdtPage
          onOpenBooking={handleOpenBooking}
          onNavigate={handleNavigate}
        />
      );
    }

    // Contact & Sanctuary Location Page
    if (currentPath === '/contact' || currentPath === '/contact-us') {
      return (
        <ContactPage
          onOpenBooking={handleOpenBooking}
          onNavigate={handleNavigate}
        />
      );
    }

    // Default to Home
    return (
      <HomePage
        onOpenBooking={handleOpenBooking}
        onNavigate={handleNavigate}
      />
    );
  };

  const isAdminPage = currentPath === '/admin' || currentPath === '/admin/blogs';

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F1] text-[#2D3E40] font-sans selection:bg-[#083B40] selection:text-[#FAF0D7]">
      
      {/* Sticky Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Routed Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Unified Footer */}
      {!isAdminPage && (
        <Footer
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      )}

      {/* Scroll Engagement Popup */}
      {!isAdminPage && (
        <EngagementPopup
          onOpenBooking={handleOpenBooking}
          onNavigate={handleNavigate}
        />
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalState.isOpen}
        onClose={handleCloseBooking}
        bookingData={bookingModalState.data}
      />

    </div>
  );
}
