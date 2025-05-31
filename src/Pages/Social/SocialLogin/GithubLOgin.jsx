import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { saveUser } from "../../../api/utils";
import logo from "../../../assets/images/git-logo.png";
import { swalAlert } from "../../../utils/swalAlert";

const GithubLOgin = () => {
  const { signInWithGithub } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGitSignIn = async () => {
    try {
      const data = await signInWithGithub();
      await saveUser(data?.user);
      swalAlert({
        type: "success",
        title: "Login Successful",
      });

      navigate("/");
    } catch {
      swalAlert({
        type: "error",
        title: "GitHub Login Failed",
      });
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleGitSignIn}
        className="pb-8 w-full flex items-center justify-center gap-2"
      >
        <img src={logo} alt="Google" className="w-8 h-8" />
        Continue with GitHub
      </button>
    </div>
  );
};

export default GithubLOgin;
