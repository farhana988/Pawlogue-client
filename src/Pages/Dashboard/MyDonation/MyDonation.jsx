import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import NoData from "../../../Components/Reusable/NoData";
import Swal from "sweetalert2";

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: donations = [], refetch } = useQuery({
    queryKey: ["donations", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/donation/${user.email}`);
      return res.data;
    },
  });

  const handleRefund = async (donationId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to request a refund? This will remove your donation.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, refund it!",
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/donation/${donationId}`);
        if (res.data.deletedCount > 0) {
          Swal.fire("Refunded!", "Your donation has been removed.", "success");
          refetch();
        } else {
          Swal.fire(
            "Error!",
            "Could not process the refund. Please try again.",
            "error"
          );
        }
      }
    } catch (error) {
      console.error("Refund Error:", error);
      Swal.fire(
        "Error!",
        "An error occurred while processing the refund.",
        "error"
      );
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Donations</h1>
      {donations.length === 0 ? (
        <NoData></NoData>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Pet Image</th>
              <th className="border border-gray-300 px-4 py-2">Pet Name</th>
              <th className="border border-gray-300 px-4 py-2">
                Donated Amount
              </th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.transactionId}>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={donation.petImage}
                    alt={donation.petName}
                    className="h-16 w-16 object-cover rounded-full"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {donation.petName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  $ {donation.donatedAmount} 
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => {
                      handleRefund(donation._id);
                      console.log(donation._id);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyDonation;
