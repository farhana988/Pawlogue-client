import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Heading from "../../../../Components/Reusable/Heading";
import Container from "../../../../Components/Reusable/Container";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],

    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);

      return data;
    },
   
  });

  if (error) return <div>Error: {error.message}</div>;

  const handleMakeAdmin = async (email) => {
   
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
       await axiosSecure.patch(`/user/role/${email}`);
   
        refetch();
        Swal.fire("congo!", "Your role has been updated.", "success");
      }
    } catch  {
    
      Swal.fire("Error", "An error occurred while updating the role.", "error");
    }
  };
  return (
    <Container>
   
      
   <Heading title={"  All Users"}></Heading>
    <div className="max-w-[420px] md:max-w-[610px] lg:max-w-4xl mx-auto  overflow-x-auto mb-20">
      <table className="table-auto w-full
        bg-lCard dark:bg-dCard  border border-gray-200 
      rounded-lg shadow-md">
        <thead className=" bg-lCard dark:bg-dCard ">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">
              Image
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id} className="border-b ">
              <td className="px-6 py-4 text-center">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 text-xs lg:text-sm ">{user.name?.substring(0,20)}</td>
              <td className="px-6 py-4 text-xs lg:text-sm "
              title={user?.email}
              >{user.email?.substring(0,20)}</td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleMakeAdmin(user?.email)}
                  className={`px-4 py-2 rounded-md text-white text-xs lg:text-base ${
                    user.role === "admin"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  disabled={user.role === "admin"}
                >
                  {user.role === "admin" ? "Admin" : "Make Admin"}
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

export default AllUsers;
