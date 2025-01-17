import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users  = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);

      return data;
    },
    onSuccess: (data) => {
      console.log("Successfully fetched pets:", data);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;



  const handleMakeAdmin = async (email) => {
    console.log(`Attempting to update role with ID: ${email}`);
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
           const response = await axiosSecure.patch(`/user/role/${email}`);
console.log(response)
refetch()
             Swal.fire("congo!", "Your role has been updated.", "success");
           
         }
       } catch (error) {
         console.error("Error while updating role:", error);
         Swal.fire("Error", "An error occurred while updating the role.", "error");
       }
     };
  return(
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">All Users</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Profile Picture</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
              <td className="px-6 py-4 text-center">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleMakeAdmin(user?.email)}
                  className={`px-4 py-2 rounded-md text-white ${
                    user.role === "admin"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  disabled={user.role === "admin" }
                >
                  {user.role === "admin" ? "Admin" : "Make Admin"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default AllUsers;
