// API service for Laravel backend integration
import { API_CONFIG, API_ENDPOINTS } from '../config/api';

const API_BASE_URL = API_CONFIG.BASE_URL;

// Types for API responses
export interface HeroData {
  id: number;
  title: string;
  subtitle: string;
  typewriter_texts?: string[];
  description: string;
  background_image: string;
  hero_images?: string[];
  button_text: string;
  button_link: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;
  rating: number;
}

export interface PartnerData {
  id: number;
  name: string;
  logo: string;
  website_url?: string;
}

export interface NewsData {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  published_at: string;
  category: {
    id: number;
    name: string;
  };
  tags: Array<{
    id: number;
    name: string;
  }>;
}

export interface StatsData {
  id: number;
  title: string;
  value: string;
  icon: string;
  description?: string;
}

export interface ServiceCardData {
  id: number;
  title: string;
  details: string;
  image: string;
  overlay_color: string;
  link: string;
}

// API service functions
export const apiService = {
  // Get hero section data
  async getHeroData(): Promise<HeroData> {
    try {
      const response = await fetch(`${API_BASE_URL}/site-settings/hero-section`);
      if (!response.ok) {
        throw new Error('Failed to fetch hero data');
      }
      const json = await response.json();
      
      if (!json.success) {
        throw new Error(json.message || 'API returned error');
      }
      
      const d = json.data;
      return {
        id: d.id ?? 1,
        title: d.school_name ?? 'MIEA School',
        subtitle: Array.isArray(d.typewriter_texts) ? d.typewriter_texts[0] ?? '' : '',
        typewriter_texts: Array.isArray(d.typewriter_texts) ? d.typewriter_texts : undefined,
        description: d.intro_text ?? '',
        background_image: Array.isArray(d.hero_images) ? d.hero_images[0] ?? '' : '',
        hero_images: Array.isArray(d.hero_images) ? d.hero_images : undefined,
        button_text: d.button_text ?? 'Learn More',
        button_link: d.button_link ?? '/about'
      };
    } catch (error) {
      console.warn('Hero API not available, using fallback data:', error);
      // Return fallback data when API is not available
      return {
        id: 1,
        title: "MIEA School",
        subtitle: "A Level and IGCSE Centre",
        description: "We are committed to providing the best education for students.",
        background_image: "", // Empty string will trigger the component's fallback image
        hero_images: undefined, // Will trigger fallback image in component
        button_text: "Learn More",
        button_link: "/about"
      };
    }
  },


  // Get testimonials data
  async getTestimonials(): Promise<TestimonialData[]> {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.HOME.TESTIMONIALS}`);
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      const json = await response.json();
      const list = json?.data || json;
      return (Array.isArray(list) ? list : []).map((t: any) => ({
        id: t.id,
        name: t.name,
        position: t.role ?? t.position ?? '',
        content: t.content,
        image: t.image_url ?? t.image,
        rating: 5
      }));
    } catch (error) {
      console.warn('API not available, using fallback data:', error);
      return [
        {
          id: 1,
          name: "Aung Aung",
          position: "Founder @ Rolex",
          content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
          image: "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-01.png",
          rating: 5
        },
        {
          id: 2,
          name: "Myat Myat",
          position: "Founder @ Ayro UI",
          content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
          image: "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-02.png",
          rating: 5
        },
        {
          id: 3,
          name: "Hla Hla",
          position: "Founder @ Trorex",
          content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
          image: "https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-04/image-03.png",
          rating: 5
        }
      ];
    }
  },

  // Get partners data
  async getPartners(): Promise<PartnerData[]> {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.HOME.PARTNERS}`);
      if (!response.ok) {
        throw new Error('Failed to fetch partners');
      }
      const json = await response.json();
      const list = json?.data || json;
      return (Array.isArray(list) ? list : []).map((p: any) => ({
        id: p.id,
        name: p.name,
        logo: p.image_url ?? p.logo,
        website_url: p.website_url
      }));
    } catch (error) {
      console.warn('API not available, using fallback data:', error);
      return [
        { id: 1, name: "Pearson", logo: "/assets/images/Pearson_logo.png", website_url: "https://pearson.com" },
        { id: 2, name: "CIE", logo: "/assets/images/CIE_logo.png", website_url: "https://cie.org.uk" },
        { id: 3, name: "iQuals", logo: "/assets/images/adtive_logo.png", website_url: "https://iquals.com" },
        { id: 4, name: "British Council", logo: "/assets/images/mta.png", website_url: "https://britishcouncil.org" },
        { id: 5, name: "TEDx", logo: "/assets/images/MIT_logo.png", website_url: "https://ted.com" }
      ];
    }
  },

  // Get recent news data
  async getRecentNews(limit: number = 3): Promise<NewsData[]> {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.HOME.RECENT_NEWS}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recent news');
      }
      const json = await response.json();
      const payload = json?.data || json;
      const list = Array.isArray(payload?.data) ? payload.data : (Array.isArray(payload) ? payload : []);
      return list.slice(0, limit).map((n: any) => ({
        id: n.id,
        title: n.title,
        slug: n.slug,
        excerpt: typeof n.content === 'string' ? (n.content.length > 160 ? n.content.slice(0, 160) + '…' : n.content) : '',
        content: n.content ?? '',
        featured_image: n.thumbnail ?? n.featured_image ?? '',
        published_at: n.created_at ?? n.published_at ?? '',
        category: n.category ? { id: n.category.id, name: n.category.name } : { id: 0, name: 'Uncategorized' },
        tags: Array.isArray(n.tags) ? n.tags.map((t: any) => ({ id: t.id ?? 0, name: t.name ?? String(t) })) : []
      }));
    } catch (error) {
      console.warn('API not available, using fallback data:', error);
      return [
        {
          id: 1,
          title: "MIEA School Opens New Science Laboratory",
          slug: "miea-school-opens-new-science-laboratory",
          excerpt: "We are excited to announce the opening of our new state-of-the-art science laboratory.",
          content: "Full content here...",
          featured_image: "/assets/images/2024_graduation.jpg",
          published_at: "2024-01-15T10:00:00Z",
          category: { id: 1, name: "News" },
          tags: [{ id: 1, name: "Science" }, { id: 2, name: "Laboratory" }]
        }
      ];
    }
  },

  // Get statistics data
  async getStatistics(): Promise<StatsData[]> {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.HOME.STATISTICS}`);
      if (!response.ok) {
        throw new Error('Failed to fetch statistics');
      }
      const json = await response.json();
      const d = json?.data || json;
      const items: StatsData[] = [];
      if (typeof d?.graduated_students !== 'undefined') items.push({ id: 1, title: 'Graduated Students', value: String(d.graduated_students), icon: '🎓' });
      if (typeof d?.qualified_teachers !== 'undefined') items.push({ id: 2, title: 'Qualified Teachers', value: String(d.qualified_teachers), icon: '👨‍🏫' });
      if (typeof d?.courses_offered !== 'undefined') items.push({ id: 3, title: 'Courses Offered', value: String(d.courses_offered), icon: '📚' });
      if (typeof d?.student_teacher_ratio !== 'undefined') items.push({ id: 4, title: 'Student-Teacher Ratio', value: String(d.student_teacher_ratio), icon: '👥' });
      return items;
    } catch (error) {
      console.warn('API not available, using fallback data:', error);
      return [
        { id: 1, title: "Students", value: "500+", icon: "👥", description: "Active students" },
        { id: 2, title: "Teachers", value: "50+", icon: "👨‍🏫", description: "Expert teachers" },
        { id: 3, title: "Courses", value: "20+", icon: "📚", description: "Available courses" },
        { id: 4, title: "Success Rate", value: "95%", icon: "🎯", description: "Pass rate" }
      ];
    }
  },

  // Get service cards data
  async getServiceCards(): Promise<ServiceCardData[]> {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.HOME.SERVICE_CARDS}`);
      if (!response.ok) {
        throw new Error('Failed to fetch service cards');
      }
      const json = await response.json();
      
      if (!json.success) {
        throw new Error(json.message || 'API returned error');
      }
      
      const list = json?.data || [];
      return (Array.isArray(list) ? list : []).map((card: any) => ({
        id: card.id,
        title: card.title,
        details: card.details,
        image: card.image,
        overlay_color: card.overlay_color,
        link: card.link
      }));
    } catch (error) {
      console.warn('Service Cards API not available, using fallback data:', error);
      return [
        {
          id: 1,
          title: "A Level",
          details: "Year 12 - Year 13 (iAS & iAL)",
          image: "/assets/images/2024_graduation.jpg",
          overlay_color: "#ef4444",
          link: "/programmes#a-level"
        },
        {
          id: 2,
          title: "Upper Secondary Level",
          details: "Year 10 - Year 11 (iGCSE)",
          image: "/assets/images/2024_graduation.jpg",
          overlay_color: "#22c55e",
          link: "/programmes#upper-secondary"
        },
        {
          id: 3,
          title: "Lower Secondary Level",
          details: "Year 7 - Year 8 - Year 9 (Pre-iGCSE)",
          image: "/assets/images/2024_graduation.jpg",
          overlay_color: "#3b82f6",
          link: "/programmes#lower-secondary"
        }
      ];
    }
  },

  // Get all home page data at once
  async getHomePageData() {
    try {
      const [hero, testimonials, partners, recentNews, statistics, serviceCards] = await Promise.all([
        this.getHeroData(),
        this.getTestimonials(),
        this.getPartners(),
        this.getRecentNews(3),
        this.getStatistics(),
        this.getServiceCards()
      ]);

      return {
        hero,
        testimonials,
        partners,
        recentNews,
        statistics,
        serviceCards
      };
    } catch (error) {
      console.error('Error fetching home page data:', error);
      throw error;
    }
  }
};

export default apiService;
