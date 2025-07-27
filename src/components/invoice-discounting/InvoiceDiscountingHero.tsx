import Link from 'next/link';

export const InvoiceDiscountingHero = () => {
  return (
    <section className="relative bg-black text-white py-20 lg:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/invoice-discounting/hero.jpg')"
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What is Invoice Discounting?
          </h1>
          
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Invoice discounting is a short-term financing solution that helps businesses access funds quickly by selling their unpaid customer invoices to a financier at a discount. Instead of waiting 30, 60, or even 90 days for customers to pay, businesses can get a large portion of the invoice amount upfront—improving cash flow without taking on traditional debt.
          </p>
          
          <p className="text-lg leading-relaxed mb-10">
            At Madad, we make this process paperless, fast, and accessible to small and medium businesses across Qatar.
          </p>

          <div>
            <Link 
              href="/register" 
              className="bg-[#5DAE62] text-white px-10 py-3 rounded-lg font-semibold transition-colors text-lg shadow-md hover:shadow-lg"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceDiscountingHero;
