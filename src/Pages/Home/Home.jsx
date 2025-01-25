import { useLocation } from "react-router-dom";
import AboutUs from "./AboutUs";
import CallToAction from "./CallToAction";
import PawCareTips from "./PawCareTips/PawCareTips";
import PetsCategory from "./PetsCategorySection/PetsCategory";
import SuccessStories from "./SuccessStories/SuccessStories";
import Banner from "./banner/Banner";
import Volunteer from "./Volunteer";

const Home = () => {
  const location = useLocation();

  // dynamic title
  if (location.pathname === "/") {
    document.title = "Pawlogue | Home";
  }


  return (
    <div>
      <Banner></Banner>
      <PetsCategory></PetsCategory>
      <CallToAction></CallToAction>
      <AboutUs></AboutUs>
      <SuccessStories></SuccessStories>
      <PawCareTips></PawCareTips>
      <Volunteer></Volunteer>
    </div>
  );
};

export default Home;
