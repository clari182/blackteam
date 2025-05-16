import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `TextSection`.
 */
export type TextSectionProps = SliceComponentProps<Content.TextSectionSlice>;

/**
 * Component for "TextSection" Slices.
 */
const TextSection: FC<TextSectionProps> = ({ slice }) => {
  const { primary } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="max-w-3xl mx-auto px-4">
        {primary.text && (
          <div className="prose prose-lg mx-auto">
            <PrismicRichText field={primary.text} />
          </div>
        )}
      </div>
    </section>
  );
};

export default TextSection;
