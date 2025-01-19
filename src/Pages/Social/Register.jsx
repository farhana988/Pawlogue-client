import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import axios from "axios";
import Swal from "sweetalert2";
import Lottie from "lottie-react";

import reg from "../../assets/lottie/reg.json";
import GoogleLogin from "./SocialLogin/GoogleLogin";
import { handleImageUpload, saveUser } from "../../api/utils";
import GithubLOgin from "./SocialLogin/GithubLOgin";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const pass = form.password.value;
    const image = form.image.files[0]

    //1. send image data to imgbb
    const photoURL = await handleImageUpload(image)



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
       await saveUser({ ...result?.user, displayName: name ,photoURL })


      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Something went wrong. Please try again!",
        confirmButtonText: "Try Again",
      });
    }
  };

  // dynamic title
  if (location.pathname === "/register") {
    document.title = "Pawlogue | Register";
  }

  return (
    <div className="pt-10 px-5">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-14
       text-lBtn dark:text-dBtn text-center">
        Registration Form
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0">
        <div className="w-96 lg:w-1/3">
          <Lottie animationData={reg} loop={true} />
        </div>
        <div className="flex-col w-full lg:w-1/3">
          <div className="bg-lCard dark:bg-dCard w-full max-w-lg p-8 md:ml-32 lg:ml-0
           shadow-xl rounded-lg">
            <form onSubmit={handleSignUp} className="space-y-6 mx-auto w-full">
              {/* Name Field */}
              <div>
                <label className="label">
                  <span className="label-text text-xl dark:text-ivory font-bold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full py-3 px-4 bg-lCard dark:bg-dCard rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="label">
                  <span className="label-text text-xl dark:text-ivory font-bold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full py-3 px-4 bg-lCard dark:bg-dCard rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Photo URL Field */}
              <div>
                <label className="label">
                  <span className="label-text text-xl dark:text-ivory font-bold">
                  Select Image:
                  </span>
                </label>
                <input
                   
                    type='file'
                    id='image'
                    name='image'
                    accept='image/*'
                  className="input input-bordered w-full py-3 px-4 bg-lCard dark:bg-dCard rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="label">
                  <span className="label-text text-xl dark:text-ivory font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full py-3 px-4 bg-lCard dark:bg-dCard rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className=" w-full  rounded-md
                  font-semibold px-5 py-2  bg-lBtn dark:bg-dBtn
                  text-sm lg:text-base "
                  >
                  Register
                </button>
              </div>

              {/* Already Have Account */}
              <h2 className="text-lg mt-3 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-lBtn dark:text-ivory font-extrabold">
                  Log in
                </Link>
              </h2>
            </form>

            <h2 className="text-center font-bold text-xl italic"> OR</h2>
            <div className="text-center border-b-2 border-dashed pb-3 dark:opacity-50  dark:text-ivory ">
             
            </div>
            <hr className="pb-3 opacity-0" />

            {/* Google Sign-In Button */}
            <GoogleLogin></GoogleLogin>

            <GithubLOgin></GithubLOgin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
