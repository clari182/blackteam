import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicImage } from "@prismicio/react";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner: FC<HeroBannerProps> = ({ slice }) => {
  const { primary } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative h-[60vh] min-h-[400px] w-full"
    >
      {primary.background_image && (
        <PrismicImage
          field={primary.background_image}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 max-w-7xl mx-auto">
        {primary.title && (
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {primary.title}
          </h1>
        )}
        {primary.subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl">
            {primary.subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
