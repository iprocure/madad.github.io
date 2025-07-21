import { NavItem, FeatureCard, ProcessStep, AccordionItem, ContactInfo, SocialLink } from '@/types';

// Navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Web Summit, 2025', href: '/summit' },
];

// Feature cards data
export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'instant-cash',
    title: 'Get immediate cash in your account',
    description: 'We know your pain of waiting for weeks and sometimes months to get access to funds. Our tech-enabled system works seamlessly to provide you with instant cash. Apply for discounting invoice as soon as you raise it to your customer, so that you can have cash against the invoice in your account within days.',
    icon: '/cashIcon.png',
    imageAlt: 'Cash icon'
  },
  {
    id: 'multiple-financiers',
    title: 'Get access to multiple financiers',
    description: 'We understand your dependence on your bank for your financing needs. We break that dependence and provide you access to multiple financiers, who look at your application and if approved provide you with instant cash. We work with Banks, NBFCs as well as High Net-worth Individuals.',
    icon: 'QAR',
    imageAlt: 'Multiple financiers icon'
  },
  {
    id: 'credit-score',
    title: 'Build your Business Credit Score',
    description: 'We feel your pain of proving your business\'s worth to get access to funds. We bring the Business Scoring System to Qatar, that enables you to show your creditworthiness to different stakeholders with just one score. Just like your personal credit score. You can use the score not just for financing but also for business needs like renting property, buying machinery etc.',
    icon: '/build_ur_business.png',
    imageAlt: 'Business score icon'
  },
  {
    id: 'msme-ecosystem',
    title: 'Become a part of Qatari MSME ecosystem',
    description: 'We understand your search for best practices for various business aspects. We are creating the biggest MSMEs community in Qatar, where you learn, share, and showcase the best practices across various aspects of your business with/from industry experts and fellow businesses in Qatar.',
    icon: '/qatari_msme1.png',
    imageAlt: 'MSME ecosystem icon'
  }
];

// Process steps data
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Become a member',
    subtitle: 'Easy registration at the comfort of your own location',
    items: [
      'Fill a simple registration form',
      'Upload relevant business documents',
      'Complete directors\' KYC'
    ],
    benefits: [
      'No need to visit branch',
      'No paperwork',
      'No collateral'
    ]
  },
  {
    id: 2,
    title: 'Get verified on Madad',
    subtitle: 'We will review and verify your membership',
    items: [
      'Customer support assisted verification',
      'Thorough but quick checks',
      'Once in a year check'
    ],
    benefits: [
      'No PROs needed',
      'No follow-ups',
      'No un-informed waits'
    ]
  },
  {
    id: 3,
    title: 'Apply to discount invoice',
    subtitle: 'Quick application against a newly raised invoice',
    items: [
      'Upload relevant genuine invoice',
      'Upload related trade documents'
    ],
    benefits: [
      'No credit line needed',
      'No complex process',
      'No paper printing'
    ]
  },
  {
    id: 4,
    title: 'Access to financiers',
    subtitle: 'We will review the documents and share with financiers',
    items: [
      'Customer support assisted review',
      'Open application to multiple financiers'
    ],
    benefits: [
      'No dependence on just one financier',
      'No confusing communications'
    ]
  },
  {
    id: 5,
    title: 'Get offer and instant cash',
    subtitle: 'Financier accept your application and you get instant cash',
    items: [
      'Accept the offer by financier',
      'Get 80% of invoice amount (minus fee)'
    ],
    benefits: [
      'No long wait times',
      'No hidden charges'
    ]
  },
  {
    id: 6,
    title: 'Seamless repayment',
    subtitle: 'Easy repay as per the terms of discounting contract',
    items: [
      'Online re-payment of the due amount',
      'Build your creditworthiness'
    ],
    benefits: [
      'No burning personal savings on business',
      'No need to be an unknown business'
    ]
  }
];

// FAQ data
export const FAQ_ITEMS: AccordionItem[] = [
  {
    id: 'platform-live',
    question: 'Is Madad Platform Live?',
    answer: 'Madad platform is not live yet. It is in the regulatory application phase. However, you can join the waiting list, so that you get notification moment we are live'
  },
  {
    id: 'documents-now',
    question: 'Do I need to submit documents now?',
    answer: 'No, you just have to join the waiting list with your email id, so that you get the notification in your inbox when we go live'
  },
  {
    id: 'qatari-platform',
    question: 'Is Madad a Qatari platform?',
    answer: 'Yes, Madad is a Qatari platform, based in Doha.'
  }
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  phone: '+974 3039 0833',
  email: 'contactus@madadfintech.com',
  address: '201-42, Kate Business Center, Al Bustan Building, Al Sadd, Doha, Qatar'
};

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/company/madad-financial-technology/posts/?feedView=all',
    icon: '/linkedin.png'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/madad.fintech?igsh=MWV0d24xbXp0djFqNA%3D%3D&utm_source=qr',
    icon: '/Instagram_icon.png'
  }
];

// External links
export const EXTERNAL_LINKS = {
  WAITLIST_FORM: 'https://forms.gle/ask4osePm9P9aLeJ7'
};

// SEO defaults
export const DEFAULT_SEO = {
  title: 'Invoice Discounting Platform in Qatar | Instant Cash for MSMEs - Madad',
  description: 'Get instant cash for unpaid invoices with Madad, Qatar\'s seamless invoice discounting platform. Access multiple financiers, build credit scores, and grow today.',
  keywords: 'Invoice discounting Qatar, Invoice discounting platform, Invoice Discounting Companies, MSME financing Qatar, Instant cash for invoices, Business credit score Qatar, Fintech platform for MSMEs, Unpaid invoice solutions, Multiple financiers platform, Qatari MSME ecosystem, Hassle-free business funding, Madad fintech platform',
  ogImage: 'https://madadfintech.com/logo_top.jpg',
  ogUrl: 'https://madadfintech.com/'
};
