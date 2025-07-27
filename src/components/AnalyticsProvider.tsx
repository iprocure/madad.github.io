'use client';

import { useEffect } from 'react';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        // Configure Google Analytics
        window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID!, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    initGoogleAnalytics();

    // Track initial page view
    const trackInitialPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Delay initial page view tracking to ensure gtag is loaded
    const timer = setTimeout(trackInitialPageView, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;
