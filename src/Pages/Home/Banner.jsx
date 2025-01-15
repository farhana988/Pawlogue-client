import { Carousel } from "flowbite-react";
import slide1 from "../../assets/slides/slide1.jpg";
import slide2 from "../../assets/slides/slide2.jpg";
import slide3 from "../../assets/slides/slide3.jpg";
import slide4 from "../../assets/slides/slide4.jpg";

const Banner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
      <Carousel slideInterval={5000}>
        <div className="relative">
          <img
            src={slide1}
            alt="Adopt a Pet"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black">
            <h2 className="text-3xl font-bold">Find Your Forever Friend</h2>
            <p className="mt-2 text-lg">
              Join us in our mission to connect loving families with pets in
              need of a home.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={slide2}
            alt="Adopt a Pet"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black">
            <h2 className="text-3xl font-bold">Make a Difference</h2>
            <p className="mt-2 text-lg">
              Your next best friend is waiting for you. Start your adoption
              journey today!
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={slide3}
            alt="Adopt a Pet"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black">
            <h2 className="text-3xl font-bold">Give Love, Get Love</h2>
            <p className="mt-2 text-lg">
              Help us create lasting bonds between pets and their forever
              families.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={slide4}
            alt="Adopt a Pet"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black">
            <h2 className="text-3xl font-bold">Adopt, Don’t Shop</h2>
            <p className="mt-2 text-lg">
              Join our movement to give pets a second chance at happiness.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={slide1}
            alt="Adopt a Pet"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-black">
            <h2 className="text-3xl font-bold">Ready to Meet Your New Pet?</h2>
            <p className="mt-2 text-lg">
              Browse through our adoption listings and find your perfect match
              today!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
