import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Heading from "../../../../Components/Reusable/Heading";
import { Check, CheckCheck, Edit, Trash } from "lucide-react";

const AllPets = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: pets = [],

    error,
    refetch,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/pets`);

      return data;
    },
  });

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
    } catch {
  
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
        const response = await axiosSecure.patch(`/changeAdopt/${petId}`);
        if (response.status === 200) {
        refetch();
        Swal.fire(
          "congo!",
          "You have accepted the adoption request.",
          "success"
        );

      }
      }
    } catch  {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to delete adoption information. Please try again later.',
       
      });
    
    }
  };

  return (
    <div className="container mx-auto p-6 mb-20">
      <Heading title={"All Pets"}></Heading>
      <div className="overflow-x-auto">
        <table
          className="max-w-[420px] md:max-w-[610px] lg:max-w-7xl mx-auto px-5 overflow-x-auto
        bg-lCard dark:bg-dCard  table-auto border-collapse border border-gray-300"
        >
          <thead>
            <tr className=" text-left">
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
              <tr key={pet._id} className="border-b ">
                <td className="px-4 py-2">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-12 h-12 lg:w-20 lg:h-20 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{pet.name?.substring(0, 20)}</td>
                <td className="px-4 py-2">{pet.age}</td>
                <td className="px-4 py-2">{pet.category}</td>
                <td className="px-4 py-2">
                  {/* status */}
                  <button
                    onClick={() => {
                      handleAdopt(pet._id);
                    }}
                    className={`px-4 py-2 rounded-full text-white ${
                      pet.adopted ? "bg-green-500" : "bg-yellow-500"
                    }`}
                    disabled={pet.adopted}
                  >
                    {pet.adopted ? (
                      <CheckCheck size={16} />
                    ) : (
                      <Check size={16} />
                    )}
                  </button>
                </td>
                <td className="px-4 py-2 space-y-2  lg:space-x-2 ">
                  {/* delete */}
                  <button
                    onClick={() => {
                      handleDelete(pet._id);
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                  >
                  <Trash size={16} />
                  </button>
                  {/* update */}
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full
                   hover:bg-blue-700">
                    <Link to={`/dashboard/updatePet/${pet._id}`}>
                    <Edit size={16} /></Link>
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
