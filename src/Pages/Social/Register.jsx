import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import reg from "../../assets/lottie/reg.json";
import { handleImageUpload, saveUser } from "../../api/utils";
import AuthForm from "../../Components/form/AuthForm";
import usePageTitle from "../../hooks/usePageTitle";
import { swalAlert } from "../../utils/swalAlert";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const pass = form.password.value;
    const image = form.image.files[0];

    //1. send image data to imgbb
    const photoURL = await handleImageUpload(image);

    //    validation
    if (pass.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    if (!/[a-z]/.test(pass)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(pass)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    try {
      // User Registration
      const result = await createUser(email, pass);

      await updateUserProfile(name, photoURL);
      // setUser({ ...result.user, photoURL: photo, displayName: name });
      // save user info in db if the user is new
      await saveUser({ ...result?.user, displayName: name, photoURL });

      swalAlert({ type: "success", title: "Registration Successful" });
      navigate("/");
    } catch {
      swalAlert({
        type: "error",
        title: "Registration Failed",
      });
    }
  };

  // dynamic title
  usePageTitle(" Register");

  return (
    <div className="pt-10 px-5">
      <h2
        className="text-3xl md:text-5xl lg:text-7xl font-bold mb-14
       text-lBtn dark:text-dBtn text-center"
      >
        Registration Form
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0">
        <div className="w-96 lg:w-1/3">
          <Lottie animationData={reg} loop={true} />
        </div>
        <div className="flex-col w-full lg:w-1/3">
          <AuthForm
            isRegister={true}
            onSubmit={handleSignUp}
            error={error}
            altLinkText="Already have an account?"
            altLinkPath="/login"
            altLinkCTA="Log in"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
