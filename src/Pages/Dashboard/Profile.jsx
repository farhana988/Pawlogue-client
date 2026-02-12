import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 text-center space-y-4">
        <img
          src={user?.photoURL || "/default-avatar.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto 
          border-4  "
        />
        <h2 className="text-xl">
          <span className="font-semibold text-2xl "> Name:</span>
          {""} {user?.displayName || "User Name"}
        </h2>
        <p className="text-xl">
          <span className="font-semibold text-2xl  "> Email:</span>
          {""} {user?.email || "user@example.com"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
