/**
 * Social Feeds & Video Storage Manager
 * Stores and manages real Instagram Reels and YouTube video embeds
 */

const SOCIAL_STORAGE_KEY = 'vbh_social_feeds_v4';

export const DEFAULT_SOCIAL_FEEDS = {
  instagram: {
    channelUrl: 'https://www.instagram.com/adivinetalk/',
    handle: '@adivinetalk',
    title: 'HimaniK Dograa & A Divine Talk',
    reels: [
      {
        id: 'reel-1',
        title: 'Every Journey towards Clarity begins with a Single Decision',
        category: 'Visionary Insights',
        reelUrl: 'https://www.instagram.com/reel/DXzim8QysNp/',
        reelId: 'DXzim8QysNp',
        videoSrc: '/videos/reels/reel1.mp4',
        excerpt: 'Client reflection on how taking a single intuitive consultation transformed their life direction.'
      },
      {
        id: 'reel-2',
        title: 'Why Every Business Owner Needs a 30-Minute 6th Sense Consultation',
        category: 'Business & Career',
        reelUrl: 'https://www.instagram.com/reel/DbI_UHBSGj1/',
        reelId: 'DbI_UHBSGj1',
        videoSrc: '/videos/reels/reel2.mp4',
        excerpt: 'Rakesh Ji shares why visionary intuition cuts through corporate impasses and executive decision fatigue.'
      },
      {
        id: 'reel-3',
        title: 'When the Guidance is Real — Dil Maange More',
        category: 'Client Trust',
        reelUrl: 'https://www.instagram.com/reel/DXMqSqSCGkI/',
        reelId: 'DXMqSqSCGkI',
        videoSrc: '/videos/reels/reel3.mp4',
        excerpt: 'Repeat client reviews and real-life experiences with Himani’s 6th sense visionary perception.'
      }
    ]
  },
  youtube: {
    channelUrl: 'https://www.youtube.com/@ADivineTalk',
    handle: '@ADivineTalk',
    featuredVideoId: '',
    featuredVideoUrl: 'https://www.youtube.com/@ADivineTalk',
    videos: [
      {
        id: 'yt-1',
        title: 'Understanding Visionary Consultations with HimaniK Dograa',
        videoId: '',
        videoUrl: 'https://www.youtube.com/@ADivineTalk',
        category: 'Spiritual Perspective',
        description: 'An introductory discourse on non-judgmental guidance and root cause clarity.'
      },
      {
        id: 'yt-2',
        title: 'Navigating Sudden Life Turning Points & Fear-Free Decision Making',
        videoId: '',
        videoUrl: 'https://www.youtube.com/@ADivineTalk',
        category: 'Guidance',
        description: 'How to stand firm in your sovereignty during major personal crossroads.'
      }
    ]
  },
  facebook: {
    pageUrl: 'https://www.facebook.com/ADivineTalk/',
    handle: '@ADivineTalk'
  }
};

/**
 * Extracts Instagram shortcode from standard URL
 * Supports:
 * - https://www.instagram.com/reel/Cxxxxxx/
 * - https://www.instagram.com/p/Cxxxxxx/
 */
export function extractInstagramId(url) {
  if (!url) return null;
  const match = url.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}

/**
 * Extracts YouTube Video ID from standard URL
 * Supports:
 * - https://www.youtube.com/watch?v=XXXXX
 * - https://youtu.be/XXXXX
 * - https://www.youtube.com/shorts/XXXXX
 * - https://www.youtube.com/embed/XXXXX
 */
export function extractYouTubeId(urlOrId) {
  if (!urlOrId) return null;
  const str = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return str;
  }
  const match = str.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
}

export function getSocialFeeds() {
  try {
    const saved = localStorage.getItem(SOCIAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.instagram && parsed.youtube) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading social feeds from storage', e);
  }
  return DEFAULT_SOCIAL_FEEDS;
}

export function saveSocialFeeds(data) {
  try {
    localStorage.setItem(SOCIAL_STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('vbh_social_updated'));
  } catch (e) {
    console.error('Error saving social feeds to storage', e);
  }
}

export function resetSocialFeedsToDefault() {
  saveSocialFeeds(DEFAULT_SOCIAL_FEEDS);
  return DEFAULT_SOCIAL_FEEDS;
}
