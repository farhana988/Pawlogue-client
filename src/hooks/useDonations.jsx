

import { useState, useEffect } from 'react';
import useAxiosSecure from './useAxiosSecure';  // Make sure to import your axios instance

const useDonations = (campaignId) => {
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axiosSecure(`/donations/${campaignId}`);
        const data = response.data;

        // Calculate total donation amount
        const totalAmount = data.reduce(
          (sum, donation) => sum + parseFloat(donation.donatedAmount || 0),
          0
        );
        setTotalDonationAmount(totalAmount);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    if (campaignId) {
      fetchDonations();
    }
  }, [campaignId, axiosSecure]);

  return totalDonationAmount;
};

export default useDonations;
