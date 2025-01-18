import { useParams } from "react-router-dom";
import Container from "../../Components/Reusable/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import DonationModal from "./DonationModal";

const DonationCampaignDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    onSuccess: (data) => {
      console.log("Successfully fetched donationDetails:", data);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  
  
  
  const handleDonationSuccess = () => {
    alert("Thank you for your donation!");
    setIsModalOpen(false); 
 
  };

  return (
    <div className="pt-20">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section: Image */}
        <div>
          <img
            src={donationDetails?.image}
            alt={donationDetails?.name}
            className="w-full h-96 object-cover rounded"
          />
        </div>

        {/* Right Section: Details */}
        <div className="space-y-4">
          {/* Pet Name */}
          <h2 className="text-2xl font-bold text-gray-800">
            {donationDetails?.name}
          </h2>

          {/* Short Description */}
          <p className="text-gray-600">{donationDetails?.shortDescription}</p>

          {/* Long Description */}
          <p className="text-gray-700">{donationDetails?.longDescription}</p>

          {/* Donation Details */}
          <p className="text-gray-600">
            <span className="font-semibold">Maximum Donation:</span> $
            {donationDetails?.amount}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Date:</span>{" "}
            {new Date(donationDetails?.date).toLocaleDateString()}
          </p>

          {/* User Information */}
          <p className="text-gray-600">
            <span className="font-semibold">Created By:</span>{" "}
            {donationDetails?.email}
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            Donate Now
          </button>
        </div>
      </div>
    </Container>

    {/*  donation  Modal*/}
    {isModalOpen && (
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        campaignId={id}
        onDonationSuccess={handleDonationSuccess}
        axiosSecure={axiosSecure}
        user={user}
      />
    )}
  </div>
  );
};

export default DonationCampaignDetails;
