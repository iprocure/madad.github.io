import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    id: 1,
    title: 'Get funded within 24 hours',
    description: 'Quick approval and instant access to cash against your invoices',
    icon: ClockIcon,
  },
  {
    id: 2,
    title: 'Improve your cash flow',
    description: 'Transform outstanding invoices into immediate working capital',
    icon: CurrencyDollarIcon,
  },
  {
    id: 3,
    title: 'No collateral required',
    description: 'Your invoices are the only security we need for funding',
    icon: ShieldCheckIcon,
  },
  {
    id: 4,
    title: 'Simple application process',
    description: 'Easy online application with minimal documentation required',
    icon: CheckCircleIcon,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transform the way you finance your business
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant access to cash flow with our innovative invoice discounting platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
