/* eslint-disable react/prop-types */



const DonationCampaignForm = ({ handleSubmit, uploadImage, setUploadImage, loading }) => {
  return (
    <div>
      <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='space-y-6'>
              
         
             {/* Name */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                name='name'
                id='name'
                type='text'
                placeholder='Plant Name'
                required
              />
            </div>
              {/* Short Description */}
              <div className='space-y-1 text-sm'>
                <label htmlFor='shortDescription' className='block text-gray-600'>
                  Short Description
                </label>
                <textarea
                  id='shortDescription'
                  placeholder='Write plant description here...'
                  className='block rounded-md focus:lime-300 w-full h-20 px-4 py-3 text-gray-800 border border-lime-300 bg-white focus:outline-lime-500'
                  name='shortDescription'
                ></textarea>
              </div>
              {/* Long Description */}
              <div className='space-y-1 text-sm'>
                <label htmlFor='longDescription' className='block text-gray-600'>
                  Long Description
                </label>
                <textarea
                  id='longDescription'
                  placeholder='Write plant description here...'
                  className='block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800 border border-lime-300 bg-white focus:outline-lime-500'
                  name='longDescription'
                ></textarea>
              </div>
            </div>

            <div className='space-y-6 flex flex-col'>
              {/* Maximum donation amount */}
              <div className='flex justify-between gap-2'>
                {/* Maximum donation amount */}
                <div className='space-y-1 text-sm'>
                  <label htmlFor='amount' className='block text-gray-600'>
                    Maximum donation amount
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                    name='amount'
                    id='amount'
                    type='number'
                    placeholder='enter amount'
                    required
                  />
                </div>

                {/* Last date of donation */}
                <div className='space-y-1 text-sm'>
                  <label htmlFor='date' className='block text-gray-600'>
                    Last date of donation
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                    name='date'
                    id='date'
                    type='date'
                    placeholder='Available date'
                    required
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className='p-4 w-full m-auto rounded-lg flex-grow'>
                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                  <div className='flex flex-col w-max mx-auto text-center'>
                    <label>
                      <input
                        onChange={(e) =>
                          setUploadImage({
                            image: e.target.files[0],
                            url: URL.createObjectURL(e.target.files[0]),
                          })
                        }
                        className='text-sm cursor-pointer w-36 hidden'
                        type='file'
                        name='image'
                        id='image'
                        accept='image/*'
                      />
                      <div className='bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500'>
                        Upload Image
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              {uploadImage && uploadImage?.image?.size && (
                <div className='flex gap-5 items-center'>
                  <img className='w-20' src={uploadImage?.url} alt='Uploaded' />
                  <p>Image Size: {uploadImage?.image?.size} Bytes</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full p-3 mt-5 text-center font-medium text-white 
                transition duration-200 rounded shadow-md bg-blue-500'
              >
                {loading ? (
                  <h2 className='animate-spin m-auto' />
                ) : (
                  'Save & Continue'
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
