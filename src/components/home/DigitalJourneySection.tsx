'use client';

import Image from 'next/image';

// The new set of steps from the screenshot
const journeySteps = [
  {
    id: 1,
    title: 'Get Onboarded',
    description: 'Get onboarded with business documents like CR, Tax card, Financials etc.',
  },
  {
    id: 2,
    title: 'Get Verified',
    description: 'We review and verify your business documents, and prepare for multiple lenders',
  },
  {
    id: 3,
    title: 'Get Credit Offers',
    description: 'Multiple credit line offers post sharing information about your buyers, UBO e-KYC',
  },
  {
    id: 4,
    title: 'Upload your invoice',
    description: 'Submit invoice for discounting against the approved credit line and buyers',
  },
  {
    id: 5,
    title: 'Get funds',
    description: 'Post invoice validation by buyer, get the funds in your bank account',
  },
];

export const DigitalJourneySection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-3">
            How You Can Apply
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seamless digital application journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With our easy process get discount instantly, without any hassle.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dashboard Image */}
          <div className="flex justify-center">
            <Image
              src="/home/get_onboarded.svg"
              alt="A screenshot of the Madad dashboard showing credit line overview and pending invoices."
              width={650}
              height={500}
              priority
              className="rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Column: Steps List */}
          <div className="space-y-6">
            {journeySteps.map((step) => (
              <div key={step.id} className="flex items-start space-x-4">
                {/* Numbered Circle */}
                <div className="flex-shrink-0 w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-md">
                  {step.id}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
