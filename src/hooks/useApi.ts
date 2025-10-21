import { useState, useEffect } from 'react';
import apiService, { HeroData, TestimonialData, PartnerData, NewsData, StatsData } from '../services/api';

// Custom hook for API data fetching with loading and error states
export const useApi = <T>(apiCall: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiCall]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

// Specific hooks for different data types
export const useHeroData = () => useApi(() => apiService.getHeroData());
export const useTestimonials = () => useApi(() => apiService.getTestimonials());
export const usePartners = () => useApi(() => apiService.getPartners());
export const useRecentNews = (limit: number = 3) => useApi(() => apiService.getRecentNews(limit));
export const useStatistics = () => useApi(() => apiService.getStatistics());

// Hook for all home page data
export const useHomePageData = () => {
  const [data, setData] = useState<{
    hero: HeroData | null;
    testimonials: TestimonialData[];
    partners: PartnerData[];
    recentNews: NewsData[];
    statistics: StatsData[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiService.getHomePageData();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Home page data error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiService.getHomePageData();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

