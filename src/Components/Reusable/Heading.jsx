/* eslint-disable react/prop-types */
import "animate.css";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-8">
      <h1
        className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-2
         text-[#299173] dark:text-[#ff5959fa]"
      >
        {title}
      </h1>
      <p
        className=" text-xs xl:text-sm md:px-20 lg:px-80  text-center opacity-80 
      "
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
