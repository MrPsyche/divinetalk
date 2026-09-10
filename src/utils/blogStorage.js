/**
 * Blog Storage & Publishing Manager
 * Provides client-side persistent storage and CRUD operations for Visions By Himani Blog Studio
 */

const STORAGE_KEY = 'vbh_blog_posts_v1';

export const INITIAL_BLOG_POSTS = [
  {
    id: "clarity-over-information",
    slug: "clarity-over-information",
    title: "Why You Don't Need More Information to Make Difficult Decisions",
    excerpt: "When facing a major life crossroad, gathering endless data often increases paralysis. Discover how seeing the root cause brings immediate clarity.",
    content: `When standing at a major crossroads in life — whether choosing between two career paths, deciding whether to relocate, or navigating a high-stakes relationship choice — our default instinct is almost always to search for **more information**.

We make endless pros-and-cons lists, consult dozens of friends, read articles, and calculate probabilities. Yet paradoxically, the more data we accumulate, the more overwhelmed and paralyzed we become.

### The Illusion of "More Data"

Information answers the *what* and the *how*, but it rarely reveals the **underlying why**. 

In spiritual and intuitive traditions, decision paralysis is not caused by a lack of facts. It is caused by **energetic fog** — conflicting emotional fears, subconscious conditioning, and expectations from other people that cloud your own internal compass.

> *"Some answers don't need more information. They need a clearer perspective."*

### Moving from Paralysis to Action

When you look at a situation through an intuitive, visionary lens, the noise drops away. You begin to see:
1. **The Root Fear**: What are you actually afraid of losing?
2. **The Energetic Trajectory**: Which path aligns with your true vitality versus external pressure?
3. **Your Sovereign Free Will**: Remembering that you are the creator of your destiny.

### The Sacred Pause

Before making your next big decision, take a step back from gathering more opinions. Give yourself the quiet space to connect with the core question on your mind. 

When you seek perspective at the root level, the right step forward stops feeling like a complicated puzzle — it becomes crystal clear.`,
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    category: "Decision Making",
    author: "HimaniK Dograa",
    readTime: "4 min read",
    date: "September 2026",
    publishedAt: "2026-09-01T10:00:00.000Z"
  },
  {
    id: "navigating-relationship-patterns",
    slug: "navigating-relationship-patterns",
    title: "Healing Recurring Misunderstandings in Relationships",
    excerpt: "Why surface arguments are rarely the real issue, and how intuitive perspective uncovers the energetic rift before it leads to separation.",
    content: `In relationships, most repetitive conflicts are not about the dishes, schedules, or minor daily friction. They are symptoms of **unresolved energetic patterns** that operate beneath the conscious surface.

### The Anatomy of Repetitive Arguments

Have you ever found yourself having the exact same argument with your partner or family member for the tenth time, wondering why neither of you can break the cycle?

When two people connect, they do not just communicate with words; they interact through their emotional fields. When past wounds, unspoken expectations, or energetic cord entanglements go unacknowledged, simple conversations trigger defensive reactions.

### Three Steps to Restore Relational Harmony

1. **Recognize the Pattern without Blame**: Notice when you are reacting to old historical wounds rather than the present moment.
2. **Look at the Root Need**: Beneath anger is almost always hurt; beneath withdrawal is almost always a fear of rejection.
3. **Sever Unconscious Cord Drain**: Cleanse the space between you so you can speak to each other soul-to-soul.

Through visionary consultation, we have seen hundreds of marriages and family bonds completely turn around simply by revealing the true hidden rift that neither person was seeing.`,
    coverImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
    category: "Relationships",
    author: "HimaniK Dograa",
    readTime: "5 min read",
    date: "August 2026",
    publishedAt: "2026-08-20T10:00:00.000Z"
  },
  {
    id: "career-crossroads-intuition",
    slug: "career-crossroads-intuition",
    title: "Overcoming Professional Stagnation Without Compromising Your Values",
    excerpt: "How to align your inner calling with executive and business decisions when standing at a critical career turning point.",
    content: `Career stagnation is one of the most frustrating experiences a person can face. You are working hard, delivering results, yet doors seem inexplicably closed, promotions are delayed, or you feel a deep, nagging sense of emptiness in your role.

### Why Hard Work Isn't Always Enough

In modern corporate culture, we are taught that effort always equals advancement. But from an energetic perspective, professional momentum requires **energetic alignment**.

If your subconscious frequency is misaligned with your workplace environment — or if you are holding onto imposter syndrome and scarcity fears — you inadvertently create resistance against your own success.

### Finding Your True Professional Calling

- **Clarify Your Core Strengths**: Where does your energy naturally flow with effortless excellence?
- **Release Workplace Resentment**: Harboring bitterness toward colleagues or managers creates an invisible roadblock in your career field.
- **Trust the Timing of Opportunity**: Knowing when to stay and build versus when to pivot toward entrepreneurial ventures or new roles.

Gaining intuitive foresight into your career trajectory gives you the confidence to negotiate, pivot, and step boldly into your highest potential.`,
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    category: "Career & Purpose",
    author: "HimaniK Dograa",
    readTime: "4 min read",
    date: "August 2026",
    publishedAt: "2026-08-10T10:00:00.000Z"
  }
];

export function getBlogPosts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error reading blog posts from storage", e);
  }
  // Initialize storage with defaults
  saveBlogPosts(INITIAL_BLOG_POSTS);
  return INITIAL_BLOG_POSTS;
}

export function saveBlogPosts(posts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (e) {
    console.error("Error saving blog posts to storage", e);
  }
}

export function getBlogPostBySlug(slugOrId) {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slugOrId || p.id === slugOrId) || null;
}

export function createBlogPost(data) {
  const posts = getBlogPosts();
  const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  
  const newPost = {
    id: `post-${Date.now()}`,
    slug: slug,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    coverImage: data.coverImage || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    category: data.category || "Guidance & Clarity",
    author: data.author || "HimaniK Dograa",
    readTime: data.readTime || "4 min read",
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    publishedAt: new Date().toISOString()
  };

  const updated = [newPost, ...posts];
  saveBlogPosts(updated);
  return newPost;
}

export function updateBlogPost(id, data) {
  const posts = getBlogPosts();
  const updated = posts.map((p) => {
    if (p.id === id || p.slug === id) {
      return {
        ...p,
        ...data,
        slug: data.slug || p.slug
      };
    }
    return p;
  });
  saveBlogPosts(updated);
  return updated.find((p) => p.id === id || p.slug === id);
}

export function deleteBlogPost(id) {
  const posts = getBlogPosts();
  const updated = posts.filter((p) => p.id !== id && p.slug !== id);
  saveBlogPosts(updated);
  return updated;
}

export function resetBlogPostsToDefault() {
  saveBlogPosts(INITIAL_BLOG_POSTS);
  return INITIAL_BLOG_POSTS;
}
