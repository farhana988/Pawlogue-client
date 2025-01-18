import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AllDonationCampaignsCard from "./AllDonationCampaignsCard";

const AllDonationCampaigns = () => {
  const axiosSecure = useAxiosSecure();
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["allDonationCampaign"],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await axiosSecure(
        `/allDonationCampaign?page=${pageParam}&limit=6`
      );
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });

  if (inView && hasNextPage) {
    fetchNextPage();
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        All Donation Campaigns ({data.pages.flat().length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.pages.map((page) =>
          page.campaigns.map((campaign) => (
            <AllDonationCampaignsCard key={campaign._id} campaign={campaign} />
          ))
        )}
      </div>

      {/* Loader and Load More Button */}
      <div ref={ref} className="flex justify-center mt-6">
        {isFetchingNextPage ? (
          <div>Loading more...</div>
        ) : hasNextPage ? (
          <button
            onClick={() => fetchNextPage()}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Load More
          </button>
        ) : (
          <div>No more campaigns to load.</div>
        )}
      </div>
    </div>
  );
};

export default AllDonationCampaigns;
