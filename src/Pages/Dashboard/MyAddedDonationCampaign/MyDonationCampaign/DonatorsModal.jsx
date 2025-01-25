/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const DonatorsModal = ({ campaignId, onClose }) => {
  const [donators, setDonators] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchDonators = async () => {
      try {
        const response = await axiosSecure.get(`/donations/${campaignId}`);
        setDonators(response.data);
      } catch {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error fetching donators. Please try again later.",
        });
      }
    };

    fetchDonators();
  }, [campaignId, axiosSecure]);

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center 
        items-center z-50"
    >
      <div className=" bg-ivory dark:bg-[#212121]  rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-gray-400 text-3xl hover:text-gray-600 absolute top-4 right-4"
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold text-center mb-4">Donators List</h3>

        {donators.length > 0 ? (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left">Donor Email</th>
                <th className="px-4 py-2 border-b text-left">Donated</th>
              </tr>
            </thead>
            <tbody>
              {donators.map((donator) => (
                <tr key={donator._id}>
                  <td className="px-4 py-2 border-b" title={donator.donorEmail}>
                    {donator.donorEmail?.substring(0, 20)}
                  </td>
                  <td className="px-4 py-2 border-b">
                    ${donator.donatedAmount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="opacity-70 text-center mt-4">
            No donations have
            <br /> been made yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default DonatorsModal;
