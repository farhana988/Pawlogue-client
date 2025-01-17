import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

    
    
        {/* Page Content */}
        <div className="">
          <Outlet />
        </div>
      </div>
  
  );
};

export default DashboardLayout;
