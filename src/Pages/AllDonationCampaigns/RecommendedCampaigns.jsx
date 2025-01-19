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
    <div className="mt-32">
      <h3 className="text-2xl font-bold mb-6">Recommended Campaigns</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedCampaigns.slice(0, 3).map((campaign) => (
          <div key={campaign._id} className=" bg-lCard dark:bg-dCard  rounded shadow-lg p-4">
            
             {/* Pet Image */}
             <img
               src={campaign.image}
               alt={campaign.name}
               className="w-full h-48 object-cover rounded-xl  mb-2"
             />
 
             {/* Pet Name */}
             <h3 className="text-lg font-semibold mb-1">{campaign.name?.substring(0,30)}</h3>
 
             {/* Donation Details */}
             <p className="text-sm opacity-80 mb-1">
               <span className="font-semibold">Maximum Donation:</span> $
               {campaign.amount}
             </p>
             <p className="text-sm opacity-80 mb-4">
               <span className="font-semibold">Donated Amount:</span> $
               {campaign.totalDonationAmount || 0}
             </p>
 
             {/* View Details Button */}
             <Link
               to={`/donationCampaignDetails/${campaign._id}`}
               className="font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-full
               text-sm lg:text-base 
              bg-lBtn dark:bg-dBtn"
             >
               View Details
             </Link>
           </div>
           
         
        ))}
      </div>
    </div>
  );
};

export default RecommendedCampaigns;
