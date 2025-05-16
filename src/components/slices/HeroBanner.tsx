import { HeroBannerSlice } from "../../../prismicio-types";
import { PrismicImage } from "@prismicio/react";

interface HeroBannerProps {
  slice: HeroBannerSlice;
}

export default function HeroBanner({ slice }: HeroBannerProps) {
  const { primary } = slice;
debugger
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      {primary.background_image && (
        <PrismicImage
          field={primary.background_image}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {primary.title}edwejndkew
        </h1>
        {primary.subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl">
            {primary.subtitle}
          </p>
        )}
      </div>
    </div>
  );
} 