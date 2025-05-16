import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicImage } from "@prismicio/react";

/**
 * Props for `ImageGallery`.
 */
export type ImageGalleryProps = SliceComponentProps<Content.ImageGallerySlice>;

/**
 * Component for "ImageGallery" Slices.
 */
const ImageGallery: FC<ImageGalleryProps> = ({ slice }) => {
  const { primary } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primary.images && primary.images.map((item, index) => (
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
    </section>
  );
};

export default ImageGallery;
