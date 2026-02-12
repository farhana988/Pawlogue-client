import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Heading from "../../../../Components/Reusable/Heading";
import { Check, CheckCheck, Edit, Trash } from "lucide-react";
import Container from "../../../../Components/Reusable/Container";

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
            "success",
          );
        }
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete adoption information. Please try again later.",
      });
    }
  };

  return (
    <Container>
      <Heading title={"All Pets"}></Heading>
      <div className="overflow-x-auto mb-20">
        <table
          className="max-w-[420px] md:max-w-[410px] lg:max-w-7xl mx-auto  
        bg-lCard dark:bg-dCard  table-auto border-collapse border border-gray-300"
        >
          <thead>
            <tr className=" text-left">
              {["Image", "Name", "Age", "Category", "Action Buttons"].map(
                (header, index) => (
                  <th key={index} className="px-4 py-2 border">
                    {header}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {pets?.map((pet) => (
              <tr key={pet._id} className="border">
                <td className="px-4 py-2 border">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2 border text-sm lg:text-base">
                  {pet.name?.substring(0, 20)}
                </td>
                <td className="px-4 py-2 border">{pet.age}</td>
                <td className="px-4 py-2 border text-sm lg:text-base">
                  {pet.category}
                </td>

                <td className="px-4 py-4 flex gap-2">
                  {/* status */}
                  <button
                    onClick={() => {
                      handleAdopt(pet._id);
                    }}
                    className={`px-2 py-2 rounded-full text-white  ${
                      pet.adopted
                        ? "bg-green-500 cursor-not-allowed"
                        : "bg-yellow-500"
                    }`}
                    disabled={pet.adopted}
                    title={pet.adopted ? "adopted" : "not Adopted"}
                  >
                    {pet.adopted ? (
                      <CheckCheck size={16} />
                    ) : (
                      <Check size={16} />
                    )}
                  </button>
                  {/* delete */}
                  <button
                    onClick={() => {
                      handleDelete(pet._id);
                    }}
                    className="px-2 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                  >
                    <Trash size={16} />
                  </button>
                  {/* update */}
                  <button
                    className="px-2 py-2 bg-blue-600 text-white rounded-full
                   hover:bg-blue-700"
                  >
                    <Link to={`/dashboard/updatePet/${pet._id}`}>
                      <Edit size={16} />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AllPets;
