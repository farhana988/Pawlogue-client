import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../../hooks/useAdmin";
import { FcHome } from "react-icons/fc";
import ThemeToggle from "../../Components/Shared/ThemeToggle";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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

        {/* logo */}  {/* name */}
        <Link to={'/'} className="flex items-center gap-2 mb-6">
          {" "}
          
          <img className="w-10 lg:w-16" src={logo} alt="" />
        
          <h2 className="lg:text-2xl font-bold ">Pawlogue </h2>
        </Link>

       
        {/* name of the dashboard */}
        <span className="lg:text-2xl font-bold text-center">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </span>

        {/* nav routes  */}
        <nav>
          <ul className="lg:space-y-4 mt-7">
            <li>
              <NavLink
                to="/dashboard/add-pet"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded text-sm lg:text-base ${
                    isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                  }`
                }
              >
                Add a Pet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-pets"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded text-sm lg:text-base ${
                    isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                  }`
                }
              >
                My Added Pets
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/create-donation"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded text-sm lg:text-base ${
                    isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                  }`
                }
              >
                Create Donation Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-donations-camp"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded text-sm lg:text-base ${
                    isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                  }`
                }
              >
                My Donations Campaigns
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-donations"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded text-sm lg:text-base ${
                    isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                  }`
                }
              >
                My Donations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/adoptionReq"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded text-sm lg:text-base ${
                    isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                  }`
                }
              >
                Adoption Request
              </NavLink>
            </li>
            {/* home */}

            <Link
              to={"/"}
              className="text-4xl md:text-5xl lg:text-6xl absolute 
                  left-10 bottom-2 z-50"
            >
              <FcHome />
            </Link>

            <span className=" absolute bottom-5 md:bottom-9 z-50">
              <ThemeToggle></ThemeToggle>
            </span>

            {/* admin pages only */}

            {isAdmin && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded text-sm lg:text-base ${
                        isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                      }`
                    }
                  >
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allPets"
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded text-sm lg:text-base ${
                        isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                      }`
                    }
                  >
                    All Pets
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allDonations"
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded text-sm lg:text-base ${
                        isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
                      }`
                    }
                  >
                    All Donations
                  </NavLink>
                </li>
              </>
            )}
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
