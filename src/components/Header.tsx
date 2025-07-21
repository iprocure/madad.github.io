// src/components/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from '@/hooks/useMobileMenu'; // Assuming this hook exists

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

  // This state is no longer needed if the banner is on every page or controlled differently
  // const [showSandboxBanner, setShowSandboxBanner] = useState(false);
  // useEffect(() => {
  //   const path = window.location.pathname;
  //   if (path === '/' || path === '/index.html') {
  //     setShowSandboxBanner(true);
  //   }
  // }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* The banner from the old code is not in the new screenshot's header, but keeping for context if needed */}
      {/* <div id="sandboxBanner" className="bg-yellow-50 ..."> ... </div> */}

      <div className="w-full border-b border-gray-200">
        <nav className="container mx-auto flex items-center justify-between px-4 py-0">
          <div className="flex items-center">
            <Link href="/" onClick={closeMobileMenu}>
              <Image 
                src="/logo_top.png" // As seen in screenshot
                alt="Madad Logo" 
                width={100/1.8}
                height={33/1.8}
                priority
              />
            </Link>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8 ml-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-700 font-medium hover:text-green-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/contact' 
                ? 'bg-white text-green-600 border border-green-600' 
                : 'bg-transparent text-gray-700 hover:bg-gray-100'
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              className="bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
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
          <li className="pt-4 border-t border-gray-200">
            <Link
              href="/register"
              onClick={closeMobileMenu}
              className="w-full text-center bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors block"
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