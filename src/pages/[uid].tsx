// pages/[uid].tsx
import { createClient } from '../prismicio';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PrismicDocument } from '@prismicio/client';
import SafeSliceZone from '../components/SafeSliceZone';

interface PageProps {
  page: PrismicDocument | null;
}

export default function Page({ page }: PageProps) {
  if (!page?.data?.slices) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Page not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <SafeSliceZone slices={page.data.slices} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const client = createClient();
    const page = await client.getByUID('page', params?.uid as string);
    return { 
      props: { page },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching page:', error);
    return { 
      props: { page: null },
      revalidate: 60,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const pages = await client.getAllByType('page');
  return {
    paths: pages.map((p) => ({ params: { uid: p.uid } })),
    fallback: 'blocking',
  };
};
