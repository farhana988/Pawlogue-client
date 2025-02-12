import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  const location = useLocation();
  // dynamic title
  if (location.pathname === `/dashboard`) {
    document.title = "Pawlogue | dashboard";
  }

  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
