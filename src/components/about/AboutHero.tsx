import Image from 'next/image';

export const AboutHero = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our story
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              We are builders and doers at heart, building and 
              creating solutions for the future.
            </p>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              At Madad FinTech, we believe that every business deserves access to the capital they need to grow and thrive. 
              Our mission is to revolutionize the way small and medium enterprises manage their cash flow through innovative 
              invoice discounting solutions.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/about/hero-image.svg"
                alt="Modern office building representing our story"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
