import AboutUs from "./AboutUs";
import Banner from "./Banner";
import SuccessStories from "./SuccessStories/SuccessStories";
import Volunteer from "./Volunteer";



const Home = () => {
    return (
        <div>
            Home 
            <Banner></Banner>
            <SuccessStories></SuccessStories>
        <AboutUs></AboutUs>
        <Volunteer></Volunteer>
        </div>
    );
};

export default Home;