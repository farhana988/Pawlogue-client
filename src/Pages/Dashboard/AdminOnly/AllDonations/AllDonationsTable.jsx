/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllDonationsTable = ({donation,handleDelete,refetch}) => {
    const axiosSecure = useAxiosSecure();
      // pause function
      const [isPaused, setIsPaused] = useState(donation.paused || false);
    
      // Toggle Pause
      const togglePause = async () => {
        try {
          const newPausedState = !isPaused;
          setIsPaused(newPausedState);
    
          await axiosSecure.patch(`/donationCampaign/${donation._id}`, {
            paused: newPausedState,
          });
          refetch()
        } catch (error) {
          console.error("Error updating paused state:", error);
        }
      };
    return (
        <>
             <tr  className="hover:bg-gray-50">
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
                {donation.paused ? 'Paused' : 'Active'}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex space-x-2">
                     {/* Pause/Unpause button */}
          <span
            onClick={togglePause}
            className={`relative cursor-pointer inline-block px-3 py-1 font-semibold text-${
              isPaused ? "gray" : "green"
            }-900 leading-tight`}
          >
            <span
              aria-hidden="true"
              className={`absolute inset-0 bg-${
                isPaused ? "gray" : "green"
              }-200 opacity-50 rounded-full`}
            ></span>
            <span className="relative">{isPaused ? "Unpause" : "Pause"}</span>
          </span>
                    <button
                      onClick={() => handleDelete(donation._id)}
                      className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600">
                      <Link to={`/dashboard/updateDonation/${donation._id}`}>
                        Edit
                      </Link>
                    </button>
                  </div>
                </td>
              </tr>
        </>
    );
};

export default AllDonationsTable;