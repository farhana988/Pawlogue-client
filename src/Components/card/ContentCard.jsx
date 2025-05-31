/* eslint-disable react/prop-types */

import { FaLocationDot } from "react-icons/fa6";
import FillBtn from "../button/FillBtn";

const ContentCard = ({
  image,
  name,
  location,
  age,
  buttonText,
  additionalContent,
  detailsPath,
  additionalStyles = "",
  showAge = true,
  showLocation = true,
  showButton = true,
}) => {
  return (
    <div
      className={`bg-lCard dark:bg-dCard shadow-lg rounded-lg overflow-hidden hover:shadow-xl relative transition-shadow duration-300 ${additionalStyles}`}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-24 md:h-28 lg:h-40 object-cover"
      />

      <div className="px-3 lg:px-6 py-2 lg:py-4 flex flex-col flex-grow">
        {/* Name */}
        <h3 className="xl:text-xl font-semibold" title={name}>
          {name?.substring(0, 20)}
        </h3>

        {/* Age */}
        {showAge && (
          <p className="absolute text-black font-semibold px-5 py-1 text-sm
           xl:text-base rounded-bl-2xl z-10 bg-lBtn dark:bg-dBtn top-0 right-0">
            Age: {age}
          </p>
        )}

        {/* Location */}
        {showLocation && (
          <p className="text-xs xl:text-base flex gap-2 my-1 mb-3">
            <FaLocationDot /> {location?.substring(0, 39)}
          </p>
        )}

        {/* Additional Content (like donation data, etc.) */}
        {additionalContent && <div>{additionalContent}</div>}

        {/* Button */}
        {showButton && (
          <div className="mt-auto flex justify-end">
            <div className="mt-auto flex justify-end">
              <FillBtn text={buttonText} link={detailsPath} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
