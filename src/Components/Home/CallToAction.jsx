import Heading from "../Reusable/Heading";
import call from "../../assets/images/call-to-action.jpg";
import FillBtn from "../button/FillBtn";

const CallToAction = () => {
  return (
    <>
      <Heading title={"Call to action"}></Heading>
      <section className="">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-7 items-center px-4">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold  text-[#299173] dark:text-[#ff5959fa]  mb-6 tracking-tight">
              Give Them a Loving Home
            </h2>
            <p className="text-sm md:text-base lg:text-xl opacity-80 mb-6 leading-relaxed">
              Adopting a pet is more than just taking in an animal; its giving
              them a second chance at life. Provide a safe, loving home to these
              adorable companions and make a lasting positive impact.
            </p>
            <FillBtn text="Adopt Now" link="/petListing" />
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={call}
              alt="Adopt a pet"
              className="w-full h-72 md:h-60 lg:h-96 object-cover rounded-b-[190px] rounded-l-[190px] rounded-tr-xl
               shadow-2xl animate__animated animate__pulse animate__infinite animate__slower
         "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
