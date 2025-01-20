/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Heading from "../../../Components/Reusable/Heading";
import { FaSpinner } from "react-icons/fa";

const DonationCampaignForm = ({
  handleSubmit,
  uploadImage,
  setUploadImage,
  loading,
}) => {

  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1); 
    const formattedDate = today.toISOString().split('T')[0]; 
    setMinDate(formattedDate); 
  }, []);


  return (
    <div>
         <Heading title={"Create Donation Campaign"}></Heading>
      <div className="  flex flex-col justify-center mx-5 p-7 mb-20
      items-center rounded-xl  bg-lCard dark:bg-dCard ">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block ">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3   rounded-md  bg-lCard dark:bg-dCard "
                  name="name"
                  id="name"
                  type="text"
                  placeholder=" Name"
                  required
                />
              </div>
              {/* Short Description */}
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="shortDescription"
                  className="block "
                >
                  Short Description
                </label>
                <textarea
                  id="shortDescription"
                  placeholder="Write donation campaign description here..."
                  className="block rounded-md focus:lime-300 w-full h-20 px-4 py-3   bg-lCard dark:bg-dCard "
                  name="shortDescription"
                ></textarea>
              </div>
              {/* Long Description */}
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="longDescription"
                  className="block "
                >
                  Long Description
                </label>
                <textarea
                  id="longDescription"
                  placeholder="Write donation campaign description here..."
                  className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3  bg-lCard dark:bg-dCard  "
                  name="longDescription"
                ></textarea>
              </div>
            </div>

            <div className="space-y-6 flex flex-col">
              {/* Maximum donation amount */}
              <div className="flex justify-between gap-2">
                {/* Maximum donation amount */}
                <div className="space-y-1 text-sm">
                  <label htmlFor="amount" className="block ">
                    Maximum donation amount
                  </label>
                  <input
                    className="w-full px-4 py-3   rounded-md  bg-lCard dark:bg-dCard "
                    name="amount"
                    id="amount"
                    type="number"
                    placeholder="enter amount"
                    required
                  />
                </div>

                {/* Last date of donation */}
                <div className="space-y-1 text-sm">
                  <label htmlFor="date" className="block ">
                    Last date of donation
                  </label>
                  <input
                    className="w-full px-4 py-3   rounded-md  bg-lCard dark:bg-dCard "
                    name="date"
                    id="date"
                    type="date"
                    placeholder="Available date"
                    required
                    min={minDate} 
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="p-4 w-full m-auto rounded-lg flex-grow">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        onChange={(e) =>
                          setUploadImage({
                            image: e.target.files[0],
                            url: URL.createObjectURL(e.target.files[0]),
                          })
                        }
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                      />
                      <div className="font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-full
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn">
                        Upload Image
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              {uploadImage && uploadImage?.image?.size && (
                <div className="flex gap-5 items-center">
                  <img className="w-20" src={uploadImage?.url} alt="Uploaded" />
                  <p>Image Size: {uploadImage?.image?.size} Bytes</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-full
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn"
              >
                {loading ? (
                    <FaSpinner className="animate-spin m-auto" />
                ) : (
                  "Save & Continue"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationCampaignForm;
