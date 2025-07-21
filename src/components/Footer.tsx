// src/components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

// Data for footer links and social media
const footerLinks = {
  company: [
    { label: 'About us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
  ],
  services: [
    { label: 'What is Invoice Discounting', href: '/invoice-discounting' },
    { label: 'Who can apply?', href: '/who-can-apply' },
    { label: 'Pricing', href: '/pricing' },
  ],
  support: [
    { label: 'FAQs', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Cookies Policy', href: '/cookies-policy' },
  ],
};

const socialLinks = [
  // Add your actual social media URLs here
  { platform: 'Facebook', icon: '/social/facebook.svg', url: '#' },
  { platform: 'Twitter', icon: '/social/twitter.svg', url: '#' },
  { platform: 'LinkedIn', icon: '/social/linkedin.svg', url: '#' },
  { platform: 'Instagram', icon: '/social/instagram.svg', url: '#' },
];


const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 pt-16 pb-8">
        
        {/* Top Section: Logo, Info, Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image 
                src="/logo_footer.png" // As seen in screenshot
                alt="Madad Footer Logo" 
                width={120}
                height={40}
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Madad is a registered participant in Qatar Central Bank’s Regulatory Sandbox, and is considered a part of the regulatory framework.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.platform}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors"
              >
                <Image 
                  src={social.icon} 
                  alt={social.platform}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Bottom Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}><Link href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map(link => (
                <li key={link.label}><Link href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map(link => (
                <li key={link.label}><Link href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.label}><Link href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;