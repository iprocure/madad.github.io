import Image from 'next/image';
import { CONTACT_INFO } from '@/utils/constants';

const ContactSection = () => {
  return (
    <div 
      id="contact" 
      className="bg-white text-black text-center p-5 rounded-lg shadow-lg w-full mx-auto"
    >
      <h2 className="text-2xl font-bold mb-1">Get in touch</h2>
      
      <div className="flex flex-wrap justify-center gap-8 px-5 mb-5 max-w-6xl mx-auto">
        {/* Call Us Section */}
        <div className="flex-1 min-w-64 text-center p-2.5">
          <p className="text-base font-bold mb-2.5">CALL US</p>
          <p className="text-base text-dark-green font-bold flex items-center justify-center gap-2">
            <Image 
              src="/phone-call.png" 
              alt="phone" 
              width={24} 
              height={24}
            />
            <span className="whitespace-nowrap">{CONTACT_INFO.phone}</span>
          </p>
        </div>

        {/* Mail Us Section */}
        <div className="flex-1 min-w-64 text-center p-2.5">
          <p className="text-base font-bold mb-2.5">MAIL US</p>
          <p className="text-lg text-dark-green font-bold flex items-center justify-center gap-2">
            <Image 
              src="/mail.png" 
              alt="email" 
              width={24} 
              height={24}
            />
            <span>{CONTACT_INFO.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
