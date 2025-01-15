import Container  from "../../Components/Reusable/Container";


const AboutUs = () => {
    return (
       <Container>
         <div className="py-12 ">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-xl text-gray-700 mb-4">
                We are a passionate team working to connect loving families with pets in need of a home.
                Our platform makes pet adoption easy and accessible. Whether you are looking for a cat, dog, rabbit, or other pets,
                our goal is to help animals find their forever homes.
            </p>
            <p className="text-lg text-gray-600">Together, we can make the world a better place for pets and their owners!</p>
        </div>
    </div>
       </Container>
    );
};

export default AboutUs;