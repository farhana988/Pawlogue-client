
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AllDonationCampaigns = () => {
    const axiosSecure = useAxiosSecure();
  
    const {
      data: allDonationCampaign = [],
      isLoading,
      error,
    } = useQuery({
      queryKey: ["allDonationCampaign"],
      queryFn: async () => {
        const { data } = await axiosSecure(
          `/allDonationCampaign`
        );
  
        return data;
      },
      onSuccess: (data) => {
        console.log("Successfully fetched allDonationCampaign:", data);
      },
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
        <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          All Donation Campaigns ({allDonationCampaign.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDonationCampaign.map((campaign) => (
            <div
              key={campaign._id}
              className="border border-gray-300 rounded shadow-lg p-4"
            >
              {/* Pet Image */}
              <img
                src={campaign.image}
                alt={campaign.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
  
              {/* Pet Name */}
              <h3 className="text-lg font-semibold mb-2">{campaign.name}</h3>
  
              {/* Donation Details */}
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Maximum Donation:</span> $
                {campaign.amount}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Donated Amount:</span> $
                {campaign.donatedAmount || 0}
              </p>
  
              {/* View Details Button */}
              <Link
                to={`/donationCampaignDetails/${campaign._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AllDonationCampaigns;