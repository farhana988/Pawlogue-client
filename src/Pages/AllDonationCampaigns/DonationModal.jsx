/* eslint-disable react/prop-types */

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const DonationModal = ({
  donationDetails,
  onClose,
}) => {
  const [donationAmount, setDonationAmount] = useState(false);
  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-400 text-3xl hover:text-gray-600 absolute top-4 right-4"
          >
            &times;
          </button>

          {/* Modal Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">Donate Now</h3>

          {/* Donation Form */}

          {/* Donation Amount Input */}
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => {
              setDonationAmount(e.target.value);
              console.log(e.target.value);
            }}
            placeholder="Donation Amount"
            name="Donation Amount"
            className="border border-gray-300 rounded px-4 py-2 w-full"
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