import { HorseDocument } from "../../../prismicio-types";
import { PrismicImage } from "@prismicio/react";
import ImageGallery from "@/slices/ImageGallery";

interface HorseProps {
  horse: HorseDocument;
}

export const Horse = ({ horse }: HorseProps) => {
  const { data } = horse;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          {data.profile_photo && (
            <PrismicImage
              field={data.profile_photo}
              className="rounded-lg shadow-lg w-full"
            />
          )}
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <div className="space-y-4">
            <p className="text-gray-600">{data.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Breed</h3>
                <p>{data.breed}</p>
              </div>
              <div>
                <h3 className="font-semibold">Gender</h3>
                <p>{data.gender}</p>
              </div>
              <div>
                <h3 className="font-semibold">Birthdate</h3>
                <p>{data.birthdate && new Date(data.birthdate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 