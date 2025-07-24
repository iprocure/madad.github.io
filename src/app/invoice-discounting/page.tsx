import { Metadata } from 'next';
import {
  InvoiceDiscountingHero,
  WhyWhenSection,
  ComparisonSection,
  SMEUsageSection,
  WhyChooseMadadSection
} from '@/components/invoice-discounting';
import { CTASection } from '@/components/home';

export const metadata: Metadata = {
  title: 'Invoice Discounting | Madad FinTech - Fast Cash Flow Solutions',
  description: 'Transform your unpaid invoices into instant cash with Madad FinTech\'s invoice discounting platform. Get competitive rates, fast approval, and improve your cash flow today.',
  keywords: 'invoice discounting, cash flow solutions, business financing, invoice factoring, working capital, qatar fintech',
  openGraph: {
    title: 'Invoice Discounting | Madad FinTech',
    description: 'Get instant cash for your unpaid invoices. Fast, secure, and competitive invoice discounting solutions.',
    type: 'website',
  },
};

export default function InvoiceDiscountingPage() {
  return (
    <>
      <InvoiceDiscountingHero />
      <WhyWhenSection />
      <ComparisonSection />
      <SMEUsageSection />
      <WhyChooseMadadSection />
      <CTASection />
    </>
  );
}