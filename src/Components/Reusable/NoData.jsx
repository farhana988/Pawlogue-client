/* eslint-disable react/prop-types */
// import React from 'react';

import { TfiFaceSad } from "react-icons/tfi";

const NoData = ({title,subtitle}) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-5 my-40 active
                                   text-xl md:text-2xl lg:text-4xl font-bold"
      >
        <TfiFaceSad className="text-9xl " />
        <p className="opacity-50">{title}</p>
        <p className="opacity-50">{subtitle}</p>
      </div>
    </div>
  );
};

export default NoData;
