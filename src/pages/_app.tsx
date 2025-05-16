import { Inter } from "next/font/google";
import type { AppProps } from 'next/app';
import { PrismicPreview } from '@prismicio/next';
import Header from '../components/Header';
import '../styles/globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME || '';

  return (
    <PrismicPreview repositoryName={repositoryName}>
      <div className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </PrismicPreview>
  );
} 