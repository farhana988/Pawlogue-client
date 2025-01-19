/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useDonations from "../../hooks/useDonations";


const AllDonationCampaignsCard = ({campaign}) => {

  const {_id,image,amount,name}= campaign || {}

    const totalDonationAmount = useDonations(_id);
    return (
        <div>
            <div
             
              className="  bg-lCard dark:bg-dCard  rounded shadow-lg p-4"
            >
              {/* Pet Image */}
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-xl  mb-2"
              />
  
              {/* Pet Name */}
              <h3 className="text-lg font-semibold mb-1">{name?.substring(0,30)}</h3>
  
              {/* Donation Details */}
              <p className="text-sm opacity-80 mb-1">
                <span className="font-semibold">Maximum Donation:</span> $
                {amount}
              </p>
              <p className="text-sm opacity-80 mb-4">
                <span className="font-semibold">Donated Amount:</span> $
                {totalDonationAmount || 0}
              </p>
  
              {/* View Details Button */}
              <Link
                to={`/donationCampaignDetails/${_id}`}
                className="font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-full
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn"
              >
                View Details
              </Link>
            </div>
        </div>
    );
};

export default AllDonationCampaignsCard;