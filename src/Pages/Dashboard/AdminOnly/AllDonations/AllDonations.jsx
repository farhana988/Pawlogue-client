import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import AllDonationsTable from "./AllDonationsTable";

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

  const handleDelete = async (donationId) => {
    console.log(`Attempting to delete donation with ID: ${donationId}`);

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
        const response = await axiosSecure.delete(
          `/donationCampaign/${donationId}`
        );

        if (response.data.deletedCount > 0) {
          refetch();
          Swal.fire(
            "Deleted!",
            "Your donation campaign has been deleted.",
            "success"
          );
        }
      }
    } catch (error) {
      console.error("Error while deleting donation:", error);
      Swal.fire(
        "Error",
        "An error occurred while deleting the donation.",
        "error"
      );
    }
  };

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
            {donations.map((donation) => 
             <AllDonationsTable
             key={donation._id}
             donation={donation}
             handleDelete={handleDelete}
             refetch={refetch}
             ></AllDonationsTable>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDonations;
