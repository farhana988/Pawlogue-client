
import Heading from "../../Components/Reusable/Heading";
import bg from "../../assets/images/about.png";

const AboutUs = () => {
  return (
    <div className="pt-20 container mx-auto">
    
        <div
          className="relative bg-center bg-fixed pb-20"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-ivory bg-opacity-40 dark:bg-dCard dark:bg-opacity-60"></div>

          <div className="relative container mx-auto text-center p-8 rounded-lg">
            <Heading title={"About Us"}></Heading>
            <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-300 mb-4 md:px-20
            font-bold">
              We are a passionate team working to connect loving families with
              pets in need of a home. Our platform makes pet adoption easy and
              accessible. Whether you are looking for a cat, dog, rabbit, or
              other pets, our goal is to help animals find their forever homes.
            </p>
            <p className="md:text-lg  text-gray-700 dark:text-gray-400 font-semibold">
              Together, we can make the world a better place for pets and their
              owners!
            </p>
          </div>
        </div>
    
    </div>
  );
};

export default AboutUs;
