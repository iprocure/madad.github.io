import { Metadata } from 'next';
import { AboutHero, EntrepreneurshipSection, CorePrinciplesSection, LeadershipSection } from '@/components/about';
import { CTASection } from '@/components/home';
import { StructuredData } from '@/components';
import { generateStructuredData } from '@/utils/seo';

export const metadata: Metadata = {
  title: 'About Us | Madad FinTech - Transforming SME Finance',
  description: 'Learn about Madad FinTech\'s mission to revolutionize invoice discounting for SMEs. Discover our story, values, and commitment to transforming business finance.',
  keywords: 'about madad fintech, invoice discounting company, SME financing, business cash flow solutions, qatar fintech',
  openGraph: {
    title: 'About Us | Madad FinTech',
    description: 'Discover how Madad FinTech is transforming SME finance through innovative invoice discounting solutions.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={generateStructuredData.organization()} />

      <AboutHero />
      <EntrepreneurshipSection />
      <CorePrinciplesSection />
      <LeadershipSection />
      <CTASection />
    </>
  );
}
