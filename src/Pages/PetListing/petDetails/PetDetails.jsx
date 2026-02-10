import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpinner from "../../../Components/loading/LoadingSpinner";
import Heading from "../../../Components/Reusable/Heading";
import AdoptModal from "./AdoptModal";
import DetailsCard from "../../../Components/card/DetailsCard";
import usePageTitle from "../../../hooks/usePageTitle";

const PetDetails = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // dynamic title
  usePageTitle(" Pet Details");
  const {
    data: petDetails = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["petDetails"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/pet/${id}`);

      return data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <div>Error: {error.message}</div>;

  const handleAdoptSubmit = async ({ phone, address }) => {
    const adoptionData = {
      adoptUser: user?.displayName,
      adoptEmail: user?.email,
      phone,
      address,
      petName: petDetails?.name,
      petId: petDetails?._id,
      petOwnerEmail: petDetails?.owner?.email,
      adopted: petDetails?.adopted,
    };

    try {
      await axiosSecure.post(`/adoptPet`, adoptionData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "adoption request sent",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsModalOpen(false);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit adoption request. Please try again later.",
      });
    }
  };

  const formatDate = (isoString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  const handleAdoptButton = () => {
    if (!user) {
      Swal.fire({
        position: "top-end",
        width: 250,
        color: "#d82222",
        title: "please login to adopt",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/login");
      return;
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="pt-10">
      <Heading title={"Pet Details"}></Heading>

      <DetailsCard
        image={petDetails?.image}
        title={petDetails?.name}
        age={petDetails?.age}
        location={petDetails?.location}
        category={petDetails?.category}
        shortDescription={petDetails?.shortDescription}
        date={petDetails?.date}
        formatDate={formatDate}
        type="pet"
      ></DetailsCard>
      <button
        onClick={handleAdoptButton}
        className={`font-semibold px-5 py-1 text-sm lg:text-base md:ml-7 lg:ml-0
             rounded-tr-3xl rounded-bl-3xl rounded-lg
            ${
              user?.email === petDetails?.owner?.email
                ? "bg-gray-400 text-zinc-800 cursor-not-allowed"
                : "bg-lBtn dark:bg-dBtn"
            }`}
        disabled={user?.email === petDetails?.owner?.email}
      >
        {user?.email === petDetails?.owner?.email
          ? "You are the owner"
          : "Adopt"}
      </button>

      {/* Modal */}
      <AdoptModal
        petDetails={petDetails}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAdoptSubmit}
      />
    </div>
  );
};

export default PetDetails;
