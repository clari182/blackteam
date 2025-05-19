import { FC, useState, useEffect } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicImage } from "@prismicio/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

/**
 * Props for `ImageGallery`.
 */
export type ImageGalleryProps = SliceComponentProps<Content.ImageGallerySlice>;

/**
 * Component for "ImageGallery" Slices.
 */
const ImageGallery: FC<ImageGalleryProps> = ({ slice }) => {
  const { primary } = slice;
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to mount before rendering Swiper to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-[300px] bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </section>
    );
  }

  // Make sure we have images to display
  const images = primary.images?.filter(item => item.image) || [];
  
  if (images.length === 0) {
    return null;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-lg shadow-lg"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="aspect-square">
              <PrismicImage
                field={item.image}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageGallery;
