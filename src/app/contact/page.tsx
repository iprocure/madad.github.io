import { Metadata } from 'next';
import { ContactHero, ContactInfo, ContactForm, OfficeDetails } from '@/components/contact';
import { CTASection } from '@/components/home';

export const metadata: Metadata = {
  title: 'Contact Us | Madad FinTech - Get in Touch',
  description: 'Contact Madad FinTech for invoice discounting solutions. Reach out via phone, email, or WhatsApp. Our team is ready to help transform your cash flow.',
  keywords: 'contact madad fintech, invoice discounting support, business financing help, qatar fintech contact',
  openGraph: {
    title: 'Contact Us | Madad FinTech',
    description: 'Get in touch with Madad FinTech for invoice discounting solutions and business financing support.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <OfficeDetails />
      <CTASection />
    </>
  );
}
