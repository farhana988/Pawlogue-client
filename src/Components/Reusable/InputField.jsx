/* eslint-disable react/prop-types */

const InputField = ({
  label,
  name,
  type = "text",
  required = true,
  accept,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-xl dark:text-ivory font-bold ">
          {label}
        </span>
      </label>
      <input
        type={type}
        name={name}
        accept={accept}
        required={required}
        placeholder={`Your ${label}`}
        className="input input-bordered w-full py-3 px-4 bg-lCard dark:bg-dCard 
        rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"
      />
    </div>
  );
};

export default InputField;
