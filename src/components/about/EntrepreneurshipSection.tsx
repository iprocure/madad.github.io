import Image from 'next/image';

export const EntrepreneurshipSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/about/problem1.png"
                  alt="An entrepreneur working in an office"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/about/problem3.png"
                  alt="A pile of documents representing paperwork"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/about/problem2.png"
                  alt="A business meeting with charts and graphs"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/about/problem4.png"
                  alt="Signing documents"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-sm font-bold text-[#5DAE62] tracking-wider uppercase mb-3">
              How it all started
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Facing the problem first-hand
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Our founder & CEO, Rashid Al-Derham, with his experience in a leading financial
                institution in Qatar, experienced and understood the challenges in supporting small
                businesses through traditional financing. While our co-founder Suresh Nambiar, from
                his B2B tech-venture background in Qatar, saw first-hand the cash flow struggles
                MSMEs faced. Together, they recognized that the SME sector is crucial to Qatar’s
                economic growth but lacked accessible financing solutions, and are determined to
                change that.
              </p>

              <p>
                With the first addition to the team, Ravindra Kumar brought tech-startup expertise,
                and started turning our vision into scalable solutions, starting with invoice
                discounting, empowering Qatar’s entrepreneurs to thrive and contribute to the
                country’s economic future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
