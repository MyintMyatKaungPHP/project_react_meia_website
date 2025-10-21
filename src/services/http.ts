import axios from 'axios';
import { API_CONFIG } from '../config/api';

export const http = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

// Request interceptor (attach headers if needed)
http.interceptors.request.use(
  (config) => {
    // Example: attach token
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (unify error handling)
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optionally normalize API errors here
    return Promise.reject(error);
  }
);

export default http;


