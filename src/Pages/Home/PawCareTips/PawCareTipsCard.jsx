/* eslint-disable react/prop-types */
// import React from 'react';

const PawCareTipsCard = ({ tip }) => {
  const { title, description, link } = tip || {};
  return (
    <div>
      <div className=" p-6 rounded-lg shadow-md bg-lCard dark:bg-dCard">
        <h3 className="text-xl lg:text-2xl font-semibold mb-2">{title?.substring(0,30)}</h3>
        <p className="text-xs lg:text-base mb-2">{description}</p>
        <a href={link} className="text-blue-500 hover:underline italic">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default PawCareTipsCard;
