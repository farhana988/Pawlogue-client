import { useParams } from "react-router-dom";
import Container from "../../Components/Reusable/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AdoptModal from "./AdoptModal";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../Components/Reusable/LoadingSpinner";
import Heading from "../../Components/Reusable/Heading";
import PetDetailsCard from "./PetDetailsCard";

const PetDetails = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);

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
      petName: petDetails.name,
    };

    try {
      await axiosSecure.put(`/adoptPet/${id}`, adoptionData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "adoption request sent",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error submitting adoption request:", err);
      alert("Failed to submit adoption request.");
    }
  };

  const formatDate = (isoString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
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
              onClick={() => setIsModalOpen(true)}
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
