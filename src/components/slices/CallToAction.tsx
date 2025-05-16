import { CallToActionSlice } from "../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

interface CallToActionProps {
  slice: CallToActionSlice;
}

export default function CallToAction({ slice }: CallToActionProps) {
  const { primary } = slice;

  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {primary.title}
        </h2>
        <div className="prose prose-invert mb-8">
          <PrismicRichText field={primary.description} />
        </div>
        {primary.button_label && primary.button_link && (
          <PrismicLink
            field={primary.button_link}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {primary.button_label}
          </PrismicLink>
        )}
      </div>
    </div>
  );
} 