import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DonationModal from "../donationModal/DonationModal";
import RecommendedCampaigns from "../RecommendedCampaigns/RecommendedCampaigns";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/loading/LoadingSpinner";
import Heading from "../../../Components/Reusable/Heading";
import DetailsCard from "../../../Components/card/DetailsCard";
import usePageTitle from "../../../hooks/usePageTitle";

const DonationCampaignDetails = () => {
  // dynamic title
  usePageTitle("Donation Campaign Details");
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    data: donationDetails = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["donationDetails"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/donationCampaign/${id}`);

      return data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <div>Error: {error.message}</div>;

  const isExpired = new Date(donationDetails?.date) < new Date();

  // Check if the campaign is paused
  const isPaused = donationDetails?.paused;

  // Handle the Donate Now button click
  const handleDonateClick = () => {
    if (!user) {
      Swal.fire({
        position: "top-end",
        width: 250,
        color: "#d82222",
        title: "Please login to donate",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/login");
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="pt-10">
      <Heading title={"Donation Campaign Details"}></Heading>

      {/* donation card  */}
      <DetailsCard
        image={donationDetails?.image}
        title={donationDetails?.name}
        amount={donationDetails?.amount}
        date={donationDetails?.date}
        shortDescription={donationDetails?.shortDescription}
        longDescription={donationDetails?.longDescription}
        type="donation"
      ></DetailsCard>

      {/* Donate Button */}
      <button
        className={`text-white md:ml-7 lg:ml-0
             rounded-tr-3xl rounded-bl-3xl rounded-lg
            font-semibold px-3 lg:px-5 py-1 lg:py-2
                text-sm lg:text-base  ${
                  isPaused ||
                  isExpired ||
                  user?.email === donationDetails?.email
                    ? "bg-gray-400 text-zinc-800  cursor-not-allowed"
                    : " bg-lBtn dark:bg-dBtn "
                }`}
        onClick={handleDonateClick}
        disabled={
          isPaused || isExpired || user?.email === donationDetails?.email
        }
      >
        {user?.email === donationDetails?.email
          ? "You created the campaign"
          : isPaused
            ? "Campaign Paused"
            : isExpired
              ? "Campaign Expired"
              : "Donate Now"}
      </button>

      {/* Recommended Campaigns Section */}
      <RecommendedCampaigns></RecommendedCampaigns>

      {/*  donation  Modal*/}
      {isModalOpen && (
        <DonationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          donationDetails={donationDetails}
        />
      )}
    </div>
  );
};

export default DonationCampaignDetails;
