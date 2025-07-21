// Analytics utility for Google Analytics tracking

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Analytics event types
export type AnalyticsEventName =
  | 'page_view'
  | 'join_waitlist'
  | 'button_click'
  | 'form_submit'
  | 'external_link_click'
  | 'video_play'
  | 'accordion_toggle'
  | 'scroll_depth'
  | 'time_on_page'
  | 'bounce_rate'
  | 'conversion'
  | 'engagement';

// Analytics utility class
export class Analytics {
  private static instance: Analytics;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Analytics is initialized via Google Analytics script
      this.isInitialized = true;
      console.log('Analytics initialized successfully');
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }



  public trackEvent(
    eventName: AnalyticsEventName,
    parameters: Record<string, any> = {}
  ): void {
    try {
      // Track with Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
          ...parameters,
          timestamp: new Date().toISOString(),
        });
      }

      // Additional analytics tracking could be added here if needed

      // Log for debugging in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', eventName, parameters);
      }
    } catch (error) {
      console.error('Failed to track analytics event:', error);
    }
  }

  public trackPageView(
    title: string = document.title,
    location: string = window.location.href,
    path: string = window.location.pathname
  ): void {
    this.trackEvent('page_view', {
      page_title: title,
      page_location: location,
      page_path: path,
    });
  }

  public trackButtonClick(
    buttonName: string,
    location: string,
    additionalData: Record<string, any> = {}
  ): void {
    this.trackEvent('button_click', {
      button_name: buttonName,
      button_location: location,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }

  public trackFormSubmit(
    formName: string,
    success: boolean,
    email?: string,
    additionalData: Record<string, any> = {}
  ): void {
    this.trackEvent('form_submit', {
      form_name: formName,
      success,
      email,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }

  public trackExternalLinkClick(
    linkUrl: string,
    linkText: string,
    additionalData: Record<string, any> = {}
  ): void {
    this.trackEvent('external_link_click', {
      link_url: linkUrl,
      link_text: linkText,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }

  public trackVideoPlay(
    videoTitle: string,
    videoDuration?: number,
    additionalData: Record<string, any> = {}
  ): void {
    this.trackEvent('video_play', {
      video_title: videoTitle,
      video_duration: videoDuration,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }

  public trackAccordionToggle(
    itemId: string,
    action: 'open' | 'close',
    additionalData: Record<string, any> = {}
  ): void {
    this.trackEvent('accordion_toggle', {
      accordion_item: itemId,
      action,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }

  public trackScrollDepth(depth: number): void {
    this.trackEvent('scroll_depth', {
      scroll_depth: depth,
      page_path: window.location.pathname,
    });
  }

  public trackTimeOnPage(timeInSeconds: number): void {
    this.trackEvent('time_on_page', {
      time_on_page: timeInSeconds,
      page_path: window.location.pathname,
    });
  }

  public trackWaitlistJoin(
    email: string,
    source?: string,
    campaign?: string,
    additionalData: Record<string, any> = {}
  ): void {
    this.trackEvent('join_waitlist', {
      email,
      source,
      campaign,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }

  // Enhanced conversion tracking
  public trackConversion(
    conversionType: string,
    value?: number,
    currency: string = 'USD',
    additionalData: Record<string, any> = {}
  ): void {
    this.trackEvent('conversion', {
      conversion_type: conversionType,
      value,
      currency,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }

  // User engagement tracking
  public trackEngagement(
    engagementType: string,
    engagementValue: number,
    additionalData: Record<string, any> = {}
  ): void {
    this.trackEvent('engagement', {
      engagement_type: engagementType,
      engagement_value: engagementValue,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }
}

// Export singleton instance
export const analytics = Analytics.getInstance();

// Convenience functions
export const trackEvent = (
  eventName: AnalyticsEventName,
  parameters: Record<string, any> = {}
) => analytics.trackEvent(eventName, parameters);

export const trackPageView = (
  title?: string,
  location?: string,
  path?: string
) => analytics.trackPageView(title, location, path);

export const trackButtonClick = (
  buttonName: string,
  location: string,
  additionalData?: Record<string, any>
) => analytics.trackButtonClick(buttonName, location, additionalData);

export const trackFormSubmit = (
  formName: string,
  success: boolean,
  email?: string,
  additionalData?: Record<string, any>
) => analytics.trackFormSubmit(formName, success, email, additionalData);

export const trackExternalLinkClick = (
  linkUrl: string,
  linkText: string,
  additionalData?: Record<string, any>
) => analytics.trackExternalLinkClick(linkUrl, linkText, additionalData);

export const trackWaitlistJoin = (
  email: string,
  source?: string,
  campaign?: string,
  additionalData?: Record<string, any>
) => analytics.trackWaitlistJoin(email, source, campaign, additionalData);
