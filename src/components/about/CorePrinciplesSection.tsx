'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// --- DATA SOURCE FOR THE CAROUSEL ---
// To add or change slides, simply edit this array of objects.
// Make sure your image paths in `imageSrc` are correct.
const principles = [
  {
    title: 'Empowering SMEs',
    description: 'We are committed to supporting Micro, Small, and Medium Enterprises as the backbone of the economy. Empowering entrepreneurs drives our purpose and inspires our work every day. We believe that our success lies in their success.',
    imageSrc: '/about/core_cultural_principles.png',
    imageAlt: 'Empowering SMEs',
  },
  {
    title: 'Innovation with impact',
    description: 'Innovation drives our solutions. Our focus on impactful innovation ensures our technology and offerings remain relevant and effective.',
    imageSrc: '/about/bulb.png', // Replace with your actual image path
    imageAlt: 'Innovation with impact',
  },
  {
    title: 'Trust and Transparency',
    description: 'We foster trust by prioritizing transparent operations, ethical practices, and compliance with regulatory standards. Businesses can rely on us for clarity, fairness, and a secure financial partnership.',
    imageSrc: '/about/handshake.png', // Replace with your actual image path
    imageAlt: 'Trust and Transparency',
  },
  {
    title: 'Agility and Growth',
    description: 'We adapt quickly to changes in the market while staying focused on achieving ambitious goals. This culture of agility ensures our platform evolves alongside the needs of MSMEs and financial partners.',
    imageSrc: '/about/graph.png', // Replace with your actual image path
    imageAlt: 'Agility and Growth',
  },
  {
    title: 'Focus on Ecosystem',
    description: 'Madad thrives on partnerships—with SMEs, financial institutions, and other stakeholders in the ecosystem. Together, we create value and build a thriving financial network that benefits all.',
    imageSrc: '/about/trending.png', // Replace with your actual image path
    imageAlt: 'Focus on Ecosystem',
  },
  {
    title: 'Human-Centric Approach',
    description: 'Our solutions are designed with people at the core, focusing on real-world problems SMEs face. Empathy and understanding guide how we design and deliver services, ensuring they make a meaningful difference.',
    imageSrc: '/about/brain.png', // Replace with your actual image path
    imageAlt: 'Human-Centric Approach',
  }
];

export const CorePrinciplesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- HANDLER FUNCTIONS ---
  const handleNext = () => {
    const isLastSlide = currentIndex === principles.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? principles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  
  // --- AUTO-PLAY EFFECT ---
  useEffect(() => {
    // Set an interval to advance the slide every 5 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]); 

  const currentPrinciple = principles[currentIndex];

  return (
    <section className="bg-[#F3F9F9]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="overflow-hidden">
            {/* The `key` prop and `animate-fadeIn` class create the fade transition */}
            <Image
              key={currentIndex} // Crucial for re-triggering the animation
              src={currentPrinciple.imageSrc}
              alt={currentPrinciple.imageAlt}
              width={600}
              height={450}
              className="w-full h-auto object-cover animate-fadeIn"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col h-full pr-8 pt-8 lg:pt-20 px-12 lg:px-0 pb-8 lg:pb-0 lg:pr-8">
            <h2 className="text-4xl font-bold text-green-700 mb-8 lg:mb-16">
              Core Cultural Principles
            </h2>
            
            {/* Animated content block */}
            <div key={`${currentIndex}-text`} className="animate-fadeIn">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {currentPrinciple.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed flex-grow">
                {currentPrinciple.description}
              </p>
            </div>


            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {principles.map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                      currentIndex === slideIndex ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
              
              {/* Arrow Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  className="p-2 text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeftIcon className="w-10 h-10" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRightIcon className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};