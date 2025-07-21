import {
  DevicePhoneMobileIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  CreditCardIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const journeyFeatures = [
  {
    id: 1,
    title: 'AI-Powered',
    description: 'Smart algorithms for instant credit assessment',
    icon: ChartBarIcon,
  },
  {
    id: 2,
    title: 'Real-time Processing',
    description: 'Get decisions and funding in real-time',
    icon: ClockIcon,
  },
  {
    id: 3,
    title: 'Secure Platform',
    description: 'Bank-grade security for all transactions',
    icon: ShieldCheckIcon,
  },
  {
    id: 4,
    title: 'Digital Documentation',
    description: 'Paperless process with digital signatures',
    icon: DocumentCheckIcon,
  },
  {
    id: 5,
    title: 'Mobile First',
    description: 'Complete the entire process on your phone',
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 6,
    title: 'Instant Payments',
    description: 'Receive funds directly to your bank account',
    icon: CreditCardIcon,
  },
];

export const DigitalJourneySection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Seamless digital application journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of invoice financing with our cutting-edge digital platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {journeyFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-4">
                  <feature.icon className="w-5 h-5 text-green-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center mb-6">
                <div className="text-center">
                  <ChartBarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Dashboard Preview</p>
                  <p className="text-gray-400 text-sm">Real-time analytics & insights</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Invoices</span>
                  <span className="font-semibold text-gray-900">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Amount</span>
                  <span className="font-semibold text-green-600">$125,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Available Credit</span>
                  <span className="font-semibold text-green-600">$112,500</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-600 text-white rounded-full p-3 shadow-lg">
              <DocumentCheckIcon className="w-6 h-6" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-full p-3 shadow-lg">
              <DevicePhoneMobileIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
