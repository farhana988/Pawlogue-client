/* eslint-disable react/prop-types */
import InputField from "../Reusable/InputField";

const BookVetForm = ({ onSubmit, errors, register, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
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
      </div>

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
        className="mt-2 p-3 rounded-tr-3xl rounded-bl-3xl rounded-lg font-semibold 
        px-4 lg:px-6 py-1 text-sm lg:text-base bg-lBtn dark:bg-dBtn"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default BookVetForm;
