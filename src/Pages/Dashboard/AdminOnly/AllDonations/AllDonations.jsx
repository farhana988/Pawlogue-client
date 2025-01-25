import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import AllDonationsTable from "./AllDonationsTable";
import Heading from "../../../../Components/Reusable/Heading";

const AllDonations = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: donations = [],

    error,
    refetch,
  } = useQuery({
    queryKey: ["donations"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/donationCampaign`);

      return data;
    },
  });

  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = async (donationId) => {
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
    } catch {
      Swal.fire(
        "Error",
        "An error occurred while deleting the donation.",
        "error"
      );
    }
  };

  return (
    <div className=" mx-auto p-6 mb-20">
      <Heading title={"All Donation Campaigns"}></Heading>

      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className=" bg-lCard dark:bg-dCard  text-left">
            <th className="px-4 py-2 border border-gray-300">Name</th>

            <th className="px-4 py-2 border border-gray-300">Amount</th>
            <th className="px-4 py-2 border border-gray-300">Status</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations?.map((donation) => (
            <AllDonationsTable
              key={donation._id}
              donation={donation}
              handleDelete={handleDelete}
              refetch={refetch}
            ></AllDonationsTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDonations;
