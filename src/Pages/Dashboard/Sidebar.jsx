import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

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
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>

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
                to="/dashboard/my-donations"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                My Donations
              </Link>
            </li>
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
