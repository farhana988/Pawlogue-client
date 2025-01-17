import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const AllPets = () => {
    const axiosSecure = useAxiosSecure();
    const {
      data: pets  = [],
      isLoading,
      error,
      refetch,
    } = useQuery({
      queryKey: ["pets"],
      queryFn: async () => {
        const { data } = await axiosSecure(`/pets`);
  
        return data;
      },
      onSuccess: (data) => {
        console.log("Successfully fetched pets:", data);
      },
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
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
              <th className="px-4 py-2 border-b">Location</th>
              <th className="px-4 py-2 border-b">Short Description</th>
              <th className="px-4 py-2 border-b">Long Description</th>
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
                <td className="px-4 py-2">{pet.location}</td>
                <td className="px-4 py-2">{pet.shortDescription}</td>
                <td className="px-4 py-2">{pet.longDescription}</td>
                <td className="px-4 py-2">
                  <button
                    className={`px-4 py-2 rounded-full text-white ${
                      pet.adopted ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    {pet.adopted ? "Adopted" : "Not Adopted"}
                  </button>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  >
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