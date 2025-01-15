/* eslint-disable react/prop-types */
import "animate.css";


const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1
      
        className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 "
      >
        {title}
      </h1>
      <p className="text-xs lg:text-lg md:px-20 lg:px-80  text-center 
      font-thin">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
