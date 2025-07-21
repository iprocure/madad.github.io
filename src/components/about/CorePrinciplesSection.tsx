import Image from 'next/image';
import { ShieldCheckIcon, UserGroupIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline';

const principles = [
  {
    id: 1,
    title: 'Transparency',
    description: 'We believe in clear, honest communication and transparent processes in everything we do.',
    icon: ShieldCheckIcon,
  },
  {
    id: 2,
    title: 'Customer-Centric',
    description: 'Our customers are at the heart of every decision we make and every solution we build.',
    icon: UserGroupIcon,
  },
  {
    id: 3,
    title: 'Global Mindset',
    description: 'We think globally while acting locally, bringing world-class solutions to regional markets.',
    icon: GlobeAltIcon,
  },
  {
    id: 4,
    title: 'Innovation',
    description: 'We continuously innovate to stay ahead of the curve and provide cutting-edge solutions.',
    icon: SparklesIcon,
  },
];

export const CorePrinciplesSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Cultural Principles
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              The values that guide us
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Our culture is built on strong principles that guide every aspect of our business. 
              These values shape how we interact with our customers, partners, and each other, 
              ensuring we deliver exceptional service while maintaining the highest standards of integrity.
            </p>

            <div className="space-y-6">
              {principles.map((principle) => (
                <div key={principle.id} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0">
                    <principle.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/about/principles-image.svg"
                alt="Team collaboration representing our core principles"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-green-100">Customer Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
