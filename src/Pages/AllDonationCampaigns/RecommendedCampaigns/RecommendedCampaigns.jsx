import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/loading/LoadingSpinner";
import ContentCard from "../../../Components/card/ContentCard";

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {recommendedCampaigns.slice(0, 5).map((campaign) => (
          <ContentCard
            key={campaign._id}
            image={campaign.image}
            name={campaign.name}
            link={`/donationCampaignDetails/${campaign._id}`}
            buttonText="Details"
            detailsPath={`/donationCampaignDetails/${campaign._id}`}
            additionalContent={
              <>
                <p className="text-xs lg:text-sm opacity-80">
                  <span className="font-semibold">Max Donation:</span> $
                  {campaign.amount}
                </p>
                <p className="text-xs lg:text-sm opacity-80 mb-2">
                  <span className="font-semibold">Total Donated:</span> $
                  {campaign.totalDonationAmount || 0}
                </p>
              </>
            }
            showLocation={false}
            showAge={false}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedCampaigns;
