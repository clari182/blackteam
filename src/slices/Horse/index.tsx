// @ts-nocheck
import React, { FC, useEffect, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicImage } from "@prismicio/react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

/**
 * Props for `Horse`.
 */
export type HorseProps = SliceComponentProps<Content.HorseSlice>;

/**
 * Component for "Horse" Slices.
 */
const Horse: FC<HorseProps> = ({ slice }) => {
  const { primary } = slice;
  const { t } = useTranslation(['horse', 'common']);
  const [mounted, setMounted] = useState(false);
  
  // Wait for client-side hydration to complete
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Get display preference
  const photoOnRight = primary.display === "Image right";

  // Text content that needs translation
  const renderLabels = () => {
    if (!mounted) return null;

    const age = primary.birthdate ? calculateAge(new Date(primary.birthdate)) : null;
    
    return (
      <div className="space-y-4">
        <p className="text-gray-600">{primary.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">{t('Breed')}</h3>
            <p>{primary.breed}</p>
          </div>
          <div>
            <h3 className="font-semibold">{t('Gender')}</h3>
            <p>{primary.gender && t(`${primary.gender}`)}</p>
          </div>
          <div>
            <h3 className="font-semibold">{t('Age')}</h3>
            <p>{age ? `${age} ${age === 1 ? t('year') : t('years')}` : '-'}</p>
          </div>
        </div>
      </div>
    );
  };

  // Function to calculate age in years
  const calculateAge = (birthdate) => {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    
    // Adjust age if birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Photo column - order changes based on display preference */}
        <div className={`md:w-1/3 ${photoOnRight ? 'md:order-2' : 'md:order-1'}`}>
          {primary.photo && (
            <PrismicImage
              field={primary.photo}
              className="rounded-lg shadow-lg w-full"
            />
          )}
        </div>
        
        {/* Content column */}
        <div className={`md:w-2/3 ${photoOnRight ? 'md:order-1' : 'md:order-2'}`}>
          <h2 className="text-3xl font-bold mb-4">{primary.name}</h2>
          {renderLabels()}
        </div>
      </div>
    </section>
  );
};

export default Horse;
