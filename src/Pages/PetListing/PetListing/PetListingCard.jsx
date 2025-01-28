/* eslint-disable react/prop-types */
// import React from 'react';

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PetListingCard = ({ pet }) => {
  const { _id, image, age, name, location } = pet || {};
  return (
    <div>
      <div
        className=" rounded shadow-lg p-4 relative
               bg-lCard dark:bg-dCard "
      >
        {/* image */}
        <img
          src={image}
          alt={name}
          className="w-full  h-20 md:h-28 lg:h-40 object-cover rounded-xl mb-2"
        />
        <div className=" flex flex-col flex-grow">
          {/* name */}
          <h3 className="lg:text-xl font-semibold " title={name}>
            {name?.substring(0, 20)}
          </h3>

          {/* age */}
          <p
            className="absolute text-black font-semibold px-5 py-1 text-xs lg:text-base
                   rounded-bl-2xl z-10 bg-lBtn dark:bg-dBtn
                   top-0 right-0"
          >
            Age: {age}
          </p>

          {/* location */}
          <p className="text-xs lg:text-base flex gap-2 my-1">
            <FaLocationDot /> {location?.substring(0, 39)}
          </p>

          {/* btn */}
          <div className="mt-auto flex justify-end">
            <Link
              to={`/petDetails/${_id}`}
              className="px-2 lg:px-4 py-1 rounded-tr-3xl rounded-bl-3xl rounded-lg
                  text-xs lg:text-base w-16 lg:w-24 font-semibold 
                  bg-lBtn dark:bg-dBtn"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetListingCard;
