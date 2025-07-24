// src/components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

// Data for footer links, restructured to match the screenshot
const footerLinks = {
  company: [
    { label: 'About us', href: '/about' },
    { label: 'Invoice Discounting', href: '/invoice-discounting' },
    { label: 'Contact us', href: '/contact' },
    { label: "FAQ's", href: '/faq' },
  ],
  support: [
    { label: 'What is Invoice Discounting', href: '/invoice-discounting-info' },
    { label: 'Who can apply?', href: '/who-can-apply' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Cookies Policy', href: '/cookies-policy' },
  ],
};

// Social media links with placeholder URLs
const socialLinks = [
  { platform: 'Twitter', icon: '/home/logo-twitter.svg', url: '#' },
  { platform: 'Facebook', icon: '/home/logo-facebook.svg', url: '#' },
  { platform: 'Instagram', icon: '/home/logo-instagram.svg', url: '#' },
  { platform: 'LinkedIn', icon: '/home/logo-linkedin.svg', url: '#' },
];


const Footer = () => {
  return (
    // Set the background to a dark color and default text to a light gray
    <footer className="bg-[#0D1A26] text-gray-400">
      <div className="container mx-auto px-8 py-12">
        
        {/* Main grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Logo, Info, and Socials */}
          <div className="flex flex-col space-y-6">
            <Link href="/">
                <Image 
                  src="/logo_footer.png" // Assuming this is the correct logo path
                  alt="Madad Footer Logo" 
                  width={120}
                  height={40}
                  // Use inline style to make the logo white if it's a single-color SVG
                  // style={{ filter: 'brightness(0) invert(1)' }} 
                />
            </Link>
            <p className="text-sm leading-relaxed">
              Madad is a registered participant in Qatar Central Bank’s Sandbox and operates as part of the regulatory framework.
            </p>
            {/* Social media icons moved here */}
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Image 
                    src={social.icon} 
                    alt={`${social.platform} logo`}
                    width={20}
                    height={20}
                    // Add a filter to make icons white, matching the screenshot's style
                    style={{ filter: 'brightness(0) invert(1) grayscale(1) opacity(0.7)' }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
