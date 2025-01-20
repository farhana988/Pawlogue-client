import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import SkeletonLoader from "../../../Components/Reusable/SkeletonLoader";
import Heading from "../../../Components/Reusable/Heading";
import DashboardNoData from "../../../Components/Reusable/DashboardNoData";

const AdoptionRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [acceptedPets, setAcceptedPets] = useState({}); // Tracks accepted pets by petId

  const {
    data: adoptPets,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["adoptPets", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/adoptions/${user?.email}`);

      return data;
    },
  });

  if (isLoading) return <SkeletonLoader></SkeletonLoader>;
  if (error) return <div>Error loading pets</div>;

  // delete function
  const handleDeleteAdoptInfo = async (petId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      });
      if (result.isConfirmed) {
        await axiosSecure.delete(`/removeAdoptPet/${petId}`);

        refetch();
        Swal.fire(
          "congo!",
          "You have accepted the adoption request.",
          "success"
        );
      }
    } catch (error) {
      console.error("Error deleting adoption info:", error);
      alert("Failed to delete adoption information.");
    }
  };


  // edit function
  const handleUpdateAdoptInfo = async (petId) => {
    console.log("Updating adoption status for petId:", petId); 
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      });
      if (result.isConfirmed) {
        const response =   await axiosSecure.patch(`/changeAdopt/${petId}`);

        if (response.status === 200) {
          setAcceptedPets((prev) => ({ ...prev, [petId]: true })); // Mark petId as accepted
          refetch();
          Swal.fire("Success!", "Adoption request accepted.", "success");
        } else {
          Swal.fire("Error!", "Failed to update adoption request.", "error");
        }
      }
    } catch  {
      Swal.fire("Error!", "Sorry, Someone just Adopted it", "error");
    }
  };

  return (
    <div>
      <Heading title={" Adoption Requests for Your Pets"}></Heading>
      <div className="max-w-[420px] md:max-w-[610px] lg:max-w-7xl mx-auto px-5 overflow-x-auto">
        {adoptPets?.length > 0 ? (
          <div className="overflow-x-auto  bg-lCard dark:bg-dCard  shadow-lg rounded-lg">
            <table className="min-w-full table-auto">
              <thead className=" bg-lCard dark:bg-dCard  border-b">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium">
                    Pet Name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium">
                    Adopt Req By
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium">
                    Email
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium">
                    Phone
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium">
                    Location
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {adoptPets
                  .map((pet) => (
                    <tr key={pet._id} className="border-b ">
                      <td className="py-4 px-4 text-sm font-medium ">
                        {pet.petName?.substring(0, 20)}
                      </td>
                      <td className="py-4 px-4 text-sm font-medium ">
                        {pet.adoptUser?.substring(0, 20)}
                      </td>
                      <td className="py-4 px-4 text-sm opacity-80">
                        {pet.adoptEmail?.substring(0, 20)}
                      </td>
                      <td className="py-4 px-4 text-sm opacity-80">
                        {pet.phone}
                      </td>
                      <td className="py-4 px-4 text-sm opacity-80">
                        {pet.address?.substring(0, 20)}
                      </td>
                      <td className="py-4 px-4 text-sm opacity-80 flex space-x-2">
                        <button
                          onClick={() => handleDeleteAdoptInfo(pet._id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
                        >
                          Delete
                        </button>
                        <button
                        onClick={() => handleUpdateAdoptInfo(pet.petId)} 
                        disabled={acceptedPets[pet.petId] || pet.adopted === true} 
                        className={`px-4 py-2 rounded-md text-white ${
                          acceptedPets[pet.petId] || pet.adopted === true
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        {acceptedPets[pet.petId] || pet.adopted === true ? "Accepted" : "Accept"} 
                      </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
         <DashboardNoData
         title={'No Adoption Requests Found'}
         ></DashboardNoData>
        )}
      </div>
    </div>
  );
};

export default AdoptionRequest;
