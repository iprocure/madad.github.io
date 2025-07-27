import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa'; // Using react-icons for the LinkedIn icon

// Data extracted from the screenshot
const leaders = [
  {
    id: 1,
    name: 'Rashid Hassan Al-Derham',
    role: 'Co-founder & CEO',
    bio: [
      '12+ years in financial analysis, risk management and strategic planning in oil & gas industry and banks.',
      'Previously associated with QNB, Qatar Gas.',
    ],
    image: '/about/rashid_hassan.png',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Suresh Nambiar',
    role: 'Co-founder & CEO',
    bio: [
      '23+ years in business consulting & sales with top technology and telecom companies.',
      'Previously associated with IBM, Airtel.',
    ],
    image: '/about/suresh_nambiar.png',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Ravindra Kumar',
    role: 'Chief Business Officer',
    bio: [
      '14+ years in scaling tech-startups, product and business. Ex-entrepreneur.',
      'Previously associated with Traxcn, Glance.',
    ],
    image: '/about/ravindra_kumar.png',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Abhishek Purohit',
    role: 'Head - Product & Growth',
    bio: [
      '8+ years in building and scaling B2B digital products including FinTech.',
      'Previously associated with Udaan, Rupifi.',
    ],
    image: '/about/abhishek_purohit.png',
    linkedin: '#',
  },
];

export const LeadershipSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our team is the perfect blend of strategic vision, entrepreneurial spirit, and executional expertise, driven by a shared commitment to solving the challenges faced by MSMEs. With complementary skills in leadership, innovation, and growth, we are uniquely positioned to tackle the complexities of MSME financing and create impactful, scalable solutions. United by a deep understanding of the market and a passion for empowering businesses, our team is fully equipped to turn ambitious ideas into transformative outcomes for Qatar’s entrepreneurs.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-lg text-left"
            >
              <div className="mb-4">
                <Image
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-md"
                />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {leader.name}
                </h3>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
              
              <p className="text-green-600 font-semibold text-sm mb-4">
                {leader.role}
              </p>
              
              <div className="space-y-3 text-sm text-gray-500">
                {leader.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
