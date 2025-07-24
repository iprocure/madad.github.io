import Image from 'next/image';

const features = [
  {
    id: 1,
    title: "Access to Multiple Lenders",
    description: "Get offers from multiple financial institutions on one platform.",
    icon: "/invoice-discounting/bank_icon.svg"
  },
  {
    id: 2,
    title: "Fast Turnaround",
    description: "Receive funds in just a few days, not weeks, so you can keep your operations moving without delays.",
    icon: "/invoice-discounting/piggy_icon.svg"
  },
  {
    id: 3,
    title: "Fully Digital Process",
    description: "Apply, track, and manage everything online.",
    icon: "/invoice-discounting/lcd_icon.svg"
  },
  {
    id: 4,
    title: "Tailored for SMEs",
    description: "Designed with the realities and challenges of local SMEs in mind.",
    icon: "/invoice-discounting/building_icon.svg"
  },
  {
    id: 5,
    title: "Regulated",
    description: "Operates under Qatar Central Bank's sandbox, ensuring security and trust.",
    icon: "/invoice-discounting/law_icon.svg"
  }
];

export const WhyChooseMadadSection = () => {
  return (
    <section className="bg-[#F3F9F9] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h3 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-3">
            WHAT DO YOU GET
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why choose Madad for Invoice Discounting
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-lg p-6 text-start"
            >
              <div className="flex justify-center mb-5 h-20 w-20">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={48}
                  height={48}
                />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMadadSection;
