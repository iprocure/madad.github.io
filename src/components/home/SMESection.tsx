import { BuildingOfficeIcon, TruckIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const smeTypes = [
  {
    id: 1,
    title: 'Trading Companies',
    description: 'Perfect for import/export businesses with long payment cycles',
    icon: BuildingOfficeIcon,
    benefits: ['Quick cash flow', 'No collateral needed', 'Flexible terms'],
  },
  {
    id: 2,
    title: 'Manufacturing',
    description: 'Ideal for manufacturers waiting for customer payments',
    icon: Cog6ToothIcon,
    benefits: ['Working capital', 'Scale operations', 'Meet deadlines'],
  },
  {
    id: 3,
    title: 'Logistics & Transport',
    description: 'Support for logistics companies with outstanding invoices',
    icon: TruckIcon,
    benefits: ['Fuel costs', 'Vehicle maintenance', 'Driver payments'],
  },
];

export const SMESection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for SME enterprises like yours
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re a trading company, manufacturer, or service provider,
            we understand your unique cash flow challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {smeTypes.map((sme) => (
            <div
              key={sme.id}
              className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6">
                <sme.icon className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {sme.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {sme.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Key Benefits:
                </h4>
                {sme.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-green-100">SMEs Funded</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">$50M+</div>
                <div className="text-green-100">Total Funding</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">24hrs</div>
                <div className="text-green-100">Average Approval</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
