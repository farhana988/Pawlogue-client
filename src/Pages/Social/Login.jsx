import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import log from "../../assets/lottie/login.json";
import AuthForm from "../../Components/form/AuthForm";
import usePageTitle from "../../hooks/usePageTitle";
import { swalAlert } from "../../utils/swalAlert";
import AdminLogin from "./SocialLogin/AdminLogin";

const Login = () => {
  const navigate = useNavigate();
  const from = location?.state || "/";
  const { signIn } = useContext(AuthContext);

  // Email Password Signin
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    try {
      //User Login
      await signIn(email, pass);
      swalAlert({ type: "success", title: "Login Successful" });
      navigate(from, { replace: true });
    } catch {
      swalAlert({
        type: "error",
        title: "Login Failed",
      });
    }
  };

  // dynamic title
  usePageTitle("Login");

  return (
    <div className="pt-10 px-5">
      <h2
        className="text-3xl md:text-4xl font-semibold mb-14 
        text-lBtn dark:text-dBtn text-center"
      >
        Login Form
      </h2>

      <div
        className="flex flex-col lg:flex-row justify-center items-center space-y-10
       lg:space-y-0 "
      >
        <div className="w-80 lg:w-1/3 ">
          <Lottie animationData={log} loop={true} />
        </div>
        <div className="w-full lg:w-2/3 ">
          <AuthForm
            onSubmit={handleSignIn}
            altLinkText="No account yet?"
            altLinkPath="/register"
            altLinkCTA="Register"
          />
        </div>
      </div>

      {/* Admin Login Button */}
      <AdminLogin redirectTo={from} />
      {/* admin login */}
    </div>
  );
};

export default Login;
