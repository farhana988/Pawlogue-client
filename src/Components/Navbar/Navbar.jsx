import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../Shared/ThemeToggle";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/images/logo.png";
import paw from "../../assets/images/paw.png";
import NavLinkItem from "./NavLinkItem";
import UserDropdown from "./UserDropdown";
import MobileMenu from "./MobileMenu";

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
      {/* Home */}
      <NavLinkItem to="/" label="Home" />
      {/* Pet Listing */}
      <NavLinkItem to="/petListing" label="Pet Listing" />
      {/* Donation Campaigns */}
      <NavLinkItem to="/donationCampaigns" label="Donation Campaigns" />
      {/* Book a Vet */}
      {user && <NavLinkItem to="/bookVet" label="Book a Vet" />}
    </>
  );
  
  return (
    <header
      className=" text-black dark:text-white  backdrop-blur-xl bg-ivory/50 
    dark:bg-dCard shadow-md sticky top-0 z-50"
    >
      <nav
        className="max-w-screen-xl xl:max-w-full xl:px-24 mx-auto px-5 py-2 
      flex items-center justify-between "
      >
        {/* Logo */}
        <div className="text-2xl flex justify-center items-center gap-2 font-semibold">
          <Link to="/" className="flex items-center gap-2">
            {/* Website Logo */}
            <img className="w-10 xl:w-14" src={logo} alt="Pawlogue Logo" />
            {/* Name */}
            <div className="text-nav dark:text-ivory font-snow lg:flex gap-4 relative items-center justify-center hidden">
              <span>Pa</span>
              <img
                className="w-12 -top-2 left-4 object-cover absolute -rotate-12"
                src={paw}
                alt="Paw"
              />
              <span>logue</span>
            </div>
          </Link>
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
          {links}

          {/* User Dropdown */}
          {user ? (
            <UserDropdown
              user={user}
              logOut={logOut}
              isDropdownOpen={isDropdownOpen}
              handleDropdownToggle={handleDropdownToggle}
            />
          ) : (
            <Link
              to="/login"
              className="font-semibold px-5 py-2 rounded-full text-sm lg:text-base bg-lBtn dark:bg-dBtn transition"
            >
              Login
            </Link>
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
      <MobileMenu
        isMenuOpen={isMenuOpen}
        links={links}
        user={user}
        logOut={logOut}
      />
    </header>
  );
};

export default Navbar;
