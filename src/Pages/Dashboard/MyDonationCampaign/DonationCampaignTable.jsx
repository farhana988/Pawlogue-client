/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const DonationCampaignTable = ({  myDonationCampaign }) => {
  const { 
    _id,
    name, 
    shortDescription, 
    longDescription, 
    date, 
    amount: goalAmount, 
    raisedAmount,
    image 
  } = myDonationCampaign || {};


  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);

  };


  const progress = goalAmount > 0 ? (raisedAmount / goalAmount) * 100 : 0;
  const clampedProgress = Math.min(Math.max(progress, 0), 100); 

  return (
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
        <p className='text-gray-900 whitespace-no-wrap'>${raisedAmount} / ${goalAmount}</p>
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
        //   onClick={() => {}}
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
          ></span>
          <span className='relative'>
            <Link to={`/dashboard/updateDonation/${_id}`}>  Edit
            </Link>
          </span>
        </span>
      </td>
    </tr>
  );
};

export default DonationCampaignTable;
