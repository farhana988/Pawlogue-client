/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import def from "../../assets/images/default.jpg";

const UserDropdown = ({ user, logOut, isDropdownOpen, handleDropdownToggle }) => {
  return (
    <div className="relative">
      {/* Avatar */}
      <img
        className="rounded-full cursor-pointer w-8 h-8 object-cover"
        referrerPolicy="no-referrer"
        src={user.photoURL ? user.photoURL : def}
        alt="profile"
        onClick={handleDropdownToggle}
      />

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 text-black dark:text-white bg-ivory dark:bg-black shadow-lg rounded-md">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-sm hover:bg-slate-300 dark:hover:bg-gray-800"
          >
            Dashboard
          </Link>
          <div
            onClick={logOut}
            className="block px-4 py-2 text-sm cursor-pointer hover:bg-slate-300 dark:hover:bg-gray-800"
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
