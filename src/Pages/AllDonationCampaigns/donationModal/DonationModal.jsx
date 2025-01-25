/* eslint-disable react/prop-types */

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useState } from "react";
import Swal from "sweetalert2";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const DonationModal = ({ donationDetails, onClose }) => {
  const [donationAmount, setDonationAmount] = useState("");
  const maxDonationAmount = donationDetails?.amount;

  const handleDonationAmountChange = (e) => {
    const value = e.target.value;
    if (value <= maxDonationAmount) {
      setDonationAmount(value);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Maximum Limit Exceeded",
        text: `You cannot donate more than $${maxDonationAmount}.`,
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div>
      <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-ivory dark:bg-[#212121] rounded-lg shadow-lg w-full max-w-md p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className=" text-3xl hover:text-gray-600 absolute top-4 right-4"
          >
            &times;
          </button>

          {/* Modal Title */}
          <h3 className="text-xl font-bold text-center mb-4">Donate Now</h3>

          {/* Donation Form */}

          {/* Donation Amount Input */}
          <input
            type="number"
            value={donationAmount}
            onChange={handleDonationAmountChange}
            placeholder={`Enter amount (Max: $${maxDonationAmount})`}
            name="Donation Amount"
            className="border border-gray-300 rounded px-4 py-2 my-5 w-full bg-lCard dark:bg-dCard"
            required
          />

          {/* main stripe function */}

          <Elements stripe={stripePromise}>
            <CheckoutForm
              donationAmount={donationAmount}
              donationDetails={donationDetails}
              onClose={onClose}
            ></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
