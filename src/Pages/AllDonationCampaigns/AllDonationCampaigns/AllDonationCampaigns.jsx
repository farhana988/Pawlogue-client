import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AllDonationCampaignsCard from "./AllDonationCampaignsCard";
import CardSkeleton from "../../../Components/loading/CardSkeleton";
import Container from "../../../Components/Reusable/Container";
import Heading from "../../../Components/Reusable/Heading";
import { useLocation } from "react-router-dom";

const AllDonationCampaigns = () => {
  const location = useLocation();
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

  if (isLoading) return <CardSkeleton></CardSkeleton>;
  if (error) return <div>Error: {error.message}</div>;

  // dynamic title
  if (location.pathname === "/donationCampaigns") {
    document.title = "Pawlogue | Donation Campaigns";
  }

  return (
    <div>
      <Heading title={" All Donation Campaigns "}></Heading>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.pages.map((page) =>
            page.campaigns.map((campaign) => (
              <AllDonationCampaignsCard
                key={campaign._id}
                campaign={campaign}
              />
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
      </Container>
    </div>
  );
};

export default AllDonationCampaigns;
