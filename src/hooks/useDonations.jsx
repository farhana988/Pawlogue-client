

import { useState, useEffect } from 'react';

import useAxiosPublic from './useAxiosPublic';

const useDonations = (campaignId) => {
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axiosPublic(`/donations/${campaignId}`);
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
  }, [campaignId, axiosPublic]);

  return totalDonationAmount;
};

export default useDonations;
