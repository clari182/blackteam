import { TextSectionSlice } from "../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";

interface TextSectionProps {
  slice: TextSectionSlice;
}

export default function TextSection({ slice }: TextSectionProps) {
  const { primary } = slice;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="prose prose-lg">
        <PrismicRichText field={primary.text} />
      </div>
    </div>
  );
} 