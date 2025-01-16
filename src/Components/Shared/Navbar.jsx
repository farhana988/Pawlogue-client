import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const links = (
    <>
      <a
        href="/"
        className="text-lg font-medium hover:text-gray-300 transition"
      >
        Home
      </a>
      <a
        href="/"
        className="text-lg font-medium hover:text-gray-300 transition"
      >
        Pet Listing
      </a>
      <a
        href="/"
        className="text-lg font-medium hover:text-gray-300 transition"
      >
        Donation Campaigns
      </a>
    </>
  );

  return (
    <header className=" text-black dark:text-white  shadow-md sticky top-0 z-10">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          {/* website logo */}
          <Link to={'/'}>
           <img 
           className="w-10 lg:w-16"
            src={logo} alt="" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {links}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Displayed when the user is logged in */}
          {user ? (
            <div className="relative">
              {/* Avatar */}
              <img
                className="rounded-full cursor-pointer w-8 h-8 object-cover"
                referrerPolicy="no-referrer"
                src={user.photoURL ? user.photoURL : "avatarImg"} // Default image
                alt="profile"
                onClick={handleDropdownToggle}
              />

              {/* Dropdown Menu for user options (Dashboard, Logout) */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 text-black dark:text-white  shadow-lg rounded-md">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                  >
                    Dashboard
                  </Link>
                  <div
                    onClick={logOut}
                    className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-200"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-lg font-medium hover:text-gray-300 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={handleToggleMenu}
            className="text-black dark:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col  text-black dark:text-white  py-4 px-6 space-y-4">
          {links}

          {/* Mobile User Links */}
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="block text-lg font-medium py-2 hover:bg-gray-200"
              >
                Dashboard
              </Link>
              <div
                onClick={logOut}
                className="block text-lg font-medium py-2 cursor-pointer hover:bg-gray-200"
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-lg font-medium py-2 hover:bg-gray-200"
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
