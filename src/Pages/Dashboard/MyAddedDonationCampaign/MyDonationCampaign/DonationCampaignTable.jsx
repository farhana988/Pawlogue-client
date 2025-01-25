/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import DonatorsModal from "./DonatorsModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useDonations from "../../../../hooks/useDonations";
import Swal from "sweetalert2";

const DonationCampaignTable = ({ myDonationCampaign }) => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // total donation amount from the custom hook
  const totalDonationAmount = useDonations(myDonationCampaign._id);

  const {
    _id,
    name,
    paused,
    amount: goalAmount,
    image,
  } = myDonationCampaign || {};

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
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error updating paused state: Please try again later.",
      });
    }
  };

  // modal for donors
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const progress =
    goalAmount > 0 ? (totalDonationAmount / goalAmount) * 100 : 0;
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200  bg-lCard dark:bg-dCard  text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={image}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200  bg-lCard dark:bg-dCard  text-sm">
          <p className=" whitespace-no-wrap">{name?.substring(0, 20)}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200  bg-lCard dark:bg-dCard  text-sm">
          <p className=" whitespace-no-wrap">{goalAmount}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200  bg-lCard dark:bg-dCard  text-sm">
          <p className=" whitespace-no-wrap">
            ${totalDonationAmount} / ${goalAmount}
          </p>
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${clampedProgress}%` }}
            ></div>
          </div>
        </td>

        {/* action buttons  */}
        <td
          className="space-y-3 lg:space-x-6 px-5 py-5 text-center
        border-b border-gray-200  bg-lCard dark:bg-dCard  text-sm lg:text-base"
        >
          {/* View Donators button */}
          <span
            onClick={openModal}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold  dark:text-ivory
             leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-200  opacity-50 rounded-full"
            ></span>
            <span className="relative">Donators</span>
          </span>

          {/* Pause/Unpause button */}
          <span
            onClick={togglePause}
            className={`relative cursor-pointer inline-block px-3 dark:text-ivory py-1 font-semibold text-${
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

          {/* Edit button */}
          <span
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold  dark:text-ivory
           leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-200  opacity-50 rounded-full"
            ></span>
            <span className="relative">
              <Link to={`/dashboard/updateDonation/${_id}`}> Edit</Link>
            </span>
          </span>
        </td>
      </tr>
      {/* Modal for Donators List */}
      {isModalOpen && <DonatorsModal campaignId={_id} onClose={closeModal} />}
    </>
  );
};

export default DonationCampaignTable;
