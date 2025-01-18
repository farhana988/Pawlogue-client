

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AllDonationCampaignsCard from "./AllDonationCampaignsCard";


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
            <AllDonationCampaignsCard
            key={campaign._id}
            campaign={campaign}
            ></AllDonationCampaignsCard>
          ))}
        </div>
      </div>
    );
};

export default AllDonationCampaigns;