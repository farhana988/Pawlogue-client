import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import Navbar from "../Components/Shared/Navbar";

const DashboardLayout = () => {
  const location = useLocation()
    // dynamic title
    if (location.pathname === `/dashboard`) {
      document.title = "Pawlogue | dashboard";
    }
  
  return (
    <>
      <Navbar></Navbar>
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
