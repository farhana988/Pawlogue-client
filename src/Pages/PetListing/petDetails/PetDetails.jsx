import { useLocation, useNavigate, useParams } from "react-router-dom";
import Container from "../../../Components/Reusable/Container";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpinner from "../../../Components/loading/LoadingSpinner";
import Heading from "../../../Components/Reusable/Heading";
import PetDetailsCard from "./PetDetailsCard";
import AdoptModal from "./AdoptModal";

const PetDetails = () => {
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

  // dynamic title
  if (location.pathname === `/petDetails/${id}`) {
    document.title = "Pawlogue | Pet Details";
  }

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
    <div>
      <Heading title={"Pet Details"}></Heading>
      <Container>
        <PetDetailsCard
          petDetails={petDetails}
          formatDate={formatDate}
        ></PetDetailsCard>
        <button
          onClick={handleAdoptButton}
          className="font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-full
                text-sm lg:text-base md:ml-7 lg:ml-0
               bg-lBtn dark:bg-dBtn"
        >
          Adopt
        </button>
      </Container>

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
