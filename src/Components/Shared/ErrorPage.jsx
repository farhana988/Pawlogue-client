import { NavLink } from "react-router-dom";
import "animate.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Lottie from "lottie-react";
import error from "../../assets/lottie/errorCat.json";

function ErrorPage() {
  return (
    <section
      className="error-page bg-gradient-to-r from-teal-200 via-blue-200
     to-purple-200 relative"
    >
      {/* lottie image */}
      <div
        className="w-60 md:w-80 lg:w-[600px] absolute z-20
      top-40 -left-9
      md:left-6 md:top-24
      lg:top-16  lg:left-10"
      >
        <Lottie animationData={error}></Lottie>
      </div>

      <div
        className=" flex items-center justify-center text-gray-800  min-h-screen
     px-10 md:px-28 lg:px-0"
      >
        <div
          className="text-center py-16 md:py-20 lg:py-32 
        bg-white bg-opacity-80 rounded-lg shadow-lg 
        max-w-5xl w-full animate__animated animate__fadeIn animate__delay-0.1s "
        >
          <h1
            className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 
          animate__animated animate__zoomIn
           animate__delay-1s text-teal-600"
          >
            Hmm...{" "}
          </h1>

          <p
            className="text-xs md:text-base lg:text-xl mb-6 opacity-80 animate__animated animate__fadeIn
           animate__delay-2s text-gray-900"
          >
            seems like you have lost that page in the digital void
          </p>

          <div
            className="flex justify-center items-center gap-8 animate__animated 
          animate__fadeIn animate__delay-3s"
          >
            <h2
              className="md:text-xl lg:text-3xl font-semibold opacity-90
             text-gray-500 flex 
            items-center gap-4"
            >
              Lets get you to <FaLongArrowAltRight />
            </h2>
            <span
              className="text-xl md:text-2xl lg:text-4xl font-bold
             text-teal-500 hover:text-teal-600 
            transition-all duration-300 animate__animated animate__bounceIn 
            animate__delay-4s"
            >
              <NavLink to={"/"}>Home! </NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
