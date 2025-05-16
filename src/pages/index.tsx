import { GetStaticProps } from 'next';
import { createClient } from '../prismicio';
import { SliceZone } from '@prismicio/react';
import { components } from '../slices';
import { PrismicDocument } from '@prismicio/client';

interface HomeProps {
  page: PrismicDocument | null;
}

export default function Home({ page }: HomeProps) {
  if (!page?.data?.slices) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const client = createClient();
    const page = await client.getByUID('page', 'home');
    
    return {
      props: { page },
      revalidate: 60, // Revalidate every minute
    };
  } catch (error) {
    console.error('Error fetching home page:', error);
    return {
      props: { page: null },
      revalidate: 60,
    };
  }
}; 