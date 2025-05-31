import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Heading from "../../Components/Reusable/Heading";
import InputField from "../../Components/Reusable/InputField";
import { swalAlert } from "../../utils/swalAlert";
import usePageTitle from "../../hooks/usePageTitle";

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Pet Name */}
          <InputField label="Pet Name" name="petName" />
          {errors.petName && (
            <p className="text-red-500 text-sm">Pet name is required</p>
          )}

          {/* Owner Name */}
          <InputField label="Owner's Name" name="ownerName" />
          {errors.ownerName && (
            <p className="text-red-500 text-sm">Owners name is required</p>
          )}

          {/* Phone */}
          <InputField label="Phone" name="phone" type="tel" />
          {errors.phone && (
            <p className="text-red-500 text-sm">Phone number is required</p>
          )}

          {/* Email */}
          <InputField label="Email" name="email" type="email" />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}

          {/* Date */}
          <InputField label="Appointment Date" name="date" type="date" />
          {errors.date && (
            <p className="text-red-500 text-sm">Date is required</p>
          )}

          {/* Time */}
          <InputField label="Preferred Time" name="time" type="time" />
          {errors.time && (
            <p className="text-red-500 text-sm">Time is required</p>
          )}

          {/* Optional message */}
          <div>
            <label className="block font-medium">Message (Optional)</label>
            <textarea
              {...register("message")}
              className="w-full p-2 border rounded-lg bg-lCard dark:bg-dCard"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className=" p-3   rounded-tr-3xl rounded-bl-3xl rounded-lg
          font-semibold px-4 lg:px-6 py-1 
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </>
  );
};

export default BookVet;
