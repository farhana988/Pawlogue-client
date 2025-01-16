/* eslint-disable react/prop-types */


const DeleteModal = ({ isOpen, onClose, onDelete, petId }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <h2 className="text-lg font-semibold">Are you sure you want to delete this pet?</h2>
        <div className="flex justify-between mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => onDelete(petId)}
          >
            Yes, delete it!
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
