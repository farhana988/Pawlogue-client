import { Link } from "react-router-dom";
import Container from "../Reusable/Container";
import Heading from "../Reusable/Heading";

const WebsiteOverview = () => {
  return (
    <Container>
      <Heading title="Welcome to Pawlogue" />

      <div className="text-center mb-12">
        <p className="text-lg ">
          Our mission is to connect loving homes with furry friends in need.
          Find your perfect companion today.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-12 ">
        <div className="flex flex-col items-center  rounded-lg shadow-lg bg-lCard dark:bg-dCard p-8">
          <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
          <div className="space-y-6 text-xs lg:text-lg ">
            <p>
              <strong className="text-base lg:text-xl">
                A Wide Selection of Pets:
              </strong>{" "}
              Browse a variety of pets available for adoption including dogs,
              cats, and other small pets.
            </p>
            <p>
              <strong className="text-base lg:text-xl">
                Detailed Pet Profiles:
              </strong>{" "}
              Access detailed profiles with photos, personality traits, health
              information, and adoption history.
            </p>
            <p>
              <strong className="text-base lg:text-xl">
                Adoption Process Guidance:
              </strong>{" "}
              We support you through the adoption process, making sure you are
              ready to welcome your new pet.
            </p>
            <p>
              <strong className="text-base lg:text-xl">
                Adoption Tips and Resources:
              </strong>{" "}
              Helpful tips on pet care, training, and community events for pet
              owners.
            </p>
            <p>
              <strong className="text-base lg:text-xl">
                Support After Adoption:
              </strong>{" "}
              Our community is here for you, even after adoption, providing
              resources and advice for your new pets journey.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg bg-lCard dark:bg-dCard p-8">
          {/* Why Adopt? */}
          <h3 className="text-2xl font-semibold mb-4">Why Adopt?</h3>
          <p className="mb-6 text-sm lg:text-lg">
            Adopting a pet gives an animal a second chance at life, reduces the
            number of homeless pets, and supports ethical pet ownership.
          </p>

          {/*   Get Started Today! */}
          <div className="text-center mt-6">
            <h3 className="text-2xl font-semibold mb-4">Get Started Today!</h3>
            <p className="text-sm lg:text-lg mb-6">
              Browse our available pets, find the perfect match, and take the
              first step towards giving a loving animal a forever home.
            </p>
          </div>
          <Link
            to="/petListing"
            className="bg-lBtn dark:bg-dBtn py-2 px-6 rounded-tr-3xl rounded-bl-3xl rounded-lg text-xs lg:text-lg font-semibold transition duration-300"
          >
            Start Your Adoption Journey
          </Link>
        </div>
      </div>

      {/* Donation Campaign Section */}
      <div className="flex flex-col gap-6 mb-12 ">
        <div className="flex flex-col items-center rounded-lg shadow-lg bg-lCard dark:bg-dCard p-8">
          <h3 className="text-2xl font-semibold mb-4">Support Our Mission</h3>
          <p className="mb-6 text-sm lg:text-lg">
            Your generous donations help us continue our vital work in rescuing
            and rehoming pets in need. Every contribution makes a lasting impact
            on the lives of these animals and helps us ensure they have a
            brighter future.
          </p>
          <div className=" text-xs lg:text-lg grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            <span>
              <p>
                <strong className="text-base lg:text-xl">
                  Rescue Operations:
                </strong>{" "}
                Your donations directly fund our rescue efforts, helping us save
                pets from shelters, abuse, and abandonment.
              </p>
              <p>
                <strong className="text-base lg:text-xl">Medical Care:</strong>{" "}
                We provide medical care, vaccinations, spaying/neutering, and
                necessary treatments to ensure each pet is healthy and ready for
                adoption.
              </p>
              <p>
                <strong className="text-base lg:text-xl">
                  Emergency Rescue and Special Cases:
                </strong>{" "}
                Many animals come to us in critical need—injured, sick, or in
                dire circumstances. Your donations help provide life-saving
                surgeries, emergency treatments, and urgent care for these
                special cases.
              </p>
            </span>

            <span>
              <p>
                <strong className="text-base lg:text-xl">Pet Supplies:</strong>{" "}
                Donations help us provide food, toys, bedding, and other
                essential supplies to make pets comfortable while they wait for
                their forever homes.
              </p>
              <p>
                <strong className="text-base lg:text-xl">
                  Adoption Support:
                </strong>{" "}
                Your support helps us maintain resources for new pet owners,
                including adoption counseling and assistance, to ensure
                successful transitions.
              </p>
              <p>
                <strong className="text-base lg:text-xl">
                  Community Outreach:
                </strong>{" "}
                Your contributions enable us to host events and awareness
                campaigns that promote ethical adoption and responsible pet
                ownership.
              </p>
            </span>
          </div>

          <p className="mt-4 md:px-10 lg:px-24 text-xs lg:text-sm italic">
            Every donation, no matter the size, helps make a difference in the
            lives of countless animals. Thank you for supporting Pawlogue and
            helping us create a brighter future for pets in need!
          </p>
          <Link
            to="/donationCampaigns"
            className="bg-lBtn dark:bg-dBtn py-2 px-6 rounded-tr-3xl rounded-bl-3xl
               rounded-lg text-xs lg:text-lg font-semibold transition duration-300 mt-6"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default WebsiteOverview;
