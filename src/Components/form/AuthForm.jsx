/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import InputField from "../Reusable/InputField";
import GoogleLogin from "../../Pages/Social/SocialLogin/GoogleLogin";
import GithubLOgin from "../../Pages/Social/SocialLogin/GithubLOgin";

const AuthForm = ({
  onSubmit,
  isRegister = false,
  error = "",
  altLinkText,
  altLinkPath,
  altLinkCTA,
}) => {
  return (
    <div className="card bg-lCard dark:bg-dCard w-full max-w-lg p-8 shadow-xl rounded-lg">
      <form onSubmit={onSubmit} className="space-y-6">
        {isRegister && <InputField name="name" label="Name" />}
        <InputField name="email" label="Email" type="email" />
        {isRegister ? (
          <InputField
            name="image"
            label="Select Image"
            type="file"
            accept="image/*"
          />
        ) : null}
        <InputField name="password" label="Password" type="password" />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-md font-semibold px-5 py-2 bg-lBtn dark:bg-dBtn text-sm lg:text-base"
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <div className="text-center mt-4 text-lg">
        {altLinkText}{" "}
        <Link
          to={altLinkPath}
          className="text-lBtn dark:text-ivory font-extrabold flex 
        items-center justify-center gap-2"
        >
          <FaLongArrowAltRight /> {altLinkCTA}
        </Link>
      </div>

      <h2 className="text-center font-bold text-xl italic">OR</h2>
      <div className="text-center border-b-2 border-dashed dark:opacity-50
       dark:text-ivory my-4" />
      <GoogleLogin />
      <GithubLOgin />
    </div>
  );
};

export default AuthForm;
