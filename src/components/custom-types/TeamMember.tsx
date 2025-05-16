import { TeamMemberDocument } from "../../../prismicio-types";
import { PrismicImage } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

interface TeamMemberProps {
  teamMember: TeamMemberDocument;
}

export const TeamMember = ({ teamMember }: TeamMemberProps) => {
  const { data } = teamMember;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        {data.photo && (
          <PrismicImage
            field={data.photo}
            className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
          />
        )}
        <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
        <p className="text-gray-600 mb-2">{data.role}</p>
        <p className="text-gray-700 mb-4">{data.bio}</p>
        
        {data.socials && data.socials.length > 0 && (
          <div className="flex justify-center space-x-4">
            {data.socials.map((social, index) => (
              <PrismicLink
                key={index}
                field={social.link}
                className="text-blue-600 hover:text-blue-800"
              >
                {social.name}
              </PrismicLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 