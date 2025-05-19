// @ts-nocheck
import { GetStaticProps, GetStaticPaths } from 'next';
import { createClient } from '../../prismicio';
import { SliceZone } from '@prismicio/react';
import { PageDocument } from '../../prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import { components } from '../slices';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

interface PageProps {
  page: PageDocument;
}

export default function Page({ page }: PageProps) {
  const { t } = useTranslation('common');
  
  return (
    <div className="container mx-auto py-24 px-8">
      <h1 className="text-4xl font-bold mb-8">{page.data.title}</h1>
      
      {/* Page content from rich text */}
      {page.data.description && (
        <div className="mb-8 prose lg:prose-xl mx-auto">
          <PrismicRichText field={page.data.description} />
        </div>
      )}
      
      {/* Render slices */}
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['en'] }) => {
  const client = createClient();
  const pages = await client.getAllByType('page');
  
  const paths = pages.flatMap((page) => {
    return locales.map((locale) => ({
      params: { uid: page.uid },
      locale,
    }));
  });
  
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const client = createClient();
  
  if (!params?.uid) {
    return { notFound: true };
  }
  
  try {
    // Fetch the page
    const page = await client.getByUID('page', params.uid as string) as PageDocument;
    
    return {
      props: { 
        page,
        ...(await serverSideTranslations(locale || 'en', ['common', 'horse'])),
      },
      revalidate: 60, // ISR: update every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching page data:', error);
    return { notFound: true };
  }
};