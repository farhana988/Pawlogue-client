import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/images/logo.png"
import def from "../../assets/images/default.jpg"

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
        {/* home */}
        <NavLink
        to="/"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "active text-nav dark:text-ivory md:text-xl lg:text-2xl font-extrabold"
              : "font-medium md:text-lg lg:text-xl text-nav dark:text-ivory hover:text-[#536493] dark:hover:text-slate-300"
          }`
        }
      >
        Home
      </NavLink>

      {/*  Pet Listing */}
      <NavLink
        to="/petListing"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "active text-nav dark:text-ivory md:text-xl lg:text-2xl font-extrabold"
              : "font-medium md:text-lg lg:text-xl text-nav dark:text-ivory hover:text-[#536493] dark:hover:text-slate-300"
          }`
        }
      >
        Pet Listing
      </NavLink>

      {/* Donation Campaigns */}
      <NavLink
        to="/donationCampaigns"
        className={({ isActive }) =>
          ` ${
            isActive
              ? "active text-nav dark:text-ivory md:text-xl lg:text-2xl font-extrabold"
              : "font-medium md:text-lg lg:text-xl text-nav dark:text-ivory hover:text-[#536493] dark:hover:text-slate-300"
          }`
        }
      >
        Donation Campaigns
      </NavLink>
      
    </>
  );

  return (
    <header className=" text-black dark:text-white  backdrop-blur-xl bg-ivory/50 
    dark:bg-dCard
     shadow-md sticky top-0 z-10
    ">
      <nav className="max-w-screen-xl mx-auto px-5 lg:px-0 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl flex justify-center items-center gap-2 font-semibold">
          {/* website logo */}
          <Link to={'/'}>
           <img 
           className="w-10 lg:w-14"
            src={logo} alt="" />
          </Link>
           {/* Theme Toggle */}
       
           <ThemeToggle />
        </div>
        

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {links}

         
          {/* Displayed when the user is logged in */}
          {user ? (
            <div className="relative">
              {/* Avatar */}
              <img
                className="rounded-full cursor-pointer w-8 h-8 object-cover"
                referrerPolicy="no-referrer"
                src={user.photoURL ? user.photoURL : 
                  <><img src={def} alt="" /></>
                } // Default image
                alt="profile"
                onClick={handleDropdownToggle}
              />

              {/* Dropdown Menu for user options (Dashboard, Logout) */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 text-black dark:text-white  
                bg-ivory dark:bg-black shadow-lg rounded-md">
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
          ) : (
            <>
              <Link
                to="/login"
                className="font-semibold px-5 py-2 rounded-full
                text-sm lg:text-base 
                bg-lBtn dark:bg-dBtn transition"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
        
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
            <>
              <Link
                to="/login"
                className="block text-lg font-medium py-2 hover:bg-slate-300
                 dark:hover:bg-gray-800"
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
