/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

import { Edit, Pause, Trash } from "lucide-react";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const AllDonationsTable = ({ donation, handleDelete, refetch }) => {
  const { paused, _id, amount, name } = donation || {};
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
      refetch();
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error updating paused state. Please try again later.",
      });
    }
  };
  return (
    <>
      <tr
        className=" max-w-[420px] md:max-w-[610px] lg:max-w-7xl mx-auto px-5 overflow-x-auto
        bg-lCard dark:bg-dCard  border border-gray-200 "
      >
        <td className="px-4 py-2 border border-gray-300">
          {name?.substring(0, 20)}
        </td>

        <td className="px-4 py-2 border border-gray-300">${amount}</td>
        <td className="px-4 py-2 border border-gray-300">
          {paused ? "Paused" : "Active"}
        </td>
        <td className="px-4 py-2 border border-gray-300">
          <div className="flex space-x-2 justify-center">
            {/* Pause/Unpause button */}
            <span
              onClick={togglePause}
              className={`relative cursor-pointer inline-block px-2 py-2 rounded-full text-zinc-800
                ${isPaused ? "gray" : "green"} leading-tight`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 ${
                  isPaused ? "bg-gray-300" : "bg-green-500"
                } opacity-50 rounded-full`}
              ></span>
              <span className="relative">
                {isPaused ? (
                  <>
                    <IoMdArrowDroprightCircle />
                  </>
                ) : (
                  <Pause size={16}></Pause>
                )}
              </span>
            </span>
            {/* delete */}
            <button
              onClick={() => handleDelete(_id)}
              className="px-2 py-2 rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <Trash size={16} />
            </button>
            {/* edit */}
            <button
              className="px-2 py-2 rounded-full bg-blue-500
             text-white hover:bg-blue-600"
            >
              <Link to={`/dashboard/updateDonation/${_id}`}>
                <Edit size={16} />
              </Link>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllDonationsTable;
