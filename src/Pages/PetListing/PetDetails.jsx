import { useParams } from "react-router-dom";
import Container from "../../Components/Reusable/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AdoptModal from "./AdoptModal";
import Swal from "sweetalert2";

const PetDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user} = useContext(AuthContext)


  const {
    data: petDetails = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["petDetails"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/pet/${id}`);

      return data;
    },
    onSuccess: (data) => {
      console.log("Successfully fetched petDetails:", data);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;



  const handleAdoptSubmit = async ({ phone, address }) => {
    const adoptionData = {
      adoptUser: user?.displayName,
      adoptEmail: user?.email, 
      phone,
      address,
    };
console.log(adoptionData)
    try {
      await axiosSecure.put(`/adoptPet/${id}`, adoptionData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
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
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pet Image */}
        <div className="flex justify-center">
          <img
            src={petDetails.image}
            alt={petDetails.name}
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Pet Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{petDetails.name}</h1>
          <p className="text-lg mb-2">
            <strong>Age:</strong> {petDetails.age} years
          </p>
          <p className="text-lg mb-2">
            <strong>Category:</strong> {petDetails.category}
          </p>
          <p className="text-lg mb-2">
            <strong>Location:</strong> {petDetails.location}
          </p>
          <p className="text-lg mb-2">
            <strong>Status:</strong>{" "}
            {petDetails.adopted ? "Adopted" : "Available for Adoption"}
          </p>
          <p className="text-lg mb-2">
            <strong>Date Added:</strong> {formatDate(petDetails.date)}
          </p>
          <p className="text-lg mb-4">
            <strong>Short Description:</strong> {petDetails.shortDescription}
          </p>
          <p className="text-lg">
            <strong>Long Description:</strong> {petDetails.longDescription}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600"
          >
            Adopt
          </button>
        </div>
      </div>
    </Container>

    {/* Modal */}
    <AdoptModal
      petDetails={petDetails}
      userName="User Name" // Replace with dynamic user data
      userEmail="user@example.com" // Replace with dynamic user email
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleAdoptSubmit}
    />
  </div>
  );
};

export default PetDetails;
