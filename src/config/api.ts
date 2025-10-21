// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://project_laravel_miea_portal.test/api',
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
};

// API Endpoints
export const API_ENDPOINTS = {
  HOME: {
    HERO: '/site-settings/hero-section',
    TESTIMONIALS: '/testimonials',
    PARTNERS: '/partners',
    RECENT_NEWS: '/blog/posts/published',
    STATISTICS: '/site-settings/achievements',
  },
  NEWS: {
    LIST: '/blog/posts',
    DETAIL: '/blog/posts',
    CATEGORIES: '/blog/categories',
    SEARCH: '/blog/posts',
  },
  CONTACT: {
    SEND_MESSAGE: '/contact/send',
  },
};

export default API_CONFIG;
