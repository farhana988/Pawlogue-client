import { ReactTyped } from "react-typed";
import Heading from "../Reusable/Heading";
import bg from "../../assets/images/about.png";

const AboutUs = () => {
  return (
    <div>
      <div
        className="relative bg-center bg-fixed pb-20"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-ivory bg-opacity-40
         dark:bg-dCard dark:bg-opacity-60"
        ></div>

        <div className="relative container mx-auto text-center p-8 rounded-lg">
          <Heading title={"About Us"}></Heading>
          <p
            className="text-xl xl:text-2xl text-gray-800 dark:text-gray-300 mb-4 md:px-20
            font-bold"
          >
            <ReactTyped
              strings={[
                "We are a passionate team working to connect loving families with pets in need of a home. Our platform makes pet adoption easy and accessible. Whether you are looking for a cat, dog, rabbit, or other pets, our goal is to help animals find their forever homes. ",
              ]}
              typeSpeed={30}
              backSpeed={50}
              backDelay={1000}
              startDelay={100}
              showCursor={true}
            />
          </p>
          <p className="lg:text-lg  text-gray-700 dark:text-gray-400 font-semibold">
            <ReactTyped
              strings={[
                "Together, we can make the world a better place for pets and their owners!",
              ]}
              typeSpeed={40}
              backSpeed={50}
              backDelay={1000}
              startDelay={13000}
              showCursor={true}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
