'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    company: 'Al-Rashid Trading LLC',
    role: 'CEO',
    content: 'Madad transformed our cash flow management. We no longer worry about delayed payments affecting our operations.',
    rating: 5,
    avatar: '/testimonials/avatar1.svg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    company: 'Gulf Manufacturing Co.',
    role: 'CFO',
    content: 'The process is incredibly smooth and fast. We got funding within 24 hours of submitting our invoices.',
    rating: 5,
    avatar: '/testimonials/avatar2.svg',
  },
  {
    id: 3,
    name: 'Mohammed Hassan',
    company: 'Hassan Logistics',
    role: 'Founder',
    content: 'Finally, a solution that understands SME needs. No collateral, no hassle, just quick access to our money.',
    rating: 5,
    avatar: '/testimonials/avatar3.svg',
  },
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What people say about us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from businesses that have transformed their cash flow with Madad
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
