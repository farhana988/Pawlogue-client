/* eslint-disable react/prop-types */

const DonationModal = ({
  isOpen,
  onClose,
  campaignId,
  onDonationSuccess,
  axiosSecure,
  user,
}) => {
  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 absolute top-4 right-4"
          >
            &times;
          </button>

          {/* Modal Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-4">Donate Now</h3>

          {/* Donation Form */}
          <form
            // onSubmit={handleDonate}
            className="space-y-4"
          >
            {/* Donation Amount Input */}
            <input
              type="number"
              // value={donationAmount}
              // onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Donation Amount"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
              // disabled={!stripe}
            >
              Submit Donation
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 w-full"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
