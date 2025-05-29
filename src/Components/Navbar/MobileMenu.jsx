import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MobileMenu = ({ isMenuOpen, links, user, logOut }) => {
  return (
    isMenuOpen && (
      <div className="md:hidden flex flex-col text-black dark:text-white py-4 px-6 space-y-4">
        {links}

        {/* Mobile User Links */}
        {user ? (
          <>
            <Link
              to="/dashboard"
              className="block text-lg font-medium py-2 hover:bg-slate-300 dark:hover:bg-gray-800"
            >
              Dashboard
            </Link>
            <div
              onClick={logOut}
              className="block text-lg font-medium py-2 cursor-pointer hover:bg-slate-300 dark:hover:bg-gray-800"
            >
              Logout
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="block text-lg font-medium py-2 hover:bg-slate-300 dark:hover:bg-gray-800"
          >
            Login
          </Link>
        )}
      </div>
    )
  );
};

export default MobileMenu;
