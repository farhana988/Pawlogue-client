import { Outlet } from "react-router-dom";
import FooterComp from "../Components/footer/FooterComp";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto shadow-2xl">
      <Navbar></Navbar>

      <div className="min-h-screen ">
        <Outlet></Outlet>
      </div>

      <FooterComp></FooterComp>
    </div>
  );
};

export default MainLayout;
