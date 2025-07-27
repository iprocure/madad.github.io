import Link from 'next/link';

export const CTASection = () => {
  return (
    // Use a relative container to position the decorative shapes
    <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
      {/* Top-left decorative shape */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 lg:-translate-x-1/3 lg:-translate-y-1/3">
        <div
          className="w-80 h-80 lg:w-[450px] lg:h-[450px] bg-green-200/40"
          style={{ borderRadius: '30% 70% 40% 60% / 70% 40% 60% 30%' }}
        />
      </div>
      <div className="absolute top-0 left-0 translate-x-1/4 -translate-y-1/4 lg:translate-x-1/4 lg:-translate-y-1/3">
        <div
          className="w-64 h-64 lg:w-[400px] lg:h-[400px] bg-green-600/80"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
        />
      </div>

      {/* Bottom-right decorative shape */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 lg:translate-x-1/3 lg:translate-y-1/3">
        <div
          className="w-80 h-80 lg:w-[450px] lg:h-[450px] bg-green-200/40"
          style={{ borderRadius: '30% 70% 40% 60% / 70% 40% 60% 30%' }}
        />
      </div>
      <div className="absolute bottom-0 right-0 -translate-x-1/4 translate-y-1/4 lg:-translate-x-1/4 lg:translate-y-1/3">
        <div
          className="w-64 h-64 lg:w-[400px] lg:h-[400px] bg-green-600/80"
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
        />
      </div>


      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Get Paid Faster with Invoice Discounting
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Unlock cash tied up in your unpaid invoices—no more waiting months for buyer payments. 
            With our seamless, tech-powered platform, you can turn your invoices into instant cash. 
            Get credit line offers from multiple trusted lenders. Upload your invoice, and get funded.
          </p>

          <div>
            <Link 
              href="/register" 
              className="bg-[#5DAE62] text-white px-10 py-3.5 rounded-lg font-semibold transition-colors text-lg shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
