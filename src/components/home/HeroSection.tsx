'use client';

import Image from 'next/image';
import Link from 'next/link';

// Partner logos data
const financingPartners = [
  { name: 'QIB', src: '/home/qib.svg', width: 80, height: 40 },
  { name: 'Commercial Bank', src: '/home/commercial_bank.svg', width: 120, height: 40 },
];

const technologyPartners = [
  { name: 'Fundfina', src: '/home/fundfina.svg', width: 100, height: 40 },
  { name: 'Shufti', src: '/home/shufti.svg', width: 90, height: 40 },
  { name: 'QatarSMS', src: '/home/qatarsms.svg', width: 110, height: 40 },
];

export const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center text-center">

        {/* --- Top Text Content --- */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
            Turn Invoices into Cash – Instantly
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 mb-2">
            Struggling with payments and tight cash flow?
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-8">
            Free up working capital instantly by discounting your unpaid invoices
          </p>
        </div>

        {/* --- CTA Button --- */}
        <div className="mb-12">
            <Link
              href="/register" // Pointing the button to the register page
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg font-semibold transition-colors text-lg shadow-md hover:shadow-lg"
            >
              Get Started Now
            </Link>
        </div>

        {/* --- Hero Image --- */}
        <div className="w-full max-w-4xl mb-16 lg:mb-24">
          <Image 
            src="/home/hero.svg" 
            alt="Illustration of invoice discounting process" 
            width={800}
            height={450}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* --- Partners Section --- */}
        <div className="w-full max-w-5xl">
            <p className="text-lg text-gray-800 font-semibold mb-8">
                Proud participant in Qatar Central Bank’s Sandbox, backed by trusted partners
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 lg:gap-16">
                
                {/* Financing Partners */}
                <div className="flex flex-col items-center">
                    <h3 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-4">
                        FINANCING PARTNER
                    </h3>
                    <div className="flex items-center gap-8">
                        {financingPartners.map(partner => (
                            <Image
                                key={partner.name}
                                src={partner.src}
                                alt={`${partner.name} Logo`}
                                width={partner.width}
                                height={partner.height}
                                className="object-contain"
                            />
                        ))}
                    </div>
                </div>

                {/* Vertical Separator */}
                <div className="hidden md:block w-px bg-gray-200 self-stretch mx-4"></div>

                {/* Technology Partners */}
                <div className="flex flex-col items-center">
                    <h3 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-4">
                        TECHNOLOGY PARTNER
                    </h3>
                    <div className="flex items-center flex-wrap justify-center gap-8">
                        {technologyPartners.map(partner => (
                            <Image
                                key={partner.name}
                                src={partner.src}
                                alt={`${partner.name} Logo`}
                                width={partner.width}
                                height={partner.height}
                                className="object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
