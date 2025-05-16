import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  const { primary } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-blue-600 text-white py-16"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {primary.title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {primary.title}
          </h2>
        )}
        
        {primary.description && (
          <div className="prose prose-invert mx-auto mb-8 max-w-3xl">
            <PrismicRichText field={primary.description} />
          </div>
        )}
        
        {primary.button_label && primary.button_link && (
          <PrismicLink
            field={primary.button_link}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {primary.button_label}
          </PrismicLink>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
