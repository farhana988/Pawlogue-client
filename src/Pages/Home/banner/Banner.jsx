import { Carousel } from "flowbite-react";
import slide1 from "../../../assets/slides/slide1.jpg";
import slide2 from "../../../assets/slides/slide2.jpg";
import slide3 from "../../../assets/slides/slide3.jpg";
import slide4 from "../../../assets/slides/slide4.jpg";
import slide5 from "../../../assets/slides/slide5.webp";
import Rslide from "./Rslide";


const Banner = () => {
  return (
    <div className=" w-full">
      <Carousel slideInterval={5000}>
        <Rslide
          imageSrc={slide1}
          title="Find Your Forever Friend"
          description="Join us in our mission to connect loving families with pets in need of a home."
          buttonText="Start Adoption"
        />
        <Rslide
          imageSrc={slide2}
          title="Make a Difference"
          description="Your next best friend is waiting for you. Start your adoption journey today!"
          buttonText="Adopt Now"
        />
        <Rslide
          imageSrc={slide3}
          title="Give Love, Get Love"
          description="Help us create lasting bonds between pets and their forever families."
          buttonText="Get Involved"
        />
        <Rslide
          imageSrc={slide4}
          title="Adopt, Don’t Shop"
          description="Join our movement to give pets a second chance at happiness."
          buttonText="Learn More"
        />
        <Rslide
          imageSrc={slide5}
          title="Give Them a Home"
          description="Every pet deserves a loving family. Help us make a difference by giving them a second chance."
          buttonText="Adopt Today"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
