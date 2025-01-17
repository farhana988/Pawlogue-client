import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllDonations = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: donations = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["donations"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/donationCampaign`);

      return data;
    },
    onSuccess: (data) => {
      console.log("Successfully fetched donations:", data);
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;






  return (
    <div>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Donation Campaigns</h2>

        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Description</th>
              <th className="px-4 py-2 border border-gray-300">Amount</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  {donation.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {donation.shortDescription}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ${donation.amount}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {/* {paused[donation._id] || donation.isPaused ? (
                  <span className="text-red-500">Paused</span>
                ) : (
                  <span className="text-green-500">Active</span>
                )} */}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex space-x-2">
                    <button
                    // onClick={() => handlePause(donation._id)}
                    // className={`px-3 py-1 rounded-md text-white ${paused[donation._id] || donation.isPaused ? 'bg-green-500' : 'bg-yellow-500'} hover:bg-opacity-80`}
                    >
                      {/* {paused[donation._id] || donation.isPaused ? 'Unpause' : 'Pause'} */}
                    </button>
                    <button
                      // onClick={() => handleDelete(donation._id)}
                      className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      <Link to={`/dashboard/updateDonation/${donation._id}`}>Edit</Link>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDonations;
