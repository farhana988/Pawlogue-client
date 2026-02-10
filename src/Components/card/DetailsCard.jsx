/* eslint-disable react/prop-types */

import { FaLocationDot } from "react-icons/fa6";

const DetailsCard = ({
  image,
  title,
  subtitle,
  amount,
  date,
  shortDescription,
  longDescription,
  location,
  age,
  formatDate,
  type = "default", // default | pet | donation
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 lg:p-9 md:mx-7 lg:mx-0 bg-lCard dark:bg-dCard items-center mb-5">
      {/* Left Section: Image */}
      <div className="flex justify-between relative">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg w-full h-80 object-cover"
        />
        {type === "pet" && age && (
          <p className="font-semibold px-5 py-1 absolute rounded-br-2xl bg-lBtn dark:bg-dBtn text-black dark:text-ivory top-0 -left-0">
            Age: {age}
          </p>
        )}
      </div>

      {/* Right Section: Details */}
      <div className="space-y-2">
        {/* Title */}
        <h1 className="text-xl lg:text-2xl font-bold">
          {title?.substring(0, 40)}
        </h1>

        {type === "donation" && amount && (
          <p>
            <span className="font-semibold">Maximum Donation:</span> ${amount}
          </p>
        )}

        {date && (
          <p>
            <span className="font-semibold">Date:</span>{" "}
            {type === "pet"
              ? formatDate(date)
              : new Date(date).toLocaleDateString()}
          </p>
        )}

        {location && type === "pet" && (
          <p className="text-sm opacity-80 flex gap-2">
            <FaLocationDot />
            {location?.substring(0, 65)}
          </p>
        )}

        {subtitle && (
          <p className="opacity-80">
            <strong>{type === "donation" ? "Short" : "Category"}:</strong>{" "}
            {subtitle?.substring(0, 65)}
          </p>
        )}

        {shortDescription && (
          <p className="opacity-80">
            <strong>Short Description:</strong>{" "}
            {shortDescription?.substring(0, 90)}
          </p>
        )}

        {longDescription && (
          <p className="opacity-80">
            <strong>Long Description:</strong>{" "}
            {longDescription?.substring(0, 90)}
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
