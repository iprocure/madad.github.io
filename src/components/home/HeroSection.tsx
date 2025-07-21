'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { JoinWaitlistButton } from '@/components';
import { initEmailJS } from '@/lib/emailjs';

export const HeroSection = () => {
  useEffect(() => {
    // Initialize EmailJS when component mounts
    initEmailJS();
  }, []);

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Turn Invoices into Cash - 
              <span className="text-green-600"> Instantly</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Struggling with delayed invoice payments and bad cash flow?
            </p>
            
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Say goodbye to delays - discount your unpaid invoices for instant cash
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <JoinWaitlistButton className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors" />
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image 
                src="/hero_image.png" 
                alt="Invoice Discounting Illustration" 
                width={600}
                height={500}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-6 py-3">
            <p className="text-green-700 font-semibold">
              🚀 Coming Soon in Qatar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
