/* eslint-disable react/prop-types */

import { FaSpinner } from "react-icons/fa";
import Heading from "../Reusable/Heading";

const UpdateDonationForm = ({
  campaignData,
  handleSubmit,
  uploadImage,
  setUploadImage,
  loading,
}) => {
  const {
    name = "",
    shortDescription = "",
    longDescription = "",
    date = "",
    amount = "",
    image = "",
  } = campaignData || {};

  return (
    <>
      <Heading title={" Update Donation Campaign"}></Heading>
      <div className="mb-20 rounded-xl bg-lCard dark:bg-dCard ">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-1 ">
                <label
                  htmlFor="name"
                  className="block font-semibold xl:text-xl mb-2"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 bg-lCard dark:bg-dCard "
                  name="name"
                  id="name"
                  type="text"
                  placeholder="name"
                  required
                  defaultValue={name}
                />
              </div>
              {/* Short Description */}
              <div className="space-y-1 ">
                <label
                  htmlFor="shortDescription"
                  className="block font-semibold xl:text-xl mb-2"
                >
                  Short Description
                </label>
                <textarea
                  id="shortDescription"
                  placeholder="Write donation campaign description here..."
                  className="block rounded-md focus:lime-300 w-full h-20 px-4 py-3 bg-lCard dark:bg-dCard"
                  name="shortDescription"
                  defaultValue={shortDescription}
                ></textarea>
              </div>
              {/* Long Description */}
              <div className="space-y-1 ">
                <label
                  htmlFor="longDescription"
                  className="block font-semibold xl:text-xl mb-2"
                >
                  Long Description
                </label>
                <textarea
                  id="longDescription"
                  placeholder="Write donation campaign description here..."
                  className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 bg-lCard dark:bg-dCard"
                  name="longDescription"
                  defaultValue={longDescription}
                ></textarea>
              </div>
            </div>

            <div className="space-y-6 flex flex-col">
              {/* Maximum donation amount */}

              <div className="space-y-1 ">
                <label
                  htmlFor="amount"
                  className="block font-semibold xl:text-xl mb-2"
                >
                  Maximum donation amount
                </label>
                <input
                  className="w-full px-4 py-3 bg-lCard dark:bg-dCard"
                  name="amount"
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  required
                  defaultValue={amount}
                />
              </div>

              {/* Last date of donation */}
              <div className="space-y-1 ">
                <label
                  htmlFor="date"
                  className="block font-semibold xl:text-xl mb-2"
                >
                  Last date of donation
                </label>
                <input
                  className="w-full px-4 py-3 bg-lCard dark:bg-dCard"
                  name="date"
                  id="date"
                  type="date"
                  placeholder="Available date"
                  required
                  defaultValue={date}
                />
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
                      <div
                        className="font-semibold px-3 lg:px-5 py-1 
                text-sm lg:text-base    rounded-tr-3xl rounded-bl-3xl rounded-lg
               bg-lBtn dark:bg-dBtn"
                      >
                        Upload Image
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {uploadImage?.url ? (
                <div className="flex gap-5 items-center">
                  <img className="w-20" src={uploadImage?.url} alt="Uploaded" />
                  <p>Image Size: {uploadImage?.image?.size} Bytes</p>
                </div>
              ) : (
                image && (
                  <div className="flex gap-5 items-center">
                    <img className="w-20" src={image} alt="Current Image" />
                    <p>Current Image</p>
                  </div>
                )
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="font-semibold px-3 lg:px-5 py-1
                  text-sm lg:text-base 
                     rounded-tr-3xl rounded-bl-3xl rounded-lg
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
    </>
  );
};

export default UpdateDonationForm;
