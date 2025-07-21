import { HeroSection, FeaturesSection, ProcessSection, DigitalJourneySection, SMESection, TestimonialsSection, CTASection } from '@/components/home';
import { StructuredData } from '@/components';
import { generateStructuredData } from '@/utils/seo';
import { FAQ_ITEMS } from '@/utils/constants';

export default function Home() {
  // Generate FAQ structured data
  const faqStructuredData = generateStructuredData.faq(
    FAQ_ITEMS.map(item => ({
      question: item.question,
      answer: item.answer
    }))
  );

  return (
    <>
      <StructuredData data={generateStructuredData.service()} />
      <StructuredData data={faqStructuredData} />

      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <DigitalJourneySection />
      <SMESection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
