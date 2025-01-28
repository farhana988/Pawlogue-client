import Container from "../../Components/Reusable/Container";
import vol from "../../assets/images/vol.png"

const Volunteer = () => {
  return (
    <>
    <div className="mt-20">

    </div>
    <Container>
      <div
        className="py-5 bg-cover bg-center relative w-full h-80 lg:h-[430px]"
        style={{
          backgroundImage: `url(${vol})`,
        
        }}
      >
        {/* Optional overlay to make text more readable */}
        <div className="absolute "></div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-xl lg:text-4xl font-bold  mb-2 italic">
            Become a Volunteer
          </h2>
          <p className="text-xs lg:text-xl  mb-2 px-6 md:px-20 lg:px-40">
            Your time and support can make a big difference! Join us in giving
            pets a second chance at a better life.
          </p>
          <button className=" text-black dark:text-ivory px-6 py-2 font-semibold
           text-xs  lg:text-lg 
          rounded-tr-3xl rounded-bl-3xl rounded-lg  bg-lBtn dark:bg-dBtn
           ">
            Sign Up to Volunteer
          </button>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Volunteer;
