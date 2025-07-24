import { CheckCircleIcon } from '@heroicons/react/24/outline';

const useItWhenData = [
  {
    id: 1,
    text: "Your customers take time to pay, but you need funds now to cover day-to-day operations",
  },
  {
    id: 2,
    text: "You've received new orders and need upfront cash to buy inventory or hire resources",
  },
  {
    id: 3,
    text: "You're experiencing seasonal demand or temporary cash flow gaps",
  },
  {
    id: 4,
    text: "You want to smoothen your cash flow without taking on traditional debt",
  }
];

const smesPreferItBecauseData = [
  {
    id: 1,
    text: "It converts sales into cash faster, without waiting for customer payment cycles",
  },
  {
    id: 2,
    text: "It grows with your sales—more invoices mean more access to funds",
  },
  {
    id: 3,
    text: "It's fast and flexible compared to traditional loans",
  },
  {
    id: 4,
    text: "It doesn't add long-term debt to your balance sheet",
  }
];

export const WhyWhenSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why and when should SMEs use it
          </h2>
          <p className="text-lg text-gray-600">
            Invoice discounting can be a smart choice in several situations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* "Use it when" section */}
          <div className=" p-8 rounded-lg border border-gray-200 bg-[#F3F9F9] shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Use it when:
            </h3>
            <div className="space-y-4">
              {useItWhenData.map((item) => (
                <div key={item.id} className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* "SMEs prefer it because" section */}
          <div className=" p-8 rounded-lg border border-gray-200 bg-[#F3F9F9] shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              SMEs prefer it because:
            </h3>
            <div className="space-y-4">
              {smesPreferItBecauseData.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 ">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWhenSection;
