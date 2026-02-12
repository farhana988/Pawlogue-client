/* eslint-disable react/prop-types */
import { TfiFaceSad } from "react-icons/tfi";

const DashboardNoData = ({ title, subtitle }) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-5 my-40 active
                                   text-xl md:text-2xl font-semibold"
      >
        <TfiFaceSad className="text-8xl " />
        <p className="opacity-50">{title}</p>
        <p className="opacity-50">{subtitle}</p>
      </div>
    </div>
  );
};

export default DashboardNoData;
