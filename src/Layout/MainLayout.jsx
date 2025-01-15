import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

import FooterComp from "../Components/Shared/FooterComp";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
    

      <FooterComp></FooterComp>

    </div>
  );
};

export default MainLayout;
