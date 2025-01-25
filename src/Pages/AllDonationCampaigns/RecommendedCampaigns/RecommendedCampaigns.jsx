import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/loading/LoadingSpinner";

const RecommendedCampaigns = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: recommendedCampaigns = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recommendedCampaigns"],
    queryFn: async () => {
      const { data } = await axiosSecure("/donationCampaign");
      return data.filter((campaign) => !campaign.paused);
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-32">
      <h3 className="text-2xl font-bold mb-6">Recommended Campaigns</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        {recommendedCampaigns.slice(0, 4).map((campaign) => (
          <div
            key={campaign._id}
            className=" bg-lCard dark:bg-dCard  rounded shadow-lg p-4"
          >
            {/* Pet Image */}
            <img
              src={campaign.image}
              alt={campaign.name}
              className="w-full h-20 md:h-28 lg:h-40 object-cover rounded-xl  mb-2"
            />

             {/* Pet Name */}
          <h3 className="lg:text-lg font-semibold ">{campaign.name?.substring(0, 30)}</h3>

          {/* Donation Details */}
          <p className="text-xs lg:text-sm opacity-80 ">
            <span className="font-semibold">Max Donation:</span> ${campaign.amount}
          </p>
          <p className="text-xs lg:text-sm opacity-80 mb-2">
            <span className="font-semibold">Total Donated:</span> ${campaign.totalDonationAmount || 0}
          </p>

            {/* View Details Button */}
          <div className="mt-auto flex justify-end">
            <Link
              to={`/donationCampaignDetails/${campaign._id}`}
              className="font-semibold px-2 lg:px-4 py-1 lg:py-2 text-sm lg:text-base rounded-tr-3xl rounded-bl-3xl rounded-lg bg-lBtn dark:bg-dBtn"
            >
              Details
            </Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCampaigns;
