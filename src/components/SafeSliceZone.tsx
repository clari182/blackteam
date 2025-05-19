import { SliceZone } from '@prismicio/react';
import { useState, useEffect } from 'react';
import { components } from '../slices';

export default function SafeSliceZone({ slices }: { slices: any[] }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="py-8 h-full">
        <p className="text-center text-gray-500">Loading content...</p>
      </div>
    );
  }

  return (
    <div className="h-full">
      <SliceZone slices={slices} components={components} />
    </div>
  );
} 