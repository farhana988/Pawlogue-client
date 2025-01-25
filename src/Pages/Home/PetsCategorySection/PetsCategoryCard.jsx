/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PetsCategoryCard = ({ pet }) => {
  const { _id, image, age, name, location } = pet || {};
  return (
    <div
    className="bg-lCard dark:bg-dCard shadow-lg rounded-lg
               overflow-hidden hover:shadow-xl relative
               transition-shadow duration-300 flex flex-col"
  >
    {/* image */}
    <img src={image} alt={name} className="w-full h-24 md:h-28 lg:h-40 object-cover" />
    
    <div className="px-3 lg:px-6 py-2 lg:py-4 flex flex-col flex-grow">
      {/* name */}
      <h3 className="lg:text-xl font-semibold " title={name}>
        {name?.substring(0, 20)}
      </h3>
  
      {/* age */}
      <p
        className="absolute text-black font-semibold px-5 py-1 text-sm lg:text-base
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
        className=" font-semibold px-4 py-1 rounded-full 
                  text-xs lg:text-base w-16 lg:w-20
                  bg-lBtn dark:bg-dBtn"
      >
        Details
      </Link>
      </div>
    </div>
  </div>
  
  );
};

export default PetsCategoryCard;
