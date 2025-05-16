import { Inter } from "next/font/google";
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
} 