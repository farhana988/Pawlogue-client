import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/images/google-logo.png";
import { saveUser } from "../../../api/utils";
import { swalAlert } from "../../../utils/swalAlert";

const GoogleLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle();
      await saveUser(data?.user);
      swalAlert({
        type: "success",
        title: "Login Successful",
      });
      navigate("/");
    } catch {
      swalAlert({
        type: "error",
        title: "Google Login Failed",
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
