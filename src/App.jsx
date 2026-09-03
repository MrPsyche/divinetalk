import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { useAudioAmbience } from './components/AudioAmbience';
import HomePage from './pages/HomePage';
import WhyAdtPage from './pages/WhyAdtPage';
import HealingPage from './pages/HealingPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    data: null,
  });

  // Activate audio hook
  useAudioAmbience(isAudioPlaying);

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

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  // Render Page Content based on Path
  const renderPage = () => {
    if (currentPath === '/why-adt') {
      return (
        <WhyAdtPage
          onOpenBooking={handleOpenBooking}
          onNavigate={handleNavigate}
        />
      );
    }
    if (currentPath === '/healing') {
      return (
        <HealingPage
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

  return (
    <div className="min-h-screen flex flex-col bg-ivory-200 text-obsidian-900 font-sans selection:bg-sacred-700 selection:text-gold-200">
      
      {/* Sticky Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={toggleAudio}
      />

      {/* Main Routed Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Unified Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Booking Pre-Flight Modal */}
      <BookingModal
        isOpen={bookingModalState.isOpen}
        onClose={handleCloseBooking}
        bookingData={bookingModalState.data}
      />

    </div>
  );
}
