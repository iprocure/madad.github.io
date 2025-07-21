import { Metadata } from 'next';
import { DEFAULT_SEO } from './constants';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: any;
}

export const generateMetadata = (config: SEOConfig = {}): Metadata => {
  const {
    title = DEFAULT_SEO.title,
    description = DEFAULT_SEO.description,
    keywords = DEFAULT_SEO.keywords,
    ogImage = DEFAULT_SEO.ogImage,
    ogUrl = DEFAULT_SEO.ogUrl,
    canonical,
    noIndex = false,
    noFollow = false
  } = config;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://madadfintech.com';
  const fullOgUrl = ogUrl?.startsWith('http') ? ogUrl : `${baseUrl}${ogUrl || ''}`;
  const fullCanonical = canonical?.startsWith('http') ? canonical : `${baseUrl}${canonical || ''}`;

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: 'Madad FinTech' }],
    creator: 'Madad FinTech',
    publisher: 'Madad FinTech',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title,
      description,
      url: fullOgUrl,
      siteName: 'Madad FinTech',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@madadfintech',
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };

  return metadata;
};

// Generate structured data for different page types
export const generateStructuredData = {
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Madad FinTech',
    description: 'Qatar\'s first invoice discounting platform for MSMEs',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo_top.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+974-3039-0833',
      contactType: 'customer service',
      email: 'contactus@madadfintech.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '201-42, Kate Business Center, Al Bustan Building',
      addressLocality: 'Al Sadd',
      addressRegion: 'Doha',
      addressCountry: 'Qatar',
    },
    sameAs: [
      'https://www.linkedin.com/company/madad-financial-technology/',
      'https://www.instagram.com/madad.fintech',
    ],
  }),

  website: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Madad FinTech',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    description: 'Qatar\'s first invoice discounting platform for MSMEs',
    publisher: {
      '@type': 'Organization',
      name: 'Madad FinTech',
    },
  }),

  service: () => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Invoice Discounting Platform',
    description: 'Tech-enabled invoice discounting platform for MSMEs in Qatar',
    provider: {
      '@type': 'Organization',
      name: 'Madad FinTech',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Qatar',
    },
    serviceType: 'Financial Technology',
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }),
};

// SEO utility functions
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};

export const generatePageTitle = (pageTitle: string, includeCompany = true): string => {
  const companyName = 'Madad FinTech';
  if (!includeCompany) return pageTitle;
  return `${pageTitle} | ${companyName}`;
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://madadfintech.com';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};
