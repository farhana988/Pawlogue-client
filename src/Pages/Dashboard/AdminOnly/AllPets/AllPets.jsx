import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllPets = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: pets = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/pets`);

      return data;
    },
 
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = async (petId) => {
  

    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axiosSecure.delete(`/pet/${petId}`);

        if (response.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your pet has been deleted.", "success");
        }
      }
    } catch (error) {
      console.error("Error while deleting pet:", error);
      Swal.fire("Error", "An error occurred while deleting the pet.", "error");
    }
  };



    const handleAdopt = async (petId) => {
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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">All Pets</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Age</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{pet.name}</td>
                <td className="px-4 py-2">{pet.age}</td>
                <td className="px-4 py-2">{pet.category}</td>
                <td className="px-4 py-2">
                  <button
                   onClick={() => {
                    handleAdopt(pet._id);
                  }}
                    className={`px-4 py-2 rounded-full text-white ${
                      pet.adopted ? "bg-green-500" : "bg-yellow-500"
                    }`}
                    disabled={pet.adopted}
                  >
                    {pet.adopted ? "Adopted" : "Not Adopted"}
                  </button>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => {
                      handleDelete(pet._id);
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    <Link to={`/dashboard/updatePet/${pet._id}`}> Update</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPets;
