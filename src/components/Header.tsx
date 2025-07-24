// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Custom hook for mobile menu state management
const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  return { isOpen, toggle, close };
};


// Define navigation items based on the screenshot
const NAV_ITEMS = [
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Invoice Discounting', href: '/invoice-discounting' },
  { label: "FAQ's", href: '/faq' },
];

const Header = () => {
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="w-full border-b border-gray-200">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMobileMenu} className='scale-150'>
              <Image 
                src="/logo_top.png" // As seen in screenshot
                alt="Madad Logo" 
                width={90/2} // Adjusted size for better visual balance
                height={30/2}
                priority
              />
            </Link>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8 ml-12">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.href 
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border border-green-500 bg-white text-green-500 hover:bg-green-500 hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              className="bg-[#0D3D3F] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              id="hamburger"
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-8 h-8 rounded focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 my-1 transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col px-4 pt-4 pb-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-2 text-gray-700 font-medium" onClick={closeMobileMenu}>
                {item.label}
              </Link>
            </li>
          ))}
          {/* Separator and buttons for mobile */}
          <li className="pt-4 mt-2 border-t border-gray-200 flex flex-col space-y-3">
             <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="w-full text-center border border-green-500 text-green-500 px-5 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors block"
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              onClick={closeMobileMenu}
              className="w-full text-center bg-[#0D3D3F] text-white px-5 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors block"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
