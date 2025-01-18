/* eslint-disable react/prop-types */
// import React from 'react';

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PetListingCard = ({pet}) => {
 
    return (
        <div>
            <div
             
              className="border border-gray-300 rounded shadow-lg p-4 relative"
            >
              {/* image */}
              <img
                src={pet?.image}
                alt={pet?.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              {/* name */}
              <h3 className="text-lg font-semibold">{pet?.name}</h3>

              {/* location */}
              <p className="text-sm text-gray-500 flex gap-2">
                <FaLocationDot />
                {pet?.location}
              </p>

              {/* age */}
              <p
                className="absolute text-black font-semibold bg-red-400 px-5 py-1 
                rounded-bl-2xl
                top-0 right-0"
              >
                Age: {pet?.age}
              </p>
              <button className="flex justify-end">
                <Link to={`/petDetails/${pet._id}`}>Pet details</Link>
              </button>
            </div>
        </div>
    );
};

export default PetListingCard;