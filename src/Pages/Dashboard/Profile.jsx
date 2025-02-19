import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Container from "../../Components/Reusable/Container";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen">
        <div className="   p-6 text-center">
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt="Profile"
            className="w-32 md:w-52 lg:w-96 h-32 md:h-52 lg:h-96 rounded-full mx-auto mb-4 border-4
            "
          />
          <h2 className="text-xl lg:text-4xl  ">
            <span className="font-semibold text-2xl lg:text-5xl  ">Name:</span>
           {user?.displayName || "User Name"}
          </h2>
          <p className="mb-4 text-xl lg:text-4xl">
           <span className="font-semibold text-2xl lg:text-5xl "> Email:</span>
           {user?.email || "user@example.com"}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
