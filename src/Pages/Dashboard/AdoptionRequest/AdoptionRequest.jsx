import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import NoData from "../../../Components/Reusable/NoData";
import Swal from "sweetalert2";
import SkeletonLoader from "../../../Components/Reusable/SkeletonLoader";

const AdoptionRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const {
    data: adoptPets,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["adoptPets", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/pets/${user?.email}`);

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
       await axiosSecure.put(`/removeAdoptPet/${petId}`);
     
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
         await axiosSecure.patch(`/changeAdopt/${petId}`);
     
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

  return (
    <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Adoption Requests for Your Pets
    </h2>
    {adoptPets?.filter((pet) => pet.adoptUser).length > 0 ? (
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Pet Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Adopt Req By
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Phone
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Location
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {adoptPets
              .filter((pet) => pet.adoptUser) // Filter pets where adoptUser exists
              .map((pet) => (
                <tr key={pet._id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm font-medium text-gray-700">
                    {pet.petName}
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-700">
                    {pet.adoptUser}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {pet.adoptEmail}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {pet.phone}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {pet.address}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 flex space-x-2">
                    <button
                      onClick={() => handleDeleteAdoptInfo(pet._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdateAdoptInfo(pet._id)}
                      disabled={pet.adopted === "true"}
                      className={`px-4 py-2 rounded-md text-white ${
                        pet.adopted === "true"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {pet.adopted === "true" ? "Accepted" : "Accept"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    ) : (
      <NoData />
    )}
  </div>
  );
};

export default AdoptionRequest;
