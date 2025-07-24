import Image from 'next/image';

export const AboutHero = () => {
  return (
    <section className="bg-[#F3F9F9] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section: Title and Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our story
          </h1>
          <p className="text-lg text-gray-600">
            We connect businesses with institutional financiers to bridge working capital
            gaps in a smarter, faster way.
          </p>
        </div>

        {/* Main Image */}
        <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
          <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/our_story.svg"
               alt="A scenic view of colorful buildings representing our story"
            width={1600}
            height={900}
            className="w-full h-auto rounded-xl shadow-lg"
            priority
            />
          </div>
        </div>

        {/* Bottom Section: Our Beliefs */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold text-[#5DAE62] tracking-wider uppercase mb-2">
              WE BELIEVE
            </h3>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Entrepreneurship drives change
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            <p className="text-base text-gray-600 leading-relaxed space-y-4">
              <span >
                SMEs are the backbone of Qatar’s economy, with the potential to create jobs, foster
                innovation, and diversify industries.
              </span>
              <br/>
              <div className='my-6'></div>
              <span>
                Every small business deserves the chance to thrive, free from cash flow constraints.
                We believe in community and collaboration, creating solutions based on real business
                needs. Most importantly, we believe that when entrepreneurs are empowered with
                the right tools and support, they can achieve more than they ever imagined.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
