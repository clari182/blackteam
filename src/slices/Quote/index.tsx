import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote: FC<QuoteProps> = ({ slice }) => {
  const { primary } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12"
    >
      <div className="max-w-3xl mx-auto px-4">
        {primary.quote && (
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 text-center">
            "{primary.quote}"
          </blockquote>
        )}
      </div>
    </section>
  );
};

export default Quote;
