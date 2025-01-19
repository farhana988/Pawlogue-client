/* eslint-disable react/prop-types */
// import React from 'react';

import { TfiFaceSad } from "react-icons/tfi";

const NoData = ({title,subtitle}) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-5 my-20 active
                         relative          text-xl md:text-2xl lg:text-4xl font-bold"
      >
        <TfiFaceSad className="text-9xl md:ml-80 lg:ml-[800px]" />
        <p className="opacity-50  md:absolute
        md:-bottom-10 md:-right-20 lg:-right-80
        ">{title}</p>
        <p className="opacity-50">{subtitle}</p>
      </div>
    </div>
  );
};

export default NoData;
