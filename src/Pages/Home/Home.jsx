import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import PawCareTips from "./PawCareTips/PawCareTips";
import PetsCategory from "./PetsCategorySection/PetsCategory";
import SuccessStories from "./SuccessStories/SuccessStories";
import Volunteer from "./Volunteer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PetsCategory></PetsCategory>
      <CallToAction></CallToAction>
      <SuccessStories></SuccessStories>
      <PawCareTips></PawCareTips>
      <AboutUs></AboutUs>
      <Volunteer></Volunteer>
    </div>
  );
};

export default Home;
