// @ts-nocheck
import { Inter } from "next/font/google";
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import nextI18nConfig from '../../next-i18next.config.js';
import { useRouter } from 'next/router';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // Force client-side reevaluation to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // If we're at the root path with no locale, redirect to Spanish
    if (router.pathname === '/' && router.locale !== 'es' && !router.asPath.includes('/en')) {
      router.push(router.asPath, router.asPath, { locale: 'es' });
    }
  }, [router]);

  return (
    <div className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col h-full`}>
      <Header />
      <main className="flex-grow flex flex-col h-full">
        {/* If we're on the client, render normally */}
        {isClient && <Component {...pageProps} />}
        
        {/* If we're on the server, render a skeleton to avoid hydration issues */}
        {!isClient && (
          <div style={{ visibility: 'hidden' }} className="h-full">
            <Component {...pageProps} />
          </div>
        )}
      </main>
    </div>
  );
}

// Apply with translation with the config
export default appWithTranslation(App, nextI18nConfig); 