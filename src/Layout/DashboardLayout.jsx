import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 transition-all duration-300">
        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
