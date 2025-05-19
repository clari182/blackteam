import { GetStaticProps } from 'next';
import { createClient } from '../prismicio';
import { PrismicDocument } from '@prismicio/client';
import SafeSliceZone from '../components/SafeSliceZone';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface HomeProps {
  page: PrismicDocument | null;
}

export default function Home({ page }: HomeProps) {
  if (!page?.data?.slices) {
    return (
      <div className="container mx-auto px-4 py-8 h-full">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <SafeSliceZone slices={page.data.slices} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    // Default to Spanish if no locale specified
    const currentLocale = locale || 'es';
    const client = createClient();
    const page = await client.getByUID('page', 'home');
    
    return {
      props: { 
        page,
        ...(await serverSideTranslations(currentLocale, ['common', 'horse'])),
      },
      revalidate: 60, // Revalidate every minute
    };
  } catch (error) {
    console.error('Error fetching home page:', error);
    return {
      props: { 
        page: null,
        ...(await serverSideTranslations(locale || 'es', ['common', 'horse'])),
      },
      revalidate: 60,
    };
  }
}; 