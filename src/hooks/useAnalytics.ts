'use client';

import { useEffect, useCallback } from 'react';
import { analyticsService } from '@/lib/api';
import { AnalyticsEvent } from '@/types';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  // Track page view on mount
  useEffect(() => {
    const trackPageView = () => {
      const pageData = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      };

      // Track with Google Analytics
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', pageData);
      }

      // Track with our API
      analyticsService.trackEvent('page_view', undefined, pageData);
    };

    trackPageView();
  }, []);

  const trackEvent = useCallback((
    event: AnalyticsEvent,
    email?: string,
    additionalData?: Record<string, any>
  ) => {
    // Track with Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, {
        email,
        ...additionalData
      });
    }

    // Track with our API
    analyticsService.trackEvent(event, email, additionalData);
  }, []);

  const trackButtonClick = useCallback((
    buttonName: string,
    buttonLocation: string,
    additionalData?: Record<string, any>
  ) => {
    trackEvent('button_click', undefined, {
      button_name: buttonName,
      button_location: buttonLocation,
      page_path: window.location.pathname,
      ...additionalData
    });
  }, [trackEvent]);

  const trackFormSubmit = useCallback((
    formName: string,
    formLocation: string,
    success: boolean,
    email?: string,
    additionalData?: Record<string, any>
  ) => {
    trackEvent('form_submit', email, {
      form_name: formName,
      form_location: formLocation,
      success,
      page_path: window.location.pathname,
      ...additionalData
    });
  }, [trackEvent]);

  const trackExternalLinkClick = useCallback((
    linkUrl: string,
    linkText: string,
    additionalData?: Record<string, any>
  ) => {
    trackEvent('external_link_click', undefined, {
      link_url: linkUrl,
      link_text: linkText,
      page_path: window.location.pathname,
      ...additionalData
    });
  }, [trackEvent]);

  const trackVideoPlay = useCallback((
    videoTitle: string,
    videoDuration?: number,
    additionalData?: Record<string, any>
  ) => {
    trackEvent('video_play', undefined, {
      video_title: videoTitle,
      video_duration: videoDuration,
      page_path: window.location.pathname,
      ...additionalData
    });
  }, [trackEvent]);

  const trackWaitlistJoin = useCallback((
    email: string,
    source?: string,
    campaign?: string,
    additionalData?: Record<string, any>
  ) => {
    trackEvent('join_waitlist', email, {
      source,
      campaign,
      page_path: window.location.pathname,
      ...additionalData
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmit,
    trackExternalLinkClick,
    trackVideoPlay,
    trackWaitlistJoin
  };
};
