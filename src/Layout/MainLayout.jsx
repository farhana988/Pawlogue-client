import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

import FooterComp from "../Components/Shared/FooterComp";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <FooterComp></FooterComp>

    </div>
  );
};

export default MainLayout;
