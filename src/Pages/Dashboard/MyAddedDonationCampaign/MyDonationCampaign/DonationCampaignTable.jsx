/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import DonatorsModal from "./DonatorsModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useDonations from "../../../../hooks/useDonations";
import Swal from "sweetalert2";
import { Edit, Pause } from "lucide-react";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoMdArrowDroprightCircle } from "react-icons/io";

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
        <td
          className="px-5 py-5 border-b border-gray-200  bg-lCard dark:bg-dCard 
         text-xs xl:text-sm"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={image}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </td>
        <td
          className="px-5 py-5 border-b border-gray-200  bg-lCard dark:bg-dCard 
         text-xs xl:text-sm"
        >
          <p className=" whitespace-no-wrap">{name?.substring(0, 20)}</p>
        </td>
        <td
          className="px-5 py-5 border-b border-gray-200  bg-lCard dark:bg-dCard 
         text-xs xl:text-sm"
        >
          <p className=" whitespace-no-wrap">{goalAmount}</p>
        </td>
        <td
          className="px-5 py-5 border-b border-gray-200  bg-lCard dark:bg-dCard 
         text-xs xl:text-sm"
        >
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
          className=" px-5 py-7 text-center flex items-center justify-center gap-3
         bg-lCard dark:bg-dCard text-xs xl:text-sm lg:text-base "
        >
          {/* View Donators button */}
          <span
            onClick={openModal}
            title="donors"
            className="relative cursor-pointer inline-block px-2 py-2 rounded-full font-semibold  dark:text-ivory
             leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-300  opacity-50 rounded-full"
            ></span>
            <span className="relative">
              <BiSolidDonateHeart size={18} />
            </span>
          </span>

          {/* Pause/Unpause button */}
          <span
            onClick={togglePause}
            className={`relative cursor-pointer inline-block font-semibold px-2 py-2 rounded-full text-zinc-800
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

          {/* Edit button */}
          <span
            className="relative cursor-pointer inline-block px-2 py-2 bg-blue-600
             text-white rounded-full  font-semibold
                   hover:bg-blue-700
           leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0  opacity-50 rounded-full"
            ></span>
            <span className="relative">
              <Link to={`/dashboard/updateDonation/${_id}`}>
                <Edit size={16} />
              </Link>
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
