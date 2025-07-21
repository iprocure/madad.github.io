import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, ClockIcon } from '@heroicons/react/24/outline';

const contactMethods = [
  {
    id: 1,
    title: 'Call us',
    description: '+974 3039 0833',
    subtitle: '800 AM to 6:30 PM (Except on Fri, Sat & Public Holidays)',
    icon: PhoneIcon,
    action: 'tel:+97430390833',
  },
  {
    id: 2,
    title: 'Email us',
    description: 'contact@madadfintech.com',
    subtitle: 'We\'ll respond within 24 hours',
    icon: EnvelopeIcon,
    action: 'mailto:contact@madadfintech.com',
  },
  {
    id: 3,
    title: 'Reach Us on WhatsApp',
    description: '+974 3039 0833',
    subtitle: 'or click here to message us',
    icon: ChatBubbleLeftRightIcon,
    action: 'https://wa.me/97430390833',
  },
  {
    id: 4,
    title: 'Office Timing',
    description: '10:00 AM to 4:00 PM',
    subtitle: 'Except on Fri, Sat & Public Holidays',
    icon: ClockIcon,
    action: null,
  },
];

export const ContactInfo = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <method.icon className="w-6 h-6 text-green-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              
              {method.action ? (
                <a
                  href={method.action}
                  className="text-green-600 hover:text-green-700 font-medium mb-2 block transition-colors"
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {method.description}
                </a>
              ) : (
                <p className="text-green-600 font-medium mb-2">
                  {method.description}
                </p>
              )}
              
              <p className="text-gray-600 text-sm">
                {method.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
