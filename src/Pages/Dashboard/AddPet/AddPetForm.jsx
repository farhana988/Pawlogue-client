/* eslint-disable react/prop-types */

import { ErrorMessage, Field, Form } from "formik";
import Select from "react-select";

const AddPetForm = ({
  petCategories,
  isSubmitting,
  uploading,
  setFieldValue,
  fileInputRef,
  values,
}) => {
  return (
    <Form className="space-y-4">
      {/* Pet Image */}
      <div>
        <label className="block mb-1">Pet Image</label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(event) =>
            setFieldValue("image", event.currentTarget.files[0])
          }
          className="w-full p-2 border rounded"
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
          className="w-full p-2 border rounded"
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
          className="w-full p-2 border rounded"
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
          value={
            petCategories.find((option) => option.value === values.category) ||
            null
          }
          options={petCategories}
          onChange={(option) => setFieldValue("category", option.value)}
          placeholder="Select category"
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
          className="w-full p-2 border rounded"
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
          className="w-full p-2 border rounded"
          placeholder="Enter a short description"
        />
        <ErrorMessage
          name="shortDescription"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Long Description */}
      <div>
        <label className="block mb-1">Long Description</label>
        <Field
          as="textarea"
          name="longDescription"
          className="w-full p-2 border rounded"
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
          className="w-full p-3 bg-blue-500 text-white rounded"
          disabled={isSubmitting || uploading}
        >
          {isSubmitting || uploading ? "Submitting..." : "Add Pet"}
        </button>
      </div>
    </Form>
  );
};

export default AddPetForm;
