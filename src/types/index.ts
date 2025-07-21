// Common types for the application

// Re-export all types from other type files
export * from './api';
export * from './ui';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageAlt: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  items: string[];
  benefits: string[];
}

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FormData {
  email: string;
}

export interface EmailJSResponse {
  status: number;
  text: string;
}



export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export interface PageProps {
  params?: { [key: string]: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// API Response types
export interface ApiResponse<T = any> {
  data?: T;
  message?: string;
  error?: string;
  status: number;
}

export interface EmailApiRequest {
  email: string;
}

export interface EmailApiResponse {
  message: string;
}

export interface AnalyticsApiRequest {
  event: string;
  email?: string;
  additionalData?: Record<string, any>;
}

export interface AnalyticsApiResponse {
  message: string;
}

// Form types
export interface FormState {
  isLoading: boolean;
  error: string;
  success: boolean;
}

export interface EmailFormProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
  showSuccessMessage?: boolean;
}

// Component Props types
export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface FeatureCardProps {
  feature: FeatureCard;
  className?: string;
}

export interface ProcessStepProps {
  step: ProcessStep;
  isActive: boolean;
  className?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export interface JoinWaitlistButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface ContactSectionProps {
  className?: string;
}

// Core Principle type for About page
export interface CorePrinciple {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Leadership Team type for About page
export interface LeadershipMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

// LinkedIn Post type for Summit page
export interface LinkedinPost {
  id: number;
  image: string;
  alt: string;
  url?: string;
}

// Hook return types
export interface UseScrollAnimationReturn {
  isSection3Visible: boolean;
  activeSteps: number[];
}

export interface UseEmailFormReturn {
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
  error: string;
  success: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  clearMessages: () => void;
}

// Environment variables type
export interface EnvironmentVariables {
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
  NEXT_PUBLIC_GA_TRACKING_ID: string;
  NEXT_PUBLIC_SITE_URL: string;
  NEXT_PUBLIC_API_BASE_URL: string;
  NEXT_PUBLIC_WAITLIST_FORM_URL: string;
  GA_API_SECRET: string;
}

// Error types
export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

export interface FormError {
  field: string;
  message: string;
}

// Event types for analytics
export type AnalyticsEvent =
  | 'join_waitlist'
  | 'page_view'
  | 'button_click'
  | 'form_submit'
  | 'external_link_click'
  | 'video_play'
  | 'accordion_toggle';

// Theme types
export interface ThemeColors {
  darkGreen: string;
  lightGreen: string;
  background: string;
  foreground: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// React component types
export type ComponentWithChildren<P = {}> = React.FC<P & { children?: React.ReactNode }>;
export type ComponentWithClassName<P = {}> = React.FC<P & { className?: string }>;

// Next.js specific types
export interface NextPageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface LayoutProps {
  children: React.ReactNode;
  params?: { [key: string]: string };
}
