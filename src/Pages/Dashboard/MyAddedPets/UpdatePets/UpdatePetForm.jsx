/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form } from "formik";
import { FaSpinner } from "react-icons/fa";
import ReactQuill from "react-quill";
import Select from "react-select";

const UpdatePetForm = ({
  petCategories,
  isSubmitting,
  uploading,
  setFieldValue,
  fileInputRef,
  values,
}) => {
  return (
    <Form className="space-y-4 mx-5 md:mx-0 p-6 mb-20 bg-lCard dark:bg-dCard ">
      {/* Pet Image */}
      <div>
        <label className="block mb-1">Pet Image</label>
        {values.image && typeof values.image === "string" ? (
          <img
            src={values.image}
            alt="Pet"
            className="w-40 h-20 object-cover mb-2"
          />
        ) : null}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(event) =>
            setFieldValue("image", event.currentTarget.files[0])
          }
          className="w-full p-2 border rounded bg-lCard dark:bg-dCard "
        />
        <ErrorMessage
          name="image"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Pet Name */}
      <div>
        <label className="block mb-1">Pet Name</label>
        <Field
          type="text"
          name="name"
          className="w-full p-2 border rounded bg-lCard dark:bg-dCard "
          placeholder="Enter pet name"
        />
        <ErrorMessage
          name="name"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Pet Age */}
      <div>
        <label className="block mb-1">Pet Age</label>
        <Field
          type="number"
          name="age"
          className="w-full p-2 border rounded bg-lCard dark:bg-dCard "
          placeholder="Enter pet age"
        />
        <ErrorMessage
          name="age"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Pet Category */}
      <div>
        <label className="block mb-1">Pet Category</label>
        <Select
          value={petCategories.find((option) => option.value === values.category) || null}
          options={petCategories}
          onChange={(option) => setFieldValue("category", option.value)}
          placeholder="Select category"
          className="text-black"
        />
        <ErrorMessage
          name="category"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Pet Location */}
      <div>
        <label className="block mb-1">Pet Location</label>
        <Field
          type="text"
          name="location"
          className="w-full p-2 border rounded bg-lCard dark:bg-dCard "
          placeholder="Enter pet location"
        />
        <ErrorMessage
          name="location"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Short Description */}
      <div>
        <label className="block mb-1">Short Description</label>
        <Field
          type="text"
          name="shortDescription"
          className="w-full p-2 border rounded bg-lCard dark:bg-dCard "
          placeholder="Enter a short description"
        />
        <ErrorMessage
          name="shortDescription"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

        {/* Long Description - WYSIWYG Editor */}
        <div>
        <label className="block mb-1">Long Description</label>
        <ReactQuill
          value={values.longDescription}
          onChange={(content) => setFieldValue("longDescription", content)}
          className="w-full p-2 border rounded bg-lCard dark:bg-dCard "
          placeholder="Enter detailed information"
        />
        <ErrorMessage
          name="longDescription"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className=" p-3  rounded-tr-3xl rounded-bl-3xl rounded-lg
          font-semibold px-3 lg:px-5 py-1 lg:py-2 
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn"
          disabled={isSubmitting || uploading}
        >
          {isSubmitting || uploading ? 
          <FaSpinner className="animate-spin" /> 
          : "Update Pet"}
        </button>
      </div>
    </Form>
  );
};

export default UpdatePetForm;
