import { useNavigate, useParams } from "react-router-dom";
import Container from "../../../Components/Reusable/Container";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DonationModal from "../donationModal/DonationModal";
import RecommendedCampaigns from "../RecommendedCampaigns/RecommendedCampaigns";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/loading/LoadingSpinner";
import DonationCampaignDetailsCard from "./DonationCampaignDetailsCard";
import Heading from "../../../Components/Reusable/Heading";

const DonationCampaignDetails = () => {
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

  // dynamic title
  if (location.pathname === `/donationCampaignDetails/${id}`) {
    document.title = "Pawlogue | Donation Campaign Details";
  }

  return (
    <div className="">
      <Heading title={"Donation Campaign Details"}></Heading>
      <Container>
        {/* donation card  */}
        <DonationCampaignDetailsCard
          donationDetails={donationDetails}
        ></DonationCampaignDetailsCard>

        {/* Donate Button */}
        <button
          className={`text-white md:ml-7 lg:ml-0
            font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-full
                text-sm lg:text-base  ${
                  isPaused || isExpired
                    ? "bg-gray-400  cursor-not-allowed"
                    : " bg-lBtn dark:bg-dBtn "
                }`}
          onClick={handleDonateClick}
          disabled={isPaused || isExpired}
        >
          {isPaused
            ? "Campaign Paused"
            : isExpired
            ? "Campaign Expired"
            : "Donate Now"}
        </button>

        {/* Recommended Campaigns Section */}
        <RecommendedCampaigns></RecommendedCampaigns>
      </Container>

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
