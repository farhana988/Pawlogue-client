import { useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import UpdatePetForm from "./UpdatePetForm";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { handleImageUpload } from "../../../../api/utils";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";
import SkeletonLoader from "../../../../Components/loading/SkeletonLoader";
import Heading from "../../../../Components/Reusable/Heading";

const UpdatePet = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [petData, setPetData] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const queryClient = useQueryClient();

  const petCategories = [
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
    { value: "rabbit", label: "Rabbit" },
    { value: "fish", label: "Fish" },
    { value: "reptile", label: "Reptile" },
    { value: "bird", label: "Bird" },
    { value: "livestock", label: "Livestock" },
  ];

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await axiosSecure.get(`/pet/${id}`);
        setPetData(response.data);
      } catch {
        setErrorMsg("Failed to fetch pet data.");
      }
    };

    fetchPetData();
  }, [axiosSecure, id]);

  if (!petData) {
    return <SkeletonLoader></SkeletonLoader>;
  }

  const initialValues = {
    image: petData.image,
    name: petData.name,
    age: petData.age,
    category: petData.category,
    location: petData.location,
    shortDescription: petData.shortDescription,
    longDescription: petData.longDescription,
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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setErrorMsg(null);
      setSuccessMsg(null);

      const imageUrl = values.image
        ? await handleImageUpload(values.image)
        : petData.image;

      const updatedPetData = {
        image: imageUrl,
        name: values.name,
        age: values.age,
        category: values.category,
        location: values.location,
        shortDescription: values.shortDescription,
        longDescription: values.longDescription,
        adopted: petData.adopted,
        owner: petData.owner,
      };

      await axiosSecure.put(`/updatePet/${id}`, updatedPetData);

      setSuccessMsg("Pet updated successfully!");
      // Invalidate the query to force a refetch of the pets list in MyPets
      queryClient.invalidateQueries(["pets", user?.email]);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="lg:max-w-7xl mx-auto rounded">
        <Heading title={"Update a Pet"}></Heading>

        {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
        {successMsg && (
          <p className="text-green-500 text-xl mx-5 md:mx-0 mb-4">
            {successMsg}
          </p>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting, values }) => (
            <UpdatePetForm
              setUploading={setUploading}
              setFieldValue={setFieldValue}
              isSubmitting={isSubmitting}
              uploading={uploading}
              petCategories={petCategories}
              values={values}
            />
          )}
        </Formik>
      </div>
    </>
  );
};

export default UpdatePet;
