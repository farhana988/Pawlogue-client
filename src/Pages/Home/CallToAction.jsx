import Container from "../../Components/Reusable/Container";

const CallToAction = () => {
  return (
    <Container>
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-800 mb-6">
              Give Them a Loving Home
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Adopting a pet is more than just taking in an animal; its giving
              them a second chance at life. Provide a safe, loving home to these
              adorable companions and make a positive impact.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Adopt Now
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="adopt-pet.jpg"
              alt="Adopt a pet"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CallToAction;
