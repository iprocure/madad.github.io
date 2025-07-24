import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// Data for the principle shown in the screenshot.
// This can be expanded into an array later for a full carousel.
const principle = {
  title: 'Empowering SMEs',
  description: 'We are committed to supporting Micro, Small, and Medium Enterprises as the backbone of the economy. Empowering entrepreneurs drives our purpose and inspires our work every day. We believe that our success lies in their success.',
};

export const CorePrinciplesSection = () => {
  return (
    <section className="bg-[#F3F9F9]">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="overflow-hidden shadow-md">
            <Image
              src="/about/core_cultural_principles.png"
              alt="A large factory floor with industrial machinery, representing the backbone of the economy."
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col h-full">
            <h2 className="text-4xl font-bold text-green-700 mb-4 mt-8 px-8 lg:px-0 lg:mt-40">
              Core Cultural Principles
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 px-8 lg:px-0">
              {principle.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed flex-grow px-8 lg:px-0">
              {principle.description}
            </p>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-gray-800 rounded-full cursor-pointer"></div>
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full cursor-pointer"></div>
              </div>
              
              {/* Arrow Buttons */}
              <div className="flex items-center space-x-3">
                <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors">
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors">
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
