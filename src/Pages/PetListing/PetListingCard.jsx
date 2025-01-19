/* eslint-disable react/prop-types */
// import React from 'react';

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PetListingCard = ({pet}) => {
  const {_id,image,age,name,location}=pet || {}
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
                className="w-full h-48 object-cover rounded-xl mb-2"
              />
              {/* name */}
              <h3 className="text-lg font-semibold mb-2">{name?.substring(0,30)}</h3>

              {/* location */}
              <p className="text-sm opacity-80 flex gap-2 mb-2">
                <FaLocationDot />
                {location?.substring(0,39)}
              </p>

              {/* age */}
              <p
                className="absolute font-semibold  px-5 py-1 
                rounded-bl-2xl  bg-lBtn dark:bg-dBtn text-black dark:text-ivory 
                top-0 right-0"
              >
                Age: {age}
              </p>
              <button className="font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-full
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn">
                <Link to={`/petDetails/${_id}`}>Pet details</Link>
              </button>
            </div>
        </div>
    );
};

export default PetListingCard;