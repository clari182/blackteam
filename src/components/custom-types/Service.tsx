import { ServiceDocument } from "../../../prismicio-types";
import { PrismicImage } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

interface ServiceProps {
  service: ServiceDocument;
}

export const Service = ({ service }: ServiceProps) => {
  const { data } = service;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          {data.image && (
            <PrismicImage
              field={data.image}
              className="rounded-lg shadow-lg w-full"
            />
          )}
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{data.name}</h2>
          <div className="prose">
            <PrismicRichText field={data.description} />
          </div>
        </div>
      </div>
    </div>
  );
}; 