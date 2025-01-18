import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../../hooks/useAdmin";
import { FcHome } from "react-icons/fc";
import ThemeToggle from "../../Components/Shared/ThemeToggle";
import { Link, NavLink } from "react-router-dom";

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
        className={`bg-gray-800 text-white w-64 p-4 space-y-6 fixed md:relative md:w-64 transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:h-auto ${
          isSidebarOpen ? "h-full" : "h-full"
        } z-50`}
      >
        {" "}
        <h1 className=""></h1>
        <span className="text-2xl font-bold text-center ">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </span>
        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/dashboard/add-pet"
                  className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
                }
                    
              >
                Add a Pet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-pets"
                  className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
                }
                    
              >
                My Added Pets
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="/dashboard/create-donation"
                  className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
                }
                    
              >
                Create Donation Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-donations-camp"
                  className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
                }
                    
              >
                My Donations Campaigns
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/my-donations"
                  className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
                }
                    
              >
                My Donations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/adoptionReq"
                  className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
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
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
                }
                    
                  >
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allPets"
                  className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
                }
                    
                  >
                    All Pets
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allDonations"
                  className={({ isActive }) =>
                  `block py-2 px-4 rounded ${isActive ? "bg-gray-700" : ""}`
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
