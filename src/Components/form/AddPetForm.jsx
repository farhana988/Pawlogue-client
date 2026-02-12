/* eslint-disable react/prop-types */

import { ErrorMessage, Field, Form } from "formik";
import ReactQuill from "react-quill";
import Select from "react-select";
import "react-quill/dist/quill.snow.css";
import { FaSpinner } from "react-icons/fa";

const AddPetForm = ({
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
        <label className="block mb-2 font-semibold">Pet Image</label>
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
      <section className="flex gap-3 w-full justify-between">
        {/* Pet Name */}
        <div>
          <label className="block mb-2 font-semibold">Pet Name</label>
          <Field
            type="text"
            name="name"
            className="w-full lg:w-72 p-2 border rounded bg-lCard dark:bg-dCard "
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
          <label className="block mb-2 font-semibold">Pet Age</label>
          <Field
            type="number"
            name="age"
            className="w-full lg:w-72 p-2 border rounded bg-lCard dark:bg-dCard "
            placeholder="Enter pet age"
          />
          <ErrorMessage
            name="age"
            component="p"
            className="text-red-500 text-sm"
          />
        </div>
      </section>
      {/* Pet Category */}
      <div>
        <label className="block mb-2 font-semibold ">Pet Category</label>
        <Select
          value={
            petCategories.find((option) => option.value === values.category) ||
            null
          }
          options={petCategories}
          onChange={(option) => setFieldValue("category", option.value)}
          placeholder="Select category"
          className=" text-black  "
        />
        <ErrorMessage
          name="category"
          component="p"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Pet Location */}
      <div>
        <label className="block mb-2 font-semibold">Pet Location</label>
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
        <label className="block mb-2 font-semibold">Short Description</label>
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
        <label className="block mb-2 font-semibold">Long Description</label>
        <ReactQuill
          value={values.longDescription}
          onChange={(content) => setFieldValue("longDescription", content)}
          className="w-full p-2 border rounded  "
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
          className="rounded-tr-3xl rounded-bl-3xl rounded-lg font-semibold px-4 py-1 
          text-xs xl:text-sm bg-lBtn dark:bg-dBtn"
          disabled={isSubmitting || uploading}
        >
          {isSubmitting || uploading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Add Pet"
          )}
        </button>
      </div>
    </Form>
  );
};

export default AddPetForm;
