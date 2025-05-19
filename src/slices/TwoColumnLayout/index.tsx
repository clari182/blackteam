import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicImage, PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import Link from "next/link";

/**
 * Props for `TwoColumnLayout`.
 */
export type TwoColumnLayoutProps =
  SliceComponentProps<Content.TwoColumnLayoutSlice>;

/**
 * Component for "TwoColumnLayout" Slices.
 */
const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({ slice }) => {
  const { primary } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {primary.group && primary.group.map((item, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              item.type ? 'md:flex-row-reverse' : ''
            }`}>
              <div className={`${item.type ? 'md:order-2' : 'md:order-1'}`}>
                {item.text && (
                  <div className="prose lg:prose-xl">
                    <PrismicRichText field={item.text} />
                  </div>
                )}
              </div>
              
              <div className={`${item.type ? 'md:order-1' : 'md:order-2'}`}>
                {/* Display image if it exists */}
                {item.image && (
                  <PrismicImage
                    field={item.image}
                    className="rounded-lg shadow-lg w-full"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TwoColumnLayout;
