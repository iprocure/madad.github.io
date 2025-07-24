import Image from 'next/image';

// Data for the contact cards based on the screenshot
const contactDetails = [
  {
    id: 1,
    title: 'Call us',
    line1: '+974 3039 0833',
    line2: '9:00 AM to 6:30 PM (Except on Fri-Sat & Public Holidays)',
    icon: '/contact/call.svg',
    href: 'tel:+97430390833',
  },
  {
    id: 2,
    title: 'Email us',
    line1: 'contactus@madadfintech.com',
    line2: '', // No second line for email in the screenshot
    icon: '/contact/email.svg',
    href: 'mailto:contactus@madadfintech.com',
  },
  {
    id: 3,
    title: 'Reach Us on Whatsapp',
    line1: '+974 3039 0833',
    line2: 'or click here to message us',
    icon: '/contact/whatsapp.svg',
    href: 'https://wa.me/97430390833',
  },
  {
    id: 4,
    title: 'Office Timing',
    line1: '10:00 AM to 4:00 PM',
    line2: 'Except on Fri-Sat & Public Holidays',
    icon: '/contact/time2.svg',
    href: '#', // No link for office timing
  },
];

export const ContactHero = () => {
  return (
    <section className="bg-[#F3F9F9] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? We&apos;re here to help.
          </p>
          <p className="text-lg text-gray-600">
            Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contactDetails.map((card) => (
            <a
              key={card.id}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 flex items-start space-x-5 border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={28* 2}
                  height={28 * 2}
                />
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-800 font-medium">
                  {card.line1}
                </p>
                {card.line2 && (
                  <p className="text-sm text-gray-500 mt-1">
                    {card.line2}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
