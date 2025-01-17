/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AdoptModal = ({
    petDetails,
    isOpen,
    onClose,
    onSubmit,
  }) => {
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

      const {user} = useContext(AuthContext)
  
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center
         z-50 px-6 md:px-0">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Adopt 
          </h2>
          <form
          className="relative"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit({ phone, address });
            }}
          >
            <img 
            className="w-20 h-20 rounded-full absolute right-0 -top-14"
            src={petDetails.image} alt="" />
             <h2 className="text-xl font-bold mb-4">
           {petDetails.name}
          </h2>
            <p className="text-xl font-bold mb-4">
            PetId: {petDetails._id}
            </p>
        
            
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="mb-2 border border-gray-300 p-2 w-full rounded bg-gray-100"
            />
            <input
              type="email"
              value={user?.email}
              readOnly
              className="mb-2 border border-gray-300 p-2 w-full rounded bg-gray-100"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-2 border border-gray-300 p-2 w-full rounded"
              required
            />
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mb-2 border border-gray-300 p-2 w-full rounded"
              required
            />
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AdoptModal;