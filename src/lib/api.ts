import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth headers or other modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors here
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Email service
export const emailService = {
  async sendWaitlistEmail(email: string) {
    try {
      const response = await api.post('/api/email', { email });
      return response.data;
    } catch (error) {
      throw new Error('Failed to send email');
    }
  }
};

// Analytics service
export const analyticsService = {
  async trackEvent(event: string, email?: string, additionalData?: any) {
    try {
      const response = await api.post('/api/analytics', {
        event,
        email,
        additionalData
      });
      return response.data;
    } catch (error) {
      console.error('Failed to track analytics event:', error);
      // Don't throw error for analytics to avoid breaking user flow
    }
  }
};

// External API service for third-party integrations
export const externalApiService = {
  async submitToGoogleForm(email: string) {
    try {
      // This would be used if we need to submit to Google Forms directly
      // For now, we're using the waitlist form URL directly
      const formUrl = process.env.NEXT_PUBLIC_WAITLIST_FORM_URL;
      if (formUrl) {
        window.open(formUrl, '_blank');
      }
    } catch (error) {
      console.error('Failed to submit to Google Form:', error);
      throw error;
    }
  }
};

export default api;
