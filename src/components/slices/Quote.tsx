import { QuoteSlice } from "../../../prismicio-types";

interface QuoteProps {
  slice: QuoteSlice;
}

export default function Quote({ slice }: QuoteProps) {
  const { primary } = slice;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 text-center">
        "{primary.quote}"
      </blockquote>
    </div>
  );
} 