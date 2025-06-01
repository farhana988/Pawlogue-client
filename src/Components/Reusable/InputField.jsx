/* eslint-disable react/prop-types */

import { Field, ErrorMessage } from "formik";

const InputField = ({
  label,
  name,
  type = "text",
  required = true,
  accept,
  as = "input",
  formik = false,
}) => {
  const inputProps = {
    type,
    name,
    accept,
    required,
    placeholder: `Your ${label}`,
    className:
      "input input-bordered w-full py-3 px-4 bg-lCard dark:bg-dCard rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2",
  };

  return (
    <div className="form-control mb-4">
      <label className="label">
        <span className="label-text text-xl dark:text-ivory font-bold">
          {label}
        </span>
      </label>

      {formik ? (
        <>
          <Field as={as} {...inputProps} />
          <ErrorMessage
            name={name}
            component="p"
            className="text-red-500 text-sm mt-1"
          />
        </>
      ) : (
        <input {...inputProps} />
      )}
    </div>
  );
};

export default InputField;
