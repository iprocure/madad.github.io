'use client';

import Image from 'next/image';

// Updated data to match the screenshot's content
const whoCanApply = [
  {
    id: 1,
    title: 'Registered Qatari SME',
    // Using JSX directly for rich text formatting
    description: (
      <>
        Businesses that are officially registered in Qatar, has revenue &lt;{' '}
        <span className="font-semibold text-gray-800">QAR 100 million</span> and has{' '}
        <span className="font-semibold text-gray-800">employees &lt; 250</span>, are eligible to apply.
      </>
    ),
    iconSrc: '/home/trends.svg',
  },
  {
    id: 2,
    title: 'Serving Priority Sector',
    description: "Whether you're importing goods, running a factory, or providing professional services — Madad is for you.",
    iconSrc: '/home/a-sync.svg',
  },
  {
    id: 3,
    title: 'Has Creditworthy Buyers',
    description: 'If you hold invoices raised to larger corporations and government bodies. As long as your invoices are valid and due within 90 days.',
    iconSrc: '/home/ic_layers_48px.svg',
  },
];

export const SMESection = () => {
  return (
    <section className="bg-[#F3F9F9] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-3">
            Who Can Apply
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built for SME enterprises like yours
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {whoCanApply.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg p-6 border border-gray-200/75 shadow-sm"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={card.iconSrc}
                  alt={`${card.title} icon`}
                  width={36}
                  height={36}
                />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
