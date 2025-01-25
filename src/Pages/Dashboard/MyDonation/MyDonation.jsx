import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Heading from "../../../Components/Reusable/Heading";
import DashboardNoData from "../../../Components/Reusable/DashboardNoData";

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
    } catch {
   
      Swal.fire(
        "Error!",
        "An error occurred while processing the refund.",
        "error"
      );
    }
  };

  return (
    <div className="mx-auto">
      <Heading title={"  My Donations"}></Heading>
    <div className="max-w-[420px] md:max-w-[610px] lg:max-w-7xl mx-auto px-5 overflow-x-auto
    mb-20">
      {donations?.length === 0 ? (
        <DashboardNoData
        title={'No Donation Found'}
        ></DashboardNoData>
      ) : (
        <table className="table-auto w-full border-collapse  bg-lCard dark:bg-dCard  text-gray-700 dark:text-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left border-b dark:border-gray-700  text-gray-800 dark:text-gray-300 font-semibold">
                Image
              </th>
              <th className="px-6 py-4 text-left border-b dark:border-gray-700  text-gray-800 dark:text-gray-300 font-semibold">
                Name
              </th>
              <th className="px-6 py-4 text-left border-b dark:border-gray-700  text-gray-800 dark:text-gray-300 font-semibold">
                Amount
              </th>
              <th className="px-6 py-4 text-center border-b dark:border-gray-700  text-gray-800 dark:text-gray-300 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {donations?.map((donation) => (
              <tr key={donation.transactionId} className="">
                <td className="px-6 py-4 border-b dark:border-gray-700">
                  <img
                    src={donation.petImage}
                    alt={donation.petName}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border border-gray-200 dark:border-gray-700"
                  />
                </td>
                <td className="px-6 py-4 border-b dark:border-gray-700">
                  {donation.petName?.substring(0, 20)}
                </td>
                <td className="px-6 py-4 border-b dark:border-gray-700">
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    $ {donation.donatedAmount}
                  </span>
                </td>
                <td className="px-6 py-4 text-center border-b dark:border-gray-700">
                  <button
                    onClick={() => handleRefund(donation._id)}
                    className="bg-red-500 text-white font-medium px-4 py-2 rounded-lg text-sm lg:text-base hover:bg-red-600 transition"
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
    </div>
  );
};

export default MyDonation;
