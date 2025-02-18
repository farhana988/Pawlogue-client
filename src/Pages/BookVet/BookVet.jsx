import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "../../Components/Reusable/Container";
import Heading from "../../Components/Reusable/Heading";

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

    Swal.fire({
      title: "Appointment Booked!",
      text: "Your appointment has been booked successfully.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      reset();
      navigate("/");
    });
  };

  return (
    <Container>

    <Heading
    title={'  Book a Vet Appointment'}
    ></Heading>
    <div className="max-w-lg mx-auto mt-10 p-6 bg-lCard dark:bg-dCard shadow-lg rounded-lg">
  
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Pet Name</label>
          <input
            type="text"
            {...register("petName", { required: "Pet name is required" })}
            className="w-full p-2 border rounded-lg bg-lCard dark:bg-dCard"
          />
          {errors.petName && (
            <p className="text-red-500 text-sm">{errors.petName.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Owner&apos;s Name</label>
          <input
            type="text"
            {...register("ownerName", { required: "Owner's name is required" })}
            className="w-full p-2 border rounded-lg bg-lCard dark:bg-dCard"
          />
          {errors.ownerName && (
            <p className="text-red-500 text-sm">{errors.ownerName.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full p-2 border rounded-lg bg-lCard dark:bg-dCard"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded-lg bg-lCard dark:bg-dCard"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Appointment Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full p-2 border rounded-lg bg-lCard dark:bg-dCard"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Preferred Time</label>
          <input
            type="time"
            {...register("time", { required: "Time is required" })}
            className="w-full p-2 border rounded-lg bg-lCard dark:bg-dCard"
          />
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
        </div>

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
          font-semibold px-3 lg:px-5 py-1 lg:py-2 
                text-sm lg:text-base 
               bg-lBtn dark:bg-dBtn"
        >
          Book Appointment
        </button>
      </form>
    </div>
    </Container>
  );
};

export default BookVet;
