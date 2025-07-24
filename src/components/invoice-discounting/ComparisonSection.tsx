import {
  CheckCircleIcon,
  CircleStackIcon,
  ClockIcon,
  ScaleIcon,
  AdjustmentsHorizontalIcon,
  LockClosedIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import React from 'react';

// Mapping feature names to icons
const featureIcons: { [key: string]: React.ElementType } = {
  "Primary Use Case": CheckCircleIcon,
  "Funding Basis": CircleStackIcon,
  "Speed of Disbursal": ClockIcon,
  "Impact on Balance Sheet": ScaleIcon,
  "Flexibility": AdjustmentsHorizontalIcon,
  "Collateral": LockClosedIcon,
  "Cost Structure": CurrencyDollarIcon,
};

// Data for the comparison table based on the screenshot
const comparisonData = [
  {
    feature: "Primary Use Case",
    invoiceDiscounting: "Bridge cash flow gaps due to delayed customer payments",
    businessLoan: "Long-term capital needs, asset purchases, or expansion"
  },
  {
    feature: "Funding Basis",
    invoiceDiscounting: "Based on outstanding invoices (sales already made)",
    businessLoan: "Based on past financial projections"
  },
  {
    feature: "Speed of Disbursal",
    invoiceDiscounting: "Fast—often within a few days",
    businessLoan: "Slower—can take weeks due to documentation & approvals"
  },
  {
    feature: "Impact on Balance Sheet",
    invoiceDiscounting: "Off-balance sheet—no new debt added",
    businessLoan: "Appears as a liability"
  },
  {
    feature: "Flexibility",
    invoiceDiscounting: "Grows with your sales—more invoices, more funding",
    businessLoan: "Fixed amount—not tied to business volume"
  },
  {
    feature: "Collateral",
    invoiceDiscounting: "Usually not required beyond the invoice",
    businessLoan: "Often requires personal or business collateral"
  },
  {
    feature: "Cost Structure",
    invoiceDiscounting: "Pay only for what you use, based on discount rate",
    businessLoan: "Cost accrues regardless of how efficiently funds are used"
  }
];

export const ComparisonSection = () => {
  return (
    <section className="bg-[#F3F9F9] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How does it compare to other working capital solutions
          </h2>
          <p className="text-lg text-gray-600">
            Here&apos;s how invoice discounting stacks up against other common financing products:
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200/80">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gray-100/70">
            <div className="p-4 font-semibold text-gray-700">
              Feature / Criteria
            </div>
            <div className="p-4 font-semibold text-gray-700 border-l border-gray-200">
              Invoice Discounting
            </div>
            <div className="p-4 font-semibold text-gray-700 border-l border-gray-200">
              Business Loan
            </div>
          </div>

          {/* Table Rows */}
          <div>
            {comparisonData.map((row, index) => {
              const Icon = featureIcons[row.feature];
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 ${
                    index < comparisonData.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="p-4 flex items-center space-x-3 border-r border-gray-200">
                    {Icon && <Icon className="w-5 h-5 text-green-600 flex-shrink-0" />}
                    <span className="font-medium text-gray-800">{row.feature}</span>
                  </div>
                  <div className="p-4 text-gray-600 border-r border-gray-200">
                    {row.invoiceDiscounting}
                  </div>
                  <div className="p-4 text-gray-600">
                    {row.businessLoan}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
