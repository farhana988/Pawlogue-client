/* eslint-disable react/prop-types */

import { FaLocationDot } from "react-icons/fa6";

const PetDetailsCard = ({ petDetails, formatDate }) => {
  const { image, age, name, location, category, shortDescription, date } =
    petDetails || {};
  return (
    <div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-2 p-5 lg:p-9  md:mx-7 lg:mx-0
           bg-lCard dark:bg-dCard items-center mb-5"
      >
        {/* Pet Image */}
        <div className="flex justify-between relative">
          <img
            src={image}
            alt={name}
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
          {/* age */}
          <p
            className="font-semibold  px-5 py-1 absolute
                rounded-br-2xl  bg-lBtn dark:bg-dBtn text-black dark:text-ivory 
                top-0 -left-0"
          >
            Age: {age}
          </p>
        </div>

        {/* Pet Details */}
        <div className="space-y-2">
          {/* name */}
          <h1 className="text-xl lg:text-2xl font-bold">
            {name?.substring(0, 40)}
          </h1>
          {/* category */}
          <p className="text-lg">
            <strong>Category:</strong> {category}
          </p>
          {/* location */}
          <p className="text-sm opacity-80 flex gap-2">
            <FaLocationDot />
            {location?.substring(0, 65)}
          </p>
          {/* Date Added */}
          <p className="text-lg">
            <strong>Date: </strong> {formatDate(date)}
          </p>
          {/* >Short Description */}
          <p className="text-lg ">{shortDescription}</p>
          {/* <p className="text-lg">
            <strong>Long Description:</strong> {longDescription}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default PetDetailsCard;
