import Container from "../../Components/Reusable/Container";
import Heading from "../../Components/Reusable/Heading";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Founder",
      image: "https://i.ibb.co/3mwSZh4x/Alice-Johnson.jpg",
      bio: "Passionate animal lover and advocate for adoption.",
    },
    {
      name: "John Smith",
      role: "Program Manager",
      image: "https://i.ibb.co/5385YFz/John-Doe.jpg",
      bio: "Expert in animal welfare programs and fostering.",
    },
    {
      name: "Emily Davis",
      role: "Volunteer Coordinator",
      image: "https://i.ibb.co/4gpxhsJ0/Emily-Davis.jpg",
      bio: "Connecting volunteers with animals in need.",
    },
    {
      name: "Michael Brown",
      role: "Fundraising Manager",
      image: "https://i.ibb.co/KpknxkgD/Michael-Brown.jpg",
      bio: "Dedicated to raising funds and awareness for animal rescue efforts.",
    },
  ];





  return (
    <Container>
      <Heading title={"Meet Our Team"}></Heading>

      <div className=" text-center ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-lCard dark:bg-dCard shadow-lg rounded-lg
               overflow-hidden hover:shadow-xl  p-3 lg:p-6 space-y-1"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 lg:w-32 h-20 lg:h-32 rounded-full mx-auto"
              />
              <h3 className=" lg:text-xl font-semibold ">{member.name}</h3>
              <p className="text-sm lg:text-lg">{member.role}</p>
              <p className="text-xs lg:text-base">{member?.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MeetOurTeam;
