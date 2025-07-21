import Image from 'next/image';
import { RocketLaunchIcon, LightBulbIcon, HeartIcon } from '@heroicons/react/24/outline';

export const EntrepreneurshipSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="/about/entrepreneur-1.svg"
                  alt="Entrepreneurship and innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="/about/entrepreneur-2.svg"
                  alt="Business meeting and collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="/about/entrepreneur-3.svg"
                  alt="Technology and innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="/about/entrepreneur-4.svg"
                  alt="Financial technology solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Entrepreneurship drives change
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Facing the problems first hand
            </p>

            <div className="space-y-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                As entrepreneurs ourselves, we understand the challenges that businesses face when it comes to cash flow management.
                We&apos;ve experienced firsthand the frustration of waiting for invoice payments while having immediate operational needs.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This personal experience drove us to create a solution that addresses the real pain points of SMEs.
                We&apos;re not just building a product; we&apos;re solving a problem we&apos;ve lived through.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                  <RocketLaunchIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Innovation</h3>
                <p className="text-sm text-gray-600">Cutting-edge solutions</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                  <LightBulbIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Vision</h3>
                <p className="text-sm text-gray-600">Future-focused thinking</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                  <HeartIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Passion</h3>
                <p className="text-sm text-gray-600">Driven by purpose</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
