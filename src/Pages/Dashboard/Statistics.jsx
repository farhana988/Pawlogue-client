import { FaHandHoldingHeart } from "react-icons/fa";

const Statistics = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className=" text-center px-8 max-w-xl w-full">
        {/* Welcome Message */}
        <div className="mb-6">
          <FaHandHoldingHeart className="text-6xl text-pink-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-ivory mb-2">
            Welcome to Dashboard!
          </h1>
          <p className="text-sm opacity-50">
            We are delighted to have you here. Lets make a positive impact
            together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
