'use client';

import { useState, useEffect } from 'react';
import { DocumentTextIcon, CreditCardIcon, BanknotesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const processSteps = [
  {
    id: 1,
    title: 'Upload Invoice',
    description: 'Submit your unpaid invoices through our secure platform',
    icon: DocumentTextIcon,
  },
  {
    id: 2,
    title: 'Get Approved',
    description: 'Quick verification and approval within 24 hours',
    icon: CheckCircleIcon,
  },
  {
    id: 3,
    title: 'Receive Funds',
    description: 'Get up to 90% of invoice value instantly in your account',
    icon: BanknotesIcon,
  },
  {
    id: 4,
    title: 'Customer Pays',
    description: 'Your customer pays the invoice directly to us',
    icon: CreditCardIcon,
  },
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === processSteps.length ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Invoice discounting process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless, quick and hassle-free process to get access to cash
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
              <div 
                className="h-full bg-green-600 transition-all duration-1000 ease-in-out"
                style={{ width: `${((activeStep - 1) / (processSteps.length - 1)) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.id} className="text-center">
                  <div 
                    className={`relative w-16 h-16 mx-auto mb-4 rounded-full border-4 transition-all duration-300 ${
                      activeStep >= step.id 
                        ? 'bg-green-600 border-green-600' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <step.icon 
                      className={`w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        activeStep >= step.id ? 'text-white' : 'text-gray-400'
                      }`} 
                    />
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                    activeStep >= step.id ? 'text-green-600' : 'text-gray-900'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step) => (
            <div key={step.id} className="flex items-start space-x-4">
              <div 
                className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                  activeStep >= step.id 
                    ? 'bg-green-600 border-green-600' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <step.icon 
                  className={`w-6 h-6 ${
                    activeStep >= step.id ? 'text-white' : 'text-gray-400'
                  }`} 
                />
              </div>
              
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-1 ${
                  activeStep >= step.id ? 'text-green-600' : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
