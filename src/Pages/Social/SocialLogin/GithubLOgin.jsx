import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { saveUser } from "../../../api/utils";
import Swal from "sweetalert2";
import logo from "../../../assets/images/git-logo.png";

const GithubLOgin = () => {
    const {signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();


      const handleGitSignIn = async () => {
        try {
        const data =  await signInWithGithub();
          await saveUser(data?.user)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        } catch(err) {
            console.log(err)
          Swal.fire({
            icon: "error",
            title: "GitHub Login Failed",
            text: "Something went wrong with GitHub login. Please try again!",
            confirmButtonText: "Try Again",
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