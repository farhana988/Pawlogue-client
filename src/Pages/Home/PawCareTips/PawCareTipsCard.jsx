/* eslint-disable react/prop-types */

const PawCareTipsCard = ({ tip }) => {
  const { title, description } = tip || {};
  return (
    <div className="p-6 rounded-lg shadow-md bg-lCard dark:bg-dCard flex flex-col h-full">
    <h3 className=" lg:text-2xl font-semibold mb-2"
    title={title}>
      {title?.substring(0, 17)}
    </h3>
    <p className="text-xs lg:text-base mb-2 flex-grow">
      {description?.substring(0,68)}</p>
    
    {/* Learn more link positioned at the bottom */}
    <a href="https://www.learnMore.com" className="text-sm lg:text-base text-blue-500 hover:underline italic mt-auto">
      Learn more
    </a>
  </div>
  );
};

export default PawCareTipsCard;
