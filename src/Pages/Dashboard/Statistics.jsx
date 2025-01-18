import { FaHandHoldingHeart } from "react-icons/fa";

const Statistics = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className=" text-center px-8 max-w-lg w-full">
          {/* Welcome Message */}
          <div className="mb-6">
            <FaHandHoldingHeart className="text-6xl text-pink-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome to Dashboard!
            </h1>
            <p className="text-xl text-gray-600">
              We are delighted to have you here. Lets make a positive impact
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
