/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { swalAlert } from "../../../utils/swalAlert";

const AdminLogin = ({ redirectTo = "/" }) => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const handleAdminLogin = async () => {
    try {
      await signIn("ggg@gmail.com", "123456aA");
      swalAlert({ type: "success", title: "Logged in as Admin" });
      navigate(redirectTo, { replace: true });
    } catch {
      swalAlert({ type: "error", title: "Admin Login Failed" });
    }
  };
  return (
    <div className="text-center lg:ml-[320px] xl:ml-[420px] 2xl:ml-[490px] mt-5">
      <button
        onClick={handleAdminLogin}
        className="rounded-md font-semibold px-5 py-2 bg-lBtn dark:bg-dBtn
                   text-sm lg:text-base"
      >
        Login as Admin
      </button>
    </div>
  );
};

export default AdminLogin;
