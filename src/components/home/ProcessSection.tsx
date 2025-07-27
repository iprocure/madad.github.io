'use client';

import Image from 'next/image';

// The new set of steps from the screenshot
const processSteps = [
  {
    id: 1,
    description: 'SME raises invoice to the Buyers against the delivered goods and/or services',
  },
  {
    id: 2,
    description: "SME apply to the lender for discounting the invoice raised to it's buyers",
  },
  {
    id: 3,
    description: 'Buyer authenticated the invoice for the lender to further process the application',
  },
  {
    id: 4,
    description: 'Post evaluation and acceptance the lender disburses the funds against the invoice to SME',
  },
  {
    id: 5,
    description: 'Buyer pays back the invoice amount on or before the due date, as per the invoice terms',
  },
  {
    id: 6,
    description: 'Lender pays the difference amount to the SME, post closure by the buyers',
  },
];

export const ProcessSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-sm font-bold text-[#5DAE62] tracking-wider uppercase mb-3">
            How It Works
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Invoice discounting process
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Process Diagram */}
          <div className="flex justify-center">
            <Image
              src="/home/invoice_discounting_process.svg"
              alt="A diagram showing the invoice discounting process flow between a buyer, SME, and lending partners."
              width={550}
              height={550}
              priority
            />
          </div>

          {/* Right Column: Steps List */}
          <div className="space-y-5">
            {processSteps.map((step) => (
              <div key={step.id} className="flex items-start space-x-4">
                {/* Numbered Circle */}
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold">
                  {step.id}
                </div>
                {/* Description */}
                <p className="text-gray-900 font-semibold">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
