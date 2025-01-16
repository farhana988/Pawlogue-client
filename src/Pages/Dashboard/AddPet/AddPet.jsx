import { useContext, useRef, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { handleImageUpload } from "../../../api/utils";
import { AuthContext } from "../../../Provider/AuthProvider";
import AddPetForm from "./AddPetForm";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddPet = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const fileInputRef = useRef(null);

  const petCategories = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "reptile", label: "Reptile" },
    { value: "other", label: "Other" },
  ];

  const initialValues = {
    image: null,
    name: "",
    age: "",
    category: "",
    location: "",
    shortDescription: "",
    longDescription: "",
  };

  const validationSchema = Yup.object({
    image: Yup.mixed().required("Pet image is required"),
    name: Yup.string().required("Pet name is required"),
    age: Yup.number().required("Pet age is required").positive().integer(),
    category: Yup.string().required("Pet category is required"),
    location: Yup.string().required("Pet location is required"),
    shortDescription: Yup.string()
      .required("Short description is required")
      .max(100, "Short description cannot exceed 100 characters"),
    longDescription: Yup.string().required("Long description is required"),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      setErrorMsg(null);
      setSuccessMsg(null);

      const imageUrl = await handleImageUpload(values.image);

      const owner = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
      };

      const petData = {
        image: imageUrl,
        name: values.name,
        age: values.age,
        category: values.category,
        location: values.location,
        shortDescription: values.shortDescription,
        longDescription: values.longDescription,
        adopted: false,
        owner,
      };

      await axiosSecure.post(`${import.meta.env.VITE_API_URL}/pets`, petData);

      setSuccessMsg("Pet added successfully!");
      resetForm();
      setFieldValue("category", "");
      fileInputRef.current.value = "";
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Add a Pet</h2>

      {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
      {successMsg && <p className="text-green-500 mb-4">{successMsg}</p>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting, values }) => (
          <AddPetForm
            setUploading={setUploading}
            setFieldValue={setFieldValue}
            isSubmitting={isSubmitting}
            uploading={uploading}
            petCategories={petCategories}
            fileInputRef={fileInputRef}
            values={values}
          ></AddPetForm>
        )}
      </Formik>
    </div>
  );
};

export default AddPet;
