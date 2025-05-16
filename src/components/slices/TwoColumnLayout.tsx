import { TwoColumnLayoutSlice } from "../../../prismicio-types";
import { PrismicImage } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

interface TwoColumnLayoutProps {
  slice: TwoColumnLayoutSlice;
}

export default function TwoColumnLayout({ slice }: TwoColumnLayoutProps) {
  const { primary } = slice;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {primary.group.map((item, index) => (
          <div key={index} className="flex flex-col gap-6">
            {item.image && (
              <PrismicImage
                field={item.image}
                className="rounded-lg shadow-lg w-full"
              />
            )}
            {item.text && (
              <div className="prose">
                <PrismicRichText field={item.text} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 