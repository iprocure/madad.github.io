// API-specific types and interfaces

import { AxiosResponse, AxiosError } from 'axios';

// Base API response structure
export interface BaseApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp: string;
}

// API endpoint types
export interface ApiEndpoints {
  email: '/api/email';
  analytics: '/api/analytics';
}

// Request/Response types for each endpoint
export namespace EmailAPI {
  export interface Request {
    email: string;
  }

  export interface Response {
    message: string;
    emailId?: string;
  }

  export interface Error {
    error: string;
    details?: string;
  }
}

export namespace AnalyticsAPI {
  export interface Request {
    event: string;
    email?: string;
    additionalData?: Record<string, any>;
    timestamp?: string;
    sessionId?: string;
  }

  export interface Response {
    message: string;
    eventId?: string;
  }

  export interface Error {
    error: string;
    details?: string;
  }
}

// HTTP method types
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// API configuration
export interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
  retries?: number;
  retryDelay?: number;
}

// Custom Axios response type
export type ApiResponse<T = any> = AxiosResponse<BaseApiResponse<T>>;

// Custom Axios error type
export interface ApiError extends AxiosError {
  response?: AxiosResponse<BaseApiResponse>;
}

// Request interceptor types
export interface RequestInterceptor {
  onFulfilled?: (config: any) => any;
  onRejected?: (error: any) => any;
}

// Response interceptor types
export interface ResponseInterceptor {
  onFulfilled?: (response: ApiResponse) => ApiResponse;
  onRejected?: (error: ApiError) => Promise<ApiError>;
}

// Service method types
export interface EmailService {
  sendWaitlistEmail: (email: string) => Promise<EmailAPI.Response>;
}

export interface AnalyticsService {
  trackEvent: (
    event: string, 
    email?: string, 
    additionalData?: any
  ) => Promise<AnalyticsAPI.Response>;
}

export interface ExternalApiService {
  submitToGoogleForm: (email: string) => Promise<void>;
}

// API client interface
export interface ApiClient {
  get<T = any>(url: string, config?: any): Promise<ApiResponse<T>>;
  post<T = any>(url: string, data?: any, config?: any): Promise<ApiResponse<T>>;
  put<T = any>(url: string, data?: any, config?: any): Promise<ApiResponse<T>>;
  delete<T = any>(url: string, config?: any): Promise<ApiResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: any): Promise<ApiResponse<T>>;
}

// Rate limiting types
export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

// Cache types
export interface CacheConfig {
  ttl: number; // Time to live in seconds
  maxSize: number; // Maximum number of cached items
}

// Retry configuration
export interface RetryConfig {
  retries: number;
  retryDelay: number;
  retryCondition?: (error: ApiError) => boolean;
}
