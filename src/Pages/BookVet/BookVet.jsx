import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Heading from "../../Components/Reusable/Heading";
import { swalAlert } from "../../utils/swalAlert";
import usePageTitle from "../../hooks/usePageTitle";
import BookVetForm from "../../Components/form/BookVetForm";

const BookVet = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Appointment Data:", data);

    swalAlert({
      type: "success",
      title: "Appointment Booked!",
    });
    reset();
    navigate("/");
  };
usePageTitle("Book A Vet")
  return (
    <>
      <Heading title={"  Book a Vet Appointment"}></Heading>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-lCard dark:bg-dCard shadow-lg rounded-lg">
      <BookVetForm
      onSubmit={onSubmit}
      errors={errors}
      register={register}
       handleSubmit={ handleSubmit}
      />
      </div>
    </>
  );
};

export default BookVet;
