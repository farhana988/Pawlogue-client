/* eslint-disable react/prop-types */
import  {useState } from 'react';
import { Link } from 'react-router-dom';
import DonatorsModal from './DonatorsModal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useDonations from '../../../hooks/useDonations';

const DonationCampaignTable = ({  myDonationCampaign }) => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);

   // total donation amount from the custom hook
   const totalDonationAmount = useDonations(myDonationCampaign._id);

  const { 
    _id,
    name, 
    shortDescription, 
    longDescription, 
    date, 
    paused,
    amount: goalAmount, 
    image 
  } = myDonationCampaign || {};


 // pause function
 const [isPaused, setIsPaused] = useState(paused ||false);


  // Toggle Pause
  const togglePause = async () => {
    try {
      const newPausedState = !isPaused;
      setIsPaused(newPausedState);

      await axiosSecure.patch(`/donationCampaign/${_id}`, { paused: newPausedState });
    } catch (error) {
      console.error("Error updating paused state:", error);
    }
  };

// modal for donors
  const openModal = () => {
    setIsModalOpen(true); 
};

const closeModal = () => {
    setIsModalOpen(false); 
};


  const progress = goalAmount > 0 ? (totalDonationAmount / goalAmount) * 100 : 0;
  const clampedProgress = Math.min(Math.max(progress, 0), 100); 

  return (
<>
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{shortDescription}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${totalDonationAmount} / ${goalAmount}</p>
        <div className='w-full bg-gray-200 rounded-full'>
          <div
            className='bg-blue-500 h-2 rounded-full'
            style={{ width: `${clampedProgress}%` }} 
          ></div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{longDescription}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{date}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {/* View Donators button */}
        <span
          onClick={openModal}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Donators</span>
        </span>

        {/* Pause/Unpause button */}
        <span
            onClick={togglePause}
            className={`relative cursor-pointer inline-block px-3 py-1 font-semibold text-${isPaused ? 'gray' : 'green'}-900 leading-tight`}
          >
            <span
              aria-hidden='true'
              className={`absolute inset-0 bg-${isPaused ? 'gray' : 'green'}-200 opacity-50 rounded-full`}
            ></span>
            <span className='relative'>{isPaused ? 'Unpause' : 'Pause'}</span>
          </span>


        {/* Edit button */}
        <span
       
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          >
           
          </span>
          <span className='relative'>
            <Link to={`/dashboard/updateDonation/${_id}`}>  Edit
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
