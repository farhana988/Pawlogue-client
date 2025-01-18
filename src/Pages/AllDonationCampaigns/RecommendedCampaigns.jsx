import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


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

  if (isLoading) return <div>Loading recommended campaigns...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Recommended Campaigns</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedCampaigns.slice(0, 3).map((campaign) => (
          <div key={campaign._id} className="card">
            <img
              src={campaign.image}
              alt={campaign.name}
              className="w-full h-40 object-cover rounded"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">{campaign.name}</h4>
              <p className="text-gray-600">{campaign.shortDescription}</p>
               {/* Donation Details */}
            <p className="text-gray-600">
              <span className="font-semibold">Maximum Donation:</span> $
              {campaign.amount}
            </p>
             {/* View Details Button */}
             <Link
                to={`/donationCampaignDetails/${campaign._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCampaigns;
