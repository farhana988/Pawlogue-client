// import React from 'react';

import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

import logo from "../../../assets/images/google-logo.png";
import Swal from "sweetalert2";


const GoogleLogin = () => {
  const {signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: "Something went wrong with Google login. Please try again!",
        confirmButtonText: "Try Again",
      });
    }
  };
  

  return (
    
     <div className="space-y-4">
              <button
                onClick={handleGoogleSignIn}
                className="pb-8 w-full flex items-center justify-center gap-2"
              >
                <img src={logo} alt="Google" className="w-6 h-6" />
                Continue with Google
              </button>
            </div>
         
  );
};

export default GoogleLogin;
