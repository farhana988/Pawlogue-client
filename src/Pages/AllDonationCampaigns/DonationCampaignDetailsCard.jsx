/* eslint-disable react/prop-types */


const DonationCampaignDetailsCard = ({donationDetails}) => {
    const {email, image, amount, longDescription, name,  shortDescription, date } =
    donationDetails || {};
    return (
        <div>
            <div   className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 lg:p-9  md:mx-7 lg:mx-0
           bg-lCard dark:bg-dCard items-center mb-5">
          {/* Left Section: Image */}
          <div>
            <img
              src={image}
              alt={name}
            className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>

          {/* Right Section: Details */}
          <div className="space-y-2">
            {/* Pet Name */}
            <h1 className="text-xl lg:text-2xl font-bold">
            {name?.substring(0, 40)}
          </h1>


            {/* Donation Details */}
            <p className="">
              <span className="font-semibold">Maximum Donation:</span> $
              {amount}
            </p>
            <p className="">
              <span className="font-semibold">Date:</span>{" "}
              {new Date(date).toLocaleDateString()}
            </p>

            {/* User Information */}
            <p className="opacity-80">
              <span className="font-semibold">Created By:</span>{" "}
              {email}
            </p>

            {/* Short Description */}
            <p className="opacity-80">
                <strong>Short: </strong>
                {shortDescription?.substring(0, 65)}</p>

            {/* Long Description */}
            <p className="opacity-80">
            <strong>Long: </strong>
                {longDescription?.substring(0, 90)}</p>
          </div>
        </div>
        </div>
    );
};

export default DonationCampaignDetailsCard;