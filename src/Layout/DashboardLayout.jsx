import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import usePageTitle from "../hooks/usePageTitle";
import Container from "../Components/Reusable/Container";

const DashboardLayout = () => {
  // dynamic title
  usePageTitle("dashboard");

  return (
    <>
      <div className="flex min-h-screen max-w-[1600px] mx-auto shadow-2xl">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default DashboardLayout;
