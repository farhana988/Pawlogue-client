import PetsCategory from "../../Components/Home/PetsCategory";
import CallToAction from "../../Components/Home/CallToAction";
import AboutUs from "../../Components/Home/AboutUs";
import PawCareTips from "../../Components/Home/PawCareTips";
import MeetOurTeam from "../../Components/Home/MeetOurTeam";
import CorporateSponsorships from "../../Components/Home/CorporateSponsorships";
import Volunteer from "../../Components/Home/Volunteer";
import SuccessStories from "../../Components/Home/SuccessStories";
import Banner from "../../Components/Home/Banner";
import usePageTitle from "../../hooks/usePageTitle";

const Home = () => {
  // dynamic title
  usePageTitle("Home");

  return (
    <>
      <Banner></Banner>
      <div className="container mx-auto px-5 lg:px-0">
        <PetsCategory></PetsCategory>
        <CallToAction></CallToAction>
        <AboutUs></AboutUs>
        <SuccessStories></SuccessStories>
        <PawCareTips></PawCareTips>
        <MeetOurTeam></MeetOurTeam>
        <CorporateSponsorships></CorporateSponsorships>
        <Volunteer></Volunteer>
      </div>
    </>
  );
};

export default Home;
