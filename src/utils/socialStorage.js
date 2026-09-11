/**
 * Social Feeds & Video Storage Manager
 * Stores and manages real Instagram Reels and YouTube video embeds
 */

const SOCIAL_STORAGE_KEY = 'vbh_social_feeds_v2';

export const DEFAULT_SOCIAL_FEEDS = {
  instagram: {
    channelUrl: 'https://www.instagram.com/adivinetalk/',
    handle: '@adivinetalk',
    title: 'HimaniK Dograa & A Divine Talk',
    reels: [
      {
        id: 'reel-1',
        title: 'How Intuitive Siddhi Perception Works Without Personal Details',
        category: 'Visionary Insights',
        reelUrl: 'https://www.instagram.com/adivinetalk/',
        reelId: '',
        excerpt: 'Watch Himani discuss how root energetic frequencies reveal the core truth of your situation.'
      },
      {
        id: 'reel-2',
        title: 'Relationship Crossroads & Breaking Repetitive Emotional Cycles',
        category: 'Relationships',
        reelUrl: 'https://www.instagram.com/adivinetalk/',
        reelId: '',
        excerpt: 'Understanding the unspoken emotional dynamics that cause marital distance.'
      },
      {
        id: 'reel-3',
        title: 'Career Plateau vs Realignment — Finding Your Unblocked Path',
        category: 'Career & Purpose',
        reelUrl: 'https://www.instagram.com/adivinetalk/',
        reelId: '',
        excerpt: 'Why hard work alone hits a ceiling and how to unlock the energetic momentum.'
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
