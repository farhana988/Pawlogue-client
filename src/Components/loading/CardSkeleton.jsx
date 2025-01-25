import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div className="flex justify-center min-h-screen pt-20">
      {/* Container for 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Skeleton Cards */}
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-lg p-6 relative
              w-96 h-20"
            >
              {/* Skeleton for image */}
              <Skeleton className="w-full h-24 object-cover rounded-lg mb-4" />

              {/* Skeleton for name */}
              <Skeleton height={20} width="60%" className="mb-2" />

              {/* Skeleton for location */}
              <div className="flex gap-2 items-center">
                <Skeleton circle height={20} width={20} />
                <Skeleton height={16} width="50%" />
              </div>

              {/* Skeleton for age badge */}
              <Skeleton
                height={24}
                width={80}
                className="absolute top-0 right-0 rounded-bl-2xl"
              />

              {/* Skeleton for button */}
              <div className="flex justify-end mt-4">
                <Skeleton height={24} width={100} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardSkeleton;
