import { JoinWaitlistButton } from '@/components';

export const CTASection = () => {
  return (
    <section className="bg-green-600 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Paid Faster with Invoice Discounting
          </h2>
          
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their cash flow. 
            Turn your outstanding invoices into immediate working capital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <JoinWaitlistButton className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors" />
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>

          <div className="mt-8 text-green-100 text-sm">
            <p>✓ No setup fees • ✓ Quick approval • ✓ Secure platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};
