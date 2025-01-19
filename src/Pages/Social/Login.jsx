// import React from 'react';

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import log from "../../assets/lottie/login.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import GoogleLogin from "./SocialLogin/GoogleLogin";
import GithubLOgin from "./SocialLogin/GithubLOgin";




const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const { signIn} = useContext(AuthContext)
  
    
  
    // Email Password Signin
    const handleSignIn = async e => {
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const pass = form.password.value
      
      try {
        //User Login
        await signIn(email, pass)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true })
      } catch {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Something went wrong. Please try again!',
          confirmButtonText: 'Try Again',
        });
      }
    }
    

      // dynamic title

  if(location.pathname==='/login')
        
      { document.title= 'Pawlogue | Login' }

    return (
      <div className="pt-20 px-5">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-10 text-primary dark:text-ivory text-center">
        Login Form
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0">
        <div className="w-80 lg:w-1/3">
          <Lottie animationData={log} loop={true} />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="card bg-lCard dark:bg-dCard w-full max-w-lg shrink-0 shadow-2xl shadow-primary rounded-lg p-8">
            <form onSubmit={handleSignIn} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl text-gray-600 dark:text-ivory">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered w-full bg-lCard dark:bg-dCard focus:outline-none focus:ring-2 focus:ring-primary rounded-md py-3 px-4"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl text-gray-600 dark:text-ivory">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered w-full bg-lCard dark:bg-dCard focus:outline-none focus:ring-2 focus:ring-primary rounded-md py-3 px-4"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-xl text-gray-500 dark:text-ivory">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary w-full py-3  font-bold text-xl rounded-md">
                  Login
                </button>
              </div>

              <h2 className="text-lg mt-3 text-center">
                No account yet?{" "}
                <Link to="/register">
                  <span className="text-primary dark:text-ivory text-2xl font-extrabold flex items-center gap-2 justify-center">
                    <FaLongArrowAltRight /> Register
                  </span>
                </Link>
              </h2>
            </form>

            <div className="divider text-primary dark:text-ivory font-bold text-xl">OR</div>

            <GoogleLogin />
            <GithubLOgin></GithubLOgin>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;