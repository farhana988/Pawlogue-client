import vol from "../../assets/images/vol.png";
import FillBtn from "../button/FillBtn";

const Volunteer = () => {
  return (
    <div>
      <div
        className="py-5 bg-cover bg-center relative w-full h-80 lg:h-[430px]"
        style={{
          backgroundImage: `url(${vol})`,
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold  mb-2 italic">
            Become a Volunteer
          </h2>
          <p className="text-xs lg:text-sm xl:text-base  mb-4 w-11/12 md:w-9/12 lg:w-1/2 mx-auto">
            Your time and support can make a big difference! Join us in giving
            pets a second chance at a better life.
          </p>
          <FillBtn
            text="Sign Up to Volunteer"
            link="/contact"
            additionalStyles="text-black dark:text-ivory font-semibold rounded-tr-3xl rounded-bl-3xl rounded-lg bg-lBtn dark:bg-dBtn"
          />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
