'use client';

import Image from 'next/image';

// Updated testimonial data to match the screenshot
const testimonials = [
  {
    id: 1,
    name: 'Isabella Chavez',
    company: 'Zavier Group',
    content: "“As a growing business, cash flow used to be our biggest challenge. Thanks to Madad Fintech, we've unlocked working capital tied up in invoices and scaled faster than we thought possible. Their team is professional and always ready to help.”",
    avatar: '/home/Oval.png',
  },
  {
    id: 2,
    name: 'Abdullah Naser',
    company: 'Al Naser Trading',
    content: "“Invoice discounting with Madad Fintech has completely changed how we manage our cash flow. It's fast, transparent, and gives us the flexibility to focus on growth rather than chasing payments.”",
    avatar: '/home/Oval2.png',
  },
  {
    id: 3,
    name: 'Karim Nawaz',
    company: 'KN Group',
    content: '“The onboarding was smooth, and the platform is incredibly user-friendly. We now receive funds within 24 hours of raising invoices—this has helped us meet payroll and vendor obligations on time, every time.”',
    avatar: '/home/Oval3.png',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What people say about us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the business owners&apos; we supported
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 flex flex-col border border-gray-200/80 shadow-sm"
            >
              {/* Avatar */}
              <div className="mb-5">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed flex-grow">
                {testimonial.content}
              </p>

              {/* Separator */}
              <div className="my-6 " />

              {/* Author Info */}
              <div>
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
