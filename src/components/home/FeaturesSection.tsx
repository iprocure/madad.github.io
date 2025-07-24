import Image from 'next/image';

// Updated features data to match the screenshot
const features = [
  {
    id: 1,
    title: 'Get access to multiple lenders',
    description: 'Relying on a single bank can be limiting. We connect you to multiple institutional lenders giving you faster access to funds.',
    iconSrc: '/home/person.svg',
  },
  {
    id: 2,
    title: 'Apply in minutes, not weeks',
    description: 'Traditional financing involves complex forms and wait times. Madad simplifies it with a faster and easier digital application.',
    iconSrc: '/home/sms.svg',
  },
  {
    id: 3,
    title: 'Build your Business Credit Score',
    description: 'Madad builds your business credit profile, helping you secure better loan terms and limits, with financial independence.',
    iconSrc: '/home/stack.svg',
  },
  {
    id: 4,
    title: 'Become a part of Qatari SME ecosystem',
    description: "Join Qatar's largest SME community in making, to learn, share and grow with industry experts and fellow business owners.",
    iconSrc: '/home/time.svg',
  },
];

export const FeaturesSection = () => {
  return (
    // Use a specific light gray background to match the wireframe
    <section className="bg-[#F3F9F9] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-3">
            Why Choose Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transform the way you finance your business
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              // Use a subtle border and shadow on the card
              className="rounded-lg px-6 py-2 flex items-start space-x-5"
            >
              {/* Icon with a custom light green background */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#F0FAF7] rounded-lg flex items-center justify-center">
                <Image
                  src={feature.iconSrc}
                  alt={`${feature.title} icon`}
                  width={28 * 4}
                  height={28 * 4}
                />
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {feature.title}
                </h3>
                {/* Lighter text color for the description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
