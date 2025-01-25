/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useDonations from "../../../hooks/useDonations";

const AllDonationCampaignsCard = ({ campaign }) => {
  const { _id, image, amount, name } = campaign || {};

  const totalDonationAmount = useDonations(_id);
  return (
    <div>
      <div className="bg-lCard dark:bg-dCard rounded-lg shadow-lg p-4 flex flex-col h-full">
        {/* Pet Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-20 md:h-28 lg:h-40 object-cover rounded-xl mb-2"
        />
        <div className="flex flex-col flex-grow">
          {/* Pet Name */}
          <h3 className="lg:text-lg font-semibold ">{name?.substring(0, 30)}</h3>

          {/* Donation Details */}
          <p className="text-xs lg:text-sm opacity-80 ">
            <span className="font-semibold">Max Donation:</span> ${amount}
          </p>
          <p className="text-xs lg:text-sm opacity-80 mb-2">
            <span className="font-semibold">Total Donated:</span> ${totalDonationAmount || 0}
          </p>

          {/* View Details Button */}
          <div className="mt-auto flex justify-end">
            <Link
              to={`/donationCampaignDetails/${_id}`}
              className="font-semibold px-2 lg:px-4 py-1 lg:py-2 text-sm lg:text-base rounded-tr-3xl rounded-bl-3xl rounded-lg bg-lBtn dark:bg-dBtn"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDonationCampaignsCard;
