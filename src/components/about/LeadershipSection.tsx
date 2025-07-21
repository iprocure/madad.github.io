import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/24/outline';

const leaders = [
  {
    id: 1,
    name: 'Fahad Hassan Al-Thani',
    role: 'Co-Founder & CEO',
    bio: 'Visionary leader with 15+ years in fintech and entrepreneurship. Passionate about transforming SME financing.',
    image: '/team/fahad-hassan.svg',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Dr. Adil Rashid',
    role: 'Co-Founder & CTO',
    bio: 'Technology expert with deep expertise in financial systems and blockchain. PhD in Computer Science.',
    image: '/team/adil-rashid.svg',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Mahmoud Khaled',
    role: 'Chief Financial Officer',
    bio: 'Former investment banker with extensive experience in financial markets and risk management.',
    image: '/team/mahmoud-khaled.svg',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Abdullah Al-Sulaiti',
    role: 'Head of Operations',
    bio: 'Operations specialist focused on scaling business processes and ensuring exceptional customer experience.',
    image: '/team/abdullah-sulaiti.svg',
    linkedin: '#',
  },
];

export const LeadershipSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals driving innovation and growth at Madad FinTech. 
            Our diverse team brings together expertise from finance, technology, and entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative mb-6">
                <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* LinkedIn Badge */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                >
                  <LinkIcon className="w-4 h-4" />
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                
                <p className="text-green-600 font-medium mb-3">
                  {leader.role}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-green-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for innovation
              and helping businesses succeed. Explore opportunities to be part of our mission.
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
