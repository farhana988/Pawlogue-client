/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllDonationsTable = ({donation,handleDelete,refetch}) => {

    const {paused,_id,shortDescription,amount,name} = donation || {}
    const axiosSecure = useAxiosSecure();
      // pause function
      const [isPaused, setIsPaused] = useState(paused || false);
    
      // Toggle Pause
      const togglePause = async () => {
        try {
          const newPausedState = !isPaused;
          setIsPaused(newPausedState);
    
          await axiosSecure.patch(`/donationCampaign/${_id}`, {
            paused: newPausedState,
          });
          refetch()
        } catch {
         
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error updating paused state. Please try again later.',
         
          });
        }
      };
    return (
        <>
             <tr  className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  {name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {shortDescription}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ${amount}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                {paused ? 'Paused' : 'Active'}
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
                      onClick={() => handleDelete(_id)}
                      className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600">
                      <Link to={`/dashboard/updateDonation/${_id}`}>
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