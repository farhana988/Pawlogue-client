import Heading from "../Reusable/Heading";
import SmCard from "../card/SmCard";

const sponsorshipLevels = [
  {
    title: "Platinum Sponsor",
    description:
      "Make a big impact with a donation that supports our programs and events.",
  },
  {
    title: "Gold Sponsor",
    description:
      "Your support helps us continue our rescue and adoption efforts.",
  },
  {
    title: "Silver Sponsor",
    description: "Contribute to pet welfare and help us raise awareness.",
  },
  {
    title: "Bronze Sponsor",
    description:
      "Even a small contribution helps provide care and shelter for pets in need.",
  },
  {
    title: "Friend Sponsor",
    description:
      "A meaningful way for individuals to show their support and help us provide daily care for rescued animals.",
  },
];

const CorporateSponsorships = () => {
  return (
    <div>
      <Heading
        title="Corporate Sponsorships"
        subtitle={
          "Partner with us and make a difference in the lives of animals in need."
        }
      />
      <div className="text-center">
        <p className="text-lg mb-4"></p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-6">
          {sponsorshipLevels.map((sponsor, index) => (
            <SmCard
              key={index}
              title={sponsor.title}
              description={sponsor.description}
              buttonText="Become a Sponsor"
              buttonLink="/contact"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateSponsorships;
