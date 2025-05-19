import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { Trans } from "react-i18next";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner: FC<HeroBannerProps> = ({ slice }) => {
  const { primary } = slice;
  
  // Get background image URL
  const bgImageUrl = primary.background_image?.url || '';

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-[calc(100vh-68px)] min-h-[700px] w-full flex items-center justify-center bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImageUrl})`,
      }}
    >
      <div className="text-center text-white p-4 max-w-4xl">
        {primary.title && (
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            {primary.title}
          </h1>
        )}
        {primary.subtitle && (
          <p className="text-xl md:text-2xl mb-10 drop-shadow-md max-w-2xl mx-auto">
            {primary.subtitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all">
            <Trans i18nKey="Know More" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
