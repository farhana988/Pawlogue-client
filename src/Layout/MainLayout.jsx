import { Outlet, useLocation } from "react-router-dom";
import FooterComp from "../Components/footer/FooterComp";
import Navbar from "../Components/Navbar/Navbar";
import Container from "../Components/Reusable/Container";
import Banner from "../Components/Home/Banner";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="max-w-[1600px] mx-auto shadow-2xl">
      <Navbar></Navbar>
      {location.pathname == "/" ? <Banner /> : ""}
      
      <Container className="min-h-screen">
        <Outlet></Outlet>
      </Container>

      <FooterComp></FooterComp>
    </div>
  );
};

export default MainLayout;
