// @ts-nocheck
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import our client-side i18n instance
import '../utils/i18nClient';

// Simple client-only component with no SSR
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }
  
  return children;
};

const Navigation = () => {
  const { t } = useTranslation('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-white hover:text-gray-200 font-medium text-lg transition-colors">
          {t('Home')}
        </Link>
        <div className="group relative">
          <Link href="/team" className="text-white hover:text-gray-200 font-medium text-lg transition-colors flex items-center">
            {t('About')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <div className="absolute left-0 w-48 mt-2 origin-top-left bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <Link href="/team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md">{t('Our Staff')}</Link>
            <Link href="/horses" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md">{t('Horses')}</Link>
            {/* <Link href="/testimonials" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md">Testimonials</Link> */}
          </div>
        </div>
        <Link href="/services" className="text-white hover:text-gray-200 font-medium text-lg transition-colors">
          {t('Services')}
        </Link>
        <Link href="/events" className="text-white hover:text-gray-200 font-medium text-lg transition-colors">
          {t('Events')}
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-200 font-medium text-lg transition-colors">
          {t('Contact')}
        </Link>
      </nav>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden flex flex-col justify-center items-center gap-1.5 z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      
      {/* Mobile Navigation Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <Link 
            href="/" 
            className="text-2xl text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('Home')}
          </Link>
          <Link 
            href="/team" 
            className="text-2xl text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('About')}
          </Link>
          <Link 
            href="/horses" 
            className="text-2xl text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('Horses')}
          </Link>
          <Link 
            href="/services" 
            className="text-2xl text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('Services')}
          </Link>
          <Link 
            href="/events" 
            className="text-2xl text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('Events')}
          </Link>
          <Link 
            href="/contact" 
            className="text-2xl text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('Contact')}
          </Link>
        </div>
      </div>
    </>
  );
};

// Create a dynamic component with no SSR
const ClientNavigation = dynamic(() => Promise.resolve(Navigation), { ssr: false });

const Header = () => {
  return (
    <header className="bg-black bg-opacity-70 fixed top-0 left-0 right-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Blackteam Logo" width={45} height={45} />
          <div className="text-white text-xl font-bold ml-3">Blackteam</div>
        </Link>
        <div className="flex items-center space-x-6">
          <ClientNavigation />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header; 