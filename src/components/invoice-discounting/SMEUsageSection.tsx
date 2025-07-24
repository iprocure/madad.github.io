import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const usagePoints = [
  {
    id: 1,
    text: "Reduce dependency on traditional loan products",
  },
  {
    id: 2,
    text: "Manage cash cycles in industries like trading, logistics, Manufacturing and services",
  },
  {
    id: 3,
    text: "Take on larger purchase orders without waiting for earlier payments",
  },
  {
    id: 4,
    text: "Strengthen supplier relationships by paying them faster",
  }
];

export const SMEUsageSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="mb-6">
              <Image
                src="/invoice-discounting/coins.svg"
                alt="Stack of coins icon"
                width={64}
                height={64}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How SMEs are using it in Qatar and the GCC
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Across Qatar and the wider GCC, invoice discounting is gaining traction among SMEs that want to:
            </p>
            <div className="space-y-4 mb-8">
              {usagePoints.map((point) => (
                <div key={point.id} className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              At Madad, we see more SMEs turning to invoice discounting as a strategic tool, not just an emergency fix.
            </p>
          </div>

          {/* Right side - Illustration */}
          <div className="relative flex items-center justify-center">
             <div className="absolute w-full h-full bg-green-50 rounded-full blur-2xl opacity-50"></div>
             <div className="relative w-full max-w-md">
                <Image
                    src="/invoice-discounting/bank.svg"
                    alt="Bank illustration"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                />
                <div className="absolute top-10 right-0 bg-white p-6 rounded-lg shadow-lg w-48">
                    <h4 className="font-bold text-center mb-2">INVOICE</h4>
                    <div className="space-y-2">
                        <div className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2"/> Item 1</div>
                        <div className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2"/> Item 2</div>
                        <div className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2"/> Item 3</div>
                    </div>
                    <div className="text-right mt-4 text-sm italic">Signature</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMEUsageSection;
