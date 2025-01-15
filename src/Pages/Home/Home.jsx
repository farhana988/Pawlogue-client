import AboutUs from "./AboutUs";
import Banner from "./Banner";
import PawCareTips from "./PawCareTips/PawCareTips";
import SuccessStories from "./SuccessStories/SuccessStories";
import Volunteer from "./Volunteer";



const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <SuccessStories></SuccessStories>
        <PawCareTips></PawCareTips>
        <AboutUs></AboutUs>
        <Volunteer></Volunteer>
        </div>
    );
};

export default Home;