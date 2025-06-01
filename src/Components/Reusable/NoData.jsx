/* eslint-disable react/prop-types */

import { TfiFaceSad } from "react-icons/tfi";

const NoData = ({ title, subtitle }) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-5 my-14 active
                   relative text-xl md:text-2xl lg:text-4xl font-bold"
      >
        <TfiFaceSad
          className="text-9xl ml-48 md:ml-[500px] lg:ml-[780px] xl:ml-[990px]
        2xl:ml-[1190px] "
        />
        <p
          className="opacity-50  absolute -bottom-10
         -right-20 md:-right-60 lg:-right-[420px] xl:-right-[500px] 2xl:-right-[550px]
        "
        >
          {title}
        </p>
        <p className="opacity-50">{subtitle}</p>
      </div>
    </div>
  );
};

export default NoData;
