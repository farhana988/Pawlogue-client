/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../../../hooks/useAdmin";
import ThemeToggle from "../../Shared/ThemeToggle";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import SidebarNavLink from "./SidebarNavLink";

const userLinks = [
  { to: "/dashboard/profile", label: "Profile" },
  { to: "/dashboard/add-pet", label: "Add a Pet" },
  { to: "/dashboard/my-pets", label: "My Added Pets" },
  { to: "/dashboard/create-donation", label: "Create Donation Campaign" },
  { to: "/dashboard/my-donations-camp", label: "My Donations Campaigns" },
  { to: "/dashboard/my-donations", label: "My Donations" },
  { to: "/dashboard/adoptionReq", label: "Adoption Request" },
];

const adminLinks = [
  { to: "/dashboard/allUsers", label: "All Users" },
  { to: "/dashboard/allPets", label: "All Pets" },
  { to: "/dashboard/allDonations", label: "All Donations" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={` bg-lBtn dark:bg-dBtn dark:text-ivory 
          md:w-52 lg:w-72 p-4
           fixed md:relative  transition-all duration-300 ${
             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
           } md:translate-x-0 md:h-auto ${
          isSidebarOpen ? "h-full w-64" : "h-full w-64"
        } z-40`}
      >
        {/* logo */} {/* name */}
        <div className="flex items-center gap-2 mb-6">
          <Link to={"/"} className="flex items-center gap-2">
            <img className="w-10 lg:w-16" src={logo} alt="" />
            <h2 className="lg:text-2xl font-bold ">Pawlogue </h2>
          </Link>

          {/* theme */}
          <ThemeToggle></ThemeToggle>
        </div>
        {/* name of the dashboard */}
        <span className="text-lg lg:text-2xl font-bold text-center">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </span>
        {/* nav routes  */}
        <nav>
          <ul className="space-y-2 xl:space-y-4 mt-7">
            {userLinks.map(({ to, label }) => (
              <li key={to}>
                <SidebarNavLink to={to}>{label}</SidebarNavLink>
              </li>
            ))}

            {/* admin pages only */}
            {isAdmin &&
              adminLinks.map(({ to, label }) => (
                <li key={to}>
                  <SidebarNavLink to={to}>{label}</SidebarNavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      {/* Hamburger button for mobile */}
      <button
        onClick={toggleSidebar}
        className="text-2xl md:hidden absolute top-4 right-4 z-50"
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default Sidebar;
