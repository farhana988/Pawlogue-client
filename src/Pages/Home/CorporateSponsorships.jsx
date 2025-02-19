import { Link } from "react-router-dom";
import Container from "../../Components/Reusable/Container";
import Heading from "../../Components/Reusable/Heading";

const sponsorshipLevels = [
  {
    title: "Platinum Sponsor",
    description: "Make a big impact with a donation that supports our programs and events.",
  },
  {
    title: "Gold Sponsor",
    description: "Your support helps us continue our rescue and adoption efforts.",
  },
  {
    title: "Silver Sponsor",
    description: "Contribute to pet welfare and help us raise awareness.",
  },
  {
    title: "Bronze Sponsor",
    description: "Even a small contribution helps provide care and shelter for pets in need.",
  },
];

const CorporateSponsorships = () => {
  return (
    <Container>
    <Heading title="Corporate Sponsorships"
    subtitle={'Partner with us and make a difference in the lives of animals in need.'} />
    <div className="text-center">
      <p className="text-lg mb-4">
        
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        {sponsorshipLevels.map((sponsor, index) => (
          <div key={index} className="bg-lCard dark:bg-dCard shadow-lg rounded-lg p-3 lg:p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="lg:text-xl font-semibold mb-4">{sponsor.title}</h3>
              <p className="mb-4 text-xs">{sponsor.description}</p>
            </div>
            <button className="font-semibold px-5 py-2  rounded-tr-3xl rounded-bl-3xl rounded-lg
                text-xs lg:text-base 
               bg-lBtn dark:bg-dBtn transition transform hover:scale-105">
              <Link to="/contact"> Become a Sponsor  </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  </Container>
  );
};

export default CorporateSponsorships;
