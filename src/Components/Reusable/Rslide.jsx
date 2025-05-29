/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "animate.css";
import { useEffect, useState } from "react";

const Rslide = ({ imageSrc, title, description, buttonText, slideIndex }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [slideIndex]);

  return (
    <div className="relative" key={animationKey}>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-60 md:h-96 lg:h-[550px] object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-1/2 left-14 lg:left-32 transform -translate-y-1/2">
        <div className="bg-opacity-70 p-6">
          {/* title */}
          <h2
            className="text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold text-ivory
          animate__animated animate__fadeInDown"
          >
            {title}
          </h2>

          {/* des */}
          <p
            className="mt-2 text-xs md:text-sm lg:text-lg xl:text-xl
          w-64 md:w-96 lg:w-[450px] xl:w-[650px] text-ivory
         animate__animated animate__fadeInRightBig animate__delay-0.5s
         "
          >
            {description}
          </p>

          {/* btn */}
          <button
            className="mt-4 px-3 lg:px-5 lg:py-2 py-1 text-xs md:text-sm lg:text-lg
           text-black dark:text-white font-semibold bg-lBtn dark:bg-dBtn
            rounded-tr-3xl rounded-bl-3xl rounded-lg transition duration-300
          animate__animated  animate__jackInTheBox animate__delay-1s"
          >
            <Link to="/petListing">{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rslide;
