/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Rslide = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-60 md:h-96 lg:h-[550px] object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
        <div className="bg-opacity-70 p-6">
          {/* title */}
          <h2 
          className="text-lg md:text-2xl lg:text-4xl font-bold text-ivory"
          >{title}</h2>

          {/* des */}
          <p 
          className="mt-2 text-xs md:text-sm lg:text-lg
          w-64 md:w-96 lg:w-[450px] text-ivory"
          >{description}</p>

          {/* btn */}
          <button className="mt-4 px-3 lg:px-5 lg:py-2 py-1 text-xs md:text-sm lg:text-lg
           text-white bg-dBtn
            rounded-full transition duration-300">
            <Link to='/petListing'>
            {buttonText}
            </Link>
          
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rslide;
