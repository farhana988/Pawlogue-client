import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

import { FcHome } from "react-icons/fc";
import ThemeToggle from "../../Components/Shared/ThemeToggle";

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
        <h1 className="text-2xl font-bold text-center"></h1>
        <span className="font-medium">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </span>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard/add-pet"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Add a Pet
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-pets"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                My Added Pets
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/adoption-requests"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Adoption Requests
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/create-donation"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Create Donation Campaign
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-donations-camp"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                My Donations Campaigns
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/my-donations"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                My Donations
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/adoptionReq"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Adoption Request
              </Link>
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
                  <Link
                    to="/dashboard/allUsers"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allPets"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    All Pets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allDonations"
                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                  >
                    All Donations
                  </Link>
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
