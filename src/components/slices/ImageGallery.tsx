import { ImageGallerySlice } from "../../../prismicio-types";
import { PrismicImage } from "@prismicio/react";

interface ImageGalleryProps {
  slice: ImageGallerySlice;
}

export default function ImageGallery({ slice }: ImageGalleryProps) {
  const { primary } = slice;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {primary.images.map((item, index) => (
          <div key={index} className="aspect-square">
            {item.image && (
              <PrismicImage
                field={item.image}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 