import Image from 'next/image';
import { ContactSection } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Summit 2025 - Madad FinTech | Alpha Startup Showcase',
  description: 'Madad FinTech is proud to be part of Web Summit 2025 as an Alpha Startup, showcasing our tech-enabled MSME financial platform.',
  keywords: 'Web Summit 2025, Madad FinTech, Alpha Startup, MSME financing, Qatar fintech, Invoice discounting platform',
};

// LinkedIn posts data
const linkedinPosts = [
  {
    id: 1,
    image: '/p1.png',
    alt: 'LinkedIn Post 1'
  },
  {
    id: 2,
    image: '/p2.png',
    alt: 'LinkedIn Post 2'
  },
  {
    id: 3,
    image: '/3p.png',
    alt: 'LinkedIn Post 3'
  },
  {
    id: 4,
    image: '/4p.png',
    alt: 'LinkedIn Post 4'
  },
  {
    id: 5,
    image: '/5p.png',
    alt: 'LinkedIn Post 5'
  }
];

export default function SummitPage() {
  return (
    <>
      {/* Hero Section with Background */}
      <section 
        className="min-h-screen relative flex flex-col items-center justify-center text-center p-5"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/websumit.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 z-[-1]"
          style={{
            background: 'rgba(0, 0, 0, 0.85), linear-gradient(rgba(0, 0, 0, 0), rgba(144, 238, 144, 0.45))',
            backgroundBlendMode: 'overlay'
          }}
        />

        {/* Logo Section */}
        <div className="flex justify-center items-center gap-10 mb-5 w-full relative">
          <Image
            src="/logo_top.png"
            alt="Madad Logo"
            width={200}
            height={150}
            className="max-h-[150px] w-auto brightness-0 invert"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="w-1 h-15 bg-white"></div>
          <Image
            src="/weblogo.png"
            alt="Web Summit Logo"
            width={120}
            height={80}
            className="max-h-20 w-auto brightness-0 invert"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Main Content */}
        <section className="text-white">
          <br />
          <p className="text-2xl md:text-4xl lg:text-5xl mb-4">
            We are proud to be part of Web Summit 2025,
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl">
            as Alpha Startup showcasing our tech-enabled MSME financial platform.
          </p>
        </section>
      </section>

      {/* LinkedIn Posts Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center py-20 px-5 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black mb-8 font-bold">
            Recent LinkedIn Posts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-center items-center">
            {linkedinPosts.map((post) => (
              <div key={post.id} className="flex justify-center">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={400}
                  height={450}
                  className="w-full max-w-sm h-[450px] object-fill border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="min-h-screen text-center py-20 px-5 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-12">
            Watch Our Journey
          </h2>
          
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <video
                controls
                className="w-full h-full rounded-lg"
                poster="/websumit.jpg"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Follow our journey as we showcase Madad FinTech at Web Summit 2025, connecting with investors, partners, and fellow innovators in the fintech space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <p className="text-dark-green font-semibold">Event Date</p>
                <p className="text-gray-600">March 2025</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <p className="text-dark-green font-semibold">Location</p>
                <p className="text-gray-600">Lisbon, Portugal</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <p className="text-dark-green font-semibold">Category</p>
                <p className="text-gray-600">Alpha Startup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-dark-green text-white">
        <div className="main-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the revolution in MSME financing. Connect with us at Web Summit 2025 or join our waitlist to be the first to experience our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://forms.gle/ask4osePm9P9aLeJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Join Waitlist
            </a>
            <a
              href="https://www.linkedin.com/company/madad-financial-technology/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark-green transition-colors duration-300"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
