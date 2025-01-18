/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useDonations from "../../hooks/useDonations";


const AllDonationCampaignsCard = ({campaign}) => {

  const {_id,image,amount,name}=campaign

    const totalDonationAmount = useDonations(_id);
    return (
        <div>
            <div
             
              className="border border-gray-300 rounded shadow-lg p-4"
            >
              {/* Pet Image */}
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded mb-4"
              />
  
              {/* Pet Name */}
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
  
              {/* Donation Details */}
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Maximum Donation:</span> $
                {amount}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Donated Amount:</span> $
                {totalDonationAmount || 0}
              </p>
  
              {/* View Details Button */}
              <Link
                to={`/donationCampaignDetails/${_id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                View Details
              </Link>
            </div>
        </div>
    );
};

export default AllDonationCampaignsCard;