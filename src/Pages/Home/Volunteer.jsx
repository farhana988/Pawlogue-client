import Container from "../../Components/Reusable/Container";


const Volunteer = () => {
    return (
        <div>
            <Container>

            <div className="py-12 ">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Become a Volunteer</h2>
                <p className="text-xl text-gray-700 mb-6">
                    Your time and support can make a big difference! Join us in giving pets a second chance at a better life.
                </p>
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg text-lg hover:bg-yellow-400 transition">
                    Sign Up to Volunteer
                </button>
            </div>
        </div>
            </Container>
            
        </div>
    );
};

export default Volunteer;