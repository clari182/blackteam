import { PageDocument, HeroBannerSlice, TextSectionSlice, TwoColumnLayoutSlice, ImageGallerySlice, CallToActionSlice, QuoteSlice } from "../../../prismicio-types";
import TextSection from "@/slices/TextSection";
import TwoColumnLayout from "@/slices/TwoColumnLayout";
import ImageGallery from "@/slices/ImageGallery";
import CallToAction from "@/slices/CallToAction";
import Quote from "@/slices/Quote";
import HeroBanner from "@/slices/HeroBanner";

interface PageProps {
  page: PageDocument;
}

export const Page = ({ page }: PageProps) => {
  const { data } = page;

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">{data.title}</h1>

      {data.slices && data.slices.length > 0 && (
        <div className="space-y-12">
          {data.slices.map((slice, index) => {
            const sliceProps = {
              index,
              slices: data.slices,
              context: {}
            };

            switch (slice.slice_type) {
              case "hero_banner":
                return <HeroBanner key={index} {...sliceProps} slice={slice as HeroBannerSlice} />;
              case "text_section":
                return <TextSection key={index} {...sliceProps} slice={slice as TextSectionSlice} />;
              case "two_column_layout":
                return <TwoColumnLayout key={index} {...sliceProps} slice={slice as TwoColumnLayoutSlice} />;
              case "image_gallery":
                return <ImageGallery key={index} {...sliceProps} slice={slice as ImageGallerySlice} />;
              case "call_to_action":
                return <CallToAction key={index} {...sliceProps} slice={slice as CallToActionSlice} />;
              case "quote":
                return <Quote key={index} {...sliceProps} slice={slice as QuoteSlice} />;
              default:
                return null;
            }
          })}
        </div>
      )}
    </div>
  );
}; 